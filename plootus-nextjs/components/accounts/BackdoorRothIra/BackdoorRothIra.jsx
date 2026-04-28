import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Chart from 'chart.js/auto';
import styles from './BackdoorRothIra.module.css';
import PartnersSection from '../../home/PartnersSection';

const BackdoorRothIra = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
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
          labels: ['$0\n(No pre-tax IRA)', '$50K\nPre-Tax IRA', '$93K\nPre-Tax IRA', '$200K\nPre-Tax IRA', '$500K\nPre-Tax IRA'],
          datasets: [
            {
              label: 'Tax Owed on $7,000 Conversion (32% bracket)',
              data: [0, 1029, 1483, 1867, 2149],
              backgroundColor: [
                'rgba(44,182,125,0.85)',
                'rgba(245,159,0,0.60)',
                'rgba(245,159,0,0.80)',
                'rgba(224,49,49,0.70)',
                'rgba(224,49,49,0.90)'
              ],
              borderRadius: 6
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: c => '$' + c.parsed.y.toLocaleString() + ' tax owed' } }
          },
          scales: {
            y: {
              ticks: { callback: v => '$' + v.toLocaleString(), font: { family: 'Plus Jakarta Sans', size: 11 } },
              grid: { color: '#E2E8F4' },
              min: 0,
              max: 2400,
              title: { display: true, text: 'Tax Owed ($)', font: { family: 'Plus Jakarta Sans', size: 11 } }
            },
            x: { ticks: { font: { family: 'Plus Jakarta Sans', size: 10 } }, grid: { display: false } }
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
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>💡 IRS-Approved Strategy · 2026 Limits</div>
          <h1>Backdoor Roth IRA: Step-by-Step Guide for High Earners (2026)</h1>
          <p className={styles.heroSub}>If your income exceeds the Roth IRA limit, you can't contribute directly — but there's a completely legal workaround the IRS has explicitly permitted since 2010. Here's how to do it right, avoid the pro-rata trap, and maximize your tax-free retirement growth.</p>
          <div className={styles.heroMeta}>
            <span>📚 Sources: IRS Publication 590-A, IRS Notice 2014-54, IRS Form 8606</span>
            <span>🗓️ 2026 Income Limits & Contribution Amounts</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}><span className={styles.statNum}>$161K</span><span className={styles.statLabel}>2026 Roth Phase-Out Starts (Single)</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>$7,000</span><span className={styles.statLabel}>Annual Contribution Limit (Under 50)</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>$0</span><span className={styles.statLabel}>Tax Owed on Qualified Roth Withdrawals</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>$69K</span><span className={styles.statLabel}>Mega Backdoor Roth Max (2026 after-tax)</span></div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent}>
          <section id="overview" className={styles.section}>
            <div className={styles.sectionLabel}>Why This Matters</div>
            <h2>What Is the Backdoor Roth IRA — and Who Needs It?</h2>
            <p>A Roth IRA is one of the most powerful retirement accounts available: your money grows tax-free, withdrawals in retirement are tax-free, and there are no required minimum distributions. The problem is that the IRS caps direct Roth IRA contributions based on your income — and once you cross those limits, the door appears to close.</p>
            <p>The backdoor Roth is a two-step workaround: you contribute to a <strong>Traditional IRA</strong> (which has no income limit), then immediately <strong>convert</strong> it to a Roth IRA. The IRS has explicitly blessed this strategy since 2010 in congressional committee reports. It is not a loophole — it is a deliberate feature of the tax code used by hundreds of thousands of high earners each year.</p>

            <div className={styles.keyStatsGrid}>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum}>$161,000</div>
                <div className={styles.keyStatLabel}>2026 Roth Phase-Out Begins — Single / Head of Household</div>
                <div className={styles.keyStatSource}>IRS Rev. Proc. 2025-28</div>
                <div className={styles.keyStatDesc}>Above this income your direct Roth contribution is reduced. At $176,000 (single) you are fully phased out and cannot contribute directly at all.</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum}>$236,000</div>
                <div className={styles.keyStatLabel}>2026 Roth Phase-Out Begins — Married Filing Jointly</div>
                <div className={styles.keyStatSource}>IRS Rev. Proc. 2025-28</div>
                <div className={styles.keyStatDesc}>MFJ phase-out runs $236,000–$246,000. Above $246,000, married couples cannot make any direct Roth IRA contribution regardless of which spouse earns the income.</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum}>$7,000</div>
                <div className={styles.keyStatLabel}>2026 Annual Backdoor Roth Contribution Limit (Under 50)</div>
                <div className={styles.keyStatSource}>IRS Rev. Proc. 2025-28</div>
                <div className={styles.keyStatDesc}>The backdoor Roth uses the same contribution limit as a direct Roth: $7,000/year (or $8,000 if age 50 or older via the $1,000 catch-up). Married couples can each do their own backdoor Roth for $14,000–$16,000 total.</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum}>$352,000+</div>
                <div className={styles.keyStatLabel}>Tax-Free Value of 30 Years of Backdoor Roth at 7% Growth</div>
                <div className={styles.keyStatSource}>Plootus calculation, $7,000/yr · 7% return · 30 years</div>
                <div className={styles.keyStatDesc}>Annual $7,000 backdoor Roth contributions compounding at 7% for 30 years grow to ~$700,000 — all withdrawable tax-free. A traditional taxable account producing the same gains would cost an estimated $175,000+ in capital gains taxes.</div>
              </div>
            </div>

            <div className={styles.callout}>
              <p><strong>Is the backdoor Roth legal?</strong> Yes. The IRS has explicitly acknowledged this strategy. The 2010 repeal of the $100,000 income limit on Roth conversions was specifically intended to permit this approach. A congressional committee report accompanying the Tax Increase Prevention and Reconciliation Act (TIPRA) noted that taxpayers could make a non-deductible contribution and convert it. This is not a gray area.</p>
            </div>
          </section>

          <section id="limits" className={styles.section}>
            <div className={styles.sectionLabel}>2026 IRS Limits</div>
            <h2>2026 Roth IRA Income Limits — When You Need the Backdoor</h2>
            <p>The IRS adjusts Roth IRA income limits annually for inflation. Your eligibility is based on your <strong>Modified Adjusted Gross Income (MAGI)</strong> — not your gross salary. MAGI adds back certain deductions (student loan interest, IRA deductions, foreign income exclusions) to your AGI. For most W-2 earners, MAGI equals AGI.</p>

            <div className={styles.limitGrid}>
              <div className={styles.limitCard}>
                <div className={styles.limitIcon}>👤</div>
                <div className={styles.limitType}>Single / Head of Household</div>
                <div className={styles.limitNum} style={{ color: '#2CB67D' }}>$161,000</div>
                <div className={styles.limitDesc}>Phase-out begins. Contribution reduced proportionally until $176,000, at which point no direct contribution is permitted.</div>
              </div>
              <div className={styles.limitCard}>
                <div className={styles.limitIcon}>👫</div>
                <div className={styles.limitType}>Married Filing Jointly</div>
                <div className={styles.limitNum} style={{ color: '#F59F00' }}>$236,000</div>
                <div className={styles.limitDesc}>Phase-out begins. Full phase-out at $246,000. Both spouses can each do a backdoor Roth even if one doesn't work (spousal IRA rules apply).</div>
              </div>
              <div className={styles.limitCard}>
                <div className={styles.limitIcon}>🚫</div>
                <div className={styles.limitType}>Married Filing Separately</div>
                <div className={styles.limitNum} style={{ color: '#E03131' }}>$0</div>
                <div className={styles.limitDesc}>If you lived with your spouse at any point during the year and file separately, your phase-out begins at $0 MAGI. This status nearly eliminates direct Roth eligibility.</div>
              </div>
            </div>

            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable}>
                <thead><tr><th>Filing Status</th><th>2026 Phase-Out Begins</th><th>2026 Fully Phased Out</th><th>2025 Phase-Out Began</th><th>YoY Change</th><th>Action Needed</th></tr></thead>
                <tbody>
                  <tr>
                    <td><strong>Single / HoH</strong></td>
                    <td style={{ color: '#F59F00', fontWeight: 600 }}>$161,000</td>
                    <td style={{ color: '#E03131', fontWeight: 600 }}>$176,000</td>
                    <td>$150,000</td>
                    <td style={{ color: '#2CB67D' }}>+$11,000</td>
                    <td>Backdoor Roth if MAGI &gt; $161K</td>
                  </tr>
                  <tr>
                    <td><strong>Married Filing Jointly</strong></td>
                    <td style={{ color: '#F59F00', fontWeight: 600 }}>$236,000</td>
                    <td style={{ color: '#E03131', fontWeight: 600 }}>$246,000</td>
                    <td>$236,000</td>
                    <td>Unchanged</td>
                    <td>Backdoor Roth if MAGI &gt; $236K</td>
                  </tr>
                  <tr>
                    <td><strong>Married Filing Separately</strong></td>
                    <td style={{ color: '#E03131', fontWeight: 600 }}>$0</td>
                    <td style={{ color: '#E03131', fontWeight: 600 }}>$10,000</td>
                    <td>$0</td>
                    <td>Unchanged</td>
                    <td>Backdoor Roth at nearly any income</td>
                  </tr>
                  <tr>
                    <td><strong>Contribution limit (under 50)</strong></td>
                    <td colSpan="4">$7,000 per person</td>
                    <td>Same as 2025</td>
                  </tr>
                  <tr>
                    <td><strong>Contribution limit (50+)</strong></td>
                    <td colSpan="4">$8,000 per person (includes $1,000 catch-up)</td>
                    <td>Same as 2025</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={`${styles.callout} ${styles.gold}`}>
              <p><strong>⚠️ In the Phase-Out Zone ($161K–$176K single / $236K–$246K MFJ)?</strong> You can still make a partial direct Roth contribution — but the math is complex and you risk over-contributing if your income fluctuates. Many people in the phase-out zone simply do the full backdoor Roth anyway to avoid the complexity. Consult a CPA if your income is close to the threshold.</p>
            </div>
          </section>

          <section id="steps" className={styles.section}>
            <div className={styles.sectionLabel}>Step-by-Step Process</div>
            <h2>How to Do a Backdoor Roth IRA — 5 Steps</h2>
            <p>The mechanics are straightforward. The whole process can be completed online in under an hour — most of the time is waiting for funds to settle. The critical decisions are <em>when</em> to convert and how to handle any existing pre-tax IRA balances.</p>

            <ul className={styles.stepsList}>
              <li className={styles.stepItem}>
                <div className={styles.stepNum}>1</div>
                <div className={styles.stepBody}>
                  <h4>Make a Non-Deductible Contribution to a Traditional IRA</h4>
                  <p>Contribute up to $7,000 ($8,000 if 50+) to a Traditional IRA. There is no income limit on Traditional IRA <em>contributions</em> — only on deductibility. Since you're over the income limit, this contribution is non-deductible, meaning it's made with after-tax dollars. That's exactly what you want for the backdoor Roth to work cleanly.</p>
                  <p>You can contribute for the prior tax year up until the tax-filing deadline (April 15, excluding extensions). Many people contribute and convert in the same calendar year to keep recordkeeping simple.</p>
                  <span className={styles.stepTip}>💡 Open both a Traditional IRA and a Roth IRA at the same brokerage before starting. Fidelity, Vanguard, and Schwab all support this with no fees. Same-brokerage conversions are instant.</span>
                </div>
              </li>
              <li className={styles.stepItem}>
                <div className={styles.stepNum}>2</div>
                <div className={styles.stepBody}>
                  <h4>Leave It in Cash — Do Not Invest Before Converting</h4>
                  <p>After your contribution lands in the Traditional IRA, leave the funds in the default money market or settlement fund — do not invest them in stocks, funds, or ETFs. If you invest and the value rises before you convert, you'll owe taxes on the gain. If it drops, you'll have a small loss to deal with.</p>
                  <p>Wait 1–5 business days for the contribution to fully settle before initiating the conversion. Some brokerages allow immediate conversion; check your specific platform.</p>
                  <span className={styles.stepWarning}>⚠️ If you invest the contribution and it gains value before converting, the gain is taxable — this is the most common accidental mistake. Keep it in cash until converted.</span>
                </div>
              </li>
              <li className={styles.stepItem}>
                <div className={styles.stepNum}>3</div>
                <div className={styles.stepBody}>
                  <h4>Convert the Traditional IRA to Your Roth IRA</h4>
                  <p>Log into your brokerage and initiate a Roth conversion. Select "Convert to Roth IRA," choose the amount ($7,000 or $8,000), and confirm. The funds move from your Traditional IRA to your Roth IRA — this is a <strong>taxable event</strong>, but if you convert the exact amount you contributed (with no gains), the taxable amount is $0 (or near zero) because you already paid tax on the contribution.</p>
                  <p>The key phrase to look for in your brokerage's interface: "Convert to Roth" or "Roth conversion." This is different from a withdrawal or distribution.</p>
                  <span className={styles.stepTip}>💡 At Fidelity: Accounts → Click Traditional IRA → "Convert to Roth IRA." At Vanguard: My Accounts → Transact → Convert to Roth. At Schwab: Accounts → Transfer → Roth Conversion.</span>
                </div>
              </li>
              <li className={styles.stepItem}>
                <div className={styles.stepNum}>4</div>
                <div className={styles.stepBody}>
                  <h4>File IRS Form 8606 — Both Years If Contribution and Conversion Differ</h4>
                  <p>This step is critical and often overlooked. You must file <strong>IRS Form 8606</strong> (Nondeductible IRAs) with your tax return to document your after-tax basis in the Traditional IRA. Without this form, the IRS has no record that you already paid tax on the contribution — and could tax you again on the conversion.</p>
                  <p>Part I of Form 8606 records the non-deductible contribution. Part II records the conversion. If you contribute in December and convert in January (of the next tax year), you'll file 8606 for two separate tax years. Your tax software (TurboTax, H&R Block, etc.) will guide you through this — just answer "yes" when it asks if you made a non-deductible IRA contribution.</p>
                  <span className={styles.stepWarning}>⚠️ Skipping Form 8606 is the #1 backdoor Roth recordkeeping error. The IRS has no way to know your contribution was non-deductible without it — this can result in paying tax twice on the same money.</span>
                </div>
              </li>
              <li className={styles.stepItem}>
                <div className={styles.stepNum}>5</div>
                <div className={styles.stepBody}>
                  <h4>Invest the Funds in Your Roth IRA</h4>
                  <p>Once the conversion settles in your Roth IRA (usually same day or next day), invest the funds immediately in your target allocation. Don't leave them sitting in cash. The entire point of the backdoor Roth is long-term tax-free compounding — every day in cash is a lost compounding day.</p>
                  <p>Going forward, repeat this process every year: contribute to Traditional IRA in January, convert immediately, file Form 8606. Many people set a calendar reminder for the first week of January.</p>
                  <span className={styles.stepTip}>💡 Annual timing tip: Contribute and convert in the same tax year (January is ideal) to keep everything on one Form 8606 and avoid any pro-rata complications from year-end IRA balances.</span>
                </div>
              </li>
            </ul>

            <div className={`${styles.callout} ${styles.green}`}>
              <p><strong>✅ Annual Rhythm:</strong> The cleanest backdoor Roth routine is: January 1 → contribute $7,000 to Traditional IRA → wait 3–5 days → convert entire balance to Roth IRA → invest → file Form 8606 in April. This keeps both events in the same tax year, minimizes any taxable gain, and creates a simple annual paper trail.</p>
            </div>
          </section>

          <section id="pro-rata" className={styles.section}>
            <div className={styles.sectionLabel}>The Critical Complication</div>
            <h2>The Pro-Rata Rule — The #1 Backdoor Roth Trap</h2>
            <p>The backdoor Roth is only "free" — meaning zero or near-zero taxes owed — if you have <strong>no other pre-tax money in any Traditional IRA</strong>. If you do, the IRS's pro-rata rule forces you to treat all your IRA balances as one pool and calculate taxes proportionally. This catches many high earners off guard.</p>

            <div className={styles.proRataBox}>
              <h4>Pro-Rata Rule: Two Scenarios That Determine Your Tax Bill</h4>
              <div className={styles.proRataScenario}>
                <div className={`${styles.scenarioCard} ${styles.good}`}>
                  <h5>✅ Scenario A: No Existing Pre-Tax IRAs (Clean)</h5>
                  <p><strong>Your situation:</strong> You have $0 in Traditional, SEP, or SIMPLE IRAs going into December 31.<br /><br />
                  <strong>You contribute:</strong> $7,000 non-deductible to Traditional IRA<br />
                  <strong>You convert:</strong> $7,000 to Roth IRA<br /><br />
                  <strong>Taxable amount:</strong> ~$0 (you already paid tax on the contribution)<br /><br />
                  This is the ideal scenario. Your pre-tax IRA balance on December 31 is $0, so 100% of your conversion comes from after-tax money.</p>
                </div>
                <div className={`${styles.scenarioCard} ${styles.bad}`}>
                  <h5>⚠️ Scenario B: Existing Pre-Tax IRA Balance (Pro-Rata Applies)</h5>
                  <p><strong>Your situation:</strong> You have $93,000 in a rollover Traditional IRA from an old 401(k).<br /><br />
                  <strong>You contribute:</strong> $7,000 non-deductible<br />
                  <strong>Total IRA balance:</strong> $100,000 ($93K pre-tax + $7K after-tax = 7% after-tax)<br /><br />
                  <strong>You convert $7,000:</strong> Only 7% is tax-free ($490). The remaining 93% ($6,510) is taxable as ordinary income.<br /><br />
                  The IRS treats all your IRAs as one bucket — you cannot selectively convert only the after-tax portion.</p>
                </div>
              </div>
            </div>

            <h3>Pro-Rata Formula</h3>
            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable}>
                <thead><tr><th>Variable</th><th>Description</th><th>Example (Scenario B)</th></tr></thead>
                <tbody>
                  <tr><td><strong>After-tax basis</strong></td><td>Total non-deductible contributions ever made (per Form 8606)</td><td>$7,000</td></tr>
                  <tr><td><strong>Total IRA value (Dec 31)</strong></td><td>Sum of ALL Traditional, SEP, SIMPLE IRAs at year-end</td><td>$100,000</td></tr>
                  <tr><td><strong>After-tax ratio</strong></td><td>After-tax basis ÷ Total IRA value</td><td>7% ($7K ÷ $100K)</td></tr>
                  <tr><td><strong>Tax-free conversion amount</strong></td><td>Conversion amount × after-tax ratio</td><td>$490 ($7K × 7%)</td></tr>
                  <tr><td><strong>Taxable conversion amount</strong></td><td>Conversion amount − tax-free amount</td><td>$6,510</td></tr>
                </tbody>
              </table>
            </div>

            <h3>How to Fix an Existing Pre-Tax IRA Balance</h3>
            <p>If you have a rollover IRA or other pre-tax Traditional IRA balance, you have two main solutions:</p>
            <ul className={styles.strategyList}>
              <li className={styles.strategyItem}>
                <div className={styles.strategyIcon}>🏢</div>
                <div className={styles.strategyContent}>
                  <h4>Roll Pre-Tax IRA Back Into Your 401(k) or 403(b)</h4>
                  <p>If your current employer's 401(k) or 403(b) plan accepts incoming rollovers (most do), move your pre-tax Traditional IRA balance into the employer plan before December 31. With $0 in pre-tax IRAs on December 31, your backdoor Roth conversion is clean. This is the most common and cleanest solution. Note: only pre-tax money can go back into a 401(k) — your after-tax basis stays in the IRA.</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyIcon}>📊</div>
                <div className={styles.strategyContent}>
                  <h4>Do a Full Roth Conversion of Your Entire IRA Balance</h4>
                  <p>If you're in a low-income year (career gap, early retirement, sabbatical), consider converting the entire pre-tax IRA balance to a Roth IRA in one shot. You'll owe ordinary income taxes on the pre-tax amount, but then future years' backdoor Roths will be clean. This is a significant tax event — run the numbers carefully with a CPA and consider spreading it across multiple years to avoid bracket creep.</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyIcon}>🤝</div>
                <div className={styles.strategyContent}>
                  <h4>Use a Spousal IRA If Only One Spouse Has Pre-Tax Balances</h4>
                  <p>If only one spouse has a pre-tax IRA problem, the other spouse's backdoor Roth is completely unaffected — the IRS applies the pro-rata rule per person, not per household. The spouse with no pre-tax IRA balances can do a clean backdoor Roth while the other works on resolving their pre-tax balance separately.</p>
                </div>
              </li>
            </ul>

            <div className={styles.chartBox}>
              <h3>Pro-Rata Impact: Effective Tax on $7,000 Conversion by Pre-Tax IRA Balance (32% Bracket)</h3>
              <div style={{ height: '300px' }}>
                <canvas ref={chartRef}></canvas>
              </div>
              <p className={styles.chartSource}>Assumes $7,000 non-deductible contribution, 32% federal marginal rate, no state tax. Tax owed = taxable portion of conversion × 32%. Plootus Research 2026.</p>
            </div>
          </section>

          <section id="mega" className={styles.section}>
            <div className={styles.sectionLabel}>Advanced Strategy</div>
            <h2>The Mega Backdoor Roth — Up to $69,000/Year Tax-Free</h2>
            <p>If the standard backdoor Roth's $7,000 limit feels insufficient for your savings goals, there's a more powerful version available through your 401(k): the <strong>mega backdoor Roth</strong>. It can allow up to $46,500 in additional after-tax contributions per year — on top of your regular $23,000 pre-tax limit.</p>

            <div className={styles.megaGrid}>
              <div className={`${styles.megaCard} ${styles.highlight}`}>
                <h4>Standard Backdoor Roth IRA</h4>
                <div className={styles.megaNum}>$7,000</div>
                <div className={styles.megaLabel}>Annual limit (under 50) · $8,000 with catch-up</div>
                <ul>
                  <li>Contribute to Traditional IRA (non-deductible)</li>
                  <li>Convert immediately to Roth IRA</li>
                  <li>Available at any brokerage (Fidelity, Vanguard, Schwab)</li>
                  <li>No employer plan needed</li>
                  <li>Pro-rata rule applies to existing pre-tax IRA balances</li>
                  <li>Works for self-employed, W-2, and any income level above limit</li>
                </ul>
              </div>
              <div className={styles.megaCard}>
                <h4>Mega Backdoor Roth (via 401k)</h4>
                <div className={styles.megaNum} style={{ color: '#2CB67D' }}>$46,500</div>
                <div className={styles.megaLabel}>Max additional after-tax · 2026 (plan-dependent)</div>
                <ul>
                  <li>Make after-tax (non-Roth) contributions to 401(k) above the $23,000 pre-tax limit</li>
                  <li>Convert after-tax 401(k) balance to Roth 401(k) in-plan, or roll to Roth IRA</li>
                  <li>Requires employer plan to allow: (1) after-tax contributions AND (2) in-service withdrawals or conversions</li>
                  <li>Not all plans support this — check your Summary Plan Description</li>
                  <li>Total 2026 401(k) limit (all sources): $69,000 ($76,500 if 50+)</li>
                  <li>No pro-rata rule complication for IRA balances</li>
                </ul>
              </div>
            </div>

            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable}>
                <thead><tr><th>2026 401(k) Contribution Bucket</th><th>Limit</th><th>Tax Treatment</th><th>Mega Backdoor?</th></tr></thead>
                <tbody>
                  <tr><td><strong>Employee pre-tax contributions</strong></td><td>$23,000</td><td>Pre-tax; taxable at withdrawal</td><td>No — this is standard 401(k)</td></tr>
                  <tr><td><strong>Employee catch-up (50+)</strong></td><td>+$7,500</td><td>Pre-tax or Roth depending on plan</td><td>No — standard catch-up</td></tr>
                  <tr><td><strong>Employer match/profit sharing</strong></td><td>Varies</td><td>Pre-tax; taxable at withdrawal</td><td>No — employer contribution</td></tr>
                  <tr><td><strong>After-tax employee contributions</strong></td><td style={{ color: '#2CB67D', fontWeight: 700 }}>Up to $46,500</td><td>After-tax; gains taxable if not converted</td><td style={{ color: '#2CB67D', fontWeight: 700 }}>✓ YES — this is the mega backdoor source</td></tr>
                  <tr><td><strong>Total 415(c) limit (all sources)</strong></td><td style={{ color: '#3B5BDB', fontWeight: 700 }}>$69,000</td><td>Combined cap on all contributions</td><td>—</td></tr>
                </tbody>
              </table>
            </div>

            <div className={`${styles.callout} ${styles.gold}`}>
              <p><strong>⚠️ Plan Availability:</strong> Only about 22% of 401(k) plans allow after-tax contributions, and fewer still allow in-service conversions or withdrawals needed to complete the mega backdoor Roth. Check your plan's Summary Plan Description (SPD) or call your HR department. Large tech company and self-employed Solo 401(k) plans are most likely to support this. Source: Vanguard How America Saves 2024.</p>
            </div>

            <div className={styles.inlineCta}>
              <div className={styles.inlineCtaText}><h4>Model Your Backdoor Roth in Your Full Retirement Plan</h4><p>Plootus shows how backdoor Roth contributions affect your projected retirement balance, tax liability, and RMD exposure — alongside all your other accounts.</p></div>
              <Link href="/retirement-calculator" className={styles.inlineCtaBtn}>Check Here</Link>
            </div>
          </section>

          <section id="mistakes" className={styles.section}>
            <div className={styles.sectionLabel}>What to Avoid</div>
            <h2>Backdoor Roth Mistakes That Cost Real Money</h2>
            <ul className={styles.strategyList}>
              <li className={styles.strategyItem}>
                <div className={styles.strategyIcon}>📋</div>
                <div className={styles.strategyContent}>
                  <h4>Not Filing Form 8606 — Paying Tax Twice</h4>
                  <p>The single most expensive mistake. If you don't file Form 8606 to document your non-deductible contribution, the IRS treats your entire IRA as pre-tax money. When you convert to Roth, they tax it again. You've now paid tax twice on the same $7,000. File Form 8606 every single year you make a non-deductible contribution — even if you have no other tax changes to report.</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyIcon}>💹</div>
                <div className={styles.strategyContent}>
                  <h4>Investing Before Converting — Triggering a Taxable Gain</h4>
                  <p>If you contribute $7,000, invest it in index funds, and the account grows to $7,320 before you convert, you now owe taxes on $320. Solution: keep the Traditional IRA in cash (money market) and convert within days of contribution.</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyIcon}>🗓️</div>
                <div className={styles.strategyContent}>
                  <h4>Ignoring the December 31 IRA Balance — The Pro-Rata Trap</h4>
                  <p>The pro-rata rule looks at your total pre-tax IRA balance on <strong>December 31 of the year you convert</strong> — not the year you contribute. Audit your IRA landscape before doing your first backdoor Roth.</p>
                </div>
              </li>
            </ul>
          </section>

          <section id="faq" className={styles.section}>
            <div className={styles.sectionLabel}>FAQ</div>
            <h2>Backdoor Roth IRA FAQ</h2>

            {[
              {
                q: "Is the backdoor Roth IRA still legal in 2026?",
                a: "Yes. As of 2026, the backdoor Roth IRA remains a legal, IRS-acknowledged strategy. Legislation to eliminate it did not pass. The IRS has explicitly recognized this approach in congressional committee reports accompanying the 2010 tax law that removed the $100,000 income cap on Roth conversions."
              },
              {
                q: "Do I owe taxes on a backdoor Roth conversion?",
                a: "If done correctly with no existing pre-tax IRA balances, the taxable amount is essentially $0. You've already paid income tax on that $7,000 — so the conversion produces no new taxable income, assuming no gains between contribution and conversion."
              },
              {
                q: "Can I do a backdoor Roth if I have a SEP-IRA or SIMPLE IRA?",
                a: "Yes, but those balances are subject to the pro-rata rule. SEP-IRAs and SIMPLE IRAs are treated the same as Traditional IRAs for pro-rata purposes. You'll need to either roll them into a Solo 401(k) or accept the pro-rata tax treatment."
              },
              {
                q: "Can I do a backdoor Roth for a prior year?",
                a: "Yes — you can make a Traditional IRA contribution for the prior tax year up until April 15. However, conversions are always taxable in the year they occur. You would report a prior-year contribution and a current-year conversion on two separate Form 8606s."
              }
            ].map((item, idx) => (
              <div key={idx} className={`${styles.faqItem} ${openFaq === idx ? styles.open : ''}`}>
                <button className={styles.faqQ} onClick={() => toggleFaq(idx)}>
                  {item.q} <span className={styles.faqIcon}>+</span>
                </button>
                {openFaq === idx && <div className={styles.faqA}>{item.a}</div>}
              </div>
            ))}
          </section>

          <div className={styles.sourcesBox}>
            <h4>Sources</h4>
            <p>IRS Publication 590-A · IRS Form 8606 · IRS Rev. Proc. 2025-28 · IRS Notice 2014-54 · Vanguard How America Saves 2024 · IRS Section 408(d)(2)</p>
          </div>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <h4>On This Page</h4>
            <ul className={styles.tocList}>
              <li><a href="#overview">💡 What Is It?</a></li>
              <li><a href="#limits">📊 2026 Income Limits</a></li>
              <li><a href="#steps">✅ 5-Step Process</a></li>
              <li><a href="#pro-rata">⚠️ The Pro-Rata Rule</a></li>
              <li><a href="#mega">🚀 Mega Backdoor Roth</a></li>
              <li><a href="#mistakes">🚫 Common Mistakes</a></li>
              <li><a href="#faq">❓ FAQ</a></li>
            </ul>
          </div>
          <div className={styles.ctaCard}>
            <h4>See Your Full Retirement Tax Picture</h4>
            <p>Plootus models your backdoor Roth contributions alongside your 401(k), Social Security, and projected tax brackets — free.</p>
            <Link href="/retirement-calculator" className={styles.ctaBtn}>Check Here</Link>
          </div>
          <div className={styles.sidebarCard}>
            <h4>Related Guides</h4>
            <ul className={styles.relatedLinks}>
              <li><Link href="/ira-contribution-limits">IRA Contribution Limits 2026</Link></li>
              <li><Link href="/roth-vs-traditional">Roth vs. Traditional IRA</Link></li>
              <li><Link href="/roth-conversion-strategy">Roth Conversion Strategy</Link></li>
              <li><Link href="/federal-income-tax-brackets">Tax Brackets 2026</Link></li>
              <li><Link href="/retirement-tax-guide">Retirement Tax Guide</Link></li>
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

export default BackdoorRothIra;
