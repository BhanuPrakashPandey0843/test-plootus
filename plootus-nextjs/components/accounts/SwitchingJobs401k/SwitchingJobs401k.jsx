import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './SwitchingJobs401k.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const SwitchingJobs401k = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('');

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "How long do I have to roll over my 401(k) after leaving a job?",
      a: "For a direct rollover (trustee-to-trustee transfer), there is technically no deadline — the money moves directly from your old plan to your new account without going through your hands. However, you should initiate the rollover within 30–60 days to avoid the account being auto-distributed if your balance falls below $5,000. If your employer sends you a check directly (indirect rollover), you have exactly 60 days to deposit the full original amount (including the 20% that was withheld) into a qualifying retirement account, or the withheld portion becomes a permanent taxable distribution."
    },
    {
      q: "What happens to my 401(k) if I get laid off?",
      a: "A layoff triggers the same rules as a voluntary resignation — your own contributions remain fully yours, employer contributions vest per your plan's schedule, and you have the same four options (roll to IRA, roll to new 401(k), leave it, or cash out). One important exception: if you are laid off or otherwise separated from service in the year you turn 55 or older, the 10% early withdrawal penalty does not apply to distributions from that employer's plan (the \"Rule of 55\"). This only applies to the plan at the employer you separated from, not to IRAs or other old 401(k)s."
    },
    {
      q: "Should I roll my 401(k) into an IRA or my new employer's plan?",
      a: "Both are good options — the right choice depends on your specific situation. Choose a new employer 401(k) if: the plan has genuinely low-cost index funds (expense ratios under 0.10%), you want ERISA creditor protection, or you may need to borrow against it via a 401(k) loan. Choose an IRA rollover if: you want more investment flexibility, your new plan has high fees, you don't yet have a new employer, or you want to consolidate multiple old accounts. Check the expense ratio disclosure before deciding — a seemingly small fee difference of 0.50% vs. 0.05% costs $44,000 on a $100,000 balance over 20 years at 7% growth."
    },
    {
      q: "Can I roll my 401(k) into a Roth IRA instead of a Traditional IRA?",
      a: "Yes — but this triggers a Roth conversion. The pre-tax amount you convert is added to your taxable income in the year of conversion and taxed at your ordinary income tax rate. There is no 10% penalty on conversions (only on early withdrawals), but the tax bill can be substantial on a large balance. This can make sense if you're in a low-income year (career gap, extended gap between jobs) and expect to be in a higher bracket in retirement. If your 401(k) had a Roth 401(k) component (after-tax contributions), those funds can roll into a Roth IRA without triggering additional taxes. Always consult a CPA before doing a large Roth conversion."
    },
    {
      q: "What is the Rule of 55 and does it apply to me?",
      a: "The Rule of 55 is an IRS exception that allows you to take penalty-free withdrawals from the 401(k) plan at the employer you separated from, starting in the calendar year you turn 55 (age 50 for certain public safety employees). It removes the 10% early withdrawal penalty — but you still owe ordinary income taxes on withdrawals. It only applies to the plan at that specific employer, not to IRAs or old 401(k)s from previous employers. This rule is most relevant for early retirees or people who are laid off in their mid-to-late 50s who need bridge income before reaching 59½. If you roll the money into an IRA, you lose the Rule of 55 protection — so if you might need this flexibility, consider leaving the money in the employer plan until 59½."
    },
    {
      q: "Does my employer have to tell me about my rollover options?",
      a: "Yes — under ERISA regulations, your plan administrator must provide you with a rollover notice (often called a \"Special Tax Notice Regarding Plan Payments\" or \"402(f) notice\") at least 30 days before making a distribution, explaining your rollover rights and tax consequences. In practice, this notice is often buried in the distribution paperwork. Read it carefully — it will specify the direct rollover process, any applicable deadlines, and the tax withholding rules for your specific plan. If you don't receive this notice, ask HR for it explicitly."
    },
    {
      q: "Can I contribute to my old 401(k) after I've left the company?",
      a: "No — you cannot make new contributions to a former employer's 401(k) plan after your last paycheck. Contributions are only made via payroll deduction from active employment. If you leave mid-year, your final contributions will be whatever was taken from your last paycheck(s). After that, the account can still grow through investment returns, but no new money can be added. This is one reason rolling over to an IRA or new 401(k) makes long-term sense — those accounts can receive ongoing contributions."
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>What to Do With Your 401(k) When Changing Jobs (2026) | Plootus</title>
        <meta name="description" content="Changing jobs? Here's exactly what to do with your 401(k) — all four options compared, vesting schedules explained, 401(k) loan rules, forced cashout thresholds, and the true cost of cashing out early." />
        <link rel="canonical" href="https://www.plootus.com/switching-jobs-401k" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "What to Do With Your 401(k) When Changing Jobs (2026)",
            "description": "All four options for your 401(k) when leaving an employer — vesting schedules, 401k loan rules, rollover steps, and the true cost of cashing out early.",
            "url": "https://www.plootus.com/switching-jobs-401k",
            "author": {"@type":"Organization","name":"Plootus"},
            "publisher": {"@type":"Organization","name":"Plootus","url":"https://www.plootus.com"},
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": faqData.map(item => ({
                "@type": "Question",
                "name": item.q,
                "acceptedAnswer": { "@type": "Answer", "text": item.a }
              }))
            }
          })
        }} />
      </Head>

      <HubNav activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>💼 DOL &amp; IRS Rules · 2026 Updated</div>
          <h1>What to Do With Your 401(k) When Changing Jobs (2026)</h1>
          <p className={styles.heroSub}>Switching employers is one of the most consequential moments for your retirement savings. You have four options — and one of them quietly destroys up to 40% of your balance overnight. Here's everything you need to make the right call, including vesting rules, loan traps, forced-cashout thresholds, and the rollover process step by step.</p>
          <div className={styles.heroMeta}>
            <span>📚 Sources: IRS Publication 575, DOL ERISA rules, Vanguard How America Saves 2024</span>
            <span>🗓️ 2026 IRS Thresholds &amp; Rules</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}><span className={styles.statNum}>12×</span><span className={styles.statLabel}>Avg. Times Americans Change Jobs in a Career</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>41%</span><span className={styles.statLabel}>of Job-Changers Cash Out at Least Once</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>30–40%</span><span className={styles.statLabel}>Immediate Loss If You Cash Out Early</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>$1,650</span><span className={styles.statLabel}>Forced-Cashout Threshold (Under $1K)</span></div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent}>

          <section id="overview">
            <div className={styles.sectionLabel}>The Decision at a Glance</div>
            <h2>Your 401(k) When You Leave: Why This Matters More Than It Seems</h2>
            <p>Every time you change jobs you trigger a decision about the retirement savings you've been building — and the stakes are higher than most people realize. Americans change jobs an average of 12 times over a career, meaning this choice comes up repeatedly. The compounding effect of getting it right (or wrong) each time adds up to hundreds of thousands of dollars by retirement.</p>
            <p>The single most important thing to know upfront: <strong>your own contributions are always 100% yours</strong>. It's the employer match that has strings attached via vesting schedules. Check your vesting status before giving notice — in some cases, staying a few more weeks means keeping tens of thousands of dollars you'd otherwise forfeit.</p>

            <div className={styles.keyStatsGrid}>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum}>$92 Billion</div>
                <div className={styles.keyStatLabel}>401(k) Assets Cashed Out Prematurely Every Year</div>
                <div className={styles.keyStatSource}>DOL / Vanguard estimates</div>
                <div className={styles.keyStatDesc}>Most cashouts happen at job changes — often on small balances where the pain feels manageable. Across a career with 12 job changes, repeated cashouts compound into a catastrophic retirement shortfall.</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum}>24 Million</div>
                <div className={styles.keyStatLabel}>Forgotten 401(k) Accounts Currently Abandoned</div>
                <div className={styles.keyStatSource}>Capitalize / GAO Report 2023</div>
                <div className={styles.keyStatDesc}>Over $1.65 trillion sits in forgotten accounts with former employers. Many of these accounts charge ongoing fees and erode in value. Consolidation via rollover is the most overlooked financial hygiene move.</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum}>$470,000</div>
                <div className={styles.keyStatLabel}>Lost Growth from a $25K Early Cashout at Age 30</div>
                <div className={styles.keyStatSource}>Plootus calculation — 7% growth, age 65</div>
                <div className={styles.keyStatDesc}>A $25,000 account cashed out at 30 leaves you with ~$16,250 after the 20% withholding and 10% penalty. The remaining $8,750 that went to taxes and penalties would have grown to an additional $188,000+ by age 65.</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum}>$5,000</div>
                <div className={styles.keyStatLabel}>Threshold Below Which Former Employers Can Force You Out</div>
                <div className={styles.keyStatSource}>ERISA / DOL rules 2026</div>
                <div className={styles.keyStatDesc}>If your vested balance is under $1,000, your former employer can cut you a check with no notice (triggering tax and penalty). Between $1,000–$5,000, they can roll it into a default IRA of their choosing. Act fast on small balances.</div>
              </div>
            </div>

            <div className={styles.calloutRed}>
              <p><strong>⚠️ Check Your Vesting Status Before You Resign:</strong> Many employer matches vest over 3–6 years. Leaving even a few weeks before your vesting cliff date can cost you the entire employer contribution. Log in to your plan portal and check your vesting schedule — it's listed in your Summary Plan Description (SPD) or online account.</p>
            </div>
          </section>

          <section id="options">
            <div className={styles.sectionLabel}>Your Four Choices</div>
            <h2>All Four 401(k) Options When You Leave an Employer</h2>
            <p>When you leave a job, you have exactly four things you can do with your 401(k). Three of them preserve your savings — one permanently destroys a significant portion of it. Here's the honest comparison.</p>

            <div className={styles.optionGrid}>
              <div className={`${styles.optionCard} ${styles.optGreen}`}>
                <div className={styles.optionIcon}>🏦</div>
                <span className={`${styles.optionLabel} ${styles.labelGreen}`}>✓ Best for Most People</span>
                <div className={styles.optionTitle}>Roll Into a Traditional IRA</div>
                <div className={`${styles.optionVerdict} ${styles.verdictGreen}`}>$0 Tax</div>
                <div className={styles.optionVerdictLabel}>Owed on a properly executed direct rollover</div>
                <ul className={styles.optionDetails}>
                  <li className={styles.pro}>No income taxes or penalties if done as a direct rollover</li>
                  <li className={styles.pro}>Access to thousands of investment options — not just plan menu</li>
                  <li className={styles.pro}>Lower expense ratios available (index funds, ETFs)</li>
                  <li className={styles.pro}>Works even without a new job or during a gap in employment</li>
                  <li className={styles.pro}>Can consolidate multiple old 401(k)s into one account</li>
                  <li className={styles.con}>Loses ERISA creditor protection (state IRA protection varies)</li>
                  <li className={styles.con}>Cannot borrow against an IRA (no loans available)</li>
                  <li className={styles.note}>Open the IRA first, then request a direct rollover from your plan</li>
                </ul>
              </div>

              <div className={`${styles.optionCard} ${styles.optBlue}`}>
                <div className={styles.optionIcon}>🏢</div>
                <span className={`${styles.optionLabel} ${styles.labelBlue}`}>✓ Good If Plan Is Strong</span>
                <div className={styles.optionTitle}>Roll Into New Employer's 401(k)</div>
                <div className={`${styles.optionVerdict} ${styles.verdictBlue}`}>$0 Tax</div>
                <div className={styles.optionVerdictLabel}>Owed — same protection, everything in one place</div>
                <ul className={styles.optionDetails}>
                  <li className={styles.pro}>No taxes or penalties on a direct rollover</li>
                  <li className={styles.pro}>Strongest creditor protection under federal ERISA law</li>
                  <li className={styles.pro}>Can borrow against balance (if plan allows 401k loans)</li>
                  <li className={styles.pro}>Delays RMDs if still working past age 73</li>
                  <li className={styles.pro}>One account — simple to manage and track</li>
                  <li className={styles.con}>Limited to new plan's investment menu (may have high fees)</li>
                  <li className={styles.con}>New employer's plan must accept incoming rollovers (confirm first)</li>
                  <li className={styles.note}>Ask HR whether the plan accepts rollovers and what the process is</li>
                </ul>
              </div>

              <div className={`${styles.optionCard} ${styles.optGold}`}>
                <div className={styles.optionIcon}>📁</div>
                <span className={`${styles.optionLabel} ${styles.labelGold}`}>⚠ Use With Caution</span>
                <div className={styles.optionTitle}>Leave It With Your Former Employer</div>
                <div className={`${styles.optionVerdict} ${styles.verdictGold}`}>OK</div>
                <div className={styles.optionVerdictLabel}>If balance ≥ $5,000 and plan has good options</div>
                <ul className={styles.optionDetails}>
                  <li className={styles.pro}>No action required — zero paperwork to "do nothing"</li>
                  <li className={styles.pro}>Keeps money in a plan you already know</li>
                  <li className={styles.pro}>Maintains ERISA creditor protection</li>
                  <li className={styles.con}>Former employer can force out balances under $5,000</li>
                  <li className={styles.con}>You lose access to new employer's plan if they force you out</li>
                  <li className={styles.con}>Easy to forget — 24 million accounts are currently abandoned</li>
                  <li className={styles.con}>May pay plan administration fees with no employer relationship</li>
                  <li className={styles.note}>Only viable long-term if balance &gt; $5K and investment options are genuinely good</li>
                </ul>
              </div>

              <div className={`${styles.optionCard} ${styles.optRed}`}>
                <div className={styles.optionIcon}>🚨</div>
                <span className={`${styles.optionLabel} ${styles.labelRed}`}>✗ Almost Always Wrong</span>
                <div className={styles.optionTitle}>Cash It Out</div>
                <div className={`${styles.optionVerdict} ${styles.verdictRed}`}>30–40%</div>
                <div className={styles.optionVerdictLabel}>Immediate loss to taxes and penalties (if under 59½)</div>
                <ul className={styles.optionDetails}>
                  <li className={styles.con}>20% withheld immediately by plan for federal taxes</li>
                  <li className={styles.con}>10% early withdrawal penalty if under age 59½</li>
                  <li className={styles.con}>Entire amount added to your taxable income for the year</li>
                  <li className={styles.con}>May owe additional taxes at filing if withholding is insufficient</li>
                  <li className={styles.con}>Permanently destroys decades of compound growth</li>
                  <li className={styles.note}>Only consider in a genuine, documented financial emergency with no other options</li>
                </ul>
              </div>
            </div>

            <div className={styles.callout}>
              <p><strong>🗺 Quick Decision Guide:</strong> Starting a new job soon and the plan accepts rollovers? → Roll to new 401(k). No new job yet, or new plan has mediocre funds? → Roll to IRA. Balance over $5K and old plan has excellent low-cost funds? → Leaving it is okay short-term. Balance under $5K? → Act immediately before a forced cashout occurs. Cashing out? → Only as a true last resort.</p>
            </div>
          </section>

          <section id="vesting">
            <div className={styles.sectionLabel}>Critical First Step</div>
            <h2>Vesting Schedules — What You Actually Own Before You Leave</h2>
            <p>Your own 401(k) contributions are always 100% vested — they belong to you from day one. Employer contributions (the match) are different: they vest on a schedule set by your plan. Leaving before you're fully vested means forfeiting unvested employer money. This is one of the most expensive and overlooked costs of changing jobs too soon.</p>

            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Vesting Type</th>
                    <th>Year 1</th>
                    <th>Year 2</th>
                    <th>Year 3</th>
                    <th>Year 4</th>
                    <th>Year 5</th>
                    <th>Year 6</th>
                    <th>Best For Employee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Immediate Vesting</strong></td>
                    <td style={{ color: 'var(--green)', fontWeight: 700 }}>100%</td>
                    <td style={{ color: 'var(--green)' }}>100%</td>
                    <td style={{ color: 'var(--green)' }}>100%</td>
                    <td style={{ color: 'var(--green)' }}>100%</td>
                    <td style={{ color: 'var(--green)' }}>100%</td>
                    <td style={{ color: 'var(--green)' }}>100%</td>
                    <td>Best — all employer contributions are yours from day one</td>
                  </tr>
                  <tr>
                    <td><strong>3-Year Cliff Vesting</strong></td>
                    <td style={{ color: 'var(--red)' }}>0%</td>
                    <td style={{ color: 'var(--red)' }}>0%</td>
                    <td style={{ color: 'var(--green)', fontWeight: 700 }}>100%</td>
                    <td style={{ color: 'var(--green)' }}>100%</td>
                    <td style={{ color: 'var(--green)' }}>100%</td>
                    <td style={{ color: 'var(--green)' }}>100%</td>
                    <td>Must stay 3 full years to keep any match — most common cliff schedule</td>
                  </tr>
                  <tr>
                    <td><strong>6-Year Graded Vesting</strong></td>
                    <td style={{ color: 'var(--red)' }}>0%</td>
                    <td style={{ color: 'var(--gold)' }}>20%</td>
                    <td style={{ color: 'var(--gold)' }}>40%</td>
                    <td style={{ color: 'var(--gold)' }}>60%</td>
                    <td style={{ color: 'var(--gold)' }}>80%</td>
                    <td style={{ color: 'var(--green)', fontWeight: 700 }}>100%</td>
                    <td>Partial vesting each year — leaving mid-tenure means partial loss</td>
                  </tr>
                  <tr>
                    <td><strong>2-Year Cliff (SIMPLE plans)</strong></td>
                    <td style={{ color: 'var(--red)' }}>0%</td>
                    <td style={{ color: 'var(--green)', fontWeight: 700 }}>100%</td>
                    <td style={{ color: 'var(--green)' }}>100%</td>
                    <td style={{ color: 'var(--green)' }}>100%</td>
                    <td style={{ color: 'var(--green)' }}>100%</td>
                    <td style={{ color: 'var(--green)' }}>100%</td>
                    <td>Common in SIMPLE IRA plans — must stay 2 full years</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '10px' }}>Source: ERISA vesting rules — DOL minimum vesting standards for qualified retirement plans. Employers may offer more generous schedules but not less. Your specific schedule is in your Summary Plan Description (SPD). "Years" for vesting purposes means plan years, which may not align with calendar years.</p>

            <div className={styles.calloutGold}>
              <p><strong>⚠️ The Vesting Calendar Trap:</strong> Vesting years are often measured from your plan enrollment date — not your hire date. If you enrolled in the 401(k) 6 months after being hired, your vesting clock may be 6 months behind your employment tenure. Check your plan documents carefully. In some cases, waiting until the next plan year anniversary before resigning means keeping thousands of additional employer match dollars.</p>
            </div>
          </section>

          <section id="loans">
            <div className={styles.sectionLabel}>The Loan Trap</div>
            <h2>Outstanding 401(k) Loans When You Leave — Act Immediately</h2>
            <p>If you have a 401(k) loan outstanding when you leave your job, a clock starts running that most people don't know about — and missing the deadline turns your loan balance into a taxable distribution with a potential penalty, instantly. This is one of the most expensive and most avoidable job-change mistakes.</p>

            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Loan Situation</th>
                    <th>Deadline to Repay</th>
                    <th>What Happens If You Miss It</th>
                    <th>Tax &amp; Penalty Exposure</th>
                    <th>Best Course of Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Standard 401(k) loan, left job voluntarily</strong></td>
                    <td style={{ color: 'var(--gold)', fontWeight: 600 }}>Tax filing deadline of following year (incl. extensions)</td>
                    <td>Unpaid balance treated as a distribution</td>
                    <td style={{ color: 'var(--red)' }}>Ordinary income tax + 10% penalty (if under 59½)</td>
                    <td>Repay in full before deadline or roll the offset amount into an IRA</td>
                  </tr>
                  <tr>
                    <td><strong>Loan on a plan with old 90-day repayment rule</strong></td>
                    <td style={{ color: 'var(--red)', fontWeight: 600 }}>60–90 days after separation (plan-specific)</td>
                    <td>Loan declared in default, treated as distribution</td>
                    <td style={{ color: 'var(--red)' }}>Ordinary income tax + 10% penalty (if under 59½)</td>
                    <td>Check your SPD — some older plans still have shorter windows</td>
                  </tr>
                  <tr>
                    <td><strong>Plan offset rollover (TCJA 2018)</strong></td>
                    <td>Tax filing deadline of following year (incl. extensions)</td>
                    <td>Loan offset occurs — but you can roll the exact offset amount into an IRA</td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>$0 if offset amount rolled into IRA in time</td>
                    <td>Deposit the loan offset amount into an IRA using other funds to avoid tax</td>
                  </tr>
                  <tr>
                    <td><strong>Loan repaid in full before separation</strong></td>
                    <td>N/A</td>
                    <td>No issue — loan closed, no tax event</td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>$0</td>
                    <td>Best outcome — pay off the loan before your last day if at all possible</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={styles.calloutRed}>
              <p><strong>🚨 The TCJA 2018 Relief Rule:</strong> Under the Tax Cuts and Jobs Act, if your 401(k) loan is offset (treated as a distribution) due to a job separation, you have until the tax filing deadline of that year — including extensions — to roll the equivalent amount into an IRA or new 401(k) and avoid taxes and penalties. This means you don't have to repay the old plan directly; you can use other savings to fund the rollover. This is a little-known but powerful safety net. Source: IRS Notice 2017-68; IRC §402(c)(3)(C).</p>
            </div>
          </section>

          <section id="thresholds">
            <div className={styles.sectionLabel}>Balance Thresholds</div>
            <h2>Forced Cashout Rules — What Happens to Small Balances</h2>
            <p>You don't always get to choose what happens to your 401(k). For smaller balances, your former employer has the legal right to remove you from the plan automatically — and the mechanism they use determines how much tax damage you suffer.</p>

            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Vested Balance Range</th>
                    <th>What Your Former Employer Can Do</th>
                    <th>Tax Consequence</th>
                    <th>Your Window to Act</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Under $1,000</strong></td>
                    <td style={{ color: 'var(--red)' }}>Can force a full cashout — cut you a check automatically</td>
                    <td style={{ color: 'var(--red)' }}>20% withheld for taxes + 10% penalty if under 59½ when you file</td>
                    <td>Act before your final paycheck — initiate a rollover while still employed if possible</td>
                  </tr>
                  <tr>
                    <td><strong>$1,000 – $5,000</strong></td>
                    <td style={{ color: 'var(--gold)' }}>Can automatically roll into a default IRA of their choosing</td>
                    <td style={{ color: 'var(--gold)' }}>No immediate tax — but default IRAs often have high fees</td>
                    <td>Initiate your own rollover to your preferred IRA before they act</td>
                  </tr>
                  <tr>
                    <td><strong>$5,000 – $7,000</strong></td>
                    <td>Must keep your money in the plan — cannot force you out</td>
                    <td style={{ color: 'var(--green)' }}>No tax — you retain full control</td>
                    <td>Take your time; roll over when ready, ideally within 60 days</td>
                  </tr>
                  <tr>
                    <td><strong>Over $7,000</strong></td>
                    <td>Must keep your money in the plan until you request a distribution</td>
                    <td style={{ color: 'var(--green)' }}>No tax — you retain full control</td>
                    <td>Can leave indefinitely or roll over whenever you choose</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '10px' }}>Note: The $7,000 threshold for mandatory plan retention was updated by SECURE 2.0 (2022), rising from the prior $5,000 threshold. Effective for plan distributions after December 31, 2023. Source: SECURE 2.0 Act § 304; DOL rules.</p>

            <div className={styles.callout}>
              <p><strong>💡 Default IRA Warning:</strong> When an employer auto-rolls a $1,000–$5,000 balance into a "safe harbor IRA," they choose the custodian — often a high-fee provider with limited investment options. The balance may sit in cash earning minimal interest and being eroded by administrative fees. If this has happened to you, you can find and consolidate these accounts at <strong>FreeERISA.com</strong> or by contacting your former HR department for rollover instructions.</p>
            </div>
          </section>

          <section id="rollover">
            <div className={styles.sectionLabel}>How to Execute the Rollover</div>
            <h2>The Direct Rollover Process — Step by Step</h2>
            <p>Whether you're rolling into a new 401(k) or a Traditional IRA, the mechanics are the same. A direct rollover (trustee-to-trustee) moves the money directly from your old plan to your new account — you never touch the funds, there is no withholding, and there is no 60-day deadline to worry about.</p>

            <ul className={styles.strategyList}>
              <li className={styles.strategyItem}>
                <div className={styles.strategyIcon} style={{ background: 'var(--blue)', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 800, flexShrink: 0, marginTop: 0 }}>1</div>
                <div className={styles.strategyContent}>
                  <h4>Check Your Vesting Status and Outstanding Loans Before Anything Else</h4>
                  <p>Log into your plan portal and note your vested balance (not your total balance), your vesting schedule and next cliff date, and any outstanding loan balance. If you're within weeks of a vesting milestone, consider the financial value of delaying your last day. Pay off any outstanding loans before separation if at all possible.</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyIcon} style={{ background: 'var(--blue)', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 800, flexShrink: 0, marginTop: 0 }}>2</div>
                <div className={styles.strategyContent}>
                  <h4>Open Your Destination Account Before Requesting the Rollover</h4>
                  <p>If rolling into an IRA, open a Traditional IRA at your preferred brokerage (Fidelity, Vanguard, Schwab, etc.) before contacting your old plan. You'll need the account number and the custodian's mailing address or wire instructions. Same-institution rollovers are fastest. If rolling to a new 401(k), confirm with your new employer's HR that the plan accepts incoming rollovers — not all do.</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyIcon} style={{ background: 'var(--blue)', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 800, flexShrink: 0, marginTop: 0 }}>3</div>
                <div className={styles.strategyContent}>
                  <h4>Contact Your Old Plan and Request a Direct Rollover</h4>
                  <p>Call the plan administrator (HR department or the recordkeeper — Fidelity NetBenefits, Empower, Vanguard, Principal, etc.) and use these exact words: <em>"I would like to initiate a direct rollover to [your new custodian name]."</em> Never say "I want to withdraw" — that triggers an automatic cashout. They'll send you distribution paperwork specifying the receiving institution, account number, and transfer method.</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyIcon} style={{ background: 'var(--blue)', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 800, flexShrink: 0, marginTop: 0 }}>4</div>
                <div className={styles.strategyContent}>
                  <h4>If a Check Is Issued, Verify It's Payable to the Custodian — Not You</h4>
                  <p>Some plans mail a check to you but make it payable to "Fidelity FBO [Your Name]" — this is still a direct rollover and has no tax consequences. Deposit it at your new IRA or 401(k) immediately. If the check is made payable to you personally, you have 60 days to deposit the full original amount (including the 20% that was withheld) into a qualifying account, or the withheld amount becomes a taxable distribution.</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyIcon} style={{ background: 'var(--blue)', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 800, flexShrink: 0, marginTop: 0 }}>5</div>
                <div className={styles.strategyContent}>
                  <h4>Confirm Arrival and Reinvest Immediately</h4>
                  <p>Track the transfer — most direct rollovers complete in 1–4 weeks. Once funds appear in your new account, they typically land in a default cash or money market position. Choose your target investment allocation and invest immediately — the rollover earns nothing in cash. Check your old account one final time to confirm a $0 balance. Report the rollover on Form 1040 using the 1099-R you'll receive from your old plan in January (taxable amount = $0 for a clean direct rollover).</p>
                </div>
              </li>
            </ul>
          </section>

          <section id="tax-costs">
            <div className={styles.sectionLabel}>The True Cost of Cashing Out</div>
            <h2>Early Cashout Tax Table — How Much You Actually Keep (2026)</h2>
            <p>The immediate hit from cashing out is severe — but the long-term compound growth you sacrifice is far larger. This table shows the real-world after-tax amount you'd receive for various balance sizes, and what that same money would be worth left untouched in a rollover account until age 65.</p>

            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Account Balance</th>
                    <th>Fed Withholding (20%)</th>
                    <th>10% Early Penalty</th>
                    <th>State Tax (est. 5%)</th>
                    <th>You Actually Receive</th>
                    <th>Effective Loss</th>
                    <th>Value at 65 if Rolled Over*</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>$10,000</strong></td>
                    <td>$2,000</td>
                    <td>$1,000</td>
                    <td>~$500</td>
                    <td style={{ color: 'var(--red)', fontWeight: 700 }}>~$6,500</td>
                    <td style={{ color: 'var(--red)' }}>35%</td>
                    <td style={{ color: 'var(--green)', fontWeight: 700 }}>~$188,000</td>
                  </tr>
                  <tr>
                    <td><strong>$25,000</strong></td>
                    <td>$5,000</td>
                    <td>$2,500</td>
                    <td>~$1,250</td>
                    <td style={{ color: 'var(--red)', fontWeight: 700 }}>~$16,250</td>
                    <td style={{ color: 'var(--red)' }}>35%</td>
                    <td style={{ color: 'var(--green)', fontWeight: 700 }}>~$469,000</td>
                  </tr>
                  <tr>
                    <td><strong>$50,000</strong></td>
                    <td>$10,000</td>
                    <td>$5,000</td>
                    <td>~$2,500</td>
                    <td style={{ color: 'var(--red)', fontWeight: 700 }}>~$32,500</td>
                    <td style={{ color: 'var(--red)' }}>35%</td>
                    <td style={{ color: 'var(--green)', fontWeight: 700 }}>~$939,000</td>
                  </tr>
                  <tr>
                    <td><strong>$100,000</strong></td>
                    <td>$20,000</td>
                    <td>$10,000</td>
                    <td>~$5,000</td>
                    <td style={{ color: 'var(--red)', fontWeight: 700 }}>~$65,000</td>
                    <td style={{ color: 'var(--red)' }}>35%</td>
                    <td style={{ color: 'var(--green)', fontWeight: 700 }}>~$1,878,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '10px' }}>*Rollover value assumes 7% annualized growth from age 30 to 65 (35 years). State tax estimate of 5% is illustrative — your actual state tax depends on your state of residence. Federal withholding is 20%; additional ordinary income tax may be owed at filing depending on your marginal rate. Early withdrawal penalty applies if under age 59½. This table is for educational illustration only — consult a tax professional for your specific situation.</p>

            <div className={styles.inlineCta}>
              <div className={styles.inlineCtaText}>
                <h4>See How Your 401(k) Rollover Fits Your Retirement Timeline</h4>
                <p>Plootus models your rollover alongside projected contributions, Social Security, and retirement income — all in one place, free.</p>
              </div>
              <Link href="/retirement-calculator" className={styles.inlineCtaBtn}>Check Here</Link>
            </div>
          </section>

          <section id="planning">
            <div className={styles.sectionLabel}>Planning Guide</div>
            <h2>Smart 401(k) Moves Every Job-Changer Should Make</h2>
            <ul className={styles.strategyList}>
              <li className={styles.strategyItem}><div className={styles.strategyIcon}>📅</div><div className={styles.strategyContent}><h4>Time Your Departure Around the Vesting Calendar</h4><p>Before you give notice, check your plan's vesting schedule and your next vesting milestone date. In a 3-year cliff plan, leaving two weeks before your 3-year anniversary means forfeiting every dollar of employer match you've accumulated. On a $6,000/year match, that's up to $18,000 — enough to justify asking your new employer if they can delay your start date by a few weeks.</p></div></li>
              <li className={styles.strategyItem}><div className={styles.strategyIcon}>🏃</div><div className={styles.strategyContent}><h4>Act Within 30 Days — Don't Leave Small Balances Unattended</h4><p>If your vested balance is under $5,000, your former employer can remove you from their plan at any time after separation. A balance under $1,000 can be cashed out with no warning. Initiate your rollover within the first 30 days of leaving — before the plan administrator's system processes your termination and triggers an auto-distribution.</p></div></li>
              <li className={styles.strategyItem}><div className={styles.strategyIcon}>💳</div><div className={styles.strategyContent}><h4>Pay Off Outstanding 401(k) Loans Before Your Last Day</h4><p>If you have a 401(k) loan and can't repay it before leaving, the TCJA 2018 gives you until the tax filing deadline of the following year to roll the offset amount into an IRA using outside funds. But that requires having the cash available. The cleanest outcome is repaying the loan before your separation date, even if that means using savings or a HELOC temporarily. An unpaid loan that defaults is taxed as ordinary income plus the 10% penalty — on money you already borrowed from yourself.</p></div></li>
              <li className={styles.strategyItem}><div className={styles.strategyIcon}>🔍</div><div className={styles.strategyContent}><h4>Compare Investment Options and Fees Before Deciding Where to Roll</h4><p>Before rolling into your new employer's 401(k), check the expense ratios on the available funds. If the plan's cheapest index fund charges 0.50% vs. 0.04% at Vanguard, that fee difference compounds over decades into tens of thousands of dollars. The IRS requires plans to provide a fee disclosure document (Form 404a-5) — request it from HR or find it in your plan portal. High-cost plans are often better avoided in favor of an IRA rollover.</p></div></li>
              <li className={styles.strategyItem}><div className={styles.strategyIcon}>📦</div><div className={styles.strategyContent}><h4>Consolidate Old 401(k)s Every Time You Switch Jobs</h4><p>Each job change is the ideal moment to consolidate any previously abandoned 401(k)s into your growing IRA. Americans have an average of 3.7 retirement accounts — managing multiple accounts makes it harder to maintain a coherent asset allocation and increases the risk of forgetting one entirely. Rolling everything into one IRA every time you change jobs is simple financial hygiene that pays large dividends in clarity and growth.</p></div></li>
              <li className={styles.strategyItem}><div className={styles.strategyIcon}>📋</div><div className={styles.strategyContent}><h4>Report Your Rollover Correctly at Tax Time</h4><p>You'll receive IRS Form 1099-R from your old plan in January following the rollover year. Even if the rollover was tax-free, you must report it on your Form 1040 — typically on lines 5a (gross distribution) and 5b (taxable amount = $0 for a clean direct rollover). Failing to report it can trigger an IRS inquiry. Your tax software will walk you through this when you enter the 1099-R. If the form shows a non-zero taxable amount that shouldn't be taxable, you may need to file Form 8606 or attach a rollover explanation.</p></div></li>
            </ul>
          </section>

          <section id="faq">
            <div className={styles.sectionLabel}>FAQ</div>
            <h2>401(k) Job-Change FAQ</h2>
            <div style={{ marginTop: '20px' }}>
              {faqData.map((item, idx) => (
                <div key={idx} className={`${styles.faqItem} ${openFaq === idx ? styles.open : ''}`}>
                  <button className={styles.faqQ} onClick={() => toggleFaq(idx)}>
                    {item.q} <span className={styles.faqIcon}>+</span>
                  </button>
                  {openFaq === idx && (
                    <div className={styles.faqA}>
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <div className={styles.sourcesBox}>
            <h4>Sources</h4>
            <p>IRS Publication 575 (Pension and Annuity Income) · IRS Notice 2017-68 (plan loan offset rollover relief) · IRC §402(c)(3)(C) (TCJA 2018 loan offset extension) · DOL ERISA vesting standards · SECURE 2.0 Act §304 (updated forced-cashout threshold to $7,000) · Vanguard How America Saves 2024 (cashout rate, account behavior) · Capitalize / GAO Report 2023 (forgotten 401(k) account estimates) · IRS Rev. Rul. 2000-12 (Rule of 55) · IRS Form 1099-R instructions · DOL §404a-5 fee disclosure regulations</p>
          </div>

        </main>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <h4>On This Page</h4>
            <ul className={styles.tocList}>
              <li><a href="#overview">📊 Why This Matters</a></li>
              <li><a href="#options">🔀 Your Four Options</a></li>
              <li><a href="#vesting">📅 Vesting Schedules</a></li>
              <li><a href="#loans">⚠️ Loan Trap</a></li>
              <li><a href="#thresholds">💰 Forced Cashout Rules</a></li>
              <li><a href="#rollover">✅ Rollover Step-by-Step</a></li>
              <li><a href="#tax-costs">🧾 True Cost of Cashing Out</a></li>
              <li><a href="#planning">💡 Planning Guide</a></li>
              <li><a href="#faq">❓ FAQ</a></li>
            </ul>
          </div>
          <div className={styles.ctaCard}>
            <h4>See Your Full Retirement Picture</h4>
            <p>Plootus models your rollover alongside all your accounts, Social Security, and state taxes — so you can see exactly where you stand.</p>
            <Link href="/retirement-calculator" className={styles.ctaBtn}>Check Here</Link>
          </div>
          <div className={styles.sidebarCard}>
            <h4>Related Guides</h4>
            <ul className={styles.relatedLinks}>
              <li><Link href="/401k-rollover-guide">401(k) Rollover Guide</Link></li>
              <li><Link href="/average-401k-balance-by-age">Average 401(k) Balance by Age</Link></li>
              <li><Link href="/401k-by-age">401(k) Savings Benchmarks</Link></li>
              <li><Link href="/ira-contribution-limits">IRA Contribution Limits 2026</Link></li>
              <li><Link href="/roth-vs-traditional">Roth vs. Traditional IRA</Link></li>
              <li><Link href="/retirement-tax-guide">Retirement Tax Guide</Link></li>
            </ul>
          </div>
        </aside>
      </div>

      <PartnersSection />
    </div>
  );
};

export default SwitchingJobs401k;
