---
title: DIY BMS
category: Electronics
tags: [battery, electronics]
created: 2024-08-04
---

The BMS needs to support a distributed architecture across two
[[batteries]]. Each battery will contain a BMS main board with a CPU
communicating over CAN with the rest of the EV system, and sub-modules
for each cell module.

# Current shunt

- Shunt resistor: **BAS-M-R0001-R-5.0**
- Isolated ADC: **AMC3306M05**
