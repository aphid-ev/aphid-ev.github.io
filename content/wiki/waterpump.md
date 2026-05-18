---
title: Nissan and Tesla waterpump
category: Electronics
tags: [hardware, electronics]
created: 2024-06-26
---

The Nissan Leaf coolant pump, which appears to be the same unit used in
several Tesla EVs, circulates coolant through the cooling loop for the
[[motor#cooling|motor]],
[[inverter#cooling|inverter]] and
[[pdm#cooling|PDM]] and the radiator. Compared to an ICE
waterpump that is often belt-driven from the crankshaft, this one is
electrically driven and controlled.

# Connector

The pump connector is a Sumitomo **6189-1105**.

| Pin | Function |
| --- | --- |
| 1 | +12 V |
| 2 | GND |
| 3 | PWM in |
| 4 | RPM out |

# Electrical

The pump draws about *TBD* A from the +12 V feed at full load.

# Control

Though main power is provided through the 12 V feed, the pump is
controlled and monitored through two 5 V signal lines.

## PWM input

| Pulse width | RPM |
| --- | --- |
| < 8 % | Invalid |
| 8–12 % | Off (0 rpm) |
| 13–17 % | Invalid |
| 18–82 % | Linearly increasing (750 – 4700 rpm) |
| > 83 % | Invalid |

## RPM output

The waterpump has an RPM output giving a 5 V pulse every *TBD* rotation.

# References

- [openinverter forum](https://openinverter.org/forum/viewtopic.php?t=2906)
- [EVcreate](https://www.evcreate.com/using-tesla-thermal-management-system-parts/#tesla-pump)
