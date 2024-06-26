---
title: Nissan Leaf Traction Inverter
categories: [Components]
tags: [canbus, leaf, inverter]
author: lhelge
---

The traction inverter is the middle unit on the Nissan Leaf drive stack. It takes high voltage DC from the PDM and creates the 3-phase drive current in the motor

The idea behind this post is to collect as much information as possible on this component on the mechanical, electrical and software interfaces.

## Electrical interface
The inverter is driven by 12 V and consumed around *TBD* A during full operation.

The high voltage inputs contains a considerable ammount of capacitance and should not be connected to the battery without pre-charging first.

### Connector
The main data connector in the inverter is a *TBD* connector.

Part | Inverter (Male) | Wire Harness (Female)
--- | --- | --- 
Housing | *TBD* | *TBD*
Terminal 1-45 | *TBD* | *TBD*
Terminal 46-49 | *TBD* | *TBD*

**Pinout:**

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
37  | *TBD*    | *TBD*
38  | *TBD*    | *TBD*
39  | *TBD*    | *TBD*
40  | *TBD*    | *TBD*
41  | *TBD*    | *TBD*
42  | *TBD*    | *TBD*
43  | *TBD*    | *TBD*
44  | *TBD*    | *TBD*
45  | *TBD*    | *TBD*
46  | *TBD*    | *TBD*
47  | *TBD*    | *TBD*
48  | *TBD*    | *TBD*
49  | *TBD*    | *TBD*

### Interlock
The inverter contains an interlock circuit that will break a connection if the top lid of the inverter is opened. They are connected to pins *TBD* of the signal connector

## CAN interface
The PDM is connected on the EV-CAN network which is a standard ISO 11898-1 CAN bus with 11-bit identifiers and 500 kbit/s baudrate. For more detailed information on the bus and it's messages, see the [EV-CAN](/posts/nissan_leaf_ev-can) post.

To keep the inverter happy, there are 3 can frames that needs to be sent periodically
- ID = 0x11A
- ID = 0x1D4
- ID = 0x50B


## Start procedure
1. Switch on 12V power
2. Initiate CAN communication
3. Start pre-charging
3. Connect HV-power

## Stop procedure
1. Request 0 Nm of Torque
2. Disconnect HV-power
3. Switch off 12 V power.

## Cooling
The inverter needs coolant flowing through the cooling circuit. More info *TBD*

# References
- Service manuals found at: [NicoClub](https://www.nicoclub.com/nissan-service-manuals)
- Reverse engineering [8Dromeda](http://productions.8dromeda.net/c55-leaf-inverter-protocol.html)
