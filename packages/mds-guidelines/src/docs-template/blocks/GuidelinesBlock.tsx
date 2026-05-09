import { useOf } from '@storybook/addon-docs/blocks';
import { MDSIcon } from '@mds/components';
import type { MDSDocsParams } from '../types';

export function GuidelinesBlock() {
  const resolved = useOf('meta', ['meta']);
  const mds = (resolved.preparedMeta.parameters as { mds?: { docs?: MDSDocsParams } })?.mds;
  const guidelines = mds?.docs?.guidelines;

  if (!guidelines) return null;

  return (
    <div className="mds-guidelines">
      <section>
        <h4 className="mds-guidelines-heading">
          <MDSIcon name="check" size="small" aria-hidden className="mds-guidelines-icon" />
          When to use
        </h4>
        <ul className="mds-guidelines-list">
          {guidelines.use.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>
      <section>
        <h4 className="mds-guidelines-heading">
          <MDSIcon name="x" size="small" aria-hidden className="mds-guidelines-icon" />
          When NOT to use
        </h4>
        <ul className="mds-guidelines-list">
          {guidelines.avoid.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
