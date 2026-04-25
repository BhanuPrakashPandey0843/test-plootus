import Head from 'next/head';
import CheapestStateToRetireFrom from '../components/statehub/CheapestStateToRetireFrom/CheapestStateToRetireFrom';

export default function CheapestStatesToRetirePage() {
  return (
    <>
      <Head>
        <title>Cheapest States to Retire in 2026 | Plootus</title>
        <meta name="description" content="Find the absolute cheapest states to retire in 2026. Mississippi, Oklahoma, and West Virginia offer the lowest cost of living for retirees." />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <CheapestStateToRetireFrom />
    </>
  );
}
