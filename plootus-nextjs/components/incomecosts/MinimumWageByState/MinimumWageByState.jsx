import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Chart from 'chart.js/auto';
import { DollarSign, TrendingUp, Calendar, BookOpen, MapPin } from 'lucide-react';
import styles from './MinimumWageByState.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const wageData = [
  { s: 'Washington DC', r: 17.95, t: 6.00, idx: true, next: 'July 2026 increase scheduled' },
  { s: 'New York (NYC/LI)', r: 17.00, t: 10.65, idx: false, next: '$17.00 NYC/LI; $16.50 rest of state' },
  { s: 'Washington State', r: 16.66, t: 16.66, idx: true, next: 'Jan 2026 indexed increase' },
  { s: 'California', r: 16.50, t: 16.50, idx: false, next: '$16.90 in 2026' },
  { s: 'Connecticut', r: 16.35, t: 8.23, idx: false, next: '$16.94 in 2026' },
  { s: 'Massachusetts', r: 15.00, t: 6.75, idx: false, next: 'Scheduled increases' },
  { s: 'New Jersey', r: 15.49, t: 5.26, idx: false, next: '$15.92 in 2026' },
  { s: 'Oregon', r: 14.70, t: 14.70, idx: true, next: 'Metro $15.95; nonurban $13.70' },
  { s: 'Rhode Island', r: 15.00, t: 3.89, idx: false, next: 'Stable' },
  { s: 'Illinois', r: 15.00, t: 9.00, idx: false, next: '$15.00 reached Jan 2025' },
  { s: 'Hawaii', r: 14.00, t: 12.75, idx: false, next: '$16.00 in 2026' },
  { s: 'Maine', r: 14.15, t: 7.08, idx: true, next: '$15.10 in 2026' },
  { s: 'Colorado', r: 14.81, t: 11.79, idx: true, next: '$15.16 in 2026' },
  { s: 'Arizona', r: 14.35, t: 3.00, idx: true, next: 'Indexed annually' },
  { s: 'Vermont', r: 14.01, t: 7.01, idx: true, next: 'Indexed annually' },
  { s: 'Florida', r: 14.00, t: 9.98, idx: false, next: '$15.00 Sept 2026' },
  { s: 'Nevada', r: 12.00, t: 12.00, idx: false, next: 'No tip credit' },
  { s: 'Maryland', r: 15.00, t: 3.63, idx: false, next: 'Phased increases continuing' },
  { s: 'Delaware', r: 15.00, t: 2.23, idx: false, next: 'Phased increases' },
  { s: 'Minnesota', r: 11.13, t: 11.13, idx: true, next: '$11.41 in 2026; no tip credit' },
  { s: 'Missouri', r: 13.75, t: 6.88, idx: true, next: '$15.00 in 2026' },
  { s: 'Nebraska', r: 13.50, t: 2.13, idx: false, next: '$15.00 in 2026' },
  { s: 'Virginia', r: 12.41, t: 2.13, idx: false, next: 'Scheduled increases' },
  { s: 'Alaska', r: 11.91, t: 11.91, idx: true, next: 'No tip credit; indexed' },
  { s: 'South Dakota', r: 11.50, t: 5.75, idx: true, next: 'Indexed annually' },
  { s: 'New Mexico', r: 12.00, t: 3.00, idx: false, next: 'Scheduled increases' },
  { s: 'Michigan', r: 10.56, t: 4.01, idx: true, next: '$12.48 Feb 2025; $13.73 in 2026' },
  { s: 'Montana', r: 10.55, t: 10.55, idx: true, next: '$10.85 in 2026; no tip credit' },
  { s: 'Ohio', r: 10.70, t: 5.35, idx: true, next: 'Indexed annually' },
  { s: 'West Virginia', r: 8.75, t: 2.62, idx: false, next: 'Moderate rate' },
  { s: 'Arkansas', r: 11.00, t: 2.63, idx: false, next: 'No scheduled increase' },
  { s: 'Georgia', r: 7.25, t: 2.13, idx: false, next: 'State law $5.15 — federal governs' },
  { s: 'Idaho', r: 7.25, t: 3.35, idx: false, next: 'Federal rate' },
  { s: 'Indiana', r: 7.25, t: 2.13, idx: false, next: 'Federal rate' },
  { s: 'Iowa', r: 7.25, t: 4.35, idx: false, next: 'Federal rate' },
  { s: 'Kansas', r: 7.25, t: 2.13, idx: false, next: 'Federal rate' },
  { s: 'Kentucky', r: 7.25, t: 2.13, idx: false, next: 'Federal rate' },
  { s: 'Louisiana', r: 7.25, t: 2.13, idx: false, next: 'No state law' },
  { s: 'Mississippi', r: 7.25, t: 2.13, idx: false, next: 'No state law' },
  { s: 'North Carolina', r: 7.25, t: 2.13, idx: false, next: 'Federal rate' },
  { s: 'North Dakota', r: 7.25, t: 4.86, idx: false, next: 'Federal rate' },
  { s: 'Oklahoma', r: 7.25, t: 3.63, idx: false, next: 'Federal rate' },
  { s: 'Pennsylvania', r: 7.25, t: 2.83, idx: false, next: 'Federal rate' },
  { s: 'South Carolina', r: 7.25, t: 2.13, idx: false, next: 'No state law' },
  { s: 'Tennessee', r: 7.25, t: 2.13, idx: false, next: 'No state law' },
  { s: 'Texas', r: 7.25, t: 2.13, idx: false, next: 'Federal rate' },
  { s: 'Utah', r: 7.25, t: 2.13, idx: false, next: 'Federal rate' },
  { s: 'Wisconsin', r: 7.25, t: 2.33, idx: false, next: 'Federal rate' },
  { s: 'Wyoming', r: 7.25, t: 2.13, idx: false, next: 'No state law' },
  { s: 'New Hampshire', r: 7.25, t: 3.26, idx: false, next: 'Federal rate' },
];

