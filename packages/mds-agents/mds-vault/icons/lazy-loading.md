---
title: Lazy Loading
type: convention
status: stable
source:
  - packages/mds-icons/src/generated/registry.ts
  - packages/mds-components/src/MDSIcon/MDSIcon.tsx
  - packages/mds-icons/vite.config.ts
last-synced: 2026-05-15
forbidden-to-edit: false
tags: [icons, lazy-loading, code-splitting, suspense, react-lazy]
related:
  - "[[index]]"
  - "[[registry]]"
  - "[[components/MDSIcon]]"
  - "[[architecture/icon-pipeline]]"
---

# Lazy Loading

> Each icon is its own dynamic-import chunk. Apps using 20 icons ship 20 chunks, not the full registry. `MDSIcon` wraps the resolved component in `<Suspense>` with a same-sized placeholder — no visible layout shift.

## Rule

### Registry uses `React.lazy` per icon

[`packages/mds-icons/src/generated/registry.ts`](packages/mds-icons/src/generated/registry.ts) maps every kebab-case icon name to a `React.lazy()` stub:

```ts
const Acorn = lazy(() => import('./Acorn').then(m => ({ default: m.Acorn })));
const AddressBook = lazy(() => import('./AddressBook').then(m => ({ default: m.AddressBook })));
// ... 1500+ entries
```

The `iconRegistry` export is a plain object literal whose values are lazy stubs. Importing the registry does NOT eagerly load every icon — bundlers see the inline `import('./Acorn')` calls as real dynamic imports.

### Vite build with `preserveModules: true`

`packages/mds-icons` uses Vite lib mode with `preserveModules: true` so each icon lands at `dist/<PascalCase>.js` as a **separate chunk**. Without this, all icons would be concatenated into one bundle and the dynamic imports would be no-ops.

See [[architecture/icon-pipeline]] for the build configuration.

### Suspense wrapping in MDSIcon

[`MDSIcon.tsx`](packages/mds-components/src/MDSIcon/MDSIcon.tsx) wraps the lazy component:

```tsx
<React.Suspense
  fallback={
    <span
      aria-hidden="true"
      className={composedClassName}
      style={composedStyle}
    />
  }
>
  <LazyIcon {...props} className={composedClassName} style={composedStyle} data-size={...} />
</React.Suspense>
```

The fallback is a same-sized `<span aria-hidden="true">` carrying the same `.root` class as the resolved icon, so the first render of any given icon name shows the placeholder for a tick before the chunk resolves — **no layout shift**.

## Why

- **Tree-shaking by design.** Consumers ship only the icons they actually use at runtime. With 1505 icons in the registry, eager loading would be unacceptable.
- **No "unknown name" branch.** `name: MDSIconName` is type-checked at compile time, so an unknown name cannot reach runtime. The fallback handles the genuinely-async case (chunk load latency), not error states.
- **Single class on fallback + resolved icon.** Both branches share the same className + inline style, so the size is correct during the Suspense pending state. Layout is stable.

## How to Apply

Consumers don't need to do anything special — `MDSIcon` handles the Suspense boundary internally:

```tsx
import { MDSIcon } from '@mds/components';
<MDSIcon name="heart" />   // lazy-loaded, Suspense-wrapped
```

If a parent component needs its own Suspense boundary for other reasons, it can wrap children — the inner `MDSIcon` Suspense will resolve first and the outer one handles any other lazy children.

## Examples

### Plain usage

```tsx
import { MDSIcon } from '@mds/components';

function Toolbar() {
  return (
    <div>
      <MDSIcon name="house" />
      <MDSIcon name="gear" />
      <MDSIcon name="user" />
    </div>
  );
}
// Ships 3 icon chunks; the rest of the 1505 stay un-fetched.
```

### Pre-fetching (optional)

If a consumer wants to warm the cache for an icon before it's used:

```ts
import { iconRegistry } from '@mds/icons';
// Trigger the chunk load early — e.g. on route prefetch:
void iconRegistry['gear'];
```

Vite/Rollup chunk-prefetch hints can also be added at the import site.

## Exceptions

None. Every icon goes through the lazy registry — there is no "eager" path. If a consumer needs synchronous SVG content for SSR or static export, the chunk must be awaited at the boundary; React 18+'s server Suspense handles this natively.

## Related

- [[index]]
- [[registry]]
- [[components/MDSIcon]]
- [[architecture/icon-pipeline]]
- [[foundation/number-ramp]]
