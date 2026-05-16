---
title: Low voltage electrical system
categories: [Electronics]
tags: [battery, electronics]
author: lhelge
---

The low voltage electrical system will be powered by a small 12V lead acid battery similar to what you would find in a motorcycle. It will be charged directly by the [PDM DC/DC](/posts/nissan_leaf_pdm/#dcdc).

## Electrical diagram
{% drawio path="assets/drawio/Aphid-ev.drawio" page_number=0 height=400 %}

## DC/DC
Ground strap to PDM

## Consumers
This is the list of consumers on the 12 V power supply with respective fused current. The main power distribution fuses and relays will be based on this.

Component | Fuse | Relay
--- | --- | ---
Coolant water pump | 10 A | X
Cooling fan | 10 A | X
EV Components | 10 A | X
Low beams | 15 A | X
High beams | 15 A | X
BMS 12V | 5 A |
VCM 12V | 5 A |



All relays are controlled by an open drain output of the [VCM](/posts/diy_vcm/#io)

## Main power distribution

## Rear power distribution

## Front power distribution
Fuse/relay box Littelfuse HWB60-series