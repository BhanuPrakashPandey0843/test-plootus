import React from 'react';
import UnclaimedMoney from '../components/unclaimed-money';
import Head from 'next/head';
import HubNav from '../components/HubNav/HubNav';

const UnclaimedMoneyPage = () => {
  return (
    <>
      <Head>
        <title>Unclaimed Money Finder | Plootus</title>
        <meta name="description" content="Discover unclaimed bank accounts, refunds, and insurance payouts. Find your lost money fast — free, easy, and secure with Plootus." />
      </Head>
      <HubNav />
      <UnclaimedMoney />
    </>
  );
};

export default UnclaimedMoneyPage;
