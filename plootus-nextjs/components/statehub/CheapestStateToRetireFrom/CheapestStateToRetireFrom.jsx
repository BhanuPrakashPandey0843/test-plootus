import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from './CheapestStateToRetireFrom.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';
import Chart from 'chart.js/auto';

const CheapestStateToRetireFrom = () => {
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
          labels: ['Mississippi', 'Arkansas', 'Oklahoma', 'West Virginia', 'Alabama', 'U.S. Average'],
          datasets: [{
            label: 'Estimated Annual Cost ($)',
            data: [45600, 48400, 46800, 47600, 48800, 64800],
            backgroundColor: [
              'rgba(44, 182, 125, 0.8)',
              'rgba(44, 182, 125, 0.8)',
              'rgba(44, 182, 125, 0.8)',
              'rgba(44, 182, 125, 0.8)',
              'rgba(44, 182, 125, 0.8)',
              'rgba(107, 127, 168, 0.5)'
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
              grid: { color: '#E2E8F4' }
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
          <div className={styles.heroBadge}>💸 2026 Affordability Report · Plootus Research</div>
          <h1>Cheapest States to Retire in 2026: Top 10 Ranked by Lowest Cost of Living</h1>
          <p className={styles.heroSub}>
            Retiring in the most affordable state (Mississippi) instead of the national average saves over $19,000 per year. We analyzed every state using BLS spending data and MERIC cost-of-living indices to find the absolute cheapest locations for retirees.
          </p>
          <div className={styles.heroMeta}>
            <span>By the Plootus Research Team</span>
            <span>Updated April 2026</span>
            <span>Sources: BLS CES 2024; MERIC Q3 2025</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}>
            <div className={styles.statNum} data-type="statistic">$45,600</div>
            <div className={styles.statLabel}>Avg Annual Cost: Mississippi</div>
          </div>
          <div className={styles.statItem}>
            <div className={`${styles.statNum} ${styles.green}`} data-type="statistic">29.6%</div>
            <div className={styles.statLabel}>Cheaper than National Average</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum} data-type="statistic">$537K</div>
            <div className={styles.statLabel}>Min. Nest Egg Needed (MS)</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum} data-type="statistic">#1</div>
            <div className={styles.statLabel}>Ranked by Affordability</div>
          </div>
        </div>
      </div>

      <div className={styles.pageBody} itemScope itemType="https://schema.org/Article">
        <main className={styles.mainContent} role="main" aria-label="Cheapest States to Retire 2026">
          <section id="rankings">
            <div className={styles.sectionLabel}>2026 Rankings</div>
            <h2>Top 10 Cheapest States for Retirees (by Annual Cost)</h2>
            <div className={styles.top10Grid}>
              {[
                { rank: 1, state: 'Mississippi', cost: '$45,600', tags: ['Cheapest Housing', 'Low Property Tax'], top3: true },
                { rank: 2, state: 'Oklahoma', cost: '$46,800', tags: ['Low Groceries', 'Gas Prices'], top3: true },
                { rank: 3, state: 'West Virginia', cost: '$47,600', tags: ['Lowest Taxes', 'SS-Free 2026'], top3: true },
                { rank: 4, state: 'Arkansas', cost: '$48,400', tags: ['Affordable Land', 'Low Utilities'] },
                { rank: 5, state: 'Alabama', cost: '$48,800', tags: ['Prop Tax < 0.5%', 'Warmer Climate'] },
                { rank: 6, state: 'Tennessee', cost: '$49,500', tags: ['No Income Tax', 'Mid-South Location'] },
                { rank: 7, state: 'Missouri', cost: '$49,500', tags: ['Central Location', 'Utility Value'] },
                { rank: 8, state: 'Kansas', cost: '$49,800', tags: ['Affordable Housing', 'High Value'] },
                { rank: 9, state: 'Iowa', cost: '$50,200', tags: ['Flat Tax 3.8%', 'Quality Healthcare'] },
                { rank: 10, state: 'South Carolina', cost: '$50,600', tags: ['Retirement Exclusion', 'Coast Value'] }
              ].map((s) => (
                <div key={s.rank} className={styles.affCard}>
                  <div className={`${styles.affRank} ${s.top3 ? styles.top3 : ''}`}>{s.rank}</div>
                  <div className={styles.affContent}>
                    <div className={styles.affState}>{s.state}</div>
                    <div className={styles.affCost}>{s.cost} /year avg.</div>
                    <div className={styles.affTags}>
                      {s.tags.map(t => <span key={t} className={styles.affTag}>{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>
              Source: Plootus Research 2026. Annual cost based on BLS CES 2024 age 65+ spending adjusted by MERIC Q3 2025 cost-of-living indices.
            </p>
          </section>

          <section id="comparison">
            <div className={styles.sectionLabel}>Comparison</div>
            <h2>How the Cheapest States Compare to the U.S. Average</h2>
            <div className={styles.chartBox}>
              <h3>Estimated Annual Household Expenses (65+)</h3>
              <div style={{ height: '300px', position: 'relative' }}>
                <canvas ref={chartRef}></canvas>
              </div>
              <p className={styles.chartSource}>Source: BLS Consumer Expenditure Survey 2024; MERIC Q3 2025.</p>
            </div>
            <p>
              The difference between the national average ($64,800) and the cheapest state (Mississippi at $45,600) is $19,200 per year. Over a 25-year retirement, this translates to $480,000 in total cost savings — or a 30% reduction in your required nest egg.
            </p>
          </section>

          <section id="full-table">
            <div className={styles.sectionLabel}>Data Table</div>
            <h2>Full Data — Top 15 Most Affordable States</h2>
            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable} summary="Detailed cost and tax comparison for most affordable retirement states">
                <thead>
                  <tr>
                    <th scope="col">State</th>
                    <th scope="col">Annual Cost</th>
                    <th scope="col">Tax Grade</th>
                    <th scope="col">Min. Savings Target</th>
                    <th scope="col">Value Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Mississippi</strong></td><td data-type="statistic">$45,600</td><td><span className={`${styles.gradeBadge} ${styles.gradeB}`}>B-</span></td><td data-type="statistic">$517,000</td><td><span className={`${styles.valuePill} ${styles.valueBest}`}>ELITE</span></td></tr>
                  <tr><td><strong>Oklahoma</strong></td><td data-type="statistic">$46,800</td><td><span className={`${styles.gradeBadge} ${styles.gradeB}`}>B-</span></td><td data-type="statistic">$547,000</td><td><span className={`${styles.valuePill} ${styles.valueBest}`}>ELITE</span></td></tr>
                  <tr><td><strong>West Virginia</strong></td><td data-type="statistic">$47,600</td><td><span className={`${styles.gradeBadge} ${styles.gradeA}`}>A-</span></td><td data-type="statistic">$567,000</td><td><span className={`${styles.valuePill} ${styles.valueBest}`}>ELITE</span></td></tr>
                  <tr><td><strong>Arkansas</strong></td><td data-type="statistic">$48,400</td><td><span className={`${styles.gradeBadge} ${styles.gradeC}`}>C</span></td><td data-type="statistic">$587,000</td><td><span className={`${styles.valuePill} ${styles.valueGood}`}>GOOD</span></td></tr>
                  <tr><td><strong>Alabama</strong></td><td data-type="statistic">$48,800</td><td><span className={`${styles.gradeBadge} ${styles.gradeB}`}>B</span></td><td data-type="statistic">$597,000</td><td><span className={`${styles.valuePill} ${styles.valueGood}`}>GOOD</span></td></tr>
                  <tr><td><strong>Tennessee</strong></td><td data-type="statistic">$49,500</td><td><span className={`${styles.gradeBadge} ${styles.gradeA}`}>A</span></td><td data-type="statistic">$615,000</td><td><span className={`${styles.valuePill} ${styles.valueBest}`}>ELITE</span></td></tr>
                  <tr><td><strong>Missouri</strong></td><td data-type="statistic">$49,500</td><td><span className={`${styles.gradeBadge} ${styles.gradeB}`}>B+</span></td><td data-type="statistic">$615,000</td><td><span className={`${styles.valuePill} ${styles.valueGood}`}>GOOD</span></td></tr>
                  <tr><td><strong>Kansas</strong></td><td data-type="statistic">$49,800</td><td><span className={`${styles.gradeBadge} ${styles.gradeB}`}>B</span></td><td data-type="statistic">$622,000</td><td><span className={`${styles.valuePill} ${styles.valueGood}`}>GOOD</span></td></tr>
                  <tr><td><strong>Iowa</strong></td><td data-type="statistic">$50,200</td><td><span className={`${styles.gradeBadge} ${styles.gradeB}`}>B</span></td><td data-type="statistic">$632,000</td><td><span className={`${styles.valuePill} ${styles.valueGood}`}>GOOD</span></td></tr>
                  <tr><td><strong>South Carolina</strong></td><td data-type="statistic">$50,600</td><td><span className={`${styles.gradeBadge} ${styles.gradeB}`}>B</span></td><td data-type="statistic">$642,000</td><td><span className={`${styles.valuePill} ${styles.valueGood}`}>GOOD</span></td></tr>
                  <tr><td><strong>South Dakota</strong></td><td data-type="statistic">$52,000</td><td><span className={`${styles.gradeBadge} ${styles.gradeAPlus}`}>A+</span></td><td data-type="statistic">$677,000</td><td><span className={`${styles.valuePill} ${styles.valueBest}`}>ELITE</span></td></tr>
                  <tr><td><strong>Wyoming</strong></td><td data-type="statistic">$52,000</td><td><span className={`${styles.gradeBadge} ${styles.gradeAPlus}`}>A+</span></td><td data-type="statistic">$677,000</td><td><span className={`${styles.valuePill} ${styles.valueBest}`}>ELITE</span></td></tr>
                  <tr><td><strong>Indiana</strong></td><td data-type="statistic">$53,100</td><td><span className={`${styles.gradeBadge} ${styles.gradeB}`}>B-</span></td><td data-type="statistic">$705,000</td><td><span className={`${styles.valuePill} ${styles.valueMixed}`}>MIXED</span></td></tr>
                  <tr><td><strong>Kentucky</strong></td><td data-type="statistic">$53,400</td><td><span className={`${styles.gradeBadge} ${styles.gradeC}`}>C+</span></td><td data-type="statistic">$712,000</td><td><span className={`${styles.valuePill} ${styles.valueMixed}`}>MIXED</span></td></tr>
                  <tr><td><strong>Michigan</strong></td><td data-type="statistic">$54,000</td><td><span className={`${styles.gradeBadge} ${styles.gradeB}`}>B-</span></td><td data-type="statistic">$727,000</td><td><span className={`${styles.valuePill} ${styles.valueMixed}`}>MIXED</span></td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '11px', color: 'var(--text-light)' }}>
              *Min. savings target = (annual cost − avg Social Security $24,894) ÷ 0.04 (4% rule).
            </p>
          </section>

          <section id="faq">
            <div className={styles.sectionLabel}>FAQ</div>
            <h2>Frequently Asked Questions</h2>
            {[
              { q: 'Which state is actually the cheapest to retire in?', a: 'Mississippi is currently the cheapest state for retirees in the U.S. Average annual household expenses for those 65+ are approximately $45,600 — nearly $20,000 less than the national average. Housing costs in Mississippi are the lowest in the nation, roughly 32% below the national average.' },
              { q: 'How much do I need to retire in a "cheap" state?', a: 'Under the 4% rule, and assuming an average Social Security benefit of $24,894, a retiree in Mississippi needs approximately $517,000 in savings. In contrast, a retiree in Hawaii needs roughly $1.5M+ for the same standard of living. Choosing a cheap state can reduce your required nest egg by nearly $1 million.' },
              { q: 'Are cheap states also tax-friendly?', a: 'Not always. While Mississippi and West Virginia are cheap, they have higher state income taxes than states like Tennessee or Wyoming (which have 0%). However, for many retirees, the savings on housing and daily living in "cheap" states far outweigh the 3–5% they might pay in state income tax.' }
            ].map((faq, index) => (
              <div key={index} className={`${styles.faqItem} ${openFaq === index ? styles.open : ''}`}>
                <button className={styles.faqQ} onClick={() => toggleFaq(index)}>
                  {faq.q} <span className={styles.faqIcon}>+</span>
                </button>
                <div className={styles.faqA}>{faq.a}</div>
              </div>
            ))}
          </section>

          <div className={styles.sourcesBox}>
            <h4>📚 Sources</h4>
            <ol>
              <li>Bureau of Labor Statistics (BLS) — Consumer Expenditure Survey 2024 (65+ units)</li>
              <li>Missouri Economic Research and Information Center (MERIC) — Cost of Living Index Q3 2025</li>
              <li>Plootus Research — 50-State Retirement Cost Analysis 2026</li>
              <li>Tax Foundation — State Individual Income Tax Rates 2026</li>
              <li>Social Security Administration — Average Benefit Report 2025</li>
            </ol>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles.sidebarCard}>
            <h4>On This Page</h4>
            <ul className={styles.tocList}>
              <li><a href="#rankings">Top 10 Rankings</a></li>
              <li><a href="#comparison">National Comparison</a></li>
              <li><a href="#full-table">Full Data Table</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className={styles.ctaCard}>
            <h4>What's my retirement number?</h4>
            <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
            <div onClick={() => router.push('/retirement-calculator')} className={styles.ctaBtn}>
              Check Here
            </div>
          </div>

          <div className={styles.sidebarCard}>
            <h4>Related Guides</h4>
            <ul className={styles.relatedLinks}>
              <li><a onClick={() => router.push('/best-states-to-retire')}>Best States to Retire 2026</a></li>
              <li><a onClick={() => router.push('/tax-friendly-states-for-retirees')}>Tax-Friendly States Guide</a></li>
              <li><a onClick={() => router.push('/how-much-to-retire')}>How Much Do I Need?</a></li>
              <li><a onClick={() => router.push('/tool-state-comparison')}>State Comparison Tool</a></li>
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

export default CheapestStateToRetireFrom;
