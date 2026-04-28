import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './RetirementPlanningInYour50s.module.css';
import HubNav from '../HubNav/HubNav';
import PartnersSection from '../home/PartnersSection';

const RetirementPlanningInYour50s = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('');

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "How much should I have saved for retirement at 55?",
      a: "Fidelity recommends 7x your annual salary saved by age 55. By 60, you should have 8x. If you earn $100,000, that means $700,000 by 55 and $800,000 by 60. These are targets — what matters most now is running a real retirement income projection to see if your savings will last."
    },
    {
      q: "What are the catch-up contribution limits at 50 and 60?",
      a: "In 2026: Workers 50–59 can contribute an extra $7,500 to their 401(k) (total $31,000). Workers 60–63 get a special SECURE 2.0 super catch-up of $11,250 (total $34,750). IRA catch-up is $1,000 extra (total $8,000 for ages 50+). HSA catch-up at 55+ is $1,000 extra."
    },
    {
      q: "When should I claim Social Security?",
      a: "Claiming at 62 permanently reduces your benefit by up to 30%. Waiting until 70 increases it by roughly 76% vs. claiming at 62. The break-even point is around age 80. If you're in good health and can afford to wait, delaying Social Security is often the single best financial decision available to retirees. It's longevity insurance you can't buy elsewhere."
    },
    {
      q: "How do I get health insurance if I retire before 65?",
      a: "You have four main options: (1) ACA Marketplace coverage — subsidized if your income is below 400% of the federal poverty line, which you can engineer by managing retirement withdrawals; (2) COBRA from your employer for up to 18 months; (3) A spouse's employer plan if they're still working; (4) Health sharing ministries as a lower-cost alternative (read the fine print carefully). Budget $800–$1,800/month for individual or couple coverage depending on your plan choice and income."
    },
    {
      q: "What is the 4% rule and does it still work?",
      a: "The 4% rule says you can withdraw 4% of your portfolio in year one of retirement, then adjust for inflation each year, with historically low risk of running out of money over 30 years. For a $1M portfolio, that's $40,000/year. Many researchers now suggest 3.3–3.5% is safer given lower expected bond returns. The rule is a starting point — a Plootus retirement projection can show you a personalized withdrawal rate based on your specific situation."
    },
    {
      q: "Should I do Roth conversions in my 50s?",
      a: "For most people with large Traditional IRA balances, yes — especially in low-income years before Social Security begins. Converting $30,000–$50,000/year to Roth fills up lower tax brackets now and reduces future RMDs that might push you into higher brackets at 73+. The sweet spot: convert enough each year to fill up your current bracket without spilling into the next one. Also watch for Medicare IRMAA surcharges if income exceeds $103,000 single / $206,000 MFJ."
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Retirement Planning in Your 50s: The Complete 2026 Guide | Plootus</title>
        <meta name="description" content="The complete guide to retirement planning in your 50s. Catch-up contributions, Social Security timing, healthcare before Medicare, asset allocation, and the final push to retire on your terms." />
        <link rel="canonical" href="https://www.plootus.com/retirement-planning-in-your-50s" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Retirement Planning in Your 50s: The Complete 2026 Guide",
            "description": "The final decade of wealth accumulation — catch-up contributions, Social Security timing, healthcare strategy, and retirement income planning.",
            "datePublished": "2026-01-01",
            "dateModified": "2026-04-01",
            "author": { "@type": "Organization", "name": "Plootus Research Team", "url": "https://www.plootus.com" },
            "publisher": { "@type": "Organization", "name": "Plootus", "url": "https://www.plootus.com" },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.plootus.com/retirement-planning-in-your-50s" }
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(item => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": { "@type": "Answer", "text": item.a }
            }))
          })
        }} />
      </Head>

      <HubNav activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroEyebrow}>🏁 Life Stage Guide</div>
          <h1>Retirement Planning in Your 50s:<br />The Complete 2026 Guide</h1>
          <p className={styles.heroDeck}>Your 50s are the decade where retirement stops being abstract and starts being a real date on a calendar. Catch-up contributions unlock extra savings power, Social Security decisions loom, and the question shifts from "am I saving enough?" to "will my money last?" Here's your complete playbook.</p>
          <div className={styles.heroMeta}>
            <span>📅 Updated April 2026</span>
            <span>⏱ 14 min read</span>
            <span>✍️ Plootus Research Team</span>
            <span>🎯 Ages 50–59</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}><div className={styles.statNum}>$31,000</div><div className={styles.statLabel}>Max 401(k) contribution at 50–59 in 2026</div></div>
          <div className={styles.statItem}><div className={styles.statNum}>$34,750</div><div className={styles.statLabel}>Super catch-up for ages 60–63 in 2026</div></div>
          <div className={styles.statItem}><div className={styles.statNum}>7×</div><div className={styles.statLabel}>Salary saved by age 55 (Fidelity target)</div></div>
          <div className={styles.statItem}><div className={styles.statNum}>76%</div><div className={styles.statLabel}>More SS benefit by waiting to claim at 70 vs. 62</div></div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent}>

          <section id="what-changes-at-50">
            <div className={styles.sectionLabel}>The 50s Shift</div>
            <h2>What Changes When You Turn 50</h2>
            <p>Turning 50 unlocks significant financial privileges the IRS reserves for workers approaching retirement. These "catch-up contributions" are one of the most underused tools in retirement planning — and one of the most valuable for anyone who is behind.</p>

            <table className={styles.benchmarkTable}>
              <thead>
                <tr><th>Account</th><th>Under 50</th><th>Ages 50–59</th><th>Ages 60–63 (SECURE 2.0 Super Catch-Up)</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>401(k) / 403(b)</strong></td><td>$23,500</td><td className={styles.highlight}>$31,000</td><td className={styles.highlight}>$34,750</td></tr>
                <tr><td><strong>IRA (Roth or Traditional)</strong></td><td>$7,000</td><td className={styles.highlight}>$8,000</td><td className={styles.highlight}>$8,000</td></tr>
                <tr><td><strong>HSA</strong></td><td>$4,300 / $8,550</td><td className={styles.highlight}>$5,300 / $9,550</td><td className={styles.highlight}>$5,300 / $9,550</td></tr>
                <tr><td><strong>SIMPLE IRA</strong></td><td>$16,500</td><td className={styles.highlight}>$20,000</td><td className={styles.highlight}>$23,000</td></tr>
              </tbody>
            </table>

            <div className={styles.callout}><strong>The 60–63 super catch-up (SECURE 2.0) is often overlooked.</strong> Workers aged 60–63 can contribute $34,750 to their 401(k) in 2026 — $11,250 more than the standard limit. This is a narrow 4-year window and one of the most powerful savings opportunities in the tax code.</div>

            <div className={styles.priorityStrip}>
              <div className={styles.priorityItem}>
                <div className={styles.priorityRank}>Max</div>
                <div className={styles.priorityLabel}>Catch-Up Contributions</div>
                <div className={styles.priorityDesc}>$7,500 extra in 401(k). Use every dollar of the catch-up room available.</div>
              </div>
              <div className={styles.priorityItem}>
                <div className={styles.priorityRank}>Plan</div>
                <div className={styles.priorityLabel}>Social Security Timing</div>
                <div className={styles.priorityDesc}>The 62 vs. 70 decision is worth $200K–$300K+ for most households.</div>
              </div>
              <div className={styles.priorityItem}>
                <div className={styles.priorityRank}>Bridge</div>
                <div className={styles.priorityLabel}>Healthcare Before Medicare</div>
                <div className={styles.priorityDesc}>Retirement before 65 requires a healthcare plan. Cost: $800–$2,000+/month.</div>
              </div>
            </div>
          </section>

          <section id="benchmarks">
            <div className={styles.sectionLabel}>Am I on Track?</div>
            <h2>Retirement Savings Benchmarks for Your 50s</h2>
            <p>Here's where Fidelity's benchmarks say you should be through your 50s. At this stage, also run a full retirement income projection — the salary-multiple benchmark is a rough guide, but a real projection accounts for Social Security, spending needs, and healthcare costs specific to you.</p>

            <table className={styles.benchmarkTable}>
              <thead>
                <tr>
                  <th>Age</th>
                  <th>Fidelity Benchmark</th>
                  <th>If You Earn $90K</th>
                  <th>If You Earn $120K</th>
                  <th>If You Earn $160K</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>50</strong></td><td className={styles.highlight}>6× salary</td><td>$540,000</td><td>$720,000</td><td>$960,000</td></tr>
                <tr><td><strong>55</strong></td><td className={styles.highlight}>7× salary</td><td>$630,000</td><td>$840,000</td><td>$1,120,000</td></tr>
                <tr><td><strong>57</strong></td><td>7.5× salary</td><td>$675,000</td><td>$900,000</td><td>$1,200,000</td></tr>
                <tr><td><strong>60</strong></td><td className={styles.highlight}>8× salary</td><td>$720,000</td><td>$960,000</td><td>$1,280,000</td></tr>
                <tr><td><strong>65</strong></td><td className={styles.highlight}>10× salary</td><td>$900,000</td><td>$1,200,000</td><td>$1,600,000</td></tr>
              </tbody>
            </table>

            <p>If you're behind, don't just look at the gap in dollars — look at it as a monthly savings problem. A $200,000 shortfall with 15 years to retirement requires approximately $600–$700 more per month in savings (at 7% returns). That's achievable with catch-up contributions and reduced spending.</p>
          </section>

          <section id="social-security">
            <div className={styles.sectionLabel}>The Biggest Decision</div>
            <h2>Social Security: When to Claim</h2>
            <p>The Social Security claiming decision — when to start benefits between age 62 and 70 — is often the single most impactful financial decision of your retirement. Here's the math:</p>

            <table className={styles.benchmarkTable}>
              <thead>
                <tr><th>Claim Age</th><th>Monthly Benefit (vs. FRA)</th><th>Annual Benefit</th><th>Break-Even Age vs. Claiming at FRA</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>62</strong></td><td>−25% to −30%</td><td>~$18,400 (if FRA benefit = $24,000)</td><td>Break-even ~age 78</td></tr>
                <tr><td><strong>67 (FRA)</strong></td><td>100% (baseline)</td><td>$24,000</td><td>—</td></tr>
                <tr><td><strong>70</strong></td><td className={styles.highlight}>+24% (8%/year delayed)</td><td>$29,760</td><td>Break-even ~age 81 vs. 62</td></tr>
              </tbody>
            </table>

            <div className={styles.calloutGreen}><strong>Rule of thumb:</strong> If you're in good health and expect to live past age 80, waiting until 70 is almost always the financially optimal choice. The extra benefit is permanent, inflation-adjusted, and — for married couples — passes to the surviving spouse as a survivor benefit. It's the cheapest longevity insurance you can buy.</div>

            <h3>The Couples Strategy</h3>
            <p>For married couples, Social Security strategy is more complex and more valuable. A common approach: the lower earner claims at 62 to provide household income while the higher earner delays to 70 to maximize the benefit — which also becomes the survivor benefit if the higher earner dies first.</p>

            <h3>Claiming Early Makes Sense If…</h3>
            <ul>
              <li>You have significant health issues or shorter life expectancy</li>
              <li>You desperately need the income and have no other assets</li>
              <li>You are the lower earner in a couple with a large benefit disparity</li>
              <li>You want to stop working at 62 and have no bridge income</li>
            </ul>
          </section>

          <section id="healthcare">
            <div className={styles.sectionLabel}>Healthcare Planning</div>
            <h2>Healthcare Before Medicare (Ages 62–64)</h2>
            <p>If you retire before 65, you face a healthcare gap — you're too young for Medicare but too old to afford going uninsured. This is one of the biggest underestimated costs of early retirement. Here's how to bridge it:</p>

            <div className={styles.stepGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>Option 1: ACA Marketplace</div>
                <h4>Most flexible. Income-dependent subsidies.</h4>
                <p>If your income is below 400% of the federal poverty level (~$60K single / $80K couple), you qualify for subsidies. A retired couple managing income to $60K could pay $0–$800/month. Plootus can help you model this.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>Option 2: COBRA</div>
                <h4>18 months of existing employer coverage</h4>
                <p>You keep your current plan but pay the full premium — often $600–$1,800/month. Best for people who expect to retire just before a major medical event or procedure.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>Option 3: Spouse's Plan</div>
                <h4>If your spouse is still working</h4>
                <p>The cheapest option by far. If your spouse has employer coverage, joining their plan at retirement often costs $200–$600/month vs. $1,000+ for individual coverage.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>Option 4: HSA Bridge</div>
                <h4>Use invested HSA funds for premiums and expenses</h4>
                <p>HSA funds can pay Medicare premiums and most out-of-pocket expenses tax-free. If you've been maxing your HSA and investing it, this is a powerful tax-free bridge.</p>
              </div>
            </div>

            <p>Fidelity estimates a 65-year-old couple will spend <strong>$315,000 on healthcare in retirement</strong> — not including long-term care. Build this into your retirement number, not as an afterthought.</p>
          </section>

          <section id="asset-allocation">
            <div className={styles.sectionLabel}>Investment Strategy</div>
            <h2>Asset Allocation in Your 50s: De-risking Without Going Too Conservative</h2>
            <p>The biggest investment mistake people in their 50s make is going too conservative too soon. With a 30-year retirement ahead, you need your portfolio to keep growing well into your 70s. Going 60% bonds at 55 is a guaranteed way to outlive your money.</p>

            <table className={styles.benchmarkTable}>
              <thead>
                <tr><th>Age</th><th>Aggressive</th><th>Moderate (Recommended)</th><th>Conservative</th></tr>
              </thead>
              <tbody>
                <tr><td>50</td><td>80% stocks / 20% bonds</td><td>70% stocks / 30% bonds</td><td>55% stocks / 45% bonds</td></tr>
                <tr><td>55</td><td>75% stocks / 25% bonds</td><td>65% stocks / 35% bonds</td><td>50% stocks / 50% bonds</td></tr>
                <tr><td>59</td><td>70% stocks / 30% bonds</td><td>60% stocks / 40% bonds</td><td>45% stocks / 55% bonds</td></tr>
              </tbody>
            </table>

            <div className={styles.calloutGold}>⚠️ <strong>Sequence-of-returns risk</strong> becomes real in your late 50s. A major market crash in the 2–3 years before or after retirement can permanently impair your portfolio — even if the market recovers — because you're selling shares at depressed prices to fund living expenses. Mitigation: build a 1–2 year cash buffer as you approach retirement, so you don't have to sell equities in a down market.</div>

            <h3>Withdrawal Order Strategy (Start Planning Now)</h3>
            <p>As retirement approaches, think about which accounts to draw from first. The general optimal sequence:</p>
            <ol>
              <li><strong>Taxable brokerage</strong> — draw down first (capital gains rates, step-up in basis)</li>
              <li><strong>Traditional 401(k) / IRA</strong> — second (manage tax bracket, fund Roth conversions)</li>
              <li><strong>Roth IRA</strong> — last (no RMDs, let it compound tax-free as long as possible)</li>
            </ol>
          </section>

          <section id="rmd-planning">
            <div className={styles.sectionLabel}>Planning Ahead</div>
            <h2>RMD Planning — Start Thinking About It Now</h2>
            <p>Required Minimum Distributions (RMDs) begin at age 73 under SECURE 2.0 (increasing to 75 in 2033). Your 50s are the right time to plan around them — because decisions you make now determine your RMD burden in your 70s.</p>
            <p><strong>Why RMDs matter:</strong> Large Traditional IRA / 401(k) balances can generate RMDs so large they push you into higher tax brackets, trigger Medicare IRMAA surcharges, and increase taxation of Social Security benefits. A $2M Traditional IRA at 75 generates an RMD of approximately $84,000 — potentially creating more taxable income than you expected.</p>
            <p><strong>The solution:</strong> Start Roth conversions in your 50s and early 60s, especially in years when your income is lower than usual. Converting $30,000–$50,000/year from Traditional to Roth over a decade can dramatically reduce future RMDs and their tax impact.</p>

            <div className={styles.callout}><strong>Use the <Link href="/rmd-calculator">Plootus RMD Calculator</Link></strong> to see your projected RMDs at 73 based on current balances. If the number is large enough to cause bracket problems, plan Roth conversions now — while you have time.</div>
          </section>

          <section id="key-actions">
            <div className={styles.sectionLabel}>Action Plan</div>
            <h2>Your 50s Retirement Checklist</h2>
            <ul>
              <li>✅ Start using the 401(k) catch-up contribution ($7,500 extra/year starting at 50)</li>
              <li>✅ Ages 60–63: use the SECURE 2.0 super catch-up ($11,250 extra for 4 years)</li>
              <li>✅ Run a complete retirement income projection — not just a balance check</li>
              <li>✅ Estimate your Social Security benefit at SSA.gov — model 62, 67, and 70 scenarios</li>
              <li>✅ Create a healthcare bridge plan if you want to retire before 65</li>
              <li>✅ Begin de-risking portfolio gradually — shift from 90/10 to 70/30 stocks/bonds by late 50s</li>
              <li>✅ Plan for sequence-of-returns risk — build a 1–2 year cash cushion near retirement</li>
              <li>✅ Model RMD projections at 73 — start Roth conversions now if needed</li>
              <li>✅ Assess long-term care insurance — premiums are lower in your 50s than your 60s</li>
              <li>✅ Consolidate all retirement accounts into 2–3 accounts for simplicity</li>
              <li>✅ Pay off high-interest debt before retirement — fixed income is harder to manage with debt</li>
              <li>✅ Review and update beneficiaries, will, healthcare proxy, and estate documents</li>
              <li>✅ Have a real conversation with a fee-only financial advisor about your retirement date</li>
            </ul>
          </section>

          <section id="faq">
            <div className={styles.sectionLabel}>FAQ</div>
            <h2>Frequently Asked Questions</h2>
            {faqData.map((item, idx) => (
              <div key={idx} className={`${styles.faqItem} ${openFaq === idx ? styles.open : ''}`}>
                <button className={styles.faqQ} onClick={() => toggleFaq(idx)}>
                  {item.q} <span className={styles.faqIcon}>{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <div className={styles.faqA}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </section>

          <div className={styles.sourcesBox}>
            <strong>Sources</strong>
            <ul>
              <li>Fidelity Investments — 2026 Retirement Savings Guidelines and Benchmarks</li>
              <li>Social Security Administration — 2026 Benefit Tables and Actuarial Data</li>
              <li>IRS — 2026 Retirement Plan Catch-Up Contribution Limits (SECURE 2.0 Act)</li>
              <li>Fidelity — 2026 Healthcare Cost in Retirement Report</li>
              <li>Vanguard — How America Saves 2025</li>
              <li>Plootus Research Team — April 2026</li>
            </ul>
          </div>

        </main>

        <aside className={styles.sidebar}>
          <div className={styles.tocBox}>
            <h3>On This Page</h3>
            <ol>
              <li><a href="#what-changes-at-50">What Changes at 50</a></li>
              <li><a href="#benchmarks">Savings Benchmarks</a></li>
              <li><a href="#social-security">Social Security Timing</a></li>
              <li><a href="#healthcare">Healthcare Before Medicare</a></li>
              <li><a href="#asset-allocation">Asset Allocation</a></li>
              <li><a href="#rmd-planning">RMD Planning</a></li>
              <li><a href="#key-actions">Your Checklist</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>

          <div className={styles.ageNavCard}>
            <h4>🗺 Life Stage Guides</h4>
            <Link href="/retirement-planning-in-your-30s">🌱 In Your 30s</Link>
            <Link href="/retirement-planning-in-your-40s">⚡ In Your 40s</Link>
            <Link href="/retirement-planning-in-your-50s" className={styles.current}>🏁 In Your 50s (You're here)</Link>
          </div>

          <div className={styles.ctaCard}>
            <h4>Model Your Retirement Date</h4>
            <p>Plootus shows you exactly when you can retire — factoring in Social Security, healthcare, withdrawal order, and RMDs in a single projection.</p>
            <Link href="/retirement-calculator" className={styles.ctaBtn}>Check Here</Link>
          </div>

          <div className={styles.sidebarCard} style={{ background: 'var(--gold-light)', borderColor: '#F0C050' }}>
            <h4 style={{ color: '#7C5A00' }}>📊 Super Catch-Up Math</h4>
            <p style={{ fontSize: '13px', color: '#7C5A00', margin: 0 }}>Maxing the ages 60–63 super catch-up ($34,750/year for 4 years) with 7% returns adds approximately <strong>$165,000</strong> more than the standard limit over that window. A small window — don't miss it.</p>
          </div>

          <div className={styles.sidebarCard}>
            <h4>Related Guides</h4>
            <Link href="/social-security-benefits">Social Security Guide</Link>
            <Link href="/roth-conversion-strategy">Roth Conversion Strategy</Link>
            <Link href="/rmd-calculator">RMD Calculator</Link>
            <Link href="/how-much-to-retire">How Much to Retire</Link>
            <Link href="/healthcare-costs-in-retirement">Healthcare Costs</Link>
            <Link href="/best-states-to-retire">Best States to Retire</Link>
          </div>
        </aside>
      </div>

      <PartnersSection />
    </div>
  );
};

export default RetirementPlanningInYour50s;
