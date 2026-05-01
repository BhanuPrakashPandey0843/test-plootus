import Head from 'next/head';
import RetirementCalculatorPage from '../components/retirement-calculator';

export default function RetirementCalculator() {
  return (
    <>
      <Head>
        <title>Free Retirement Calculator — AI-Powered, Location-Aware | Plootus</title>
        <meta
          name="description"
          content="Use Plootus's free AI retirement calculator to find out how much you need to retire. Analyzes 30+ expense categories, your zip code, healthcare costs, and inflation — then connects to your 401k for personalized fund picks."
        />
        <meta
          name="keywords"
          content="find old 401k, lost retirement accounts, forgotten 401k, unclaimed retirement money, 401k search"
        />
        <meta property="og:title" content="Free AI Retirement Calculator — Know Your Number | Plootus" />
        <meta
          property="og:description"
          content="Find out exactly how much money you need to retire based on your location, spending habits, and goals. Free, AI-powered, no SSN required."
        />
        <meta property="og:url" content="https://www.plootus.com/retirement-calculator" />
        <link rel="canonical" href="https://www.plootus.com/retirement-calculator" />
      </Head>
      <RetirementCalculatorPage />
    </>
  );
}
