---
title: Two years and a static site generator
slug: aphid-migration
author: lhelge
created: 2026-05-18
image: /static/blog/decay.webp
description: An overdue update on the project — and an explanation for why the build log has been quiet for the better part of two years.
tags: [blog, aphid, meta]
---

Two years ago today I published [[Aphid project|the first post]] on this
blog and laid out a plan: take a 1961 VW Beetle, drop in a Nissan Leaf
drivetrain, and document everything along the way.

I had a lot of momentum at the start. Then... I went quiet. Sorry about
that.

# What happened?

Short version: life happened. This was never going to be steady,
consistent work towards a road-legal vehicle — it will likely take many
years, maybe even a decade. Things get in the way. The longer the gaps,
the more important it is to document what we're doing so it's less
tedious to pick the project back up.

Once coding agents started getting good, I began building all kinds of
tools for myself. One was a Markdown note-taking app to replace Obsidian
at work, and that's where I learned how powerful Markdown parsing can
be. From there an idea started forming: replace the Aphid EV Jekyll
site with something better suited to my writing — split between a
build log and a research wiki, and resilient to the occasional
two-year hiatus.

I really liked the workflow of a static site generator building the
site straight from a GitHub repo; I just wanted it to work a bit
differently from Jekyll. I looked into Hugo, which seemed flexible
enough to do what I wanted, but I couldn't find a theme I liked.

I was fairly certain Claude and I could put together a working SSG over
a weekend or two. The real tipping point came when I tried Claude
Design — that was definitely the missing piece for putting together a
nice-looking theme on top of it.

Here we are. If procrastination has a peak, I'm fairly confident I just
found it.

# So what is aphid?

[Aphid](https://bladlus.lhelge.se) is a small static site generator
I wrote specifically for this project. The Beetle is already called
*Aphid*, the project is full of leaf-eating jokes, and at this point it
felt rude not to keep the pun going.

The previous site ran on Jekyll, which worked perfectly fine. I just
wanted something that:

- treated the build log and the reference material as two different
  things — a chronological blog up front, and a navigable wiki of
  [[parts]], components and decisions next to it,
- understood `[[wiki-links]]` natively, so links to
  [[inverter|the inverter]] or the
  [[motor|EM57 motor]] get checked at build time
  instead of rotting silently,
- built fast and let me iterate locally without thinking about Ruby. 
  *This site builds in less than 10 ms*

It now does, and the site you're reading is the third one published with
it, at the new (proper Swedish) domain <https://bladlus.se>.

# Back to the actual project?

The detour is over. The car still needs an EV conversion. The
[[vcm]] still needs firmware. The [[batteries|battery pack]]
still needs cells. I'll try to be a bit quicker with the next update —
no promises about how *much* quicker.
