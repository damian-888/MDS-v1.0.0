# MDS

A React-based design system: layered design tokens with runtime theme switching, lazy-loaded SVG icons, and accessible UI components.

The token layer is the foundation — every component, theme, and consumer pulls from a single layered cascade of CSS custom properties. Mode (light / dark), section (normal / subtle), scheme (neutral / brand / success / error / warning / info), and breakpoints all switch at runtime via HTML data attributes and `@media` queries, with no rebuild required.

## Packages

| Package | Description |
|---|---|
| [`@mds/tokens`](packages/mds-tokens/) | Design tokens — CSS variables + TypeScript types, generated from a Tokens Studio source. |
| [`@mds/icons`](packages/mds-icons/) | Icon library — per-icon code-split chunks with a lazy registry. |
| [`@mds/react`](packages/mds-components/) | React UI components, MDS-prefixed, consuming tokens + icons. |
| [`@mds/agents`](packages/mds-agents/) | LLM context, agent prompts, and design-system knowledge base. |

## Quick start

Requirements: Node ≥ 18, pnpm ≥ 9.

```bash
pnpm install
pnpm build
```

Per-package work:

```bash
pnpm --filter @mds/tokens dev        # watch token rebuild
pnpm --filter @mds/icons sync        # pull latest SVGs from Figma (requires .env)
pnpm --filter @mds/react test        # run @mds/react tests
pnpm --filter @mds/react build       # build @mds/react (tsup)
```

Storybook lives in a future `@mds/guidelines` package — it is not wired up in `@mds/react`.

## Using the tokens

In your app entry:

```js
import '@mds/tokens/tokens.css';
import '@mds/tokens/typography.css';
```

In your CSS:

```css
.button {
  background: var(--mds-colours-basic-accent);
  color:      var(--mds-colours-basic-text-on-accent);
  border-radius: var(--mds-radius-medium);
}
```

In your HTML — runtime theme switching:

```html
<html data-mode="dark" data-scheme="brand">
  <aside data-section="subtle">subtle palette in this region</aside>
  <div data-scheme="error">red error region, still inherits dark mode</div>
</html>
```

All four axes (`mode`, `section`, `scheme`, breakpoint) compose orthogonally and can be set on any element, not just `<html>`. Mode also auto-detects from `@media (prefers-color-scheme: dark)` when unset.

For typography styles use the utility classes:

```html
<h1 class="mds-typography-h1">Title</h1>
<p class="mds-typography-body">Body text</p>
```

Or import token references in JavaScript (for inline styles, `matchMedia`, etc.):

```js
import { colours, breakpoints } from '@mds/tokens';

<div style={{ background: colours.basic.accent }} />
window.matchMedia(`(min-width: ${breakpoints.tablet}px)`);
```

## Architecture

Detailed conventions, the token layer model, the runtime cascade, and per-package contracts live in [SYSTEM.md](./SYSTEM.md).

## License

[MIT](./LICENSE)
