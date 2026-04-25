import Head from 'next/head';
import TspThriftSavingPlanGuide from '../components/accounts/TspThriftSavingPlanGuide/TspThriftSavingPlanGuide';

export default function TspThriftSavingPlanGuidePage() {
  return (
    <>
      <Head>
        <title>TSP (Thrift Savings Plan) Guide 2026: Best Funds & Strategy</title>
        <meta name="description" content="Complete guide to the Thrift Savings Plan (TSP) for federal employees and military. Includes 2026 contribution limits, fund options (G, F, C, S, I), and FERS match rules." />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <TspThriftSavingPlanGuide />
    </>
  );
}
