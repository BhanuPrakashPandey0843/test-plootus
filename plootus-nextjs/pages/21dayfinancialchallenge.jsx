import React from 'react';
import Head from 'next/head';
import Challenge21Days from '../components/challenges/Challenge21Days';
import HubNav from '../components/HubNav/HubNav';

export default function ChallengePage() {
  return (
    <>
      <Head>
        <title>21-Day Financial Habits Challenge | Plootus</title>
        <meta name="description" content="Master your money in 21 days with simple daily tasks. Join the Plootus 21-Day Financial Habits Challenge for free!" />
      </Head>
      <HubNav />
      <Challenge21Days />
    </>
  );
}
