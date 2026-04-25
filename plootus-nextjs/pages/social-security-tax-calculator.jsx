import React from 'react';
import Head from 'next/head';
import SocialSecurityTaxCalculator from '../components/tax/SocialSecurityTaxCalculator/SocialSecurityTaxCalculator';

const SocialSecurityTaxCalculatorPage = () => {
  return (
    <>
      <Head>
        <title>Social Security Tax Calculator 2026: Is Your Benefit Taxable? | Plootus</title>
        <meta name="description" content="Up to 85% of Social Security benefits can be federally taxable. Use this free calculator to find out exactly how much of your SS benefit is taxable based on your provisional income." />
      </Head>
      <SocialSecurityTaxCalculator />
    </>
  );
};

export default SocialSecurityTaxCalculatorPage;
