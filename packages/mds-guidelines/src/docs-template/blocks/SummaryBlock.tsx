import { useMDSDocs } from '../useMDSDocs';

export function SummaryBlock() {
  const docs = useMDSDocs();
  if (!docs?.summary) return null;
  return <p>{docs.summary}</p>;
}