const MinimumWageByState = () => {
  const router = useRouter();
  const [sortMode, setSortMode] = useState('rate');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [openFaqs, setOpenFaqs] = useState({});
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    let result = [...wageData];
    if (searchQuery) {
      result = result.filter(r => r.s.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    
    if (sortMode === 'rate') {
      result.sort((a, b) => b.r - a.r);
    } else if (sortMode === 'alpha') {
      result.sort((a, b) => a.s.localeCompare(b.s));
    } else if (sortMode === 'fed') {
      result = result.filter(r => r.r <= 7.25);
    }
    
    setFilteredData(result);
  }, [sortMode, searchQuery]);

  useEffect(() => {
    if (chartRef.current) {
      const top15 = [...wageData].sort((a, b) => b.r - a.r).slice(0, 15);
      const ctx = chartRef.current.getContext('2d');

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: top15.map(d => d.s.split(' (')[0]),
          datasets: [{
            label: 'Min. Wage ($/hr)',
            data: top15.map(d => d.r),
            backgroundColor: top15.map(d => d.r >= 15 ? 'rgba(44,182,125,0.8)' : d.r >= 12 ? 'rgba(245,159,0,0.7)' : 'rgba(59,91,219,0.7)'),
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
              callbacks: { label: c => '$' + c.parsed.y.toFixed(2) + '/hr' } 
            }
          },
          scales: {
            y: { 
              min: 0,
              ticks: { 
                callback: v => '$' + v.toFixed(2), 
                font: { family: 'Plus Jakarta Sans', size: 11 },
                color: '#6B7FA8'
              }, 
              grid: { color: '#E2E8F4' } 
            },
            x: { 
              ticks: { 
                font: { family: 'Plus Jakarta Sans', size: 10 }, 
                maxRotation: 35,
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
        <title>Minimum Wage by State (2025) | Plootus</title>
        <meta name="description" content="The complete 2025 state minimum wage table for all 50 states plus D.C. The federal minimum wage has been $7.25 since 2009 — see where your state stands." />
        <link rel="canonical" href="https://www.plootus.com/minimum-wage-by-state" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Minimum Wage by State 2025: Complete 50-State Table",
            "description": "The complete 2025 state minimum wage table for all 50 states plus Washington D.C.",
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
            "dateModified": "2025-12-01"
          })}
        </script>
      </Head>

      <HubNav />

      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}><DollarSign size={13} strokeWidth={2.5} /> Labor Data 2025</div>
          <h1>Minimum Wage by State (2025)</h1>
          <p className={styles.heroSub}>The federal minimum wage has been $7.25 since 2009. But 30+ states have set their own higher floors. This is the complete 2025 state minimum wage table, sourced from the U.S. Department of Labor and state labor agencies.</p>
          <div className={styles.heroMeta}>
            <span><BookOpen size={11} style={{marginRight:4,verticalAlign:'middle'}} />Sources: U.S. <abbr title="U.S. Department of Labor">DOL</abbr>, <abbr title="National Conference of State Legislatures">NCSL</abbr>, Paycor, Workforce.com</span>
            <span><Calendar size={11} style={{marginRight:4,verticalAlign:'middle'}} /><time dateTime="2025-01-01">Updated: 2025</time></span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">$7.25</span><span className={styles.statLabel}>Federal Minimum Wage (Since 2009)</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">$17.95</span><span className={styles.statLabel}>Highest Rate — Washington D.C.</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">19 + DC</span><span className={styles.statLabel}>States with CPI Inflation Indexing</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">21</span><span className={styles.statLabel}>States Raising Wages in 2026</span></div>
        </div>
      </div>

      <div className={styles.pageBody} itemScope itemType="https://schema.org/Article">
        <main className={styles.mainContent} role="main" aria-label="Minimum Wage by State 2025">
          <section id="overview">
            <div className={styles.sectionLabel}>Overview</div>
            <h2>Minimum Wage Snapshot (2025)</h2>
            <p>After more than a decade of stagnation at the federal level, states have become the primary drivers of minimum wage policy. Here's where things stand in 2025.</p>
            <div className={styles.keyStatsGrid}>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">$7.25</div>
                <div className={styles.keyStatLabel}>Federal Minimum Wage</div>
                <div className={styles.keyStatDesc}>Unchanged since July 2009 — 16+ years without a federal increase. Workers in states without their own law default to this rate.</div>
                <div className={styles.keyStatSource}>U.S. DOL Fair Labor Standards Act</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">$17.95</div>
                <div className={styles.keyStatLabel}>Highest Rate — Washington D.C.</div>
                <div className={styles.keyStatDesc}>Effective July 1, 2025. Among the 50 states, New York City leads at $17.00/hour.</div>
                <div className={styles.keyStatSource}>Workforce.com (Jan 2026); NY State DOL</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">$15,080</div>
                <div className={styles.keyStatLabel}>Annual Earnings at Federal Minimum</div>
                <div className={styles.keyStatDesc}>Full-time (2,080 hrs/yr) at $7.25. vs. avg. consumer spending of $72,967 in 2022.</div>
                <div className={styles.keyStatSource}>BLS Consumer Expenditures Report; OnPay (2025)</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">21</div>
                <div className={styles.keyStatLabel}>States Raising Wages in 2026</div>
                <div className={styles.keyStatDesc}>Including CA ($16.90), CO ($15.16), CT ($16.94), HI ($16.00), NJ ($15.92).</div>
                <div className={styles.keyStatSource}>Paycom 2026 Minimum Wage Guide</div>
              </div>
            </div>
          </section>

          <section id="table">
            <div className={styles.sectionLabel}>Complete Table</div>
            <h2>2025 Minimum Wage by State — Full Table</h2>
            <p>All 50 states plus D.C. Current rates effective as of 2025. States marked with ✓ index to inflation automatically.</p>
            <div className={styles.tableControls}>
              <button className={`${styles.tblBtn} ${sortMode === 'rate' ? styles.on : ''}`} onClick={() => setSortMode('rate')}>Highest Rate First</button>
              <button className={`${styles.tblBtn} ${sortMode === 'alpha' ? styles.on : ''}`} onClick={() => setSortMode('alpha')}>A–Z</button>
              <button className={`${styles.tblBtn} ${sortMode === 'fed' ? styles.on : ''}`} onClick={() => setSortMode('fed')}>Federal Rate States</button>
              <input className={styles.tblSearch} placeholder="Search state…" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable} summary="Data table with sortable columns">
                <thead>
                  <tr>
                    <th scope="col">State</th>
                    <th scope="col">2025 Min. Wage</th>
                    <th scope="col">Tipped Min.</th>
                    <th scope="col">Indexed?</th>
                    <th scope="col">Next Increase</th>
                    <th scope="col">vs. Federal</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((row) => {
                    const isFed = row.r <= 7.25;
                    const diff = row.r - 7.25;
                    const vsStr = isFed ? <span style={{ color: 'var(--red)', fontWeight: 600 }}>= Federal floor</span> : <span style={{ color: 'var(--green)', fontWeight: 600 }}>+${diff.toFixed(2)} above federal</span>;
                    const rC = row.r >= 15 ? { color: 'var(--green)', fontWeight: 700 } : row.r >= 12 ? { color: 'var(--amber)', fontWeight: 600 } : row.r <= 7.25 ? { color: 'var(--red)', fontWeight: 600 } : { fontWeight: 600 };

                    return (
                      <tr key={row.s}>
                        <td><strong>{row.s}</strong></td>
                        <td style={rC}>${row.r.toFixed(2)}/hr</td>
                        <td>${row.t.toFixed(2)}/hr</td>
                        <td>
                          {row.idx ? (
                            <span style={{ background: '#d1fae5', color: '#065f46', padding: '2px 9px', borderRadius: '99px', fontSize: '.7rem', fontWeight: 700 }}>✓ Indexed</span>
                          ) : (
                            <span style={{ background: '#f1f5f9', color: 'var(--muted)', padding: '2px 9px', borderRadius: '99px', fontSize: '.7rem' }}>No</span>
                          )}
                        </td>
                        <td style={{ fontSize: '.8rem', color: 'var(--muted)' }}>{row.next}</td>
                        <td>{vsStr}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '10px' }}>Sources: U.S. Department of Labor (dol.gov); NCSL State Minimum Wages (Jan 2026); Paycor; Fingercheck.</p>

            <div className={styles.chartBox} style={{ marginTop: '24px' }}>
              <h3>State Minimum Wages — $15+ States vs. Federal Floor</h3>
              <div style={{ height: '260px' }}>
                <canvas ref={chartRef}></canvas>
              </div>
              <p className={styles.chartSource}>Source: U.S. DOL · State agencies · Paycor 2025. Federal rate: $7.25/hr (unchanged since 2009).</p>
            </div>
          </section>

          <section id="context">
            <div className={styles.sectionLabel}>Context</div>
            <h2>The Gap Between Minimum Wage and Living Wage</h2>
            <div className={styles.contextItems}>
              <div className={styles.contextItem}>
                <div className={styles.contextIcon}>📈</div>
                <div className={styles.contextContent}>
                  <h4>Federal Minimum Purchasing Power Has Declined</h4>
                  <p>The federal minimum wage of $7.25 has lost approximately 27% of its purchasing power since 2009 due to inflation. A worker earning $7.25 in 2025 has less real buying power than a minimum-wage worker had in 1968.</p>
                </div>
              </div>
              <div className={styles.contextItem}>
                <div className={styles.contextIcon}>🏙️</div>
                <div className={styles.contextContent}>
                  <h4>Local Rates Can Far Exceed State Minimums</h4>
                  <p>Cities and counties often set higher rates. In 2025, Tukwila, WA requires $21.65/hour — nearly 3× the federal rate. Denver: $18.81. Seattle: $20.29. Chicago: $16.60 for larger employers.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="faq">
            <div className={styles.sectionLabel}>FAQ</div>
            <h2>Minimum Wage FAQ</h2>
            {[
              {
                q: "What is the federal minimum wage in 2025?",
                a: "The federal minimum wage remains $7.25 per hour in 2025, unchanged since July 24, 2009. The Fair Labor Standards Act (FLSA), enforced by the U.S. Department of Labor, sets this as the national floor. States may set higher rates; employees are entitled to whichever rate is higher — federal or state."
              },
              {
                q: "Which state has the highest minimum wage in 2025?",
                a: "Among the 50 states, New York has the highest minimum wage at $17.00/hour for New York City, Long Island, and Westchester County ($16.50 for the rest of the state). Washington State's statewide minimum is $16.66/hour. Washington D.C. has the highest rate of any U.S. jurisdiction at $17.95/hour."
              },
              {
                q: "What is the minimum wage for tipped employees?",
                a: "Under federal law, employers may pay tipped employees as little as $2.13/hour — the \"tip credit\" — as long as tips bring the total to at least $7.25/hour. In 8 states (AK, CA, MN, MT, NV, OR, WA, and others), employers must pay tipped workers the full state minimum wage before tips."
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
            <p>U.S. Department of Labor State Minimum Wage Laws (dol.gov) · NCSL State Minimum Wages (Jan 2026) · Paycor Minimum Wage by State 2025 · Fingercheck 2025 State Minimum Wages</p>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles.sidebarCard}>
            <h4>On This Page</h4>
            <ul className={styles.tocList}>
              <li><a href="#overview">Snapshot</a></li>
              <li><a href="#table">Full State Table</a></li>
              <li><a href="#context">Context</a></li>
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

export default MinimumWageByState;
