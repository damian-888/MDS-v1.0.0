import { useOf } from '@storybook/addon-docs/blocks';
import type { CSSProperties } from 'react';
import { MDSIcon } from '@mds/components';
import type { MDSDocsParams } from '../types';

const headingStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--mds-spacing-small)',
  margin: 0,
  fontFamily: 'var(--mds-typography-h3-font-family)',
  fontSize: 'var(--mds-typography-h3-font-size)',
  lineHeight: 'var(--mds-typography-h3-line-height)',
  fontWeight: 'var(--mds-typography-h3-font-weight)' as CSSProperties['fontWeight'],
  color: 'var(--mds-colours-basic-text)',
};

const iconStyle: CSSProperties = {
  color: 'var(--mds-colours-basic-accent)',
  flexShrink: 0,
};

const listStyle: CSSProperties = {
  marginTop: 'var(--mds-spacing-small)',
  marginBottom: 0,
  paddingLeft: 'var(--mds-spacing-medium)',
  fontFamily: 'var(--mds-typography-body-font-family)',
  fontSize: 'var(--mds-typography-body-font-size)',
  lineHeight: 'var(--mds-typography-body-line-height)',
  color: 'var(--mds-colours-basic-text)',
};

const listItemStyle: CSSProperties = {
  marginTop: 'var(--mds-spacing-small)',
};

export function GuidelinesBlock() {
  const resolved = useOf('meta', ['meta']);
  const mds = (resolved.preparedMeta.parameters as { mds?: { docs?: MDSDocsParams } })?.mds;
  const guidelines = mds?.docs?.guidelines;

  if (!guidelines) return null;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--mds-spacing-extra-large)',
        marginTop: 0,
      }}
    >
      <section>
        <h4 style={headingStyle}>
          <MDSIcon name="check" size="small" aria-hidden style={iconStyle} />
          When to use
        </h4>
        <ul style={listStyle}>
          {guidelines.use.map((line) => (
            <li key={line} style={listItemStyle}>
              {line}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h4 style={headingStyle}>
          <MDSIcon name="x" size="small" aria-hidden style={iconStyle} />
          When NOT to use
        </h4>
        <ul style={listStyle}>
          {guidelines.avoid.map((line) => (
            <li key={line} style={listItemStyle}>
              {line}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
