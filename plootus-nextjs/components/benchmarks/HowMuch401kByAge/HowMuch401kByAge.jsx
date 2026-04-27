import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Chart from 'chart.js/auto';
import styles from './HowMuch401kByAge.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const HowMuch401kByAge = () => {
  const router = useRouter();
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Age 30', 'Age 40', 'Age 50', 'Age 60', 'Age 67'],
          datasets: [
            {
              label: 'Fidelity Benchmark ($75K salary)',
              data: [75000, 225000, 450000, 600000, 750000],
              backgroundColor: 'rgba(59, 91, 219, 0.85)',
              borderRadius: 6,
            },
            {
              label: 'Actual Average Balance',
              data: [67300, 104000, 192300, 249300, 232000],
              backgroundColor: 'rgba(245, 159, 0, 0.8)',
              borderRadius: 6,
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
                font: { family: "Plus Jakarta Sans", size: 12 },
              },
            },
            tooltip: {
              callbacks: {
                label: (context) => context.dataset.label + ': $' + context.raw.toLocaleString(),
              },
            },
          },
          scales: {
            x: {
              ticks: {
                font: { size: 12, family: "Plus Jakarta Sans" },
              },
              grid: { display: false },
            },
            y: {
              ticks: {
                callback: (value) => '$' + (value / 1000).toFixed(0) + 'k',
                font: { size: 11, family: "Plus Jakarta Sans" },
              },
              grid: { color: 'rgba(0,0,0,0.04)' },
            },
          },
        },
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
        <title>How Much Should You Have in Your 401(k) by Age? (2026) | Plootus</title>
        <meta name="description" content="Based on Fidelity benchmarks and data from 30M+ participants, here is how much you should have in your 401(k) at every age. See if you're on track." />
        <link rel="canonical" href="https://www.plootus.com/401k-by-age" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How Much Should You Have in Your 401(k) by Age?",
            "description": "Comprehensive guide on 401(k) savings benchmarks at every age, based on Fidelity and Vanguard data.",
            "author": {
              "@type": "Organization",
              "name": "Plootus Research"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Plootus",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.plootus.com/logo.png"
              }
            },
            "datePublished": "2026-03-01",
            "dateModified": "2026-03-01"
          })}
        </script>
      </Head>

      <HubNav />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <div className={styles.heroTag}>📘 Plootus Guide · Updated 2026</div>
            <h1>How Much Should You Have in Your 401(k) by Age?</h1>
            <p className={styles.heroSub}>Based on Fidelity benchmarks and data from over 30 million retirement plan participants, here's exactly where you should be at every age — and what to do if you're behind.</p>
            <div className={styles.heroMeta}>
              <span>By Plootus Research</span>
              <span>Updated March 2026</span>
              <span>15 min read</span>
            </div>
          </div>
          <div className={styles.heroQuick}>
            <div className={styles.hqTitle}>Quick Reference: Fidelity Benchmarks</div>
            <div className={styles.hqItem}><span>By age 30</span><span className={styles.hqVal}>1× salary</span></div>
            <div className={styles.hqItem}><span>By age 40</span><span className={styles.hqVal}>3× salary</span></div>
            <div className={styles.hqItem}><span>By age 50</span><span className={styles.hqVal}>6× salary</span></div>
            <div className={styles.hqItem}><span>By age 60</span><span className={styles.hqVal}>8× salary</span></div>
            <div className={styles.hqItem}><span>By age 67</span><span className={styles.hqVal}>10× salary</span></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.pageWrap}>
        <main className={styles.main}>
          {/* Intro Section */}
          <section id="intro">
            <div className={styles.secLabel}>Why This Guide Matters</div>
            <h2>The Problem With the "Am I On Track?" Question</h2>
            <p>Most people have no idea whether their 401(k) balance is good, bad, or catastrophic for their age. The financial industry throws around averages skewed by the ultra-wealthy, and generic advice like "save 15%" doesn't tell you whether you'll actually retire when you want to.</p>
            <p>This guide uses Fidelity's widely-cited savings benchmarks — the most practical framework for gauging retirement readiness — combined with real data from Vanguard's <em>How America Saves 2025</em> and Fidelity's Q4 2025 analysis of over 30 million retirement plan participants.</p>
            <div className={`${styles.callout} ${styles.orange}`}>
              <p>⚠️ <strong>The Median Reality Check:</strong> The average 401(k) balance across all ages is $148,153 — but the <em>median</em> is just $38,176 (Vanguard, 2025). That 4× gap means most Americans are much further behind than headline numbers suggest. When benchmarking yourself, use the median, not the average.</p>
            </div>
          </section>

          {/* Timeline Section */}
          <section id="timeline">
            <div className={styles.secLabel}>Age-by-Age Breakdown</div>
            <h2>401(k) Savings Benchmarks at Every Age</h2>
            <p>These milestones assume a target retirement age of 67, a consistent savings rate, and replacing ~45% of pre-retirement income from personal savings, with Social Security covering the rest (Fidelity Investments, 2025).</p>

            <Timeline />
            <p className={styles.timelineSources}>
              Sources: Fidelity retirement benchmark framework; Vanguard How America Saves 2025; Fidelity Q4 2025 Retirement Analysis; IRS 2026 contribution limits. Plootus Research 2026.
            </p>
          </section>

          {/* Inline CTA */}
          <div className={styles.inlineCta}>
            <div className={styles.ictText}>
              <h3>Where do you stand right now?</h3>
              <p>Plootus connects to your actual accounts and shows progress against these exact benchmarks — personalized to your salary and age.</p>
            </div>
            <div className={styles.ictBtn} onClick={() => router.push('/retirement-calculator')} style={{cursor: 'pointer'}}>See My Benchmarks →</div>
          </div>

          {/* Full Table Section */}
          <section id="full-table">
            <div className={styles.secLabel}>Complete Benchmark Table</div>
            <h2>Fidelity 401(k) Benchmarks at Every Income Level</h2>
            <p>Fidelity's benchmarks are expressed as a multiple of annual salary. The table below maps those targets across three example income levels and compares them against actual average balances from Fidelity and Vanguard:</p>
            <FullTable />
          </section>

          {/* Contribution Limits Section */}
          <section id="contrib-limits">
            <div className={styles.secLabel}>2026 Contribution Limits</div>
            <h2>How Much Can You Put Into Your 401(k) in 2026?</h2>
            <ContributionBox />
          </section>

          {/* Action Plan Section */}
          <section id="action-plan">
            <div className={styles.secLabel}>If You're Behind</div>
            <h2>The 4-Step Action Plan for Catching Up</h2>
            <ActionGrid />
            <div className={`${styles.callout} ${styles.red}`}>
              <p>⚠️ <strong>Don't Chase Returns to Catch Up:</strong> Taking on excessive portfolio risk in the final 5–10 years before retirement can wipe out years of progress. Focus on maximizing contributions and broad index funds with low expense ratios instead.</p>
            </div>
          </section>

          {/* Chart Section */}
          <section id="chart">
            <div className={styles.secLabel}>Visual</div>
            <h2>Fidelity Benchmark vs. Actual Average Balances</h2>
            <div className={styles.chartBox}>
              <h3>Savings Benchmark vs. Reality at Each Decade (Assumes $75,000 Salary)</h3>
              <div style={{ height: '300px', position: 'relative' }}>
                <canvas ref={chartRef}></canvas>
              </div>
              <p className={styles.chartSrc}>Benchmark = Fidelity target × $75,000 salary. Actual = Fidelity Q4 2025 / Vanguard How America Saves 2025 cohort averages. Source: Plootus Research 2026.</p>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq">
            <div className={styles.secLabel}>FAQs</div>
            <h2>Frequently Asked Questions</h2>
            <FAQSection />
          </section>

          {/* Sources */}
          <Sources />

          {/* Second Inline CTA */}
          <div className={`${styles.inlineCta} ${styles.inlineCtaDark}`}>
            <div className={styles.ictText}>
              <h3>See exactly where you stand — not the average</h3>
              <p>Plootus connects to your actual 401(k) and shows your personalized benchmark status in minutes.</p>
            </div>
            <div className={styles.ictBtn} onClick={() => router.push('/')} style={{cursor: 'pointer'}}>Start Free →</div>
          </div>
        </main>

        {/* Sidebar */}
        <aside className={styles.aside}>
          <TOCBox />
          <SCBox router={router} />
          <RelatedBox router={router} />
          <KeyStatBox />
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

