import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Chart from 'chart.js/auto';
import styles from './RetireEarly.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const RetireEarly = () => {
  const router = useRouter();
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      const ages = Array.from({ length: 26 }, (_, i) => 30 + i);
      let balance = 0;
      const vals = ages.map(() => {
        balance = balance * 1.07 + 40000;
        return Math.round(balance);
      });
      const target = Array(26).fill(1143000);

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ages,
          datasets: [
            {
              label: 'Portfolio Value',
              data: vals,
              borderColor: 'rgba(232, 89, 12, 1)',
              backgroundColor: 'rgba(232, 89, 12, .08)',
              borderWidth: 3,
              pointRadius: 0,
              fill: true,
              tension: 0.3,
            },
            {
              label: 'FIRE Target ($1.14M)',
              data: target,
              borderColor: 'rgba(245, 159, 0, 1)',
              borderWidth: 2,
              pointRadius: 0,
              fill: false,
              borderDash: [6, 4],
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
                font: { family: "'Plus Jakarta Sans', sans-serif", size: 12 },
              },
            },
            tooltip: {
              callbacks: {
                label: (c) => '$' + c.raw.toLocaleString(),
              },
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Age',
                font: { family: "'Plus Jakarta Sans', sans-serif", size: 12 },
              },
              ticks: { font: { size: 11, family: "'Plus Jakarta Sans', sans-serif" } },
              grid: { display: false },
            },
            y: {
              ticks: {
                callback: (v) => '$' + (v / 1000000).toFixed(1) + 'M',
                font: { size: 11, family: "'Plus Jakarta Sans', sans-serif" },
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
        <title>How to Retire Early: The Complete FIRE Guide (2026) | Plootus</title>
        <meta name="description" content="Financial Independence, Retire Early isn't just a dream — it's a math problem. Calculate your FIRE number, choose your strategy, and bridge the healthcare gap." />
        <link rel="canonical" href="https://www.plootus.com/retire-early" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How to Retire Early: The Complete FIRE Guide (2026)",
            "description": "Financial Independence, Retire Early isn't just a dream — it's a math problem.",
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
        <div className={styles.heroBg}>FIRE</div>
        <div className={styles.heroInner}>
          <div>
            <div className={styles.heroTag}>🔥 Plootus Guide · 2026 Edition</div>
            <h1>
              How to Retire <em>Early</em>: The Complete FIRE Guide
            </h1>
            <p className={styles.heroSub}>
              Financial Independence, Retire Early isn't just a dream — it's a math problem. Here's how to solve it: calculate your FIRE number, choose your strategy, and bridge the healthcare gap.
            </p>
            <div className={styles.heroMeta}>
              <span>Plootus Research Team</span>
              <span>Updated March 2026</span>
              <span>25 min read</span>
            </div>
          </div>
          <div className={styles.fireCard}>
            <div className={styles.fcLabel}>FIRE Number Quick Reference</div>
            <div className={styles.fcRow}>
              <span>Retire at 45 (affordable state)</span>
              <span className={styles.fcVal}>~$1.0M</span>
            </div>
            <div className={styles.fcRow}>
              <span>Retire at 50 (avg. state)</span>
              <span className={styles.fcVal}>~$1.65M</span>
            </div>
            <div className={styles.fcRow}>
              <span>Retire at 50 (expensive state)</span>
              <span className={styles.fcVal}>~$2.5M+</span>
            </div>
            <div className={styles.fcRow}>
              <span>Retire at 55 (avg. state)</span>
              <span className={styles.fcVal}>~$1.45M</span>
            </div>
            <div className={styles.fcRow}>
              <span>Savings rate needed (30→50)</span>
              <span className={styles.fcVal}>40–50%</span>
            </div>
            <div className={styles.fcRow}>
              <span>Safe withdrawal rate (early)</span>
              <span className={styles.fcVal}>3.5%</span>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>3.5%</span>
            <span className={styles.statLabel}>Safe Withdrawal Rate for Early Retirees</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>$1.65M</span>
            <span className={styles.statLabel}>Avg. Needed to Retire at 50 (Avg. State)</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>~$24K</span>
            <span className={styles.statLabel}>Est. Annual Healthcare Cost (Age 55)</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>50%+</span>
            <span className={styles.statLabel}>Savings Rate for Early Retirement</span>
          </div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent}>
          <section id="what-is-fire">
            <div className={styles.sectionLabel}>The Foundation</div>
            <h2>What Is FIRE — and Is It Actually Achievable?</h2>
            <p>
              FIRE stands for <strong>Financial Independence, Retire Early</strong>.
            </p>
            <div className={`${styles.callout} ${styles.gold}`}>
              <p>
                🔥 <strong>The FIRE Formula:</strong> Annual spending ÷ 0.035 = Your FIRE number. If you spend $50,000/year, you need $1,428,571 invested.
              </p>
            </div>
          </section>

          <section id="fire-types">
            <div className={styles.sectionLabel}>The 5 FIRE Strategies</div>
            <h2>Which Type of FIRE Is Right for You?</h2>
            <div className={styles.fireTypes}>
              <div className={`${styles.ftCard} ${styles.lean}`}>
                <span className={styles.ftEmoji}>🌱</span>
                <div className={styles.ftName}>Lean FIRE</div>
                <div className={styles.ftDesc}>Retire on a minimal budget — typically $25,000–$40,000/year.</div>
                <div className={styles.ftTarget} style={{ color: 'var(--green)' }}>
                  Target: $700K–$1.1M
                </div>
              </div>
              <div className={`${styles.ftCard} ${styles.regular}`}>
                <span className={styles.ftEmoji}>🔥</span>
                <div className={styles.ftName}>FIRE (Standard)</div>
                <div className={styles.ftDesc}>Retire comfortably on $50,000–$80,000/year.</div>
                <div className={styles.ftTarget} style={{ color: 'var(--orange)' }}>
                  Target: $1.4M–$2.3M
                </div>
              </div>
              <div className={`${styles.ftCard} ${styles.fat}`}>
                <span className={styles.ftEmoji}>🏖️</span>
                <div className={styles.ftName}>Fat FIRE</div>
                <div className={styles.ftDesc}>Retire with a generous budget — $100,000+/year.</div>
                <div className={styles.ftTarget} style={{ color: 'var(--gold)' }}>
                  Target: $2.5M–$4M+
                </div>
              </div>
            </div>
          </section>

          <section id="savings-rate">
            <div className={styles.sectionLabel}>The Savings Rate Is Everything</div>
            <h2>How Your Savings Rate Determines When You Can Retire</h2>
            <div className={styles.srWrap}>
              <div className={styles.srHead}>
                <div>Savings Rate</div>
                <div>Years to Retire*</div>
              </div>
              <div className={styles.srRow}>
                <div className={styles.srRate}>30%</div>
                <div className={styles.srRetire}>~28 years</div>
              </div>
              <div className={styles.srRow}>
                <div className={styles.srRate}>50%</div>
                <div className={styles.srRetire}>~17 years</div>
              </div>
              <div className={styles.srRow}>
                <div className={styles.srRate}>70%</div>
                <div className={styles.srRetire}>~8.5 years</div>
              </div>
            </div>
          </section>

          <section id="by-state">
            <div className={styles.sectionLabel}>FIRE Number by State</div>
            <h2>How Much You Need to Retire Early — By State</h2>
            <div className={styles.tblWrap}>
              <table className={`${styles.dataTable} ${styles.leftAlignFirst}`} summary="Data table — sortable columns">
                <thead>
                  <tr>
                    <th scope="col">State</th>
                    <th scope="col">FIRE at 50</th>
                    <th scope="col">Note</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mississippi</td>
                    <td>~$1.30M</td>
                    <td style={{ color: 'var(--green)', fontWeight: 700 }}>Save $1.7M+ vs. Hawaii</td>
                  </tr>
                  <tr>
                    <td>Tennessee</td>
                    <td>~$1.41M</td>
                    <td style={{ color: 'var(--green)', fontWeight: 700 }}>No state income tax</td>
                  </tr>
                  <tr>
                    <td>California</td>
                    <td>~$2.42M</td>
                    <td>High cost</td>
                  </tr>
                  <tr>
                    <td>Hawaii</td>
                    <td>~$3.69M</td>
                    <td style={{ color: 'var(--red)', fontWeight: 700 }}>Most expensive</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="chart-section">
            <div className={styles.sectionLabel}>The Compounding Visual</div>
            <h2>How a 50% Savings Rate Reaches FIRE in 17 Years</h2>
            <div className={styles.chartBox}>
              <div style={{ height: '300px', position: 'relative' }}>
                <canvas ref={chartRef}></canvas>
              </div>
            </div>
          </section>

          <section id="faq">
            <div className={styles.sectionLabel}>FAQs</div>
            <h2>Frequently Asked Questions</h2>
            <details className={styles.faqItem}>
              <summary className={styles.faqQ}>How much do I need to retire at 50?</summary>
              <div className={styles.faqA}>In the average U.S. state, retiring at 50 requires approximately $1.65 million using the 3.5% withdrawal rate.</div>
            </details>
          </section>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.tocBox}>
            <h3>On This Page</h3>
            <ul>
              <li><a href="#what-is-fire">What Is FIRE?</a></li>
              <li><a href="#fire-types">5 FIRE Strategies</a></li>
              <li><a href="#savings-rate">Savings Rate Table</a></li>
              <li><a href="#by-state">FIRE Number by State</a></li>
              <li><a href="#chart-section">Compounding Chart</a></li>
              <li><a href="#faq">FAQs</a></li>
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
            <div className={styles.relatedCard}>
              <h4>Related Guides</h4>
              <Link href="/how-much-to-retire">→ How Much Do I Need to Retire?</Link>
              <Link href="/how-to-plan-retirement">→ How to Plan for Retirement</Link>
            </div>
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

export default RetireEarly;
