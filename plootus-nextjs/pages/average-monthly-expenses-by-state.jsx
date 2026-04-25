import Head from 'next/head';
import AverageMonthlyExpensesByState from '../components/statehub/AverageMonthlyExpensesByState/AverageMonthlyExpensesByState';

export default function AverageMonthlyExpensesByStatePage() {
  return (
    <>
      <Head>
        <title>Average Monthly Expenses By State | Plootus</title>
        <meta name="description" content="Find the average monthly expenses by state for retirees in 2026. Compare housing, healthcare, and cost of living across all 50 states." />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <AverageMonthlyExpensesByState />
    </>
  );
}
