import { useOf } from '@storybook/addon-docs/blocks';
import type { MDSDocsParams } from '../types';

/**
 * Renders the one-line summary from `parameters.mds.docs.summary` as a subtitle.
 * Sits directly below <Title /> in the shared docs template.
 */
export function SummaryBlock() {
  const resolved = useOf('meta', ['meta']);
  const mds = (resolved.preparedMeta.parameters as { mds?: { docs?: MDSDocsParams } })?.mds;
  const summary = mds?.docs?.summary;

  if (!summary) return null;

  return (
    <p
      style={{
        fontFamily: 'var(--mds-typography-body-large-font-family)',
        fontSize: 'var(--mds-typography-body-large-font-size)',
        lineHeight: 'var(--mds-typography-body-large-line-height)',
        color: 'var(--mds-colours-basic-text-secondary)',
        marginTop: 4,
        marginBottom: 24,
      }}
    >
      {summary}
    </p>
  );
}
