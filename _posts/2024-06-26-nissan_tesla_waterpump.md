---
title: Nissan and Tesla waterpump
categories: [Electronics]
tags: [hardware, electronics]
author: lhelge
---

The intention with this post is to collect some info on the Nissan Leaf waterpump for the cooling water. 

From what I've found it's the same pump also used by Tesla EV's. 

The purpose of the electric waterpump is to circulate coolant through the cooling system for the [motor](/posts/nissan_leaf_motor/#cooling), [inverter](/posts/nissan_leaf_inverter/#cooling) and [PDM](/posts/nissan_leaf_pdm/#cooling) and the radiator. In comparison to an ICE waterpump that often driven by a belt from the crankshaft.

## Connector
The pump connector is a Sumitomo 6189-1105

Pin | Function
--- | ---
1 | +12V
2 | GND
3 | PWM in
4 | RPM out

## Electrical
The pump draw about *TBD* A from the +12V feed during full load.

## Control
Though the main power is provided in the 12V feed, the fan is controlled or monitored through two 5V signal lines. 

### PWM Input

Pulse width | RPM
--- | ---
&lt; 8% | Invalid
8-12% | Off (0 rpm)
13-17% | Invalid
18-82% | Linearly increasing (750 - 4700 rpm)
&gt; 83% | Invalid

### RPM Output
The waterpump has an RPM output giving out 5V pulse each *TBD* rotation

# References
- [Openinverter forum](https://openinverter.org/forum/viewtopic.php?t=2906)
- [EVCreate](https://www.evcreate.com/using-tesla-thermal-management-system-parts/#tesla-pump)