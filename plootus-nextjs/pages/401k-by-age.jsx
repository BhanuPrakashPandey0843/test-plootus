import Head from 'next/head';
import HowMuch401kByAge from '../components/benchmarks/401kByAge/HowMuch401kByAge';

export default function HowMuch401kByAgePage() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <title>Average 401(k) Balance by Age 2026 | Plootus</title>
        <meta
          name="description"
          content="Discover the average and median 401(k) balances by age group for 2026. See how you compare to your peers and find out if you are on track for retirement."
        />
        <meta
          name="keywords"
          content="average 401k balance by age, median 401k balance, 401k benchmarks, retirement savings by age, how much should I have in my 401k"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HowMuch401kByAge />
    </>
  );
}
