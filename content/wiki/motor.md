---
title: Nissan Leaf EM57 motor
category: Components
tags: [leaf, em57, electrical]
created: 2024-05-19
---

The Nissan EM57 motor has been used on several different cars over the
years. It sits at the bottom of the Nissan Leaf drive stack and is paired
with the [[inverter]] above it.

# Mechanical interface

## Mounting flange

Coming soon...

## Output axle

Coming soon... There are some interesting coupler alternatives available:

- [EVcreate flanged coupler](https://www.evcreate.com/shop/drivetrain/flanged-nissan-leaf-motor-coupler/)
- [Brat Industries coupler](https://bratindustries.net/product/nissan-leaf-motor-coupler-2/)

# Electrical interface

## Phase busbars

Coming soon...

## Resolver connector

The resolver output is an 8-pin Yazaki RH connector.

| Part | Motor (Male) | Wire Harness (Female) |
| --- | --- | --- |
| Housing | 7282-8855-30 | 7283-8855-30 |
| Terminal | 7114-4415-02 / 7114-4416-02 / 7114-4417-02 (and -08 variants) | 7116-4415-02 / 7116-4416-02 / 7116-4417-02 (and -08 variants) |
| Wire seal | 7158-3165-90 / 7158-3166-60 / 7158-3167-80 / 7158-3168-80 | same |

**Pinout:**

| Pin | Name | Description |
| --- | --- | --- |
| 1 | Temp | Temperature sensor |
| 2 | Temp | Temperature sensor |
| 3 | Ex | Resolver excitation coil |
| 4 | Sin + | Positive sine output |
| 5 | Sin − | Negative sine output |
| 6 | Cos − | Negative cosine output |
| 7 | Cos + | Positive cosine output |
| 8 | Ex | Resolver excitation coil |

> [!IMPORTANT]
> The resolver calibration is stamped on the motor housing and must be
> written to the traction inverter after replacing the motor or
> resolver. See the YouTube reference below.

# Cooling

The motor needs coolant flowing through the cooling circuit. More info
*TBD*.

# References

- OpenInverter project: [Nissan Leaf Motors wiki](https://openinverter.org/wiki/Nissan_Leaf_Motors).
- Nissan Leaf resolver write: [YouTube walkthrough](https://www.youtube.com/watch?v=Of2vCYgblY4).
