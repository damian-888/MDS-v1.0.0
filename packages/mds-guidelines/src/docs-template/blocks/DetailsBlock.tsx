import { useOf } from '@storybook/addon-docs/blocks';
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
    <div className="mds-details">
      {populated.map((key) => (
        <section key={key}>
          <h4 className="mds-details-label">{LABELS[key]}</h4>
          <p className="mds-details-body">{details[key]}</p>
        </section>
      ))}
    </div>
  );
}
