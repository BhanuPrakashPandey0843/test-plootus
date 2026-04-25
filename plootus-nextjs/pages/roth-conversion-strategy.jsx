import React from 'react';
import Head from 'next/head';
import RothConversionStrategy from '../components/tax/RothConversionStrategy/RothConversionStrategy';

const RothConversionStrategyPage = () => {
  return (
    <>
      <Head>
        <title>Roth Conversion Strategy: The Complete 2026 Guide | Plootus</title>
        <meta name="description" content="Roth conversions can save you hundreds of thousands in lifetime taxes — but only if you convert at the right time and in the right amount. Learn about the conversion corridor, IRMAA traps, and timing." />
      </Head>
      <RothConversionStrategy />
    </>
  );
};

export default RothConversionStrategyPage;
