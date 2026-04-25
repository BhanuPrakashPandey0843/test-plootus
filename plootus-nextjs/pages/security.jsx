import React from 'react';
import SecurityPage from '../components/security/SecurityPage';
import Head from 'next/head';

const Security = () => {
  return (
    <>
      <Head>
        <title>Security - Plootus</title>
        <meta
          name="description"
          content="Plootus uses bank-level security and encryption to keep your financial data safe and private."
        />
      </Head>
      <SecurityPage />
    </>
  );
};

export default Security;
