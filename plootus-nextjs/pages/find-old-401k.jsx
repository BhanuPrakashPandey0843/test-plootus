import React from 'react';
import FindOld401k from '../components/find-old-401k';
import Head from 'next/head';
import HubNav from '../components/HubNav/HubNav';

const FindOld401kPage = () => {
  return (
    <>
      <Head>
        <title>Find Old 401k - Retirement Savings Lost & Found - Plootus</title>
        <meta
          name="description"
          content="Easily locate forgotten retirement accounts like 401(k)s, pensions, and other employer-sponsored plans. Reclaim the benefits you've earned."
        />
      </Head>
      <HubNav />
      <FindOld401k />
    </>
  );
};

export default FindOld401kPage;
