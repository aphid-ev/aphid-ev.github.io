---
title: Batteries
category: Electronics
tags: [battery, electronics]
created: 2024-07-01
---

> [!NOTE]
> This page is just a draft — more schematics and diagrams coming.

The battery will be built from modules out of a donor EV, the type of
which will be determined by availability. Hopefully we can come by a
cost-effective 24 kWh Nissan Leaf battery.

Since the VW Beetle is quite small, the battery will need to be divided
into two parts: a rear battery between the back seat and the rear
firewall, and a front battery in the frunk where the gas tank normally
sits. Depending on the modules, the batteries will be connected in series
or parallel to reach a nominal voltage of `~350–400 V` and deliver
`~200 A`.

The pack ties into the rest of the high voltage system via the
[[contactors]] and is supervised by the [[bms]].

# Front battery

The front battery will contain the precharge circuit and the service
disconnect.

# Rear battery

*TBD.*

# Current shunt

For current measurement on the pack:

- Shunt resistor: **BAS-M-R0001-R-5.0**
- Isolated ADC: **AMC3306M05**
