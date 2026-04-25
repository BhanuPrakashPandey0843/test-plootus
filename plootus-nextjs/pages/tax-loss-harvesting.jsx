import React from 'react';
import Head from 'next/head';
import TaxLossHarvesting from '../components/tax/TaxLossHarvesting/TaxLossHarvesting';

const TaxLossHarvestingPage = () => {
  return (
    <>
      <Head>
        <title>Tax-Loss Harvesting: Complete Guide for 2026 | Plootus</title>
        <meta name="description" content="Tax-loss harvesting turns declining investments into real tax savings — without permanently leaving the market. Learn about the wash-sale rule, the $3,000 annual income deduction, and carryforward rules." />
      </Head>
      <TaxLossHarvesting />
    </>
  );
};

export default TaxLossHarvestingPage;
