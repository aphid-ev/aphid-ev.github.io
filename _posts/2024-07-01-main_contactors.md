---
title: Main contactors and precharge
categories: [Electronics]
tags: [battery, electronics]
author: lhelge
---

*This post is just a draft, there will be more schematics and diagrams coming...*

The main contactors will make it possible to make the HV-system powerlkess during all drive states. This is an important part of the [safety architecture](/posts/safety_architecture) and the last resort to take the system into a safe state on case of a hazardous situation.

The main contactors together with the precharge circuit is an important part in [starting](/posts/vcm_requirements/#functional-states) up the vehicle.


## Main contactors
Each of the [batteries](/posts/batteries) has two Littlefuse `DCNEV250-M`

## Precharge
Prechange is managed by a Littlefuse `DCNSEV30-B` in series with a `10Ω 100W` power resistor. These are couples in paralell to the positive main contactor in the [front battery](/posts/batteries/#front).

**&lt;IMAGE GOES HERE&gt;**
