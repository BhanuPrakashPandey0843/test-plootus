import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from './RetireEarly.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const RetireEarly = () => {
  const router = useRouter();
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
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

    const initChart = () => {
      if (window.Chart && chartRef.current) {
        const ctx = chartRef.current.getContext('2d');
        const ages = Array.from({ length: 26 }, (_, i) => 30 + i);
        let balance = 0;
        const vals = ages.map(() => {
          balance = balance * 1.07 + 40000;
          return Math.round(balance);
        });
        const target = Array(26).fill(1143000);

        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new window.Chart(ctx, {
          type: 'line',
          data: {
            labels: ages,
            datasets: [
              {
                label: 'Portfolio Value',
                data: vals,
                borderColor: 'rgba(232, 89, 12, 1)',
                backgroundColor: 'rgba(232, 89, 12, .08)',
                borderWidth: 3,
                pointRadius: 0,
                fill: true,
                tension: 0.3,
              },
              {
                label: 'FIRE Target ($1.14M)',
                data: target,
                borderColor: 'rgba(245, 159, 0, 1)',
                borderWidth: 2,
                pointRadius: 0,
                fill: false,
                borderDash: [6, 4],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  font: { family: "'Plus Jakarta Sans', sans-serif", size: 12 },
                  boxRadius: 4,
                },
              },
              tooltip: {
                callbacks: {
                  label: (c) => '$' + c.raw.toLocaleString(),
                },
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Age',
                  font: { family: "'Plus Jakarta Sans', sans-serif", size: 12 },
                },
                ticks: { font: { size: 11, family: "'Plus Jakarta Sans', sans-serif" } },
                grid: { display: false },
              },
              y: {
                ticks: {
                  callback: (v) => '$' + (v / 1000000).toFixed(1) + 'M',
                  font: { size: 11, family: "'Plus Jakarta Sans', sans-serif" },
                },
                grid: { color: 'rgba(0,0,0,0.04)' },
              },
            },
          },
        });
      }
    };

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
      if (document.head.contains(link1)) document.head.removeChild(link1);
      if (document.head.contains(link2)) document.head.removeChild(link2);
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <HubNav />

      <section className={styles.hero}>
        <div className={styles.heroBg}>FIRE</div>
        <div className={styles.heroInner}>
          <div>
            <div className={styles.heroTag}>🔥 Plootus Guide · 2026 Edition</div>
            <h1>
              How to Retire <em>Early</em>: The Complete FIRE Guide
            </h1>
            <p className={styles.heroSub}>
              Financial Independence, Retire Early isn't just a dream — it's a math problem. Here's how to solve it: calculate your FIRE number, choose your strategy, bridge the healthcare gap, and build the plan that gets you out years ahead of schedule.
            </p>
            <div className={styles.heroMeta}>
              <span>Plootus Research Team</span>
              <span>Updated March 2026</span>
              <span>25 min read</span>
            </div>
          </div>
          <div className={styles.fireCard}>
            <div className={styles.fcLabel}>FIRE Number Quick Reference</div>
            <div className={styles.fcRow}>
              <span>Retire at 45 (affordable state)</span>
              <span className={styles.fcVal}>~$1.0M</span>
            </div>
            <div className={styles.fcRow}>
              <span>Retire at 50 (avg. state)</span>
              <span className={styles.fcVal}>~$1.65M</span>
            </div>
            <div className={styles.fcRow}>
              <span>Retire at 50 (expensive state)</span>
              <span className={styles.fcVal}>~$2.5M+</span>
            </div>
            <div className={styles.fcRow}>
              <span>Retire at 55 (avg. state)</span>
              <span className={styles.fcVal}>~$1.45M</span>
            </div>
            <div className={styles.fcRow}>
              <span>Savings rate needed (30→50)</span>
              <span className={styles.fcVal}>40–50%</span>
            </div>
            <div className={styles.fcRow}>
              <span>Safe withdrawal rate (early)</span>
              <span className={styles.fcVal}>3.5%</span>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>3.5%</span>
            <span className={styles.statLabel}>Safe Withdrawal Rate for Early Retirees</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>$1.65M</span>
            <span className={styles.statLabel}>Avg. Needed to Retire at 50 (Avg. State)</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>~$24K</span>
            <span className={styles.statLabel}>Est. Annual Healthcare Cost Before Medicare (Age 55)</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>50%+</span>
            <span className={styles.statLabel}>Savings Rate to Retire 15 Years Early</span>
          </div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent}>
          <section id="what-is-fire">
            <div className={styles.sectionLabel}>The Foundation</div>
            <h2>What Is FIRE — and Is It Actually Achievable?</h2>
            <p>
              FIRE stands for <strong>Financial Independence, Retire Early</strong>. The movement is built on a deceptively simple idea: if you save and invest enough that your portfolio generates more income than you spend, you no longer need to work. You've achieved financial independence.
            </p>
            <p>
              The math comes from the "Trinity Study" — a 1998 academic analysis showing a diversified portfolio could sustain a 4% annual withdrawal rate for at least 30 years. Early retirees typically use a more conservative <strong>3.5% withdrawal rate</strong> to account for 40–50 year retirement horizons (Bengen, 1994; Cooley et al., 1998).
            </p>
            <div className={`${styles.callout} ${styles.gold}`}>
              <p>
                🔥 <strong>The FIRE Formula:</strong> Annual spending ÷ 0.035 = Your FIRE number. If you spend $50,000/year, you need $1,428,571 invested. Note: early retirees cannot count on Social Security until age 62 at earliest — your portfolio must cover all expenses in the gap. <em>Source: Plootus Research 2026; Bengen (1994); Trinity Study (1998).</em>
              </p>
            </div>
          </section>

          <section id="fire-types">
            <div className={styles.sectionLabel}>The 5 FIRE Strategies</div>
            <h2>Which Type of FIRE Is Right for You?</h2>
            <p>FIRE isn't one-size-fits-all. The movement has evolved into distinct strategies — each with different savings targets, lifestyle implications, and timelines:</p>
            <div className={styles.fireTypes}>
              <div className={`${styles.ftCard} ${styles.lean}`}>
                <span className={styles.ftEmoji}>🌱</span>
                <div className={styles.ftName}>Lean FIRE</div>
                <div className={styles.ftDesc}>Retire on a minimal budget — typically $25,000–$40,000/year. Requires frugality and often geographic arbitrage.</div>
                <div className={styles.ftTarget} style={{ color: 'var(--green)' }}>
                  Target: $700K–$1.1M
                </div>
              </div>
              <div className={`${styles.ftCard} ${styles.regular}`}>
                <span className={styles.ftEmoji}>🔥</span>
                <div className={styles.ftName}>FIRE (Standard)</div>
                <div className={styles.ftDesc}>Retire comfortably on $50,000–$80,000/year. Frugal but not extreme. Most common among FIRE practitioners.</div>
                <div className={styles.ftTarget} style={{ color: 'var(--orange)' }}>
                  Target: $1.4M–$2.3M
                </div>
              </div>
              <div className={`${styles.ftCard} ${styles.fat}`}>
                <span className={styles.ftEmoji}>🏖️</span>
                <div className={styles.ftName}>Fat FIRE</div>
                <div className={styles.ftDesc}>Retire with a generous budget — $100,000+/year. Common among high earners in tech, finance, and medicine.</div>
                <div className={styles.ftTarget} style={{ color: 'var(--gold)' }}>
                  Target: $2.5M–$4M+
                </div>
              </div>
              <div className={`${styles.ftCard} ${styles.barista}`}>
                <span className={styles.ftEmoji}>☕</span>
                <div className={styles.ftName}>Barista FIRE</div>
                <div className={styles.ftDesc}>Semi-retire with part-time work covering day-to-day expenses, while investments cover the rest. Reduces required nest egg significantly.</div>
                <div className={styles.ftTarget} style={{ color: 'var(--blue)' }}>
                  Target: $500K–$1M + part-time
                </div>
              </div>
              <div className={`${styles.ftCard} ${styles.coast}`}>
                <span className={styles.ftEmoji}>🌊</span>
                <div className={styles.ftName}>Coast FIRE</div>
                <div className={styles.ftDesc}>Save aggressively early, then stop — letting compounding do the rest. Keep working, but knowing retirement is already funded.</div>
                <div className={styles.ftTarget} style={{ color: '#7950F2' }}>
                  Target: Varies by age/timeline
                </div>
              </div>
            </div>
          </section>

          <section id="savings-rate">
            <div className={styles.sectionLabel}>The Savings Rate Is Everything</div>
            <h2>How Your Savings Rate Determines When You Can Retire</h2>
            <p>The most powerful variable in your early retirement timeline isn't investment returns — it's your savings rate. Doubling your savings rate doesn't just double what you save; it also shrinks your required FIRE number by reducing your spending level.</p>
            <div className={styles.srWrap}>
              <div className={styles.srHead}>
                <div>Savings Rate</div>
                <div></div>
                <div>Years to Retire*</div>
              </div>
              <div className={styles.srRow}>
                <div className={styles.srRate}>10%</div>
                <div>
                  <div className={styles.srBarWrap}>
                    <div className={styles.srBar} style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className={styles.srRetire}>~43 years</div>
              </div>
              <div className={styles.srRow}>
                <div className={styles.srRate}>20%</div>
                <div>
                  <div className={styles.srBarWrap}>
                    <div className={styles.srBar} style={{ width: '72%' }}></div>
                  </div>
                </div>
                <div className={styles.srRetire}>~37 years</div>
              </div>
              <div className={styles.srRow}>
                <div className={styles.srRate}>30%</div>
                <div>
                  <div className={styles.srBarWrap}>
                    <div className={styles.srBar} style={{ width: '55%' }}></div>
                  </div>
                </div>
                <div className={styles.srRetire}>~28 years</div>
              </div>
              <div className={styles.srRow}>
                <div className={styles.srRate}>40%</div>
                <div>
                  <div className={styles.srBarWrap}>
                    <div className={styles.srBar} style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div className={styles.srRetire}>~22 years</div>
              </div>
              <div className={styles.srRow}>
                <div className={styles.srRate}>50%</div>
                <div>
                  <div className={styles.srBarWrap}>
                    <div className={styles.srBar} style={{ width: '28%' }}></div>
                  </div>
                </div>
                <div className={styles.srRetire}>~17 years</div>
              </div>
              <div className={styles.srRow}>
                <div className={styles.srRate}>60%</div>
                <div>
                  <div className={styles.srBarWrap}>
                    <div className={styles.srBar} style={{ width: '18%' }}></div>
                  </div>
                </div>
                <div className={styles.srRetire}>~12.5 years</div>
              </div>
              <div className={styles.srRow}>
                <div className={styles.srRate}>70%</div>
                <div>
                  <div className={styles.srBarWrap}>
                    <div className={styles.srBar} style={{ width: '10%' }}></div>
                  </div>
                </div>
                <div className={styles.srRetire}>~8.5 years</div>
              </div>
            </div>
            <p style={{ fontSize: '11px', color: 'var(--text-light)', fontStyle: 'italic' }}>*Assumes 7% average annual return, starting from $0. Uses 4% withdrawal rate at retirement. Source: Mr. Money Mustache savings rate analysis; Plootus Research 2026.</p>
          </section>

          <section id="by-state">
            <div className={styles.sectionLabel}>FIRE Number by State & Age</div>
            <h2>How Much You Need to Retire Early — By State</h2>
            <p>State cost of living dramatically changes your FIRE target. The same early retirement lifestyle costs 3× more in Hawaii than in Mississippi. The figures below estimate savings to retire at various ages by state, using the 3.5% withdrawal rate with no Social Security until age 62:</p>
            <div className={styles.tblWrap}>
              <table className={`${styles.dataTable} ${styles.leftAlignFirst}`} summary="Data table — sortable columns">
                <thead>
                  <tr>
                    <th scope="col">State</th>
                    <th scope="col">Annual Cost (Comfortable)</th>
                    <th scope="col">FIRE at 45</th>
                    <th scope="col">FIRE at 50</th>
                    <th scope="col">FIRE at 55</th>
                    <th scope="col">Note</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mississippi</td>
                    <td>~$45,600</td>
                    <td>~$1.30M</td>
                    <td>~$1.30M</td>
                    <td>~$1.13M</td>
                    <td style={{ color: 'var(--green)', fontWeight: 700 }}>Save $1.7M+ vs. Hawaii</td>
                  </tr>
                  <tr>
                    <td>Tennessee</td>
                    <td>~$49,200</td>
                    <td>~$1.41M</td>
                    <td>~$1.41M</td>
                    <td>~$1.21M</td>
                    <td style={{ color: 'var(--green)', fontWeight: 700 }}>No state income tax</td>
                  </tr>
                  <tr>
                    <td>Iowa</td>
                    <td>~$50,200</td>
                    <td>~$1.43M</td>
                    <td>~$1.43M</td>
                    <td>~$1.23M</td>
                    <td>—</td>
                  </tr>
                  <tr>
                    <td>North Carolina</td>
                    <td>~$51,200</td>
                    <td>~$1.46M</td>
                    <td>~$1.46M</td>
                    <td>~$1.26M</td>
                    <td>—</td>
                  </tr>
                  <tr>
                    <td>Florida</td>
                    <td>~$57,000</td>
                    <td>~$1.63M</td>
                    <td>~$1.63M</td>
                    <td>~$1.43M</td>
                    <td>No income tax</td>
                  </tr>
                  <tr>
                    <td>National Average</td>
                    <td>~$57,800</td>
                    <td>~$1.65M</td>
                    <td>~$1.65M</td>
                    <td>~$1.45M</td>
                    <td>—</td>
                  </tr>
                  <tr>
                    <td>Colorado</td>
                    <td>~$71,000</td>
                    <td>~$2.03M</td>
                    <td>~$2.03M</td>
                    <td>~$1.75M</td>
                    <td>—</td>
                  </tr>
                  <tr>
                    <td>California</td>
                    <td>~$84,600</td>
                    <td>~$2.42M</td>
                    <td>~$2.42M</td>
                    <td>~$2.09M</td>
                    <td>—</td>
                  </tr>
                  <tr>
                    <td>New York</td>
                    <td>~$82,000</td>
                    <td>~$2.34M</td>
                    <td>~$2.34M</td>
                    <td>~$2.03M</td>
                    <td>—</td>
                  </tr>
                  <tr>
                    <td>Hawaii</td>
                    <td>~$129,296</td>
                    <td>~$3.69M</td>
                    <td>~$3.69M</td>
                    <td>~$3.20M</td>
                    <td style={{ color: 'var(--red)', fontWeight: 700 }}>Most expensive by far</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '11px', color: 'var(--text-light)' }}>
              Uses 3.5% safe withdrawal rate (28.57× annual expenses) — more conservative than the 4% rule due to longer early retirement horizons. Excludes Social Security (unavailable before 62). Annual costs: BLS Consumer Expenditure Survey 2024 × MERIC Q3 2025 Cost of Living Index. Source: Plootus Research 2026.
            </p>
          </section>

          <section id="healthcare">
            <div className={styles.sectionLabel}>The Hidden FIRE Killer</div>
            <h2>The Healthcare Gap: Your Biggest Early Retirement Risk</h2>
            <p>Healthcare is the #1 reason early retirement plans fail. Medicare doesn't begin until age 65 — meaning early retirees need to fund private health insurance for 10–20+ years. This cost is consistently underestimated.</p>
            <div className={styles.tblWrap}>
              <table className={`${styles.dataTable} ${styles.leftAlignFirst}`} summary="Data table — sortable columns">
                <thead>
                  <tr>
                    <th scope="col">Retire At</th>
                    <th scope="col">Years Until Medicare</th>
                    <th scope="col">Est. Annual Premium (Individual)</th>
                    <th scope="col">Est. Annual Premium (Couple)</th>
                    <th scope="col">Total Cost to Medicare</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>45</td>
                    <td>20 years</td>
                    <td>$8,000–$14,000</td>
                    <td>$16,000–$28,000</td>
                    <td>~$200,000–$400,000</td>
                  </tr>
                  <tr>
                    <td>50</td>
                    <td>15 years</td>
                    <td>$10,000–$18,000</td>
                    <td>$20,000–$36,000</td>
                    <td>~$200,000–$350,000</td>
                  </tr>
                  <tr>
                    <td>55</td>
                    <td>10 years</td>
                    <td>$12,000–$22,000</td>
                    <td>$24,000–$44,000</td>
                    <td>~$150,000–$280,000</td>
                  </tr>
                  <tr>
                    <td>60</td>
                    <td>5 years</td>
                    <td>$14,000–$25,000</td>
                    <td>$28,000–$50,000</td>
                    <td>~$80,000–$160,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '11px', color: 'var(--text-light)' }}>
              Based on ACA marketplace 2025 benchmark silver plan rates for non-smokers. Actual costs depend on income (ACA subsidies available below 400% FPL) and state. Gross premiums before subsidies. Source: KFF Health Insurance Marketplace Calculator 2025; Plootus Research 2026.
            </p>

            <h3>Healthcare Cost Strategies for Early Retirees</h3>
            <div className={styles.stepsList}>
              <div className={styles.stepItem}>
                <div className={styles.stepNum}>01</div>
                <div className={styles.stepBody}>
                  <h4>ACA Marketplace Plans with Income Optimization</h4>
                  <p>ACA subsidies are based on Modified Adjusted Gross Income (MAGI). Early retirees with low income can qualify for substantial subsidies — sometimes covering most of the premium. Strategic Roth conversions and withdrawal planning can keep MAGI below the 400% FPL threshold.</p>
                  <div className={styles.stepStat}>→ At 200% FPL (~$30,000/yr for individual), a 50-year-old may pay as little as $300–$600/month after subsidies</div>
                </div>
              </div>
              <div className={styles.stepItem}>
                <div className={styles.stepNum}>02</div>
                <div className={styles.stepBody}>
                  <h4>Health Sharing Ministries (Lower Cost, Less Protection)</h4>
                  <p>Non-insurance cost-sharing programs cost $300–$600/month for individuals — less than ACA plans. Trade-off: they're not insurance, don't always cover pre-existing conditions, and have limited legal protections. Best for healthy early retirees as a bridge.</p>
                  <div className={styles.stepStat}>→ Can cut healthcare costs 40–60% vs. ACA marketplace plans — but carries meaningful coverage risk</div>
                </div>
              </div>
              <div className={styles.stepItem}>
                <div className={styles.stepNum}>03</div>
                <div className={styles.stepBody}>
                  <h4>Geographic Arbitrage (International or Domestic)</h4>
                  <p>Retiring to a country with lower healthcare costs — or a U.S. state with a better ACA market — can dramatically reduce premiums. Mexico, Portugal, Thailand, and other expat-popular destinations offer quality healthcare at a fraction of U.S. costs.</p>
                  <div className={styles.stepStat}>→ International private health insurance: $100–$300/month for comprehensive coverage in many countries</div>
                </div>
              </div>
            </div>
          </section>

          <section id="step-plan">
            <div className={styles.sectionLabel}>The Action Plan</div>
            <h2>7-Step Plan to Retire Early</h2>
            <div className={styles.stepsList}>
              <div className={styles.stepItem}>
                <div className={styles.stepNum}>01</div>
                <div className={styles.stepBody}>
                  <h4>Calculate your FIRE number</h4>
                  <p>Annual spending ÷ 0.035 = your target portfolio. Be honest about healthcare, travel, and inflation. Add a healthcare buffer of $150,000–$400,000 depending on your early retirement age.</p>
                </div>
              </div>
              <div className={styles.stepItem}>
                <div className={styles.stepNum}>02</div>
                <div className={styles.stepBody}>
                  <h4>Maximize every tax-advantaged account</h4>
                  <p>401(k) first ($24,500), then IRA ($7,000), then HSA ($4,300 individual / $8,550 family in 2026 — triple tax advantage, and the best early retirement vehicle for future healthcare). Then taxable brokerage for additional savings. (IRS, 2026)</p>
                  <div className={styles.stepStat}>→ HSA funds grow tax-free and can be used tax-free for medical expenses at any age — the ultimate early retirement bridge</div>
                </div>
              </div>
              <div className={styles.stepItem}>
                <div className={styles.stepNum}>03</div>
                <div className={styles.stepBody}>
                  <h4>Build the Roth conversion ladder</h4>
                  <p>Traditional 401(k) funds can't be accessed penalty-free until 59½. The Roth conversion ladder lets you convert traditional funds to Roth IRA annually — with a 5-year seasoning period — giving you penalty-free access in early retirement. Start building 5+ years before your target date.</p>
                </div>
              </div>
              <div className={styles.stepItem}>
                <div className={styles.stepNum}>04</div>
                <div className={styles.stepBody}>
                  <h4>Raise your savings rate aggressively</h4>
                  <p>To retire 15+ years early, you need a 50%+ savings rate. This typically means increasing income AND decreasing expenses. Geographic arbitrage within the U.S. — moving from a high-cost city to a lower-cost one — is one of the highest-impact moves available.</p>
                  <div className={styles.stepStat}>→ Moving from San Francisco to Raleigh, NC typically cuts living costs by 35–50%</div>
                </div>
              </div>
              <div className={styles.stepItem}>
                <div className={styles.stepNum}>05</div>
                <div className={styles.stepBody}>
                  <h4>Invest in low-cost index funds</h4>
                  <p>Keep investment costs below 0.1% expense ratio. A 1% annual fee difference on a $1M portfolio costs $10,000/year — enough to add 1–2 years to your working life. A three-fund portfolio (U.S. stocks, international stocks, bonds) covers most early retirees' needs.</p>
                </div>
              </div>
              <div className={styles.stepItem}>
                <div className={styles.stepNum}>06</div>
                <div className={styles.stepBody}>
                  <h4>Plan your healthcare bridge strategy</h4>
                  <p>Model ACA subsidy eligibility based on projected MAGI in early retirement. Plan your Roth ladder to keep income low enough to qualify for subsidies in early years. Consider HSA funds as a dedicated healthcare reserve.</p>
                </div>
              </div>
              <div className={styles.stepItem}>
                <div className={styles.stepNum}>07</div>
                <div className={styles.stepBody}>
                  <h4>Build a flexible withdrawal strategy</h4>
                  <p>Early retirement portfolios face sequence-of-returns risk — a severe downturn in the first 5 years can permanently damage longevity. Use a 1–2 year cash cushion so you never sell equities in a down market. Flexible rule: reduce spending to 3% in bear markets, up to 4.5% in strong markets.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="chart-section">
            <div className={styles.sectionLabel}>The Compounding Visual</div>
            <h2>How a 50% Savings Rate Reaches FIRE in 17 Years</h2>
            <div className={styles.chartBox}>
              <h3>Portfolio Growth at 50% Savings Rate — Starting at Age 30 with $80K Income</h3>
              <div style={{ height: '300px', position: 'relative' }}>
                <canvas ref={chartRef}></canvas>
              </div>
              <p className={styles.chartSource}>Assumes $40,000/year invested (50% of $80K income), 7% average annual return, starting from $0 at age 30. FIRE target = $1,143,000 ($40,000 spending ÷ 3.5%). Source: Plootus Research 2026.</p>
            </div>
          </section>

          <section id="faq">
            <div className={styles.sectionLabel}>FAQs</div>
            <h2>Frequently Asked Questions</h2>
            <details className={styles.faqItem}>
              <summary className={styles.faqQ}>How much do I need to retire at 50?</summary>
              <div className={styles.faqA}>In the average U.S. state (~$57,800 annual cost), retiring at 50 requires approximately $1.65 million using the 3.5% withdrawal rate. In affordable states like Tennessee or Iowa, the target falls to $1.3–$1.4 million. In California or New York, expect $2.3–$2.5 million. These figures exclude Social Security (unavailable before age 62) — your portfolio must cover all expenses during the gap. Source: Plootus Research 2026; BLS CES 2024; MERIC Q3 2025.</div>
            </details>
            <details className={styles.faqItem}>
              <summary className={styles.faqQ}>Why do early retirees use 3.5% instead of 4%?</summary>
              <div className={styles.faqA}>The original 4% rule was designed for a 30-year retirement horizon (ages 65–95). An early retiree at 50 faces a 45–50 year horizon, for which historical research suggests a more conservative 3–3.5% withdrawal rate to maintain high portfolio survival probability. The 3.5% rule: multiply annual spending by 28.57 to get your FIRE target. Source: Bengen (1994); Trinity Study (1998).</div>
            </details>
            <details className={styles.faqItem}>
              <summary className={styles.faqQ}>How do early retirees access 401(k) funds before 59½?</summary>
              <div className={styles.faqA}>Three main methods: (1) <strong>Roth Conversion Ladder</strong> — convert traditional IRA/401(k) to Roth annually; access those conversions tax-free after 5 years. (2) <strong>Rule 72(t) / SEPP</strong> — IRS substantially equal periodic payments allow penalty-free withdrawals from IRAs at any age using IRS-approved methods. (3) <strong>Taxable brokerage accounts</strong> — no age restrictions. Most FIRE practitioners use all three in combination. Source: IRS Publication 590-B.</div>
            </details>
            <details className={styles.faqItem}>
              <summary className={styles.faqQ}>Is FIRE realistic for average earners?</summary>
              <div className={styles.faqA}>Yes — but it typically requires both a high savings rate AND geographic or lifestyle arbitrage. Very high earners can FIRE from a major city; average earners often find that moving to a lower-cost state makes the math dramatically more achievable. Barista FIRE and Coast FIRE are often more realistic targets for median earners — achieving semi-retirement or financial security earlier without requiring complete work stoppage.</div>
            </details>
            <details className={styles.faqItem}>
              <summary className={styles.faqQ}>What is the biggest risk in early retirement?</summary>
              <div className={styles.faqA}>Sequence-of-returns risk is the most cited technical risk — a severe market downturn in the first 5–10 years of retirement can permanently damage portfolio longevity. Healthcare cost inflation is the biggest real-world risk: premiums, out-of-pocket costs, and long-term care needs are difficult to predict across a 40-year horizon. Most FIRE planners address this through ACA income management, HSA reserves, and maintaining flexibility to earn supplemental income if needed.</div>
            </details>
          </section>

          <div className={styles.sourcesBox}>
            <h3>📚 Sources</h3>
            <ol>
              <li>Bengen, W. (1994). <em>Determining Withdrawal Rates Using Historical Data.</em> Journal of Financial Planning — original 4% rule study.</li>
              <li>Cooley, Hubbard & Walz (1998). <em>Retirement Savings: Choosing a Withdrawal Rate That Is Sustainable</em> — Trinity Study.</li>
              <li>Bureau of Labor Statistics, <em>Consumer Expenditure Survey 2024</em>.</li>
              <li>MERIC, <em>Cost of Living Index Q3 2025</em>.</li>
              <li>KFF Health Insurance Marketplace Calculator 2025. <a href="https://www.kff.org/interactive/subsidy-calculator/" target="_blank" rel="noopener noreferrer">kff.org</a></li>
              <li>IRS, <em>Substantially Equal Periodic Payments (SEPP / Rule 72(t))</em>; IRS Publication 590-B. <a href="https://www.irs.gov" target="_blank" rel="noopener noreferrer">irs.gov</a></li>
              <li>IRS, <em>HSA Contribution Limits 2026</em>; IRS, <em>401(k) Contribution Limits 2026</em>.</li>
              <li>Mr. Money Mustache, "The Shockingly Simple Math Behind Early Retirement" — savings rate to retirement years table.</li>
              <li>Plootus Research, <em>FIRE Number by State 2026; Best States to Retire 2026</em>.</li>
            </ol>
          </div>

          <div className={styles.inlineCta}>
            <div className={styles.inlineCtaText}>
              <h3>What year can you actually retire?</h3>
              <p>Plootus connects to your real accounts and calculates your FIRE date — personalized to your savings rate, state, and target spending.</p>
            </div>
            <a className={styles.inlineCtaBtn} onClick={() => router.push('/my-dashboard')}>
              Find My FIRE Date →
            </a>
          </div>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.tocBox}>
            <h3>On This Page</h3>
            <ol>
              <li>
                <a href="#what-is-fire">What Is FIRE?</a>
              </li>
              <li>
                <a href="#fire-types">5 FIRE Strategies</a>
              </li>
              <li>
                <a href="#savings-rate">Savings Rate Table</a>
              </li>
              <li>
                <a href="#by-state">FIRE Number by State</a>
              </li>
              <li>
                <a href="#healthcare">The Healthcare Gap</a>
              </li>
              <li>
                <a href="#step-plan">7-Step Action Plan</a>
              </li>
              <li>
                <a href="#chart-section">Compounding Chart</a>
              </li>
              <li>
                <a href="#faq">FAQs</a>
              </li>
            </ol>
          </div>
          <div className={styles.ctaCard}>
            <h4>What's my retirement number?</h4>
            <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
            <a onClick={() => router.push('/retirement-calculator')} className={styles.ctaBtn}>
              Check Here
            </a>
          </div>
          <div className={styles.sidebarCard}>
            <div className={styles.relatedCard}>
              <h4>Related Guides</h4>
              <a onClick={() => router.push('/how-much-to-retire')}>→ How Much Do I Need to Retire?</a>
              <a onClick={() => router.push('/healthcare-costs-in-retirement')}>→ Healthcare Costs in Retirement</a>
              <a onClick={() => router.push('/cheapest-states-to-retire')}>→ Cheapest States to Retire</a>
              <a onClick={() => router.push('/401k-by-age')}>→ 401(k) Savings by Age</a>
              <a onClick={() => router.push('/how-to-plan-retirement')}>→ How to Plan for Retirement</a>
            </div>
          </div>
          <div className={styles.sidebarCard} style={{ background: 'var(--orange-light)', borderColor: 'rgba(232,89,12,.2)' }}>
            <div className={styles.formulaBox}>
              <p>FIRE Formula</p>
              <p>Annual Spend ÷ 3.5% = FIRE Number</p>
              <p>
                $50K/yr → $1.43M needed
                <br />
                $70K/yr → $2.0M needed
                <br />
                $100K/yr → $2.86M needed
              </p>
            </div>
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

export default RetireEarly;
