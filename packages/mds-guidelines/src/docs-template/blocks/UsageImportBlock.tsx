import { Source, useOf } from '@storybook/addon-docs/blocks';
import { useMDSDocs } from '../useMDSDocs';

export function UsageImportBlock() {
  const docs = useMDSDocs();
  // Component name comes from the resolved meta — useMDSDocs doesn't expose
  // it because it's not part of the MDSDocsParams contract.
  const resolved = useOf('meta', ['meta']);
  const component = resolved.preparedMeta.component as
    | { displayName?: string; name?: string }
    | undefined;
  const componentName = component?.displayName ?? component?.name ?? 'Component';

  if (!docs?.usage?.importFrom) return null;
  const code = `import { ${componentName} } from '${docs.usage.importFrom}';`;
  return <Source code={code} language="tsx" />;
}
