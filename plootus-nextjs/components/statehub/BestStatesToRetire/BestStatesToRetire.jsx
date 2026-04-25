import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from './BestStatesToRetire.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';
import Chart from 'chart.js/auto';

const BestStatesToRetire = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Wyoming', 'Florida', 'South Dakota', 'Nevada', 'Tennessee', 'U.S. Average'],
          datasets: [{
            label: 'Estimated Annual Retirement Cost ($)',
            data: [52000, 57000, 52000, 58000, 49500, 64800],
            backgroundColor: [
              'rgba(59, 91, 219, 0.8)',
              'rgba(59, 91, 219, 0.8)',
              'rgba(59, 91, 219, 0.8)',
              'rgba(59, 91, 219, 0.8)',
              'rgba(59, 91, 219, 0.8)',
              'rgba(245, 159, 0, 0.6)'
            ],
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (context) => `$${context.raw.toLocaleString()}/yr`
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: (value) => `$${(value / 1000).toFixed(0)}K`,
                font: { family: 'Plus Jakarta Sans', size: 11 }
              },
              grid: { color: '#E2E8F0' }
            },
            x: {
              ticks: { font: { family: 'Plus Jakarta Sans', size: 11 } },
              grid: { display: false }
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

      <HubNav />

      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>🏆 Plootus 2026 Rankings · Updated April 2026</div>
          <h1>Best States to Retire in 2026: The Top 10 Ranked for Affordability, Taxes & Healthcare</h1>
          <p className={styles.heroSub}>
            Wyoming and Florida lead our 2026 rankings as the best states for retirement. We analyzed every state across 12 data points including cost of living, state income tax, Social Security taxation, and healthcare quality.
          </p>
          <div className={styles.heroMeta}>
            <span>By the Plootus Research Team</span>
            <span>Sources: BLS, Kiplinger, MERIC, WalletHub</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}>
            <div className={styles.statNum} data-type="statistic">#1</div>
            <div className={styles.statLabel}>Best State: Wyoming</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum} data-type="statistic">8</div>
            <div className={styles.statLabel}>States with No Income Tax</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum} data-type="statistic">41</div>
            <div className={styles.statLabel}>States: No SS Taxation</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum} data-type="statistic">$400K+</div>
            <div className={styles.statLabel}>Potential 25yr Savings Gap</div>
          </div>
        </div>
      </div>

      <div className={styles.layoutWrap} itemScope itemType="https://schema.org/Article">
        <div className={styles.layout}>
          <main className={styles.main} role="main" aria-label="Best States to Retire 2026">
            <section id="rankings">
              <h2>Top 5 Best States to Retire (2026)</h2>
              <div className={styles.top5Grid}>
                <div className={styles.rankCard}>
                  <div className={`${styles.rankNum} ${styles.gold}`}>1</div>
                  <div className={styles.rankInfo}>
                    <div className={styles.rankState}>Wyoming</div>
                    <div className={styles.rankScore}>Total Tax Grade: A+ | Cost Index: 92.0</div>
                    <div className={styles.rankBadges}>
                      <span className={`${styles.badge} ${styles.badgeBlue}`}>No Income Tax</span>
                      <span className={`${styles.badge} ${styles.badgeGreen}`}>Low Property Tax</span>
                      <span className={`${styles.badge} ${styles.badgeGold}`}>#1 Overall</span>
                    </div>
                  </div>
                </div>
                <div className={styles.rankCard}>
                  <div className={`${styles.rankNum} ${styles.silver}`}>2</div>
                  <div className={styles.rankInfo}>
                    <div className={styles.rankState}>Florida</div>
                    <div className={styles.rankScore}>Total Tax Grade: A+ | Cost Index: 101.0</div>
                    <div className={styles.rankBadges}>
                      <span className={`${styles.badge} ${styles.badgeBlue}`}>No Income Tax</span>
                      <span className={`${styles.badge} ${styles.badgeGreen}`}>Top QOL</span>
                      <span className={`${styles.badge} ${styles.badgeGold}`}>#2 Overall</span>
                    </div>
                  </div>
                </div>
                <div className={styles.rankCard}>
                  <div className={`${styles.rankNum} ${styles.bronze}`}>3</div>
                  <div className={styles.rankInfo}>
                    <div className={styles.rankState}>South Dakota</div>
                    <div className={styles.rankScore}>Total Tax Grade: A+ | Cost Index: 91.5</div>
                    <div className={styles.rankBadges}>
                      <span className={`${styles.badge} ${styles.badgeBlue}`}>No Income Tax</span>
                      <span className={`${styles.badge} ${styles.badgeGreen}`}>Top Healthcare (#4)</span>
                    </div>
                  </div>
                </div>
                <div className={styles.rankCard}>
                  <div className={styles.rankNum}>4</div>
                  <div className={styles.rankInfo}>
                    <div className={styles.rankState}>Nevada</div>
                    <div className={styles.rankScore}>Total Tax Grade: A | Cost Index: 101.3</div>
                    <div className={styles.rankBadges}>
                      <span className={`${styles.badge} ${styles.badgeBlue}`}>No Income Tax</span>
                      <span className={`${styles.badge} ${styles.badgeGreen}`}>Low Property Tax</span>
                    </div>
                  </div>
                </div>
                <div className={styles.rankCard}>
                  <div className={styles.rankNum}>5</div>
                  <div className={styles.rankInfo}>
                    <div className={styles.rankState}>Tennessee</div>
                    <div className={styles.rankScore}>Total Tax Grade: A | Cost Index: 89.9</div>
                    <div className={styles.rankBadges}>
                      <span className={`${styles.badge} ${styles.badgeBlue}`}>No Income Tax</span>
                      <span className={`${styles.badge} ${styles.badgeGreen}`}>Very Low COL</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="chart">
              <h2>Estimated Annual Cost Comparison</h2>
              <p>Choosing the right state can reduce your annual retirement expenses by $10,000 to $25,000. Here is how the top 5 states compare to the national average ($64,800/yr).</p>
              <div className={styles.chartWrap}>
                <div className={styles.chartTitle}>Estimated Annual Household Spending (Age 65+)</div>
                <div style={{ height: '300px', position: 'relative' }}>
                  <canvas ref={chartRef}></canvas>
                </div>
                <div className={styles.chartSource}>Source: BLS Consumer Expenditure Survey 2024; MERIC Q3 2025.</div>
              </div>
            </section>

            <section id="table">
              <h2>Detailed Rankings &amp; Data</h2>
              <div className={styles.tableScroll}>
                <table className={styles.rankingsTable} summary="Data comparison for top retirement states">
                  <thead>
                    <tr>
                      <th scope="col">Rank</th>
                      <th scope="col">State</th>
                      <th scope="col">Tax Grade</th>
                      <th scope="col">Est. Annual Cost</th>
                      <th scope="col">Healthcare Rank</th>
                      <th scope="col">Income Tax</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={styles.hl}><td>#1</td><td><strong>Wyoming</strong></td><td><span className={`${styles.grade} ${styles.gradeA}`}>A+</span></td><td data-type="statistic">$52,000</td><td>#33</td><td>None</td></tr>
                    <tr className={styles.hl}><td>#2</td><td><strong>Florida</strong></td><td><span className={`${styles.grade} ${styles.gradeA}`}>A+</span></td><td data-type="statistic">$57,000</td><td>#27</td><td>None</td></tr>
                    <tr className={styles.hl}><td>#3</td><td><strong>South Dakota</strong></td><td><span className={`${styles.grade} ${styles.gradeA}`}>A+</span></td><td data-type="statistic">$52,000</td><td>#4</td><td>None</td></tr>
                    <tr className={styles.hl}><td>#4</td><td><strong>Nevada</strong></td><td><span className={`${styles.grade} ${styles.gradeA}`}>A</span></td><td data-type="statistic">$58,000</td><td>#42</td><td>None</td></tr>
                    <tr className={styles.hl}><td>#5</td><td><strong>Tennessee</strong></td><td><span className={`${styles.grade} ${styles.gradeA}`}>A</span></td><td data-type="statistic">$49,500</td><td>#44</td><td>None</td></tr>
                    <tr><td>#6</td><td><strong>Delaware</strong></td><td><span className={`${styles.grade} ${styles.gradeA}`}>A</span></td><td data-type="statistic">$56,000</td><td>#15</td><td>6.6%</td></tr>
                    <tr><td>#7</td><td><strong>Georgia</strong></td><td><span className={`${styles.grade} ${styles.gradeB}`}>B+</span></td><td data-type="statistic">$50,800</td><td>#40</td><td>5.39%</td></tr>
                    <tr><td>#8</td><td><strong>South Carolina</strong></td><td><span className={`${styles.grade} ${styles.gradeB}`}>B</span></td><td data-type="statistic">$50,600</td><td>#34</td><td>6.4%</td></tr>
                    <tr><td>#9</td><td><strong>Mississippi</strong></td><td><span className={`${styles.grade} ${styles.gradeB}`}>B-</span></td><td data-type="statistic">$45,600</td><td>#49</td><td>4%</td></tr>
                    <tr><td>#10</td><td><strong>Virginia</strong></td><td><span className={`${styles.grade} ${styles.gradeB}`}>B</span></td><td data-type="statistic">$62,000</td><td>#25</td><td>5.75%</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="faq">
              <h2>Frequently Asked Questions</h2>
              {[
                {
                  q: "What is the best overall state to retire in 2026?",
                  a: "Wyoming is our #1 ranked state for 2026. It offers zero state income tax, no inheritance tax, and very low property taxes. While it ranks in the middle for healthcare (#33), its financial advantages are unmatched for retirees with significant retirement account balances."
                },
                {
                  q: "Which states have no income tax for retirees?",
                  a: "As of 2026, 8 states have no state income tax: Alaska, Florida, Nevada, South Dakota, Tennessee, Texas, Washington, and Wyoming. New Hampshire taxes interest and dividends but not pension or 401(k) income."
                },
                {
                  q: "How does healthcare rank affect retirement choice?",
                  a: "For retirees with chronic health conditions, healthcare quality may outweigh tax savings. For example, South Dakota (Ranked #3) offers zero income tax AND the #4 healthcare system in the nation, making it an elite choice."
                }
              ].map((item, idx) => (
                <div key={idx} className={`${styles.faqItem} ${openFaq === idx ? styles.open : ''}`}>
                  <button className={styles.faqQ} onClick={() => toggleFaq(idx)}>
                    {item.q} <span className={styles.faqIcon}>+</span>
                  </button>
                  <div className={styles.faqA}>{item.a}</div>
                </div>
              ))}
            </section>
          </main>

          <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
            <div className={styles.sidebarCard}>
              <h3>On This Page</h3>
              <ul className={styles.toc}>
                <li><a href="#rankings">Top 5 Rankings</a></li>
                <li><a href="#chart">Cost Comparison</a></li>
                <li><a href="#table">Full Rankings Table</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>

            <div className={styles.ctaCard}>
              <h4>What's my retirement number?</h4>
              <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
              <a onClick={() => router.push('/retirement-calculator')} className={styles.ctaBtn}>Check Here</a>
            </div>

            <div className={styles.sidebarCard}>
              <h3>Key Takeaways</h3>
              <div className={styles.quickStat}>
                <div className={styles.qsNum} data-type="statistic">$15.3K</div>
                <div className={styles.qsLabel}>Average annual savings moving from CA to FL.</div>
              </div>
              <div className={styles.quickStat}>
                <div className={styles.qsNum} data-type="statistic">#4</div>
                <div className={styles.qsLabel}>South Dakota's national healthcare rank.</div>
              </div>
              <div className={styles.quickStat}>
                <div className={styles.qsNum} data-type="statistic">41</div>
                <div className={styles.qsLabel}>States that do NOT tax Social Security.</div>
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <h3>Related Guides</h3>
              <ul className={styles.toc}>
                <li><a onClick={() => router.push('/cheapest-states-to-retire')}>Cheapest States to Retire</a></li>
                <li><a onClick={() => router.push('/tax-friendly-states-for-retirees')}>Tax-Friendly States Guide</a></li>
                <li><a onClick={() => router.push('/average-monthly-expenses-by-state')}>Expenses by State</a></li>
                <li><a onClick={() => router.push('/how-much-to-retire')}>How Much Do I Need?</a></li>
              </ul>
            </div>
          </aside>
        </div>
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

export default BestStatesToRetire;
