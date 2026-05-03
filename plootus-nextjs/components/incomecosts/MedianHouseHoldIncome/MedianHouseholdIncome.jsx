import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Chart from 'chart.js/auto';
import { BarChart2, TrendingUp, MapPin, Calendar, BookOpen, ChevronRight } from 'lucide-react';
import styles from './MedianHouseholdIncome.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const incData = [
  { s: 'Massachusetts', i: 113900, r: 'Northeast' }, { s: 'New Jersey', i: 105800, r: 'Northeast' },
  { s: 'Washington DC', i: 109707, r: 'South' }, { s: 'Maryland', i: 102600, r: 'South' },
  { s: 'Connecticut', i: 100500, r: 'Northeast' }, { s: 'Hawaii', i: 98600, r: 'West' },
  { s: 'Colorado', i: 97113, r: 'West' }, { s: 'California', i: 96900, r: 'West' },
  { s: 'Washington', i: 95500, r: 'West' }, { s: 'Virginia', i: 91500, r: 'South' },
  { s: 'Minnesota', i: 90700, r: 'Midwest' }, { s: 'New Hampshire', i: 90100, r: 'Northeast' },
  { s: 'Utah', i: 88600, r: 'West' }, { s: 'New York', i: 85600, r: 'Northeast' },
  { s: 'Alaska', i: 84900, r: 'West' }, { s: 'Illinois', i: 81800, r: 'Midwest' },
  { s: 'Oregon', i: 78900, r: 'West' }, { s: 'Vermont', i: 76400, r: 'Northeast' },
  { s: 'Delaware', i: 75800, r: 'South' }, { s: 'Rhode Island', i: 73500, r: 'Northeast' },
  { s: 'North Dakota', i: 73000, r: 'Midwest' }, { s: 'Nebraska', i: 72800, r: 'Midwest' },
  { s: 'Pennsylvania', i: 72600, r: 'Northeast' }, { s: 'Wisconsin', i: 72100, r: 'Midwest' },
  { s: 'Iowa', i: 71400, r: 'Midwest' }, { s: 'Michigan', i: 69800, r: 'Midwest' },
  { s: 'Georgia', i: 68900, r: 'South' }, { s: 'Nevada', i: 68700, r: 'West' },
  { s: 'Arizona', i: 68100, r: 'West' }, { s: 'Texas', i: 67400, r: 'South' },
  { s: 'Kansas', i: 66900, r: 'Midwest' }, { s: 'Wyoming', i: 66600, r: 'West' },
  { s: 'Maine', i: 66100, r: 'Northeast' }, { s: 'Florida', i: 65800, r: 'South' },
  { s: 'Ohio', i: 65600, r: 'Midwest' }, { s: 'South Dakota', i: 65300, r: 'Midwest' },
  { s: 'Montana', i: 64700, r: 'West' }, { s: 'North Carolina', i: 64400, r: 'South' },
  { s: 'Indiana', i: 64000, r: 'Midwest' }, { s: 'Missouri', i: 63700, r: 'Midwest' },
  { s: 'Tennessee', i: 63200, r: 'South' }, { s: 'South Carolina', i: 62800, r: 'South' },
  { s: 'Idaho', i: 62100, r: 'West' }, { s: 'Oklahoma', i: 61400, r: 'South' },
  { s: 'Kentucky', i: 60800, r: 'South' }, { s: 'Alabama', i: 60200, r: 'South' },
  { s: 'New Mexico', i: 59800, r: 'West' }, { s: 'Louisiana', i: 59500, r: 'South' },
  { s: 'Mississippi', i: 59127, r: 'South' }, { s: 'West Virginia', i: 58900, r: 'South' },
  { s: 'Arkansas', i: 58600, r: 'South' },
];

const usMedian = 81604;

