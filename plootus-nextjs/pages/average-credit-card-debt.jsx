import Head from 'next/head';
import AverageCreditCardDebt from '../components/benchmarks/AverageCreditCardDebt/AverageCreditCardDebt';

export default function AverageCreditCardDebtPage() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <title>Average Credit Card Debt in America 2026 | Plootus</title>
        <meta
          name="description"
          content="Find out the average credit card debt by age, state, and income level in 2026, and learn strategies to pay it down faster."
        />
        <meta
          name="keywords"
          content="average credit card debt, credit card debt by age, US debt statistics, paying off credit cards"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AverageCreditCardDebt />
    </>
  );
}
