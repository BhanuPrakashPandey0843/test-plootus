import Head from 'next/head';
import Home from '../components/home';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Plootus - Free AI-Powered 401k &amp; Retirement Planning</title>
        <meta
          name="description"
          content="Plootus is a free, AI-driven retirement planning platform that analyzes your 401(k), 403(b), 457, and TSP plans — recommending the best funds, minimizing fees, and keeping you on track for retirement. No SSN required."
        />
        <meta
          name="keywords"
          content="retirement planning, 401k calculator, financial planning, investment advice, retirement savings, pension planning, wealth management"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.plootus.com/" />
        <meta property="og:title" content="Free AI-Powered 401k & Retirement Planning | Plootus" />
        <meta
          property="og:description"
          content="AI-driven 401k and retirement planning — free, unbiased, and personalized."
        />
      </Head>
      <Home />
    </>
  );
}
