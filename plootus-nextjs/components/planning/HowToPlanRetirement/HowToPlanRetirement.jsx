import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from './HowToPlanRetirement.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const HowToPlanRetirement = () => {
  const router = useRouter();
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
      const canvas = document.getElementById('withdrawalChart');
      if (window.Chart && canvas) {
        const ctx = canvas.getContext('2d');
        const years = Array.from({ length: 26 }, (_, i) => 2026 + i);
        const optimal = years.map((_, i) => Math.max(0, 1500000 * (1.05 ** i) * (1 - 0.042 * i) * 0.88));
        const traditional = years.map((_, i) => Math.max(0, 1500000 * (1.05 ** i) * (1 - 0.042 * i) * 0.76));

        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new window.Chart(ctx, {
          type: 'line',
          data: {
            labels: years,
            datasets: [
              {
                label: 'Optimal Withdrawal Order',
                data: optimal,
                borderColor: 'rgba(59,91,219,1)',
                backgroundColor: 'rgba(59,91,219,.08)',
                tension: .4,
                fill: true,
                borderWidth: 2.5,
                pointRadius: 0
              },
              {
                label: 'Traditional-First Order',
                data: traditional,
                borderColor: 'rgba(224,49,49,.8)',
                backgroundColor: 'rgba(224,49,49,.06)',
                tension: .4,
                fill: true,
                borderWidth: 2,
                borderDash: [5, 4],
                pointRadius: 0
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  font: { family: "'Plus Jakarta Sans', sans-serif", size: 12 },
                  boxRadius: 4
                }
              },
              tooltip: {
                callbacks: {
                  label: c => '$' + Math.round(c.raw).toLocaleString()
                }
              }
            },
            scales: {
              x: {
                ticks: {
                  font: { size: 11, family: "'Plus Jakarta Sans', sans-serif" },
                  maxTicksLimit: 8
                },
                grid: { display: false }
              },
              y: {
                ticks: {
                  callback: v => '$' + (v / 1000).toFixed(0) + 'k',
                  font: { size: 11, family: "'Plus Jakarta Sans', sans-serif" }
                },
                grid: { color: 'rgba(0,0,0,0.04)' }
              }
            }
          }
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
        <div className={styles.heroInner}>
          <div className={styles.heroEyebrow}>📘 The Plootus Pillar Guide · Updated 2026</div>
          <h1>How to Plan for Retirement: The Complete Step-by-Step Guide</h1>
          <p className={styles.heroDeck}>Retirement planning is not a single decision — it's a system. Six interconnected steps, each building on the last, from calculating your number to structuring your withdrawal strategy. This guide covers everything.</p>
          <div className={styles.heroMeta}>
            <span>By the Plootus Research Team</span>
            <span>Updated March 2026</span>
            <span>30 min read</span>
            <span>Pillar Guide — links to all subtopics</span>
          </div>
        </div>
      </section>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}>
            <div className={styles.statNum}>60+</div>
            <div className={styles.statLabel}>Cited Statistics</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>$148K</div>
            <div className={styles.statLabel}>Avg. 401(k) Balance, All Ages</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>$24,894</div>
            <div className={styles.statLabel}>Avg. Annual SS Benefit (2025)</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>$24,500</div>
            <div className={styles.statLabel}>2026 401(k) Contribution Limit</div>
          </div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent}>
          <div className={styles.infoBox}>
            <div className={styles.infoIcon}>🗺️</div>
            <div>
              <h4>How to Use This Guide</h4>
              <p>This is Plootus's master retirement planning guide — it covers every major decision from first savings to first withdrawal. Each section links to a dedicated deep-dive guide for more detail. Read it start to finish for a complete framework, or jump to the chapter most relevant to your current stage.</p>
            </div>
          </div>

          <div className={styles.chapter} id="step1">
            <div className={styles.chHeader}>
              <div className={styles.chNum}>01</div>
              <div>
                <div className={styles.chLabel}>Step One</div>
                <h2 className={styles.chTitle}>Calculate Your Retirement Number</h2>
              </div>
            </div>
            <p>Everything in retirement planning flows from one number: how much you need saved to sustain your desired lifestyle indefinitely. This is your <strong>retirement number</strong>, and getting it right is the foundation of every other decision.</p>
            <p>The most widely used framework is the <strong>4% rule</strong>: multiply your anticipated annual spending by 25 to get your required portfolio. At a 4% annual withdrawal rate, historically diversified portfolios have survived at least 30 years in nearly every market scenario studied (Bengen, 1994; Trinity Study updates).</p>
            <h3>The Formula</h3>
            <p><strong>(Annual Spending − Social Security Income) ÷ 0.04 = Retirement Number</strong></p>
            <p>The average Social Security benefit is $24,894/year (SSA, Nov. 2025). If you plan to spend $70,000/year, your savings only need to cover the $45,106 gap — meaning a target of ~$1.13 million, not $1.75 million.</p>
            <div className={styles.tblWrap}>
              <table className={`${styles.dataTable} ${styles.centered}`} summary="Data table — sortable columns">
                <thead>
                  <tr>
                    <th scope="col">Desired Annual Spending</th>
                    <th scope="col">After SS Income ($24,894 avg.)</th>
                    <th scope="col">Retirement Number (4% Rule)</th>
                    <th scope="col">State Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>$50,000/year</td><td>$25,106</td><td>$627,650</td><td>Mississippi, Oklahoma</td></tr>
                  <tr><td>$60,000/year</td><td>$35,106</td><td>$877,650</td><td>Iowa, Indiana</td></tr>
                  <tr><td>$75,000/year</td><td>$50,106</td><td>$1,252,650</td><td>North Carolina, Florida</td></tr>
                  <tr><td>$90,000/year</td><td>$65,106</td><td>$1,627,650</td><td>Colorado, Virginia</td></tr>
                  <tr><td>$120,000/year</td><td>$95,106</td><td>$2,377,650</td><td>California, New York</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '11px', color: 'var(--text-light)' }}>Sources: SSA Monthly Statistical Snapshot Nov. 2025; Bengen W.P. (1994). Plootus Research 2026.</p>
            <div className={styles.callout}>
              <p>📌 <strong>Go deeper:</strong> <a onClick={() => router.push('/how-much-to-retire')}>How Much Do I Need to Retire? →</a> — covers state-adjusted calculations, retirement age adjustments, and the 3.5% rule for early retirees.</p>
            </div>
          </div>

          <div className={styles.chapter} id="step2">
            <div className={styles.chHeader}>
              <div className={styles.chNum}>02</div>
              <div>
                <div className={styles.chLabel}>Step Two</div>
                <h2 className={styles.chTitle}>Understand Your Retirement Accounts</h2>
              </div>
            </div>
            <p>Different retirement accounts have different tax treatments, contribution limits, and withdrawal rules. Using the right mix — and contributing in the right order — can save tens of thousands in taxes over your retirement lifetime.</p>

            <div className={styles.accountGrid}>
              <div className={styles.accCard}>
                <div className={styles.accName}>Traditional 401(k) / 403(b) / 457</div>
                <div className={styles.accLimit}>$24,500/yr</div>
                <div className={styles.accDesc}>Pre-tax contributions reduce taxable income now; withdrawals taxed in retirement. Best if you expect lower tax rate in retirement. Employer match goes here first. (IRS, 2026)</div>
              </div>
              <div className={`${styles.accCard} ${styles.roth}`}>
                <div className={styles.accName}>Roth 401(k) / Roth IRA</div>
                <div className={styles.accLimit}>$24,500 / $7,000/yr</div>
                <div className={styles.accDesc}>After-tax contributions. Withdrawals in retirement completely tax-free. Best if you expect higher taxes later. No RMDs on Roth IRA. Subject to income limits.</div>
              </div>
              <div className={`${styles.accCard} ${styles.hsa}`}>
                <div className={styles.accName}>HSA (Health Savings Account)</div>
                <div className={styles.accLimit}>$4,300 / $8,550/yr</div>
                <div className={styles.accDesc}>Triple tax advantage: deductible contributions, tax-free growth, tax-free qualified withdrawals. After 65: penalty-free withdrawals for anything (taxed like traditional IRA). (IRS, 2026)</div>
              </div>
              <div className={`${styles.accCard} ${styles.brokerage}`}>
                <div className={styles.accName}>Taxable Brokerage Account</div>
                <div className={styles.accLimit}>No limit</div>
                <div className={styles.accDesc}>No upfront tax break, but flexible — no withdrawal rules or penalties. Long-term capital gains rates typically lower than income tax. Critical for early retirees.</div>
              </div>
              <div className={styles.accCard}>
                <div className={styles.accName}>Traditional IRA</div>
                <div className={styles.accLimit}>$7,000/yr</div>
                <div className={styles.accDesc}>Similar to traditional 401(k) but with income limits for deductibility if covered by a workplace plan. Required Minimum Distributions begin at age 73 (SECURE 2.0).</div>
              </div>
              <div className={`${styles.accCard} ${styles.pension}`}>
                <div className={styles.accName}>Pension / Defined Benefit</div>
                <div className={styles.accLimit}>Employer-funded</div>
                <div className={styles.accDesc}>Guaranteed monthly income for life — increasingly rare in private sector. If you have one, treat it like Social Security: subtract from annual spending need before calculating your number.</div>
              </div>
            </div>

            <h3>The Right Contribution Order</h3>
            <div className={styles.stepsList}>
              <div className={styles.stepItem}><div className={styles.stepCircle}>1</div><div className={styles.stepBody}><h4>401(k) — up to the employer match</h4><p>This is free money. Contribute enough to get the full employer match — it's an immediate 50–100% return. One in four workers misses out on this entirely (Fidelity, 2025).</p></div></div>
              <div className={styles.stepItem}><div className={styles.stepCircle}>2</div><div className={styles.stepBody}><h4>HSA — maximum, if eligible</h4><p>If you have a high-deductible health plan, max your HSA. The only truly triple-tax-advantaged account: deductible, grows tax-free, and tax-free qualified withdrawals at any age.</p></div></div>
              <div className={styles.stepItem}><div className={styles.stepCircle}>3</div><div className={styles.stepBody}><h4>Roth or Traditional IRA — $7,000</h4><p>Max your IRA after the employer match. Roth if in lower tax brackets now; Traditional if in peak earning years. Subject to income limits for Roth deductibility.</p></div></div>
              <div className={styles.stepItem}><div className={styles.stepCircle}>4</div><div className={styles.stepBody}><h4>Max out 401(k) — remaining $17,500</h4><p>Return to your 401(k) and contribute up to the full $24,500 limit. At 50+: add catch-up ($8,000 standard; $11,250 if ages 60–63 under SECURE 2.0).</p></div></div>
              <div className={styles.stepItem}><div className={styles.stepCircle}>5</div><div className={styles.stepBody}><h4>Taxable brokerage — no limit</h4><p>If you've maxed all tax-advantaged accounts, a taxable brokerage is next. Focus on tax-efficient investments: index funds, ETFs, and minimize trading.</p></div></div>
            </div>
            <div className={styles.callout}>
              <p>📌 <strong>Go deeper:</strong> <a onClick={() => router.push('/401k-by-age')}>401(k) Benchmarks by Age →</a> and <a onClick={() => router.push('/roth-vs-traditional')}>Roth vs. Traditional IRA Guide →</a></p>
            </div>
          </div>

          <div className={styles.inlineCta}>
            <div className={styles.inlineCtaText}>
              <h3>See your complete retirement picture</h3>
              <p>Plootus connects all your accounts — 401(k), IRA, brokerage — and shows exactly where you stand against your retirement number.</p>
            </div>
            <a className={styles.inlineCtaBtn} onClick={() => router.push('/my-dashboard')}>Connect My Accounts →</a>
          </div>

          <div className={styles.chapter} id="step3">
            <div className={styles.chHeader}>
              <div className={styles.chNum}>03</div>
              <div>
                <div className={styles.chLabel}>Step Three</div>
                <h2 className={styles.chTitle}>Choose Where to Retire</h2>
              </div>
            </div>
            <p>Location is one of the most underweighted retirement variables — yet it can change your required savings by $500,000 to $1.5 million. A retiree in Hawaii needs over $2.6 million using the 4% rule. The same lifestyle in Tennessee requires under $650,000 (Plootus Best States to Retire, 2026).</p>
            <p>Four factors determine the financial impact of your retirement location: cost of living, state income taxes, healthcare quality, and quality of life.</p>
            <div className={styles.tblWrap}>
              <table className={`${styles.dataTable} ${styles.leftAlignTwo}`} summary="Data table — sortable columns">
                <thead>
                  <tr>
                    <th scope="col">Factor</th>
                    <th scope="col">Why It Matters</th>
                    <th scope="col">Best States</th>
                    <th scope="col">Worst States (for factor)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Cost of Living</td><td>Determines annual spending and retirement number</td><td>MS, OK, KS, TN, AR</td><td>HI, CA, NY, MA, NJ</td></tr>
                  <tr><td>Income Tax</td><td>Can cost $5K–$20K+/year on retirement distributions</td><td>WY, FL, TN, SD, NV</td><td>CA, NY, NJ, CT, MN</td></tr>
                  <tr><td>Healthcare Quality</td><td>Critical in 70s–80s; poor access can devastate finances</td><td>MN, CO, MA, SD</td><td>KY, WV, MS, OK</td></tr>
                  <tr><td>Quality of Life</td><td>Climate, community — matters for well-being and longevity</td><td>FL, ME, CO, VT, WI</td><td>MS, AR, KY, LA</td></tr>
                </tbody>
              </table>
            </div>
            <div className={`${styles.callout} ${styles.green}`}>
              <p>💡 <strong>Best Value States (Cost + Quality):</strong> Tennessee (no income tax, low cost), North Carolina (affordable, strong QoL), Delaware (A tax grade, near major medical centers), and Florida (no income tax, warm climate) offer the strongest combination of affordability and livability. <em>Source: Plootus Best States to Retire 2026.</em></p>
            </div>
            <div className={styles.callout}>
              <p>📌 <strong>Go deeper:</strong> <a onClick={() => router.push('/best-states-to-retire')}>Best States to Retire 2026 →</a> · <a onClick={() => router.push('/cheapest-states-to-retire')}>Cheapest States to Retire →</a> · <a onClick={() => router.push('/resources')}>Tax-Friendly States for Retirees →</a></p>
            </div>
          </div>

          <div className={styles.chapter} id="step4">
            <div className={styles.chHeader}>
              <div className={styles.chNum}>04</div>
              <div>
                <div className={styles.chLabel}>Step Four</div>
                <h2 className={styles.chTitle}>Optimize Your Social Security Strategy</h2>
              </div>
            </div>
            <p>Social Security is worth $300,000–$500,000+ in lifetime income for the average retiree. The claiming age decision is permanent and irrevocable — and most people make it without adequate analysis.</p>
            <div className={styles.tblWrap}>
              <table className={`${styles.dataTable} ${styles.leftAlignFirstLast}`} summary="Data table — sortable columns">
                <thead>
                  <tr>
                    <th scope="col">Claim At</th>
                    <th scope="col">Monthly Benefit (example: $2K FRA)</th>
                    <th scope="col">Annual Benefit</th>
                    <th scope="col">Break-Even Age</th>
                    <th scope="col">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>62 (earliest)</td><td>$1,400 (−30%)</td><td>$16,800</td><td>~77 vs. FRA</td><td>Poor health; urgent income need</td></tr>
                  <tr><td>67 (Full Retirement Age)</td><td>$2,000 (100%)</td><td>$24,000</td><td>Baseline</td><td>Average health; standard retirement</td></tr>
                  <tr><td>70 (maximum delay)</td><td>$2,480 (+24%)</td><td>$29,760</td><td>~83 vs. FRA</td><td>Good health; maximize survivor benefit</td></tr>
                </tbody>
              </table>
            </div>
            <p>For couples: the higher earner should strongly consider delaying to age 70 to maximize the <em>survivor benefit</em> — the benefit the lower-earning spouse inherits if the higher earner dies first. This single decision can add $50,000–$200,000 in additional lifetime household income.</p>
            <p style={{ fontSize: '11px', color: 'var(--text-light)' }}>Source: Social Security Administration benefit calculation rules; SSA Monthly Statistical Snapshot Nov. 2025.</p>
            <div className={styles.callout}>
              <p>📌 <strong>Go deeper:</strong> <a onClick={() => router.push('/resources')}>Social Security Benefits: When to Claim and How Much You'll Get →</a></p>
            </div>
          </div>

          <div className={styles.chapter} id="step5">
            <div className={styles.chHeader}>
              <div className={styles.chNum}>05</div>
              <div>
                <div className={styles.chLabel}>Step Five</div>
                <h2 className={styles.chTitle}>Plan for Healthcare Costs</h2>
              </div>
            </div>
            <p>Healthcare is the most common cause of retirement plan failure — not poor investment returns. Fidelity estimates a couple retiring today at 65 will spend an average of <strong>$413,000</strong> on healthcare throughout retirement, excluding long-term care (Fidelity Retiree Health Care Cost Estimate, 2024).</p>

            <h3>The Four Healthcare Phases in Retirement</h3>
            <div className={styles.stepsList}>
              <div className={styles.stepItem}><div className={`${styles.stepCircle} ${styles.teal}`}>1</div><div className={styles.stepBody}><h4>Ages 55–64: The Pre-Medicare Gap (if retiring early)</h4><p>The most financially dangerous healthcare period. ACA Marketplace plans, COBRA, or spouse's employer coverage. Budget $10,000–$25,000/year depending on age and plan.</p></div></div>
              <div className={styles.stepItem}><div className={`${styles.stepCircle} ${styles.teal}`}>2</div><div className={styles.stepBody}><h4>Ages 65–74: Early Medicare Years</h4><p>Enroll in Medicare Parts A, B, and D at 65. Annual costs: ~$8,500–$13,500 for a single retiree in average health. Max and preserve your HSA reserve for later years.</p></div></div>
              <div className={styles.stepItem}><div className={`${styles.stepCircle} ${styles.teal}`}>3</div><div className={styles.stepBody}><h4>Ages 75–84: Rising Health Needs</h4><p>Healthcare spending accelerates. Long-term care planning becomes urgent. Annual costs: $13,000–$19,000+ without LTC coverage. Ensure adequate Medigap or Medicare Advantage.</p></div></div>
              <div className={styles.stepItem}><div className={`${styles.stepCircle} ${styles.teal}`}>4</div><div className={styles.stepBody}><h4>Ages 85+: Long-Term Care Potential</h4><p>70% of those reaching 65 will need some form of LTC. Median assisted living: $64,200/year. Nursing home (private room): $108,405/year. Medicare does not cover custodial care (Genworth Cost of Care Survey, 2024).</p></div></div>
            </div>
            <div className={styles.callout}>
              <p>📌 <strong>Go deeper:</strong> <a onClick={() => router.push('/resources')}>Healthcare Costs in Retirement: What You'll Really Pay →</a></p>
            </div>
          </div>

          <div className={styles.chapter} id="step6">
            <div className={styles.chHeader}>
              <div className={styles.chNum}>06</div>
              <div>
                <div className={styles.chLabel}>Step Six</div>
                <h2 className={styles.chTitle}>Build Your Withdrawal Strategy</h2>
              </div>
            </div>
            <p>How you withdraw from retirement accounts is just as important as how much you saved. The order, timing, and structure of withdrawals can save $50,000–$200,000 in lifetime taxes and significantly extend how long your money lasts.</p>

            <h3>The Optimal Withdrawal Order</h3>
            <div className={styles.stepsList}>
              <div className={styles.stepItem}><div className={styles.stepCircle}>1</div><div className={styles.stepBody}><h4>Required Minimum Distributions (RMDs) first</h4><p>Once you reach age 73, the IRS requires minimum annual withdrawals from traditional IRAs and 401(k)s. Missing them triggers a 25% penalty. Take RMDs first.</p></div></div>
              <div className={styles.stepItem}><div className={styles.stepCircle}>2</div><div className={styles.stepBody}><h4>Taxable brokerage accounts</h4><p>Taxed at capital gains rates (typically 0% or 15%) — significantly lower than ordinary income rates. Use these while tax-deferred accounts continue growing.</p></div></div>
              <div className={styles.stepItem}><div className={styles.stepCircle}>3</div><div className={styles.stepBody}><h4>Traditional IRA / 401(k) withdrawals</h4><p>Taxed as ordinary income. Strategic withdrawal amounts can keep you in lower tax brackets. In early retirement years (before SS begins), these can be taken at very low rates.</p></div></div>
              <div className={styles.stepItem}><div className={styles.stepCircle}>4</div><div className={styles.stepBody}><h4>Roth IRA — save for last</h4><p>Tax-free growth and no RMDs make Roth IRA the most flexible account. Save it for later retirement when tax rates may be higher, healthcare emergencies, or as a legacy asset.</p></div></div>
            </div>

            <h3>The Roth Conversion Strategy</h3>
            <p>In the years between retirement and age 73 (when RMDs begin), many retirees can strategically convert traditional IRA funds to Roth at low tax rates — filling lower tax brackets before RMDs force larger withdrawals later. Done over 8–12 years, this strategy can reduce lifetime tax burden by $50,000–$200,000 (T. Rowe Price, 2025).</p>

            <div className={styles.chartBox}>
              <h3>Illustrative: Optimal vs. Traditional-First Withdrawal Order — Tax Impact Over 25 Years</h3>
              <canvas id="withdrawalChart" height="120"></canvas>
              <p className={styles.chartSource}>Illustrative example: $1.5M total savings ($600K traditional, $500K Roth, $400K taxable). Optimal withdrawal order vs. traditional-first. Source: Plootus Research 2026; T. Rowe Price Retirement Insights 2025.</p>
            </div>
          </div>

          <div className={styles.chapter} id="checklist">
            <div className={styles.chHeader}>
              <div className={styles.chNum} style={{ fontSize: '40px' }}>✓</div>
              <div>
                <div className={styles.chLabel}>Master Checklist</div>
                <h2 className={styles.chTitle}>The Complete Retirement Planning Checklist</h2>
              </div>
            </div>
            <div className={styles.checklist}>
              <div className={styles.clSection}>
                <div className={styles.clSectionTitle}>10+ Years Before Retirement</div>
                <div className={styles.clItem}><div className={styles.clBox}></div><span>Calculate your target retirement number using the 4% rule</span></div>
                <div className={styles.clItem}><div className={styles.clBox}></div><span>Maximize employer 401(k) match — contribute at minimum to get the full match</span></div>
                <div className={styles.clItem}><div className={styles.clBox}></div><span>Open and fund an IRA (Roth preferred for most at this stage)</span></div>
                <div className={styles.clItem}><div className={styles.clBox}></div><span>Open and fund an HSA if enrolled in a high-deductible health plan</span></div>
                <div className={styles.clItem}><div className={styles.clBox}></div><span>Research target retirement states — factor cost, taxes, healthcare, and lifestyle</span></div>
                <div className={styles.clItem}><div className={styles.clBox}></div><span>Review investment allocations — ensure age-appropriate equity/bond mix</span></div>
              </div>
              <div className={styles.clSection}>
                <div className={styles.clSectionTitle}>5–10 Years Before Retirement</div>
                <div className={styles.clItem}><div className={styles.clBox}></div><span>Check your Social Security earnings record at ssa.gov/myaccount for accuracy</span></div>
                <div className={styles.clItem}><div className={styles.clBox}></div><span>Begin Roth conversion planning — model tax brackets through retirement</span></div>
                <div className={styles.clItem}><div className={styles.clBox}></div><span>Research long-term care insurance (optimal purchase window: ages 52–60)</span></div>
                <div className={styles.clItem}><div className={styles.clBox}></div><span>Maximize catch-up contributions if age 50+ ($32,500/yr in 401(k); $8,000 IRA)</span></div>
                <div className={styles.clItem}><div className={styles.clBox}></div><span>Build 1–2 year cash reserve to buffer sequence-of-returns risk in early retirement</span></div>
                <div className={styles.clItem}><div className={styles.clBox}></div><span>Consider working with a fee-only financial advisor for final plan review</span></div>
              </div>
              <div className={styles.clSection}>
                <div className={styles.clSectionTitle}>Year of Retirement</div>
                <div className={styles.clItem}><div className={styles.clBox}></div><span>Apply for Medicare 3 months before turning 65 (or coordinate with employer coverage)</span></div>
                <div className={styles.clItem}><div className={styles.clBox}></div><span>Model Social Security claiming scenarios — confirm optimal age for your situation</span></div>
                <div className={styles.clItem}><div className={styles.clBox}></div><span>Establish a withdrawal plan: which accounts to draw from first and in what order</span></div>
                <div className={styles.clItem}><div className={styles.clBox}></div><span>Review and update estate planning: will, power of attorney, healthcare directive, beneficiaries</span></div>
                <div className={styles.clItem}><div className={styles.clBox}></div><span>Model IRMAA thresholds — income above $106,000 (2025, single) triggers Medicare premium surcharges</span></div>
                <div className={styles.clItem}><div className={styles.clBox}></div><span>Confirm final retirement location — cost, tax domicile, and residency requirements</span></div>
              </div>
            </div>
          </div>

          <div className={styles.sourcesBox}>
            <h3>📚 Sources</h3>
            <ul>
              <li>Vanguard Group, <em>How America Saves 2025</em>; Fidelity Investments, <em>Q4 2025 Retirement Analysis</em>.</li>
              <li>Social Security Administration, <em>Monthly Statistical Snapshot November 2025</em>. <a href="https://www.ssa.gov" target="_blank" rel="noopener noreferrer">ssa.gov</a></li>
              <li>BLS, <em>Consumer Expenditure Survey 2024</em>; MERIC, <em>Cost of Living Index Q3 2025</em>.</li>
              <li>Fidelity Investments, <em>Retiree Health Care Cost Estimate 2024</em> — $413,000 couple estimate.</li>
              <li>IRS, <em>Retirement Plan Contribution Limits 2026; HSA Limits 2026</em>. <a href="https://www.irs.gov" target="_blank" rel="noopener noreferrer">irs.gov</a></li>
              <li>SECURE 2.0 Act (2023) — super catch-up, RMD age 73, Roth catch-up provisions.</li>
              <li>T. Rowe Price, <em>Retirement Account Withdrawal Order Strategies</em>, 2025.</li>
              <li>Bengen W.P. (1994). <em>Determining Withdrawal Rates Using Historical Data.</em> Journal of Financial Planning.</li>
              <li>Genworth, <em>Cost of Care Survey 2024</em> — LTC costs.</li>
              <li>Plootus Research, <em>Best States to Retire 2026</em>.</li>
            </ul>
          </div>

          <div className={styles.inlineCta}>
            <div className={styles.inlineCtaText}>
              <h3>Build your complete retirement plan on Plootus</h3>
              <p>Connect your accounts and Plootus shows you exactly where you stand across all six steps — personalized, not generic.</p>
            </div>
            <a className={styles.inlineCtaBtn} onClick={() => router.push('/my-dashboard')}>Start Building My Plan →</a>
          </div>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.tocBox}>
            <h3>On This Page</h3>
            <ul>
              <li><a href="#step1">Calculate Your Number</a></li>
              <li><a href="#step2">Retirement Accounts</a></li>
              <li><a href="#step3">Choose Your State</a></li>
              <li><a href="#step4">Social Security Strategy</a></li>
              <li><a href="#step5">Healthcare Planning</a></li>
              <li><a href="#step6">Withdrawal Strategy</a></li>
              <li><a href="#checklist">Master Checklist</a></li>
            </ul>
          </div>
          <div className={styles.sidebarCard}>
            <div className={styles.scBox}>
              <h4>What's my retirement number?</h4>
              <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
              <a onClick={() => router.push('/retirement-calculator')} className={styles.scBtn}>
                Check Here
              </a>
            </div>
          </div>
          <div className={styles.relatedBox}>
            <div className={styles.rbHead}>Related Guides</div>
            <a onClick={() => router.push('/how-much-to-retire')}>→ How Much Do I Need to Retire?</a>
            <a onClick={() => router.push('/401k-by-age')}>→ 401(k) Balance by Age 2026</a>
            <a onClick={() => router.push('/best-states-to-retire')}>→ Best States to Retire 2026</a>
            <a onClick={() => router.push('/resources')}>→ Social Security: When to Claim</a>
            <a onClick={() => router.push('/resources')}>→ Early Retirement / FIRE Guide</a>
          </div>
          <div className={styles.sidebarCard} style={{ background: 'var(--gold-light)', borderColor: 'var(--gold)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#9a6000', marginBottom: '8px' }}>Quick Stat</p>
            <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.45, marginBottom: '5px' }}>"A couple retiring at 65 today will spend an average of $413,000 on healthcare in retirement."</p>
            <p style={{ fontSize: '11px', color: 'var(--text-light)', margin: 0 }}>Source: Fidelity Retiree Health Care Cost Estimate 2024</p>
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

export default HowToPlanRetirement;
