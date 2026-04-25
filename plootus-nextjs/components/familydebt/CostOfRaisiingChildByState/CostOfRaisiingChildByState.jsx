import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Chart from 'chart.js/auto';
import styles from './CostOfRaisiingChildByState.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const natAvg = 27743;
const stateData = [
  { s: "Massachusetts", a: 44000, r: "Northeast" }, { s: "Hawaii", a: 42000, r: "West" }, { s: "Connecticut", a: 39000, r: "Northeast" },
  { s: "New York", a: 38500, r: "Northeast" }, { s: "California", a: 37000, r: "West" }, { s: "New Jersey", a: 36000, r: "Northeast" },
  { s: "Maryland", a: 35500, r: "South" }, { s: "Washington", a: 34000, r: "West" }, { s: "Colorado", a: 33000, r: "West" },
  { s: "Vermont", a: 32500, r: "Northeast" }, { s: "Minnesota", a: 31500, r: "Midwest" }, { s: "Virginia", a: 31000, r: "South" },
  { s: "Oregon", a: 30500, r: "West" }, { s: "Rhode Island", a: 30000, r: "Northeast" }, { s: "New Hampshire", a: 29500, r: "Northeast" },
  { s: "Illinois", a: 29000, r: "Midwest" }, { s: "Delaware", a: 28500, r: "South" }, { s: "Arizona", a: 28000, r: "West" },
  { s: "Maine", a: 27800, r: "Northeast" }, { s: "Nevada", a: 27500, r: "West" }, { s: "Wisconsin", a: 27000, r: "Midwest" },
  { s: "Michigan", a: 26500, r: "Midwest" }, { s: "Pennsylvania", a: 26000, r: "Northeast" }, { s: "North Carolina", a: 25500, r: "South" },
  { s: "Georgia", a: 25000, r: "South" }, { s: "Montana", a: 24500, r: "West" }, { s: "Florida", a: 24000, r: "South" },
  { s: "Texas", a: 23500, r: "South" }, { s: "Ohio", a: 23000, r: "Midwest" }, { s: "Indiana", a: 22500, r: "Midwest" },
  { s: "Utah", a: 22000, r: "West" }, { s: "Idaho", a: 21500, r: "West" }, { s: "Iowa", a: 21000, r: "Midwest" },
  { s: "South Carolina", a: 20500, r: "South" }, { s: "Missouri", a: 20000, r: "Midwest" }, { s: "Nebraska", a: 19500, r: "Midwest" },
  { s: "Tennessee", a: 19000, r: "South" }, { s: "Kansas", a: 18500, r: "Midwest" }, { s: "Kentucky", a: 18000, r: "South" },
  { s: "Oklahoma", a: 17500, r: "South" }, { s: "Alabama", a: 17200, r: "South" }, { s: "New Mexico", a: 17000, r: "West" },
  { s: "Wyoming", a: 16900, r: "West" }, { s: "North Dakota", a: 16800, r: "Midwest" }, { s: "South Dakota", a: 16600, r: "Midwest" },
  { s: "Louisiana", a: 16500, r: "South" }, { s: "West Virginia", a: 16300, r: "South" }, { s: "Arkansas", a: 16200, r: "South" },
  { s: "Alaska", a: 16100, r: "West" }, { s: "Mississippi", a: 16000, r: "South" }
];

