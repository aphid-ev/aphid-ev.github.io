---
title: VCM Requirements
categories: [Electronics]
tags: [vcm, software, safety, hardware, electronics]
author: lhelge
mermaid: true
---

This post will try to collect the main requirements on the [DIY VCM](/tags/vcm). Even though it likely never will be formally tested, it is a good thing to get a grasp of what is needed before finalizing the design. This is also great to document for future reference.

# Environmental
The VCM will be mounted inside the drivers compartment, though it still needs to be fairly rugged. Since the car will be driven in Sweden, low temperatures is more likely than really high, though it may become a nice-weather-car.

## Ingress protection
The VCM shall have **IP67** ingress protection

## Temperature
The VCM shall be designed for an operating temperature of **-40 to +60 °C**.

## Shock and vibration
*TBD*

## Condensation
The enclosure shall be fitted with a GoreTex breather membrane to prevent internal condensation

# Electrical
These are the electrical requirements on the VCM

## Supply voltage
Th VCM shall be designed for a nominal voltage of **12 VDC** but be fully operational between **8 to 18 VDC**

## Supplies
The VCM shall have 3 different supply rails with the following current consumption.

### Constant
- Operational: **100 mA**
- Sleep: **0.1 mA**

### Ignition
- Operational: **10 A**
- Sleep: *disconnected*

### Crank
- Momentarily: **< 10 mA** (Just digital input)

## High side driver
The high side driver shall be able to supply **3 A** continously, and **10 A** during inrush events, from the ignition input.

## Low side drivers

# Mechanical

## Enclosure
The VCM shall use the Cinch MODice ME-MX enclosure with breather vent.

Part nbr: **581-01-30-075**

## Connectors
The VCM shall use The Cinch ModICE header with two 12-pin Molex MX150 connectors

Part nbr: **581-01-24-011**

The matching wire harness connectors are
- Keying A (black): Molex MX120 **33472-1201**
- Keying B (light gray): Molex MX120 **33472-1202**

With the pin terminals:
- 14-16 AWG (1.5-2.5 mm<sup>2</sup>): **33012-2001**
- 18-20 AWG (0.5-0.75 mm<sup>2</sup>): **33012-2002**
- 22 AWG (0.34 mm<sup>2</sup>): **33012-2003**


## Mounting
The VCM shall be mounted using **2 x M6** screws with washers. The discance between the mounting holes is **101.6 mm** *(4")*

# I/O
The connectors have the following pinout

Pin | Keying A (black) | Keying B (light gray)
--- | --- | ---
1 | *TBD* | *TBD*
2 | *TBD* | *TBD*
3 | *TBD* | *TBD*
4 | *TBD* | *TBD*
5 | *TBD* | *TBD*
6 | *TBD* | *TBD*
7 | *TBD* | *TBD*
8 | *TBD* | *TBD*
9 | *TBD* | *TBD*
10 | *TBD* | *TBD*
11 | *TBD* | *TBD*
12 | *TBD* | *TBD*

## CAN
There are two CAN busses available on the device designed for 500 kbit/s ISO 11898-1 communication.

### CAN 1 - EV-CAN
This is the main CAN-bus and the only one that is monitored by the safety monitor. This should be used for all safety related funtionality e.g. torque request. More info on the [EV-CAN](/posts/nissan_leaf_ev-can) post.

### CAN 2 - Auxillary
*TBD*, maybe to the instrument cluster and lighting control?

## High side driver
The high side driver is controlled by the [VCM monitor application](/posts/vcm_monitor_firmware), it is sourced by the [ignition](#ignition) supply and will be enabled as long as no critical fault has been detected. This should drive the high side of both the main and pre-charge contactors.

## Low side drivers
The low side drivers are controlled by the [VCM main application](/posts/vcm_main_firmware) alowing each contactor to be controlled individually as long as the high side driver is enabled.

### Pre-charge
The pre-charge output is used to control a smaller contactor in series with a high power resistor that can charge the inverter capacitor bank before closing the main contactor.

### Top contactor
### Bottom contactor

## Accelerator pedal
The VCM shall be able to interface a dual channel electrical accelerator pedal based on 5V Hall effect sensors.

# Functional
These are the high level functional requirements, see posts on [VCM main application](/posts/vcm_main_firmware) and [VCM monitor application](/posts/vcm_monitor_firmware) for more detailed functional requirements.

## Safety
The VCM shall have a separate monitoring CPU controlling the high side driver. This will enable releasing the main contactor in case of a serious fault condition. See the posts on overall [Safety Architecture](/posts/safety_architecture) and the [VCM monitor application](/posts/vcm_monitor_firmware) for more details.

## Functional States
The VCM has the following functional states:

```mermaid
stateDiagram-v2
    Sleep --> Ready: Ignition on
    Ready --> Drive: Crank
    Drive --> Ready: Ignition off
    Ready --> Sleep: 15 min
    Sleep --> Charge: Charger connected
    Charge --> Ready: Charger disconnected
    Drive --> Fault: Safety critical fault
    Charge --> Fault: Safety critical fault
    Fault --> Ready: Reset
```

### Sleep
During sleep the main DC/DC power supply inside the VCM is switched off all all electronic circuitry is unpowered, the only way to wake the VCM from sleep is to supply 12V power to the [ignition](#ignition) pin.

### Ready

### Drive

### Charge


## Wakeup
The VCM shall wake on a rising flank on the **Ignition** supply.

## Sleep
The VCM shall be awake for **15 minutes** after a falling flank on the **Ignition** supply. If charging is active the VCM shall stay awake until 15 minuters after disconnection 

## Reset
If there is a fault active that disabled the high side driver, the **crank** signal shall reset both the [VCM main application](/posts/vcm_main_firmware) and the [VCM monitor application](/posts/vcm_monitor_firmware).