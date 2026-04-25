import Head from 'next/head';
import SocialSecurityCalculator from '../components/calculators/SocialSecurityCalculator/SocialSecurityCalculator';

export default function SocialSecurityCalculatorPage() {
  return (
    <>
      <Head>
        <title>Social Security Calculator | Plootus</title>
        <meta
          name="description"
          content="Estimate your Social Security benefits and find out the optimal age to claim. See how working longer affects your monthly Social Security payouts."
        />
        <meta
          name="keywords"
          content="social security calculator, estimate social security benefits, when to claim social security, retirement benefits"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <SocialSecurityCalculator />
    </>
  );
}
