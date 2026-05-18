# Aphid EV

Project blog and research wiki for an electric vehicle conversion project,
hosted at [bladlus.se](https://bladlus.se).

The site contains:

- a **blog** with the project log, posted as the build progresses, and
- a **wiki** collecting research, reference notes, and component teardowns
  that the blog posts link back to.

## Stack

The site is a static site built with [aphid](https://aphid.lhelge.se), a Rust
static site generator I wrote that renders a blog, a wiki, and standalone
pages from Markdown with `[[wiki-link]]` cross-referencing.

Content lives under `content/`, the theme under `theme/`, and site-wide
configuration in `aphid.toml`.

## Building locally

With `aphid` installed:

```sh
aphid serve   # dev server on http://localhost:3000 with live reload
aphid build   # render into dist/
```
