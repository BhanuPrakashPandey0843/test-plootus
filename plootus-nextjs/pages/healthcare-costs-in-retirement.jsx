import React from 'react';
import Head from 'next/head';
import HealthCareCostInRetirement from '../components/healthcare/HealthCareCostInRetirement/HealthCareCostInRetirement';

export default function HealthCareCostInRetirementPage() {
  return (
    <>
      <Head>
        <title>Healthcare Costs in Retirement (2025 Estimates) | Plootus</title>
        <meta name="description" content="A 65-year-old couple retiring in 2025 may need $315,000–$350,000 for healthcare. We break down Medicare premiums, deductibles, and cost projections." />
        <link rel="canonical" href="https://www.plootus.com/healthcare-costs-in-retirement" />
      </Head>
      <HealthCareCostInRetirement />
    </>
  );
}
