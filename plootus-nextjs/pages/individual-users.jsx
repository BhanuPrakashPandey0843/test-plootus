import Head from 'next/head';
import RetirementSolutions from '../components/individual-users';
import HubNav from '../components/HubNav/HubNav';

export default function IndividualUsers() {
  return (
    <>
      <Head>
        <title>401k & Retirement Planning for Individuals — Free AI Advisor | Plootus</title>
        <meta name="description" content="Take control of your 401(k), 403(b), or 457 plan with Plootus. Our free AI analyzes your employer's retirement plan, recommends the best funds for your risk profile, and helps you retire on time — no financial advisor fees required." />
        <meta property="og:title" content="Free Retirement Planning for Individuals | Plootus" />
        <meta property="og:description" content="Plootus helps individuals optimize their 401k and 403b plans for free — personalized fund picks, fee analysis, and retirement goal tracking in one place." />
        <link rel="canonical" href="https://www.plootus.com/individual-users" />
      </Head>
      <HubNav />
      <main>
        <RetirementSolutions />
      </main>
    </>
  );
}

