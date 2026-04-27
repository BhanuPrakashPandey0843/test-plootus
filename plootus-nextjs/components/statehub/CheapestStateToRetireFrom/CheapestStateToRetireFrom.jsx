import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Chart from 'chart.js/auto';
import styles from './CheapestStateToRetireFrom.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const CheapestStateToRetireFrom = () => {
  const router = useRouter();
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      const states = ['Arkansas', 'W. Virginia', 'Mississippi', 'Oklahoma', 'Alabama', 'Kansas', 'Tennessee', 'Missouri', 'Iowa', 'South Dakota', 'National Avg', 'Florida', 'California', 'New York', 'Hawaii'];
      const costs = [46200, 47200, 47000, 47500, 48000, 48500, 49500, 49500, 51800, 52000, 57800, 57200, 102000, 112000, 129296];
      const colors = costs.map(c => c < 50000 ? '#2CB67D' : c <= 57800 ? '#3B5BDB' : '#E03131');

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: states,
          datasets: [{
            label: 'Annual Retirement Cost',
            data: costs,
            backgroundColor: colors,
            borderRadius: 5
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (context) => '$' + context.parsed.y.toLocaleString() + '/year'
              }
            }
          },
          scales: {
            y: {
              ticks: {
                callback: (value) => '$' + (value / 1000).toFixed(0) + 'K',
                font: { family: "Plus Jakarta Sans", size: 11 }
              },
              grid: { color: '#E2E8F4' }
            },
            x: {
              ticks: {
                font: { family: "Plus Jakarta Sans", size: 10 },
                maxRotation: 35
              },
              grid: { display: false }
            }
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
        <title>Cheapest States to Retire in 2026: All 50 States Ranked | Plootus</title>
        <meta name="description" content="Discover the most affordable states for retirement in 2026. Arkansas and Mississippi lead in low cost of living, while South Dakota offers the best value with healthcare." />
        <link rel="canonical" href="https://www.plootus.com/cheapest-states-to-retire" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Cheapest States to Retire in 2026: All 50 States Ranked by Affordability",
            "description": "Analysis of the most affordable U.S. states for retirement in 2026, comparing annual costs, savings requirements, and healthcare quality.",
            "author": {
              "@type": "Organization",
              "name": "Plootus Research Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Plootus",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.plootus.com/logo.png"
              }
            }
          })}
        </script>
      </Head>

      <HubNav />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>💰 Plootus Research Report · March 2026</div>
          <h1>Cheapest States to Retire in 2026: All 50 States Ranked by Affordability</h1>
          <p className={styles.heroSub}>Your retirement dollars stretch dramatically further in some states than others. We ranked all 50 states by annual cost, minimum savings needed, tax burden, and healthcare — so you can find where affordable meets livable.</p>
          <div className={styles.heroMeta}>
            <span>By the Plootus Research Team</span>
            <span>Last updated: March 2026</span>
            <span>Sources: GOBankingRates, BLS, MERIC, Kiplinger</span>
          </div>
        </div>
      </section>

      {/* Stat Strip */}
      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}>
            <span className={`${styles.statNum} ${styles.green}`}>$534K</span>
            <span className={styles.statLabel}>Min. Savings — Cheapest State</span>
          </div>
          <div className={styles.statItem}>
            <span className={`${styles.statNum} ${styles.green}`}>~$46K</span>
            <span className={styles.statLabel}>Annual Cost — Most Affordable</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>3×</span>
            <span className={styles.statLabel}>Cost Gap: Cheapest vs. Priciest</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>54%</span>
            <span className={styles.statLabel}>SS Coverage in Kansas (Most Efficient)</span>
          </div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent}>
          {/* Overview */}
          <section id="overview">
            <div className={styles.sectionLabel}>Overview</div>
            <h2>Why Geography Is the Biggest Savings Variable in Retirement</h2>
            <p>Most retirement planning focuses on contribution limits, investment returns, and savings rates — but the single biggest lever most pre-retirees overlook is <strong>geography</strong>. The difference between retiring in the most and least expensive U.S. state represents over $1.5 million in required lifetime savings.</p>
            <p>This report ranks all 50 states by retirement affordability, drawing on BLS expenditure data adjusted for state cost of living, to show annual costs, minimum savings requirements, and — critically — which cheap states also offer decent healthcare and quality of life.</p>
            <div className={`${styles.callout} ${styles.gold}`}>
              <p><strong>Key Finding (2026):</strong> Arkansas, West Virginia, Mississippi, Oklahoma, and Alabama rank as the five lowest-cost states to retire. However, four of those five rank in the bottom 5 for healthcare quality. The true "best value" picks — where affordability meets livability — are <strong>South Dakota, Iowa, Michigan, Nebraska, and Missouri</strong>.<br /><small style={{ opacity: .75 }}>Source: Plootus Research 2026; GOBankingRates Jan. 2026; WalletHub 2026.</small></p>
            </div>
          </section>

          {/* Top Rankings */}
          <section id="top10">
            <div className={styles.sectionLabel}>Top Rankings</div>
            <h2>Top 10 Most Affordable States to Retire (2026)</h2>
            <p>Ranked by annual cost of living for a retiree aged 65+, adjusted for each state's cost-of-living index. Minimum savings = annual cost minus average Social Security income ($24,894), divided by 4%.</p>
            <div className={styles.top10Grid}>
              <AffCard rank={1} state="Arkansas" cost="~$46,200/yr" savings="~$534,500" tags={['Lowest Rent: $722/mo', 'HC Rank: #45']} top3 />
              <AffCard rank={2} state="Mississippi" cost="~$47,000/yr" savings="~$557,000" tags={['No SS Tax', 'HC Rank: #49']} top3 />
              <AffCard rank={3} state="Oklahoma" cost="~$47,500/yr" savings="~$572,500" tags={['2nd Lowest Gas: $2.67', 'HC Rank: #43']} top3 />
              <AffCard rank={4} state="Alabama" cost="~$48,000/yr" savings="~$582,500" tags={['Low Property Tax', 'HC Rank: #48']} />
              <AffCard rank={5} state="West Virginia" cost="~$47,200/yr" savings="~$558,000" tags={['SS Tax Eliminated 2026', 'HC Rank: #50']} />
              <AffCard rank={6} state="Kansas" cost="~$48,500/yr" savings="~$590,000" tags={['SS Covers 51.3% of Cost']} />
              <AffCard rank={7} state="Tennessee" cost="~$49,500/yr" savings="~$612,500" tags={['No Income Tax', 'No Estate Tax']} />
              <AffCard rank={8} state="Kentucky" cost="~$48,000/yr" savings="~$582,500" tags={['HC Rank: #47']} />
              <AffCard rank={9} state="Louisiana" cost="~$49,000/yr" savings="~$600,000" tags={['Lowest In-Home Care Costs']} />
              <AffCard rank={10} state="Missouri" cost="~$49,500/yr" savings="~$612,500" tags={['SS Tax Eliminated 2024', 'HC Rank: #32']} />
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>Annual cost = BLS Consumer Expenditure Survey 2024 (65+ cohort) × MERIC Q3 2025 state cost-of-living index. Min. savings = (Annual cost − $24,894 avg. SS) ÷ 0.04. Sources: GOBankingRates Jan. 2026; RetirementLiving.com 2026; Plootus Research 2026.</p>
          </section>

          {/* Best Value */}
          <section id="best-value">
            <div className={styles.sectionLabel}>Best Value Picks</div>
            <h2>Best Value States: Affordable AND Livable</h2>
            <p>The cheapest states on raw cost often rank poorly on healthcare. These five states offer the best balance of affordability and quality — including healthcare, safety, and senior services:</p>
            <div className={styles.valueGrid}>
              <ValueCard rank={1} state="South Dakota" cost="~$52,000" savings="$680,000" tax="A+" hc="#4" />
              <ValueCard rank={2} state="Iowa" cost="~$51,800" savings="$672,500" tax="B" hc="#28" />
              <ValueCard rank={3} state="Missouri" cost="~$49,500" savings="$612,500" tax="B" hc="#32" />
              <ValueCard rank={4} state="Nebraska" cost="~$51,000" savings="$652,500" tax="B" hc="#22" />
              <ValueCard rank={5} state="Michigan" cost="~$52,500" savings="$689,000" tax="B" hc="#26" />
            </div>
          </section>

          {/* Full Rankings */}
          <section id="full-rankings">
            <div className={styles.sectionLabel}>Full Data</div>
            <h2>All 50 States — Retirement Affordability Rankings (2026)</h2>
            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>State</th>
                    <th>Annual Cost</th>
                    <th>Min. Savings</th>
                    <th>Tax Grade</th>
                    <th>HC Rank</th>
                    <th>Value Rating</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow rank={1} state="Arkansas" cost="$46,200" savings="$534,500" grade="C" hc="#45" value="Mixed" />
                  <TableRow rank={2} state="Mississippi" cost="$47,000" savings="$557,000" grade="B" hc="#49" value="Poor HC" />
                  <TableRow rank={3} state="Oklahoma" cost="$47,500" savings="$572,500" grade="B" hc="#43" value="Poor HC" />
                  <TableRow rank={4} state="West Virginia" cost="$47,200" savings="$558,000" grade="B" hc="#50" value="Poor HC" />
                  <TableRow rank={5} state="Alabama" cost="$48,000" savings="$582,500" grade="B" hc="#48" value="Poor HC" />
                  <TableRow rank={6} state="Kansas" cost="$48,500" savings="$590,000" grade="B" hc="#36" value="Good" />
                  <TableRow rank={7} state="Kentucky" cost="$48,000" savings="$582,500" grade="C" hc="#47" value="Poor HC" />
                  <TableRow rank={8} state="Louisiana" cost="$49,000" savings="$600,000" grade="B" hc="#46" value="Poor HC" />
                  <TableRow rank={9} state="Missouri" cost="$49,500" savings="$612,500" grade="B" hc="#32" value="Best Value" />
                  <TableRow rank={10} state="Tennessee" cost="$49,500" savings="$612,500" grade="A" hc="#44" value="Mixed" />
                  <TableRow rank={12} state="Nebraska" cost="$51,000" savings="$652,500" grade="B" hc="#22" value="Best Value" />
                  <TableRow rank={14} state="Iowa" cost="$51,800" savings="$672,500" grade="B" hc="#28" value="Best Value" />
                  <TableRow rank={15} state="South Dakota" cost="$52,000" savings="$680,000" grade="A+" hc="#4" value="Best Value" />
                  <TableRow rank={17} state="Michigan" cost="$52,500" savings="$689,000" grade="B" hc="#26" value="Best Value" />
                  <TableRow rank={20} state="Wyoming" cost="$52,000" savings="$680,000" grade="A+" hc="#33" value="Best Value" />
                  <TableRow rank={25} state="Florida" cost="$57,200" savings="$810,000" grade="A+" hc="#27" value="Good" />
                  <TableRow rank={38} state="New York" cost="$112,000" savings="$2,178,000" grade="D" hc="#12" value="Very Costly" />
                  <TableRow rank={39} state="California" cost="$102,000" savings="$1,927,500" grade="D" hc="#8" value="Very Costly" />
                  <TableRow rank={50} state="Hawaii" cost="$129,296" savings="$2,610,150" grade="D" hc="#11" value="Most Costly" />
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>Source: Plootus Research 2026; GOBankingRates 2026; BLS Consumer Expenditure Survey 2024; MERIC Q3 2025 Cost of Living Index; WalletHub 2026.</p>

            <div className={styles.chartBox}>
              <h3>Annual Retirement Cost — Most & Least Affordable States</h3>
              <div style={{ height: '280px', position: 'relative' }}>
                <canvas ref={chartRef}></canvas>
              </div>
              <p className={styles.chartSource}>Source: BLS Consumer Expenditure Survey 2024 (ages 65+) adjusted by MERIC Q3 2025 Cost of Living Index. Plootus Research 2026.</p>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq">
            <div className={styles.sectionLabel}>FAQ</div>
            <h2>Frequently Asked Questions</h2>
            <FaqItem
              index={0}
              openIndex={openFaqIndex}
              onToggle={toggleFaq}
              question="What is the absolute cheapest state to retire in 2026?"
              answer="By raw annual cost, Arkansas is the cheapest state to retire in 2026 at approximately $46,200/year for a retiree aged 65+. This equates to a minimum savings requirement of about $534,500 (after accounting for average Social Security income of $24,894/year and using the 4% withdrawal rule). However, Arkansas ranks #45 nationally for healthcare quality — making it a financially appealing but medically risky choice for those with health concerns."
            />
            <FaqItem
              index={1}
              openIndex={openFaqIndex}
              onToggle={toggleFaq}
              question="Which cheap states also have good healthcare?"
              answer="This is the critical question most affordability rankings ignore. The best balance of low cost and quality healthcare is found in: South Dakota (annual cost ~$52K, healthcare rank #4), Iowa (~$51.8K, rank #28), Nebraska (~$51K, rank #22), and Missouri (~$49.5K, rank #32). These states combine lower-than-average costs with decent to above-average healthcare systems — making them the true 'value' picks for retirees."
            />
            <FaqItem
              index={2}
              openIndex={openFaqIndex}
              onToggle={toggleFaq}
              question="How much does Social Security cover in the cheapest states?"
              answer="This is one of the most powerful arguments for retiring in a low-cost state. In Kansas, the average Social Security benefit of $24,894/year covers approximately 51.3% of the average annual retirement cost (~$48,500). In a high-cost state like California, the same benefit covers only ~24% of annual costs (~$102,000). In other words, Social Security does roughly twice the work in the cheapest states compared to expensive ones — dramatically reducing your required savings."
            />
          </section>

          {/* Sources */}
          <div className={styles.sourcesBox}>
            <h4>Sources</h4>
            <ul>
              <li>GOBankingRates — "Cheapest States to Retire in 2026," January 2026</li>
              <li>BLS Consumer Expenditure Survey 2024 (65+ age cohort)</li>
              <li>Missouri Economic Research & Information Center (MERIC) — Cost of Living Index, Q3 2025</li>
              <li>WalletHub — 2026 Best States to Retire Rankings</li>
              <li>Social Security Administration — Monthly Statistical Snapshot, November 2025</li>
              <li>U.S. News & World Report — Best States for Healthcare 2026</li>
              <li>Plootus Research — State Retirement Affordability Analysis 2026</li>
              <li>RetirementLiving.com — State Retirement Cost Estimates 2026</li>
            </ul>
          </div>
        </main>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <h4>On This Page</h4>
            <ul className={styles.tocList}>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#top10">Top 10 Affordable States</a></li>
              <li><a href="#best-value">Best Value Picks</a></li>
              <li><a href="#full-rankings">All 50 States</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className={styles.ctaCard}>
            <h4>What's my retirement number?</h4>
            <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
            <div onClick={() => router.push('/retirement-calculator')} className={styles.ctaBtn} style={{cursor: 'pointer'}}>
              Check Here
            </div>
          </div>
          <div className={styles.sidebarCard}>
            <h4>Related Guides</h4>
            <ul className={styles.relatedLinks}>
              <li><div onClick={() => router.push('/best-states-to-retire')} style={{cursor: 'pointer'}}>Best States to Retire 2026</div></li>
              <li><div onClick={() => router.push('/tax-friendly-states')} style={{cursor: 'pointer'}}>Tax-Friendly States Guide</div></li>
              <li><div onClick={() => router.push('/how-much-to-retire')} style={{cursor: 'pointer'}}>How Much Do I Need?</div></li>
              <li><div onClick={() => router.push('/social-security-benefits')} style={{cursor: 'pointer'}}>Social Security Guide</div></li>
              <li><div onClick={() => router.push('/retirement-statistics')} style={{cursor: 'pointer'}}>Retirement Statistics 2026</div></li>
            </ul>
          </div>
        </aside>
      </div>
      <PartnersSection 
        titleFontSize="22px"
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

