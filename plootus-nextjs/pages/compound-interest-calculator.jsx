import Head from 'next/head';
import CompoundInterestCalculator from '../components/calculators/CompoundInterestCalculator/CompoundInterestCalculator';

export default function CompoundInterestCalculatorPage() {
  return (
    <>
      <Head>
        <title>Compound Interest Calculator | Plootus</title>
        <meta
          name="description"
          content="Calculate how your money can grow over time with our free compound interest calculator. See the impact of daily, monthly, or annual compounding."
        />
        <meta
          name="keywords"
          content="compound interest calculator, investment calculator, APY calculator, future value calculator, money growth"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <CompoundInterestCalculator />
    </>
  );
}
