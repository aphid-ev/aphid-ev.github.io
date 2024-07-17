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
The main signal connector on the Gen2 80kW inverter seems to be a proprietary connector. There are indications that the same has been used for the *Toyota Prius Gen3 inverter* and has the Toyota part number *G9260-47010*. I will try to order one and confirm this. (See referenced post on openinverter forums)

![Leaf Gen2 inverter connector](/assets/img/posts/inverter_connector.jpg)
_Nissan Leaf Gen2 inverter signal connector_

Part | Inverter (Male) | Wire Harness (Female)
--- | --- | --- 
Housing | *TBD* | Toyota G9260-47010
Terminal 1-45 (small) | *TBD* | TE 1612290-1
Terminal 46-49 (large) | *TBD* | Yazaki 7116-4025

**Pinout:**

![Leaf Gen2 inverter connector](/assets/img/posts/inverter_pinout.png)
_Nissan Leaf Gen2 inverter signal connector pinout_

Not all pins are populated

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
14  | EV-CAN High | *TBD*
15  | EV-CAN Low | *TBD*
16  | *TBD*    | *TBD*
17  | Resolver S2 | *TBD*
18  | Resolver S4 | *TBD*
19  | Resolver R1 | *TBD* (Excitation coil?)
20  | Resolver S1 | *TBD*
21  | Resolver S3 | *TBD*
22  | *TBD*    | *TBD*
23  | *TBD*    | *TBD*
24  | *TBD*    | *TBD*
25  | *TBD*    | *TBD*
26  | *TBD*    | *TBD*
27  | Resolver R2 | *TBD* (Excitation coil?)
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
42  | Ignition | Connect to Battery+ when ignition is on.
43  | *TBD*    | *TBD*
44  | Motor Temp GND | *TBD*
45  | Motor Temp | *TBD*
46 (large)  | B+    | Battery+, fused with 10A
47 (large)  | B-    | Battery-, connect to GND
48 (large)  | B+    | Battery+, fused with 10A
49 (large)  | B-    | Battery-, connecto to GND

Since the high power 12V supply is fused with 10 A, 1.5 mm<sup>2</sup> should be enough.

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
- openinverter forums: [(Prius) Gen3 inverter connector](https://openinverter.org/forum/viewtopic.php?p=60964)
