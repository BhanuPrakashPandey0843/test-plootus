import Head from 'next/head';
import AverageIraBalance from '../components/benchmarks/AverageIraBalanceByAge/AverageIraBalance';

export default function AverageIraBalancePage() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <title>Average IRA Balance by Age 2026 | Plootus</title>
        <meta
          name="description"
          content="See the average and median IRA balances by age group for 2026. Compare your Roth and Traditional IRA savings against national benchmarks."
        />
        <meta
          name="keywords"
          content="average IRA balance by age, median IRA balance, roth ira benchmarks, traditional ira average balance"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AverageIraBalance />
    </>
  );
}
