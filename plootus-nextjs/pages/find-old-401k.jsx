import React from 'react';
import FindOld401k from '../components/find-old-401k';
import Layout from '../components/layout/Layout';
import Head from 'next/head';

const FindOld401kPage = () => {
  return (
    <Layout>
      <Head>
        <title>Find Old 401k - Retirement Savings Lost & Found - Plootus</title>
        <meta
          name="description"
          content="Easily locate forgotten retirement accounts like 401(k)s, pensions, and other employer-sponsored plans. Reclaim the benefits you've earned."
        />
      </Head>
      <FindOld401k />
    </Layout>
  );
};

export default FindOld401kPage;
