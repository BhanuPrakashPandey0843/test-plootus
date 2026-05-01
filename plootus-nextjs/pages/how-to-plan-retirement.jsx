import Head from 'next/head';
import HowToPlanRetirement from '../components/planning/HowToPlanRetirement/HowToPlanRetirement';

export default function HowToPlanRetirementPage() {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How to Plan for Retirement: The Complete Step-by-Step Guide (2026)",
      "description": "A six-step retirement planning guide covering: (1) calculating your retirement number using the 4% rule; (2) contribution priority order for 401(k), HSA, and IRA; (3) choosing your retirement state; (4) optimizing Social Security claiming age; (5) planning for healthcare costs including Medicare; (6) building your withdrawal strategy and Roth conversion ladder. Includes 2026 IRS contribution limits and a master retirement checklist.",
      "datePublished": "2026-01-01",
      "dateModified": "2026-03-01",
      "author": {"@type":"Organization","name":"Plootus Research Team","url":"https://www.plootus.com"},
      "publisher": {
        "@type": "Organization",
        "name": "Plootus",
        "url": "https://www.plootus.com",
        "logo": {"@type":"ImageObject","url":"https://www.plootus.com/logo.png"}
      },
      "mainEntityOfPage": {"@type":"WebPage","@id":"https://www.plootus.com/how-to-plan-retirement"},
      "about": [{"@type":"Thing","name":"Retirement Planning"},
        {"@type":"Thing","name":"4% Safe Withdrawal Rule"},
        {"@type":"Thing","name":"Social Security Optimization"},
        {"@type":"Thing","name":"Medicare and Retirement Healthcare"},
        {"@type":"Thing","name":"Roth Conversion Strategy"}],
      "keywords": "retirement planning 2026, 4% rule, retirement number calculator, 401k limits 2026, Social Security timing, Medicare planning, Roth conversion, withdrawal strategy, retirement checklist"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "How do I calculate my retirement number?",
        "acceptedAnswer": {"@type":"Answer","text":"The most widely used method is the 4% rule: multiply your expected annual spending in retirement by 25. For example, if you plan to spend $60,000 per year, you need approximately $1.5 million ($60,000 × 25). Then subtract expected Social Security income: if you expect $24,894 per year in Social Security (the 2025 national average), you need to withdraw $35,106 from savings annually, requiring approximately $877,650 in savings ($35,106 × 25). Adjust upward for more expensive states or earlier retirement ages. Source: Bengen (1994); SSA Monthly Statistical Snapshot Nov 2025."}
      },
      {
        "@type": "Question",
        "name": "What is the best order to contribute to retirement accounts?",
        "acceptedAnswer": {"@type":"Answer","text":"(1) Always contribute enough to your 401(k) to capture the full employer match — this is an immediate 50–100% return on investment. (2) Fund an HSA if you have a high-deductible health plan — triple tax advantage: pre-tax contributions, tax-free growth, tax-free withdrawals for medical expenses. (3) Contribute to a Roth or Traditional IRA up to the annual limit ($7,000 in 2026; $8,000 if age 50+). (4) Return to your 401(k) and maximize the contribution limit ($24,500 in 2026; $32,500 if age 50+; $35,750 if ages 60–63 under SECURE 2.0). (5) Taxable brokerage account for additional savings."}
      },
      {
        "@type": "Question",
        "name": "When should I claim Social Security benefits?",
        "acceptedAnswer": {"@type":"Answer","text":"For most Americans in average or good health, waiting as long as possible — ideally to age 70 — produces the most lifetime income. Every year you wait past your Full Retirement Age (FRA of 67 for those born in 1960+) permanently increases your benefit by 8%. Claiming at 62 instead of 70 reduces your benefit by approximately 30%. The break-even age for waiting from 67 to 70 is approximately 82–83, which the average 65-year-old will outlive. For married couples, the higher-earning spouse should strongly consider waiting to 70 to maximize the survivor benefit. Source: Social Security Administration."}
      },
      {
        "@type": "Question",
        "name": "How much do I need for healthcare in retirement?",
        "acceptedAnswer": {"@type":"Answer","text":"Fidelity estimates a 65-year-old couple may need approximately $413,000 in today's dollars to cover medical costs throughout retirement — not including long-term care. Medicare becomes available at age 65. In 2025, Medicare Part B costs $185 per month ($2,220 per year). Supplemental Medigap coverage adds $100–$300 per month. Before age 65, retirees must find their own coverage through ACA Marketplace, COBRA, or a spouse's employer plan. Long-term care — not covered by Medicare — costs a national median of $127,750 per year for a nursing home private room (Genworth/CareScout 2024). Source: Fidelity 2024; Medicare.gov; Genworth/CareScout 2024."}
      },
      {
        "@type": "Question",
        "name": "What is the optimal withdrawal order in retirement?",
        "acceptedAnswer": {"@type":"Answer","text":"The conventional tax-efficient withdrawal order is: (1) taxable brokerage accounts first — spend dividends, sell assets with long-term capital gains rates; (2) tax-deferred accounts (traditional 401(k), traditional IRA) — withdraw to fill lower tax brackets; (3) tax-free accounts (Roth IRA, Roth 401(k)) — withdraw last to allow maximum tax-free compounding. This order minimizes lifetime taxes. However, strategic Roth conversions in early retirement (when income is low) can permanently reduce future tax burdens and Required Minimum Distributions starting at age 73. The optimal strategy depends on individual tax situation. Source: Plootus Research 2026; IRS."}
      }]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://www.plootus.com"},
        {"@type":"ListItem","position":2,"name":"Guides","item":"https://www.plootus.com/guides"},
        {"@type":"ListItem","position":3,"name":"How to Plan for Retirement","item":"https://www.plootus.com/how-to-plan-retirement"}]
    }
  ];

  return (
    <>
      <Head>
        <title>How to Plan for Retirement: The Complete Step-by-Step Guide (2026) | Plootus</title>
        <meta
          name="description"
          content="The complete retirement planning guide for 2026. Six steps from calculating your number to choosing your state, Social Security timing, and withdrawal strategy — everything in one place."
        />
        <link rel="canonical" href="https://www.plootus.com/how-to-plan-retirement" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Plootus Research Team" />
        <meta name="keywords" content="how to plan for retirement, retirement planning guide, retirement planning steps, retirement checklist 2026, complete retirement plan" />

        {/* Open Graph */}
        <meta property="og:title" content="How to Plan for Retirement: Complete Step-by-Step Guide 2026 | Plootus" />
        <meta property="og:description" content="The complete 2026 retirement planning guide. Six steps: calculate your number, maximize accounts, choose your state, optimize Social Security, plan for healthcare, and build your withdrawal strategy." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.plootus.com/how-to-plan-retirement" />
        <meta property="og:site_name" content="Plootus" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:publisher" content="https://www.plootus.com" />
        <meta property="article:published_time" content="2026-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content="2026-03-01T00:00:00+00:00" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@plootus" />
        <meta name="twitter:title" content="How to Plan for Retirement 2026 — Complete 6-Step Guide" />
        <meta name="twitter:description" content="6 steps to retirement: calculate your number, maximize 401(k)→HSA→IRA, choose your state, optimize SS timing, plan healthcare ($413K/couple), build withdrawal order." />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <HowToPlanRetirement />
    </>
  );
}
