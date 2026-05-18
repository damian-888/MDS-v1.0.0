import { useMDSDocs } from '../useMDSDocs';
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
  const docs = useMDSDocs();
  const details = docs?.details;
  if (!details) return null;

  const populated = ORDER.filter(
    (key) => typeof details[key] === 'string' && details[key]!.trim().length > 0,
  );
  if (populated.length === 0) return null;

  return (
    <>
      {populated.map((key) => (
        <section key={key}>
          <h4>{LABELS[key]}</h4>
          <p>{details[key]}</p>
        </section>
      ))}
    </>
  );
}
