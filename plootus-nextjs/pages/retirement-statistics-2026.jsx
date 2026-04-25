import Head from 'next/head';
import RetirementStatistics from '../components/planning/RetirementStatistics/RetirementStatistics';

export default function RetirementStatisticsPage() {
  return (
    <>
      <Head>
        <title>Retirement Statistics & Trends 2026 | Plootus</title>
        <meta
          name="description"
          content="The latest 2026 retirement statistics. Average balances, 401(k) data, Social Security averages, and retiree spending patterns."
        />
        <meta
          name="keywords"
          content="retirement statistics 2026, average 401k balance, average retirement savings, retiree spending, retirement data"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <RetirementStatistics />
    </>
  );
}
