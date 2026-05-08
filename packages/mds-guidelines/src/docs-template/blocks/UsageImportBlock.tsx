import { Source, useOf } from '@storybook/addon-docs/blocks';
import type { MDSDocsParams } from '../types';

export function UsageImportBlock() {
  const resolved = useOf('meta', ['meta']);
  const mds = (resolved.preparedMeta.parameters as { mds?: { docs?: MDSDocsParams } })?.mds;
  const importFrom = mds?.docs?.usage?.importFrom;
  const component = resolved.preparedMeta.component as
    | { displayName?: string; name?: string }
    | undefined;
  const componentName = component?.displayName ?? component?.name ?? 'Component';

  if (!importFrom) return null;

  const code = `import { ${componentName} } from '${importFrom}';`;
  return <Source code={code} language="tsx" />;
}
