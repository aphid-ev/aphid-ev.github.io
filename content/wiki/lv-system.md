---
title: Low voltage electrical system
category: Electronics
tags: [electronics]
created: 2024-08-05
---

The low voltage electrical system is powered by a small 12 V lead-acid
battery, similar to what you would find in a motorcycle. It is charged
directly by the [[pdm#dcdc|PDM DC/DC]].

# Electrical diagram

*TBD.*

# DC/DC

Ground strap to PDM.

# Consumers

The 12 V consumers and their fuse ratings. The main power distribution
fuses and relays will be based on this list.

| Component | Fuse | Relay |
| --- | --- | --- |
| Coolant water pump | 10 A | ✓ |
| Cooling fan | 10 A | ✓ |
| EV components | 10 A | ✓ |
| Low beams | 15 A | ✓ |
| High beams | 15 A | ✓ |
| BMS 12 V | 5 A |  |
| VCM 12 V | 5 A |  |

All relays are controlled by an open-drain output of the
[[vcm#io|VCM]].

# Main power distribution

*TBD.*

# Rear power distribution

*TBD.*

# Front power distribution

Fuse/relay box: Littelfuse HWB60-series.
