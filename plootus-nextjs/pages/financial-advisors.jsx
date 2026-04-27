import Head from 'next/head';
import FinancialAdvisorsPage from '../components/financial-advisors';
import HubNav from '../components/HubNav/HubNav';

export default function FinancialAdvisors() {
  return (
    <>
      <Head>
        <title>Retirement Planning Tools for Financial Advisors | Plootus</title>
        <meta name="description" content="Plootus gives financial advisors a powerful dashboard to manage multiple clients' 401(k), 403(b), and 457 retirement plans in one place — with AI-driven allocation recommendations, fee analysis, and real-time portfolio tracking." />
        <meta property="og:title" content="Retirement Planning Platform for Financial Advisors | Plootus" />
        <meta property="og:description" content="Help more clients retire confidently. Plootus lets advisors monitor and optimize multiple retirement accounts from a single dashboard — free to use, no SSN required." />
        <link rel="canonical" href="https://www.plootus.com/financial-advisors" />
      </Head>
      <HubNav />
      <main>
        <FinancialAdvisorsPage />
      </main>
    </>
  );
}

