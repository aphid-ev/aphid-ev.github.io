---
title: Safety Architecture
categories: [Architecture]
tags: [safety]
author: lhelge
media_subpath: /assets/img/posts/
image: safety-architecture.webp
---

The safety systems are designed to protect against two main cases:
- Unexpected torque from the motor leading to unwanted acceleration or braking.
- Access to the high voltage rails.

The same method is used to reach a safe state for both these cases:

**Opening the battery contactors will both prevent the inverter/motor producing torque and access to high voltage components**

The general idea is to have a dual channel system for all safety functions such that **a single error will never cause a dangerous situation** and **a single error is always detected**.

Here are a schematic drawing of the safety system layout consisting of an interlock circuit controlling the positive supply of the high voltage contactors (including precharge) in the battery. This goes through the interlock switches in the [traction inverter](/posts/nissan_leaf_inverter) and the [PDM](/posts/nissan_leaf_pdm), through the emergency stop button. The interlock circuit is powered by the [VCM monitor application](/posts/vcm_monitor_firmware) that could also stop the supply if the [VCM main application](/posts/vcm_main_firmware) is misbehaving.

*TBD: Safety architecture drawing*

## Unintended acceleration or braking
There are a lot of monitoring around making sure the car does not get any unintended acceleration or braking. Then there is a last resort which is the emergency stop button that will be connected in line with the interlock circuit and break the positive supply to the main contactors if pushed.

### Definitions
First, lets define torque, speed, acceleration and breaking.

#### Torque
Motor torque is defined as positive in the direction of forward acceleration and negative in the direction of reverse acceleration. In this post we only consider motor torque and assume that the transmission is in a forward gear meaning wheel torque has the same sign as motor torque.

#### Speed
Speed is defined in the same direction as torque, meaning a positive speed means that the car is moving forward and a negative speed means that the car is moving in reverse. In the same way as torque, the transmission is assumed to be in a forwad gear hence the wheel speed has the same sign as motor speed.

#### Accelerating torque
Acceleration is defined as torque in the direction which the car is currently moving. In other words torque that works on increasing `abs(speed)`.

#### Braking torque
Braking is defined as torque in the direction oposite of which the car is currently moving. In other words torque that works on decreasing `abs(speed)`

### Error cases
The table below defines identified safety issues that could lead to unwanted acceleration or braking and the mitigations in place to manage this.

#### Accelerator pedal
Faults in the accelerator pedal sensors or in the interpretation of them could cause unintended torque requests to be sent from the VCM to the inverter.

##### Too low/high supply voltage to accelerator sensor 
**Monitored:** VCM monitor and main application

**Action:** Set fault condition in VCM main app, Disable main contactor high side supply if accelerating torque is requested.

##### Bad accelerator pedal sensor
**Monitored:** Dual independent sensor channels monitored by VCM monitor and main application 

**Action:** Set fault condition in VCM main app, disable main contactor high side supply if accelerating torque uis requested

##### VCM main application reads wrong accelerator position
**Monitored:** VCM monitor application compare accelerator sensor iunput with torque request

**Action:** Set fault condition in VCM main app, disable main contactor high side supply if accelerating torque is requested

#### VCM main application faults
There can be many faults in the main application, in general most is caught by the torqe request supervision.

##### Application unresponsive

##### Torque request while braking
**Monitored:** VCM monitor application

**Action:** Set fault condition in VCM main app, disable main contactor high side supply if accelerating torque is requested

#### Inverter faults
Since the inverter is an unmodified commercial part, that has been shown to be very reliable, it is generally considered to be safe. But there are some supervision though

##### Motor torque applied without request


## Access to high voltage
This error case is mainly relevant when servicing the drivetrain components. To prevent access to high voltage bussbars and similar while they are powered the builtin interlock circuits of the [PDM](/posts/nissan_leaf_pdm/#interlock) and the [inverter](/posts/nissan_leaf_inverter/#interlock) are used and connected in series with the main interlock circuit.