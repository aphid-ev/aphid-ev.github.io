---
title: Nissan Leaf PDM (Power Delivery Module)
category: Components
tags: [canbus, leaf, pdm, electrical, software]
created: 2024-05-19
---

The PDM is the topmost unit on the Nissan Leaf drive stack. It manages
power delivery for all high voltage components, contains the on-board
charger and the 12 V DC/DC converter that keeps the 12 V battery charged.

This page collects information on the mechanical, electrical and software
interfaces of the unit.

# Electrical interface

## Signal connector

The main data/signal connector on the PDM is a 36-pin Yazaki CVT circular
connector.

| Part | PDM (Male) | Wire Harness (Female) |
| --- | --- | --- |
| Housing | 7236-1525-30 | 7289-9871-40 |
| Terminal | *TBD* | 7116-4415-02 |
| Wire seal | *TBD* | 7158-3165-90 |
| Blind plug | *TBD* | 7158-3169-40 |

**Pinout:**

| Pin | Name | Description |
| --- | --- | --- |
| 1 | *TBD* | *TBD* |
| 2 | *TBD* | *TBD* |
| 3 | *TBD* | *TBD* |
| 4 | *TBD* | *TBD* |
| 5 | *TBD* | *TBD* |
| 6 | *TBD* | *TBD* |
| 7 | *TBD* | *TBD* |
| 8 | *TBD* | *TBD* |
| 9 | *TBD* | *TBD* |
| 10 | *TBD* | *TBD* |
| 11 | *TBD* | *TBD* |
| 12 | *TBD* | *TBD* |
| 13 | *TBD* | *TBD* |
| 14 | *TBD* | *TBD* |
| 15 | *TBD* | *TBD* |
| 16 | *TBD* | *TBD* |
| 17 | *TBD* | *TBD* |
| 18 | *TBD* | *TBD* |
| 19 | *TBD* | *TBD* |
| 20 | *TBD* | *TBD* |
| 21 | *TBD* | *TBD* |
| 22 | *TBD* | *TBD* |
| 23 | *TBD* | *TBD* |
| 24 | *TBD* | *TBD* |
| 25 | *TBD* | *TBD* |
| 26 | *TBD* | *TBD* |
| 27 | *TBD* | *TBD* |
| 28 | *TBD* | *TBD* |
| 29 | *TBD* | *TBD* |
| 30 | *TBD* | *TBD* |
| 31 | *TBD* | *TBD* |
| 32 | *TBD* | *TBD* |
| 33 | *TBD* | *TBD* |
| 34 | *TBD* | *TBD* |
| 35 | *TBD* | *TBD* |
| 36 | *TBD* | *TBD* |

## Interlock

The PDM contains an interlock circuit that breaks a connection when the
top lid or the lid covering the inverter busbar screws is opened. The
interlock pins are *TBD* on the signal connector. See the
[[safety]] page for how this fits into the overall system.

# CAN interface

The PDM is connected on the [[EV-CAN]] network.

# Cooling

The PDM needs coolant flowing through the cooling circuit, driven by the
[[waterpump|coolant pump]]. More info *TBD*.

# DC/DC {#dcdc}

The PDM contains a DC/DC converter that charges the 12 V battery from the
high voltage battery in a similar fashion to the alternator of a car with
a combustion engine. It feeds the [[LV system]].

# References

- Service manuals at [NicoClub](https://www.nicoclub.com/nissan-service-manuals).
