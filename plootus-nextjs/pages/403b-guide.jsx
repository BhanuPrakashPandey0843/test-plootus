import Head from 'next/head';
import Guide403b from '../components/accounts/403bGuide/Guide403b';

export default function Guide403bPage() {
  return (
    <>
      <Head>
        <title>403(b) Retirement Plan: Contribution Limits & Rules (2026)</title>
        <meta name="description" content="Complete guide to 403(b) retirement plans for teachers, nurses, and nonprofit workers. Includes 2026 IRS contribution limits, rules, and optimization strategies." />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <Guide403b />
    </>
  );
}
