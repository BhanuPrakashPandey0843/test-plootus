import Head from 'next/head';
import BestStatesToRetire from '../components/statehub/BestStatesToRetire/BestStatesToRetire';

export default function BestStatesToRetirePage() {
  return (
    <>
      <Head>
        <title>Best States to Retire in 2026 | Plootus</title>
        <meta name="description" content="Top 10 best states to retire in 2026 ranked by affordability, taxes, and healthcare quality. Wyoming and Florida lead the rankings." />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <BestStatesToRetire />
    </>
  );
}
