import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Chart from 'chart.js/auto';
import styles from './HowToPlanRetirement.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const HowToPlanRetirement = () => {
  const router = useRouter();
  const chartInstance = useRef(null);

  useEffect(() => {
    const canvas = document.getElementById('withdrawalChart');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const years = Array.from({ length: 26 }, (_, i) => 2026 + i);
      const optimal = years.map((_, i) => Math.max(0, 1500000 * (1.05 ** i) * (1 - 0.042 * i) * 0.88));
      const traditional = years.map((_, i) => Math.max(0, 1500000 * (1.05 ** i) * (1 - 0.042 * i) * 0.76));

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
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
                font: { family: "'Plus Jakarta Sans', sans-serif", size: 12 }
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

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>How to Plan for Retirement: The Complete Step-by-Step Guide | Plootus</title>
        <meta name="description" content="Retirement planning is not a single decision — it's a system. Six interconnected steps, each building on the last, from calculating your number to structuring your withdrawal strategy." />
        <link rel="canonical" href="https://www.plootus.com/how-to-plan-retirement" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How to Plan for Retirement: The Complete Step-by-Step Guide",
            "description": "Retirement planning is not a single decision — it's a system. Six interconnected steps, each building on the last.",
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

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroEyebrow}>📘 The Plootus Pillar Guide · Updated 2026</div>
          <h1>How to Plan for Retirement: The Complete Step-by-Step Guide</h1>
          <p className={styles.heroDeck}>Retirement planning is not a single decision — it's a system. Six interconnected steps, each building on the last, from calculating your number to structuring your withdrawal strategy. This guide covers everything.</p>
          <div className={styles.heroMeta}>
            <span>By the Plootus Research Team</span>
            <span>Updated March 2026</span>
            <span>30 min read</span>
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
              <p>This is Plootus's master retirement planning guide — it covers every major decision from first savings to first withdrawal. Read it start to finish for a complete framework, or jump to the chapter most relevant to your current stage.</p>
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
            <p>The most widely used framework is the <strong>4% rule</strong>: multiply your anticipated annual spending by 25 to get your required portfolio.</p>
            <h3>The Formula</h3>
            <p><strong>(Annual Spending − Social Security Income) ÷ 0.04 = Retirement Number</strong></p>
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
            <div className={styles.callout}>
              <p>📌 <strong>Go deeper:</strong> <Link href="/how-much-to-retire">How Much Do I Need to Retire? →</Link></p>
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
            <p>Different retirement accounts have different tax treatments. Using the right mix can save tens of thousands in taxes over your retirement lifetime.</p>

            <div className={styles.accountGrid}>
              <div className={styles.accCard}>
                <div className={styles.accName}>Traditional 401(k)</div>
                <div className={styles.accLimit}>$24,500/yr</div>
                <div className={styles.accDesc}>Pre-tax contributions reduce taxable income now; withdrawals taxed in retirement.</div>
              </div>
              <div className={`${styles.accCard} ${styles.roth}`}>
                <div className={styles.accName}>Roth 401(k) / Roth IRA</div>
                <div className={styles.accLimit}>$24,500 / $7,000/yr</div>
                <div className={styles.accDesc}>After-tax contributions. Withdrawals in retirement completely tax-free.</div>
              </div>
              <div className={`${styles.accCard} ${styles.hsa}`}>
                <div className={styles.accName}>HSA (Health Savings Account)</div>
                <div className={styles.accLimit}>$4,300 / $8,550/yr</div>
                <div className={styles.accDesc}>Triple tax advantage: deductible contributions, tax-free growth, tax-free qualified withdrawals.</div>
              </div>
            </div>

            <h3>The Right Contribution Order</h3>
            <div className={styles.stepsList}>
              <div className={styles.stepItem}><div className={styles.stepCircle}>1</div><div className={styles.stepBody}><h4>401(k) — up to the employer match</h4><p>This is free money. Contribute enough to get the full employer match — it's an immediate 50–100% return.</p></div></div>
              <div className={styles.stepItem}><div className={styles.stepCircle}>2</div><div className={styles.stepBody}><h4>HSA — maximum, if eligible</h4><p>The only truly triple-tax-advantaged account.</p></div></div>
              <div className={styles.stepItem}><div className={styles.stepCircle}>3</div><div className={styles.stepBody}><h4>Roth or Traditional IRA — $7,000</h4><p>Max your IRA after the employer match.</p></div></div>
            </div>
            <div className={styles.callout}>
              <p>📌 <strong>Go deeper:</strong> <Link href="/401k-by-age">401(k) Benchmarks by Age →</Link> and <Link href="/roth-vs-traditional">Roth vs. Traditional IRA Guide →</Link></p>
            </div>
          </div>

          <div className={styles.chapter} id="step3">
            <div className={styles.chHeader}>
              <div className={styles.chNum}>03</div>
              <div>
                <div className={styles.chLabel}>Step Three</div>
                <h2 className={styles.chTitle}>Choose Where to Retire</h2>
              </div>
            </div>
            <p>Location is one of the most underweighted retirement variables — yet it can change your required savings by $500,000 to $1.5 million.</p>
            <div className={styles.tblWrap}>
              <table className={`${styles.dataTable} ${styles.leftAlignTwo}`} summary="Data table — sortable columns">
                <thead>
                  <tr>
                    <th scope="col">Factor</th>
                    <th scope="col">Why It Matters</th>
                    <th scope="col">Best States</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Cost of Living</td><td>Determines annual spending and retirement number</td><td>MS, OK, KS, TN, AR</td></tr>
                  <tr><td>Income Tax</td><td>Can cost $5K–$20K+/year on retirement distributions</td><td>WY, FL, TN, SD, NV</td></tr>
                  <tr><td>Healthcare Quality</td><td>Critical in 70s–80s</td><td>MN, CO, MA, SD</td></tr>
                </tbody>
              </table>
            </div>
            <div className={styles.callout}>
              <p>📌 <strong>Go deeper:</strong> <Link href="/best-states-to-retire">Best States to Retire 2026 →</Link> · <Link href="/cheapest-states-to-retire">Cheapest States to Retire →</Link></p>
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
            <p>Social Security is worth $300,000–$500,000+ in lifetime income for the average retiree. The claiming age decision is permanent and irrevocable.</p>
            <div className={styles.tblWrap}>
              <table className={`${styles.dataTable} ${styles.leftAlignFirstLast}`} summary="Data table — sortable columns">
                <thead>
                  <tr>
                    <th scope="col">Claim At</th>
                    <th scope="col">Monthly Benefit (example: $2K FRA)</th>
                    <th scope="col">Annual Benefit</th>
                    <th scope="col">Break-Even Age</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>62 (earliest)</td><td>$1,400 (−30%)</td><td>$16,800</td><td>~77 vs. FRA</td></tr>
                  <tr><td>67 (Full Retirement Age)</td><td>$2,000 (100%)</td><td>$24,000</td><td>Baseline</td></tr>
                  <tr><td>70 (maximum delay)</td><td>$2,480 (+24%)</td><td>$29,760</td><td>~83 vs. FRA</td></tr>
                </tbody>
              </table>
            </div>
            <div className={styles.callout}>
              <p>📌 <strong>Go deeper:</strong> <Link href="/social-security-calculator">Social Security Calculator →</Link></p>
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
            <p>Healthcare is the most common cause of retirement plan failure. Fidelity estimates a couple retiring today at 65 will spend an average of <strong>$413,000</strong> on healthcare throughout retirement.</p>

            <h3>The Four Healthcare Phases in Retirement</h3>
            <div className={styles.stepsList}>
              <div className={styles.stepItem}><div className={`${styles.stepCircle} ${styles.teal}`}>1</div><div className={styles.stepBody}><h4>Ages 55–64: Pre-Medicare Gap</h4><p>The most financially dangerous period. ACA Marketplace or COBRA.</p></div></div>
              <div className={styles.stepItem}><div className={`${styles.stepCircle} ${styles.teal}`}>2</div><div className={styles.stepBody}><h4>Ages 65–74: Early Medicare Years</h4><p>Enroll in Medicare at 65. Budget $8,500–$13,500/year.</p></div></div>
            </div>
            <div className={styles.callout}>
              <p>📌 <strong>Go deeper:</strong> <Link href="/medicare-medigap-comparison">Medicare & Medigap Guide →</Link></p>
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
            <p>How you withdraw from retirement accounts is just as important as how much you saved. The order can save $50,000–$200,000 in lifetime taxes.</p>

            <div className={styles.chartBox}>
              <h3>Illustrative: Optimal vs. Traditional-First Withdrawal Order</h3>
              <canvas id="withdrawalChart" height="120"></canvas>
              <p className={styles.chartSource}>Source: Plootus Research 2026; T. Rowe Price Retirement Insights 2025.</p>
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
                <div className={styles.clItem}><span>Calculate target retirement number using 4% rule</span></div>
                <div className={styles.clItem}><span>Maximize employer 401(k) match</span></div>
                <div className={styles.clItem}><span>Fund an IRA (Roth preferred)</span></div>
                <div className={styles.clItem}><span>Fund an HSA if eligible</span></div>
              </div>
            </div>
          </div>

          <div className={styles.sourcesBox}>
            <h3>📚 Sources</h3>
            <ul>
              <li>Vanguard, Fidelity, Social Security Administration, IRS, SECURE 2.0 Act, T. Rowe Price.</li>
            </ul>
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
              <div onClick={() => router.push('/retirement-calculator')} className={styles.scBtn} style={{cursor: 'pointer'}}>
                Check Here
              </div>
            </div>
          </div>
          <div className={styles.relatedBox}>
            <div className={styles.rbHead}>Related Guides</div>
            <Link href="/how-much-to-retire">→ How Much Do I Need to Retire?</Link>
            <Link href="/401k-by-age">→ 401(k) Balance by Age 2026</Link>
            <Link href="/best-states-to-retire">→ Best States to Retire 2026</Link>
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
