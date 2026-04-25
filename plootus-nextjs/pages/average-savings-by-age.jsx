import Head from 'next/head';
import AverageSavingsByAge from '../components/benchmarks/AverageSavingsByAge/AverageSavingsByAge';

export default function AverageSavingsByAgePage() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <title>Average Savings by Age 2026 | Plootus</title>
        <meta
          name="description"
          content="How much should you have saved at your age? Compare your savings account and emergency fund balances to the national averages."
        />
        <meta
          name="keywords"
          content="average savings by age, emergency fund benchmarks, median savings account balance, saving money"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AverageSavingsByAge />
    </>
  );
}
