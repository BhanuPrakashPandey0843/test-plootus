import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import styles from './HowMuchRetire.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const HowMuchRetire = () => {
  const router = useRouter();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>How Much Do I Need to Retire? Your Complete 2026 Guide | Plootus</title>
        <meta name="description" content="The answer depends on three things: where you'll live, what lifestyle you want, and when you plan to retire. We break it all down — with the formulas, benchmarks, and real numbers you actually need." />
        <link rel="canonical" href="https://www.plootus.com/how-much-do-i-need-to-retire" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How Much Do I Need to Retire? Your Complete 2026 Guide",
            "description": "The answer depends on three things: where you'll live, what lifestyle you want, and when you plan to retire.",
            "author": {
              "@type": "Organization",
              "name": "Plootus Research Team"
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
          <div className={styles.heroBadge}>📚 Plootus Guide · Updated March 2026</div>
          <h1>How Much Do I Need to Retire? Your Complete 2026 Guide</h1>
          <p className={styles.heroSub}>The answer depends on three things: where you'll live, what lifestyle you want, and when you plan to retire. We break it all down — with the formulas, benchmarks, and real numbers you actually need.</p>
          <div className={styles.heroMeta}>
            <span>By the Plootus Research Team</span>
            <span>Last updated: March 2026</span>
            <span>Sources: Fidelity, <abbr title="Social Security Administration">SSA</abbr>, <abbr title="Bureau of Labor Statistics">BLS</abbr>, Schwab</span>
          </div>
        </div>
      </section>

      {/* Stat Strip */}
      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}>
            <span className={styles.statNum} data-type="statistic">4%</span>
            <span className={styles.statLabel}>Safe Withdrawal Rate (Baseline)</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum} data-type="statistic">$877K</span>
            <span className={styles.statLabel}>Moderate Retirement Nest Egg</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum} data-type="statistic">80%</span>
            <span className={styles.statLabel}>Pre-Retirement Income to Replace</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum} data-type="statistic">$24,894</span>
            <span className={styles.statLabel}>Avg Annual Social Security Benefit</span>
          </div>
        </div>
      </div>

      <div className={styles.pageBody} itemScope itemType="https://schema.org/Article">
        <main className={styles.mainContent} role="main" aria-label="How Much Do I Need to Retire — 4% Rule Calculator and Guide 2026">
          {/* Overview Section */}
          <section id="formula">
            <div className={styles.sectionLabel}>The Core Question</div>
            <h2>There Is No Universal "Retirement Number" — But There Is a Formula</h2>
            <p>You've probably heard "$1 million" floated as the magic retirement goal. It's a myth. A retiree in Hawaii needs over $2.1 million to sustain the same lifestyle that costs $658,000 to fund in Arkansas. Someone who wants to travel extensively needs far more than someone who plans a quiet rural retirement.</p>
            <p>The honest answer starts with four inputs: your expected annual spending, your retirement state, your Social Security income, and your withdrawal strategy. This guide walks through each one.</p>
            <div className={styles.callout}>
              <p><strong>💡 The Simple Starting Formula:</strong> Your retirement number = <strong>(Annual spending − Annual Social Security income) ÷ 0.04</strong>. This is the 4% withdrawal rule. Example: Need $60,000/year, expect $25,000 from Social Security → ($60,000 − $25,000) ÷ 0.04 = <strong>$875,000 needed.</strong></p>
            </div>
          </section>

          {/* Step 1: The 4% Rule */}
          <section id="4pct-rule">
            <div className={styles.sectionLabel}>Step 1: The 4% Rule</div>
            <h2>The 4% Rule: Your Baseline Calculator</h2>
            <p>The 4% rule, developed by financial planner William Bengen in 1994 and validated by the Trinity Study, states that you can safely withdraw 4% of your retirement savings in Year 1, then adjust upward for inflation each year, with a high probability that your savings will last 30+ years.</p>

            <div className={styles.formulaBox}>
              <div className={styles.formulaTitle}>🧮 The 4% Rule Formula</div>
              <div className={styles.formulaGrid}>
                <div className={styles.formulaItem}>
                  <div className={styles.formulaItemTop}>Annual Need</div>
                  <div className={styles.formulaItemVal}>Your spending<br /><small style={{ fontWeight: 400, fontSize: '12px' }}>minus SS income</small></div>
                </div>
                <div className={styles.formulaOp}>÷</div>
                <div className={styles.formulaItem}>
                  <div className={styles.formulaItemTop}>Withdrawal Rate</div>
                  <div className={styles.formulaItemVal}>0.04</div>
                </div>
                <div className={styles.formulaOp}>=</div>
                <div className={styles.formulaItem} style={{ borderColor: 'rgba(245,159,0,.5)', background: 'rgba(245,159,0,.1)' }}>
                  <div className={styles.formulaItemTop}>Your Number</div>
                  <div className={styles.formulaItemVal} style={{ color: '#F59F00' }}>Required<br />Nest Egg</div>
                </div>
              </div>
              <div className={styles.formulaExample}>Example: $60,000 annual need − $24,894 SS = $35,106 from savings. $35,106 ÷ 0.04 = <strong>$877,650 needed</strong></div>
            </div>

            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable} summary="Data table with sortable columns">
                <thead>
                  <tr>
                    <th scope="col">Annual Spending Need (After SS)</th>
                    <th scope="col">Required Savings (4% Rule)</th>
                    <th scope="col">Required Savings (3.5% Rule)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>$20,000/year</td><td><strong>$500,000</strong></td><td>$571,000</td></tr>
                  <tr><td>$30,000/year</td><td><strong>$750,000</strong></td><td>$857,000</td></tr>
                  <tr><td>$40,000/year</td><td><strong>$1,000,000</strong></td><td>$1,143,000</td></tr>
                  <tr><td>$50,000/year</td><td><strong>$1,250,000</strong></td><td>$1,429,000</td></tr>
                  <tr><td>$60,000/year</td><td><strong>$1,500,000</strong></td><td>$1,714,000</td></tr>
                  <tr><td>$75,000/year</td><td><strong>$1,875,000</strong></td><td>$2,143,000</td></tr>
                  <tr><td>$100,000/year</td><td><strong>$2,500,000</strong></td><td>$2,857,000</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>The 3.5% column reflects updated guidance for early retirees (before 65) or those planning 35+ year retirements. Source: Bengen 1994; Trinity Study; Charles Schwab 2026.</p>
            <div className={`${styles.callout} ${styles.gold}`}>
              <p><strong>📌 2026 Update:</strong> The original creator of the 4% rule, William Bengen, now suggests <strong>4.7%</strong> may be appropriate based on current market data — meaning $1M in savings could support $47,000/year instead of $40,000. However, most financial planners still recommend using 4% as a conservative baseline, especially for longer retirements.<br /><small style={{ opacity: .75 }}>Source: Davenport Advisors 2026; Schwab research.</small></p>
            </div>
          </section>

          {/* Step 2: Income Replacement */}
          <section id="income-need">
            <div className={styles.sectionLabel}>Step 2: How Much Income You'll Need</div>
            <h2>The 80% Rule: Estimating Your Retirement Income Need</h2>
            <p>Financial planners commonly recommend replacing <strong>70–80% of your pre-retirement income</strong> in retirement. The logic: your mortgage may be paid off, you'll stop commuting, and you won't be saving for retirement anymore. However, healthcare costs often rise significantly, so 80% is safer for most people.</p>

            <h3>Where Retirement Income Typically Comes From</h3>
            <div className={styles.incomeGrid}>
              <div className={styles.incomeSource}>
                <div className={styles.incomePct} style={{ color: 'var(--blue)' }}>~45%</div>
                <div>
                  <div className={styles.incomeLabel}>Personal Savings</div>
                  <div className={styles.incomeDesc}>401(k), <abbr title="Individual Retirement Account">IRA</abbr>, investments, taxable accounts</div>
                </div>
              </div>
              <div className={styles.incomeSource}>
                <div className={styles.incomePct} style={{ color: 'var(--green)' }}>~38%</div>
                <div>
                  <div className={styles.incomeLabel}>Social Security</div>
                  <div className={styles.incomeDesc}>Average $24,894/yr; up to $61,296/yr at 70</div>
                </div>
              </div>
              <div className={styles.incomeSource}>
                <div className={styles.incomePct} style={{ color: 'var(--gold)' }}>~11%</div>
                <div>
                  <div className={styles.incomeLabel}>Pension / Defined Benefit</div>
                  <div className={styles.incomeDesc}>Declining — only 14% of private workers have pensions</div>
                </div>
              </div>
              <div className={styles.incomeSource}>
                <div className={styles.incomePct} style={{ color: 'var(--text-light)' }}>~6%</div>
                <div>
                  <div className={styles.incomeLabel}>Part-Time Work / Other</div>
                  <div className={styles.incomeDesc}>Consulting, rental income, side income</div>
                </div>
              </div>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>Source: Bureau of Labor Statistics; Social Security Administration; Plootus Research 2026.</p>
          </section>

          {/* Step 3: Scenarios */}
          <section id="scenarios">
            <div className={styles.sectionLabel}>Step 3: Find Your Scenario</div>
            <h2>Three Retirement Scenarios: Frugal, Moderate, and Comfortable</h2>
            <p>Use these three scenarios to find the one closest to your planned retirement lifestyle. All assume retiring at 67, average Social Security income of $24,894/year, and a 30-year retirement:</p>
            <div className={styles.scenarioGrid}>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioTitle}>Frugal Retirement</div>
                <div className={styles.scenarioRange}>$40,000–$48,000/year</div>
                <div className={styles.scenarioRow}><span className={styles.scenarioRowLabel}>Annual Spending</span><span className={styles.scenarioRowVal}>$45,000</span></div>
                <div className={styles.scenarioRow}><span className={styles.scenarioRowLabel}>Social Security</span><span className={styles.scenarioRowVal}>−$24,894</span></div>
                <div className={styles.scenarioRow}><span className={styles.scenarioRowLabel}>Need from Savings</span><span className={styles.scenarioRowVal}>$20,106</span></div>
                <div className={styles.scenarioRow}><span className={styles.scenarioRowLabel}>Best Fit States</span><span className={styles.scenarioRowVal}>AR, IA, MS, IN</span></div>
                <div className={styles.scenarioNumber}>$502,650</div>
                <div className={styles.scenarioNumberLabel}>Required Nest Egg (4% Rule)</div>
              </div>
              <div className={`${styles.scenarioCard} ${styles.featured}`}>
                <div className={styles.scenarioTitle}>Moderate Retirement</div>
                <div className={styles.scenarioRange}>$57,000–$70,000/year</div>
                <div className={styles.scenarioRow}><span className={styles.scenarioRowLabel}>Annual Spending</span><span className={styles.scenarioRowVal}>$60,000</span></div>
                <div className={styles.scenarioRow}><span className={styles.scenarioRowLabel}>Social Security</span><span className={styles.scenarioRowVal}>−$24,894</span></div>
                <div className={styles.scenarioRow}><span className={styles.scenarioRowLabel}>Need from Savings</span><span className={styles.scenarioRowVal}>$35,106</span></div>
                <div className={styles.scenarioRow}><span className={styles.scenarioRowLabel}>Best Fit States</span><span className={styles.scenarioRowVal}>TN, NC, FL, WY</span></div>
                <div className={styles.scenarioNumber} style={{ color: 'var(--blue)' }}>$877,650</div>
                <div className={styles.scenarioNumberLabel}>Required Nest Egg (4% Rule)</div>
              </div>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioTitle}>Comfortable Retirement</div>
                <div className={styles.scenarioRange}>$80,000–$100,000/year</div>
                <div className={styles.scenarioRow}><span className={styles.scenarioRowLabel}>Annual Spending</span><span className={styles.scenarioRowVal}>$90,000</span></div>
                <div className={styles.scenarioRow}><span className={styles.scenarioRowLabel}>Social Security</span><span className={styles.scenarioRowVal}>−$24,894</span></div>
                <div className={styles.scenarioRow}><span className={styles.scenarioRowLabel}>Need from Savings</span><span className={styles.scenarioRowVal}>$65,106</span></div>
                <div className={styles.scenarioRow}><span className={styles.scenarioRowLabel}>Best Fit States</span><span className={styles.scenarioRowVal}>CO, VA, PA</span></div>
                <div className={styles.scenarioNumber}>$1,627,650</div>
                <div className={styles.scenarioNumberLabel}>Required Nest Egg (4% Rule)</div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" aria-label="Frequently Asked Questions">
            <div className={styles.sectionLabel}>FAQ</div>
            <h2>Frequently Asked Questions</h2>
            {[
              {
                q: "Is $1 million enough to retire?",
                a: "It depends entirely on where you live and your lifestyle. Using the 4% rule, $1 million supports $40,000/year in withdrawals. If you also receive average Social Security ($24,894/year), your total income would be about $64,894/year."
              },
              {
                q: "What is the 4% rule and is it still valid?",
                a: "The 4% rule says you can withdraw 4% of your savings in Year 1 and adjust for inflation each year, with a high probability your money lasts 30+ years. It's still widely used as a baseline."
              },
              {
                q: "How does Social Security affect how much I need to save?",
                a: "Social Security directly reduces how much you need from savings. The average benefit in 2025 is $24,894/year. If you need $60,000/year in retirement, Social Security covers ~$25,000 of that."
              }
            ].map((faq, idx) => (
              <div key={idx} className={`${styles.faqItem} ${openFaqIndex === idx ? styles.open : ''}`}>
                <button className={styles.faqQ} onClick={() => toggleFaq(idx)}>
                  {faq.q} <span className={styles.faqIcon}>+</span>
                </button>
                <div className={styles.faqA}>{faq.a}</div>
              </div>
            ))}
          </section>

          {/* Sources */}
          <div className={styles.sourcesBox}>
            <h4>Sources</h4>
            <ul>
              <li>Bengen, William — Journal of Financial Planning, 1994</li>
              <li>Charles Schwab — "Revisiting the 4% Rule," 2026</li>
              <li>Social Security Administration — Monthly Statistical Snapshot, 2025</li>
              <li>Bureau of Labor Statistics — Consumer Expenditure Survey 2024</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles.sidebarCard}>
            <h4>On This Page</h4>
            <ul className={styles.tocList}>
              <li><a href="#formula">The Core Formula</a></li>
              <li><a href="#4pct-rule">The 4% Rule</a></li>
              <li><a href="#income-need">Income Sources</a></li>
              <li><a href="#scenarios">3 Scenarios</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className={styles.ctaCard}>
            <h4>What's my retirement number?</h4>
            <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
            <div onClick={() => router.push('/retirement-calculator')} className={styles.ctaBtn} style={{cursor: 'pointer'}}>
              Check Here
            </div>
          </div>
          <div className={styles.sidebarCard}>
            <h4>Related Guides</h4>
            <ul className={styles.relatedLinks}>
              <li><Link href="/401k-by-age">401(k) Benchmarks by Age</Link></li>
              <li><Link href="/social-security-benefits">Social Security Guide 2026</Link></li>
              <li><Link href="/best-states-to-retire">Best States to Retire</Link></li>
              <li><Link href="/retire-early">FIRE / Early Retirement Guide</Link></li>
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

export default HowMuchRetire;
