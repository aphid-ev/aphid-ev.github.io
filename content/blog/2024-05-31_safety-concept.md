---
title: The safety concept
slug: safety-concept
author: lhelge
created: 2024-05-31
image: /static/blog/safety.webp
description: A short tour of how the Aphid is designed to fail safely — two redundant channels, one shared safe state, and a hard rule that no single fault is ever invisible.
tags: [blog, safety]
---

Before any firmware gets written I want to be clear about how the car is
supposed to fail. There are two ways the Aphid can hurt someone:

- The motor produces torque it shouldn't — unintended acceleration or
  braking.
- Something exposes the high voltage rails when they shouldn't be live.

The convenient thing is that both are addressed by the same safe state:
**open the battery contactors**. No HV at the inverter means no torque,
and no HV anywhere means no shock hazard.

> [!IMPORTANT]
> No single fault is ever allowed to cause a dangerous situation, and no
> single fault is ever allowed to go undetected.

# Motor torque control

That rule pushes the whole design toward dual-channel everything: two
accelerator sensors that have to agree, two pedal-supply lines that have
to land in spec, two microcontrollers in the [[VCM]] watching each other.

The accelerator and brake inputs are read by both the main MCU and the
monitor MCU and cross-checked. The monitor MCU also watches the EV-CAN
bus and verifies the torque the main MCU is actually requesting matches
what the pedal is doing. If anything disagrees, the monitor MCU drops
the high-side feed to the battery contactors and the car coasts to a
halt.

# The interlock loop

The high-side feed doesn't just go straight from the monitor MCU to the
contactors. It runs through an interlock loop that also passes through
the lid switches on the [[pdm|PDM]] and the [[inverter]], and through
the dashboard e-stop. Open any of them — service the drivetrain, hit the
big red button, or have the monitor MCU decide something's off — and
the contactors drop.

# That's it, more or less

This blog post is the short version. The full reference, with the error
table and the definitions for "accelerating torque" vs "braking torque",
lives in the [[safety]] wiki page. The matching design constraints on
the VCM hardware are in [[VCM requirements]].

Next up: actually starting on the firmware.
