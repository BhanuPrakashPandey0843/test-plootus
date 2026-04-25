import Head from 'next/head';
import CostOfRaisiingChildByState from '../components/familydebt/CostOfRaisiingChildByState/CostOfRaisiingChildByState';

export default function CostOfRaisiingChildByStatePage() {
  return (
    <>
      <Head>
        <title>Cost of Raising a Child by State (2025) — Birth to 18 | Plootus</title>
        <meta name="description" content="From diapers to diplomas, the cost of raising a child varies by more than $400,000 depending on where you live. We break down every major expense using USDA, MIT Living Wage, and SmartAsset 2025 data." />
        <link rel="canonical" href="https://www.plootus.com/cost-of-raising-child-by-state" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <CostOfRaisiingChildByState />
    </>
  );
}
