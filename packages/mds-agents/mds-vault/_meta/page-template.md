---
title: Page Template
type: meta
status: stable
source:
  - packages/mds-agents/mds-vault/_meta/page-template.md
last-synced: 2026-05-12
forbidden-to-edit: false
tags: [vault, template, frontmatter]
related:
  - "[[vault-rules]]"
  - "[[update-policy]]"
---

# Page Template

> The canonical page shape. Every atom and index in the vault follows it.

## Summary

Two pieces define a vault page:

1. **Frontmatter** — mandatory; shared across all pages.
2. **Body section order** — fixed per `type` value.

## Frontmatter (mandatory on every page)

```yaml
---
title: <human-friendly title>
type: <component | token-group | pattern | workflow | convention | principle
       | architecture | theming-axis | library | glossary | adr | a11y-rule
       | testing-guide | figma-asset | agent-guide | meta>
status: <alpha | beta | stable | deprecated | external>
source:
  - <repo-relative path or external URL>
last-synced: <YYYY-MM-DD>
forbidden-to-edit: <true | false>
tags: [<freeform tags>]
related:
  - "[[wikilink]]" or <relative path>
---
```

Notes:
- `external` status applies to `libraries/*` pages (third-party docs).
- `forbidden-to-edit: true` makes the page read-only. Default `false`.
- `source:` is the canonical reference. For components, list the `.tsx` and `.module.css`. For tokens, list the JSON source file. For workflows, list the script or doc the workflow is based on.
- `related:` lists 3–5 most relevant cross-links. Inline `[[wikilinks]]` in the body are still encouraged.

## Body section order by type

### `component`

```
# <ComponentName>
> One-line summary.   ← parity-bound with the story's `parameters.mds.docs.summary`.

## Purpose
## Use                ← parity-bound with story.guidelines.use
## Avoid              ← parity-bound with story.guidelines.avoid
## Import
## API / Props
## Variants
## Sizes
## States
## Behaviour          ← parity-bound with story.details.behaviour
## Accessibility      ← parity-bound with story.details.accessibility
## Animation          ← parity-bound with story.details.animation (omit if absent)
## Styling Hooks
## Examples
## Gotchas            ← parity-bound with story.details.gotchas
## Source
## Related            ← cross-links; the parity subset is story.related
```

The parity-bound sections (`Summary`, `Use`, `Avoid`, `Behaviour`, `Accessibility`, `Animation`, `Gotchas`, and `Related` to other components) must match the matching story's `parameters.mds.docs` block verbatim. See [[conventions/storybook-vault-parity]].

### `token-group`

```
# <Group>
> One-line summary.

## Token List
## Usage
## Layer
## Naming Pattern
## Source
## Related
```

### `pattern`

```
# <Pattern Name>
> One-line summary.

## When to Use
## Composition
## Code
## Variants
## Accessibility
## Anti-patterns
## Related
```

### `workflow`

```
# <Workflow Name>
> One-line summary.

## Prerequisites
## Steps
## Verification
## Common Pitfalls
## Related
```

### `convention`

```
# <Convention>
> One-line summary.

## Rule
## Why
## How to Apply
## Examples
## Exceptions
## Related
```

### `principle`

```
# <Principle>
> One-line summary.

## Statement
## Rationale
## Implications
## Counter-examples
## Related
```

### `architecture`

```
# <Architecture Topic>
> One-line summary.

## Diagram
## Inputs
## Outputs
## Build Steps
## Source
## Related
```

### `theming-axis`

```
# <Axis Name>
> One-line summary.

## Values
## Selector
## Source File
## Cascade Rules
## Related
```

### `library`

```
# <Library Name>
> This file is forbidden to edit. Source: <URL>.

## Source URL
## Quick Reference
```

### `glossary`

```
# <Term>

## Definition
## Figma equivalent
## CSS equivalent
## MDS usage
```

### `adr`

```
# ADR-NNNN: <Title>

## Context
## Decision
## Consequences
## Status
## Date
```

### `a11y-rule`

```
# <Rule>

## WCAG ref
## Why
## Implementation
## Test
```

### `testing-guide`

```
# <Topic>
> One-line summary.

## What to Test
## Test Recipe
## Examples
```

### `figma-asset`

```
# <Asset>
> One-line summary.

## Figma Node
## Export Path
## Sync Command
```

### `agent-guide`

```
# <Guide>
> One-line summary.

## When This Applies
## Instructions
## Examples
```

### `meta`

```
# <Title>
> One-line summary.

## Rules
## Examples
```

Index files (`index.md`) use `type: meta` with body:

```
# <Folder Title>
> One-line description of the folder's scope.

## Atoms

| File | Summary |
|---|---|
| [[atom-name]] | One-line summary. |

## Related folders
- [[<peer>/index]]
```
