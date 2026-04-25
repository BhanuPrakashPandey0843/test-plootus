import Head from 'next/head';
import InflationRetirementCalculator from '../components/calculators/InflationRetirementCalculator/InflationRetirementCalculator';

export default function InflationRetirementCalculatorPage() {
  return (
    <>
      <Head>
        <title>Inflation Retirement Calculator | Plootus</title>
        <meta
          name="description"
          content="Find out how inflation will impact your retirement savings and purchasing power. Calculate your real return and adjust your retirement plan for inflation."
        />
        <meta
          name="keywords"
          content="inflation calculator, retirement inflation impact, purchasing power, real return calculator"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <InflationRetirementCalculator />
    </>
  );
}
