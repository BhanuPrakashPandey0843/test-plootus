import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './RetirementPlanningInYour30s.module.css';
import HubNav from '../HubNav/HubNav';
import PartnersSection from '../home/PartnersSection';

const RetirementPlanningInYour30s = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('');

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "How much should I have saved for retirement at 30?",
      a: "Fidelity recommends having 1x your annual salary saved by age 30 and 2x by age 35. If you earn $70,000, that means $70,000 saved by 30 and $140,000 by 35. These are benchmarks — if you're behind, the priority is increasing your savings rate immediately. Time in the market is the biggest driver of outcomes."
    },
    {
      q: "Should I choose Roth or Traditional 401(k) in my 30s?",
      a: "For most people in their 30s, Roth wins. Your tax bracket is likely lower now than it will be at peak earnings or in retirement when you factor in Social Security, pensions, and RMDs. Contributing Roth now locks in today's lower rates. If you're already in the 32%+ bracket, Traditional may make more sense — consider splitting contributions for tax diversification."
    },
    {
      q: "How much should I contribute to my 401(k) in my 30s?",
      a: "Minimum: enough to capture your full employer match (usually 3–6% of salary). Target: 15% of gross income total, including employer match. The 2026 employee limit is $23,500. If you can't afford 15% today, start where you are and increase by 1% per year through auto-escalation."
    },
    {
      q: "What if I'm starting retirement savings from zero in my mid-30s?",
      a: "You're not too late, but you do need to be more aggressive. Aim for 20% of gross income in retirement accounts. Maximize tax-advantaged space first (401k → Roth IRA → HSA). If your income allows, consider taxable brokerage investing beyond these limits. Every year of delay makes catching up harder but not impossible."
    },
    {
      q: "Should I pay off student loans or invest for retirement in my 30s?",
      a: "It depends on your interest rate. Federal student loans under 6%: invest first (expected market returns of ~7% beat the debt cost). Private loans above 7–8%: pay aggressively before maxing retirement accounts. Always capture the full 401(k) employer match first — it's an instant 50–100% return that beats any debt payoff."
    },
    {
      q: "What happens to my 401(k) if I change jobs?",
      a: "Your 401(k) balance belongs to you (subject to vesting schedules). When you leave a job, you can: (1) Roll it into your new employer's 401(k), (2) Roll it into a traditional IRA — usually the best option for investment flexibility and low fees, (3) Leave it with the old employer if the plan is good, or (4) Cash it out — never do this; you'll pay income taxes plus a 10% penalty."
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Retirement Planning in Your 30s | Plootus</title>
        <meta name="description" content="The complete guide to retirement planning in your 30s. 401(k) targets, Roth vs. Traditional, how much to save, investing strategy, and the most important decisions of your financial life." />
        <link rel="canonical" href="https://www.plootus.com/retirement-planning-in-your-30s" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Retirement Planning in Your 30s",
            "description": "How to build a retirement foundation in your 30s — savings targets, account strategy, and investing principles.",
            "datePublished": "2026-01-01",
            "dateModified": "2026-04-01",
            "author": { "@type": "Organization", "name": "Plootus Research Team", "url": "https://www.plootus.com" },
            "publisher": { "@type": "Organization", "name": "Plootus", "url": "https://www.plootus.com" },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.plootus.com/retirement-planning-in-your-30s" }
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
          <div className={styles.heroEyebrow}>🌱 Life Stage Guide</div>
          <h1>Retirement Planning in Your 30s</h1>
          <p className={styles.heroDeck}>Your 30s are the decade where retirement is won or lost. The decisions you make now — contribution rate, account type, asset allocation — have more impact than anything you'll do in your 50s or 60s. Here's exactly what to do, in order.</p>
          <div className={styles.heroMeta}>
            <span>📅 Updated April 2026</span>
            <span>⏱ 12 min read</span>
            <span>✍️ Plootus Research Team</span>
            <span>🎯 Ages 30–39</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}><div className={styles.statNum}>1×</div><div className={styles.statLabel}>Salary saved by age 30</div></div>
          <div className={styles.statItem}><div className={styles.statNum}>2×</div><div className={styles.statLabel}>Salary saved by age 35</div></div>
          <div className={styles.statItem}><div className={styles.statNum}>$23,500</div><div className={styles.statLabel}>2026 401(k) contribution limit</div></div>
          <div className={styles.statItem}><div className={styles.statNum}>30 yrs</div><div className={styles.statLabel}>Until typical retirement</div></div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent}>

          <section id="why-30s-matter">
            <div className={styles.sectionLabel}>Why It Matters</div>
            <h2>Why Your 30s Are the Most Important Decade</h2>
            <p>If you're in your 30s, you likely have 25–35 years before retirement. That timeframe is a massive advantage — and the math proves it. A dollar invested at 32 is worth roughly <strong>$7.60</strong> at age 65 (assuming 7% annual returns). That same dollar invested at 45 is worth only $3.87. Every year of delay cuts your compounding power significantly.</p>
            <p>Your 30s are also when competing financial priorities hit hardest: student loan debt, mortgage, childcare, car payments. The goal of this guide is to show you how to prioritize retirement without sacrificing everything else.</p>

            <div className={styles.callout}><strong>The single most impactful thing you can do in your 30s:</strong> Maximize your employer 401(k) match, then work toward contributing 15% of gross income total. Everything else is secondary.</div>

            <div className={styles.priorityStrip}>
              <div className={styles.priorityItem}>
                <div className={styles.priorityRank}>#1</div>
                <div className={styles.priorityLabel}>Get the Full Match</div>
                <div className={styles.priorityDesc}>Employer match is an instant 50–100% return. Never leave it behind.</div>
              </div>
              <div className={styles.priorityItem}>
                <div className={styles.priorityRank}>#2</div>
                <div className={styles.priorityLabel}>Max an HSA</div>
                <div className={styles.priorityDesc}>Triple tax advantage. Best retirement account most people ignore.</div>
              </div>
              <div className={styles.priorityItem}>
                <div className={styles.priorityRank}>#3</div>
                <div className={styles.priorityLabel}>Max Your 401(k)</div>
                <div className={styles.priorityDesc}>$23,500 limit in 2026. Prioritize Roth if income allows.</div>
              </div>
            </div>
          </section>

          <section id="benchmarks">
            <div className={styles.sectionLabel}>Am I on Track?</div>
            <h2>Retirement Savings Benchmarks for Your 30s</h2>
            <p>Fidelity's salary-multiple benchmarks are the most widely used rule of thumb. They assume you start saving at 25 and invest in a diversified portfolio targeting 7% annual return. Here's where you should be:</p>

            <table className={styles.benchmarkTable}>
              <thead>
                <tr>
                  <th>Age</th>
                  <th>Fidelity Benchmark</th>
                  <th>If You Earn $60K</th>
                  <th>If You Earn $90K</th>
                  <th>If You Earn $120K</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>30</strong></td><td className={styles.highlight}>1× salary</td><td>$60,000</td><td>$90,000</td><td>$120,000</td></tr>
                <tr><td><strong>32</strong></td><td>1.25× salary</td><td>$75,000</td><td>$112,500</td><td>$150,000</td></tr>
                <tr><td><strong>35</strong></td><td className={styles.highlight}>2× salary</td><td>$120,000</td><td>$180,000</td><td>$240,000</td></tr>
                <tr><td><strong>38</strong></td><td>2.5× salary</td><td>$150,000</td><td>$225,000</td><td>$300,000</td></tr>
                <tr><td><strong>40</strong></td><td className={styles.highlight}>3× salary</td><td>$180,000</td><td>$270,000</td><td>$360,000</td></tr>
              </tbody>
            </table>

            <div className={styles.calloutGold}>⚠️ <strong>Behind on savings?</strong> Don't panic — increase your contribution rate by 1–2% per year. Automating this annual increase is the single highest-impact low-effort action you can take. Many 401(k) plans have a "auto-escalate" feature that does this automatically.</div>

            <p>The average 401(k) balance for Americans in their early 30s is around <strong>$35,000</strong> (Vanguard 2025 data) — well below the Fidelity benchmark for most income levels. If you're starting from zero in your mid-30s, you'll need to save more aggressively (17–20%) to catch up.</p>
          </section>

          <section id="contribution-limits">
            <div className={styles.sectionLabel}>2026 Limits</div>
            <h2>2026 Contribution Limits You Need to Know</h2>
            <p>These are the maximum amounts you can contribute to tax-advantaged accounts in 2026. In your 30s, your goal should be to hit as many of these as you can, in order of priority.</p>

            <table className={styles.benchmarkTable}>
              <thead>
                <tr><th>Account</th><th>2026 Limit</th><th>Tax Benefit</th><th>Priority</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>401(k) / 403(b)</strong></td><td className={styles.highlight}>$23,500</td><td>Pre-tax or Roth</td><td>High (after match)</td></tr>
                <tr><td><strong>IRA (Roth or Traditional)</strong></td><td>$7,000</td><td>Tax-free growth (Roth)</td><td>High</td></tr>
                <tr><td><strong>HSA (individual)</strong></td><td>$4,300</td><td>Triple tax-free</td><td>Very High if eligible</td></tr>
                <tr><td><strong>HSA (family)</strong></td><td>$8,550</td><td>Triple tax-free</td><td>Very High if eligible</td></tr>
                <tr><td><strong>401(k) total (incl. employer)</strong></td><td>$70,000</td><td>Pre-tax or Roth</td><td>After above</td></tr>
              </tbody>
            </table>

            <p>Most people in their 30s should prioritize in this exact order: <strong>(1)</strong> 401(k) up to full employer match → <strong>(2)</strong> HSA if you have an HDHP → <strong>(3)</strong> Roth IRA → <strong>(4)</strong> max 401(k) to $23,500 → <strong>(5)</strong> taxable brokerage.</p>
          </section>

          <section id="roth-vs-traditional">
            <div className={styles.sectionLabel}>Account Strategy</div>
            <h2>Roth vs. Traditional in Your 30s</h2>
            <p>This is the most consequential account decision most people in their 30s face. Here's the framework:</p>

            <div className={styles.stepGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>✅ Choose Roth If…</div>
                <h4>You're in the 10%–22% bracket</h4>
                <p>Pay taxes now at today's lower rate. Your withdrawals in retirement will be completely tax-free, including all the decades of growth.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>Consider Traditional If…</div>
                <h4>You're in the 32%+ bracket</h4>
                <p>The deduction now is worth more than the future tax savings. A dollar saved from 32% tax beats paying Roth taxes at lower future rates.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>🏆 Best of Both Worlds</div>
                <h4>Use both (tax diversification)</h4>
                <p>Split contributions between Traditional and Roth. This gives you flexibility to optimize withdrawals across multiple tax brackets in retirement.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>⚠️ Income Limits</div>
                <h4>Roth IRA phase-out: $150K–$165K single / $236K–$246K MFJ</h4>
                <p>Above these limits, use a Backdoor Roth IRA conversion or prioritize Roth 401(k) instead — no income limits apply there.</p>
              </div>
            </div>

            <div className={styles.callout}><strong>For most people in their 30s:</strong> Roth wins. You're likely in the 22% bracket or lower, your income will grow, and Social Security + RMDs in retirement could push you into higher brackets than you expect. Paying tax on the seed, not the harvest, is powerful.</div>
          </section>

          <section id="investing-strategy">
            <div className={styles.sectionLabel}>Investment Strategy</div>
            <h2>How to Invest Your Retirement Accounts in Your 30s</h2>
            <p>With 25–35 years until retirement, you can and should take on more risk than people in their 50s or 60s. Time is your risk mitigation. A market downturn in your 30s has decades to recover.</p>

            <h3>Asset Allocation in Your 30s</h3>
            <p>A classic starting point: <strong>90% stocks / 10% bonds</strong> or even 100% stocks if you have high risk tolerance. The key principle: your bond allocation should roughly equal your age, so at 35 you'd hold about 35% bonds — though many modern advisors suggest being even more aggressive given longer life expectancies.</p>

            <table className={styles.benchmarkTable}>
              <thead>
                <tr><th>Age</th><th>Aggressive</th><th>Moderate</th><th>Conservative</th></tr>
              </thead>
              <tbody>
                <tr><td>30</td><td>95% stocks / 5% bonds</td><td>85% stocks / 15% bonds</td><td>70% stocks / 30% bonds</td></tr>
                <tr><td>35</td><td>90% stocks / 10% bonds</td><td>80% stocks / 20% bonds</td><td>65% stocks / 35% bonds</td></tr>
                <tr><td>39</td><td>85% stocks / 15% bonds</td><td>75% stocks / 25% bonds</td><td>60% stocks / 40% bonds</td></tr>
              </tbody>
            </table>

            <h3>What to Actually Buy</h3>
            <p>Keep it simple. For most people in their 30s, a 3-fund portfolio covers everything:</p>
            <ul>
              <li><strong>Total US Stock Market Index Fund</strong> — broad US exposure (e.g., VTSAX, FSKAX, SWTSX)</li>
              <li><strong>Total International Stock Market Index Fund</strong> — global diversification (e.g., VTIAX, FZILX)</li>
              <li><strong>Total Bond Market Index Fund</strong> — stability ballast (e.g., VBTLX, FXNAX)</li>
            </ul>
            <p>If your 401(k) doesn't have index funds with low expense ratios, a <strong>Target Date Fund</strong> (e.g., "Target 2055 Fund") is the best single-fund option — it automatically rebalances as you age.</p>

            <div className={styles.calloutBlue}>💡 <strong>Expense ratios matter more than you think.</strong> A fund with a 1.0% expense ratio vs. 0.05% costs you an extra $95,000 over 30 years on a $100,000 portfolio. Always choose the lowest-cost index fund available in your plan.</div>
          </section>

          <section id="competing-priorities">
            <div className={styles.sectionLabel}>Balancing Life</div>
            <h2>Competing Financial Priorities in Your 30s</h2>
            <p>Retirement isn't your only financial obligation in your 30s. Here's how to think through the tradeoffs:</p>

            <div className={styles.stepGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>Student Loans</div>
                <h4>Federal loans under 6%? Invest first.</h4>
                <p>Expected market returns (7%) beat low-rate debt. If interest is above 7–8%, pay aggressively before maxing retirement accounts.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>Emergency Fund</div>
                <h4>3–6 months of expenses before investing heavily</h4>
                <p>Without an emergency fund, a job loss forces you to raid retirement accounts with taxes and penalties. Build this first.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>Mortgage vs. Retirement</div>
                <h4>Almost always: invest in retirement over extra mortgage payments</h4>
                <p>Mortgage interest is deductible and rates are typically 4–7%. Expected investment returns beat that after tax in most scenarios.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>529 / Kids' Education</div>
                <h4>Retirement first, then 529</h4>
                <p>You can borrow for college. You cannot borrow for retirement. Secure your own financial oxygen mask before funding a 529.</p>
              </div>
            </div>
          </section>

          <section id="key-actions">
            <div className={styles.sectionLabel}>Action Plan</div>
            <h2>Your 30s Retirement Checklist</h2>
            <ul>
              <li>✅ Contribute at least enough to 401(k) to get the full employer match</li>
              <li>✅ Open and fund a Roth IRA (if income-eligible) — $7,000/year</li>
              <li>✅ Open an HSA if enrolled in a high-deductible health plan — invest it, don't spend it</li>
              <li>✅ Set up auto-escalation on your 401(k) — increase 1% per year until you hit 15%</li>
              <li>✅ Consolidate any old 401(k)s from previous employers into an IRA or new 401(k)</li>
              <li>✅ Choose low-cost index funds — target expense ratios under 0.10%</li>
              <li>✅ Increase allocation to stocks if you're holding too many bonds for your age</li>
              <li>✅ Designate beneficiaries on all retirement accounts</li>
              <li>✅ Create or update a basic will and life insurance coverage if you have dependents</li>
              <li>✅ Track your net worth annually — use Plootus to connect and monitor all accounts</li>
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
              <li>Federal Reserve — Survey of Consumer Finances 2022</li>
              <li>Plootus Research Team — April 2026</li>
            </ul>
          </div>

        </main>

        <aside className={styles.sidebar}>
          <div className={styles.tocBox}>
            <h3>On This Page</h3>
            <ol>
              <li><a href="#why-30s-matter">Why Your 30s Matter</a></li>
              <li><a href="#benchmarks">Savings Benchmarks</a></li>
              <li><a href="#contribution-limits">2026 Contribution Limits</a></li>
              <li><a href="#roth-vs-traditional">Roth vs. Traditional</a></li>
              <li><a href="#investing-strategy">Investment Strategy</a></li>
              <li><a href="#competing-priorities">Balancing Priorities</a></li>
              <li><a href="#key-actions">Your Checklist</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>

          <div className={styles.ageNavCard}>
            <h4>🗺 Life Stage Guides</h4>
            <Link href="/retirement-planning-in-your-30s" className={styles.current}>🌱 In Your 30s (You're here)</Link>
            <Link href="/retirement-planning-in-your-40s">⚡ In Your 40s</Link>
            <Link href="/retirement-planning-in-your-50s">🏁 In Your 50s</Link>
          </div>

          <div className={styles.ctaCard}>
            <h4>What's my retirement number?</h4>
            <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
            <Link href="/retirement-calculator" className={styles.ctaBtn}>Check Here</Link>
          </div>

          <div className={styles.sidebarCard} style={{ background: 'var(--gold-light)', borderColor: '#F0C050' }}>
            <h4 style={{ color: '#7C5A00' }}>⚡ Power Move</h4>
            <p style={{ fontSize: '13px', color: '#7C5A00', margin: 0 }}>Investing $500/month starting at 30 grows to <strong>$1.2M</strong> by 65 at 7% returns. Starting at 40, that same $500/month grows to only <strong>$567K</strong>. The cost of waiting 10 years: $633,000.</p>
          </div>

          <div className={styles.sidebarCard}>
            <h4>Related Guides</h4>
            <Link href="/401k-by-age">401(k) by Age Guide</Link>
            <Link href="/roth-vs-traditional">Roth vs. Traditional</Link>
            <Link href="/ira-contribution-limits">IRA Limits 2026</Link>
            <Link href="/average-401k-balance-by-age">Average 401(k) by Age</Link>
            <Link href="/how-much-to-retire">How Much to Retire</Link>
            <Link href="/retire-early">FIRE Guide 2026</Link>
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

export default RetirementPlanningInYour30s;
