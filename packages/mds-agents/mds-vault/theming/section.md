---
title: Section
type: theming-axis
status: stable
source:
  - packages/mds-tokens/src/.section/normal.json
  - packages/mds-tokens/src/.section/subtle.json
last-synced: 2026-05-15
forbidden-to-edit: false
tags: [theming, section, normal, subtle, re-anchor]
related:
  - "[[index]]"
  - "[[mode]]"
  - "[[scheme]]"
  - "[[chain-inheritance]]"
  - "[[consumer-api]]"
  - "[[foundation/colours]]"
  - "[[conventions/storybook-css-isolation]]"
---

# Section

> Default vs. subtle palette variant within the active scheme. Switched via `[data-section]`.

## Summary

`data-section` picks the palette intensity inside the active scheme. Sidebars, secondary content, and de-emphasised regions use `subtle`; primary content stays `normal`.

## Values

| Value | Effect |
|---|---|
| `normal` (default) | Default palette variant. |
| `subtle` | Subtle palette variant — softer surfaces, lower contrast. |

## Selector

```
[data-section="normal"]
[data-section="subtle"]
```

Section is re-declared on the standard override scope:

```
:root, [data-mode], [data-section], [data-scheme] { /* default */ }
[data-section="<value>"], :where(parent) [data-other-axis] { /* override */ }
```

See [[chain-inheritance]] for the `:where()` pattern.

## Source File

- [.section/normal.json](packages/mds-tokens/src/.section/normal.json)
- [.section/subtle.json](packages/mds-tokens/src/.section/subtle.json)

`section.*` tokens reference `{scheme.<...>.<section>.colours.*}` — the next layer down.

## Cascade Rules

- Section sits **between** mode and scheme in the colour resolution chain.
- Section never disables — it's always one of the two values, defaulting to `normal`.
- A nested `[data-section="subtle"]` inside a `[data-mode="dark"]` parent inherits the dark mode and applies the subtle variant — both axes compose orthogonally.

## Examples

```html
<html data-mode="dark" data-scheme="brand" data-section="normal">
  <main>
    Primary content uses normal-brand-dark palette.
    <aside data-section="subtle">
      Sidebar uses subtle-brand-dark palette — same mode, same scheme, softer surfaces.
    </aside>
  </main>
</html>
```

### Re-anchor pattern (card on a subtle backdrop)

To show a primary-fill component over a softer page surface, alternate `subtle` and `normal` down the tree. The inner `data-section="normal"` "re-anchors" the cascade so descendants resolve foundation tokens against the normal palette again — even though their parent is `subtle`.

```html
<section data-section="subtle">                          <!-- page surface = subtle (grey) -->
  <div data-section="normal" style="display:contents">   <!-- re-anchor: cards resolve normal -->
    <MDSCard />                                          <!-- basic.background = #FFF, stands out -->
    <MDSCard data-section="subtle" />                    <!-- subtle card: opts back to grey -->
  </div>
</section>
```

`display:contents` keeps the re-anchor wrapper transparent to layout. The cascade still re-resolves at each `[data-section]` element because the foundation chunk emits `:root, [data-mode], [data-section], [data-scheme]` as its selector list — see [[chain-inheritance]].

This is how Storybook's docs page renders cards on a tinted frame — see [[conventions/storybook-css-isolation]] for the integration.

## Related

- [[index]]
- [[mode]]
- [[scheme]]
- [[breakpoint]]
- [[chain-inheritance]]
- [[consumer-api]]
- [[foundation/colours]]
- [[conventions/storybook-css-isolation]]
