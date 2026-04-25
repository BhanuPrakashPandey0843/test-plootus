import Head from 'next/head';
import PartnersPage from '../components/partners/PartnersPage';

export default function Partners() {
  return (
    <>
      <Head>
        <title>Financial Services Partners &amp; Affiliate Disclosures | Plootus</title>
        <meta
          name="description"
          content="Explore Plootus's trusted partner services — compare insurance quotes, personal loans, tax filing tools, and credit solutions. All referrals are disclosed per SEC requirements."
        />
        <meta
          name="keywords"
          content="Plootus partners, financial partners, insurance partners, tax services, financial tools"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.plootus.com/partners" />
        <meta property="og:title" content="Plootus Partner Services — Insurance, Loans, Tax & Credit" />
        <meta
          property="og:description"
          content="Plootus connects users with vetted financial service partners to help compare insurance, access loans, file taxes, and manage credit — all in one place."
        />
      </Head>
      <PartnersPage />
    </>
  );
}
