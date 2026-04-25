import Head from 'next/head';
import Average403bBalance from '../components/benchmarks/Average403bBalanceByAge/Average403bBalance';

export default function Average403bBalanceByAgePage() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <title>Average 403(b) Balance by Age 2026 | Plootus</title>
        <meta
          name="description"
          content="Compare your 403(b) retirement savings to the national average and median balances by age group for 2026."
        />
        <meta
          name="keywords"
          content="average 403b balance by age, 403b benchmarks, teachers retirement savings, non-profit retirement savings"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Average403bBalance />
    </>
  );
}
