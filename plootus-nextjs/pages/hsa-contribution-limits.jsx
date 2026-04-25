import Head from 'next/head';
import HsaContributionLimits from '../components/accounts/HsaContributionLimits/HsaContributionLimits';

export default function HsaContributionLimitsPage() {
  return (
    <>
      <Head>
        <title>HSA Contribution Limits 2026: Complete Guide & Strategy</title>
        <meta name="description" content="Learn the 2026 HSA contribution limits and how to use your Health Savings Account as a triple-tax-advantaged retirement tool. IRS rules and investment strategies." />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <HsaContributionLimits />
    </>
  );
}
