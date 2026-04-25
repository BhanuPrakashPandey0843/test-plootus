import React from 'react';
import WhereIsMyRefund from '../components/where-is-my-refund';
import Layout from '../components/layout/Layout';
import Head from 'next/head';

const WhereIsMyRefundPage = () => {
  return (
    <Layout>
      <Head>
        <title>Where Is My Refund? - Plootus</title>
        <meta
          name="description"
          content="Track your federal and state tax refund status. Find links to IRS refund trackers and state-specific tax agencies."
        />
      </Head>
      <WhereIsMyRefund />
    </Layout>
  );
};

export default WhereIsMyRefundPage;
