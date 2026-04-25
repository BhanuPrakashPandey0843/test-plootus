import React from 'react';
import Head from 'next/head';
import StandardDeduction2026 from '../components/tax/StandardDeduction2026/StandardDeduction2026';

const StandardDeduction2026Page = () => {
  return (
    <>
      <Head>
        <title>Standard Deduction 2026: All Amounts, Age 65+ Rules & When to Itemize | Plootus</title>
        <meta name="description" content="The 2026 standard deduction is $15,000 for single filers and $30,000 for married filing jointly — before any income is taxed. Taxpayers 65+ receive up to $2,600 more. Learn the rules here." />
      </Head>
      <StandardDeduction2026 />
    </>
  );
};

export default StandardDeduction2026Page;
