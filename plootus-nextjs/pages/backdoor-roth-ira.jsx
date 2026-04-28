import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import BackdoorRothIra from '../components/accounts/BackdoorRothIra/BackdoorRothIra';

const BackdoorRothIraPage = () => {
  return (
    <>
      <Head>
        <title>Backdoor Roth IRA: Step-by-Step Guide for High Earners (2026) | Plootus</title>
        <meta name="description" content="If your income exceeds the Roth IRA limit, this IRS-approved workaround is essential. Step-by-step process, how to avoid the pro-rata trap, and Mega Backdoor Roth." />
        <link rel="canonical" href="https://www.plootus.com/backdoor-roth-ira" />
      </Head>
      <Navbar />
      <main style={{ marginTop: '80px' }}>
        <BackdoorRothIra />
      </main>
      <Footer />
    </>
  );
};

export default BackdoorRothIraPage;