const MedianHouseholdIncome = () => {
  const router = useRouter();
  const [sortMode, setSortMode] = useState('high');
  const [filteredData, setFilteredData] = useState([...incData].sort((a, b) => b.i - a.i));
  const [openFaqs, setOpenFaqs] = useState({});
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const sorted = [...incData].sort((a, b) => b.i - a.i);
      const chartStates = [...sorted.slice(0, 10), ...sorted.slice(-10).reverse()];
      const ctx = chartRef.current.getContext('2d');

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: chartStates.map(d => d.s.split(' (')[0]),
          datasets: [{
            label: 'Median Household Income',
            data: chartStates.map(d => d.i),
            backgroundColor: chartStates.map((d, i) => i < 10 ? 'rgba(44,182,125,0.8)' : 'rgba(224,49,49,0.8)'),
            borderRadius: 5
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { 
              backgroundColor: 'rgba(13, 27, 62, 0.9)',
              titleFont: { family: 'Plus Jakarta Sans', size: 12 },
              bodyFont: { family: 'Plus Jakarta Sans', size: 12 },
              padding: 10,
              displayColors: false,
              callbacks: { label: c => '$' + c.parsed.y.toLocaleString() } 
            }
          },
          scales: {
            y: { 
              ticks: { 
                callback: v => '$' + (v / 1000).toFixed(0) + 'K', 
                font: { family: 'Plus Jakarta Sans', size: 11 },
                color: '#6B7FA8'
              }, 
              grid: { color: '#E2E8F4' } 
            },
            x: { 
              ticks: { 
                font: { family: 'Plus Jakarta Sans', size: 10 }, 
                maxRotation: 40,
                color: '#6B7FA8'
              }, 
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

  const sortInc = (mode) => {
    setSortMode(mode);
    let result = [...incData];
    if (mode === 'high') result.sort((a, b) => b.i - a.i);
    else if (mode === 'low') result.sort((a, b) => a.i - b.i);
    else result.sort((a, b) => a.s.localeCompare(b.s));
    setFilteredData(result);
  };

  const toggleFaq = (index) => {
    setOpenFaqs(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Median Household Income by State (2024) | Plootus</title>
        <meta name="description" content="The U.S. median household income reached $83,730 in 2024 — an all-time high. But that masks a nearly $55,000 gap between states. Complete state-by-state data from the U.S. Census Bureau." />
        <link rel="canonical" href="https://www.plootus.com/median-household-income" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Median Household Income by State 2024: U.S. Census Bureau Data",
            "description": "Complete state-by-state median household income data for 2024 from the U.S. Census Bureau American Community Survey (ACS).",
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
            "datePublished": "2025-09-01",
            "dateModified": "2025-11-01"
          })}
        </script>
      </Head>

      <HubNav />

      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}><BarChart2 size={13} strokeWidth={2.5} /> Census 2024 Data</div>
          <h1>Median Household Income by State (2024)</h1>
          <p className={styles.heroSub}>The U.S. median household income reached $83,730 in 2024 — an all-time high. But that number masks a nearly $55,000 gap between the highest and lowest-earning states. Here's the complete state-by-state picture from the U.S. Census Bureau.</p>
          <div className={styles.heroMeta}>
            <span><BookOpen size={11} style={{marginRight:4,verticalAlign:'middle'}} />Sources: U.S. Census Bureau <abbr title="American Community Survey">ACS</abbr> 2024, <abbr title="Current Population Survey">CPS</abbr> 2025 ASEC</span>
            <span><Calendar size={11} style={{marginRight:4,verticalAlign:'middle'}} /><time dateTime="2025-01-01">2024 ACS Data (Published Sept 2025)</time></span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">$83,730</span><span className={styles.statLabel}>U.S. Median Income (CPS 2024) — All-Time High</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">$113,900</span><span className={styles.statLabel}>Highest: Massachusetts</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">$59,127</span><span className={styles.statLabel}>Lowest: Mississippi</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">~$55K</span><span className={styles.statLabel}>Income Gap: Highest vs. Lowest State</span></div>
        </div>
      </div>

      <div className={styles.pageBody} itemScope itemType="https://schema.org/Article">
        <main className={styles.mainContent} role="main" aria-label="Median Household Income by State 2024">
          <section id="overview">
            <div className={styles.sectionLabel}>National Overview</div>
            <h2>U.S. Household Income Snapshot (2024)</h2>
            <p>Data from the U.S. Census Bureau's 2024 American Community Survey (1-year estimates) published September 2025, and the Current Population Survey (CPS) 2025 Annual Social and Economic Supplement.</p>
            <div className={styles.keyStatsGrid}>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">$83,730</div>
                <div className={styles.keyStatLabel}>U.S. Median (CPS) — All-Time High</div>
                <div className={styles.keyStatDesc}>2024 CPS ASEC — preferred for national trend analysis. A small increase from $82,690 in 2023.</div>
                <div className={styles.keyStatSource}>Census Bureau Income in the United States: 2024 (P60-286, Sept 2025)</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">$81,604</div>
                <div className={styles.keyStatLabel}>U.S. Median (ACS) — State Benchmark</div>
                <div className={styles.keyStatDesc}>2024 ACS 1-year estimates; used for state-by-state comparisons (slightly different methodology).</div>
                <div className={styles.keyStatSource}>U.S. Census Bureau, ACS 2024 (ACSBR-025, Sept 2025)</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">$113,900</div>
                <div className={styles.keyStatLabel}>Highest State: Massachusetts</div>
                <div className={styles.keyStatDesc}>Driven by biotech, finance, and world-class universities. 29 states saw real median income increase from 2023 to 2024.</div>
                <div className={styles.keyStatSource}>Advisor Perspectives (Sept 2025, citing Census CPS)</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">$59,127</div>
                <div className={styles.keyStatLabel}>Lowest State: Mississippi</div>
                <div className={styles.keyStatDesc}>Both ACS and CPS confirm Mississippi as lowest in the nation. Gap with Massachusetts: nearly $55,000.</div>
                <div className={styles.keyStatSource}>Visual Capitalist (Nov 2025, citing Census ACS 2024)</div>
              </div>
            </div>
          </section>

          <section id="rankings">
            <div className={styles.sectionLabel}>State Rankings</div>
            <h2>Median Household Income by State (2024)</h2>
            <p>Data from ACS 2024 1-year estimates. Sorted highest to lowest by default.</p>
            <div className={styles.tableControls}>
              <button className={`${styles.tblBtn} ${sortMode === 'high' ? styles.on : ''}`} onClick={() => sortInc('high')}>Highest First</button>
              <button className={`${styles.tblBtn} ${sortMode === 'low' ? styles.on : ''}`} onClick={() => sortInc('low')}>Lowest First</button>
              <button className={`${styles.tblBtn} ${sortMode === 'alpha' ? styles.on : ''}`} onClick={() => sortInc('alpha')}>A–Z</button>
            </div>
            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable} summary="Data table with sortable columns">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">State</th>
                    <th scope="col">Median Household<br />Income (2024)</th>
                    <th scope="col">vs. U.S. Median<br />($81,604)</th>
                    <th scope="col">Region</th>
                    <th scope="col">Income Tier</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((row, i) => {
                    const diff = row.i - usMedian;
                    const pctD = ((diff / usMedian) * 100).toFixed(1);
                    const vsStr = diff >= 0 
                      ? <span style={{ color: 'var(--green)', fontWeight: 600 }}>+${Math.abs(diff).toLocaleString()} (+${Math.abs(pctD)}%)</span>
                      : <span style={{ color: 'var(--red)', fontWeight: 600 }}>−${Math.abs(diff).toLocaleString()} (${Math.abs(pctD)}%)</span>;
                    
                    const tier = row.i >= 100000 ? 'Top Tier' : row.i >= 85000 ? 'Above Avg' : row.i < 65000 ? 'Below Avg' : 'Near Avg';
                    const tierStyle = tier === 'Top Tier' ? { background: '#d1fae5', color: '#065f46' } : 
                                     tier === 'Above Avg' ? { background: '#fef9c3', color: '#854d0e' } : 
                                     tier === 'Below Avg' ? { background: '#fee2e2', color: '#991b1b' } : 
                                     { background: '#f1f5f9', color: 'var(--muted)' };

                    return (
                      <tr key={row.s}>
                        <td>{sortMode === 'high' ? i + 1 : sortMode === 'low' ? incData.length - i : '-'}</td>
                        <td><strong>{row.s}</strong></td>
                        <td style={{ fontWeight: 700, color: row.i >= usMedian ? 'var(--green)' : 'var(--red)' }}>${row.i.toLocaleString()}</td>
                        <td>{vsStr}</td>
                        <td>{row.r}</td>
                        <td><span className={styles.tag} style={tierStyle}>{tier}</span></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '10px' }}>Source: U.S. Census Bureau, ACS 2024 1-Year Estimates (ACSBR-025, September 2025); Advisor Perspectives analysis (September 2025); Visual Capitalist (Nov 2025). ACS national benchmark: $81,604.</p>

            <div className={styles.chartBox} style={{ marginTop: '24px' }}>
              <h3>Median Household Income — Top 10 vs. Bottom 10 States (2024)</h3>
              <div style={{ height: '260px' }}>
                <canvas ref={chartRef}></canvas>
              </div>
              <p className={styles.chartSource}>Source: U.S. Census Bureau ACS 2024 · National median (ACS): $81,604</p>
            </div>
          </section>

          <section id="context">
            <div className={styles.sectionLabel}>Income Context</div>
            <h2>Income by Demographic & Education (2024)</h2>
            <h3>Median Income by Race/Ethnicity (2024, CPS)</h3>
            <table className={styles.incomeTable} summary="Income comparison data table">
              <thead>
                <tr>
                  <th scope="col">Group</th>
                  <th scope="col">Median Household Income</th>
                  <th scope="col">vs. U.S. Median</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Asian</strong></td><td style={{ color: 'var(--green)', fontWeight: 700 }}>$117,289</td><td style={{ color: 'var(--green)' }}>+44%</td></tr>
                <tr><td><strong>White (non-Hispanic)</strong></td><td>$87,572</td><td style={{ color: 'var(--green)' }}>+7%</td></tr>
                <tr><td><strong>All Households (U.S.)</strong></td><td>$83,730</td><td>—</td></tr>
                <tr><td><strong>Hispanic (any race)</strong></td><td>$70,950</td><td style={{ color: 'var(--red)' }}>−15%</td></tr>
                <tr><td><strong>Black</strong></td><td style={{ color: 'var(--red)' }}>$56,020</td><td style={{ color: 'var(--red)' }}>−33%</td></tr>
              </tbody>
            </table>
            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>Source: Census Bureau, Income in the United States: 2024 (P60-286, Sept 2025).</p>

            <h3>Median Income by Education Level (2024)</h3>
            <table className={styles.incomeTable} summary="Income comparison data table">
              <thead>
                <tr>
                  <th scope="col">Education Level</th>
                  <th scope="col">Median Household Income</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Bachelor's degree or higher</strong></td><td style={{ color: 'var(--green)', fontWeight: 700 }}>$132,700</td></tr>
                <tr><td><strong>Some college / Associate's</strong></td><td>$76,520</td></tr>
                <tr><td><strong>High school diploma</strong></td><td>$58,410</td></tr>
                <tr><td><strong>Less than high school</strong></td><td style={{ color: 'var(--red)' }}>~$40,000</td></tr>
              </tbody>
            </table>
            <div className={styles.callout}>
              <p><strong>Bachelor's Degree Premium:</strong> +$74,290 vs. high school diploma in 2024 — the largest-ever education income gap on record. Source: U.S. Census Bureau ACS 2024 (Appendix Table 3).</p>
            </div>
          </section>

          <section id="faq">
            <div className={styles.sectionLabel}>FAQ</div>
            <h2>Household Income FAQ</h2>
            {[
              {
                q: "What is the median household income in the U.S. in 2024?",
                a: "The U.S. median household income in 2024 was $83,730, according to the Census Bureau's Current Population Survey (CPS ASEC), published September 2025. This represents a small increase from $82,690 in 2023 and is an all-time high in nominal dollars. The American Community Survey (ACS), which uses a different methodology, reported a slightly lower U.S. median of $81,604 for 2024."
              },
              {
                q: "What state has the highest median income?",
                a: "Massachusetts has the highest median household income of any U.S. state, at approximately $113,900 (Advisor Perspectives, citing CPS data). New Jersey, Maryland, and Connecticut round out the top states. These states benefit from proximity to major financial and tech hubs, highly educated workforces, and concentrations of high-paying industries."
              },
              {
                q: "Why is median income a better measure than average income?",
                a: "Median income divides the income distribution in half: 50% of households earn more, 50% earn less. It is less affected by extreme outliers — a billionaire's income doesn't skew the median the way it would the average. For understanding what a typical family earns, the median is the more relevant and informative figure."
              }
            ].map((faq, index) => (
              <div key={index} className={`${styles.faqItem} ${openFaqs[index] ? styles.open : ''}`}>
                <button className={styles.faqQ} onClick={() => toggleFaq(index)}>{faq.q} <span className={styles.faqIcon}>+</span></button>
                <div className={styles.faqA}>{faq.a}</div>
              </div>
            ))}
          </section>

          <div className={styles.sourcesBox}>
            <h4>Sources</h4>
            <p>U.S. Census Bureau — American Community Survey 2024 1-Year Estimates (ACSBR-025, September 2025) · Census Bureau Income in the United States: 2024 (P60-286, September 2025) · Advisor Perspectives analysis of CPS data (September 2025)</p>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles.sidebarCard}>
            <h4>On This Page</h4>
            <ul className={styles.tocList}>
              <li><a href="#overview">National Overview</a></li>
              <li><a href="#rankings">All 50 States Ranked</a></li>
              <li><a href="#context">By Demographic & Education</a></li>
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
              <li><Link href="/rent-by-city">Average Rent by City 2025</Link></li>
              <li><Link href="/minimum-wage-by-state">Minimum Wage by State 2025</Link></li>
              <li><Link href="/health-insurance-costs">Health Insurance Costs 2025</Link></li>
              <li><Link href="/how-much-to-retire">How Much Do I Need to Retire?</Link></li>
              <li><Link href="/cheapest-states-to-retire">Cheapest States to Retire</Link></li>
            </ul>
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

export default MedianHouseholdIncome;
