import { useOf } from '@storybook/addon-docs/blocks';
import type { CSSProperties } from 'react';
import type { MDSDocsParams } from '../types';

const labelStyle: CSSProperties = {
  margin: 0,
  marginBottom: 'var(--mds-spacing-small)',
  fontFamily: 'var(--mds-typography-microcopy-font-family)',
  fontSize: 'var(--mds-typography-microcopy-font-size)',
  lineHeight: 'var(--mds-typography-microcopy-line-height)',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--mds-colours-basic-text-secondary)',
};

const listStyle: CSSProperties = {
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  gap: 'var(--mds-spacing-small)',
  flexWrap: 'wrap',
};

const pillStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: 'var(--mds-spacing-extra-small) var(--mds-spacing-small)',
  borderRadius: 'var(--mds-radius-full)',
  border: 'var(--mds-strokes-1) solid var(--mds-colours-basic-stroke-secondary)',
  fontFamily: 'var(--mds-typography-body-bold-font-family)',
  fontSize: 'var(--mds-typography-body-bold-font-size)',
  lineHeight: 'var(--mds-typography-body-bold-line-height)',
  fontWeight: 'var(--mds-typography-body-bold-font-weight)' as CSSProperties['fontWeight'],
  color: 'var(--mds-colours-basic-text)',
  textDecoration: 'none',
  transition: 'background-color 120ms ease, border-color 120ms ease',
};

const sectionStyle: CSSProperties = {
  marginTop: 'var(--mds-spacing-extra-large)',
  paddingTop: 'var(--mds-spacing-large)',
  borderTop: 'var(--mds-strokes-1) solid var(--mds-colours-basic-stroke-secondary)',
};

export function RelatedBlock() {
  const resolved = useOf('meta', ['meta']);
  const mds = (resolved.preparedMeta.parameters as { mds?: { docs?: MDSDocsParams } })?.mds;
  const related = mds?.docs?.related;

  if (!related || related.length === 0) return null;

  return (
    <section style={sectionStyle}>
      <h4 style={labelStyle}>Related components</h4>
      <ul style={listStyle}>
        {related.map((entry) => (
          <li key={entry.href}>
            <a href={entry.href} style={pillStyle}>
              {entry.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
