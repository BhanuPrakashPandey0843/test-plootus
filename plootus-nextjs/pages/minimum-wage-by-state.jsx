import Head from 'next/head';
import MinimumWageByState from '../components/incomecosts/MinimumWageByState/MinimumWageByState';

export default function MinimumWageByStatePage() {
  return (
    <>
      <Head>
        <title>Minimum Wage by State (2025) | Plootus</title>
        <meta name="description" content="The complete 2025 state minimum wage table for all 50 states plus D.C. The federal minimum wage has been $7.25 since 2009 — see where your state stands." />
        <link rel="canonical" href="https://www.plootus.com/minimum-wage-by-state" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <MinimumWageByState />
    </>
  );
}
