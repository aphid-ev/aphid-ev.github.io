---
title: Nissan Leaf EV-CAN
category: Software
tags: [canbus, leaf, pdm, electrical, software]
created: 2024-05-19
---

The EV-CAN network is the main CAN bus used by the donor Nissan Leaf
components — the [[pdm|PDM]], [[inverter|traction
inverter]] and BMS — and is the bus the [[vcm|DIY VCM]] talks to.

# Electrical

As any CAN bus, the EV-CAN network uses a twisted pair for differential
signalling to improve noise immunity.

## Signalling

EV-CAN uses ISO 11898-1 with 11-bit identifiers and a 500 kbit/s baud rate.

## Topology

A well-functioning CAN bus should have a linear topology with short stubs
sticking out and a 120 Ω termination at each end. In the Nissan Leaf the
following ECUs are connected on the EV-CAN:

| ECU | Termination |
| --- | --- |
| VCM | *TBD* |
| Traction inverter | *TBD* |
| BMS | *TBD* |
| *TBD* | *TBD* |

# Data integrity

Some critical frames are protected with both sequence counters and a CRC
checksum (in addition to the CRC built into the CAN frames themselves).

## Sequence counter

The sequence counter just counts up from `0 → 3` continuously.

## CRC checksum

There is a specific Nissan CRC calculation of the first 7 bytes of the
CAN frame stored in the 8th byte. It is a standard CRC8 calculation with
the initial value `0x00` and the polynomial `0x85`.

```rust
fn nissan_crc<const N: usize>(data: &[u8; N]) -> u8 {
    const POLYNOMIAL: u8 = 0x85;
    let mut crc = 0;

    for b in data {
        for i in (0..8).rev() {
            crc <<= 1;
            crc = if (b & (1 << i)) != 0 { crc | 0x01 } else { crc & 0xFE };
            if crc & 0x80 != 0 {
                crc ^= POLYNOMIAL;
            }
        }
    }

    crc
}
```

# Messages

Here are the messages seen on the EV-CAN network. For more ECU-specific
information see the [[pdm|PDM]] and [[inverter|
traction inverter]] pages.

## `0x1D4` — Torque request

**Sender:** VCM
**Receiver:** Traction inverter
**Frequency:** 100 Hz
**DLC:** 8 bytes

**Data:**

| Byte 0 | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Byte 5 | Byte 6 | Byte 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ??? | ??? | Torque MSB | Torque LSB | Seq. counter | ??? | ??? | CRC |

**Torque:** signed `i16`. Positive → accelerate, negative → regen. Scale
*TBD* Nm/bit.

**Sequence counter:** loops `0 → 3`.

**CRC:** see above.

## `0x1DA` — Inverter status

**Sender:** Traction inverter
**Receiver:** VCM
**Frequency:** *TBD* Hz
**DLC:** 8 bytes

**Data:**

| Byte 0 | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Byte 5 | Byte 6 | Byte 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| DC voltage MSB | DC voltage LSB | ??? | ??? | ??? | ??? | ??? | ??? |

**DC voltage:** unsigned `u16`, scale `0.5 V/bit`.

# References

- Reverse engineering by [8Dromeda](http://productions.8dromeda.net/c55-leaf-inverter-protocol.html).
- GitHub repository [leaf_can_bus_messages](https://github.com/dalathegreat/leaf_can_bus_messages).
