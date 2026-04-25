import React from 'react';
import Head from 'next/head';
import IraContributionLimits from '../components/tax/IraContributionLimits/IraContributionLimits';

const IraContributionLimitsPage = () => {
  return (
    <>
      <Head>
        <title>IRA & 401(k) Contribution Limits 2026: Max Out Your Savings | Plootus</title>
        <meta name="description" content="Official 2026 IRS contribution limits for Traditional IRA, Roth IRA, 401(k), 403(b), and TSP. Learn about catch-up contributions for age 50+ and the new SECURE Act 2.0 catch-up rules for ages 60-63." />
      </Head>
      <IraContributionLimits />
    </>
  );
};

export default IraContributionLimitsPage;
