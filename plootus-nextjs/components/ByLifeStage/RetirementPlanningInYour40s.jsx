import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './RetirementPlanningInYour40s.module.css';
import HubNav from '../HubNav/HubNav';
import PartnersSection from '../home/PartnersSection';

const RetirementPlanningInYour40s = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('');

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "How much should I have saved for retirement at 40?",
      a: "Fidelity recommends 3x your annual salary saved by age 40 and 4x by age 45. If you earn $90,000, that means $270,000 saved by 40 and $360,000 by 45. If you're behind, your 40s are your highest-income decade — the best time to aggressively accelerate savings."
    },
    {
      q: "Is 40 too late to start saving for retirement?",
      a: "Absolutely not. Starting at 40 with $0 and saving $1,500/month at a 7% return gives you roughly $850,000 by age 65. It's not as much as starting at 30, but it's a solid retirement. The key: maximize contributions immediately, use tax-advantaged accounts first, and consider working 1–2 years longer to dramatically improve outcomes."
    },
    {
      q: "Should I pay off my mortgage early or invest more in retirement in my 40s?",
      a: "In almost every scenario, investing wins over early mortgage payoff. Expected market returns (7%) exceed typical mortgage rates (4–7%) over long periods. Additionally, 401(k) contributions reduce taxable income today. Exception: if your mortgage rate is above 7% and you're in a low tax bracket, extra payments may make sense. Always capture the full 401(k) employer match first."
    },
    {
      q: "What is a Backdoor Roth IRA and should I use it in my 40s?",
      a: "A Backdoor Roth IRA lets high earners (above $146K single / $230K MFJ) still access Roth benefits: contribute $7,000 to a non-deductible Traditional IRA, then convert to Roth. You pay taxes on any gains between contribution and conversion (usually minimal if done promptly). It's particularly valuable in your 40s when you're at peak income and have the most to gain from tax-free growth."
    },
    {
      q: "Should I keep paying for college or focus on my own retirement in my 40s?",
      a: "Your retirement comes first. Students can borrow for college through federal loans, grants, and scholarships. You cannot borrow for retirement. An underfunded retirement is a much more serious problem than an underfunded 529. Once your retirement savings are on track (15%+ contribution rate, on pace for benchmarks), then add college funding."
    },
    {
      q: "When should I start thinking about Social Security strategy?",
      a: "Your 40s are a good time to start understanding your benefit. Create an account at SSA.gov and verify your earnings record — errors are common and correcting them requires documentation. You don't need to decide when to claim until your late 50s or early 60s, but understanding the 62 vs. 70 tradeoff (up to 76% more by waiting) should inform how much you need to save."
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Retirement Planning in Your 40s | Plootus</title>
        <meta name="description" content="The complete guide to retirement planning in your 40s. Peak earning years, catch-up contributions, asset allocation shifts, mortgage vs. investing tradeoffs, and the decisions that define your retirement outcome." />
        <link rel="canonical" href="https://www.plootus.com/retirement-planning-in-your-40s" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Retirement Planning in Your 40s",
            "description": "How to accelerate retirement savings in your 40s — contribution strategy, asset allocation shifts, and making the most of peak earnings.",
            "datePublished": "2026-01-01",
            "dateModified": "2026-04-01",
            "author": { "@type": "Organization", "name": "Plootus Research Team", "url": "https://www.plootus.com" },
            "publisher": { "@type": "Organization", "name": "Plootus", "url": "https://www.plootus.com" },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.plootus.com/retirement-planning-in-your-40s" }
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
          <div className={styles.heroEyebrow}>⚡ Life Stage Guide</div>
          <h1>Retirement Planning in Your 40s</h1>
          <p className={styles.heroDeck}>Your 40s are typically your highest-earning decade — and your last chance to course-correct without radical sacrifices. Whether you're on track or behind, this guide covers exactly what to prioritize, what to change, and what the numbers actually mean.</p>
          <div className={styles.heroMeta}>
            <span>📅 Updated April 2026</span>
            <span>⏱ 13 min read</span>
            <span>✍️ Plootus Research Team</span>
            <span>🎯 Ages 40–49</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}><div className={styles.statNum}>3×</div><div className={styles.statLabel}>Salary saved by age 40</div></div>
          <div className={styles.statItem}><div className={styles.statNum}>6×</div><div className={styles.statLabel}>Salary saved by age 50</div></div>
          <div className={styles.statItem}><div className={styles.statNum}>$23,500</div><div className={styles.statLabel}>2026 401(k) employee contribution limit</div></div>
          <div className={styles.statItem}><div className={styles.statNum}>20 yrs</div><div className={styles.statLabel}>Until typical retirement</div></div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent}>

          <section id="why-40s-matter">
            <div className={styles.sectionLabel}>The 40s Reality</div>
            <h2>What Your 40s Really Mean for Retirement</h2>
            <p>Your 40s are a financial inflection point. For most Americans, this decade brings peak income, peak expenses (mortgage, kids, aging parents), and a growing sense of urgency about retirement. Here's the critical math: <strong>every extra $1,000/year you save in your 40s is worth roughly $4,000–$5,500 at retirement</strong> (at 7% returns over 20 years). That's still powerful compounding.</p>
            <p>The good news: people who are behind in their 40s can close the gap dramatically. The bad news: they need to act decisively. A 45-year-old contributing 20% of a $100,000 salary can still accumulate over $700,000 in additional retirement assets by 65.</p>

            <div className={styles.callout}><strong>If you're behind on savings, your 40s strategy is different from your 30s strategy.</strong> The focus shifts from "building good habits" to "maximizing every tax-advantaged dollar." Contribution limits, asset allocation, and employer match optimization become critical.</div>

            <div className={styles.priorityStrip}>
              <div className={styles.priorityItem}>
                <div className={styles.priorityRank}>#1</div>
                <div className={styles.priorityLabel}>Max the Match</div>
                <div className={styles.priorityDesc}>Non-negotiable. Every unmatched dollar is money left on the table.</div>
              </div>
              <div className={styles.priorityItem}>
                <div className={styles.priorityRank}>#2</div>
                <div className={styles.priorityLabel}>Audit Your Fees</div>
                <div className={styles.priorityDesc}>High-fee funds cost $100K+ over 20 years. Switch now — not later.</div>
              </div>
              <div className={styles.priorityItem}>
                <div className={styles.priorityRank}>#3</div>
                <div className={styles.priorityLabel}>Know Your Number</div>
                <div className={styles.priorityDesc}>Calculate your retirement target and gap. You can't close a gap you haven't measured.</div>
              </div>
            </div>
          </section>

          <section id="benchmarks">
            <div className={styles.sectionLabel}>Am I on Track?</div>
            <h2>Retirement Savings Benchmarks for Your 40s</h2>
            <p>Here's where Fidelity's salary-multiple benchmarks say you should be through your 40s. If you're below these, you'll find a catch-up plan in the next section.</p>

            <table className={styles.benchmarkTable}>
              <thead>
                <tr>
                  <th>Age</th>
                  <th>Fidelity Benchmark</th>
                  <th>If You Earn $80K</th>
                  <th>If You Earn $110K</th>
                  <th>If You Earn $150K</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>40</strong></td><td className={styles.highlight}>3× salary</td><td>$240,000</td><td>$330,000</td><td>$450,000</td></tr>
                <tr><td><strong>43</strong></td><td>3.5× salary</td><td>$280,000</td><td>$385,000</td><td>$525,000</td></tr>
                <tr><td><strong>45</strong></td><td className={styles.highlight}>4× salary</td><td>$320,000</td><td>$440,000</td><td>$600,000</td></tr>
                <tr><td><strong>48</strong></td><td>5× salary</td><td>$400,000</td><td>$550,000</td><td>$750,000</td></tr>
                <tr><td><strong>50</strong></td><td className={styles.highlight}>6× salary</td><td>$480,000</td><td>$660,000</td><td>$900,000</td></tr>
              </tbody>
            </table>

            <p>The median 401(k) balance for Americans aged 45–54 is approximately <strong>$87,000</strong> (Vanguard 2025) — far behind these benchmarks for most income levels. You're in the majority if you're behind. The question is how aggressively you respond.</p>

            <div className={styles.calloutRed}>🚨 <strong>Reality check:</strong> If you're significantly below the 3–4× benchmark at 40–45 and you don't make a change, you're on track for a retirement that's heavily dependent on Social Security — which averages just $1,907/month in 2026. That's survivable but not comfortable.</div>
          </section>

          <section id="catch-up">
            <div className={styles.sectionLabel}>Catch-Up Strategy</div>
            <h2>How to Catch Up If You're Behind</h2>
            <p>The most powerful levers for catching up in your 40s:</p>

            <div className={styles.stepGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>💰 Max Contributions Now</div>
                <h4>$23,500/year into 401(k)</h4>
                <p>If you're behind, you need to prioritize retirement savings over everything except match capture. At $23,500/year for 20 years with 7% returns, you'd add ~$1.04M — without a penny of current savings.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>📈 Backdoor Roth IRA</div>
                <h4>$7,000/year more — even at high income</h4>
                <p>If your income exceeds Roth IRA limits, use the Backdoor Roth strategy. Contribute to a non-deductible Traditional IRA and convert to Roth. Clean up prior IRA balances first to avoid the pro-rata rule.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>🏢 After-Tax Mega Backdoor Roth</div>
                <h4>Up to $46,500 more (if your plan allows)</h4>
                <p>If your 401(k) plan allows after-tax contributions and in-service withdrawals, you can contribute up to $46,500 more annually in after-tax dollars and convert to Roth. A powerful but underused strategy.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>🏥 HSA Investing</div>
                <h4>$8,550 family / $4,300 individual — invest it all</h4>
                <p>If you have an HDHP, max your HSA and invest every dollar. Pay medical costs out-of-pocket now, save receipts, and reimburse yourself tax-free in retirement. The triple tax advantage is unmatched.</p>
              </div>
            </div>
          </section>

          <section id="asset-allocation">
            <div className={styles.sectionLabel}>Investment Strategy</div>
            <h2>Asset Allocation in Your 40s</h2>
            <p>Your 40s are where asset allocation decisions start to really matter. You're still 15–25 years from retirement, but the runway is shorter — a 5-year bear market in your late 40s is more impactful than one in your 30s.</p>

            <table className={styles.benchmarkTable}>
              <thead>
                <tr><th>Age</th><th>Aggressive</th><th>Moderate (Recommended)</th><th>Conservative</th></tr>
              </thead>
              <tbody>
                <tr><td>40</td><td>90% stocks / 10% bonds</td><td>80% stocks / 20% bonds</td><td>65% stocks / 35% bonds</td></tr>
                <tr><td>45</td><td>85% stocks / 15% bonds</td><td>75% stocks / 25% bonds</td><td>60% stocks / 40% bonds</td></tr>
                <tr><td>49</td><td>80% stocks / 20% bonds</td><td>70% stocks / 30% bonds</td><td>55% stocks / 45% bonds</td></tr>
              </tbody>
            </table>

            <p>At 40–45, most investors should still lean toward equity-heavy allocations. The historical data is clear: over 15+ year horizons, stocks have never underperformed bonds. Your bigger risk in your 40s is <strong>not having enough growth</strong>, not volatility.</p>

            <h3>International Diversification</h3>
            <p>Many Americans are significantly underweight in international stocks. A common guideline is 20–40% of your equity allocation in international funds. This reduces single-market risk and captures growth in faster-growing economies. Target: a low-cost total international index fund (expense ratio under 0.10%).</p>

            <div className={styles.callout}><strong>Don't panic-sell during downturns.</strong> The single biggest mistake 40-somethings make is moving to cash after a market drop. Studies consistently show that missing the 10 best trading days in a decade — which almost always follow the worst days — cuts long-term returns nearly in half.</div>
          </section>

          <section id="tax-strategy">
            <div className={styles.sectionLabel}>Tax Strategy</div>
            <h2>Tax Optimization in Your 40s</h2>
            <p>At peak earnings, tax strategy becomes increasingly valuable. Every dollar you reduce in taxable income is worth 22–32 cents in immediate savings, plus decades of compounding on those retained dollars.</p>

            <div className={styles.stepGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>Pre-Tax 401(k)</div>
                <h4>Reduce taxable income by up to $23,500</h4>
                <p>If you're in the 24–32%+ bracket, Traditional 401(k) contributions provide immediate, significant tax relief. This frees up cash flow to invest more elsewhere.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>HSA Triple Advantage</div>
                <h4>Deductible + tax-free growth + tax-free withdrawals</h4>
                <p>No other account offers three tax benefits. HSA funds invested in index funds grow tax-free and can be withdrawn tax-free for any medical expense in retirement — which are substantial.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>Tax-Loss Harvesting</div>
                <h4>Turn losers into tax savings</h4>
                <p>In taxable accounts, systematically sell investments at a loss to offset capital gains elsewhere. A disciplined harvesting strategy can add 0.5–1.0% to after-tax returns annually.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>Roth Conversion Planning</div>
                <h4>Convert in low-income years</h4>
                <p>If you have a low-income year (job transition, sabbatical), it's an opportunity to convert Traditional IRA dollars to Roth at a lower rate — locking in tax-free growth for the remaining decades.</p>
              </div>
            </div>
          </section>

          <section id="competing-priorities">
            <div className={styles.sectionLabel}>Balancing Life</div>
            <h2>Competing Financial Priorities in Your 40s</h2>
            <p>Your 40s often involve the most expensive financial pressures of your life. Here's the priority framework:</p>

            <table className={styles.benchmarkTable}>
              <thead>
                <tr><th>Priority</th><th>Decision</th><th>Why</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>1st</strong></td><td>Emergency fund (3–6 months)</td><td>Without this, any shock raids retirement accounts with penalties</td></tr>
                <tr><td><strong>2nd</strong></td><td>401(k) up to full employer match</td><td>Instant 50–100% return — best investment available to you</td></tr>
                <tr><td><strong>3rd</strong></td><td>Max HSA (if HDHP-eligible)</td><td>Triple tax advantage + healthcare costs explode in retirement</td></tr>
                <tr><td><strong>4th</strong></td><td>Pay off high-interest debt (above 7%)</td><td>Guaranteed 7%+ return beats expected market return</td></tr>
                <tr><td><strong>5th</strong></td><td>Max IRA / Roth IRA ($7,000)</td><td>More tax-advantaged space, more investment flexibility</td></tr>
                <tr><td><strong>6th</strong></td><td>Max 401(k) to $23,500</td><td>Maximize tax-deferred compounding</td></tr>
                <tr><td><strong>7th</strong></td><td>529 / college savings</td><td>After retirement is funded — students can borrow, you cannot</td></tr>
                <tr><td><strong>8th</strong></td><td>Extra mortgage payments</td><td>Almost always beats by investing — especially with low-rate mortgages</td></tr>
              </tbody>
            </table>
          </section>

          <section id="checklist">
            <div className={styles.sectionLabel}>Action Plan</div>
            <h2>Your 40s Retirement Checklist</h2>
            <ul>
              <li>✅ Calculate your retirement number — use the <Link href="/retirement-income-calculator">Plootus Retirement Calculator</Link> with real spending data</li>
              <li>✅ Know your gap: (Retirement number) − (Current savings × growth factor) = how much more you need to save</li>
              <li>✅ Contribute enough to 401(k) to capture 100% of employer match</li>
              <li>✅ Audit all 401(k) investment funds — switch anything with expense ratio above 0.20%</li>
              <li>✅ Max HSA contributions if you have a high-deductible health plan — invest it, don't spend it</li>
              <li>✅ Open or max a Roth IRA ($7,000/year) — or use Backdoor Roth if over income limits</li>
              <li>✅ Roll over any old 401(k)s from previous employers into a consolidated IRA</li>
              <li>✅ Update life insurance — you likely need term life through age 65–70 if you have dependents</li>
              <li>✅ Create or update a will, healthcare proxy, and durable power of attorney</li>
              <li>✅ Start thinking about long-term care insurance — cheapest to buy in your 40s</li>
              <li>✅ Check Social Security earnings record at SSA.gov — ensure your income history is accurate</li>
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
              <li>Vanguard — How America Saves 2025</li>
              <li>IRS — 2026 Retirement Plan Contribution Limits (Rev. Proc. 2025-46)</li>
              <li>Social Security Administration — 2026 Benefit Data</li>
              <li>Federal Reserve — Survey of Consumer Finances 2022</li>
              <li>Plootus Research Team — April 2026</li>
            </ul>
          </div>

        </main>

        <aside className={styles.sidebar}>
          <div className={styles.tocBox}>
            <h3>On This Page</h3>
            <ol>
              <li><a href="#why-40s-matter">The 40s Reality</a></li>
              <li><a href="#benchmarks">Savings Benchmarks</a></li>
              <li><a href="#catch-up">Catch-Up Strategy</a></li>
              <li><a href="#asset-allocation">Asset Allocation</a></li>
              <li><a href="#tax-strategy">Tax Strategy</a></li>
              <li><a href="#competing-priorities">Priority Order</a></li>
              <li><a href="#checklist">Your Checklist</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>

          <div className={styles.ageNavCard}>
            <h4>🗺 Life Stage Guides</h4>
            <Link href="/retirement-planning-in-your-30s">🌱 In Your 30s</Link>
            <Link href="/retirement-planning-in-your-40s" className={styles.current}>⚡ In Your 40s (You're here)</Link>
            <Link href="/retirement-planning-in-your-50s">🏁 In Your 50s</Link>
          </div>

          <div className={styles.ctaCard}>
            <h4>What's my retirement number?</h4>
            <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
            <Link href="/retirement-calculator" className={styles.ctaBtn}>Check Here</Link>
          </div>

          <div className={styles.sidebarCard} style={{ background: 'var(--gold-light)', borderColor: '#F0C050' }}>
            <h4 style={{ color: '#7C5A00' }}>⚡ The Cost of Waiting</h4>
            <p style={{ fontSize: '13px', color: '#7C5A00', margin: 0 }}>Increasing your 401(k) from 6% to 10% at age 42 on a $100,000 salary adds approximately <strong>$340,000</strong> in additional savings by age 65. The best time to act is right now.</p>
          </div>

          <div className={styles.sidebarCard}>
            <h4>Related Guides</h4>
            <Link href="/401k-by-age">401(k) by Age Guide</Link>
            <Link href="/roth-conversion-strategy">Roth Conversion Strategy</Link>
            <Link href="/average-401k-balance-by-age">Average 401(k) by Age</Link>
            <Link href="/how-much-to-retire">How Much to Retire</Link>
            <Link href="/social-security-benefits">Social Security Guide</Link>
            <Link href="/federal-income-tax-brackets">Tax Brackets 2026</Link>
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

export default RetirementPlanningInYour40s;
