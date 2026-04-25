import React from 'react';
import Head from 'next/head';
import CapitalGainsTaxRates from '../components/tax/CapitalGainsTaxRates/CapitalGainsTaxRates';

const CapitalGainsTaxRatesPage = () => {
  return (
    <>
      <Head>
        <title>Capital Gains Tax Rates 2026: Complete Guide | Plootus</title>
        <meta name="description" content="Long-term capital gains can be taxed at 0% in retirement if you manage income carefully. The 2026 thresholds, short-term vs. long-term rules, NIIT, and how capital gains interact with Social Security taxes — all here." />
      </Head>
      <CapitalGainsTaxRates />
    </>
  );
};

export default CapitalGainsTaxRatesPage;
