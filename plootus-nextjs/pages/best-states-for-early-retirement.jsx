import Head from 'next/head';
import BestStatesForEarlyRetirement from '../components/statehub/BestStatesForEarlyRetirement/BestStatesForEarlyRetirement';

export default function BestStatesForEarlyRetirementPage() {
  return (
    <>
      <Head>
        <title>Best States for Early Retirement (FIRE) 2026 | Plootus</title>
        <meta name="description" content="The best states for early retirement (FIRE) in 2026. Calculate your FIRE number by state and compare taxes, healthcare, and costs." />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <BestStatesForEarlyRetirement />
    </>
  );
}
