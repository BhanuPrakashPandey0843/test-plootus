import Head from 'next/head';
import RmdCalculator from '../components/calculators/RmdCalculator/RmdCalculator';

export default function RmdCalculatorPage() {
  return (
    <>
      <Head>
        <title>RMD Calculator: Required Minimum Distributions | Plootus</title>
        <meta
          name="description"
          content="Calculate your Required Minimum Distributions (RMDs) from traditional IRAs and 401(k)s. Ensure you withdraw the correct amount to avoid IRS penalties."
        />
        <meta
          name="keywords"
          content="RMD calculator, required minimum distribution, IRS RMD rules, 401k withdrawal calculator, traditional IRA RMD"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <RmdCalculator />
    </>
  );
}
