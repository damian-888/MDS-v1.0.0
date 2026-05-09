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
 * Shared Docs template for every MDS component.
 * Wired onto every meta via `parameters.docs.page` (set globally in
 * `.storybook/preview.ts`). All visual styling lives in
 * `.storybook/preview.css` under the `.sbdocs.sbdocs-content` scope.
 */
export function ComponentDocs() {
  return (
    <>
      <Title />
      <SummaryBlock />

      <h2>Playground</h2>
      <Primary />
      <Controls />

      <h2>Guidelines</h2>
      <GuidelinesBlock />

      <h2>Usage &amp; API</h2>
      <UsageImportBlock />
      {/* title={<></>} suppresses Storybook's auto-injected "Stories" heading.
          The <Stories> block only wraps string titles in its StyledHeading —
          passing an empty React element renders nothing. */}
      <Stories title={<></>} includePrimary={false} />

      <h2>Details</h2>
      <DetailsBlock />

      <RelatedBlock />
    </>
  );
}
