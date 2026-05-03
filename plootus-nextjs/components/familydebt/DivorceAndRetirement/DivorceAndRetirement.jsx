import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Chart from 'chart.js/auto';
import { Scale, BookOpen, Calendar, AlertTriangle } from 'lucide-react';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';
import styles from './DivorceAndRetirement.module.css';

const DivorceAndRetirement = () => {
  const [activeTab, setActiveTab] = useState('family-debt');
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
          labels: ['Cash Distribution\n(Take the check)', 'QDRO Rollover to IRA\n(At age 45, held to 65)'],
          datasets: [{
            label: 'Net Value ($)',
            data: [104000, 772665],
            backgroundColor: ['rgba(224,49,49,0.82)', 'rgba(44,182,125,0.85)'],
            borderRadius: 8
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: c => '$' + c.parsed.x.toLocaleString() } }
          },
          scales: {
            x: {
              ticks: { callback: v => '$' + (v/1000).toFixed(0) + 'K', font: { family: 'Plus Jakarta Sans', size: 11 } },
              grid: { color: '#E2E8F4' }
            },
            y: { ticks: { font: { family: 'Plus Jakarta Sans', size: 11 } }, grid: { display: false } }
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
      <HubNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}><Scale size={14} /> ERISA · IRS &amp; SSA Rules · 2026</div>
          <h1>Divorce & Retirement: QDRO, Splitting Your 401(k) & Social Security After Divorce</h1>
          <p className={styles.heroSub}>Retirement accounts are often the largest marital asset — and the rules for dividing them are full of traps that permanently destroy savings. One wrong step can trigger a tax bill and penalties on money you were legally entitled to. Here's the complete guide: how a QDRO works, how to split each account type correctly, what Social Security pays after divorce, and the mistakes people make that cost them their retirement.</p>
          <div className={styles.heroMeta}>
            <span><BookOpen size={12} style={{display:'inline',verticalAlign:'middle',marginRight:4}} />Sources: ERISA, IRC §414(p), IRC §408(d)(6), SSA Publication No. 05-10084</span>
            <span><Calendar size={12} style={{display:'inline',verticalAlign:'middle',marginRight:4}} />2026 Social Security Benefit Thresholds</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}><span className={styles.statNum}>50%</span><span className={styles.statLabel}>of US Marriages End in Divorce</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>10 Years</span><span className={styles.statLabel}>Min. Marriage for SS Spousal Benefit After Divorce</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>$0</span><span className={styles.statLabel}>Tax on a Properly Executed QDRO Transfer</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>50%</span><span className={styles.statLabel}>Max Spousal SS Benefit (of Ex's Full Retirement Benefit)</span></div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent}>
          {/* OVERVIEW */}
          <section id="overview">
            <div className={styles.sectionLabel}>What's at Stake</div>
            <h2>Retirement Assets in Divorce — The Biggest Financial Decision You'll Face</h2>
            <p>In most long-term marriages, retirement accounts are the single largest financial asset — often exceeding the value of the family home. Yet the rules for dividing them are governed by a complex intersection of federal law (ERISA, the IRS code) and state family law, and the window for error is unforgiving. A mistake here isn't just inconvenient — it can permanently eliminate savings you spent decades building.</p>
            <p>The critical insight most people don't know: each account type has its own legal mechanism for division, and using the wrong one triggers taxes and penalties on money that should have transferred tax-free. QDROs apply to employer plans. A different IRS rule applies to IRAs. Pensions have their own complexity. Social Security has its own separate set of rules entirely. This guide covers all of them.</p>

            <div className={styles.keyStatsGrid}>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum}>$500B+</div>
                <div className={styles.keyStatLabel}>Estimated Retirement Assets Divided in US Divorces Annually</div>
                <div className={styles.keyStatSource}>EBRI / DOL estimates</div>
                <div className={styles.keyStatDesc}>Retirement accounts have surpassed the family home as the largest asset class in most divorces for couples over 50. "Gray divorce" (divorce after 50) has more than doubled since 1990, making retirement division more prevalent than ever.</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum}>Gray Divorce</div>
                <div className={styles.keyStatLabel}>Divorce Rate for Adults 50+ Has More Than Doubled Since 1990</div>
                <div className={styles.keyStatSource}>Pew Research Center 2022</div>
                <div className={styles.keyStatDesc}>For adults 65+, the divorce rate has roughly tripled since 1990. Gray divorce is especially damaging to retirement security — there is less time to rebuild savings, and both spouses typically face a sharp reduction in retirement income.</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum}>$0</div>
                <div className={styles.keyStatLabel}>Tax Owed on a Correctly Executed QDRO or IRA Transfer Incident to Divorce</div>
                <div className={styles.keyStatSource}>IRC §414(p); IRC §408(d)(6)</div>
                <div className={styles.keyStatDesc}>When done correctly through a QDRO (employer plans) or a "transfer incident to divorce" (IRAs), retirement assets move to a former spouse's account with no income tax and no early withdrawal penalty — regardless of the recipient's age. The tax is only paid later when money is actually withdrawn.</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum}>20–30%</div>
                <div className={styles.keyStatLabel}>Instant Loss If You Cash Out Instead of Transferring Correctly</div>
                <div className={styles.keyStatSource}>IRS withholding + penalty rules</div>
                <div className={styles.keyStatDesc}>The most common and most expensive mistake: taking a cash distribution from the plan instead of using a QDRO or IRA transfer. The plan withholds 20% for taxes, and you may owe the 10% early withdrawal penalty — permanently destroying the portion of the retirement account you were awarded.</div>
              </div>
            </div>

            <div className={`${styles.callout} ${styles.red}`}>
              <p><strong>🚨 The Most Expensive Divorce Mistake:</strong> Never accept a direct check from a retirement account as part of your divorce settlement. If the plan cuts you a check — rather than executing a QDRO or trustee-to-trustee transfer — you've just triggered a taxable distribution. The plan withholds 20%, you may owe the 10% early withdrawal penalty, and the money you intended as retirement savings is gone. Always insist on the proper legal mechanism.</p>
            </div>
          </section>

          {/* ACCOUNT TYPES */}
          <section id="account-types">
            <div className={styles.sectionLabel}>Account by Account</div>
            <h2>How Each Retirement Account Type Is Divided in Divorce</h2>
            <p>Each account type uses a different legal mechanism. Using the wrong mechanism for the wrong account type is the source of most costly mistakes. Here's the map.</p>

            <div className={styles.accountGrid}>
              <div className={styles.accountCard}>
                <div className={styles.accountIcon}>🏢</div>
                <div className={styles.accountType}>401(k), 403(b), 457(b), TSP</div>
                <div className={styles.accountMechanism} style={{ color: 'var(--blue)' }}>QDRO</div>
                <div className={styles.accountDesc}>Requires a Qualified Domestic Relations Order. The QDRO is a separate court order — not just language in your divorce decree — that the plan administrator must approve before executing the transfer.</div>
              </div>
              <div className={styles.accountCard}>
                <div className={styles.accountIcon}>🏦</div>
                <div className={styles.accountType}>Traditional IRA &amp; Roth IRA</div>
                <div className={styles.accountMechanism} style={{ color: 'var(--green)' }}>Transfer Incident to Divorce</div>
                <div className={styles.accountDesc}>No QDRO required. The divorce decree specifies the division; the receiving spouse opens an IRA and the custodian executes a direct transfer. Must be trustee-to-trustee — never a personal check.</div>
              </div>
              <div className={styles.accountCard}>
                <div className={styles.accountIcon}>🏛️</div>
                <div className={styles.accountType}>Defined Benefit Pension</div>
                <div className={styles.accountMechanism} style={{ color: 'var(--gold)' }}>QDRO (Pension)</div>
                <div className={styles.accountDesc}>Also requires a QDRO, but pension QDROs are far more complex — they must specify the benefit formula, the payment commencement date, survivor annuity options, and how to handle cost-of-living adjustments. Hire a specialist.</div>
              </div>
              <div className={styles.accountCard}>
                <div className={styles.accountIcon}>🪖</div>
                <div className={styles.accountType}>Military Retirement (DFAS)</div>
                <div className={styles.accountMechanism} style={{ color: 'var(--gold)' }}>USFSPA / Court Order</div>
                <div className={styles.accountDesc}>Governed by the Uniformed Services Former Spouses' Protection Act. Requires a separate court order — not a standard QDRO. Direct payment from DFAS available only if married 10+ years overlapping 10+ years of service.</div>
              </div>
              <div className={styles.accountCard}>
                <div className={styles.accountIcon}>🏗️</div>
                <div className={styles.accountType}>Federal Employee (FERS/CSRS)</div>
                <div className={styles.accountMechanism} style={{ color: 'var(--blue)' }}>Court Order (OPM)</div>
                <div className={styles.accountDesc}>Federal pensions are divided via a court order approved by the Office of Personnel Management (OPM). TSP accounts use a "Retirement Benefits Court Order" — different from a QDRO. Both require OPM-specific language.</div>
              </div>
              <div className={styles.accountCard}>
                <div className={styles.accountIcon}>📈</div>
                <div className={styles.accountType}>Nonqualified Deferred Comp</div>
                <div className={styles.accountMechanism} style={{ color: 'var(--red)' }}>No Standard Mechanism</div>
                <div className={styles.accountDesc}>Nonqualified plans (e.g., executive deferred compensation) are NOT subject to ERISA and do not use QDROs. Division is governed by the plan document and state law — and may not be divisible at all. Consult a specialized attorney.</div>
              </div>
            </div>

            <div className={`${styles.callout} ${styles.gold}`}>
              <p><strong>⚠️ Roth IRA Transfers in Divorce:</strong> A Roth IRA transferred to a former spouse under a divorce decree is treated as the recipient's own Roth IRA — including the original account's 5-year holding period for tax-free earnings. The recipient does not start a new 5-year clock from the transfer date. This is favorable but must be documented correctly in the divorce decree. Source: IRC §408(d)(6); IRS Publication 590-A.</p>
            </div>
          </section>

          {/* QDRO STEP BY STEP */}
          <section id="qdro">
            <div className={styles.sectionLabel}>The Key Legal Mechanism</div>
            <h2>How a QDRO Works — Step by Step</h2>
            <p>A Qualified Domestic Relations Order is a court judgment, decree, or order that recognizes a former spouse's (the "alternate payee's") right to receive all or part of the benefits payable to a plan participant. It must be "qualified" — meaning it meets specific requirements under ERISA and the plan's own terms — before the plan administrator will honor it.</p>

            <div className={styles.dataTableWrap}>
              <table className={styles.qdroTable}>
                <thead>
                  <tr><th>Step</th><th>Who Does It</th><th>What Happens</th><th>Timeline</th><th>Common Pitfall</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1. Obtain the Plan's QDRO Procedures</strong></td>
                    <td>Attorney / you</td>
                    <td>Request the plan's model QDRO form and written procedures. Every plan has different requirements — using a generic template that doesn't match the plan's terms will be rejected.</td>
                    <td>Before drafting begins</td>
                    <td>Using a one-size-fits-all QDRO template that doesn't match the specific plan's requirements</td>
                  </tr>
                  <tr>
                    <td><strong>2. Draft the QDRO</strong></td>
                    <td>Attorney (QDRO specialist recommended)</td>
                    <td>Draft the order specifying: the account to be divided, the amount or percentage, how gains/losses are allocated between entry and transfer, loan treatment, death benefits during the pendency period, and survivor annuity elections.</td>
                    <td>During divorce proceedings</td>
                    <td>Failing to address how investment gains/losses are allocated between order entry and actual transfer — the account value can change significantly during this gap</td>
                  </tr>
                  <tr>
                    <td><strong>3. Plan Administrator Pre-Approval</strong></td>
                    <td>Attorney submits draft to plan</td>
                    <td>Submit the draft QDRO to the plan administrator for review before it is entered by the court. Most plans offer this service free. This is the most important step — it ensures the QDRO meets the plan's requirements before it becomes a court order.</td>
                    <td>2–8 weeks typically</td>
                    <td>Skipping pre-approval and discovering after the court enters the order that the plan won't honor it — requiring amendment and re-entry</td>
                  </tr>
                  <tr>
                    <td><strong>4. Court Entry</strong></td>
                    <td>Judge signs the order</td>
                    <td>The QDRO is signed by the court as part of or after the divorce decree. It is now a court order. Important: the QDRO can be entered separately from the divorce decree — and should be, to avoid delay.</td>
                    <td>At or after divorce finalization</td>
                    <td>Waiting to finalize the QDRO until after the divorce is complete and then losing momentum — the account can change significantly and the participant's cooperation may be harder to obtain</td>
                  </tr>
                  <tr>
                    <td><strong>5. Submission to Plan Administrator</strong></td>
                    <td>Either party or attorney</td>
                    <td>Submit the signed, certified QDRO to the plan administrator. The plan reviews for qualification (18-month window under ERISA). The account is typically segregated (frozen) during the review period to protect the alternate payee.</td>
                    <td>2–6 weeks for review</td>
                    <td>Submitting a QDRO to the wrong plan — especially common when participants have multiple employer plans</td>
                  </tr>
                  <tr>
                    <td><strong>6. Transfer to Alternate Payee's Account</strong></td>
                    <td>Plan administrator</td>
                    <td>Once approved, the plan transfers the specified amount to the alternate payee. The alternate payee can: (a) keep it in the plan if allowed, (b) roll it to their own IRA (most common), or (c) take a cash distribution (triggers taxes — avoid if possible).</td>
                    <td>30–90 days after approval</td>
                    <td>Taking a cash distribution instead of rolling to an IRA — triggers income taxes plus possible 10% penalty</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={styles.callout}>
              <p><strong>💡 Special QDRO Rule — No Early Withdrawal Penalty:</strong> When an alternate payee (the non-participant spouse) receives a distribution from a QDRO and takes it as a cash distribution, the 10% early withdrawal penalty does NOT apply — regardless of age. Income taxes are still owed. Rolling the QDRO distribution into an IRA defers both. This penalty exception applies only to the alternate payee, not the participant. Source: IRC §72(t)(2)(C).</p>
            </div>

            <div className={styles.chartBox}>
              <h3>QDRO vs. Cash-Out: What a $200,000 401(k) Award Actually Delivers (Age 45, 24% Federal Bracket)</h3>
              <canvas ref={chartRef} height="220"></canvas>
              <p className={styles.chartSource}>Cash-out scenario: 20% mandatory withholding + 24% federal income tax at filing + 5% state tax est. QDRO rollover scenario: $0 tax now, full $200,000 compounding at 7% annually to age 65. Plootus Research 2026 — for illustration only.</p>
            </div>
          </section>

          {/* SOCIAL SECURITY RULES */}
          <section id="social-security">
            <div className={styles.sectionLabel}>Social Security Rules</div>
            <h2>Social Security Benefits After Divorce — What You're Entitled To</h2>
            <p>Social Security has a little-known but powerful provision for divorced spouses. If you were married long enough, you may be able to collect a benefit based on your ex-spouse's earnings record — even if they've remarried, even if they haven't claimed yet, and completely without their knowledge or consent. Your claim does not reduce their benefit or their current spouse's benefit by one cent.</p>

            <div className={styles.dataTableWrap}>
              <table className={styles.ssTable}>
                <thead>
                  <tr>
                    <th>Eligibility Rule</th>
                    <th>Requirement</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Minimum marriage length</strong></td>
                    <td style={{ color: 'var(--blue)', fontWeight: 600 }}>10 years</td>
                    <td>Must have been married for at least 10 years. This is a hard cutoff — 9 years and 11 months does not qualify. Measured by the date of divorce, not the date you stopped living together.</td>
                  </tr>
                  <tr>
                    <td><strong>Your current marital status</strong></td>
                    <td style={{ color: 'var(--blue)', fontWeight: 600 }}>Currently unmarried</td>
                    <td>You must be currently unmarried to claim on an ex-spouse's record. If you remarry, you lose the ex-spousal benefit — but regain it if that subsequent marriage ends.</td>
                  </tr>
                  <tr>
                    <td><strong>Your age</strong></td>
                    <td>At least age 62</td>
                    <td>You can claim as early as 62, but the benefit is reduced (like your own benefit). Waiting until your full retirement age (66–67 depending on birth year) gives you the full 50%.</td>
                  </tr>
                  <tr>
                    <td><strong>Your ex-spouse's status</strong></td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>Need not have claimed yet</td>
                    <td>If divorced for at least 2 years, you can claim your divorced spousal benefit even if your ex hasn't started collecting. This is different from the rule for current spouses, who must wait for the worker to claim.</td>
                  </tr>
                  <tr>
                    <td><strong>Your own benefit vs. divorced spousal benefit</strong></td>
                    <td>SSA pays the higher amount</td>
                    <td>The SSA compares your own retirement benefit to 50% of your ex's full retirement benefit and pays the higher of the two. You cannot "stack" both — it's one or the other.</td>
                  </tr>
                  <tr>
                    <td><strong>Maximum divorced spousal benefit</strong></td>
                    <td style={{ color: 'var(--blue)', fontWeight: 600 }}>50% of ex's FRA benefit</td>
                    <td>The maximum is 50% of your ex-spouse's Primary Insurance Amount (PIA) — their benefit at full retirement age. If your ex delays claiming to age 70 and gets an 8%/year delayed credit, you do NOT share in that increase.</td>
                  </tr>
                  <tr>
                    <td><strong>Impact on your ex's benefit</strong></td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>$0 reduction</td>
                    <td>Your claim on their record has absolutely no effect on their monthly benefit, their current spouse's spousal benefit, or any other benefits paid on their record.</td>
                  </tr>
                  <tr>
                    <td><strong>Survivor benefit (ex-spouse dies)</strong></td>
                    <td>Up to 100% of ex's benefit</td>
                    <td>If your ex-spouse dies, you may be eligible for a divorced survivor benefit of up to 100% of what they were receiving (or entitled to receive), if you were married 10+ years and meet the other requirements.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Social Security Strategy After Divorce</h3>
            <p>If you're eligible for both your own retirement benefit and a divorced spousal benefit, the SSA automatically pays your own benefit first. If the divorced spousal benefit is larger, SSA pays the difference as an additional amount. The key strategic decisions are:</p>

            <ul className={styles.strategyList}>
              <li className={styles.strategyItem}><div className={styles.strategyIcon}>📅</div><div className={styles.strategyContent}><h4>Claim Early on Your Ex's Record, Delay Your Own</h4><p>If your own benefit will be significantly larger than 50% of your ex's, consider whether it makes sense to claim the divorced spousal benefit at 62 (at a reduced rate) while delaying your own benefit to age 70. The rules for restricted application changed in 2016 — consult an SSA specialist or financial advisor to model the optimal claiming sequence for your specific situation.</p></div></li>
              <li className={styles.strategyItem}><div className={styles.strategyIcon}>📞</div><div className={styles.strategyContent}><h4>Apply Proactively — SSA Won't Tell You You're Eligible</h4><p>The Social Security Administration does not automatically notify divorced spouses of their eligibility or calculate the divorced spousal benefit unprompted. You must apply and specifically request consideration for benefits on your ex-spouse's record. Bring your marriage certificate, divorce decree, and your ex-spouse's Social Security number to the SSA office or apply at SSA.gov.</p></div></li>
              <li className={styles.strategyItem}><div className={styles.strategyIcon}>🔒</div><div className={styles.strategyContent}><h4>Your Ex's Remarriage Has No Effect on Your Benefit</h4><p>Many divorced spouses mistakenly believe they lose their entitlement if their ex remarries. They do not. Your divorced spousal benefit is completely independent of what happens in your ex-spouse's life after your divorce. Their new spouse may also claim spousal benefits on the same record — the SSA pays all eligible claimants without reduction.</p></div></li>
            </ul>


          </section>

          {/* IRA DIVISION */}
          <section id="ira-division">
            <div className={styles.sectionLabel}>IRA-Specific Rules</div>
            <h2>Dividing IRAs in Divorce — No QDRO Required, But Get It Right</h2>
            <p>IRAs (Traditional and Roth) are not employer plans and are therefore not subject to ERISA — which means no QDRO is needed. Instead, IRA division in divorce is governed by IRC §408(d)(6), which creates a special "transfer incident to divorce" exception. This is simpler than a QDRO in some ways, but has its own critical rules.</p>

            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable}>
                <thead>
                  <tr><th>Rule</th><th>Requirement</th><th>What Happens If You Violate It</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>The divorce decree must specify the division</strong></td>
                    <td>The divorce decree or separation agreement must explicitly describe which IRA is being divided, the amount or percentage, and identify it as a "transfer incident to divorce"</td>
                    <td>If the transfer isn't properly documented as incident to divorce, the IRS may treat it as a regular distribution — taxable to the owner and subject to the 10% penalty</td>
                  </tr>
                  <tr>
                    <td><strong>Must be a trustee-to-trustee transfer</strong></td>
                    <td>The IRA custodian transfers directly to the receiving spouse's IRA. The receiving spouse must open their own IRA first — either at the same institution or a different one.</td>
                    <td>If a check is made payable to the receiving spouse personally, it triggers a taxable distribution with 10% penalty if the owner is under 59½, and must be rolled over within 60 days</td>
                  </tr>
                  <tr>
                    <td><strong>The receiving spouse needs their own IRA</strong></td>
                    <td>The receiving spouse must have an IRA account open (same type — Traditional to Traditional, Roth to Roth) for the transfer to land in</td>
                    <td>Cannot receive the transfer without an existing account — the custodian will not create the account for you automatically</td>
                  </tr>
                  <tr>
                    <td><strong>Roth IRA 5-year clock</strong></td>
                    <td>The receiving spouse inherits the original Roth IRA's 5-year holding period, not a new one starting at the transfer date</td>
                    <td>If the Roth IRA was opened 3 years ago, the receiving spouse needs only 2 more years to satisfy the 5-year rule — not a fresh 5 years</td>
                  </tr>
                  <tr>
                    <td><strong>No tax at transfer</strong></td>
                    <td>A properly executed transfer incident to divorce is completely tax-free to both spouses at the time of transfer</td>
                    <td>Taxes are paid when the receiving spouse eventually withdraws — subject to their own tax situation at that time</td>
                  </tr>
                  <tr>
                    <td><strong>After transfer, it's their IRA</strong></td>
                    <td>Once transferred, the assets are treated as the receiving spouse's own IRA — subject to their age for RMD and withdrawal purposes</td>
                    <td>N/A — this is the intended outcome</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* PENSIONS */}
          <section id="pensions">
            <div className={styles.sectionLabel}>Defined Benefit Plans</div>
            <h2>Pension Division in Divorce — The Most Complex Asset</h2>
            <p>Defined benefit pensions are among the most valuable and most difficult retirement assets to divide in a divorce. Unlike a 401(k) with a clear account balance, a pension's value depends on future employment, salary growth, retirement age, and actuarial assumptions. Courts divide pensions in two main ways — and which method applies has enormous financial implications.</p>

            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable}>
                <thead>
                  <tr><th>Division Method</th><th>How It Works</th><th>Advantage</th><th>Disadvantage</th><th>Best When</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Deferred Distribution (Shared Payment)</strong></td>
                    <td>The alternate payee receives a share of each pension payment when the participant retires. The QDRO specifies a formula — e.g., "50% of the marital portion."</td>
                    <td>Alternate payee shares in future salary growth and benefit improvements; no need to value the pension at divorce</td>
                    <td style={{ color: 'var(--red)' }}>Alternate payee must wait for participant to retire; alternate payee is exposed to participant's decisions about retirement timing</td>
                    <td>Younger participants with significant future benefit growth potential; long marriages where full marital period is being divided</td>
                  </tr>
                  <tr>
                    <td><strong>Offset Method</strong></td>
                    <td>The pension is valued at the time of divorce (using actuarial present value), and the participant keeps the pension in exchange for giving up other assets of equal value (e.g., more home equity).</td>
                    <td style={{ color: 'var(--green)' }}>Clean break — each party walks away with independent assets; no ongoing financial relationship</td>
                    <td>Pension valuation is complex and expensive; alternate payee gives up guaranteed income for assets that could decline in value</td>
                    <td>Participant near retirement; mutual desire for financial independence; or when the alternate payee prefers liquid assets</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={`${styles.callout} ${styles.gold}`}>
              <p><strong>⚠️ The "Coverture Fraction" — Marital vs. Non-Marital Pension Benefits:</strong> Most pensions accrued partially before the marriage and partially during it. Courts use a "coverture fraction" to calculate the marital portion: years of plan participation during the marriage ÷ total years of plan participation at retirement. Only the marital portion is subject to division. Make sure your QDRO specifies whether it's dividing the full benefit or the marital portion only — this distinction can represent hundreds of thousands of dollars.</p>
            </div>
          </section>

          {/* PROTECT YOURSELF */}
          <section id="planning">
            <div className={styles.sectionLabel}>Protect Yourself</div>
            <h2>Protecting Your Retirement in a Divorce — Critical Steps</h2>
            <ul className={styles.strategyList}>
              <li className={styles.strategyItem}><div className={styles.strategyIcon}>📋</div><div className={styles.strategyContent}><h4>Get a Complete Inventory of All Retirement Assets Before Negotiating</h4><p>Request account statements for every retirement account — 401(k)s, IRAs, pensions, deferred compensation, stock options, and any non-qualified plans. In discovery, you're entitled to these. For pensions, request a Summary Plan Description and a benefit estimate statement from HR or the plan administrator. Hidden retirement assets are one of the most common forms of financial concealment in divorce.</p></div></li>
              <li className={styles.strategyItem}><div className={styles.strategyIcon}>⚡</div><div className={styles.strategyContent}><h4>File a QDRO (or IRA Transfer) Alongside — Not After — Your Divorce</h4><p>Many people finalize their divorce decree and then lose momentum on executing the QDRO or IRA transfer. During this gap, the account continues to fluctuate in value, the participant may take loans against it, name a new beneficiary, or — if they die — the account passes to whoever is named beneficiary, not you. File the QDRO as close to simultaneously with the divorce decree as possible. Some attorneys file both on the same day.</p></div></li>
              <li className={styles.strategyItem}><div className={styles.strategyIcon}>💀</div><div className={styles.strategyContent}><h4>Address Survivor Benefits Explicitly in the QDRO</h4><p>If the participant dies before retiring, what happens to your QDRO-awarded pension benefit depends entirely on whether the QDRO addresses survivor benefits. A pension QDRO should designate the alternate payee as the "surviving spouse" equivalent for pre-retirement death benefit purposes. Without this language, the participant can name a new spouse as beneficiary and the alternate payee gets nothing. This language is often overlooked in pension QDROs and costs former spouses their entire pension entitlement.</p></div></li>
              <li className={styles.strategyItem}><div className={styles.strategyIcon}>🔄</div><div className={styles.strategyContent}><h4>Update All Beneficiary Designations Immediately After Divorce</h4><p>Federal law (ERISA) governs retirement account beneficiary designations, and in most cases, a divorce does NOT automatically revoke a former spouse's beneficiary designation on a 401(k) or IRA. (This is different from the rule for wills, where many states automatically revoke a former spouse.) If you don't update your beneficiary forms, your ex-spouse may still receive your retirement accounts at death — even years after the divorce. Update every form the day your divorce is final.</p></div></li>
              <li className={styles.strategyItem}><div className={styles.strategyIcon}>👩‍⚖️</div><div className={styles.strategyContent}><h4>Hire a QDRO Specialist — Not Just a Divorce Attorney</h4><p>General family law attorneys handle QDROs regularly, but pension QDROs and complex executive compensation divisions often require a specialist — either a pension actuary or an attorney who specializes exclusively in retirement plan division. QDRO specialists typically charge $500–$1,500 for a straightforward 401(k) QDRO; pension QDROs can run $2,000–$5,000+. Given that you may be dividing a $500,000+ asset, this is one of the highest-ROI professional services in a divorce.</p></div></li>
              <li className={styles.strategyItem}><div className={styles.strategyIcon}>📊</div><div className={styles.strategyContent}><h4>Don't Accept a 50/50 Split Without Understanding the After-Tax Value</h4><p>A $200,000 Traditional 401(k) and a $200,000 Roth IRA are not equal in after-tax value. The Traditional 401(k) is fully taxable on withdrawal; the Roth IRA is tax-free. A fair after-tax split would give you more of the Roth. Similarly, a defined benefit pension promising $3,000/month is worth very different amounts depending on actuarial assumptions. Hire a financial advisor or actuary to model after-tax equivalents before agreeing to any split.</p></div></li>
            </ul>
          </section>

          {/* FAQ */}
          <section id="faq">
            <div className={styles.sectionLabel}>FAQ</div>
            <h2>Divorce &amp; Retirement FAQ</h2>
            {[
              { q: "What is a QDRO and do I need one?", a: "A Qualified Domestic Relations Order (QDRO) is a court order that divides an employer-sponsored retirement plan (401k, 403b, 457b, pension) between a plan participant and an alternate payee (former spouse). You need a QDRO for any employer plan — it is the only legal mechanism that allows the plan administrator to pay benefits to someone other than the participant without triggering taxes and penalties. You do NOT need a QDRO for IRAs — those use a different IRS mechanism called a \"transfer incident to divorce.\" Federal, military, and some state government plans use their own court order mechanisms, not a standard QDRO." },
              { q: "Will I owe taxes on my QDRO distribution?", a: "Not at the time of transfer. A properly executed QDRO transfer is a non-taxable event — the assets move from the plan to the alternate payee's account with no income tax and no early withdrawal penalty. However, taxes are deferred, not eliminated. When the alternate payee eventually withdraws from the account, they pay ordinary income tax at their own rate. If the alternate payee rolls the QDRO distribution into a Traditional IRA, taxes are deferred until IRA withdrawals. If they take a cash distribution, income taxes are owed immediately — but uniquely, the 10% early withdrawal penalty does NOT apply to an alternate payee receiving a QDRO distribution (regardless of age), per IRC §72(t)(2)(C)." },
              { q: "How is Social Security affected by divorce?", a: "Social Security has specific provisions for divorced spouses. If you were married for at least 10 years, are currently unmarried, and are at least 62, you may be eligible for a divorced spousal benefit of up to 50% of your ex-spouse's full retirement benefit. If your ex-spouse is deceased, you may qualify for a divorced survivor benefit of up to 100% of what they were receiving. Your claim has absolutely no effect on your ex's benefit or their new spouse's benefit. The SSA will pay whichever is higher — your own benefit or the divorced spousal/survivor benefit. Apply at SSA.gov or a local SSA office with your marriage certificate, divorce decree, and ex-spouse's Social Security number." },
              { q: "Can my ex-spouse take my 401(k) without a QDRO?", a: "No — a divorce decree alone is not sufficient to transfer 401(k) assets. Plan administrators are governed by ERISA, which requires a QDRO specifically. Even if your divorce decree says your ex is entitled to half your 401(k), the plan administrator will not honor it without a separately filed and approved QDRO. This cuts both ways: if your divorce decree awards you a share of your ex's 401(k) but no QDRO is ever filed, you have no enforceable claim against the plan — only against your ex personally, through the courts." },
              { q: "What happens to my 401(k) loan if I get divorced?", a: "An outstanding 401(k) loan is a complication in divorce. The loan is generally treated as a marital debt — meaning it reduces the account's net value for division purposes. If the QDRO transfers a percentage of the account balance, the alternate payee typically gets their percentage of the gross balance minus the loan. If the loan defaults after divorce (e.g., the participant leaves their job), the defaulted amount becomes a taxable distribution — taxable to the plan participant only, not the alternate payee. Make sure your QDRO specifies how outstanding loans are treated and who bears the risk of a future loan default." },
              { q: "Does the 10-year Social Security marriage requirement include legal separation?", a: "The 10-year requirement is measured by the length of the legal marriage — from the date of the marriage certificate to the date the divorce is legally final. Legal separation is not divorce — if you are legally separated but not divorced, you are still \"married\" for Social Security purposes. The date of divorce decree is what the SSA uses. If you are approaching the 10-year mark and considering divorce, the SSA eligibility for divorced spousal benefits is one of several financial factors worth considering in your timing — though consult a family law attorney for all implications." },
              { q: "My ex didn't disclose their pension during divorce. What can I do?", a: "Non-disclosure of marital assets (including retirement accounts and pensions) is fraud and can be grounds to reopen a divorce settlement in most states. Options include: filing a motion to reopen the divorce based on fraud or misrepresentation, conducting discovery through subpoenas for financial records, hiring a forensic accountant to trace assets, and petitioning the court for additional equitable relief. For pensions specifically, you can contact the plan administrator directly — under ERISA, you generally have the right to request information about your ex's benefit as a potential alternate payee. Act quickly, as statutes of limitations apply. Consult a family law attorney immediately." }
            ].map((faq, index) => (
              <div key={index} className={`${styles.faqItem} ${openFaq === index ? styles.open : ''}`}>
                <button className={styles.faqQ} onClick={() => toggleFaq(index)}>
                  {faq.q} <span className={styles.faqIcon}>+</span>
                </button>
                {openFaq === index && <div className={styles.faqA}>{faq.a}</div>}
              </div>
            ))}
          </section>

          <div className={styles.sourcesBox}>
            <h4>Sources</h4>
            <p>ERISA §206(d)(3) (QDRO requirements) · IRC §414(p) (qualified domestic relations orders) · IRC §408(d)(6) (IRA transfer incident to divorce) · IRC §72(t)(2)(C) (no early withdrawal penalty for QDRO alternate payee distributions) · SSA Publication No. 05-10084 (Benefits for Divorced Spouses) · Uniformed Services Former Spouses' Protection Act (10 USC §1408) · Pew Research Center — "The Gray Divorce Revolution" (2022) · IRS Publication 504 (Divorced or Separated Individuals) · IRS Publication 590-A (Contributions to IRAs — divorce rules) · EBRI / DOL retirement asset division estimates</p>
          </div>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <h4>On This Page</h4>
            <ul className={styles.tocList}>
              <li><a href="#overview">What's at Stake</a></li>
              <li><a href="#account-types">Account by Account</a></li>
              <li><a href="#qdro">How a QDRO Works</a></li>
              <li><a href="#social-security">Social Security Rules</a></li>
              <li><a href="#ira-division">Dividing IRAs</a></li>
              <li><a href="#pensions">Pension Division</a></li>
              <li><a href="#planning">Protect Yourself</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className={styles.ctaCard}>
            <h4>What's my retirement number?</h4>
            <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
            <Link href="/retirement-calculator" className={styles.ctaBtn}>Check Here</Link>
          </div>
          <div className={styles.sidebarCard}>
            <h4>Related Guides</h4>
            <ul className={styles.relatedLinks}>
              <li><Link href="/social-security-benefits">Social Security Benefits Guide</Link></li>
              <li><Link href="/401k-rollover-guide">401(k) Rollover Guide</Link></li>
              <li><Link href="/estate-planning-basics">Estate Planning Basics</Link></li>
              <li><Link href="/ira-contribution-limits">IRA Contribution Limits 2026</Link></li>
              <li><Link href="/retirement-planning">Retirement Planning Guide</Link></li>
              <li><Link href="/average-401k-balance-by-age">Average 401(k) Balance by Age</Link></li>
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

export default DivorceAndRetirement;
