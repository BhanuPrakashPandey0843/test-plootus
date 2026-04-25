import Head from 'next/head';
import RentByCity from '../components/incomecosts/RentByCity/RentByCity';

export default function RentByCityPage() {
  return (
    <>
      <Head>
        <title>Average Rent by City (2025) | Plootus</title>
        <meta name="description" content="Average 1BR and 2BR rents for 30+ major U.S. metros in 2025. HUD Fair Market Rent data, Census ACS, and current market data from Dwellsy and Apartments.com." />
        <link rel="canonical" href="https://www.plootus.com/rent-by-city" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <RentByCity />
    </>
  );
}
