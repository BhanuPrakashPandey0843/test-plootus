import Head from 'next/head';
import Guide457b from '../components/accounts/457bPlanGuide/Guide457b';

export default function Guide457bPage() {
  return (
    <>
      <Head>
        <title>457(b) Plan Guide 2026: Contribution Limits & Rules</title>
        <meta name="description" content="Guide to 457(b) plans for government employees. Learn about 2026 contribution limits, the special 3-year catch-up, and why these plans have no early withdrawal penalty." />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <Guide457b />
    </>
  );
}