// Timeline Component
const Timeline = () => {
  return (
    <div className={styles.timeline}>
      <TLItem 
        age="25"
        ageLabel="Early 20s"
        targetLabel="Start now"
        targetSub="Begin contributing"
        avgLabel="~$6,900"
        avgSub="Under-25 average"
        rateLabel="6–10%"
        rateSub="Including employer match"
        body="At 25, your job is simply to start. Even $50/month invested now grows to over $10,000 by retirement at 7% average annual growth. The single most important action: capture your full employer match — that's an immediate 50–100% return on contributions."
        tags={[{ text: '✓ Get the full match', type: 'good' }, { text: '✓ Pick low-cost index funds', type: '' }]}
      />
      <TLItem 
        age="30"
        ageLabel="Age 30"
        targetLabel="1× salary"
        targetSub="On $75K: $75,000"
        avgLabel="~$67,300"
        avgSub="Millennial 401(k) avg."
        rateLabel="~$22,000"
        rateSub="Most 30-year-olds"
        body="By 30, the benchmark is 1× your annual salary. Student debt, early-career salaries, and career changes mean most people are behind — and that's okay. At 30, you still have 35+ years of compounding ahead of you."
        tags={[{ text: '✓ Target 12–15% savings rate', type: '' }, { text: '✓ Open a Roth IRA alongside 401(k)', type: '' }]}
      />
      <TLItem 
        age="40"
        ageLabel="Age 40"
        targetLabel="3× salary"
        targetSub="On $90K: $270,000"
        avgLabel="~$104,000"
        avgSub="401(k) only, 40s cohort"
        rateLabel="~$40,000"
        rateSub="Vanguard estimate"
        body="Your 40s are your peak earning decade — and your most important savings decade. Salaries are typically highest, and every extra percentage point saved now has ~25 years to compound. Bump your savings rate 1% every time you get a raise."
        tags={[{ text: '✓ Target 15–20% savings rate', type: '' }, { text: '✓ Diversify: IRA + taxable accounts', type: '' }]}
      />
      <TLItem 
        age="50"
        ageLabel="Age 50 ⭐"
        targetLabel="6× salary"
        targetSub="On $100K: $600,000"
        avgLabel="~$192,300"
        avgSub="Gen X avg., 401(k)"
        rateLabel="$32,500"
        rateSub="Catch-up starts at 50 (IRS)"
        body="Age 50 is critical: catch-up contributions begin. You can save $8,000 more per year above the standard limit. Consistently saving $32,500/year from age 50–65 can add over $700,000 to your balance at 7% growth."
        tags={[{ text: '⬆ Catch-Up: +$8,000/yr available', type: 'catchup' }, { text: '✓ Max out catch-up if at all possible', type: '' }]}
        current
      />
      <TLItem 
        age="60"
        ageLabel="Age 60 ⭐"
        targetLabel="8× salary"
        targetSub="On $100K: $800,000"
        avgLabel="~$249,300"
        avgSub="Boomer avg., 401(k)"
        rateLabel="$35,750"
        rateSub="SECURE 2.0 Act (2026)"
        body="Under the SECURE 2.0 Act, workers aged 60–63 can contribute $35,750 in 2026 — the highest limit ever. This window closes at 64. Also: model Social Security timing, RMD strategy, and withdrawal order now to minimize retirement taxes."
        tags={[{ text: '🔥 Super Catch-Up: $35,750/yr (60–63)', type: 'catchup' }, { text: '✓ Plan Social Security timing', type: '' }]}
        current
      />
      <TLItem 
        age="67"
        ageLabel="Retirement"
        targetLabel="10× salary"
        targetSub="On $80K: $800,000"
        avgLabel="~$232,000"
        avgSub="65+ group, 401(k)"
        rateLabel="4%/year"
        rateSub="~30-year horizon (Bengen)"
        body="At retirement, the target is 10× your final salary. Combined with Social Security (~$24,894/yr avg. per SSA, 2025), this should replace 80–90% of pre-retirement income. Each extra year of work can extend how long your money lasts by 3–5 years."
        tags={[{ text: '✓ Delay SS to age 70 if possible', type: 'good' }, { text: '✓ Withdrawal order: taxable accounts first', type: '' }]}
      />
    </div>
  );
};

