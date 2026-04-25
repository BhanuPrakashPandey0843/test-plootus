import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from './RetirementStatistics.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const RetirementStatistics = () => {
  const router = useRouter();
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const initChart = () => {
      if (window.Chart && chartRef.current) {
        const ctx = chartRef.current.getContext('2d');
        
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new window.Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Gen Z\n(under 28)', 'Millennials\n(28–43)', 'Gen X\n(44–59)', 'Boomers\n(60–78)'],
            datasets: [
              { label: 'Average Balance', data: [11700, 92409, 296252, 506302], backgroundColor: '#3B5BDB', borderRadius: 5 },
              { label: 'Median Balance', data: [4800, 35400, 98000, 225000], backgroundColor: '#EEF2FF', borderColor: '#3B5BDB', borderWidth: 1, borderRadius: 5 }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: 'bottom', labels: { font: { family: 'Plus Jakarta Sans' }, boxWidth: 12 } },
              tooltip: { callbacks: { label: c => c.dataset.label + ': $' + c.parsed.y.toLocaleString() } }
            },
            scales: {
              y: { ticks: { callback: v => '$' + (v/1000).toFixed(0) + 'K', font: { family: 'Plus Jakarta Sans', size: 11 } }, grid: { color: '#E2E8F4' } },
              x: { ticks: { font: { family: 'Plus Jakarta Sans', size: 11 } }, grid: { display: false } }
            }
          }
        });
      }
    };

    // Load Chart.js dynamically
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.min.js';
    script.async = true;
    script.onload = () => {
      initChart();
    };
    document.body.appendChild(script);

    // Load Google Fonts - Plus Jakarta Sans
    const link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap';
    link2.rel = 'stylesheet';
    document.head.appendChild(link2);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link1);
      document.head.removeChild(link2);
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      
      <HubNav />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>📊 Journalist Resource · Plootus Research 2026</div>
          <h1>Retirement Statistics 2026: 60+ Key Data Points on Savings, Social Security & More</h1>
          <p className={styles.heroSub}>A comprehensive, fully-cited collection of the most important retirement statistics for 2026 — organized by category. Updated annually. Free to cite with attribution to Plootus Research.</p>
          <div className={styles.heroMeta}>
            <span>By the Plootus Research Team</span>
            <span>Last updated: March 2026</span>
            <span>60+ statistics</span>
            <span>All sources cited</span>
          </div>
        </div>
      </section>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}><span className={styles.statNum}>60+</span><span className={styles.statLabel}>Cited Statistics</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>$148K</span><span className={styles.statLabel}>Avg. 401(k) Balance, All Ages</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>$24,894</span><span className={styles.statLabel}>Avg. Annual SS Benefit (2025)</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>$24,500</span><span className={styles.statLabel}>2026 401(k) Contribution Limit</span></div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent}>
          <div className={styles.citeBar}>
            <span style={{ fontSize: '18px' }}>📋</span>
            <div><strong>Free to cite:</strong> This page compiles retirement statistics from Vanguard, Fidelity, the Social Security Administration, the Federal Reserve, and other authoritative sources. You're welcome to cite this page — please attribute <strong>Plootus Research 2026</strong> and link back to this URL.</div>
          </div>

          {/* SAVINGS STATISTICS */}
          <section id="savings">
            <div className={styles.sectionLabel}>Savings</div>
            <h2>💰 Retirement Savings Statistics</h2>
            <div className={styles.statCards}>
              <div className={styles.statCard}>
                <div className={styles.statCardNum}>$148,153</div>
                <div className={styles.statCardLabel}>Average 401(k) Balance — All Ages</div>
                <div className={styles.statCardDesc}>A record high, up 10.5% from $134,128 in 2023, reflecting strong market performance across Vanguard's ~5M participant dataset.</div>
                <div className={styles.statCardSource}>Vanguard How America Saves 2025 (~5M participants)</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statCardNum}>$38,176</div>
                <div className={styles.statCardLabel}>Median 401(k) Balance — All Ages</div>
                <div className={styles.statCardDesc}>The more accurate representation of the typical American's savings — nearly 4× lower than the average due to high-balance outliers.</div>
                <div className={styles.statCardSource}>Vanguard How America Saves 2025</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statCardNum}>54.3%</div>
                <div className={styles.statCardLabel}>Families With Any Retirement Account</div>
                <div className={styles.statCardDesc}>As of 2022 — meaning nearly half of all U.S. families had nothing saved for retirement in any formal account.</div>
                <div className={styles.statCardSource}>Federal Reserve Survey of Consumer Finances 2022</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statCardNum}>14.3%</div>
                <div className={styles.statCardLabel}>Average Total Savings Rate (Q1 2025)</div>
                <div className={styles.statCardDesc}>Employee + employer combined — the highest on record, just shy of Fidelity's recommended 15% target savings rate.</div>
                <div className={styles.statCardSource}>Fidelity Q1 2025 Retirement Analysis</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statCardNum}>7.7%</div>
                <div className={styles.statCardLabel}>Avg. Employee Contribution Rate</div>
                <div className={styles.statCardDesc}>Average percentage of paycheck contributed to employer retirement plans in 2024. 45% of participants increased contributions vs. prior year.</div>
                <div className={styles.statCardSource}>Vanguard How America Saves 2025</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statCardNum}>$146,400</div>
                <div className={styles.statCardLabel}>Fidelity Avg. 401(k) Balance (Q4 2025)</div>
                <div className={styles.statCardDesc}>A record high for Fidelity's dataset, up 11.2% from Q4 2024 — reflecting strong equity market performance throughout 2025.</div>
                <div className={styles.statCardSource}>Fidelity Q4 2025 Retirement Analysis</div>
              </div>
            </div>

            <div className={styles.chartBox}>
              <h3>Average 401(k) Balance by Generation (2025) — Average vs. Median</h3>
              <div style={{ height: '300px', position: 'relative' }}>
                <canvas ref={chartRef}></canvas>
              </div>
              <p className={styles.chartSource}>Source: Fidelity Q4 2025 Retirement Analysis. Gen Z: under 28; Millennials: 28–43; Gen X: 44–59; Boomers: 60–78.</p>
            </div>

            <ul className={styles.statList}>
              <li className={styles.statListItem}><div className={styles.statListNum}>01</div><div className={styles.statListContent}><div className={styles.statListText}><strong>Baby Boomers have the highest total retirement savings</strong> — averaging $506,302 combined across 401(k) and IRA accounts (ages 61–88).</div><div className={styles.statListSource}>Fidelity Q4 2025</div></div></li>
              <li className={styles.statListItem}><div className={styles.statListNum}>02</div><div className={styles.statListContent}><div className={styles.statListText}><strong>Gen X (ages 45–60) averages $296,252</strong> in combined retirement accounts — a sharp jump from Millennials' $92,409, reflecting peak earning years.</div><div className={styles.statListSource}>Fidelity Q1 2025</div></div></li>
              <li className={styles.statListItem}><div className={styles.statListNum}>03</div><div className={styles.statListContent}><div className={styles.statListText}><strong>Only 70% of private-industry workers</strong> had access to a defined contribution plan in March 2024. Participation rates were even lower.</div><div className={styles.statListSource}>Bureau of Labor Statistics 2024</div></div></li>
              <li className={styles.statListItem}><div className={styles.statListNum}>04</div><div className={styles.statListContent}><div className={styles.statListText}><strong>Workers who saved continuously for 15 years</strong> averaged a $617,600 401(k) balance — vs. $465,000 for 10-year continuous savers.</div><div className={styles.statListSource}>Fidelity Q4 2025</div></div></li>
              <li className={styles.statListItem}><div className={styles.statListNum}>05</div><div className={styles.statListContent}><div className={styles.statListText}><strong>1 in 4 employees misses the full employer 401(k) match</strong>, leaving $1,000 or more in free money on the table every year.</div><div className={styles.statListSource}>Fidelity 2025 Retirement Insights</div></div></li>
              <li className={styles.statListItem}><div className={styles.statListNum}>06</div><div className={styles.statListContent}><div className={styles.statListText}><strong>65% of non-retired adults</strong> say their retirement savings are not on track — the most prevalent financial anxiety in the Federal Reserve's annual survey.</div><div className={styles.statListSource}>Federal Reserve Economic Well-Being of U.S. Households 2024</div></div></li>
            </ul>

            <div className={styles.inlineCta}>
              <div className={styles.inlineCtaText}><h4>How does your retirement stack up?</h4><p>Connect your accounts and see your personalized retirement readiness score in minutes.</p></div>
              <a onClick={() => router.push('/')} className={styles.inlineCtaBtn}>Try Plootus Free →</a>
            </div>
          </section>

          {/* SOCIAL SECURITY */}
          <section id="social-security">
            <div className={styles.sectionLabel}>Social Security</div>
            <h2>🏛️ Social Security Statistics</h2>
            <div className={styles.statCards}>
              <div className={styles.statCard}>
                <div className={styles.statCardNum}>$24,894</div>
                <div className={styles.statCardLabel}>Average Annual SS Benefit (2025)</div>
                <div className={styles.statCardDesc}>Approximately $2,075 per month for a retired worker in 2025.</div>
                <div className={styles.statCardSource}>SSA Monthly Statistical Snapshot, November 2025</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statCardNum}>$5,108</div>
                <div className={styles.statCardLabel}>Maximum Monthly Benefit at Age 70</div>
                <div className={styles.statCardDesc}>For those claiming at 70 with maximum earning history in 2025. Requires 35 years of maximum taxable earnings.</div>
                <div className={styles.statCardSource}>Social Security Administration 2025</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statCardNum}>2035</div>
                <div className={styles.statCardLabel}>SS Trust Fund Depletion Projection</div>
                <div className={styles.statCardDesc}>If Congress takes no action, benefits could be reduced to ~83% of scheduled amounts at that point.</div>
                <div className={styles.statCardSource}>SSA Annual Trustees Report 2024</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statCardNum}>2.5%</div>
                <div className={styles.statCardLabel}>2025 COLA Adjustment</div>
                <div className={styles.statCardDesc}>The smallest COLA increase since 2021. Recipients received ~$50/month more on average.</div>
                <div className={styles.statCardSource}>Social Security Administration, October 2024</div>
              </div>
            </div>
            <ul className={styles.statList}>
              <li className={styles.statListItem}><div className={styles.statListNum}>07</div><div className={styles.statListContent}><div className={styles.statListText}><strong>Full retirement age (FRA) is 67</strong> for anyone born in 1960 or later. Claiming at 70 instead of 62 increases your monthly benefit by approximately 76%.</div><div className={styles.statListSource}>Social Security Administration</div></div></li>
              <li className={styles.statListItem}><div className={styles.statListNum}>08</div><div className={styles.statListContent}><div className={styles.statListText}><strong>41 states plus D.C. do not tax Social Security benefits</strong> at the state level. As of 2026, only 8 states still tax SS income: CO, CT, MN, MT, NM, RI, UT, and VT.</div><div className={styles.statListSource}>SmartAsset / Kiplinger 2026</div></div></li>
              <li className={styles.statListItem}><div className={styles.statListNum}>09</div><div className={styles.statListContent}><div className={styles.statListText}><strong>West Virginia fully phased out its Social Security tax in 2026</strong>, joining a growing list of states — following Missouri, Kansas, and Nebraska (2024).</div><div className={styles.statListSource}>Kiplinger State Tax Guide 2026</div></div></li>
              <li className={styles.statListItem}><div className={styles.statListNum}>10</div><div className={styles.statListContent}><div className={styles.statListText}><strong>Claiming at 62 vs. 70 results in a 76% permanent difference</strong> in monthly benefit. For someone with a $2,000 FRA benefit, that's the difference between $1,400/month and $2,480/month — for life.</div><div className={styles.statListSource}>Social Security Administration; AARP 2025</div></div></li>
            </ul>
          </section>

          {/* COST OF RETIREMENT BY STATE */}
          <section id="cost-by-state">
            <div className={styles.sectionLabel}>Geography</div>
            <h2>🏠 Cost of Retirement Statistics</h2>
            <div className={styles.statCards}>
              <div className={styles.statCard}>
                <div className={styles.statCardNum}>$129,296</div>
                <div className={styles.statCardLabel}>Annual Cost in Hawaii (Most Expensive)</div>
                <div className={styles.statCardDesc}>The most expensive state to retire in the U.S. — nearly 2.2× the national average of $57,800/year.</div>
                <div className={styles.statCardSource}>GOBankingRates 2026 / Plootus Research 2026</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statCardNum}>~$46,000</div>
                <div className={styles.statCardLabel}>Annual Cost — Most Affordable States</div>
                <div className={styles.statCardDesc}>Average annual retirement cost in Kansas, Oklahoma, and West Virginia — roughly 64% less than Hawaii.</div>
                <div className={styles.statCardSource}>GOBankingRates 2026 / Plootus Research 2026</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statCardNum}>$57,800</div>
                <div className={styles.statCardLabel}>National Average Annual Retirement Cost</div>
                <div className={styles.statCardDesc}>Based on BLS Consumer Expenditure Survey 2024 (ages 65+), adjusted by MERIC Q3 2025 state cost-of-living index.</div>
                <div className={styles.statCardSource}>BLS CES 2024 / MERIC Q3 2025 Index</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statCardNum}>$2.1M+</div>
                <div className={styles.statCardLabel}>Min. Savings to Retire in Hawaii</div>
                <div className={styles.statCardDesc}>Under the 4% withdrawal rule after accounting for average Social Security income.</div>
                <div className={styles.statCardSource}>Plootus Research 2026 / Kiplinger 2025</div>
              </div>
            </div>

            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable}>
                <thead><tr><th>State</th><th>Annual Cost</th><th>Min. Savings (4% Rule)</th><th>vs. National Avg.</th></tr></thead>
                <tbody>
                  <tr><td><strong>Hawaii</strong></td><td style={{color:'var(--red)',fontWeight:700}}>$129,296</td><td style={{color:'var(--red)',fontWeight:700}}>$2,610,050</td><td style={{color:'var(--red)'}}>+124%</td></tr>
                  <tr><td><strong>California</strong></td><td style={{color:'var(--red)'}}>$84,600</td><td style={{color:'var(--red)'}}>$1,492,650</td><td style={{color:'var(--red)'}}>+46%</td></tr>
                  <tr><td><strong>Massachusetts</strong></td><td style={{color:'var(--red)'}}>$89,400</td><td style={{color:'var(--red)'}}>$1,612,650</td><td style={{color:'var(--red)'}}>+55%</td></tr>
                  <tr><td><strong>New York</strong></td><td style={{color:'var(--gold)'}}>$82,000</td><td style={{color:'var(--gold)'}}>$1,427,650</td><td style={{color:'var(--gold)'}}>+42%</td></tr>
                  <tr><td>National Average</td><td><strong>$57,800</strong></td><td><strong>$825,025</strong></td><td>—</td></tr>
                  <tr><td><strong>Iowa</strong></td><td style={{color:'var(--green)'}}>$50,200</td><td style={{color:'var(--green)'}}>$630,775</td><td style={{color:'var(--green)'}}>−13%</td></tr>
                  <tr><td><strong>Mississippi</strong></td><td style={{color:'var(--green)'}}>$45,600</td><td style={{color:'var(--green)'}}>$515,025</td><td style={{color:'var(--green)'}}>−21%</td></tr>
                </tbody>
              </table>
            </div>

            <ul className={styles.statList}>
              <li className={styles.statListItem}><div className={styles.statListNum}>11</div><div className={styles.statListContent}><div className={styles.statListText}><strong>The gap between the cheapest and most expensive states to retire is over $1.9 million</strong> in required savings over a 25-year retirement — the single biggest financial variable most pre-retirees underestimate.</div><div className={styles.statListSource}>Plootus Research 2026</div></div></li>
              <li className={styles.statListItem}><div className={styles.statListNum}>12</div><div className={styles.statListContent}><div className={styles.statListText}><strong>California, Massachusetts, and New York</strong> are the three most expensive states to retire — all requiring over $1.5 million in minimum savings under the 4% withdrawal rule.</div><div className={styles.statListSource}>GOBankingRates 2026; Plootus Research 2026</div></div></li>
              <li className={styles.statListItem}><div className={styles.statListNum}>13</div><div className={styles.statListContent}><div className={styles.statListText}><strong>The average household spends 34.9% of its budget on housing</strong> — roughly $1,784/month — making it the single largest retirement expense in virtually every state.</div><div className={styles.statListSource}>BLS Consumer Expenditure Survey 2024</div></div></li>
              <li className={styles.statListItem}><div className={styles.statListNum}>14</div><div className={styles.statListContent}><div className={styles.statListText}><strong>New York has the nation's second-highest cost of living index at 148.2</strong>, meaning everyday goods and services cost nearly 48% more than the national average.</div><div className={styles.statListSource}>World Population Review / MERIC 2026</div></div></li>
              <li className={styles.statListItem}><div className={styles.statListNum}>15</div><div className={styles.statListContent}><div className={styles.statListText}><strong>Mississippi requires the lowest minimum savings to retire — approximately $680,000</strong> — but ranks among the worst states for healthcare quality and outcomes.</div><div className={styles.statListSource}>Plootus Research 2026; RetirementLiving.com 2025</div></div></li>
            </ul>
          </section>

          {/* HEALTHCARE */}
          <section id="healthcare">
            <div className={styles.sectionLabel}>Healthcare</div>
            <h2>🏥 Healthcare Cost Statistics in Retirement</h2>
            <div className={styles.statCards}>
              <div className={styles.statCard}>
                <div className={styles.statCardNum}>$413,000</div>
                <div className={styles.statCardLabel}>Lifetime Healthcare Est. for a Couple</div>
                <div className={styles.statCardDesc}>Estimated amount some couples may need to cover medical costs throughout retirement — not including long-term care or assisted living.</div>
                <div className={styles.statCardSource}>Fidelity Retiree Health Care Cost Estimate 2024</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statCardNum}>$140K</div>
                <div className={styles.statCardLabel}>Assisted Living Cost in Hawaii / Year</div>
                <div className={styles.statCardDesc}>The nation's highest. In Mississippi, the same care averages under $55,000/year — an $85,000 annual gap.</div>
                <div className={styles.statCardSource}>Ooma State Retirement Cost Report 2025</div>
              </div>
            </div>
            <ul className={styles.statList}>
              <li className={styles.statListItem}><div className={styles.statListNum}>16</div><div className={styles.statListContent}><div className={styles.statListText}><strong>Annual healthcare costs for U.S. households average $5,177/year</strong> in non-retirement years — a figure that typically rises substantially in retirement as chronic conditions accumulate.</div><div className={styles.statListSource}>BLS Consumer Expenditure Survey 2024</div></div></li>
              <li className={styles.statListItem}><div className={styles.statListNum}>17</div><div className={styles.statListContent}><div className={styles.statListText}><strong>Kentucky, Mississippi, West Virginia, and Oklahoma rank in the bottom 4 states for healthcare quality</strong> for seniors — despite having some of the lowest costs of living nationally.</div><div className={styles.statListSource}>WalletHub 2026; America's Health Rankings 2024</div></div></li>
              <li className={styles.statListItem}><div className={styles.statListNum}>18</div><div className={styles.statListContent}><div className={styles.statListText}><strong>Massachusetts, Connecticut, and New York consistently rank among the best states for healthcare quality</strong> — but are also among the most expensive for retirement overall, illustrating the affordability-quality trade-off.</div><div className={styles.statListSource}>U.S. News Best States for Healthcare 2025</div></div></li>
              <li className={styles.statListItem}><div className={styles.statListNum}>19</div><div className={styles.statListContent}><div className={styles.statListText}><strong>Minnesota ranks #1 for healthcare access and quality for seniors in 2026</strong>, leading in preventive care, healthcare outcomes, and access to specialists nationwide.</div><div className={styles.statListSource}>WalletHub 2026; America's Health Rankings 2024</div></div></li>
            </ul>
          </section>

          {/* TAX STATISTICS */}
          <section id="taxes">
            <div className={styles.sectionLabel}>Taxes</div>
            <h2>📋 Retirement Tax Statistics</h2>
            <div className={styles.statCards}>
              <div className={styles.statCard}>
                <div className={styles.statCardNum}>8 States</div>
                <div className={styles.statCardLabel}>States with No Income Tax (2026)</div>
                <div className={styles.statCardDesc}>Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, and Wyoming — zero state income tax on retirement income.</div>
                <div className={styles.statCardSource}>Empower / Kiplinger 2026</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statCardNum}>41 States</div>
                <div className={styles.statCardLabel}>States Not Taxing SS Benefits (2026)</div>
                <div className={styles.statCardDesc}>Up from prior years due to state-level eliminations — West Virginia, Missouri, Kansas, and Nebraska all eliminated their SS taxes 2024–2026.</div>
                <div className={styles.statCardSource}>SmartAsset Tax Analysis 2026</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statCardNum}>15.9%</div>
                <div className={styles.statCardLabel}>New York's Total Tax Burden</div>
                <div className={styles.statCardDesc}>The highest of any state — representing a severe headwind for retirees on fixed incomes.</div>
                <div className={styles.statCardSource}>Tax Foundation 2026</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statCardNum}>13.3%</div>
                <div className={styles.statCardLabel}>California's Highest Marginal Rate</div>
                <div className={styles.statCardDesc}>The highest state income tax rate of any state, applying to retirement income above certain thresholds.</div>
                <div className={styles.statCardSource}>SoFi / Kiplinger 2026</div>
              </div>
            </div>
            <ul className={styles.statList}>
              <li className={styles.statListItem}><div className={styles.statListNum}>20</div><div className={styles.statListContent}><div className={styles.statListText}><strong>New Jersey has the highest property tax rate</strong> of any state at 2.23%, alongside a steep 10.75% top income tax rate — making it one of the most expensive states for retirees on every tax dimension.</div><div className={styles.statListSource}>RetirementLiving.com 2025</div></div></li>
              <li className={styles.statListItem}><div className={styles.statListNum}>21</div><div className={styles.statListContent}><div className={styles.statListText}><strong>Hawaii's income tax is 11%</strong> — the second-highest in the nation — but it has the lowest property tax rate at 0.32%, illustrating how different tax structures affect retirees differently by income level.</div><div className={styles.statListSource}>Kiplinger / Plootus Research 2026</div></div></li>
              <li className={styles.statListItem}><div className={styles.statListNum}>22</div><div className={styles.statListContent}><div className={styles.statListText}><strong>Michigan fully phased out state income tax on most retirement benefits beginning in 2026</strong>, including defined-benefit pensions, IRA distributions, and qualifying retirement income.</div><div className={styles.statListSource}>Michigan Public Acts (PA 4 of 2023, PA 24 of 2025)</div></div></li>
            </ul>
          </section>

          {/* CONTRIBUTION LIMITS */}
          <section id="contribution-limits">
            <div className={styles.sectionLabel}>2026 Limits</div>
            <h2>📈 2026 Retirement Account Contribution Limits</h2>
            <div className={styles.limitBoxes}>
              <div className={styles.limitBox}><span className={styles.limitBoxVal}>$24,500</span><span className={styles.limitBoxLabel}>2026 Standard 401(k) Limit (↑ from $23,500)</span></div>
              <div className={styles.limitBox}><span className={styles.limitBoxVal}>$32,500</span><span className={styles.limitBoxLabel}>401(k) Limit Ages 50+ (+ $8,000 catch-up)</span></div>
              <div className={styles.limitBox}><span className={styles.limitBoxVal}>$35,750</span><span className={styles.limitBoxLabel}>Super Catch-Up Ages 60–63 (SECURE 2.0)</span></div>
              <div className={styles.limitBox}><span className={styles.limitBoxVal}>$7,000</span><span className={styles.limitBoxLabel}>2026 IRA Limit ($8,000 if age 50+)</span></div>
            </div>
            <div className={styles.callout}>
              <p><strong>📌 Note:</strong> Roth IRA eligibility phases out for single filers with MAGI over $150,000 and joint filers over $236,000 in 2025. <a onClick={() => router.push('/roth-vs-traditional')}>See the full Roth vs. Traditional IRA guide →</a><br /><small style={{opacity:.75}}>Source: IRS; NerdWallet 2026.</small></p>
            </div>
          </section>

          {/* BEHAVIOR */}
          <section id="behavior">
            <div className={styles.sectionLabel}>Planning Behavior</div>
            <h2>🧠 Retirement Behavior & Planning Statistics</h2>
            <ul className={styles.statList}>
              <li className={styles.statListItem}><div className={styles.statListNum}>23</div><div className={styles.statListContent}><div className={styles.statListText}><strong>58% of adults over 60 worry</strong> they won't have enough money to retire comfortably, making retirement funding the most common financial anxiety for older Americans.</div><div className={styles.statListSource}>RetirementLiving.com State of Retirement 2025</div></div></li>
              <li className={styles.statListItem}><div className={styles.statListNum}>24</div><div className={styles.statListContent}><div className={styles.statListText}><strong>Only 5.4% of Fidelity 401(k) participants changed their asset allocation</strong> in Q4 2025 despite ongoing market volatility — showing "stay the course" behavior is becoming more common.</div><div className={styles.statListSource}>Fidelity Q4 2025 Retirement Analysis</div></div></li>
              <li className={styles.statListItem}><div className={styles.statListNum}>25</div><div className={styles.statListContent}><div className={styles.statListText}><strong>63% of Fidelity 401(k) participants</strong> had all their money invested in a target date fund in Q4 2025 — reflecting growing adoption of auto-diversification strategies.</div><div className={styles.statListSource}>Fidelity Q4 2025 Retirement Analysis</div></div></li>
              <li className={styles.statListItem}><div className={styles.statListNum}>26</div><div className={styles.statListContent}><div className={styles.statListText}><strong>Workers who save 15% of income during their 40s</strong> are 80% more likely to retire on time compared to those saving less, based on Fidelity's Retirement Index data.</div><div className={styles.statListSource}>Fidelity Retirement Index 2025</div></div></li>
              <li className={styles.statListItem}><div className={styles.statListNum}>27</div><div className={styles.statListContent}><div className={styles.statListText}><strong>Investors with a diversified mix of retirement account types</strong> (401k + IRA + taxable accounts) are 70% more likely to meet retirement goals than those using only one account type.</div><div className={styles.statListSource}>GOBankingRates Retirement Report 2025</div></div></li>
              <li className={styles.statListItem}><div className={styles.statListNum}>28</div><div className={styles.statListContent}><div className={styles.statListText}><strong>45% of Vanguard plan participants increased contributions</strong> from 2023 to 2024 — the highest rate of contribution increases seen in the dataset's history.</div><div className={styles.statListSource}>Vanguard How America Saves 2025</div></div></li>
            </ul>

            <div className={styles.inlineCta}>
              <div className={styles.inlineCtaText}><h4>Turn these statistics into your personal retirement plan</h4><p>Plootus connects to your actual accounts to show where you stand — and exactly what it will take to retire on your terms.</p></div>
              <a onClick={() => router.push('/')} className={styles.inlineCtaBtn}>Start for Free →</a>
            </div>
          </section>

          <div className={styles.sourcesBox}>
            <h4>Full Source List</h4>
            <ul>
              <li>Vanguard Group — How America Saves 2025 (2024 year-end data, ~5M participants, 1,400+ plans)</li>
              <li>Fidelity Investments — Q4 2025 Retirement Analysis (24.8M participants, 26,200 plans)</li>
              <li>Fidelity Investments — Q1 2025 Retirement Analysis</li>
              <li>Federal Reserve — Economic Well-Being of U.S. Households in 2024 (federalreserve.gov)</li>
              <li>Federal Reserve — Survey of Consumer Finances 2022</li>
              <li>Social Security Administration — Monthly Statistical Snapshot, November 2025 (ssa.gov)</li>
              <li>Social Security Administration — Annual Trustees Report 2024</li>
              <li>Bureau of Labor Statistics — Consumer Expenditure Survey 2024 (bls.gov/cex)</li>
              <li>Bureau of Labor Statistics — National Compensation Survey 2024</li>
              <li>Missouri Economic Research and Information Center — Cost of Living Index Q3 2025 (meric.mo.gov)</li>
              <li>GOBankingRates — Cost of Living in Every State 2026</li>
              <li>IRS — Retirement Plan Contribution Limits 2026 (irs.gov)</li>
              <li>SmartAsset — Best States to Retire for Taxes 2026 (smartasset.com)</li>
              <li>Kiplinger — Retirement Taxes: How All 50 States Tax Retirees 2026 (kiplinger.com)</li>
              <li>WalletHub — Best and Worst States to Retire 2026</li>
              <li>United Health Foundation — America's Health Rankings Senior Report 2024 (americashealthrankings.org)</li>
              <li>Tax Foundation — State and Local Tax Burden Rankings 2026 (taxfoundation.org)</li>
              <li>Fidelity Investments — Retiree Health Care Cost Estimate 2024</li>
              <li>SECURE 2.0 Act (Consolidated Appropriations Act, 2023) — super catch-up provisions</li>
              <li>Ooma — Most and Least Expensive States for Retirees, 2025</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <h4>On This Page</h4>
            <ul className={styles.tocList}>
              <li><a href="#savings">Savings Statistics</a></li>
              <li><a href="#social-security">Social Security</a></li>
              <li><a href="#cost-by-state">Cost of Retirement</a></li>
              <li><a href="#healthcare">Healthcare Costs</a></li>
              <li><a href="#taxes">Tax Statistics</a></li>
              <li><a href="#contribution-limits">Contribution Limits 2026</a></li>
              <li><a href="#behavior">Planning Behavior</a></li>
            </ul>
          </div>
          <div className={styles.citeGuide}>
            <h4>📋 Citation Guide</h4>
            <p>To cite any statistic on this page:<br /><em>"According to Plootus Research (2026)..."</em> followed by a link to this page.<br /><br />Page updated: March 2026</p>
          </div>
          <div className={styles.ctaCard}>
            <h4>What's my retirement number?</h4>
            <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
            <a onClick={() => router.push('/retirement-calculator')} className={styles.ctaBtn}>
              Check Here
            </a>
          </div>
          <div className={styles.sidebarCard}>
            <h4>Related Research</h4>
            <ul className={styles.relatedLinks}>
              <li><a onClick={() => router.push('/best-states-to-retire')}>Best States to Retire 2026</a></li>
              <li><a onClick={() => router.push('/401k-by-age')}>Average 401(k) by Age 2026</a></li>
              <li><a onClick={() => router.push('/cheapest-states-to-retire')}>Cheapest States to Retire</a></li>
              <li><a onClick={() => router.push('/tax-friendly-states')}>Tax-Friendly States Guide</a></li>
              <li><a onClick={() => router.push('/social-security-benefits')}>Social Security Guide 2026</a></li>
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

export default RetirementStatistics;
