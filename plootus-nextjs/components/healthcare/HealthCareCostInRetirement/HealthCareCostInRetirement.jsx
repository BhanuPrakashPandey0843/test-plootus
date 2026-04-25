import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Chart from 'chart.js/auto';
import styles from './HealthCareCostInRetirement.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}>
      <button className={styles.faqQ} onClick={() => setIsOpen(!isOpen)}>
        {question} <span className={styles.faqIcon}>+</span>
      </button>
      <div className={styles.faqA}>{answer}</div>
    </div>
  );
};

const HealthCareCostInRetirement = () => {
  const router = useRouter();
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ageLabels = ['65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90'];
      const costs = ageLabels.map((_, i) => Math.round(9700 * Math.pow(1.05, i)));

      chartInstance.current = new Chart(chartRef.current, {
        type: 'bar',
        data: {
          labels: ageLabels,
          datasets: [{
            label: 'Annual Healthcare Cost (Single Retiree)',
            data: costs,
            backgroundColor: ageLabels.map((_, i) => {
              const v = costs[i];
              if (v < 13000) return '#3B5BDB';
              if (v < 18000) return '#F59F00';
              return '#E03131';
            }),
            borderRadius: 4,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: ctx => '$' + ctx.parsed.y.toLocaleString() + '/year' } }
          },
          scales: {
            y: { ticks: { callback: v => '$' + (v/1000).toFixed(0) + 'K', font: { family: 'Plus Jakarta Sans', size: 11 } }, grid: { color: '#E2E8F4' } },
            x: { ticks: { font: { family: 'Plus Jakarta Sans', size: 11 } }, grid: { display: false } }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Healthcare Costs in Retirement 2026: What You'll Really Pay | Plootus</title>
        <meta name="description" content="A couple may need $413,000 or more just for medical expenses in retirement — before long-term care. Here's what you'll actually pay, how Medicare works, and how to protect yourself." />
        <link rel="canonical" href="https://www.plootus.com/healthcare-costs-in-retirement" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Plootus Research Team" />
        <meta name="date" content="2026-01-01" />
        <meta name="keywords" content="healthcare costs in retirement 2026, Medicare costs 2025, how much save for healthcare retirement, Medicare Part B premium 2025, long-term care cost, Medigap, retirement healthcare planning" />
        <meta property="og:title" content="Healthcare Costs in Retirement 2026: What You'll Really Pay | Plootus" />
        <meta property="og:description" content="A couple retiring at 65 may need $413,000 for healthcare alone (Fidelity 2024). Medicare Part B: $185/mo. 70% will need long-term care. Avg nursing home: $108,405/yr. Full Medicare guide (Parts A/B/C/D), LTC costs, and 5 strategies to reduce your healthcare bill." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.plootus.com/healthcare-costs-in-retirement" />
        <meta property="og:site_name" content="Plootus" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:publisher" content="https://www.plootus.com" />
        <meta property="article:published_time" content="2026-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content="2026-03-01T00:00:00+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@plootus" />
        <meta name="twitter:title" content="Healthcare Costs in Retirement 2026 — Complete Guide" />
        <meta name="twitter:description" content="Couple estimate: $413K lifetime (Fidelity 2024). Medicare Part B: $185/mo. LTC nursing home: $108,405/yr. 70% of 65-year-olds need LTC. Pre-65 ACA silver: $497/mo. 5 strategies to reduce costs. Plootus 2026." />
        <script type="application/ld+json">
          {`[
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Healthcare Costs in Retirement 2026: What You'll Really Pay",
              "description": "A comprehensive guide to healthcare costs in retirement, covering: Fidelity's $413,000 lifetime estimate for a couple; Medicare Parts A, B, C (Advantage), and D costs for 2025-2026; what Medicare does and does not cover; long-term care costs (70% of retirees will need it; nursing home median $108,405/year); Medigap supplemental insurance; strategies for covering healthcare before age 65; and 5 cost-reduction strategies. Sources: Fidelity 2024, KFF 2025, CMS 2025.",
              "datePublished": "2026-01-01",
              "dateModified": "2026-03-01",
              "author": {"@type":"Organization","name":"Plootus Research Team","url":"https://www.plootus.com"},
              "publisher": {
                "@type": "Organization","name":"Plootus","url":"https://www.plootus.com",
                "logo": {"@type":"ImageObject","url":"https://www.plootus.com/logo.png"}
              },
              "mainEntityOfPage": {"@type":"WebPage","@id":"https://www.plootus.com/healthcare-costs-in-retirement"}
            }
          ]`}
        </script>
      </Head>

      <HubNav />

      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>📘 Plootus Guide · 2026</div>
          <h1>Healthcare Costs in Retirement: What You'll Really Pay</h1>
          <p className={styles.heroSub}>Healthcare is the most underestimated cost in retirement. A couple may need $413,000 or more just for medical expenses — and that's before long-term care. Here's what you'll actually pay, how Medicare works, and how to protect yourself.</p>
          <div className={styles.heroMeta}>
            <span>Plootus Research Team</span>
            <span>Updated March 2026</span>
            <span>Sources: Fidelity, <abbr title="Kaiser Family Foundation">KFF</abbr>, <abbr title="Centers for Medicare & Medicaid Services">CMS</abbr></span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">$413,000</span><span className={styles.statLabel}>Lifetime HC Est. for a Couple</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">$185/mo</span><span className={styles.statLabel}>Medicare Part B Premium (2025)</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">70%</span><span className={styles.statLabel}>of People 65+ Will Need Long-Term Care</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">$108,405</span><span className={styles.statLabel}>Avg. Nursing Home Cost / Year</span></div>
        </div>
      </div>

      <div className={styles.pageBody} itemScope itemType="https://schema.org/Article">
        <main className={styles.mainContent} role="main" aria-label="Healthcare Costs in Retirement 2026 — Medicare Guide and LTC Planning">
          <section id="big-picture">
            <div className={styles.sectionLabel}>The Big Picture</div>
            <h2>Why Healthcare Is the Most Dangerous Gap in Retirement Planning</h2>
            <p>Most retirement calculators model healthcare as a flat line — a fixed annual expense that stays predictable. The reality is far more volatile. Healthcare costs in retirement rise <strong>5–7% annually</strong> (faster than general inflation), are largely unpredictable, and are heavily concentrated in the final years of life when other financial reserves may already be depleted.</p>
            <p>Fidelity's 2024 Retiree Health Care Cost Estimate found that a 65-year-old couple retiring today can expect to pay an average of <strong>$413,000 in healthcare costs throughout retirement</strong> — and that's excluding long-term care. For single retirees, the estimate is approximately $157,500.</p>
            <div className={`${styles.callout} ${styles.red}`}>
              <p><strong>⚠️ The #1 Retirement Budget Error:</strong> Most people estimate their healthcare retirement costs at $3,000–$5,000 per year. The reality for a 65-year-old is closer to <strong>$6,800/year in out-of-pocket costs alone</strong> — not including premiums. By age 80, average annual healthcare spending for those with chronic conditions regularly exceeds $15,000–$20,000.<br/><small style={{opacity: .75}}>Source: Fidelity Retiree Health Care Cost Estimate 2024; CMS National Health Expenditure Data.</small></p>
            </div>
          </section>

          <section id="medicare">
            <div className={styles.sectionLabel}>Medicare Explained</div>
            <h2>Medicare in 2026: What Each Part Covers and Costs</h2>
            <p>Medicare becomes available at age 65. Understanding what each part covers — and what it <em>doesn't</em> — is essential to estimating your true retirement healthcare costs:</p>
            <div className={styles.medicareGrid}>
              <div className={styles.medicareCard}>
                <div className={`${styles.medicarePart} ${styles.partA}`}>A</div>
                <div className={styles.medicareTitle}>Part A — Hospital Insurance</div>
                <div className={styles.medicareSub}>Inpatient care, skilled nursing, hospice</div>
                <div className={styles.medicareRow}><span className={styles.medicareRowLabel}>Monthly Premium</span><span className={styles.medicareRowVal}>$0 (if 40+ quarters paid into SS)</span></div>
                <div className={styles.medicareRow}><span className={styles.medicareRowLabel}>Inpatient Deductible</span><span className={styles.medicareRowVal}>$1,676/benefit period (2025)</span></div>
                <div className={styles.medicareRow}><span className={styles.medicareRowLabel}>Days 1–60 Co-insurance</span><span className={styles.medicareRowVal}>$0</span></div>
                <div className={styles.medicareRow}><span className={styles.medicareRowLabel}>Days 61–90 Co-insurance</span><span className={styles.medicareRowVal}>$419/day (2025)</span></div>
                <div className={styles.medicareRow}><span className={styles.medicareRowLabel}>Skilled Nursing (Days 21–100)</span><span className={styles.medicareRowVal}>$209.50/day (2025)</span></div>
              </div>
              <div className={styles.medicareCard}>
                <div className={`${styles.medicarePart} ${styles.partB}`}>B</div>
                <div className={styles.medicareTitle}>Part B — Medical Insurance</div>
                <div className={styles.medicareSub}>Doctor visits, outpatient, preventive care</div>
                <div className={styles.medicareRow}><span className={styles.medicareRowLabel}>Standard Monthly Premium</span><span className={styles.medicareRowVal}>$185.00/mo (2025)</span></div>
                <div className={styles.medicareRow}><span className={styles.medicareRowLabel}>Annual Deductible</span><span className={styles.medicareRowVal}>$257/year (2025)</span></div>
                <div className={styles.medicareRow}><span className={styles.medicareRowLabel}>After Deductible</span><span className={styles.medicareRowVal}>80% covered; you pay 20%</span></div>
                <div className={styles.medicareRow}><span className={styles.medicareRowLabel}><abbr title="Income-Related Monthly Adjustment Amount">IRMAA</abbr> Surcharge (high income)</span><span className={styles.medicareRowVal}>Up to $594/mo extra</span></div>
                <div className={styles.medicareRow}><span className={styles.medicareRowLabel}>Out-of-Pocket Maximum</span><span className={styles.medicareRowVal} style={{color: 'var(--red)'}}>None — unlimited exposure</span></div>
              </div>
              <div className={styles.medicareCard}>
                <div className={`${styles.medicarePart} ${styles.partC}`}>C</div>
                <div className={styles.medicareTitle}>Part C — Medicare Advantage</div>
                <div className={styles.medicareSub}>Private alternative to Parts A+B+D</div>
                <div className={styles.medicareRow}><span className={styles.medicareRowLabel}>Avg. Monthly Premium</span><span className={styles.medicareRowVal}>~$17/mo (2025, on top of Part B)</span></div>
                <div className={styles.medicareRow}><span className={styles.medicareRowLabel}>Max Out-of-Pocket Limit</span><span className={styles.medicareRowVal}>$9,350 in-network (2025)</span></div>
                <div className={styles.medicareRow}><span className={styles.medicareRowLabel}>Often Covers</span><span className={styles.medicareRowVal}>Dental, vision, hearing</span></div>
                <div className={styles.medicareRow}><span className={styles.medicareRowLabel}>Trade-off</span><span className={styles.medicareRowVal}>Network restrictions; prior auth</span></div>
                <div className={styles.medicareRow}><span className={styles.medicareRowLabel}>Best for</span><span className={styles.medicareRowVal}>Lower-cost, predictable <abbr title="Out-of-Pocket">OOP</abbr> max</span></div>
              </div>
              <div className={styles.medicareCard}>
                <div className={`${styles.medicarePart} ${styles.partD}`}>D</div>
                <div className={styles.medicareTitle}>Part D — Prescription Drug</div>
                <div className={styles.medicareSub}>Prescription medications</div>
                <div className={styles.medicareRow}><span className={styles.medicareRowLabel}>Avg. Monthly Premium</span><span className={styles.medicareRowVal}>~$46/mo (2025 national avg.)</span></div>
                <div className={styles.medicareRow}><span className={styles.medicareRowLabel}>Annual Deductible (max)</span><span className={styles.medicareRowVal}>$590 (2025)</span></div>
                <div className={styles.medicareRow}><span className={styles.medicareRowLabel}>Out-of-Pocket Cap</span><span className={styles.medicareRowVal} style={{color: 'var(--green)'}}>$2,000/year (new 2025)</span></div>
                <div className={styles.medicareRow}><span className={styles.medicareRowLabel}>Late Enrollment Penalty</span><span className={styles.medicareRowVal}>1% per month delayed</span></div>
                <div className={styles.medicareRow}><span className={styles.medicareRowLabel}>Key Rule</span><span className={styles.medicareRowVal}>Enroll at 65 even with no drugs</span></div>
              </div>
            </div>
            <div className={`${styles.callout} ${styles.gold}`}>
              <p><strong>📌 What Medicare Does NOT Cover:</strong> Original Medicare (Parts A+B) does not cover dental care, routine vision, hearing aids, most long-term care, or healthcare outside the U.S. These gaps are significant — dental alone can cost $2,000–$5,000/year in retirement. Medigap supplemental plans or Medicare Advantage can cover some of these gaps.<br/><small style={{opacity: .75}}>Source: Medicare.gov 2026.</small></p>
            </div>
          </section>

          <section id="annual-costs">
            <div className={styles.sectionLabel}>Annual Cost Breakdown</div>
            <h2>What Retirees Actually Pay Per Year</h2>
            <p>The table below estimates total annual healthcare costs for a single retiree at key ages, combining Medicare premiums, out-of-pocket expenses, and dental/vision. Costs use Original Medicare + Medigap Plan G and assume average health.</p>
            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable} summary="Data comparison table">
                <thead>
                  <tr>
                    <th scope="col">Age Range</th>
                    <th scope="col">Part B<br/>Premium</th>
                    <th scope="col">Part D<br/>Premium</th>
                    <th scope="col">Medigap /<br/>Advantage</th>
                    <th scope="col">OOP<br/>Expenses</th>
                    <th scope="col">Dental /<br/>Vision</th>
                    <th scope="col">Total<br/>Estimate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>65–69</strong></td><td>$2,220/yr</td><td>$552/yr</td><td>$1,200–$3,600/yr</td><td>~$3,000/yr</td><td>~$1,500/yr</td><td><strong style={{color: 'var(--blue)'}}>~$8,500–$11,000</strong></td></tr>
                  <tr><td><strong>70–74</strong></td><td>$2,220/yr</td><td>$552/yr</td><td>$1,800–$4,200/yr</td><td>~$4,500/yr</td><td>~$1,800/yr</td><td><strong style={{color: 'var(--blue)'}}>~$11,000–$13,500</strong></td></tr>
                  <tr><td><strong>75–79</strong></td><td>$2,220/yr</td><td>$600/yr</td><td>$2,400–$4,800/yr</td><td>~$6,000/yr</td><td>~$2,000/yr</td><td><strong style={{color: 'var(--gold)'}}>~$13,000–$16,000</strong></td></tr>
                  <tr><td><strong>80–84</strong></td><td>$2,220/yr</td><td>$600/yr</td><td>$3,000–$5,400/yr</td><td>~$8,000/yr</td><td>~$2,200/yr</td><td><strong style={{color: 'var(--red)'}}>~$16,000–$19,000</strong></td></tr>
                  <tr><td><strong>85+</strong></td><td>$2,220/yr</td><td>$600/yr</td><td>$3,600–$6,000/yr</td><td>~$10,000+/yr</td><td>~$2,400/yr</td><td><strong style={{color: 'var(--red)'}}>~$19,000–$22,000+</strong></td></tr>
                </tbody>
              </table>
            </div>
            <p style={{fontSize: '12px', color: 'var(--text-light)'}}>Estimates for a single retiree in average health. IRMAA surcharges not included. Source: Plootus Research 2026; CMS 2025 Medicare Data; Fidelity 2024; KFF 2025.</p>

            <div className={styles.chartBox}>
              <h3>Estimated Annual Healthcare Spending — Single Retiree, Ages 65–90</h3>
              <div style={{ height: '260px' }}>
                <canvas ref={chartRef}></canvas>
              </div>
              <p className={styles.chartSource}>Includes Medicare Parts B+D, Medigap Plan G, dental/vision, and average OOP. Excludes long-term care. Assumes ~5% annual healthcare inflation. Source: Plootus Research 2026; Fidelity 2024; CMS 2025; KFF 2025.</p>
            </div>
          </section>

          <section id="ltc">
            <div className={styles.sectionLabel}>Long-Term Care — The Largest Risk</div>
            <h2>Long-Term Care: The Retirement Cost Most People Ignore</h2>
            <p>According to the U.S. Department of Health and Human Services, approximately <strong>70% of people who reach age 65 will need some form of long-term care services</strong> during their lifetime. The cost can be financially devastating without proper planning.</p>
            <div className={styles.ltcGrid}>
              <div className={styles.ltcCard}>
                <div className={styles.ltcIcon}>🏠</div>
                <div className={styles.ltcType}>Home Health Aide</div>
                <div className={styles.ltcCost}>$27/hr</div>
                <div className={styles.ltcDesc}>~$54,000/year (8 hrs/day, 5 days/week). National median rate.<br/><small>Source: Genworth 2024</small></div>
              </div>
              <div className={styles.ltcCard}>
                <div className={styles.ltcIcon}>🏡</div>
                <div className={styles.ltcType}>Assisted Living Facility</div>
                <div className={styles.ltcCost}>$64,200/yr</div>
                <div className={styles.ltcDesc}>National median for private one-bedroom.<br/><small>Source: Genworth 2024</small></div>
              </div>
              <div className={styles.ltcCard}>
                <div className={styles.ltcIcon}>🏥</div>
                <div className={styles.ltcType}>Nursing Home (Private Room)</div>
                <div className={styles.ltcCost}>$108,405/yr</div>
                <div className={styles.ltcDesc}>National median for private room. Average stay: 2.5 years.<br/><small>Source: Genworth 2024</small></div>
              </div>
            </div>
            <div className={`${styles.callout} ${styles.red}`}>
              <p><strong>Medicare Does NOT Cover Long-Term Custodial Care:</strong> Medicare covers short-term skilled nursing after hospitalization (up to 100 days). It does not cover long-term custodial care — the type needed when someone requires help with daily activities like bathing, dressing, or eating. Medicaid covers long-term care, but only after assets are nearly exhausted. This is the primary financial risk of longevity.<br/><small style={{opacity: .75}}>Source: Medicare.gov; <abbr title="U.S. Department of Health and Human Services">HHS</abbr> Assistant Secretary for Planning and Evaluation.</small></p>
            </div>
          </section>

          <section id="strategies">
            <div className={styles.sectionLabel}>Reduce Your Healthcare Bill</div>
            <h2>5 Strategies to Manage Healthcare Costs in Retirement</h2>
            <ul className={styles.strategyList}>
              <li className={styles.strategyItem}>
                <div className={styles.strategyNum}>1</div>
                <div className={styles.strategyContent}>
                  <h4>Maximize Your <abbr title="Health Savings Account">HSA</abbr> While Working</h4>
                  <p>The Health Savings Account (HSA) is the most powerful healthcare retirement vehicle available. Contributions are tax-deductible, grow tax-free, and withdrawals for qualified medical expenses are tax-free at any age. After age 65, you can use HSA funds for any expense (taxed like a traditional IRA, but penalty-free).</p>
                  <div className={styles.strategyTip}>→ 2026 HSA limits: $4,300 (individual), $8,550 (family). Ages 55+ can contribute an additional $1,000 catch-up.</div>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyNum}>2</div>
                <div className={styles.strategyContent}>
                  <h4>Choose the Right Medicare Supplement</h4>
                  <p>Medigap Plan G is the most comprehensive supplement available to new Medicare enrollees and covers nearly all gaps in Original Medicare — leaving you with only the Part B deductible ($257/year). Medicare Advantage may have lower premiums but can be more restrictive for serious illness.</p>
                  <div className={styles.strategyTip}>→ Medigap Plan G: $100–$350/month depending on age and state — near-unlimited OOP protection</div>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyNum}>3</div>
                <div className={styles.strategyContent}>
                  <h4>Plan for Long-Term Care Insurance Early</h4>
                  <p>LTC insurance premiums are based on age and health at purchase. A 55-year-old in good health can buy a policy for $2,000–$4,000/year; waiting to 65 can push premiums to $5,000–$8,000/year — or make you uninsurable if health declines. Hybrid life/LTC policies are increasingly popular alternatives.</p>
                  <div className={styles.strategyTip}>→ Optimal purchase window: ages 52–60. After 65, premiums escalate rapidly and coverage may be denied.</div>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyNum}>4</div>
                <div className={styles.strategyContent}>
                  <h4>Choose Your Retirement State Strategically</h4>
                  <p>Healthcare costs vary significantly by state. Assisted living in Hawaii averages $140,000/year vs. under $55,000 in Mississippi. For best value, South Dakota (#4 healthcare nationally, low cost), Iowa, and North Dakota offer strong healthcare at below-average prices.</p>
                  <div className={styles.strategyTip}>→ See our <span onClick={() => router.push('/best-states-to-retire')} style={{color: 'var(--blue)', cursor: 'pointer'}}>Best States to Retire</span> guide for full healthcare rankings by state.</div>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyNum}>5</div>
                <div className={styles.strategyContent}>
                  <h4>Delay Medicare Part B Only If You Have Creditable Coverage</h4>
                  <p>If you're still working at 65 and covered by an employer plan with 20+ employees, you can delay Medicare Part B without penalty — saving $185/month. Once you leave employer coverage, you have 8 months to enroll without a late enrollment penalty.</p>
                  <div className={styles.strategyTip}>→ Warning: Delaying without creditable coverage triggers a permanent 10% per 12-month premium surcharge — an extremely costly mistake.</div>
                </div>
              </li>
            </ul>
          </section>

          <section id="faq" aria-label="Frequently Asked Questions">
            <div className={styles.sectionLabel}>FAQ</div>
            <h2>Frequently Asked Questions</h2>
            <FAQItem 
              question="How much should I save specifically for healthcare in retirement?" 
              answer="Fidelity's 2024 estimate is $157,500 for a single 65-year-old retiree and $413,000 for a couple — covering premiums, out-of-pocket costs, and dental/vision, but not long-term care. To be more conservative, target $200,000 per person in dedicated healthcare savings. If you retire early before Medicare at 65, add the cost of private insurance ($10,000–$25,000/year) for each year before Medicare eligibility. HSA accounts are the ideal vehicle for this reserve."
            />
            <FAQItem 
              question="What is Medigap and do I need it?" 
              answer="Medigap (Medicare Supplement Insurance) fills the gaps in Original Medicare — most importantly the 20% coinsurance on Part B services, which has no out-of-pocket maximum. Without Medigap, a serious illness could cost tens of thousands out-of-pocket. Plan G is the most popular option for new enrollees: it covers almost all gaps except the annual Part B deductible ($257 in 2025). Monthly premiums range from $100–$350+ depending on age and state. For most retirees with significant health needs, Medigap G is worth the premium."
            />
            <FAQItem 
              question="Does Medicare cover dental care?" 
              answer="Original Medicare (Parts A and B) does not cover routine dental care, dentures, or most dental procedures. Some Medicare Advantage (Part C) plans include dental benefits. Retirees who want dental coverage must either enroll in a Medicare Advantage plan with dental, purchase a standalone dental plan ($30–$80/month), or pay out of pocket. Budget $1,500–$3,000/year for dental in retirement as a baseline."
            />
            <FAQItem 
              question="What's the best way to cover healthcare costs before Medicare at 65?" 
              answer={<>Three primary options: (1) <strong><abbr title="Affordable Care Act">ACA</abbr> Marketplace plans</strong> — subsidies can significantly reduce costs if your income is below 400% of the federal poverty level; strategic Roth conversion management can keep income in subsidy-eligible ranges. (2) <strong><abbr title="Consolidated Omnibus Budget Reconciliation Act">COBRA</abbr> continuation coverage</strong> from a former employer — typically expensive at full cost but provides continuous coverage. (3) <strong>Spouse's employer coverage</strong> if your spouse is still working. For early retirees, ACA with income optimization is usually the best financial option. Never go uninsured — one serious illness can cost more than years of premiums.</>}
            />
          </section>

          <div className={styles.sourcesBox}>
            <h4>Sources</h4>
            <ul>
              <li>Fidelity Investments — Retiree Health Care Cost Estimate 2024 ($413,000 couple estimate)</li>
              <li>Centers for Medicare & Medicaid Services — Medicare 2025 Costs at a Glance (medicare.gov)</li>
              <li>KFF (Kaiser Family Foundation) — Medicare Cost Data 2025 (kff.org)</li>
              <li>Genworth — Cost of Care Survey 2024 (long-term care national cost data)</li>
              <li>U.S. Department of Health and Human Services — Long-Term Care Statistics (70% of 65+ will need LTC)</li>
              <li>IRS — HSA Contribution Limits 2026 (irs.gov)</li>
              <li>America's Health Rankings — Senior Report 2024 (americashealthrankings.org)</li>
              <li>Ooma — Most and Least Expensive States for Retiree Assisted Living, 2025</li>
            </ul>
          </div>

        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles.sidebarCard}>
            <h4>On This Page</h4>
            <ul className={styles.tocList}>
              <li><a href="#big-picture">The Big Picture</a></li>
              <li><a href="#medicare">Medicare Parts A–D</a></li>
              <li><a href="#annual-costs">Annual Cost Breakdown</a></li>
              <li><a href="#ltc">Long-Term Care Costs</a></li>
              <li><a href="#strategies">5 Cost Strategies</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className={styles.keyStatCard}>
            <span className={styles.ksNum}>70%</span>
            <span className={styles.ksLabel}>of people who reach 65 will need long-term care — at a median cost of $64,200/year.</span>
            <span className={styles.ksSource}>Source: HHS; Genworth 2024 · Plootus Research 2026</span>
          </div>
          <div className={styles.ctaCard}>
            <h4>What's my retirement number?</h4>
            <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
            <div onClick={() => router.push('/retirement-calculator')} className={styles.ctaBtn}>
              Check Here
            </div>
          </div>
          <div className={styles.sidebarCard}>
            <h4>Related Guides</h4>
            <ul className={styles.relatedLinks}>
              <li><a onClick={() => router.push('/how-to-plan-retirement')} style={{cursor: 'pointer'}}>How to Plan for Retirement</a></li>
              <li><a onClick={() => router.push('/best-states-to-retire')} style={{cursor: 'pointer'}}>Best States for Retiree Healthcare</a></li>
              <li><a onClick={() => router.push('/retire-early')} style={{cursor: 'pointer'}}>How to Retire Early</a></li>
              <li><a onClick={() => router.push('/social-security-benefits')} style={{cursor: 'pointer'}}>Social Security Benefits</a></li>
              <li><a onClick={() => router.push('/how-much-to-retire')} style={{cursor: 'pointer'}}>How Much Do I Need to Retire?</a></li>
            </ul>
          </div>
        </aside>
      </div>
      <PartnersSection 
        titleFontSize="28px !important"
        titleFontWeight={800}
        titleColor="var(--navy) !important"
        titleLetterSpacing="-0.3px"
        subtitleFontSize="15px"
        subtitleColor="var(--text-mid)"
        rootPadding="40px 0 0"
      />
    </div>
  );
};

export default HealthCareCostInRetirement;
