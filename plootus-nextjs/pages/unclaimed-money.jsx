import React from 'react';
import UnclaimedMoney from '../components/unclaimed-money';
import Layout from '../components/layout/Layout';
import Head from 'next/head';

const UnclaimedMoneyPage = () => {
  return (
    <Layout>
      <Head>
        <title>Unclaimed Money Finder | Plootus</title>
        <meta name="description" content="Discover unclaimed bank accounts, refunds, and insurance payouts. Find your lost money fast — free, easy, and secure with Plootus." />
      </Head>
      <UnclaimedMoney />
    </Layout>
  );
};

export default UnclaimedMoneyPage;
