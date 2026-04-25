import Head from 'next/head';
import RetirementIncomeCalculator from '../components/calculators/RetirementIncomeCalculator/RetirementIncomeCalculator';

export default function RetirementIncomeCalculatorPage() {
  return (
    <>
      <Head>
        <title>Retirement Income Calculator | Plootus</title>
        <meta
          name="description"
          content="Estimate your monthly retirement income based on your current savings, contributions, and expected returns. See if your retirement plan is on track."
        />
        <meta
          name="keywords"
          content="retirement income calculator, monthly retirement income, retirement withdrawal calculator, 401k income"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <RetirementIncomeCalculator />
    </>
  );
}
