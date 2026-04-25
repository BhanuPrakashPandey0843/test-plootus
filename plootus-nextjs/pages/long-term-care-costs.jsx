import React from 'react';
import Head from 'next/head';
import LongTermCareCost from '../components/healthcare/LongTermCareCost/LongTermCareCost';

export default function LongTermCareCostPage() {
  return (
    <>
      <Head>
        <title>Long-Term Care Costs & Insurance Premiums by Age (2025) | Plootus</title>
        <meta name="description" content="7 in 10 Americans turning 65 will need long-term care. The national median cost of a nursing home private room is now $127,750/year." />
        <link rel="canonical" href="https://www.plootus.com/long-term-care-costs" />
      </Head>
      <LongTermCareCost />
    </>
  );
}
