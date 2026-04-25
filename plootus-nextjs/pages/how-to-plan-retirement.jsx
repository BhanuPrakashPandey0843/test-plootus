import Head from 'next/head';
import HowToPlanRetirement from '../components/planning/HowToPlanRetirement/HowToPlanRetirement';

export default function HowToPlanRetirementPage() {
  return (
    <>
      <Head>
        <title>How to Plan for Retirement: Step-by-Step Guide | Plootus</title>
        <meta
          name="description"
          content="The complete step-by-step guide to retirement planning. Learn how to calculate your number, choose accounts, optimize social security, and plan for healthcare."
        />
        <meta
          name="keywords"
          content="retirement planning, how to plan for retirement, retirement accounts, retirement strategy, early retirement"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HowToPlanRetirement />
    </>
  );
}
