import { MDSButton } from '@mds/components';
import { useMDSDocs } from '../useMDSDocs';

export function RelatedBlock() {
  const docs = useMDSDocs();
  const related = docs?.related;
  if (!related || related.length === 0) return null;

  return (
    <section>
      <h3>Related components</h3>
      {related.map((entry) => (
        <MDSButton
          key={entry.href}
          variant="outline"
          size="small"
          // Render as a real <a> so navigation + middle-click work,
          // while still picking up the MDSButton outline styling.
          // `nativeButton={false}` tells Base UI we are intentionally
          // rendering a non-<button> element (silences its dev warning).
          render={<a href={entry.href} />}
          nativeButton={false}
          style={{ marginInlineEnd: 'var(--mds-spacing-extra-small)' }}
        >
          {entry.name}
        </MDSButton>
      ))}
    </section>
  );
}
