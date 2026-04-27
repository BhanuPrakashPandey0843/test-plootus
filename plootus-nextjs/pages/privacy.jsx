import React from 'react';
import Head from 'next/head';
import PrivacyPage from '../components/privacy/PrivacyPage';

const Privacy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Plootus</title>
        <meta
          name="description"
          content="Learn how Plootus collects, uses, and protects your personal information. Read our comprehensive privacy policy to understand your rights and our data practices."
        />
        <meta
          name="keywords"
          content="privacy policy, data protection, CCPA, personal information, data security, Plootus privacy"
        />
        <meta property="og:title" content="Privacy Policy | Plootus" />
        <meta
          property="og:description"
          content="Learn how Plootus collects, uses, and protects your personal information. Read our comprehensive privacy policy to understand your rights and our data practices."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.plootus.com/privacy" />
      </Head>
      <PrivacyPage />
    </>
  );
};

export default Privacy;
