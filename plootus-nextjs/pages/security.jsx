import React from 'react';
import Head from 'next/head';
import SecurityPage from '../components/security/SecurityPage';
import HubNav from '../components/HubNav/HubNav';

const Security = () => {
  return (
    <>
      <Head>
        <title>Security &amp; Privacy - Plootus</title>
        <meta
          name="description"
          content="Plootus takes security seriously. Learn about our encryption, data protection, privacy policies, and how we keep your financial information safe."
        />
        <meta
          name="keywords"
          content="Plootus security, data protection, encryption, privacy, financial security, secure investing"
        />
        <link rel="canonical" href="https://www.plootus.com/security" />
      </Head>
      <HubNav />
      <SecurityPage />
    </>
  );
};

export default Security;
