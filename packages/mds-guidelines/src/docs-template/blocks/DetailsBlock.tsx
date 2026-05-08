import { useOf } from '@storybook/addon-docs/blocks';
import type { CSSProperties } from 'react';
import type { MDSDocsParams } from '../types';

const LABELS: Record<keyof NonNullable<MDSDocsParams['details']>, string> = {
  behaviour: 'Behaviour',
  accessibility: 'Accessibility',
  animation: 'Animation & motion',
  gotchas: 'Gotchas',
};

const ORDER: Array<keyof NonNullable<MDSDocsParams['details']>> = [
  'behaviour',
  'accessibility',
  'animation',
  'gotchas',
];

const labelStyle: CSSProperties = {
  margin: 0,
  fontFamily: 'var(--mds-typography-microcopy-font-family)',
  fontSize: 'var(--mds-typography-microcopy-font-size)',
  lineHeight: 'var(--mds-typography-microcopy-line-height)',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--mds-colours-basic-text-secondary)',
};

const bodyStyle: CSSProperties = {
  margin: 0,
  marginTop: 'var(--mds-spacing-small)',
  whiteSpace: 'pre-wrap',
  fontFamily: 'var(--mds-typography-body-font-family)',
  fontSize: 'var(--mds-typography-body-font-size)',
  lineHeight: 'var(--mds-typography-body-line-height)',
  color: 'var(--mds-colours-basic-text)',
};

export function DetailsBlock() {
  const resolved = useOf('meta', ['meta']);
  const mds = (resolved.preparedMeta.parameters as { mds?: { docs?: MDSDocsParams } })?.mds;
  const details = mds?.docs?.details;

  if (!details) return null;

  const populated = ORDER.filter(
    (key) => typeof details[key] === 'string' && details[key]!.trim().length > 0,
  );
  if (populated.length === 0) return null;

  return (
    <div
      style={{
        display: 'grid',
        gap: 'var(--mds-spacing-large)',
        marginTop: 0,
      }}
    >
      {populated.map((key) => (
        <section key={key}>
          <h4 style={labelStyle}>{LABELS[key]}</h4>
          <p style={bodyStyle}>{details[key]}</p>
        </section>
      ))}
    </div>
  );
}
