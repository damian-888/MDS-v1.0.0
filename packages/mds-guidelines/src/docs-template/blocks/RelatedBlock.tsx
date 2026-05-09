import { useOf } from '@storybook/addon-docs/blocks';
import type { MDSDocsParams } from '../types';

export function RelatedBlock() {
  const resolved = useOf('meta', ['meta']);
  const mds = (resolved.preparedMeta.parameters as { mds?: { docs?: MDSDocsParams } })?.mds;
  const related = mds?.docs?.related;

  if (!related || related.length === 0) return null;

  return (
    <section className="mds-related">
      <h4 className="mds-related-label">Related components</h4>
      <ul className="mds-related-list">
        {related.map((entry) => (
          <li key={entry.href}>
            <a href={entry.href} className="mds-related-pill">
              {entry.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
