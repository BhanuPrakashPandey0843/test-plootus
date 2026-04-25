import Head from 'next/head';
import RetireEarly from '../components/planning/RetireEarly/RetireEarly';

export default function RetireEarlyPage() {
  return (
    <>
      <Head>
        <title>FIRE Guide: How to Retire Early | Plootus</title>
        <meta
          name="description"
          content="Learn the strategies to achieve Financial Independence and Retire Early (FIRE). Maximize savings, optimize investments, and plan for healthcare before Medicare."
        />
        <meta
          name="keywords"
          content="retire early, FIRE movement, financial independence, early retirement planning, 3.5 percent rule"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <RetireEarly />
    </>
  );
}
