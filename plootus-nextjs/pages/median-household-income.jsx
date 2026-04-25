import Head from 'next/head';
import MedianHouseholdIncome from '../components/incomecosts/MedianHouseHoldIncome/MedianHouseholdIncome';

export default function MedianHouseholdIncomePage() {
  return (
    <>
      <Head>
        <title>Median Household Income by State (2024) | Plootus</title>
        <meta name="description" content="The U.S. median household income reached $83,730 in 2024 — an all-time high. But that masks a nearly $55,000 gap between states. Complete state-by-state data from the U.S. Census Bureau." />
        <link rel="canonical" href="https://www.plootus.com/median-household-income" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <MedianHouseholdIncome />
    </>
  );
}
