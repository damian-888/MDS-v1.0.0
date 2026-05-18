import { useOf } from '@storybook/addon-docs/blocks';
import type { MDSDocsParams } from './types';

/**
 * Resolves the active meta and returns its `parameters.mds.docs` block,
 * or `undefined` if the meta has no MDS docs configured. Centralises the
 * `useOf` + typed-parameters access that every docs block previously
 * duplicated.
 */
export function useMDSDocs(): MDSDocsParams | undefined {
  const resolved = useOf('meta', ['meta']);
  const mds = (resolved.preparedMeta.parameters as { mds?: { docs?: MDSDocsParams } })?.mds;
  return mds?.docs;
}