const AffCard = ({ rank, state, cost, savings, tags, top3 }) => (
  <div className={styles.affCard}>
    <div className={`${styles.affRank} ${top3 ? styles.top3 : ''}`}>{rank}</div>
    <div className={styles.affContent}>
      <div className={styles.affState}>{state}</div>
      <div className={styles.affCost}>{cost} · Min. savings: {savings}</div>
      <div className={styles.affTags}>
        {tags.map((tag, i) => <span key={i} className={styles.affTag}>{tag}</span>)}
      </div>
    </div>
  </div>
);

const ValueCard = ({ rank, state, cost, savings, tax, hc }) => (
  <div className={styles.valueCard}>
    <div className={styles.valueBadge}>✅ Best Value #{rank}</div>
    <div className={styles.valueState}>{state}</div>
    <div className={styles.valueRow}><span className={styles.valueRowLabel}>Annual Cost</span><span className={styles.valueRowVal}>{cost}</span></div>
    <div className={styles.valueRow}><span className={styles.valueRowLabel}>Min. Savings</span><span className={styles.valueRowVal}>{savings}</span></div>
    <div className={styles.valueRow}><span className={styles.valueRowLabel}>Tax Grade</span><span className={styles.valueRowVal}>{tax}</span></div>
    <div className={styles.valueRow}><span className={styles.valueRowLabel}>Healthcare Rank</span><span className={styles.valueRowVal}>{hc}</span></div>
  </div>
);

const TableRow = ({ rank, state, cost, savings, grade, hc, value }) => {
  const gradeClass = grade === 'A+' ? styles.gradeAPlus : grade === 'A' ? styles.gradeA : grade === 'B' ? styles.gradeB : grade === 'C' ? styles.gradeC : styles.gradeD;
  const valueClass = value === 'Best Value' ? styles.valueBest : value === 'Good' ? styles.valueGood : value === 'Mixed' ? styles.valueMixed : styles.valuePoor;

  return (
    <tr>
      <td>{rank}</td>
      <td><strong>{state}</strong></td>
      <td>{cost}</td>
      <td>{savings}</td>
      <td><span className={`${styles.gradeBadge} ${gradeClass}`}>{grade}</span></td>
      <td>{hc}</td>
      <td><span className={`${styles.valuePill} ${valueClass}`}>{value}</span></td>
    </tr>
  );
};

const FaqItem = ({ index, openIndex, onToggle, question, answer }) => (
  <div className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}>
    <button className={styles.faqQ} onClick={() => onToggle(index)}>
      {question} <span className={styles.faqIcon}>+</span>
    </button>
    <div className={styles.faqA}>{answer}</div>
  </div>
);

export default CheapestStateToRetireFrom;
