import React from 'react';
import WhereIsMyRefund from '../components/where-is-my-refund';
import Head from 'next/head';
import HubNav from '../components/HubNav/HubNav';

const WhereIsMyRefundPage = () => {
  return (
    <>
      <Head>
        <title>Where Is My Refund? - Plootus</title>
        <meta
          name="description"
          content="Track your federal and state tax refund status. Find links to IRS refund trackers and state-specific tax agencies."
        />
      </Head>
      <HubNav />
      <WhereIsMyRefund />
    </>
  );
};

export default WhereIsMyRefundPage;
