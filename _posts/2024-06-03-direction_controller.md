---
title: Direction controller
categories: [Electronics]
tags: [software, hardware, electronics]
author: lhelge
---

The direction controller is a small PCB used as a driver interface to select drive direction. It does not contain any logic, just enough to make 3 buttons and 3 LEDs available to the driver:
- Forward
- Neutral
- Reverse

The button state is communicated to the [VCM](/tags/vcm) which control the state of the LEDs.

# Hardware
The hardware is crated using [KiCad](https://www.kicad.org) and can be found in in the [vehicle controller GitHub repository](https://github.com/aphid-ev/vehicle-controller/tree/main/hardware/aphid-direction-controller)

## PCB
*TBD*

## Connectors 
The direction controller has four 4-pin JST-PH connectors

- Connector housing: **JST PHR-4**
- Crimp contact: **JST SPH-002T-P0.5S**

### Main connector

Pin | Function
--- | ---
1 | CAN High
2 | CAN Low
3 | +12 V (Ignition)
4 | GND

### 3 x Button connectors
Thee button connector has the same pinout for:
- Forward button
- Neutral button
- Reverse button

Pin | Function
--- | ---
1 | LED Anode
2 | LED Cathode
3 | Button
4 | Button

The current limiting resistors on the PCB is adapted to provide ~10 mA to the following LED forward voltages. If any other LEDs are used, the resistors **R?**, **R?** and **R?** may need to be replaced with other values.

- Forward: **2.8 V** *(blue)*
- Neutral: **3.5 V** *(white)*
- Forward: **2.8 V** *(blue)*

# Firmware
The firmware for the STM32G431CB is written in rust using [Embassy](https://embassy.dev) and is very simple. It listens to the *TBD* frame from *TBD* CAN containing state for the LEDs and response with a frame containing the state of the pushbuttons.

The firmware can also be found in the [vehicle controller GitHub repository](https://github.com/aphid-ev/vehicle-controller/tree/main/firmware/direction-app)