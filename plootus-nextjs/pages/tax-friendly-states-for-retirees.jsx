import Head from 'next/head';
import TaxFriendlyStatesForRetirees from '../components/statehub/TaxFriendlyStatesForRetirees/TaxFriendlyStatesForRetirees';

export default function TaxFriendlyStatesForRetireesPage() {
  return (
    <>
      <Head>
        <title>Most Tax-Friendly States for Retirees 2026 | Plootus</title>
        <meta name="description" content="Compare state income tax, Social Security tax, and property taxes across all 50 states for retirees in 2026. A-F grades for every state." />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <TaxFriendlyStatesForRetirees />
    </>
  );
}
