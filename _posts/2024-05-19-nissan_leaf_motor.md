---
title: Nissan Leaf EM57 Motor
categories: [Components]
tags: [leaf, em57, electrical]
author: lhelge
---

The Nissan EM57 motor has been used on several different cars over the years.

## Mechanical interface
### Mounting flange
Coming soon...

### Output axle
Coming soon...

There are some interesting alternatives, for example:
- [EVcreate](https://www.evcreate.com/shop/drivetrain/flanged-nissan-leaf-motor-coupler/)
- [Brat Industries](https://bratindustries.net/product/nissan-leaf-motor-coupler-2/)

## Electrical interface

### Phase busbars
Coming soon...

### Resolver connector
The resolver output is a 8-pin Yasaki RH connector. 

Part | PDM (Male) | Wire Harness (Female)
--- | --- | --- 
Housing | 7282-8855-30 | 7283-8855-30
Terminal | 7114-4415-02<br/>7114-4415-08<br/>7114-4416-02<br/>7114-4416-08<br/>7114-4417-02<br/>7114-4417-08 | 7116-4415-02<br/>7116-4415-08<br/>7116-4416-02<br/>7116-4416-08<br/>7116-4417-02<br/>7116-4417-08<br/>7196-0104-02
Wire seal | 7158-3165-90<br/>7158-3166-60<br/>7158-3167-80<br/>7158-3168-80 | 7158-3165-90<br/>7158-3166-60<br/>7158-3167-80<br/>7158-3168-80

**pinout:**

Pin | Name   | Descriptions
--- | ------ | ---
1   | Temp   | Temperature sensor
2   | Temp   | Temperature sensor
3   | Ex     | Resolver excitation coil
4   | Sin +  | Positive sinus output
5   | Sin -  | Negative sinus output
6   | Cos -  | Negative cosinus output
7   | Cos +  | Positive cosinus output
8   | Ex     | Resolver excitation coil

The resolver calibration is stamped on the motor housing and must be written to the traction inverter after replacing motor/resolver. See YouTube video linked below.

## Cooling
The motor needs coolant flowing through the cooling circuit. More info *TBD*

# References
- OpenInverter project: [Wiki](https://openinverter.org/wiki/Nissan_Leaf_Motors)
- Nissan Leaf resolver write [YouTube](https://www.youtube.com/watch?v=Of2vCYgblY4)