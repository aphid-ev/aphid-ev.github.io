---
title: Nissan Leaf EV-CAN
categories: [Components]
tags: [canbus, leaf, pdm, electrical, software]
author: lhelge
---

# EV-CAN network
The  EV-CAN network

## Electrical
As any CAN-bus the EV-CAN network uses a twisted pair for differential signaling to improve noise immunity.

### Signalling
EV-CAN uses ISO 11898-1 with 11-bit identifiers and 500 kbit/s baudrate

### Topology
A well functioning CAN-bus should have a linear topology with short stubs sticking out and a 120 ohm termination in each end. In the Nissan Leaf the following ECU's are connected on the EV-CAN:

ECU | Termination
--- | ---
VCM | *TBD*
Traction Inverter | *TBD*
BMS | *TBD*
*TBD* | *TBD*

## Data integrity
Some critical frames are protected with both sequence counters and a CRC checksum (in additional to the CRC build into the CAN-frames).

### Sequence counter
The sequence counter just counts up from 0 -> 3 continously

### CRC Checksum
There is a specific Nissan CRC calculation of the first 7 bytes of the can-frame stored in the 8th byte, it is just a standard CRC8 calculation with the initial value `0x00` and the polynomial `0x85`

```rust
fn nissan_crc<const N: usize>(data: &[u8; N]) -> u8 {
    const POLYNOMIAL: u8 = 0x85;
    let mut crc = 0;

    for b in data {
        for i in (0..8).rev() {
            crc <<= 1;
            crc = if (b & (1 << i)) != 0 { crc | 0x01 } else {crc & 0xFE };
            if crc & 0x80 != 0 {
                crc ^= POLYNOMIAL;
            }
        }
    }

    crc
}
```

## Messages
Here are the messages seen on the EV-CAN network for more ECU specific information see:

- [PDM](/posts/nissan_leaf_pdm)
- [Traction inverter](/posts/nissan_leaf_inverter)

### `0x1d4` - Torque request
**Sender:** VCM
**Receiver:** Traction Inverter
**Frequency:** 100 Hz
**DLC:** 8 Bytes

**Data:**

Byte 0 | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Byte 5 | Byte 6 | Byte 7
------ | ------ | ------ | ------ | ------ | ------ | ------ | ------
??? | ??? | Torque MSB | Torque LSB | Seq. Counter | ??? | ??? | CRC

**Torque:** 
signed `i16`, positive -> accelerate, negative -> regen. Scale ?? Nm/bit

**Sequence counter:**
loop 0 -> 3

**CRC:** See above...

### `0x1da` - Inverter status
**Sender:** Traction inverter
**Receiver:** VCM
**Frequency:** ?? Hz
**DLC:** 8 Bytes

**Data:**

Byte 0 | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Byte 5 | Byte 6 | Byte 7
------ | ------ | ------ | ------ | ------ | ------ | ------ | ------
DC voltage MSB | DC voltage LSB | ??? | ??? | ??? | ??? | ??? | ???

**DC voltage:** 
unsigned `u16`, Scale 0.5 V/bit

# References
- Reverse engineering [8Dromeda](http://productions.8dromeda.net/c55-leaf-inverter-protocol.html)
- GitHub Repository [leaf_can_bus_messages](https://github.com/dalathegreat/leaf_can_bus_messages)