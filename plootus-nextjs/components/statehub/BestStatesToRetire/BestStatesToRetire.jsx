import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Chart from 'chart.js/auto';
import styles from './BestStatesToRetire.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const BestStatesToRetire = () => {
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
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Arkansas', 'W. Virginia', 'Oklahoma', 'Kansas', 'Iowa', 'S. Dakota', 'Wyoming', 'National Avg', 'Florida', 'Colorado', 'N. Jersey', 'California', 'New York', 'Hawaii'],
          datasets: [{
            label: 'Annual Cost ($)',
            data: [46200, 47200, 47500, 48500, 51000, 49000, 52000, 57800, 57000, 61000, 76000, 84600, 82000, 129296],
            backgroundColor: (c) => c.raw < 52000 ? '#2CB67D' : c.raw > 80000 ? '#DC2626' : c.raw === 57800 ? '#94A3B8' : '#3B5BDB',
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (c) => '$' + c.raw.toLocaleString() + '/year'
              }
            }
          },
          scales: {
            y: {
              ticks: {
                callback: (v) => '$' + v.toLocaleString(),
                font: { family: "Plus Jakarta Sans" }
              },
              grid: { color: '#F1F5F9' }
            },
            x: {
              grid: { display: false },
              ticks: { font: { family: "Plus Jakarta Sans" } }
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
        <title>Best States to Retire in 2026: All 50 States Ranked | Plootus</title>
        <meta name="description" content="Plootus ranks all 50 states for retirement in 2026. Wyoming and Florida top the list for tax-friendliness and quality of life. See the full report and state comparison." />
        <link rel="canonical" href="https://www.plootus.com/best-states-to-retire" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Best States to Retire in 2026: All 50 States Ranked",
            "description": "Comprehensive 2026 report ranking all 50 U.S. states for retirement based on affordability, taxes, healthcare, and quality of life.",
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

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>📊 Plootus Research Report · Updated March 2026</div>
          <h1>Best States to Retire in 2026: All 50 States Ranked</h1>
          <p className={styles.heroSub}>Where you retire can determine whether your savings last. We ranked every state across affordability, taxes, healthcare, and quality of life — so you don't have to guess.</p>
          <div className={styles.heroMeta}>
            <span>By the Plootus Research Team</span>
            <span>· Last updated: March 2026</span>
            <span>· 20-minute read</span>
            <span>· Citable data — all sources listed</span>
          </div>
        </div>
      </section>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}>
            <div className={styles.statNum}>50</div>
            <div className={styles.statLabel}>States Ranked</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>$2M+</div>
            <div className={styles.statLabel}>Needed in Most Expensive State</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>$534K</div>
            <div className={styles.statLabel}>Needed in Most Affordable State</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>3×</div>
            <div className={styles.statLabel}>Cost Difference: Cheapest vs. Priciest</div>
          </div>
        </div>
      </div>

      <div className={styles.layoutWrap}>
        <div className={styles.layout}>
          <main className={styles.main}>
            <section id="overview">
              <h2>Why Where You Retire Matters as Much as How Much You Save</h2>
              <p>Choosing the right state for retirement is one of the most financially impactful decisions you'll ever make — yet most people spend more time researching their next vacation than their retirement address.</p>
              <p>A retiree in Hawaii needs more than <strong>three times the savings</strong> of a retiree in West Virginia to sustain the same lifestyle. The Plootus Research Team analyzed all 50 states across four core pillars: Affordability, Tax Friendliness, Healthcare Access & Quality, and Quality of Life.</p>
              <div className={styles.callout}>
                <strong>Key Finding:</strong> The gap between the most and least expensive states to retire is now over <strong>$1.3 million in required savings</strong> over a 25-year retirement — the single biggest financial variable most pre-retirees overlook. <em>Source: Plootus Research 2026; GOBankingRates 2026.</em>
              </div>
            </section>

            <section id="top5">
              <h2>Top 5 Best States to Retire (2026)</h2>
              <p>Based on our composite scoring across all four pillars, here are the states offering the best overall retirement environment in 2026:</p>
              <div className={styles.top5Grid}>
                <div className={styles.rankCard}>
                  <div className={`${styles.rankNum} ${styles.gold}`}>1</div>
                  <div className={styles.rankInfo}>
                    <div className={styles.rankState}>Wyoming</div>
                    <div className={styles.rankScore}>Overall Score: 61.56 / 100</div>
                    <div className={styles.rankBadges}>
                      <span className={`${styles.badge} ${styles.badgeBlue}`}>No Income Tax</span>
                      <span className={`${styles.badge} ${styles.badgeGreen}`}>Low Cost of Living</span>
                      <span className={`${styles.badge} ${styles.badgeGold}`}>0.53% Property Tax</span>
                    </div>
                  </div>
                </div>
                <div className={styles.rankCard}>
                  <div className={`${styles.rankNum} ${styles.silver}`}>2</div>
                  <div className={styles.rankInfo}>
                    <div className={styles.rankState}>Florida</div>
                    <div className={styles.rankScore}>Overall Score: 61.55 / 100</div>
                    <div className={styles.rankBadges}>
                      <span className={`${styles.badge} ${styles.badgeBlue}`}>No Income Tax</span>
                      <span className={`${styles.badge} ${styles.badgeGreen}`}>#1 Quality of Life</span>
                    </div>
                  </div>
                </div>
                <div className={styles.rankCard}>
                  <div className={`${styles.rankNum} ${styles.bronze}`}>3</div>
                  <div className={styles.rankInfo}>
                    <div className={styles.rankState}>South Dakota</div>
                    <div className={styles.rankScore}>Overall Score: 58.69 / 100</div>
                    <div className={styles.rankBadges}>
                      <span className={`${styles.badge} ${styles.badgeBlue}`}>No Income Tax</span>
                      <span className={`${styles.badge} ${styles.badgeGreen}`}>#4 Healthcare Nationally</span>
                    </div>
                  </div>
                </div>
                <div className={styles.rankCard}>
                  <div className={styles.rankNum}>4</div>
                  <div className={styles.rankInfo}>
                    <div className={styles.rankState}>Colorado</div>
                    <div className={styles.rankScore}>Overall Score: 58.37 / 100</div>
                    <div className={styles.rankBadges}>
                      <span className={`${styles.badge} ${styles.badgeGreen}`}>#3 Healthcare</span>
                      <span className={`${styles.badge} ${styles.badgeGold}`}>Outdoor Activities</span>
                    </div>
                  </div>
                </div>
                <div className={styles.rankCard}>
                  <div className={styles.rankNum}>5</div>
                  <div className={styles.rankInfo}>
                    <div className={styles.rankState}>Minnesota</div>
                    <div className={styles.rankScore}>Overall Score: 58.29 / 100</div>
                    <div className={styles.rankBadges}>
                      <span className={`${styles.badge} ${styles.badgeGreen}`}>#1 Healthcare</span>
                      <span className={`${styles.badge} ${styles.badgeBlue}`}>Strong Senior Services</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.sourcesBox}>
                <h4>Sources</h4>
                <p>Plootus Research 2026, compiled from WalletHub 2026 State Retirement Rankings, GOBankingRates 2026, U.S. News & World Report Healthcare Rankings, and MERIC Cost of Living Index Q3 2025.</p>
              </div>
            </section>

            <section id="full-rankings">
              <h2>All 50 States Ranked for Retirement (2026)</h2>
              <p>Each pillar is ranked 1 (best) to 50 (worst). Overall Score is our weighted composite. Min. Savings based on 4% withdrawal rule minus average Social Security income ($24,894/year), adjusted for state cost of living.</p>
              <div className={styles.tableScroll}>
                <table className={styles.rankingsTable}>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>State</th>
                      <th>Score</th>
                      <th>Affordability</th>
                      <th>Tax</th>
                      <th>Healthcare</th>
                      <th>Quality of Life</th>
                      <th>Min. Savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={styles.hl}><td>1</td><td><strong>Wyoming</strong></td><td>61.56</td><td>#1</td><td><span className={`${styles.grade} ${styles.gradeA}`}>A</span></td><td>#33</td><td>#6</td><td>$990,000</td></tr>
                    <tr className={styles.hl}><td>2</td><td><strong>Florida</strong></td><td>61.55</td><td>#2</td><td><span className={`${styles.grade} ${styles.gradeA}`}>A</span></td><td>#27</td><td>#1</td><td>$1,010,000</td></tr>
                    <tr className={styles.hl}><td>3</td><td><strong>South Dakota</strong></td><td>58.69</td><td>#15</td><td><span className={`${styles.grade} ${styles.gradeA}`}>A</span></td><td>#4</td><td>#25</td><td>$880,000</td></tr>
                    <tr className={styles.hl}><td>4</td><td><strong>Colorado</strong></td><td>58.37</td><td>#19</td><td><span className={`${styles.grade} ${styles.gradeB}`}>B</span></td><td>#3</td><td>#19</td><td>$1,050,000</td></tr>
                    <tr className={styles.hl}><td>5</td><td><strong>Minnesota</strong></td><td>58.29</td><td>#33</td><td><span className={`${styles.grade} ${styles.gradeB}`}>B</span></td><td>#1</td><td>#7</td><td>$960,000</td></tr>
                    <tr><td>6</td><td>Alaska</td><td>57.90</td><td>#13</td><td><span className={`${styles.grade} ${styles.gradeA}`}>A</span></td><td>#5</td><td>#34</td><td>$1,020,000</td></tr>
                    <tr><td>7</td><td>Delaware</td><td>57.35</td><td>#3</td><td><span className={`${styles.grade} ${styles.gradeA}`}>A</span></td><td>#15</td><td>#36</td><td>$870,000</td></tr>
                    <tr><td>8</td><td>Pennsylvania</td><td>56.85</td><td>#26</td><td><span className={`${styles.grade} ${styles.gradeB}`}>B</span></td><td>#13</td><td>#5</td><td>$900,000</td></tr>
                    <tr><td>9</td><td>New Hampshire</td><td>56.40</td><td>#23</td><td><span className={`${styles.grade} ${styles.gradeB}`}>B</span></td><td>#20</td><td>#8</td><td>$980,000</td></tr>
                    <tr><td>10</td><td>Iowa</td><td>56.26</td><td>#17</td><td><span className={`${styles.grade} ${styles.gradeB}`}>B</span></td><td>#28</td><td>#11</td><td>$810,000</td></tr>
                    <tr><td>11</td><td>Wisconsin</td><td>56.05</td><td>#24</td><td><span className={`${styles.grade} ${styles.gradeB}`}>B</span></td><td>#18</td><td>#9</td><td>$850,000</td></tr>
                    <tr><td>12</td><td>Virginia</td><td>55.48</td><td>#20</td><td><span className={`${styles.grade} ${styles.gradeB}`}>B</span></td><td>#25</td><td>#15</td><td>$940,000</td></tr>
                    <tr><td>13</td><td>North Carolina</td><td>54.91</td><td>#7</td><td><span className={`${styles.grade} ${styles.gradeB}`}>B</span></td><td>#37</td><td>#26</td><td>$830,000</td></tr>
                    <tr><td>15</td><td>Missouri</td><td>54.73</td><td>#10</td><td><span className={`${styles.grade} ${styles.gradeB}`}>B</span></td><td>#32</td><td>#29</td><td>$790,000</td></tr>
                    <tr><td>20</td><td>Ohio</td><td>52.40</td><td>#22</td><td><span className={`${styles.grade} ${styles.gradeB}`}>B</span></td><td>#38</td><td>#13</td><td>$800,000</td></tr>
                    <tr><td>25</td><td>California</td><td>50.70</td><td>#39</td><td><span className={`${styles.grade} ${styles.gradeD}`}>D</span></td><td>#8</td><td>#22</td><td>$1,570,000</td></tr>
                    <tr><td>32</td><td>Tennessee</td><td>49.02</td><td>#4</td><td><span className={`${styles.grade} ${styles.gradeA}`}>A</span></td><td>#44</td><td>#47</td><td>$820,000</td></tr>
                    <tr><td>33</td><td>Texas</td><td>48.54</td><td>#25</td><td><span className={`${styles.grade} ${styles.gradeA}`}>A</span></td><td>#39</td><td>#38</td><td>$910,000</td></tr>
                    <tr><td>45</td><td>New York</td><td>45.34</td><td>#50</td><td><span className={`${styles.grade} ${styles.gradeD}`}>D</span></td><td>#12</td><td>#12</td><td>$1,980,000</td></tr>
                    <tr><td>46</td><td>Hawaii</td><td>45.27</td><td>#49</td><td><span className={`${styles.grade} ${styles.gradeD}`}>D</span></td><td>#11</td><td>#21</td><td>$2,100,000+</td></tr>
                  </tbody>
                </table>
              </div>
              <div className={styles.sourcesBox}>
                <h4>Sources</h4>
                <p>Plootus Research 2026, WalletHub 2026, GOBankingRates 2026, BLS Consumer Expenditure Survey 2024, MERIC Q3 2025 Cost of Living Index. Rank 1 = best in category.</p>
              </div>
            </section>

            <section id="cost-chart">
              <h2>Annual Retirement Cost by State</h2>
              <p>Hawaii ranks as the most expensive state to retire with average annual expenditures reaching <strong>$129,296</strong>. Retirees in West Virginia, Oklahoma, and Kansas can sustain a comfortable retirement on roughly <strong>$47,000–$50,000 annually</strong> — less than half of Hawaii.</p>
              <div className={styles.callout}>
                <strong>The Plootus Insight:</strong> A retiree who moves from Hawaii to Iowa at age 65 effectively gains the equivalent of adding over <strong>$1.5 million to their savings</strong> — without saving an extra dollar.
              </div>
              <div className={styles.chartWrap}>
                <div className={styles.chartTitle}>Annual Retirement Cost — Selected States (2026)</div>
                <div style={{ height: '280px', position: 'relative' }}>
                  <canvas ref={chartRef}></canvas>
                </div>
                <div className={styles.chartSource}>Source: Plootus Research 2026, BLS Consumer Expenditure Survey 2024 (65+) × MERIC Q3 2025 Cost of Living Index. National average: ~$57,800/year.</div>
              </div>
            </section>

            <section id="head-to-head">
              <h2>Wyoming vs. Hawaii: The $1.1 Million Gap</h2>
              <div className={styles.spotlightGrid}>
                <div className={styles.spotlightCard}>
                  <div className={`${styles.spotlightHeader} ${styles.blue}`}>✅ #1 Wyoming — Best Overall</div>
                  <div className={styles.spotlightBody}>
                    <div className={styles.spotlightRow}><span>Annual Cost</span><span>~$52,000</span></div>
                    <div className={styles.spotlightRow}><span>Income Tax</span><span>None</span></div>
                    <div className={styles.spotlightRow}><span>Taxes SS?</span><span>No</span></div>
                    <div className={styles.spotlightRow}><span>Property Tax</span><span>0.53%</span></div>
                    <div className={styles.spotlightRow}><span>Min. Savings</span><span>~$990,000</span></div>
                    <div className={styles.spotlightRow}><span>Healthcare Rank</span><span>#33 / 50</span></div>
                  </div>
                </div>
                <div className={styles.spotlightCard}>
                  <div className={`${styles.spotlightHeader} ${styles.red}`}>⚠️ #46 Hawaii — Most Expensive</div>
                  <div className={styles.spotlightBody}>
                    <div className={styles.spotlightRow}><span>Annual Cost</span><span>~$129,296</span></div>
                    <div className={styles.spotlightRow}><span>Income Tax</span><span>Up to 11%</span></div>
                    <div className={styles.spotlightRow}><span>Taxes SS?</span><span>No</span></div>
                    <div className={styles.spotlightRow}><span>Property Tax</span><span>0.32%</span></div>
                    <div className={styles.spotlightRow}><span>Min. Savings</span><span>$2,100,000+</span></div>
                    <div className={styles.spotlightRow}><span>Healthcare Rank</span><span>#11 / 50</span></div>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--muted)' }}>
                ⚠️ Note: While Hawaii has the nation's lowest property tax rate (0.32%), its overall cost of living so high the advantage is entirely offset. Assisted living in Hawaii averages $140,000/year vs. under $55,000 in Mississippi. <em>Source: Plootus Research 2026.</em>
              </p>
            </section>

            <section id="faq" aria-label="Frequently Asked Questions">
              <h2>Frequently Asked Questions</h2>
              {[
                {
                  q: "What is the #1 state to retire in 2026?",
                  a: "Wyoming ranks #1 in our 2026 composite scoring with 61.56 out of 100, edging Florida (61.55) by the slimmest margin. Wyoming's zero income tax, 0.53% property tax, and below-average cost of living give it the top financial profile. Florida leads in Quality of Life (#1 nationally) but Wyoming's lower cost pushes it to the top overall."
                },
                {
                  q: "Which states have no income tax for retirees?",
                  a: "Eight states have zero state income tax: Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, and Wyoming. In these states, your 401(k) withdrawals, IRA distributions, and pension income are completely free from state income tax. New Hampshire taxes interest and dividend income above certain thresholds, but not wages, pensions, or retirement account withdrawals."
                },
                {
                  q: "How much financial difference does retirement state make?",
                  a: "The difference is enormous — over $1.3 million in required savings over a 25-year retirement between the most and least expensive states. A retiree pursuing a $60,000/year lifestyle needs approximately $530,000 in savings in Arkansas but over $2.6 million in Hawaii. State selection is often the single largest financial variable in retirement planning."
                },
                {
                  q: "Florida or Texas — which is better for retirement taxes?",
                  a: "Both have zero state income tax and no Social Security tax. The key difference is property taxes: Florida averages 0.83% while Texas averages 1.60–1.80%, among the highest in the nation. For overall tax burden, Florida is generally superior for retirees. However, Texas has no estate tax and more affordable housing in some cities, which may offset the property tax disadvantage."
                }
              ].map((faq, idx) => (
                <div key={idx} className={`${styles.faqItem} ${openFaqIndex === idx ? styles.open : ''}`}>
                  <button className={styles.faqQ} onClick={() => toggleFaq(idx)}>
                    {faq.q} <span className={styles.faqIcon}>+</span>
                  </button>
                  <div className={styles.faqA}>{faq.a}</div>
                </div>
              ))}
            </section>

            <div className={styles.sourcesBox}>
              <h4>Data Sources & Methodology</h4>
              <p>Overall scores: Affordability (30%), Tax Friendliness (30%), Healthcare (20%), Quality of Life (20%).</p>
              <p>Affordability: BLS Consumer Expenditure Survey 2024 (65+ cohort) × MERIC Q3 2025 state cost-of-living index.</p>
              <p>Tax Friendliness: Kiplinger State Tax Guide 2026; SmartAsset 2026; Tax Foundation 2026.</p>
              <p>Healthcare: U.S. News & World Report Best States for Healthcare 2026; WalletHub 2026.</p>
              <p>Min. Savings: (Annual cost − $24,894 avg. SS income) ÷ 0.04. SS figure: SSA Monthly Statistical Snapshot, November 2025.</p>
            </div>
          </main>

          <aside className={styles.sidebar}>
            <div className={`${styles.sidebarCard} ${styles.ctaCard} ${styles.sticky}`}>
              <h4>What's my retirement number?</h4>
              <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
              <div onClick={() => router.push('/retirement-calculator')} className={styles.ctaBtn} style={{cursor: 'pointer'}}>
                Check Here
              </div>
            </div>
            <div className={styles.sidebarCard}>
              <h3>On This Page</h3>
              <ul className={styles.toc}>
                <li><a href="#overview">Why Location Matters</a></li>
                <li><a href="#top5">Top 5 States</a></li>
                <li><a href="#full-rankings">All 50 States Ranked</a></li>
                <li><a href="#cost-chart">Annual Cost by State</a></li>
                <li><a href="#head-to-head">Wyoming vs. Hawaii</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className={styles.sidebarCard}>
              <h3>Key Stats at a Glance</h3>
              <div className={styles.quickStat}><span className={styles.qsNum}>$129K</span><span className={styles.qsLabel}>Annual retirement cost in Hawaii — most expensive state</span></div>
              <div className={styles.quickStat}><span className={styles.qsNum}>$46K</span><span className={styles.qsLabel}>Annual retirement cost in Arkansas — most affordable</span></div>
              <div className={styles.quickStat}><span className={styles.qsNum}>$1.3M+</span><span className={styles.qsLabel}>Required savings gap between cheapest and most expensive state</span></div>
              <div className={styles.quickStat}><span className={styles.qsNum}>8</span><span className={styles.qsLabel}>States with zero state income tax in 2026</span></div>
            </div>
            <div className={styles.sidebarCard}>
              <h3>Related Guides</h3>
              <ul className={styles.toc}>
                <li><div onClick={() => router.push('/cheapest-states-to-retire')} style={{cursor: 'pointer'}}>Cheapest States to Retire 2026</div></li>
                <li><div onClick={() => router.push('/tax-friendly-states')} style={{cursor: 'pointer'}}>Tax-Friendly States Guide</div></li>
                <li><div onClick={() => router.push('/how-much-to-retire')} style={{cursor: 'pointer'}}>How Much Do I Need to Retire?</div></li>
                <li><div onClick={() => router.push('/roth-vs-traditional')} style={{cursor: 'pointer'}}>Roth vs. Traditional IRA</div></li>
                <li><div onClick={() => router.push('/social-security-benefits')} style={{cursor: 'pointer'}}>Social Security Benefits Guide</div></li>
              </ul>
            </div>
          </aside>
        </div>
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

export default BestStatesToRetire;
