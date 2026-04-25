import React from 'react';
import Head from 'next/head';
import RetirementTaxGuide from '../components/tax/RetirementTaxGuide/RetirementTaxGuide';

const RetirementTaxGuidePage = () => {
  return (
    <>
      <Head>
        <title>The Complete Guide to Retirement Taxation (2026) | Plootus</title>
        <meta name="description" content="Retirement changes how you're taxed. Learn the 'Tax Pillar' strategy: how Social Security, IRAs, Roths, and brokerage accounts are taxed differently. Master the strategies to minimize your lifetime tax bill." />
      </Head>
      <RetirementTaxGuide />
    </>
  );
};

export default RetirementTaxGuidePage;
