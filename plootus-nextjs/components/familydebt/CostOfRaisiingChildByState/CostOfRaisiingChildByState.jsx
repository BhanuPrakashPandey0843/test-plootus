import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
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
    let result = stateData.filter(r => r.s.toLowerCase().includes(searchTerm.toLowerCase()));
    if (sortMode === 'cost') {
      result.sort((a, b) => b.a - a.a);
    } else {
      result.sort((a, b) => a.s.localeCompare(b.s));
    }
    setFilteredData(result);
  }, [searchTerm, sortMode]);

  useEffect(() => {
    if (chartRef.current) {
      const top5 = [...stateData].sort((a, b) => b.a - a.a).slice(0, 5);
      const bot5 = [...stateData].sort((a, b) => a.a - b.a).slice(0, 5).reverse();
      const chartData = [...top5, ...bot5];
      const ctx = chartRef.current.getContext('2d');

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
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
        <title>Cost of Raising a Child by State (2025) — Birth to 18 | Plootus</title>
        <meta name="description" content="From diapers to diplomas, the cost of raising a child varies by more than $400,000 depending on where you live. We break down every major expense using USDA, MIT Living Wage, and SmartAsset 2025 data." />
        <link rel="canonical" href="https://www.plootus.com/cost-of-raising-child-by-state" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Cost of Raising a Child by State (2025) — Birth to 18",
            "description": "Raising a child costs $320K-$590K depending on state. Comprehensive 50-state breakdown using USDA, MIT Living Wage, and SmartAsset 2025 data.",
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
            "datePublished": "2025-02-01",
            "dateModified": "2025-02-01"
          })}
        </script>
      </Head>

      <HubNav />

      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>📊 2025 Data Guide</div>
          <h1>Cost of Raising a Child by State: Birth to 18</h1>
          <p className={styles.heroSub}>From diapers to diplomas, the cost of raising a child varies by more than $400,000 depending on where you live. We break down every major expense using <abbr title="U.S. Department of Agriculture">USDA</abbr>, MIT Living Wage, and SmartAsset 2025 data — so you can plan ahead.</p>
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
                <div className={styles.keyStatDesc}>Middle-income family, inflation-adjusted from USDA 2015 baseline. Northwestern Mutual calculated $320,661 using <abbr title="Bureau of Labor Statistics">BLS</abbr> CPI.</div>
                <div className={styles.keyStatSource}>Sources: Northwestern Mutual (Apr 2025, BLS CPI); Stacker/USNews (Jun 2025)</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">$414K+</div>
                <div className={styles.keyStatLabel}>High-End Estimate (2025)</div>
                <div className={styles.keyStatDesc}>Higher-income family projections; some estimates reach $514K depending on methodology and expense categories included.</div>
                <div className={styles.keyStatSource}>Source: SoFi (2024 data); USNews citing government data</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">$16K–$44K/yr</div>
                <div className={styles.keyStatLabel}>Annual Cost Range by State</div>
                <div className={styles.keyStatDesc}>~$16K/year in Mississippi to ~$44K/year in Massachusetts. The gap compounds dramatically over 18 years.</div>
                <div className={styles.keyStatSource}>Sources: SmartAsset Feb 2025; MIT Living Wage Calculator</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">29%</div>
                <div className={styles.keyStatLabel}>Biggest Expense: Housing</div>
                <div className={styles.keyStatDesc}>Food accounts for 18%, childcare/education 16%, transportation 15%. Housing is the single largest cost at every income level.</div>
                <div className={styles.keyStatSource}>Source: USDA Expenditures on Children by Families, 2015</div>
              </div>
            </div>
          </section>

          <section id="by-state">
            <div className={styles.sectionLabel}>State-by-State Data</div>
            <h2>Annual Cost of Raising a Child by State (2025)</h2>
            <p>Annual cost reflects additional expenses for a working couple with one child under 5: housing, food, childcare, healthcare, transportation, and other necessities. Based on MIT Living Wage Calculator, updated February 2025 by SmartAsset.</p>
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
            <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '10px' }}>Sources: SmartAsset "Cost to Raise a Child by State 2025" (Feb 2025), using MIT Living Wage Calculator data. Annual cost = additional income needed by 2 working adults to support 1 child under 5 vs. childless household. Total cost estimate extrapolated over 18 years. Figures are rounded approximations for educational planning purposes.</p>

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
            <p>The USDA's most recent analysis (2015, updated for inflation) remains the authoritative breakdown of child-rearing expenses by category for middle-income families:</p>
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
                <div className={styles.expenseRow}>
                  <div className={styles.expenseRowHeader}><span className={styles.expenseRowLabel}>🎮 Miscellaneous</span><span className={styles.expenseRowPct}>7%</span></div>
                  <div className={styles.expenseBarBg}><div className={styles.expenseBarFill} style={{ width: '7%', background: 'var(--text-light)' }}></div></div>
                </div>
              </div>
              <div>
                <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.7' }}>Housing costs dominate because families typically need more space — a larger home or apartment — when children arrive. This cost is highest in coastal metros and lowest in the Midwest and South.</p>
                <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.7' }}>Childcare and education expenses are highest in the early years (ages 0–5) and drop significantly once children enter public school. Food and transportation costs peak during the teen years.</p>
                <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '12px', fontStyle: 'italic' }}>Source: USDA "Expenditures on Children by Families, 2015" — most recent federal dataset. Percentages represent share of total child-rearing costs for a middle-income, two-child married couple. USAfacts.org (2024).</p>
              </div>
            </div>

            <h3>Annual Costs by Child Age (National Average)</h3>
            <table className={styles.ageTable}>
              <thead>
                <tr><th>Age Range</th><th>Avg. Annual Cost</th><th>Notable Changes</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Birth–2 yrs</strong></td><td>~$16,700</td><td>High childcare costs; relatively low food spending</td></tr>
                <tr><td><strong>3–5 yrs (preschool)</strong></td><td style={{ color: 'var(--red)', fontWeight: 700 }}>~$18,100</td><td>Peak childcare expense — typically the highest-cost years</td></tr>
                <tr><td><strong>6–8 yrs (early school)</strong></td><td>~$17,200</td><td>Childcare drops significantly; food spending rises</td></tr>
                <tr><td><strong>9–11 yrs</strong></td><td>~$17,400</td><td>Activities, sports, and extracurriculars increase</td></tr>
                <tr><td><strong>12–14 yrs</strong></td><td>~$18,000</td><td>Clothing and transportation costs rise sharply</td></tr>
                <tr><td><strong>15–17 yrs (teen)</strong></td><td style={{ color: 'var(--gold)', fontWeight: 700 }}>~$18,900</td><td>Peak food, transportation, and car insurance costs</td></tr>
              </tbody>
            </table>
            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>Based on USDA 2015 data patterns adjusted for 2025 inflation using BLS CPI. Source: USDA.gov; CreditKarma (2025).</p>
          </section>

          <section id="income-level">
            <div className={styles.sectionLabel}>Income Level Impact</div>
            <h2>How Much You Spend Depends on What You Earn</h2>
            <p>Higher-income families spend significantly more — especially on childcare, education, and discretionary items. Lower-income families spend proportionally <em>more</em> of their income, even though the dollar amount is less.</p>
            <table className={styles.incomeTable}>
              <thead>
                <tr>
                  <th>Income Group</th>
                  <th>2025 Inflation-Adjusted<br />Annual</th>
                  <th>Est. Total (Birth–<br />18)</th>
                  <th>% of Family<br />Income</th>
                  <th>Key Drivers</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Lower Income</strong><br /><small style={{ color: 'var(--text-light)' }}>&lt;$76K in 2015 $</small></td><td>~$16,400–$17,500</td><td style={{ fontWeight: 800, fontSize: '15px' }}>~$241K–$315K</td><td style={{ color: 'var(--red)', fontWeight: 700 }}>Higher %</td><td>Housing, food dominate</td></tr>
                <tr><td><strong>Middle Income</strong><br /><small style={{ color: 'var(--text-light)' }}>$76K–$138K in 2015 $</small></td><td>~$17,700–$22,000</td><td style={{ fontWeight: 800, color: 'var(--blue)', fontSize: '15px' }}>~$320K–$331K</td><td>~16%</td><td>Childcare, housing balance</td></tr>
                <tr><td><strong>Higher Income</strong><br /><small style={{ color: 'var(--text-light)' }}>&gt;$138K in 2015 $</small></td><td>~$34,000–$41,000</td><td style={{ fontWeight: 800, color: 'var(--red)', fontSize: '15px' }}>~$513K–$590K</td><td style={{ color: 'var(--green)', fontWeight: 700 }}>Lower %</td><td>Education, misc. spending peaks</td></tr>
              </tbody>
            </table>
            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>Sources: USDA "Expenditures on Children by Families, 2015" (USAfacts.org 2024); inflation adjustment using BLS CPI-U (Northwestern Mutual Apr 2025); USNews lower/higher income total estimates (Aug 2025).</p>
          </section>

          <section id="saving-tips">
            <div className={styles.sectionLabel}>Planning Strategies</div>
            <h2>How to Plan — and Save — for the Cost of Raising a Child</h2>
            <ul className={styles.strategyList}>
              <li className={styles.strategyItem}>
                <div className={styles.strategyIcon}>💰</div>
                <div className={styles.strategyContent}>
                  <h4>Start a 529 College Savings Plan Early</h4>
                  <p>A 529 plan grows tax-free for qualified education expenses. Starting at birth vs. age 10 can mean 50%+ more in the account by college entry. Many states offer additional state tax deductions for contributions.</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyIcon}>🏥</div>
                <div className={styles.strategyContent}>
                  <h4>Use an <abbr title="Health Savings Account">HSA</abbr> for Healthcare Costs</h4>
                  <p>A Health Savings Account (HSA) paired with an <abbr title="High-Deductible Health Plan">HDHP</abbr> lets you save pre-tax dollars for medical expenses — including pediatric care. In 2025, the HSA contribution limit is $4,300 (individual) / $8,550 (family).</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyIcon}>👶</div>
                <div className={styles.strategyContent}>
                  <h4>Max Out Your Dependent Care <abbr title="Flexible Spending Account">FSA</abbr></h4>
                  <p>The Dependent Care FSA allows you to set aside up to $5,000 pre-tax per year for childcare expenses. At a 22% federal tax rate, that's $1,100 in annual savings — use it before the child care tax credit on the same dollars.</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyIcon}>📋</div>
                <div className={styles.strategyContent}>
                  <h4>Claim All Child-Related Tax Credits</h4>
                  <p>The Child Tax Credit ($2,000/child through 2025), Child & Dependent Care Credit (up to $1,050 for one child), and Earned Income Tax Credit (if eligible) can together offset $3,000–$7,000+ per year for qualifying families.</p>
                </div>
              </li>
            </ul>
          </section>

          <section id="faq" aria-label="Frequently Asked Questions">
            <div className={styles.sectionLabel}>FAQ</div>
            <h2>Frequently Asked Questions</h2>
            {[
              {
                q: "How much does it cost to raise a child in 2025?",
                a: "Based on inflation-adjusted projections of USDA's most recent data (2015 baseline), a middle-income family can expect to spend approximately $320,000–$331,000 to raise a child from birth through age 17, not including college. Northwestern Mutual (April 2025) calculated $320,661 using the BLS CPI. Costs vary significantly by state: from ~$288,000 (Mississippi) to over $590,000 (Massachusetts) over 18 years."
              },
              {
                q: "Does the USDA still publish annual child cost data?",
                a: "No. The USDA's \"Expenditures on Children by Families\" report — often called \"The Cost of Raising a Child\" — was last published in 2017 using 2015 Consumer Expenditure Survey data. The USDA has not released an updated version since. Researchers such as SmartAsset and Northwestern Mutual have since updated those figures using BLS Consumer Price Index data to adjust for inflation. For state-level comparisons, the MIT Living Wage Calculator (updated annually) provides the most current geographic estimates."
              },
              {
                q: "What is the biggest expense when raising a child?",
                a: "According to USDA data, housing is the largest single expense category at approximately 29% of total child-rearing costs. This includes mortgage/rent increases due to needing more space, utilities, and furnishings. Food (18%) is second, followed by childcare and education (16%) — which is highest in the earliest years (birth–5) — and transportation (15%), which peaks in the teen years. Healthcare accounts for about 9% of costs."
              }
            ].map((faq, index) => (
              <div key={index} className={`${styles.faqItem} ${openFaqs[index] ? styles.open : ''}`}>
                <button className={styles.faqQ} onClick={() => toggleFaq(index)}>{faq.q} <span className={styles.faqIcon}>+</span></button>
                <div className={styles.faqA}>{faq.a}</div>
              </div>
            ))}
          </section>

          <div className={styles.sourcesBox}>
            <h4>Data Sources & Methodology</h4>
            <ul>
              <li>USDA "Expenditures on Children by Families, 2015" — published 2017</li>
              <li>MIT Living Wage Calculator (2025)</li>
              <li>SmartAsset "Cost to Raise a Child by State 2025"</li>
              <li>Northwestern Mutual (April 2025)</li>
              <li>U.S. News & World Report (Aug 2025)</li>
              <li>SoFi (2025)</li>
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
              <li><a href="#income-level">By Income Level</a></li>
              <li><a href="#saving-tips">Planning Strategies</a></li>
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
              <li><Link href="/childcare-costs">Childcare Costs by Age & State</Link></li>
              <li><Link href="/how-much-to-retire">How Much Do I Need to Retire?</Link></li>
              <li><Link href="/best-states-to-retire">Best States to Retire 2026</Link></li>
              <li><Link href="/healthcare-costs-in-retirement">Healthcare Costs in Retirement</Link></li>
              <li><Link href="/tax-friendly-states">Tax-Friendly States Guide</Link></li>
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
