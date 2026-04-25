import React from 'react';
import Head from 'next/head';
import FederalIncomeTaxBrackets from '../components/tax/FederalIncomeTaxBrackets/FederalIncomeTaxBrackets';

const FederalIncomeTaxBracketsPage = () => {
  return (
    <>
      <Head>
        <title>Federal Income Tax Brackets 2026: Estimate Your Taxes | Plootus</title>
        <meta name="description" content="New 2026 federal income tax brackets and rates. Estimate your federal income tax bill with our free 2026 tax calculator. Learn how taxable income, standard deductions, and tax credits impact your final bill." />
      </Head>
      <FederalIncomeTaxBrackets />
    </>
  );
};

export default FederalIncomeTaxBracketsPage;
