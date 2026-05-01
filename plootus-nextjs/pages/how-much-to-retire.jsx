import Head from 'next/head';
import HowMuchRetire from '../components/planning/HowMuchRetire/HowMuchRetire';

export default function HowMuchToRetirePage() {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How Much Do I Need to Retire? Your Complete 2026 Guide",
      "description": "A complete guide to calculating your retirement number using the 4% rule and 80% income replacement rule. Covers state-adjusted calculations, Social Security income offsets, three lifestyle scenarios (frugal/moderate/comfortable), the impact of retirement timing, and how $1 million compares across states. Based on Fidelity, SSA, BLS, and Charles Schwab 2026 data.",
      "datePublished": "2026-01-01",
      "dateModified": "2026-03-01",
      "author": {"@type":"Organization","name":"Plootus Research Team","url":"https://www.plootus.com"},
      "publisher": {
        "@type": "Organization",
        "name": "Plootus",
        "url": "https://www.plootus.com",
        "logo": {"@type":"ImageObject","url":"https://www.plootus.com/logo.png"}
      },
      "mainEntityOfPage": {"@type":"WebPage","@id":"https://www.plootus.com/how-much-do-i-need-to-retire"},
      "about": [{"@type":"Thing","name":"4% Safe Withdrawal Rule"},
        {"@type":"Thing","name":"Retirement Number Calculation"},
        {"@type":"Thing","name":"Social Security Income in Retirement"},
        {"@type":"Thing","name":"Retirement Savings Benchmarks"}],
      "keywords": "how much to retire, retirement number, 4% rule, 80% income rule, Social Security retirement, retirement savings calculator, retire at 65"
    },
    {
      "@context": "https://schema.org",
      "@type": "Dataset",
      "name": "Retirement Savings Required by Annual Spending (4% Rule and 3.5% Rule, 2026)",
      "description": "Required retirement savings at various annual spending levels using the 4% safe withdrawal rate (Bengen 1994; Trinity Study) and the 3.5% rate recommended for early retirees or 35+ year retirement horizons. Calculated after subtracting average Social Security income of $24,894/year (SSA November 2025). Source: Plootus Research 2026; Bengen (1994); Trinity Study; Charles Schwab 2026.",
      "url": "https://www.plootus.com/how-much-do-i-need-to-retire",
      "temporalCoverage": "2026",
      "spatialCoverage": {"@type":"Place","name":"United States"},
      "creator": {"@type":"Organization","name":"Plootus Research"},
      "citation": ["Bengen, W.P. (1994). Determining Withdrawal Rates Using Historical Data. Journal of Financial Planning",
          "Cooley, Hubbard & Walz (1998). Retirement Savings: Choosing a Withdrawal Rate That Is Sustainable (Trinity Study)",
          "Social Security Administration, Monthly Statistical Snapshot, November 2025",
          "Bureau of Labor Statistics, Consumer Expenditure Survey 2024",
          "Fidelity Investments, How Much Do I Need to Retire? 2026",
          "Charles Schwab, Retirement Planning 2026",
          "Davenport Advisors, Updated 4% Rule Analysis 2026",
          "Plootus Research 2026"],
      "variableMeasured": [{"@type":"PropertyValue","name":"Annual Spending Need After Social Security","unitText":"USD annually"},
        {"@type":"PropertyValue","name":"Required Savings at 4% Withdrawal Rate","unitText":"USD"},
        {"@type":"PropertyValue","name":"Required Savings at 3.5% Withdrawal Rate (early retirees)","unitText":"USD"},
        {"@type":"PropertyValue","name":"Average Annual Social Security Benefit (2025)","unitText":"USD"}]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "Is $1 million enough to retire?",
        "acceptedAnswer": {"@type":"Answer","text":"Whether $1 million is enough to retire depends entirely on your annual spending and state of residence. Using the 4% rule, $1 million supports $40,000 per year in withdrawals. After adding average Social Security income of $24,894 per year, total retirement income would be approximately $64,894 per year — sufficient in lower-cost states like Arkansas or Mississippi but insufficient in high-cost states like Hawaii or California. In Hawaii, $1 million in savings plus average Social Security covers less than 60% of the estimated $129,296 annual retirement cost. Source: Plootus Research 2026; SSA November 2025."}
      },
      {
        "@type": "Question",
        "name": "What is the 4% rule and is it still valid?",
        "acceptedAnswer": {"@type":"Answer","text":"The 4% rule, developed by financial planner William Bengen in 1994 and validated by the Trinity Study (1998), states that you can safely withdraw 4% of your retirement savings in year one, then adjust for inflation annually, with historically high probability that your savings will last 30+ years. In 2026, Bengen himself has updated his estimate to 4.7% based on current market data. Most financial planners still recommend 4% as a conservative baseline, especially for longer retirements. For early retirees facing 35+ year horizons, 3.5% is more appropriate. Source: Bengen (1994); Charles Schwab 2026; Davenport Advisors 2026."}
      },
      {
        "@type": "Question",
        "name": "How does Social Security affect how much I need to save?",
        "acceptedAnswer": {"@type":"Answer","text":"Social Security income directly reduces the amount you need to save. The formula is: (Annual spending − Annual Social Security income) ÷ 0.04. The average annual Social Security benefit for a retired worker in 2025 is $24,894 (approximately $2,075/month). For example, if you need $60,000 per year and expect $24,894 from Social Security, you only need $35,106 per year from savings, requiring approximately $877,650 — not $1.5 million. Delaying Social Security claiming to age 70 permanently increases your benefit by approximately 76% versus claiming at 62. Source: SSA Monthly Statistical Snapshot November 2025."}
      },
      {
        "@type": "Question",
        "name": "What if I want to retire early — before 65?",
        "acceptedAnswer": {"@type":"Answer","text":"Early retirement (before age 65) requires more savings for two key reasons: a longer withdrawal horizon and the Medicare gap. For early retirees, financial planners recommend using a 3.5% withdrawal rate instead of 4%, which means multiplying annual spending need by 28.57 instead of 25. Additionally, Social Security is not available before age 62, and Medicare is not available before age 65, so you must fund healthcare coverage independently — typically through ACA Marketplace plans, which cost approximately $24,000 per year for a 55-year-old. Source: Plootus Research 2026; KFF Health Insurance Marketplace Calculator 2025."}
      }]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://www.plootus.com"},
        {"@type":"ListItem","position":2,"name":"Guides","item":"https://www.plootus.com/guides"},
        {"@type":"ListItem","position":3,"name":"How Much Do I Need to Retire?","item":"https://www.plootus.com/how-much-do-i-need-to-retire"}]
    }
  ];

  return (
    <>
      <Head>
        <title>How Much Do I Need to Retire? Your Complete 2026 Guide | Plootus</title>
        <meta
          name="description"
          content="The answer depends on where you'll live, what lifestyle you want, and when you plan to retire. We break it all down with formulas, benchmarks, and real numbers."
        />
        <link rel="canonical" href="https://www.plootus.com/how-much-do-i-need-to-retire" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Plootus Research Team" />
        <meta name="keywords" content="how much do i need to retire, retirement number calculator, 4% rule, how much to retire comfortably, retirement savings by state, retirement number 2026" />
        
        {/* Open Graph */}
        <meta property="og:title" content="How Much Do I Need to Retire? Complete 2026 Guide | Plootus" />
        <meta property="og:description" content="Use the 4% rule to calculate your retirement number: (Annual spending − Social Security) ÷ 0.04. Average SS benefit: $24,894/yr. Moderate nest egg: $877K. Plootus Research 2026." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.plootus.com/how-much-do-i-need-to-retire" />
        <meta property="og:site_name" content="Plootus" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:publisher" content="https://www.plootus.com" />
        <meta property="article:published_time" content="2026-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content="2026-03-01T00:00:00+00:00" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@plootus" />
        <meta name="twitter:title" content="How Much Do I Need to Retire? 2026 Calculator & Guide" />
        <meta name="twitter:description" content="4% rule formula: (spending - SS income) ÷ 0.04. SS avg: $24,894/yr. $60K/yr spend → $877K needed. State matters: Hawaii needs $2.1M vs. Arkansas $658K. Plootus 2026." />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <HowMuchRetire />
    </>
  );
}
