---
title: Direction controller
category: Electronics
tags: [software, hardware, electronics]
created: 2024-06-03
---

The direction controller is a small PCB used as a driver interface to
select drive direction. It does not contain any logic, just enough to
make 3 buttons and 3 LEDs available to the driver:

- Forward
- Neutral
- Reverse

The button state is communicated to the [[vcm]] which controls
the state of the LEDs.

# Hardware

The hardware is created using [KiCad](https://www.kicad.org) and can be
found in the
[vehicle-controller](https://github.com/aphid-ev/vehicle-controller/tree/main/hardware/aphid-direction-controller)
GitHub repository.

## PCB

*TBD.*

## Connectors

The direction controller has four 4-pin JST-PH connectors:

- Connector housing: **JST PHR-4**
- Crimp contact: **JST SPH-002T-P0.5S**

### Main connector

| Pin | Function |
| --- | --- |
| 1 | CAN High |
| 2 | CAN Low |
| 3 | +12 V (Ignition) |
| 4 | GND |

### Button connectors (×3)

The button connector has the same pinout for forward, neutral and reverse:

| Pin | Function |
| --- | --- |
| 1 | LED Anode |
| 2 | LED Cathode |
| 3 | Button |
| 4 | Button |

The current-limiting resistors on the PCB are sized to provide ~10 mA to
the following LED forward voltages. If different LEDs are used, the
resistors **R?**, **R?** and **R?** may need to be replaced.

- Forward: **2.8 V** *(blue)*
- Neutral: **3.5 V** *(white)*
- Reverse: **2.8 V** *(blue)*

# Firmware

The firmware for the STM32G431CB is written in Rust using
[Embassy](https://embassy.dev) and is very simple. It listens to a *TBD*
frame from *TBD* CAN containing the LED state, and responds with a frame
containing the state of the push buttons.

The firmware lives in the
[vehicle-controller](https://github.com/aphid-ev/vehicle-controller/tree/main/firmware/direction-app)
GitHub repository.
