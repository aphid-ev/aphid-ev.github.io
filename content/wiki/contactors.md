---
title: Main contactors and precharge
category: Electronics
tags: [battery, electronics]
created: 2024-07-01
---

> [!NOTE]
> This page is just a draft — more schematics and diagrams coming.

The main contactors make it possible to keep the HV system de-energised
during all drive states. They are an important part of the
[[safety]] and the last resort to bring the system into a
safe state in case of a hazardous situation.

Together with the precharge circuit, they are also an important part of
[[VCM requirements#functional-states|starting]] up the vehicle.

# Main contactors

Each of the [[batteries]] has two Littelfuse `DCNEV250-M`.

# Precharge

Precharge is managed by a Littelfuse `DCNSEV30-B` in series with a
`10 Ω 100 W` power resistor. These are connected in parallel to the
positive main contactor in the [[batteries#front-battery|front battery]].

*TBD: schematic.*
