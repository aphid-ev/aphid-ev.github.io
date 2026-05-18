---
title: Safety architecture
category: Architecture
tags: [safety, architecture]
created: 2024-05-30
---

The safety systems are designed to protect against two main cases:

- Unexpected torque from the motor leading to unwanted acceleration or
  braking.
- Access to the high voltage rails.

The same method is used to reach a safe state for both:

> [!IMPORTANT]
> Opening the battery contactors will both prevent the inverter/motor
> producing torque **and** cut access to high voltage components.

The general idea is to have a dual-channel system for all safety functions
such that **a single error will never cause a dangerous situation** and
**a single error is always detected**.

The interlock circuit controls the positive supply of the high voltage
contactors (including precharge) in the battery. It runs through the
interlock switches in the [[inverter#interlock|traction inverter]]
and the [[pdm|PDM]], through the emergency stop button. The
interlock is powered by the [[Monitor firmware|VCM monitor application]],
which can also stop the supply if the VCM main application is misbehaving.

*TBD: Safety architecture drawing.*

# Unintended acceleration or braking

There is a lot of monitoring around making sure the car does not get any
unintended acceleration or braking. As a last resort, the emergency stop
button is connected in line with the interlock circuit and breaks the
positive supply to the main contactors if pushed.

## Definitions

### Torque

Motor torque is defined as positive in the direction of forward
acceleration and negative in the direction of reverse acceleration. Here
we only consider motor torque and assume the transmission is in a forward
gear, meaning wheel torque has the same sign as motor torque.

### Speed

Speed is defined in the same direction as torque: a positive speed means
the car is moving forward, negative means it is moving in reverse.

### Accelerating torque

Acceleration is torque in the direction the car is currently moving — in
other words, torque that works on increasing `abs(speed)`.

### Braking torque

Braking is torque in the direction opposite to which the car is currently
moving — torque that works on decreasing `abs(speed)`.

## Error cases

The table below defines identified safety issues that could lead to
unwanted acceleration or braking and the mitigations in place to manage
each.

### Accelerator pedal

Faults in the accelerator pedal sensors or in the interpretation of them
could cause unintended torque requests to be sent from the VCM to the
inverter.

#### Too low/high supply voltage to accelerator sensor

**Monitored:** VCM monitor and main application.

**Action:** Set fault condition in VCM main app, disable main contactor
high-side supply if accelerating torque is requested.

#### Bad accelerator pedal sensor

**Monitored:** Dual independent sensor channels monitored by VCM monitor
and main application.

**Action:** Set fault condition in VCM main app, disable main contactor
high-side supply if accelerating torque is requested.

#### VCM main application reads wrong accelerator position

**Monitored:** VCM monitor application compares accelerator sensor input
with torque request.

**Action:** Set fault condition in VCM main app, disable main contactor
high-side supply if accelerating torque is requested.

### VCM main application faults

There can be many faults in the main application; most are caught by the
torque request supervision.

#### Torque request while braking

**Monitored:** VCM monitor application.

**Action:** Set fault condition in VCM main app, disable main contactor
high-side supply if accelerating torque is requested.

### Inverter faults

Since the inverter is an unmodified commercial part, that has been shown
to be very reliable, it is generally considered to be safe. There is some
supervision regardless.

# Access to high voltage

This error case is mainly relevant when servicing the drivetrain
components. To prevent access to high voltage busbars and similar while
they are powered, the built-in interlock circuits of the
[[pdm|PDM]] and the [[inverter#interlock|inverter]]
are used and connected in series with the main interlock circuit.
