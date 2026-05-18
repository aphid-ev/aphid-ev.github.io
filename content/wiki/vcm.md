---
title: DIY VCM
category: Components
tags: [canbus, vcm, electrical, software]
created: 2024-05-20
---

While re-using all of the power electronics from the donor cars makes
sense, the plan is to design a custom version of what Nissan call a VCM
(Vehicle Control Module) — and the same nomenclature is used here. The
VCM is the control unit that manages all the main functions of the
vehicle and coordinates the other components.

The easiest way to follow development is through the
[vehicle-controller](https://github.com/aphid-ev/vehicle-controller)
GitHub repository, which contains both the hardware and the firmware.

See also: [[VCM requirements]] for the design targets.

# Safety

Since this VCM controls a car moving at high speeds and interacts with an
electrical system containing dangerous voltages, safety is very important.
There are two major things that need to be managed by the safety system:

- Traction torque
- High voltages

See [[safety]] for the full system view.

## Safe state

In case of a critical failure, the car is taken to a safe state by
disconnecting the high voltage supply through the battery contactors and
removing the 12 V logic feed to the traction inverter. This prevents the
motor/inverter from producing torque and removes the risk of electrical
injury.

## VCM safety design

The VCM has dual microcontrollers: one runs the main application, the
other monitors critical signals and verifies that the main application is
executing as expected. The two communicate over a serial link.

- Both MCUs read and cross-check the dual-channel input from the
  accelerator pedal.
- The monitor MCU has read access to the EV-CAN bus and verifies the
  torque request from the main application is reasonable.
- The monitor MCU controls the high-side switch for the precharge and
  main contactors and the inverter logic power.
- The main MCU controls the low-side switch of the precharge and main
  contactors.
- The main MCU sends watchdog counters over the serial port.
- The monitor MCU can disable the EV-CAN transceiver and, as a final
  option, reset the main MCU.

# Hardware

The PCB is created in the open source [KiCad](https://www.kicad.org/)
software.

## Enclosure

The enclosure is the pretty robust Cinch ModICE ME-MX 24. See
[[VCM requirements#enclosure]] for part numbers.

## Microcontrollers

The main firmware runs on an STM32F405RB microcontroller, with a smaller
STM32F091CC monitoring it.

## I/O {#io}

The VCM has two 12-pin Molex MX-150 connectors:

| Pin | Left | Right |
| --- | --- | --- |
| 1 | GND | GND |
| 2 | CAN1 Low | CAN2 Low |
| 3 | CAN1 High | CAN2 High |
| 4 | BRAKE1 | *TBD* |
| 5 | BRAKE2 | *TBD* |
| 6 | +12 V IN | CRANK |
| 7 | GND | GND |
| 8 | *TBD* | High side out |
| 9 | EXT 5V | EXT 5V |
| 10 | ACC1 | DIR_R2 |
| 11 | ACC2 | DIR_R1 |
| 12 | +12 V IN | IGNITION |

See [[VCM requirements#i-o]] for the canonical connector pinout.

### CAN1 (high/low)

Used to communicate with [[EV-CAN]] nodes. Available
to both the main and the monitor microcontroller.

### CAN2 (high/low)

Used to communicate with auxiliary CAN nodes like the instrument cluster.
Only available to the main controller.

### High side out

High side driver providing +12 V to the high side of the main and
precharge high voltage contactors.

### +12 V IN

Main feed from the 12 V battery.

### Ignition

+12 V when the ignition switch is in the ignition position.

### Crank

+12 V when the ignition switch is in the crank position.

### Accelerator input (ACC1/ACC2)

Dual channel input from the accelerator pedal.

### Brake input (BRAKE1/BRAKE2)

Dual channel input from the brake sensor.

### Direction input (DIR_F1/DIR_F2 and DIR_R1/DIR_R2)

Dual channel input from the [[direction]]. Forward/Reverse
momentary switches mounted on the gear lever.

### External 5 V feed

5 V output to accelerator pedal hall effect sensors and the momentary
switches on the brake pedal and direction selector.

# Firmware

The firmware is developed in [Rust](https://www.rust-lang.org/), both
because it provides a lot of nice safety features and because it is
pleasant to work with.

## Bootloader

At some point a CAN-based bootloader will be created for both
microcontrollers so they can be updated without opening the enclosure.
One option is to use the built-in ROM bootloader in the STM32 parts —
they are wired so that the ROM bootloader CAN bus is on CAN1 and CAN2
respectively.

## Monitor application

The monitoring microcontroller runs a fairly simple application that
monitors the main application and can disable the high voltage contactors
if something goes wrong. See [[Monitor firmware]].

## Main application

See [[Main firmware]].

# Notes

High side drivers: ST VNQ9025AT

- Waterpump relay
- Cooling fan relay
- Brake lights
- Reverse lights
