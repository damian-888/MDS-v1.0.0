import type { CSSProperties } from 'react';
import {
  Title,
  Primary,
  Controls,
  Stories,
} from '@storybook/addon-docs/blocks';
import {
  GuidelinesBlock,
  UsageImportBlock,
  DetailsBlock,
  RelatedBlock,
  SummaryBlock,
} from './blocks';

/**
 * Section heading shared style.
 * Flush-left, token-driven typography and spacing. Every h2 in the
 * Docs page — including per-story variant headings inside Usage & API —
 * uses this shape via the matching .storybook/preview.css rules.
 */
const sectionHeadingStyle: CSSProperties = {
  fontFamily: 'var(--mds-typography-h2-font-family)',
  fontSize: 'var(--mds-typography-h2-font-size)',
  lineHeight: 'var(--mds-typography-h2-line-height)',
  fontWeight: 'var(--mds-typography-h2-font-weight)' as CSSProperties['fontWeight'],
  letterSpacing: 'var(--mds-typography-h2-letter-spacing)',
  color: 'var(--mds-colours-basic-text)',
  marginTop: 'var(--mds-spacing-extra-large)',
  marginBottom: 'var(--mds-spacing-extra-small)',
};

/**
 * Shared Docs template for every MDS component.
 * Wired onto every meta via `parameters.docs.page`.
 */
export function ComponentDocs() {
  return (
    <>
      <Title />
      <SummaryBlock />

      <h2 style={sectionHeadingStyle}>Playground</h2>
      <Primary />
      <Controls />

      <h2 style={sectionHeadingStyle}>Guidelines</h2>
      <GuidelinesBlock />

      <h2 style={sectionHeadingStyle}>Usage &amp; API</h2>
      <UsageImportBlock />
      {/* title={<></>} suppresses Storybook's auto-injected "Stories" heading.
          The <Stories> block only wraps string titles in its StyledHeading —
          passing an empty React element renders nothing. */}
      <Stories title={<></>} includePrimary={false} />

      <h2 style={sectionHeadingStyle}>Details</h2>
      <DetailsBlock />

      <RelatedBlock />
    </>
  );
}
