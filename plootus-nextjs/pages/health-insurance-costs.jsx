import React from 'react';
import Head from 'next/head';
import HealthInsuranceCost from '../components/healthcare/HealthInsuranceCost/HealthInsuranceCost';

export default function HealthInsuranceCostPage() {
  return (
    <>
      <Head>
        <title>Average Health Insurance Cost by State & Plan Type (2025) | Plootus</title>
        <meta name="description" content="Health insurance costs depend on how you get coverage. We break down 2025 average premiums by plan type and state using KFF's 2025 Employer Health Benefits Survey." />
        <link rel="canonical" href="https://www.plootus.com/health-insurance-costs" />
      </Head>
      <HealthInsuranceCost />
    </>
  );
}
