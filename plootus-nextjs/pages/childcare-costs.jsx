import Head from 'next/head';
import ChildCareCost from '../components/familydebt/ChildCareCost/ChildCareCost';

export default function ChildCareCostPage() {
  return (
    <>
      <Head>
        <title>Childcare Costs in the U.S. by Age & Care Type (2024) | Plootus</title>
        <meta name="description" content="How much does childcare actually cost? Real pricing data by child age, care setting, and state — so you can budget smarter and plan ahead." />
        <link rel="canonical" href="https://www.plootus.com/childcare-costs" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json">
          {`[
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Childcare Costs in the U.S.: By Age, Care Type & State (2024)",
              "description": "Comprehensive childcare cost data for 2024, covering national averages by age group and care type (center-based, family home, nanny, relative care), state-by-state annual costs, and affordability benchmarks. National average: $13,128/year per child. Infant center care: $1,230/month. Nanny cost: $43,004/year. Costs have increased 29% since 2020. In 38 states plus D.C., infant center care exceeds the cost of in-state public college tuition. Sources: DOL National Database of Childcare Prices, Child Care Aware of America 2024, Economic Policy Institute 2025.",
              "datePublished": "2024-01-01",
              "dateModified": "2025-03-01",
              "author": {"@type":"Organization","name":"Plootus Research Team","url":"https://www.plootus.com"},
              "publisher": {
                "@type": "Organization","name":"Plootus","url":"https://www.plootus.com",
                "logo": {"@type":"ImageObject","url":"https://www.plootus.com/logo.png"}
              },
              "mainEntityOfPage": {"@type":"WebPage","@id":"https://www.plootus.com/childcare-costs"}
            }
          ]`}
        </script>
      </Head>
      <ChildCareCost />
    </>
  );
}
