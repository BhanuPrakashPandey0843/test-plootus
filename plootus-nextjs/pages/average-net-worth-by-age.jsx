import Head from 'next/head';
import AverageNetWorthByAge from '../components/benchmarks/AverageNetWorthByAge/AverageNetWorthByAge';

export default function AverageNetWorthByAgePage() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <title>Average Net Worth by Age in 2026 | Plootus</title>
        <meta
          name="description"
          content="Discover the average and median net worth by age in the US. See where you stand and learn how to build your wealth for retirement."
        />
        <meta
          name="keywords"
          content="average net worth by age, median net worth, US wealth statistics, how to calculate net worth, wealth building"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AverageNetWorthByAge />
    </>
  );
}
