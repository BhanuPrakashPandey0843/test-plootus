import React from 'react';
import Philosophy from '../components/about/Philosophy';
import Layout from '../components/layout/Layout';
import Head from 'next/head';

const PhilosophyPage = () => {
  return (
    <Layout>
      <Head>
        <title>Our Philosophy | Plootus</title>
        <meta name="description" content="Democratize retirement planning for all. Technology-enabled, expert financial advice that does not break your bank." />
      </Head>
      <Philosophy />
    </Layout>
  );
};

export default PhilosophyPage;
