import Head from 'next/head';
import ToolStateComparison from '../components/statehub/ToolStateComarison/ToolStateComparison';

export default function ToolStateComparisonPage() {
  return (
    <>
      <Head>
        <title>State Retirement Comparison Tool 2026 | Plootus</title>
        <meta name="description" content="Compare any two states side-by-side for retirement. See costs, taxes, and healthcare quality to find your best retirement destination." />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <ToolStateComparison />
    </>
  );
}
