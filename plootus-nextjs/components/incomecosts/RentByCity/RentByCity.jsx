import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Chart from 'chart.js/auto';
import styles from './RentByCity.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const rentData = [
  { c: 'New York City, NY', r1: 3545, r2: 2394, yoy: '+10.8%', tier: 'High-Cost' },
  { c: 'San Jose, CA', r1: 2800, r2: 2580, yoy: '+2.0%', tier: 'High-Cost' },
  { c: 'Boston, MA', r1: 2597, r2: 2200, yoy: '+2.6%', tier: 'High-Cost' },
  { c: 'San Francisco, CA', r1: 2509, r2: 2580, yoy: '+2.6%', tier: 'High-Cost' },
  { c: 'Los Angeles, CA', r1: 2231, r2: 2580, yoy: '+2.1%', tier: 'High-Cost' },
  { c: 'Washington DC', r1: 2029, r2: 2056, yoy: '+1.5%', tier: 'High-Cost' },
  { c: 'Seattle, WA', r1: 1900, r2: 1950, yoy: '+1.8%', tier: 'High-Cost' },
  { c: 'Denver, CO', r1: 1850, r2: 1800, yoy: '+1.2%', tier: 'Mid-Tier' },
  { c: 'Miami, FL', r1: 1756, r2: 1750, yoy: '−4.2%', tier: 'Mid-Tier' },
  { c: 'Chicago, IL', r1: 1584, r2: 1550, yoy: '+2.7%', tier: 'Mid-Tier' },
  { c: 'Philadelphia, PA', r1: 1500, r2: 1400, yoy: '+2.8%', tier: 'Mid-Tier' },
  { c: 'Nashville, TN', r1: 1480, r2: 1380, yoy: '+1.5%', tier: 'Mid-Tier' },
  { c: 'Minneapolis, MN', r1: 1450, r2: 1350, yoy: '+2.0%', tier: 'Mid-Tier' },
  { c: 'Portland, OR', r1: 1430, r2: 1500, yoy: '+0.5%', tier: 'Mid-Tier' },
  { c: 'Atlanta, GA', r1: 1402, r2: 1380, yoy: '+2.8%', tier: 'Affordable' },
  { c: 'Sacramento, CA', r1: 1390, r2: 1900, yoy: '+1.0%', tier: 'Affordable' },
  { c: 'Austin, TX', r1: 1350, r2: 1400, yoy: '−1.5%', tier: 'Affordable' },
  { c: 'Raleigh, NC', r1: 1300, r2: 1411, yoy: '+2.0%', tier: 'Affordable' },
  { c: 'Indianapolis, IN', r1: 1290, r2: 1050, yoy: '+1.2%', tier: 'Affordable' },
  { c: 'Columbus, OH', r1: 1280, r2: 1050, yoy: '+1.0%', tier: 'Affordable' },
  { c: 'Dallas, TX', r1: 1209, r2: 1400, yoy: '−2.2%', tier: 'Affordable' },
  { c: 'Phoenix, AZ', r1: 1192, r2: 1350, yoy: '−4.1%', tier: 'Affordable' },
  { c: 'Charlotte, NC', r1: 1180, r2: 1300, yoy: '+1.8%', tier: 'Affordable' },
  { c: 'San Antonio, TX', r1: 1150, r2: 1200, yoy: '−1.0%', tier: 'Affordable' },
  { c: 'Jacksonville, FL', r1: 1130, r2: 1250, yoy: '−2.0%', tier: 'Affordable' },
  { c: 'Houston, TX', r1: 1078, r2: 1300, yoy: '−3.3%', tier: 'Affordable' },
];