const TLItem = ({ age, ageLabel, targetLabel, targetSub, avgLabel, avgSub, rateLabel, rateSub, body, tags, current = false }) => (
  <div className={`${styles.tlItem} ${current ? styles.current : ''}`}>
    <div className={styles.tlAge}>
      <div className={styles.tlBubble}>{age}</div>
      <div className={styles.tlAgeLabel}>{ageLabel}</div>
    </div>
    <div className={styles.tlCard}>
      <div className={styles.tlCardHead}>
        <div className={styles.tlMetric}>
          <div className={styles.tmLabel}>{age === '25' ? 'Target' : 'Fidelity Benchmark'}</div>
          <div className={styles.tmVal}>{targetLabel}</div>
          <div className={styles.tmSub}>{targetSub}</div>
        </div>
        <div className={styles.tlMetric}>
          <div className={styles.tmLabel}>{age === '25' ? 'Avg. Balance (Vanguard)' : 'Actual Avg. (Fidelity)'}</div>
          <div className={styles.tmVal}>{avgLabel}</div>
          <div className={styles.tmSub}>{avgSub}</div>
        </div>
        <div className={styles.tlMetric}>
          <div className={styles.tmLabel}>{age === '50' ? '2026 Catch-Up Limit' : age === '60' ? 'Super Catch-Up (60–63)' : age === '67' ? 'Safe Withdrawal Rate' : 'Savings Rate Needed'}</div>
          <div className={styles.tmVal}>{rateLabel}</div>
          <div className={styles.tmSub}>{rateSub}</div>
        </div>
      </div>
      <div className={styles.tlCardBody}>
        {body}
        <div className={styles.tlTags}>
          {tags.map((tag, i) => (
            <span key={i} className={`${styles.tlTag} ${tag.type === 'catchup' ? styles.catchup : tag.type === 'good' ? styles.good : ''}`}>{tag.text}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Full Table Component
const FullTable = () => (
  <div className={styles.tblWrap}>
    <table className={styles.dataTbl} summary="Data comparison table">
      <thead>
        <tr>
          <th scope="col">Age</th>
          <th scope="col">Benchmark<br/>(×Salary)</th>
          <th scope="col">$60K<br/>Salary</th>
          <th scope="col">$90K<br/>Salary</th>
          <th scope="col">$130K<br/>Salary</th>
          <th scope="col">Actual Avg.<br/>Balance</th>
          <th scope="col">Status vs.<br/>Benchmark*</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>30</strong></td><td>1× salary</td><td>$60,000</td><td>$90,000</td><td>$130,000</td><td>~$67,300 (Fidelity Millennials)</td><td className={styles.onTrack}>✓ Near-target</td></tr>
        <tr><td><strong>35</strong></td><td>2× salary</td><td>$120,000</td><td>$180,000</td><td>$260,000</td><td>~$85,000 (est.)</td><td className={styles.behind}>⚠ Behind</td></tr>
        <tr><td><strong>40</strong></td><td>3× salary</td><td>$180,000</td><td>$270,000</td><td>$390,000</td><td>~$104,000 (Fidelity)</td><td className={styles.behind}>⚠ Significantly behind</td></tr>
        <tr><td><strong>45</strong></td><td>4× salary</td><td>$240,000</td><td>$360,000</td><td>$520,000</td><td>~$148,000 (est.)</td><td className={styles.behind}>⚠ Significantly behind</td></tr>
        <tr><td><strong>50</strong></td><td>6× salary</td><td>$360,000</td><td>$540,000</td><td>$780,000</td><td>~$192,300 (Fidelity Gen X)</td><td className={styles.behind}>⚠ Significantly behind</td></tr>
        <tr><td><strong>60</strong></td><td>8× salary</td><td>$480,000</td><td>$720,000</td><td>$1,040,000</td><td>~$249,300 (Fidelity Boomers)</td><td className={styles.behind}>⚠ Behind</td></tr>
        <tr><td><strong>67</strong></td><td>10× salary</td><td>$600,000</td><td>$900,000</td><td>$1,300,000</td><td>~$232,000 (Vanguard 65+)</td><td className={styles.behind}>⚠ Significantly behind</td></tr>
      </tbody>
    </table>
  </div>
);

// Contribution Box Component
const ContributionBox = () => (
  <div className={styles.contribBox}>
    <h3>2026 IRS 401(k) Contribution Limits</h3>
    <p style={{ fontSize: '13px', color: 'white', opacity: 0.9, marginBottom: '16px' }}>Applies to traditional and Roth 401(k) contributions combined (IRS, 2026)</p>
    <div className={styles.contribGrid}>
      <div className={styles.contribItem}>
        <div className={styles.ciLabel}>Under Age 50</div>
        <div className={styles.ciAmount}>$24,500</div>
        <div className={styles.ciNote}>Up from $23,500 in 2025</div>
      </div>
      <div className={styles.contribItem}>
        <div className={styles.ciLabel}>Age 50–59 & 64+</div>
        <div className={styles.ciAmount}>$32,500</div>
        <div className={styles.ciNote}>+$8,000 standard catch-up</div>
      </div>
      <div className={styles.contribItem}>
        <div className={styles.ciLabel}>Age 60–63 (SECURE 2.0)</div>
        <div className={styles.ciAmount}>$35,750</div>
        <div className={styles.ciNote}>+$11,250 super catch-up</div>
      </div>
    </div>
    <p style={{ fontSize: '11px', color: 'white', opacity: 0.8, marginTop: '14px', marginBottom: '0' }}>Source: IRS Retirement Plan Contribution Limits 2026; SECURE 2.0 Act (Consolidated Appropriations Act, 2023). Super catch-up began with the 2025 tax year.</p>
  </div>
);

// Action Grid Component
const ActionGrid = () => (
  <div className={styles.actionGrid}>
    <div className={styles.actionCard}>
      <div className={styles.actionNum}>01</div>
      <h4>Maximize your employer match first</h4>
      <p>Before anything else, contribute enough to get the full employer match. This is a guaranteed 50–100% return. Fidelity estimates 1 in 4 workers leaves this money unclaimed.</p>
    </div>
    <div className={styles.actionCard}>
      <div className={styles.actionNum}>02</div>
      <h4>Use the 1% annual increase strategy</h4>
      <p>Each time you get a raise, increase contributions by 1%. Over 10 years this can add 25% or more to your retirement balance. Many 401(k) plans offer automatic escalation — turn it on.</p>
    </div>
    <div className={styles.actionCard}>
      <div className={styles.actionNum}>03</div>
      <h4>Max out catch-up contributions at 50+</h4>
      <p>At 50, you can contribute $32,500/year. At 60–63, the super catch-up allows $35,750. Maxing out from 55–65 at 7% growth can add over $450,000 to your balance by retirement.</p>
    </div>
    <div className={styles.actionCard}>
      <div className={styles.actionNum}>04</div>
      <h4>Open and fund an IRA alongside your 401(k)</h4>
      <p>A traditional or Roth IRA adds up to $7,000/year in tax-advantaged space ($8,000 at 50+). Savers with multiple account types are significantly more likely to meet retirement goals.</p>
    </div>
  </div>
);

// FAQ Component
const FAQSection = () => (
  <>
    <details className={styles.faqItem}>
      <summary className={styles.faqQ}>How much should I have in my 401(k) at 40?</summary>
      <div className={styles.faqA}>Fidelity recommends 3× your annual salary by age 40. On a $75,000 salary, that's $225,000. The average 40-something has about $104,000 — well below benchmark. Your 40s are peak earning years with 25+ years of compounding remaining. Focus on raising your savings rate, not chasing returns. Source: Fidelity Q4 2025 Retirement Analysis.</div>
    </details>
    <details className={styles.faqItem}>
      <summary className={styles.faqQ}>Is $200,000 in my 401(k) at 50 enough?</summary>
      <div className={styles.faqA}>It depends on your salary. On a $50,000 salary, $200,000 at 50 equals 4× salary — behind Fidelity's 6× benchmark. On $33,000, it exceeds the benchmark. Context matters enormously. With 15–17 years until typical retirement and $32,500/year in available contributions, there is real ability to close gaps from age 50 onward.</div>
    </details>
    <details className={styles.faqItem}>
      <summary className={styles.faqQ}>What is the 401(k) contribution limit for 2026?</summary>
      <div className={styles.faqA}>The 2026 standard limit is $24,500. Workers 50+ can add $8,000 catch-up (total: $32,500). Ages 60–63 get an $11,250 super catch-up (total: $35,750) under the SECURE 2.0 Act. These limits apply to traditional and Roth 401(k) contributions combined. Source: IRS, 2026.</div>
    </details>
    <details className={styles.faqItem}>
      <summary className={styles.faqQ}>Should I contribute to a traditional or Roth 401(k)?</summary>
      <div className={styles.faqA}>Traditional 401(k): pre-tax contributions reduce taxable income now, but withdrawals in retirement are fully taxed. Roth 401(k): after-tax contributions, but qualified withdrawals in retirement are completely tax-free. If you expect higher taxes in retirement (or are early-career), Roth typically wins. In peak earning years expecting lower retirement income, traditional often wins. Many planners recommend splitting to create tax diversification.</div>
    </details>
    <details className={styles.faqItem}>
      <summary className={styles.faqQ}>What percentage of income should go to my 401(k)?</summary>
      <div className={styles.faqA}>Fidelity recommends 15% of pre-tax income toward retirement total — including employer contributions. The current average total rate is 14.3% (Fidelity Q1 2025). Always contribute at least enough to capture the full employer match (typically 3–6% of salary). If behind benchmark, targeting 18–20% with automatic escalation is appropriate.</div>
    </details>
  </>
);

// Sources Component
const Sources = () => (
  <div className={styles.sources}>
    <h3>📚 Sources</h3>
    <ul>
      <li>Vanguard Group, <em>How America Saves 2025</em> — year-end 2024 data, ~5M participants, 1,400+ plans.</li>
      <li>Fidelity Investments, <em>Q4 2025 Retirement Analysis</em> — 24.8M participants, 26,200 plans.</li>
      <li>Fidelity Investments, <em>How Much Should I Save for Retirement?</em> — Salary benchmark framework.</li>
      <li>IRS, <em>Retirement Plan Contribution Limits 2026.</em> <a href="https://www.irs.gov" target="_blank" rel="noopener">irs.gov</a></li>
      <li>Social Security Administration, <em>Monthly Statistical Snapshot, November 2025</em> — avg. retired worker benefit: $24,894/yr.</li>
      <li>SECURE 2.0 Act (Consolidated Appropriations Act, 2023) — super catch-up provisions for ages 60–63.</li>
    </ul>
  </div>
);

// TOC Component
const TOCBox = () => (
  <div className={styles.tocBox}>
    <h3>On This Page</h3>
    <ul>
      <li><a href="#intro">The Real Picture</a></li>
      <li><a href="#timeline">Age-by-Age Timeline</a></li>
      <li><a href="#full-table">Full Benchmark Table</a></li>
      <li><a href="#contrib-limits">2026 Contribution Limits</a></li>
      <li><a href="#action-plan">If You're Behind</a></li>
      <li><a href="#chart">Benchmark vs. Reality Chart</a></li>
      <li><a href="#faq">FAQs</a></li>
    </ul>
  </div>
);

// SC Box Component
const SCBox = ({ router }) => (
  <div className={styles.scBox}>
    <h4>What's my retirement number?</h4>
    <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
    <div onClick={() => router.push('/retirement-calculator')} className={styles.scBtn} style={{cursor: 'pointer'}}>
      Check Here
    </div>
  </div>
);

// Related Box Component
const RelatedBox = ({ router }) => (
  <div className={styles.relatedBox}>
    <div className={styles.rbHead}>Related Guides</div>
    <div onClick={() => router.push('/403b-guide')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ Average 403(b) Balance by Age</div>
    <div onClick={() => router.push('/how-to-plan-retirement')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ How to Plan for Retirement</div>
    <div onClick={() => router.push('/best-states-to-retire')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ Best States to Retire 2026</div>
    <div onClick={() => router.push('/social-security-benefits')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ Social Security Guide</div>
    <div onClick={() => router.push('/retirement-statistics')} style={{cursor: 'pointer', color: 'var(--blue)'}}>→ Retirement Statistics 2026</div>
  </div>
);

// Key Stat Box Component
const KeyStatBox = () => (
  <div className={styles.statBox}>
    <div className={styles.statBoxLabel}>Key Stat to Share</div>
    <p className={styles.statBoxText}>"Only 5.4% of 401(k) participants changed their asset allocation in Q4 2025."</p>
    <p className={styles.statBoxSource}>Source: Plootus Research 2026 / Fidelity Q4 2025</p>
  </div>
);

export default HowMuch401kByAge;