const CostOfRaisiingChildByState = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortMode, setSortMode] = useState('cost');
  const [filteredData, setFilteredData] = useState([...stateData]);
  const [openFaqs, setOpenFaqs] = useState({});
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Number Animation Logic
    const animateStats = () => {
      const stats = document.querySelectorAll('[data-type="statistic"], [data-type="key-statistic"]');
      stats.forEach(el => {
        const val = el.innerText;
        if (val.includes('%') || val.includes('$') || val.includes('–') || isNaN(val.replace(/[%$,–]/g, ''))) {
          const numPart = val.split('–')[0].replace(/[^0-9.]/g, '');
          if (!numPart) return;
          
          const target = parseFloat(numPart);
          const prefix = val.startsWith('$') ? '$' : '';
          const suffix = val.includes('%') ? '%' : (val.includes('/yr') ? '/yr' : (val.includes('/mo') ? '/mo' : (val.includes('/hr') ? '/hr' : (val.includes('K') ? 'K' : ''))));
          
          let startTime = null;
          const duration = 1500;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentVal = Math.floor(progress * target);
            if (val.includes('–')) {
              el.innerText = val;
              return;
            }
            el.innerText = `${prefix}${currentVal.toLocaleString()}${suffix}`;
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              el.innerText = val;
            }
          };
          window.requestAnimationFrame(step);
          return;
        }

        const target = parseInt(val);
        let startTime = null;
        const duration = 1500;

        const step = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          el.innerText = Math.floor(progress * target);
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            el.innerText = val;
          }
        };
        window.requestAnimationFrame(step);
      });
    };

    const initChart = () => {
      if (chartRef.current) {
        const top5 = [...stateData].sort((a, b) => b.a - a.a).slice(0, 5);
        const bot5 = [...stateData].sort((a, b) => a.a - b.a).slice(0, 5).reverse();
        const chartData = [...top5, ...bot5];

        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(chartRef.current, {
          type: 'bar',
          data: {
            labels: chartData.map(d => d.s),
            datasets: [{
              label: 'Annual Cost',
              data: chartData.map(d => d.a),
              backgroundColor: chartData.map((d, i) => i < 5 ? 'rgba(224,49,49,0.8)' : 'rgba(44,182,125,0.8)'),
              borderRadius: 5
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: { callbacks: { label: c => '$' + c.parsed.y.toLocaleString() + '/year' } }
            },
            scales: {
              y: { ticks: { callback: v => '$' + (v / 1000).toFixed(0) + 'K', font: { family: 'Plus Jakarta Sans', size: 11 } }, grid: { color: '#E2E8F4' } },
              x: { ticks: { font: { family: 'Plus Jakarta Sans', size: 11 }, maxRotation: 30 }, grid: { display: false } }
            }
          }
        });
      }
    };

    initChart();
    animateStats();

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    let result = stateData.filter(r => r.s.toLowerCase().includes(searchTerm.toLowerCase()));
    if (sortMode === 'cost') {
      result.sort((a, b) => b.a - a.a);
    } else {
      result.sort((a, b) => a.s.localeCompare(b.s));
    }
    setFilteredData(result);
  }, [searchTerm, sortMode]);

  const toggleFaq = (index) => {
    setOpenFaqs(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className={styles.container}>
      <HubNav />

      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>📊 2025 Data Guide</div>
          <h1>Cost of Raising a Child by State: Birth to 18</h1>
          <p className={styles.heroSub}>From diapers to diplomas, the cost of raising a child varies by more than $400,000 depending on where you live. We break down every major expense using USDA, MIT Living Wage, and SmartAsset 2025 data — so you can plan ahead.</p>
          <div className={styles.heroMeta}>
            <span>📚 Sources: USDA, MIT Living Wage Calculator, SmartAsset 2025</span>
            <span>🗓️ Updated: 2025 Data</span>
            <span>✍️ Reviewed by Plootus Research Team</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">$320K–$331K</span><span className={styles.statLabel}>Avg. Total Cost (Birth–18), Middle-Income</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">$44K/yr</span><span className={styles.statLabel}>Most Expensive State (Massachusetts)</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">$16K/yr</span><span className={styles.statLabel}>Least Expensive State (Mississippi)</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">+4.5%</span><span className={styles.statLabel}>Annual Cost Increase 2024–25</span></div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent} role="main" aria-label="Cost of Raising a Child by State 2025 — Complete Data and Planning Guide">
          <section id="overview">
            <div className={styles.sectionLabel}>National Overview</div>
            <h2>What It Costs to Raise a Child in America (2025)</h2>
            <p>The USDA last published its landmark "Expenditures on Children by Families" report in 2017. Multiple researchers have since updated those figures for inflation — here's where the data lands in 2025:</p>
            <div className={styles.keyStatsGrid}>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">$320K–$331K</div>
                <div className={styles.keyStatLabel}>Avg. Total Cost (Birth–18)</div>
                <div className={styles.keyStatDesc}>Middle-income family, inflation-adjusted from USDA 2015 baseline.</div>
                <div className={styles.keyStatSource}>Sources: Northwestern Mutual (Apr 2025, BLS CPI); Stacker/USNews (Jun 2025)</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">$414K+</div>
                <div className={styles.keyStatLabel}>High-End Estimate (2025)</div>
                <div className={styles.keyStatDesc}>Higher-income family projections; some estimates reach $514K depending on methodology.</div>
                <div className={styles.keyStatSource}>Source: SoFi (2024 data); USNews citing government data</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">$16K–$44K/yr</div>
                <div className={styles.keyStatLabel}>Annual Cost Range by State</div>
                <div className={styles.keyStatDesc}>~$16K/year in Mississippi to ~$44K/year in Massachusetts.</div>
                <div className={styles.keyStatSource}>Sources: SmartAsset Feb 2025; MIT Living Wage Calculator</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">29%</div>
                <div className={styles.keyStatLabel}>Biggest Expense: Housing</div>
                <div className={styles.keyStatDesc}>Food accounts for 18%, childcare/education 16%, transportation 15%. Housing is the single largest cost.</div>
                <div className={styles.keyStatSource}>Source: USDA Expenditures on Children by Families, 2015</div>
              </div>
            </div>
          </section>

          <section id="by-state">
            <div className={styles.sectionLabel}>State-by-State Data</div>
            <h2>Annual Cost of Raising a Child by State (2025)</h2>
            <p>Annual cost reflects additional expenses for a working couple with one child under 5. Based on MIT Living Wage Calculator, updated February 2025 by SmartAsset.</p>
            <div className={styles.tableControls}>
              <button className={`${styles.tblBtn} ${sortMode === 'cost' ? styles.on : ''}`} onClick={() => setSortMode('cost')}>Highest Cost First</button>
              <button className={`${styles.tblBtn} ${sortMode === 'alpha' ? styles.on : ''}`} onClick={() => setSortMode('alpha')}>A–Z</button>
              <input className={styles.tblSearch} placeholder="Search state…" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>State</th>
                    <th>Annual Cost<br />(Child &lt;5)</th>
                    <th>Est. Total<br />(Birth–18)</th>
                    <th>Region</th>
                    <th>vs. U.S. Avg.</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((row, i) => {
                    const pct = Math.round((row.a / 44000) * 100);
                    const diff = row.a - natAvg;
                    const pctDiff = ((diff / natAvg) * 100).toFixed(0);
                    const vsStr = diff >= 0
                      ? <span style={{ color: 'var(--red)', fontWeight: 700 }}>+${Math.abs(diff).toLocaleString()} (+${Math.abs(pctDiff)}%)</span>
                      : <span style={{ color: 'var(--green)', fontWeight: 700 }}>−${Math.abs(diff).toLocaleString()} ({Math.abs(pctDiff)}%)</span>;
                    
                    const rkClass = i < 3 ? styles.rankHi : i >= filteredData.length - 3 ? styles.rankLo : styles.rankMid;
                    const bColor = pct > 80 ? 'var(--red)' : pct > 60 ? 'var(--gold)' : 'var(--blue)';

                    return (
                      <tr key={row.s}>
                        <td><span className={`${styles.rankB} ${rkClass}`}>{i + 1}</span></td>
                        <td><strong style={{ color: 'var(--navy)', fontSize: '15px' }}>{row.s}</strong></td>
                        <td>
                          <div className={styles.barWrap}>
                            <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy)' }}>${row.a.toLocaleString()}/yr</span>
                            <div className={styles.barBg}>
                              <div className={styles.barFill} style={{ width: `${pct}%`, background: bColor }}></div>
                            </div>
                          </div>
                        </td>
                        <td><span style={{ fontWeight: 600 }}>~${(row.a * 18 / 1000).toFixed(0)}K est.</span></td>
                        <td>{row.r}</td>
                        <td>{vsStr}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '10px' }}>Sources: SmartAsset "Cost to Raise a Child by State 2025" (Feb 2025), using MIT Living Wage Calculator data.</p>

            <div className={styles.chartBox}>
              <h3>Annual Child-Rearing Cost — Top 10 Most & Least Expensive States (2025)</h3>
              <div style={{ height: '260px', position: 'relative' }}>
                <canvas ref={chartRef}></canvas>
              </div>
              <p className={styles.chartSource}>Source: SmartAsset 2025; MIT Living Wage Calculator. U.S. national average: ~$27,743/year.</p>
            </div>
          </section>

          <section id="breakdown">
            <div className={styles.sectionLabel}>Expense Categories</div>
            <h2>Where the Money Goes</h2>
            <div className={styles.expenseGrid}>
              <div className={styles.expenseBars}>
                <div className={styles.expenseRow}>
                  <div className={styles.expenseRowHeader}><span className={styles.expenseRowLabel}>🏠 Housing</span><span className={styles.expenseRowPct}>29%</span></div>
                  <div className={styles.expenseBarBg}><div className={styles.expenseBarFill} style={{ width: '29%', background: 'var(--blue)' }}></div></div>
                </div>
                <div className={styles.expenseRow}>
                  <div className={styles.expenseRowHeader}><span className={styles.expenseRowLabel}>🍎 Food</span><span className={styles.expenseRowPct}>18%</span></div>
                  <div className={styles.expenseBarBg}><div className={styles.expenseBarFill} style={{ width: '18%', background: 'var(--green)' }}></div></div>
                </div>
                <div className={styles.expenseRow}>
                  <div className={styles.expenseRowHeader}><span className={styles.expenseRowLabel}>🎓 Childcare & Education</span><span className={styles.expenseRowPct}>16%</span></div>
                  <div className={styles.expenseBarBg}><div className={styles.expenseBarFill} style={{ width: '16%', background: 'var(--gold)' }}></div></div>
                </div>
                <div className={styles.expenseRow}>
                  <div className={styles.expenseRowHeader}><span className={styles.expenseRowLabel}>🚗 Transportation</span><span className={styles.expenseRowPct}>15%</span></div>
                  <div className={styles.expenseBarBg}><div className={styles.expenseBarFill} style={{ width: '15%', background: '#7C3AED' }}></div></div>
                </div>
                <div className={styles.expenseRow}>
                  <div className={styles.expenseRowHeader}><span className={styles.expenseRowLabel}>🏥 Healthcare</span><span className={styles.expenseRowPct}>9%</span></div>
                  <div className={styles.expenseBarBg}><div className={styles.expenseBarFill} style={{ width: '9%', background: 'var(--red)' }}></div></div>
                </div>
                <div className={styles.expenseRow}>
                  <div className={styles.expenseRowHeader}><span className={styles.expenseRowLabel}>👕 Clothing</span><span className={styles.expenseRowPct}>6%</span></div>
                  <div className={styles.expenseBarBg}><div className={styles.expenseBarFill} style={{ width: '6%', background: '#0EA5E9' }}></div></div>
                </div>
              </div>
              <div>
                <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.7' }}>Housing costs dominate because families typically need more space when children arrive. This cost is highest in coastal metros and lowest in the Midwest and South.</p>
              </div>
            </div>
          </section>

          <section id="faq" aria-label="Frequently Asked Questions">
            <div className={styles.sectionLabel}>FAQ</div>
            <h2>Frequently Asked Questions</h2>
            <div className={`${styles.faqItem} ${openFaqs[0] ? styles.open : ''}`}>
              <button className={styles.faqQ} onClick={() => toggleFaq(0)}>How much does it cost to raise a child in 2025? <span className={styles.faqIcon}>+</span></button>
              <div className={styles.faqA}>A middle-income family can expect to spend approximately $320,000–$331,000 to raise a child from birth through age 17, not including college.</div>
            </div>
            <div className={`${styles.faqItem} ${openFaqs[1] ? styles.open : ''}`}>
              <button className={styles.faqQ} onClick={() => toggleFaq(1)}>What is the biggest expense when raising a child? <span className={styles.faqIcon}>+</span></button>
              <div className={styles.faqA}>According to USDA data, housing is the largest single expense category at approximately 29% of total child-rearing costs.</div>
            </div>
          </section>

          <div className={styles.sourcesBox}>
            <h4>Data Sources & Methodology</h4>
            <ul>
              <li>USDA "Expenditures on Children by Families, 2015"</li>
              <li>MIT Living Wage Calculator (2025)</li>
              <li>SmartAsset "Cost to Raise a Child by State 2025"</li>
              <li>Northwestern Mutual (April 2025)</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles.sidebarCard}>
            <h4>On This Page</h4>
            <ul className={styles.tocList}>
              <li><a href="#overview">National Overview</a></li>
              <li><a href="#by-state">Cost by State</a></li>
              <li><a href="#breakdown">Expense Categories</a></li>
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
              <li><a onClick={() => router.push('/childcare-costs')}>Childcare Costs by Age & State</a></li>
              <li><a onClick={() => router.push('/how-much-to-retire')}>How Much Do I Need to Retire?</a></li>
              <li><a onClick={() => router.push('/healthcare-costs-in-retirement')}>Healthcare Costs in Retirement</a></li>
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

export default CostOfRaisiingChildByState;