const RentByCity = () => {
  const router = useRouter();
  const [sortMode, setSortMode] = useState('cost');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [openFaqs, setOpenFaqs] = useState({});
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    let result = [...rentData];
    if (searchQuery) {
      result = result.filter(r => r.c.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    
    if (sortMode === 'cost') {
      result.sort((a, b) => b.r1 - a.r1);
    } else if (sortMode === 'alpha') {
      result.sort((a, b) => a.c.localeCompare(b.c));
    }
    
    setFilteredData(result);
  }, [sortMode, searchQuery]);

  useEffect(() => {
    if (chartRef.current) {
      const sorted = [...rentData].sort((a, b) => b.r1 - a.r1);
      const chartCities = [...sorted.slice(0, 5), ...sorted.slice(-5).reverse()];
      const ctx = chartRef.current.getContext('2d');

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: chartCities.map(d => d.c.split(',')[0]),
          datasets: [{
            label: 'Avg 1BR Rent',
            data: chartCities.map(d => d.r1),
            backgroundColor: chartCities.map((d, i) => i < 5 ? 'rgba(224,49,49,0.8)' : 'rgba(44,182,125,0.8)'),
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
              callbacks: { label: c => '$' + c.parsed.y.toLocaleString() + '/mo' } 
            }
          },
          scales: {
            y: { 
              ticks: { 
                callback: v => '$' + (v / 1000).toFixed(1) + 'K', 
                font: { family: 'Plus Jakarta Sans', size: 11 },
                color: '#6B7FA8'
              }, 
              grid: { color: '#E2E8F4' } 
            },
            x: { 
              ticks: { 
                font: { family: 'Plus Jakarta Sans', size: 11 },
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

  const toggleFaq = (index) => {
    setOpenFaqs(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Average Rent by City (2025) | Plootus</title>
        <meta name="description" content="Average 1BR and 2BR rents for 30+ major U.S. metros in 2025. HUD Fair Market Rent data, Census ACS, and current market data." />
        <link rel="canonical" href="https://www.plootus.com/rent-by-city" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Average Rent by City (2025): Complete U.S. Rental Market Data",
            "description": "Average 1-bedroom and 2-bedroom rents for 30+ major U.S. metros in 2025.",
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
            "datePublished": "2025-01-01",
            "dateModified": "2025-06-01"
          })}
        </script>
      </Head>

      <HubNav />

      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>🏙️ Housing Data 2025</div>
          <h1>Average Rent by City (2025)</h1>
          <p className={styles.heroSub}>How much does it cost to rent in America's biggest cities? We break down 1-bedroom and 2-bedroom average rents for 30+ major metros, using <abbr title="U.S. Department of Housing and Urban Development">HUD</abbr> Fair Market Rent data, U.S. Census <abbr title="American Community Survey">ACS</abbr>, and current market data.</p>
          <div className={styles.heroMeta}>
            <span>📚 Sources: HUD FY2025 <abbr title="Fair Market Rent">FMR</abbr>, Census ACS, Dwellsy, Apartments.com</span>
            <span>🗓️ 2025 Data</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">$1,636</span><span className={styles.statLabel}>National Avg Rent (All Units)</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">$3,545</span><span className={styles.statLabel}>Most Expensive 1BR (NYC)</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">$1,078</span><span className={styles.statLabel}>Most Affordable Major City (Houston)</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">22.4M</span><span className={styles.statLabel}>Cost-Burdened Renter Households</span></div>
        </div>
      </div>

      <div className={styles.pageBody} itemScope itemType="https://schema.org/Article">
        <main className={styles.mainContent} role="main" aria-label="Average Rent by City 2025">
          <section id="overview">
            <div className={styles.sectionLabel}>National Overview</div>
            <h2>U.S. Rental Market at a Glance (2025)</h2>
            <p>The national rental market has cooled from its 2022 peak but remains well above pre-pandemic levels. These headline figures set the context for city-level comparisons.</p>
            <div className={styles.keyStatsGrid}>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">$1,636</div>
                <div className={styles.keyStatLabel}>National Avg Rent (All Units)</div>
                <div className={styles.keyStatDesc}>+0.9% year-over-year as of June 2025.</div>
                <div className={styles.keyStatSource}>Apartments.com Rent Report, June 2025</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">$1,363</div>
                <div className={styles.keyStatLabel}>Median U.S. Rent (Census)</div>
                <div className={styles.keyStatDesc}>Down 5.5% from 2022 peak.</div>
                <div className={styles.keyStatSource}>Apartment List National Rent Report, March 2025</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">$1,671</div>
                <div className={styles.keyStatLabel}>HUD 2BR Fair Market Rent (National)</div>
                <div className={styles.keyStatDesc}>FY2025 FMR at the 40th percentile; 1BR FMR: $1,393.</div>
                <div className={styles.keyStatSource}>HUD Fair Market Rent, FY2025</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">22.4M</div>
                <div className={styles.keyStatLabel}>Cost-Burdened Renter Households</div>
                <div className={styles.keyStatDesc}>Households spending more than 30% of income on housing.</div>
                <div className={styles.keyStatSource}>iPropertyManagement research, 2025 (citing HUD data)</div>
              </div>
            </div>
          </section>

          <section id="city-data">
            <div className={styles.sectionLabel}>City Data</div>
            <h2>Average Rent by Major City (2025)</h2>
            <p>Data represents average 1-bedroom rents from Dwellsy IQ (October 2025) for major metros, combined with HUD FY2025 Fair Market Rent for 2BR benchmarks.</p>
            <div className={styles.tableControls}>
              <button className={`${styles.tblBtn} ${sortMode === 'cost' ? styles.on : ''}`} onClick={() => setSortMode('cost')}>Highest First</button>
              <button className={`${styles.tblBtn} ${sortMode === 'alpha' ? styles.on : ''}`} onClick={() => setSortMode('alpha')}>A–Z</button>
              <input className={styles.tblSearch} placeholder="Search city…" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable} summary="Data table with sortable columns">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">City / Metro</th>
                    <th scope="col">Avg 1BR Rent</th>
                    <th scope="col">HUD 2BR FMR</th>
                    <th scope="col">YoY Change</th>
                    <th scope="col">Market Tier</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((row, i) => {
                    const pct = Math.round((row.r1 / 3545) * 100);
                    const up = row.yoy.startsWith('+');
                    const down = row.yoy.startsWith('−');
                    const yoyC = up ? { color: 'var(--red)', fontWeight: 600 } : down ? { color: 'var(--green)', fontWeight: 600 } : {};
                    const tierC = row.tier === 'High-Cost' ? { background: '#fee2e2', color: '#991b1b' } : row.tier === 'Mid-Tier' ? { background: '#fef9c3', color: '#854d0e' } : { background: '#d1fae5', color: '#065f46' };
                    
                    return (
                      <tr key={row.c}>
                        <td>{i + 1}</td>
                        <td><strong>{row.c}</strong></td>
                        <td>
                          <div className={styles.bw}>
                            <span style={{ fontWeight: 700 }}>${row.r1.toLocaleString()}</span>
                            <div className={styles.bb}>
                              <div className={styles.bf} style={{ width: `${pct}%`, background: pct > 70 ? 'var(--red)' : pct > 45 ? 'var(--amber)' : 'var(--teal)' }}></div>
                            </div>
                          </div>
                        </td>
                        <td>${row.r2.toLocaleString()}</td>
                        <td style={yoyC}>{row.yoy}</td>
                        <td><span className={styles.tag} style={tierC}>{row.tier}</span></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '10px' }}>1BR average rents from Dwellsy IQ (Oct 2025). 2BR FMRs from HUD FY2025.</p>

            <div className={styles.chartBox} style={{ marginTop: '24px' }}>
              <h3>Average 1BR Rent — Top 10 Most & Least Expensive Cities</h3>
              <div style={{ height: '260px' }}>
                <canvas ref={chartRef}></canvas>
              </div>
              <p className={styles.chartSource}>Source: Dwellsy IQ, October 2025 · National avg: $1,636/mo (Apartments.com, June 2025)</p>
            </div>
          </section>

          <section id="by-state">
            <div className={styles.sectionLabel}>State-Level</div>
            <h2>Average Rent by State (2025)</h2>
            <p>State averages from Apartments.com (June 2025).</p>
            <div className={styles.dataTableWrap}>
              <table className={styles.stateTable} summary="State-level data table">
                <thead>
                  <tr>
                    <th scope="col">State</th>
                    <th scope="col">Avg Monthly Rent</th>
                    <th scope="col">2BR HUD FMR</th>
                    <th scope="col">Trend vs. 2024</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Hawaii</strong></td><td style={{ color: 'var(--red)', fontWeight: 700 }}>$2,400+</td><td>$2,558</td><td>📈 High</td></tr>
                  <tr><td><strong>California</strong></td><td style={{ color: 'var(--red)', fontWeight: 700 }}>$2,200</td><td>$2,580</td><td>📈 Rising</td></tr>
                  <tr><td><strong>Massachusetts</strong></td><td style={{ color: 'var(--red)' }}>$2,100</td><td>$2,200+</td><td>📈 Rising</td></tr>
                  <tr><td><strong>New York</strong></td><td style={{ color: 'var(--red)' }}>$2,050</td><td>$2,394</td><td>📈 NYC Increase</td></tr>
                  <tr><td><strong>New Jersey</strong></td><td style={{ color: 'var(--red)' }}>$1,900</td><td>$1,950+</td><td>➡️ Stable</td></tr>
                  <tr><td><strong>Oklahoma</strong></td><td style={{ color: 'var(--green)', fontWeight: 700 }}>$903</td><td>$950</td><td>✅ Lowest avg.</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="tips">
            <div className={styles.sectionLabel}>Renter Strategy</div>
            <h2>Smart Strategies for Renters in 2025</h2>
            <ul className={styles.strategyList}>
              <li className={styles.strategyItem}>
                <div className={styles.strategyIcon}>📅</div>
                <div className={styles.strategyContent}>
                  <h4>Sign in Winter</h4>
                  <p>Rents are typically 5–8% lower in Nov–Feb than in peak summer months. Landlords offer better concessions — free months, reduced deposits — when demand is lowest.</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyIcon}>📊</div>
                <div className={styles.strategyContent}>
                  <h4>Use HUD FMR as Your Benchmark</h4>
                  <p>HUD's Fair Market Rents give you a transparent baseline. Available at HUD.gov for every metro.</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyIcon}>🏙️</div>
                <div className={styles.strategyContent}>
                  <h4>Consider Adjacent Neighborhoods</h4>
                  <p>In most metros, rents drop 10–25% just 2–3 miles from the most popular ZIP codes.</p>
                </div>
              </li>
            </ul>
          </section>

          <section id="faq">
            <div className={styles.sectionLabel}>FAQ</div>
            <h2>Rental Market FAQ</h2>
            {[
              {
                q: "What is the average rent in the U.S. in 2025?",
                a: "The average rent in the U.S. as of June 2025 is approximately $1,636/month across all unit types, according to Apartments.com. The national median rent is lower at about $1,363/month (Apartment List)."
              },
              {
                q: "What percentage of income should go toward rent?",
                a: "The traditional \"30% rule\" — spending no more than 30% of gross income on housing — remains the widely accepted benchmark. HUD defines households spending more than 30% as \"cost-burdened.\""
              },
              {
                q: "Is the rental market improving for renters in 2025?",
                a: "Conditions have improved somewhat from the 2022 peak. Apartment List reports national median rent has fallen 5.5% from its mid-2022 peak."
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
            <p>Apartments.com National Rent Report (June 2025) · HUD FY2025 Fair Market Rents · Dwellsy IQ (Oct 2025) · Apartment List National Rent Report (March 2025)</p>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles.sidebarCard}>
            <h4>On This Page</h4>
            <ul className={styles.tocList}>
              <li><a href="#overview">National Overview</a></li>
              <li><a href="#city-data">City Data Table</a></li>
              <li><a href="#by-state">By State</a></li>
              <li><a href="#tips">Renter Strategies</a></li>
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
              <li><Link href="/minimum-wage-by-state">Minimum Wage by State 2025</Link></li>
              <li><Link href="/median-household-income">Median Household Income by State</Link></li>
              <li><Link href="/health-insurance-costs">Health Insurance Costs 2025</Link></li>
              <li><Link href="/how-much-to-retire">How Much Do I Need to Retire?</Link></li>
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

export default RentByCity;
