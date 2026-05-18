import { useMDSDocs } from '../useMDSDocs';

export function GuidelinesBlock() {
  const docs = useMDSDocs();
  const guidelines = docs?.guidelines;
  if (!guidelines) return null;

  return (
    <>
      <section>
        <h3>When to use</h3>
        <ul>
          {guidelines.use.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>When NOT to use</h3>
        <ul>
          {guidelines.avoid.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
