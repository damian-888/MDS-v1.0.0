import type { Meta } from '@storybook/react-vite';
import type { ComponentType, ComponentProps } from 'react';

/**
 * Structured content fields for the shared MDS Storybook Docs template.
 * Every component meta must provide these under `parameters.mds.docs`.
 * The ComponentDocs template and custom blocks read them at render time.
 */
export type MDSDocsParams = {
  /** One-line component summary rendered at the top of the Docs page. */
  summary: string;

  /** Optional Figma URL — wired to `@storybook/addon-designs` for the Design panel. */
  figmaUrl?: string;

  /** Optional links to related components (renders after the Details section). */
  related?: Array<{ name: string; href: string }>;

  /** Required — powers the Guidelines section (✓ use / ✗ avoid). */
  guidelines: {
    use: string[];
    avoid: string[];
  };

  /** Required — powers the import-snippet block at the top of Usage & API. */
  usage: {
    /** Package specifier shown in the import snippet, e.g. '@mds/components'. */
    importFrom: string;
  };

  /** Optional sub-sections of the Details block. Empty sub-sections are omitted. */
  details?: {
    behaviour?: string;
    accessibility?: string;
    animation?: string;
    gotchas?: string;
  };
};

/**
 * Component title prefix — enforced at the type level via template-literal types.
 * Allowed buckets: Components, Utilities, Foundations.
 * Component name must start with `MDS`.
 */
export type MDSTitle =
  | `Components/MDS${string}`
  | `Utilities/MDS${string}`
  | `Foundations/MDS${string}`;

/**
 * The contract every MDS component meta must satisfy.
 * Use as: `satisfies MDSMeta<typeof MyComponent>` on an object-literal meta.
 *
 * Storybook's CSF indexer performs static analysis on the default export,
 * so the meta MUST be written as a plain object literal — a function-wrapper
 * factory is rejected by the indexer ("CSF: default export must be an object").
 * The `satisfies` operator gives us type enforcement without breaking that.
 */
export type MDSMeta<
  TComponent extends ComponentType<any>,
  TExtraArgs extends object = {},
> = Meta<ComponentProps<TComponent> & TExtraArgs> & {
  title: MDSTitle;
  tags: ['autodocs'];
  parameters: {
    docs: { page: ComponentType };
    mds: { docs: MDSDocsParams };
    design?: { type: 'figma'; url: string };
    [key: string]: unknown;
  };
};
