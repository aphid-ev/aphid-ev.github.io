---
title: Nissan Leaf PDM (Power Delivery Module)
categories: [Components]
tags: [canbus, leaf, pdm, electrical, software]
author: lhelge
---

The PDM is the topmost unit on the Nissan Leaf drive stack, it manages power delivery for all high voltage components. In addition to this it also contains the on-board charger and the 12 V DC/DC converter to charge the 12 V battery.

The idea behind this post is to collect as much information as possible on this component both on the electrical and software interfaces.

## Electrical interface

### Signal connector
The main data/signal connector on the PDM is a 36-pin Yasaki CVT circular connector. 

Part | PDM (Male) | Wire Harness (Female)
--- | --- | --- 
Housing | 7236-1525-30 | 7289-9871-40 
Terminal | ? | 7116-4415-02
Wire Seal | ? | 7158-3165-90 
Blind plug | ? | 7158-3169-40 

**pinout:**

Pin | Name     | Descriptions
--- | -------- | ---
1   | *TBD*    | *TBD*
2   | *TBD*    | *TBD*
3   | *TBD*    | *TBD*
4   | *TBD*    | *TBD*
5   | *TBD*    | *TBD*
6   | *TBD*    | *TBD*
7   | *TBD*    | *TBD*
8   | *TBD*    | *TBD*
9   | *TBD*    | *TBD*
10  | *TBD*    | *TBD*
11  | *TBD*    | *TBD*
12  | *TBD*    | *TBD*
13  | *TBD*    | *TBD*
14  | *TBD*    | *TBD*
15  | *TBD*    | *TBD*
16  | *TBD*    | *TBD*
17  | *TBD*    | *TBD*
18  | *TBD*    | *TBD*
19  | *TBD*    | *TBD*
20  | *TBD*    | *TBD*
21  | *TBD*    | *TBD*
22  | *TBD*    | *TBD*
23  | *TBD*    | *TBD*
24  | *TBD*    | *TBD*
25  | *TBD*    | *TBD*
26  | *TBD*    | *TBD*
27  | *TBD*    | *TBD*
28  | *TBD*    | *TBD*
29  | *TBD*    | *TBD*
30  | *TBD*    | *TBD*
31  | *TBD*    | *TBD*
32  | *TBD*    | *TBD*
33  | *TBD*    | *TBD*
34  | *TBD*    | *TBD*
35  | *TBD*    | *TBD*
36  | *TBD*    | *TBD*

### Interlock
The PDM contains an interlock circuit that will break a connection it the top lid or the lid of the inverter busbar screws is opened. They are connected to pins *TBD* of the signal connector

## CAN interface
The PDM is connected on the EV-CAN network which is a standard ISO 11898-1 CAN bus with 11-bit identifiers and 500 kbit/s baudrate.

There will be a specific post for the EV-CAN network describing the messaging more in detail, but this post will go into the  specifics needed by the PDM to function outside of a full Nissan Leaf

## Cooling
The PDM needs coolant flowing through the cooling circuit. More info *TBD*

# References
- Service manuals found at: [NicoClub](https://www.nicoclub.com/nissan-service-manuals)