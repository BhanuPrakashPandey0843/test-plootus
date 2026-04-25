import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Chart from 'chart.js/auto';
import styles from './ChildCareCost.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}>
      <button className={styles.faqQ} onClick={() => setIsOpen(!isOpen)}>
        {question} <span className={styles.faqIcon}>+</span>
      </button>
      <div className={styles.faqA}>{answer}</div>
    </div>
  );
};

const ChildCareCost = () => {
  const router = useRouter();
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(chartRef.current, {
        type: 'bar',
        data: {
          labels: ['Infant (0–12 mo.)', 'Toddler (1–2 yrs)', 'Preschool (3–5 yrs)', 'School-Age (5–12 yrs)'],
          datasets: [
            {
              label: 'Center-Based',
              data: [13935, 12960, 11040, 9240],
              backgroundColor: ['#E03131','#F59F00','#3B5BDB','#2CB67D'],
              borderRadius: 6,
            },
            {
              label: 'Home-Based',
              data: [11992, 10800, 9600, 7800],
              backgroundColor: ['rgba(224,49,49,.25)','rgba(245,159,0,.25)','rgba(59,91,219,.25)','rgba(44,182,125,.25)'],
              borderColor: ['#E03131','#F59F00','#3B5BDB','#2CB67D'],
              borderWidth: 1,
              borderRadius: 6,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { font: { family: 'Plus Jakarta Sans' }, boxWidth: 12 } },
            tooltip: { callbacks: { label: ctx => ctx.dataset.label + ': $' + ctx.parsed.y.toLocaleString() + '/yr' } }
          },
          scales: {
            y: { ticks: { callback: v => '$' + (v/1000).toFixed(0) + 'K', font: { family: 'Plus Jakarta Sans', size: 11 } }, grid: { color: '#E2E8F4' } },
            x: { ticks: { font: { family: 'Plus Jakarta Sans', size: 12 } }, grid: { display: false } }
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
        <title>Childcare Costs in the U.S. by Age & Care Type (2024) | Plootus</title>
        <meta name="description" content="How much does childcare actually cost? Real pricing data by child age, care setting, and state — so you can budget smarter and plan ahead." />
        <link rel="canonical" href="https://www.plootus.com/childcare-costs" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Plootus Research Team" />
        <meta name="date" content="2024-01-01" />
        <meta name="keywords" content="childcare costs 2024, average cost of childcare, infant daycare cost, nanny cost per year, childcare cost by state, childcare tax credit 2024, childcare affordability" />
        
        <meta property="og:title" content="Childcare Costs in the U.S. by Age & Care Type (2024) | Plootus" />
        <meta property="og:description" content="National avg childcare: $13,128/year. Infant center care: $1,230/mo. Nanny: $43,004/year. +29% since 2020. 38+ states: infant care costs more than public college. Full data by age, care type, and state. DOL, Child Care Aware, EPI 2024-25 data." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.plootus.com/childcare-costs" />
        <meta property="og:site_name" content="Plootus" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:publisher" content="https://www.plootus.com" />
        <meta property="article:published_time" content="2024-01-01T00:00:00+00:00" />
        <meta property="article:modified_time" content="2025-03-01T00:00:00+00:00" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@plootus" />
        <meta name="twitter:title" content="Childcare Costs 2024 — By Age, Care Type & State" />
        <meta name="twitter:description" content="Avg childcare: $13,128/yr. Infant center: $1,230/mo. Nanny: $43K/yr. DC most expensive: $24,243/yr. +29% since 2020. 38 states: infant care > public college tuition. Full breakdown by age and state." />
        
        <script type="application/ld+json">
          {`[
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Childcare Costs in the U.S.: By Age, Care Type & State (2024)",
              "description": "Comprehensive childcare cost data for 2024, covering national averages by age group and care type (center-based, family home, nanny, relative care), state-by-state annual costs, and affordability benchmarks. National average: $13,128/year per child. Infant center care: $1,230/month. Nanny cost: $43,004/year. Costs have increased 29% since 2020. In 38 states plus D.C., infant center care exceeds the cost of in-state public college tuition. Sources: DOL National Database of Childcare Prices, Child Care Aware of America 2024, Economic Policy Institute 2025.",
              "datePublished": "2024-01-01",
              "dateModified": "2025-03-01",
              "author": {"@type":"Organization","name":"Plootus Research Team","url":"https://www.plootus.com"},
              "publisher": {
                "@type": "Organization","name":"Plootus","url":"https://www.plootus.com",
                "logo": {"@type":"ImageObject","url":"https://www.plootus.com/logo.png"}
              },
              "mainEntityOfPage": {"@type":"WebPage","@id":"https://www.plootus.com/childcare-costs"}
            }
          ]`}
        </script>
      </Head>

      <HubNav />

      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>📊 Data-Driven Guide · 2024–2025 Data</div>
          <h1>Childcare Costs in the U.S.: By Age, Care Type & State (2024)</h1>
          <p className={styles.heroSub}>How much does childcare actually cost? We break down real pricing data by child age, care setting, and state — so you can budget smarter and plan ahead.</p>
          <div className={styles.heroMeta}>
            <span>Reviewed by Plootus Research Team</span>
            <span>Updated: 2024–2025 Data</span>
            <span>Sources: <abbr title="U.S. Department of Labor">DOL</abbr> <abbr title="National Database of Childcare Prices">NDCP</abbr>, Child Care Aware, <abbr title="Economic Policy Institute">EPI</abbr>, Census Bureau</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">$13,128</span><span className={styles.statLabel}>National Avg. Annual Cost (1 Child)</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">$1,230/mo</span><span className={styles.statLabel}>Avg. Infant Center Care</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">+29%</span><span className={styles.statLabel}>Price Increase 2020–2024</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">35%</span><span className={styles.statLabel}>of Median Single-Parent Income</span></div>
        </div>
      </div>

      <div className={styles.pageBody} itemScope itemType="https://schema.org/Article">
        <main className={styles.mainContent} role="main" aria-label="Childcare Costs in the U.S. 2024 — By Age, Care Type and State">
          <section id="national-picture">
            <div className={styles.sectionLabel}>By the Numbers</div>
            <h2>Childcare Cost: The National Picture</h2>
            <p>Before diving into the details, here are the headline numbers every parent and financial planner should know:</p>
            <div className={styles.keyStatsGrid}>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="statistic">$13,128</div>
                <div className={styles.keyStatLabel}>National Avg. Annual Cost (1 Child)</div>
                <div className={styles.keyStatDesc}>Center-based full-time care, all ages blended. Masks huge variation by age and care type.</div>
                <div className={styles.keyStatSource}>Source: Child Care Aware of America, 2024</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="statistic">$24,243</div>
                <div className={styles.keyStatLabel}>Most Expensive: Washington D.C.</div>
                <div className={styles.keyStatDesc}>Annual infant center care cost. More than 4× the cost of in-state public college tuition.</div>
                <div className={styles.keyStatSource}>Source: EPI / World Population Review, 2025</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="statistic">38 + DC</div>
                <div className={styles.keyStatLabel}>States Where Infant Care Exceeds College</div>
                <div className={styles.keyStatDesc}>Annual infant care cost exceeds in-state public college tuition in 38 states and D.C. — up from 33 states pre-pandemic.</div>
                <div className={styles.keyStatSource}>Source: Economic Policy Institute, March 2025</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="statistic">≤7%</div>
                <div className={styles.keyStatLabel}><abbr title="U.S. Department of Health and Human Services">HHS</abbr> "Affordable" Threshold</div>
                <div className={styles.keyStatDesc}>The federal affordability benchmark for childcare as a share of family income. No state meets this standard for infant center care.</div>
                <div className={styles.keyStatSource}>Source: U.S. Dept. of Health & Human Services</div>
              </div>
            </div>
          </section>

          <section id="age-costs">
            <div className={styles.sectionLabel}>Age-Based Pricing</div>
            <h2>How Childcare Costs Change as Your Child Grows</h2>
            <p>Costs decline significantly as children age — largely because caregiver-to-child ratios improve. Infants may require 1:3 ratios; preschoolers allow 1:8–10. Below are national median costs by age group and care setting:</p>
            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable} summary="Data comparison table">
                <thead>
                  <tr>
                    <th scope="col">Age Group</th>
                    <th scope="col">Center-Based<br/>(Annual)</th>
                    <th scope="col">Center-Based<br/>(Monthly)</th>
                    <th scope="col">Home-Based<br/>(Annual)</th>
                    <th scope="col">Home-Based<br/>(Monthly)</th>
                    <th scope="col">% of Median<br/>Family Income</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Infant (0–12 mo.)</strong></td><td style={{color: 'var(--red)', fontWeight: 700}}>$13,935</td><td>$1,230</td><td>$11,992</td><td>$999</td><td style={{color: 'var(--red)', fontWeight: 700}}>~16.0%</td></tr>
                  <tr><td><strong>Toddler (1–2 yrs)</strong></td><td style={{color: 'var(--gold)', fontWeight: 700}}>$12,960</td><td>$1,080</td><td>$10,800</td><td>$900</td><td style={{color: 'var(--gold)', fontWeight: 700}}>~13–15%</td></tr>
                  <tr><td><strong>Preschool (3–5 yrs)</strong></td><td>$11,040</td><td>$920</td><td>$9,600</td><td>$800</td><td>~10–12%</td></tr>
                  <tr><td><strong>School-Age (5–12 yrs)</strong></td><td style={{color: 'var(--green)', fontWeight: 700}}>$9,240</td><td>$770</td><td>$7,800</td><td>$650</td><td style={{color: 'var(--green)', fontWeight: 700}}>~8–10%</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{fontSize: '12px', color: 'var(--text-light)'}}>Sources: Center-based infant care: Child Care Aware of America (2024); HHS/ACF Market Rate Surveys (2025). Home-based estimates: DOL National Database of Childcare Prices (NDCP), 2022 data. Monthly figures rounded. Income share: DOL Women's Bureau NDCP 2022. All figures represent national medians for full-time care.</p>

            <div className={styles.chartBox}>
              <h3>Annual Center-Based Childcare Cost by Age Group</h3>
              <div style={{ height: '220px' }}>
                <canvas ref={chartRef}></canvas>
              </div>
              <p className={styles.chartSource}>Source: Child Care Aware of America 2024; HHS/ACF Market Rate Surveys 2025; DOL NDCP 2022.</p>
            </div>
          </section>

          <section id="care-types">
            <div className={styles.sectionLabel}>Care Type Comparison</div>
            <h2>Which Type of Childcare Fits Your Budget?</h2>
            <p>The type of care you choose has a massive impact on your annual costs. Here's how the four most common options compare for infant care at the national level:</p>
            <div className={styles.careGrid}>
              <div className={styles.careCard}>
                <div className={styles.careIcon}>🏫</div>
                <div className={styles.careType}>Child Care Center</div>
                <div className={styles.careMonthly}>$1,230/mo</div>
                <div className={styles.careAnnual}>~$14,760/year for infant (national avg.)</div>
                <div className={styles.careRow}><span className={styles.careRowLabel}>Weekly (infant)</span><span className={styles.careRowVal}>$343</span></div>
                <div className={styles.careRow}><span className={styles.careRowLabel}>Weekly (4-year-old)</span><span className={styles.careRowVal}>~$262</span></div>
                <div className={styles.careRow}><span className={styles.careRowLabel}>Licensed & regulated</span><span className={styles.careRowVal} style={{color: 'var(--green)'}}>✅ Yes</span></div>
                <div className={styles.careRow}><span className={styles.careRowLabel}>Sibling discount avg.</span><span className={styles.careRowVal}>~10%</span></div>
              </div>
              <div className={styles.careCard}>
                <div className={styles.careIcon}>🏡</div>
                <div className={styles.careType}>Family Child Care Home</div>
                <div className={styles.careMonthly}>$999/mo</div>
                <div className={styles.careAnnual}>~$11,992/year for infant (national avg.)</div>
                <div className={styles.careRow}><span className={styles.careRowLabel}>Weekly (infant)</span><span className={styles.careRowVal}>~$220</span></div>
                <div className={styles.careRow}><span className={styles.careRowLabel}>Home environment</span><span className={styles.careRowVal} style={{color: 'var(--green)'}}>✅ Yes</span></div>
                <div className={styles.careRow}><span className={styles.careRowLabel}>Licensed</span><span className={styles.careRowVal}>Varies by state</span></div>
                <div className={styles.careRow}><span className={styles.careRowLabel}>Mixed-age groups</span><span className={styles.careRowVal}>Common</span></div>
              </div>
              <div className={`${styles.careCard} ${styles.featured}`}>
                <div className={styles.careIcon}>👩‍👧</div>
                <div className={styles.careType}>Nanny (In-Home)</div>
                <div className={styles.careMonthly} style={{color: 'var(--red)'}}>$827/wk</div>
                <div className={styles.careAnnual}>~$43,004/year for infant (national avg.)</div>
                <div className={styles.careRow}><span className={styles.careRowLabel}>1-on-1 attention</span><span className={styles.careRowVal} style={{color: 'var(--green)'}}>✅ Yes</span></div>
                <div className={styles.careRow}><span className={styles.careRowLabel}>Flexible hours</span><span className={styles.careRowVal} style={{color: 'var(--green)'}}>✅ Yes</span></div>
                <div className={styles.careRow}><span className={styles.careRowLabel}>Cost increase (2024)</span><span className={styles.careRowVal} style={{color: 'var(--red)'}}>+8%</span></div>
                <div className={styles.careRow}><span className={styles.careRowLabel}>Best for 2+ children</span><span className={styles.careRowVal}>Often cost-effective</span></div>
              </div>
              <div className={styles.careCard}>
                <div className={styles.careIcon}>👴</div>
                <div className={styles.careType}>Relative / Informal Care</div>
                <div className={styles.careMonthly} style={{color: 'var(--green)'}}>$0–$500/mo</div>
                <div className={styles.careAnnual}>Often free or low-cost; availability varies</div>
                <div className={styles.careRow}><span className={styles.careRowLabel}>Licensed</span><span className={styles.careRowVal} style={{color: 'var(--text-light)'}}>❌ No</span></div>
                <div className={styles.careRow}><span className={styles.careRowLabel}>Subsidy eligible</span><span className={styles.careRowVal}>Sometimes</span></div>
                <div className={styles.careRow}><span className={styles.careRowLabel}>Reliability</span><span className={styles.careRowVal}>Variable</span></div>
                <div className={styles.careRow}><span className={styles.careRowLabel}>Common arrangement</span><span className={styles.careRowVal}>Grandparents, siblings</span></div>
              </div>
            </div>
            <p style={{fontSize: '12px', color: 'var(--text-light)'}}>Sources: Nanny weekly cost ($827/week) and cost increase (+8%): FinanceBuzz citing Care.com 2024 data. Center-based weekly infant cost ($343/week): Child Care Aware of America (2024). Family home-based annual cost ($11,992): DOL NDCP 2022. All figures represent national averages and vary significantly by location.</p>
          </section>

          <section id="by-state">
            <div className={styles.sectionLabel}>State-by-State Data</div>
            <h2>Annual Childcare Cost by State (2024)</h2>
            <p>Costs vary dramatically across the country. Below are annual center-based infant care costs for key states, ranked from most to least expensive:</p>
            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable} summary="Data comparison table">
                <thead>
                  <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">State</th>
                    <th scope="col">Annual Cost<br/>(Infant, Center)</th>
                    <th scope="col">Monthly<br/>Equiv.</th>
                    <th scope="col">% of Married<br/>Couple Income</th>
                    <th scope="col">vs. National<br/>Avg.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td><strong>Washington D.C.</strong></td><td style={{color: 'var(--red)', fontWeight: 700}}>$24,243</td><td>$2,020</td><td>~19–26%</td><td>+85%</td></tr>
                  <tr><td>2</td><td><strong>Massachusetts</strong></td><td style={{color: 'var(--red)', fontWeight: 700}}>$20,913</td><td>$1,743</td><td>~18–22%</td><td>+59%</td></tr>
                  <tr><td>3</td><td><strong>California</strong></td><td style={{color: 'var(--red)', fontWeight: 700}}>$18,180</td><td>$1,515</td><td>~15%</td><td>+38%</td></tr>
                  <tr><td>4</td><td><strong>Minnesota</strong></td><td style={{color: 'var(--gold)', fontWeight: 700}}>$17,160</td><td>$1,430</td><td>~13–16%</td><td>+31%</td></tr>
                  <tr><td>5</td><td><strong>New York</strong></td><td style={{color: 'var(--gold)', fontWeight: 700}}>$16,380</td><td>$1,365</td><td>~13–15%</td><td>+25%</td></tr>
                  <tr><td>6</td><td><strong>Vermont</strong></td><td style={{color: 'var(--gold)', fontWeight: 700}}>$16,380</td><td>$1,365</td><td>~14–17%</td><td>+25%</td></tr>
                  <tr><td>7</td><td><strong>New Mexico</strong></td><td style={{color: 'var(--gold)', fontWeight: 700}}>$15,600</td><td>$1,300</td><td>~21%</td><td>+19%</td></tr>
                  <tr><td>—</td><td><strong>National Average</strong></td><td><strong>~$13,128</strong></td><td>$1,094</td><td>~10%</td><td>—</td></tr>
                  <tr><td>44</td><td><strong>Arkansas</strong></td><td style={{color: 'var(--green)', fontWeight: 700}}>$6,864</td><td>$572</td><td>~10–11%</td><td>−48%</td></tr>
                  <tr><td>45</td><td><strong>Louisiana</strong></td><td style={{color: 'var(--green)', fontWeight: 700}}>$6,552</td><td>$546</td><td>~10%</td><td>−50%</td></tr>
                  <tr><td>46</td><td><strong>South Dakota</strong></td><td style={{color: 'var(--green)', fontWeight: 700}}>$6,468</td><td>$539</td><td>~9.4%</td><td>−51%</td></tr>
                  <tr><td>47</td><td><strong>North Dakota</strong></td><td style={{color: 'var(--green)', fontWeight: 700}}>$6,396</td><td>$533</td><td>~9–11%</td><td>−51%</td></tr>
                  <tr><td>48</td><td><strong>Kansas</strong></td><td style={{color: 'var(--green)', fontWeight: 700}}>$6,132</td><td>$511</td><td>~10–12%</td><td>−53%</td></tr>
                  <tr><td>49</td><td><strong>New Jersey</strong></td><td style={{color: 'var(--green)', fontWeight: 700}}>$5,940</td><td>$495</td><td>~10%</td><td>−55%</td></tr>
                  <tr><td>50</td><td><strong>Mississippi</strong></td><td style={{color: 'var(--green)', fontWeight: 700}}>$5,436</td><td>$453</td><td>~9–10%</td><td>−59%</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{fontSize: '12px', color: 'var(--text-light)'}}>Sources: Annual cost figures from Economic Policy Institute (2024–2025 data in 2024 dollars), World Population Review (February 2025, citing EPI and DOL NDCP), and Child Care Aware of America 2024 Price of Care report. Income percentage from EPI and Child Care Aware affordability analysis.</p>
          </section>

          <section id="affordability">
            <div className={styles.sectionLabel}>Affordability Analysis</div>
            <h2>Where Childcare Hits Families Hardest</h2>
            <p>The federal government defines childcare as "affordable" when it costs no more than <strong>7% of family income</strong>. No state meets this standard for center-based infant care. Below are the states where the burden is greatest — and smallest:</p>
            <div className={styles.affordGrid}>
              <div className={styles.affordCol}>
                <h4 style={{color: 'var(--red)'}}>🔴 Least Affordable States</h4>
                <p style={{fontSize: '12px', color: 'var(--text-light)', marginBottom: '12px'}}>Infant center care as % of married-couple median income</p>
                <ul className={styles.affordList}>
                  <li><span className={styles.affordState}>1. Washington D.C.</span><span className={styles.affordPctRed}>~19–26%</span></li>
                  <li><span className={styles.affordState}>2. Massachusetts</span><span className={styles.affordPctRed}>~18–22%</span></li>
                  <li><span className={styles.affordState}>3. New Mexico</span><span className={styles.affordPctRed}>~21%</span></li>
                  <li><span className={styles.affordState}>4. California</span><span className={styles.affordPctRed}>~15%</span></li>
                  <li><span className={styles.affordState}>5. Vermont</span><span className={styles.affordPctRed}>~14–17%</span></li>
                  <li><span className={styles.affordState}>6. Minnesota</span><span className={styles.affordPctRed}>~13–16%</span></li>
                  <li><span className={styles.affordState}>7. New York</span><span className={styles.affordPctRed}>~13–15%</span></li>
                </ul>
              </div>
              <div className={styles.affordCol}>
                <h4 style={{color: 'var(--green)'}}>🟢 Most Affordable States</h4>
                <p style={{fontSize: '12px', color: 'var(--text-light)', marginBottom: '12px'}}>Infant center care as % of married-couple median income</p>
                <ul className={styles.affordList}>
                  <li><span className={styles.affordState}>1. South Dakota</span><span className={styles.affordPctGreen}>~9.4%</span></li>
                  <li><span className={styles.affordState}>2. Mississippi</span><span className={styles.affordPctGreen}>~9–10%</span></li>
                  <li><span className={styles.affordState}>3. North Dakota</span><span className={styles.affordPctGreen}>~9–11%</span></li>
                  <li><span className={styles.affordState}>4. Louisiana</span><span className={styles.affordPctGreen}>~10%</span></li>
                  <li><span className={styles.affordState}>5. New Jersey</span><span className={styles.affordPctGreen}>~10%</span></li>
                  <li><span className={styles.affordState}>6. Arkansas</span><span className={styles.affordPctGreen}>~10–11%</span></li>
                  <li><span className={styles.affordState}>7. Kansas</span><span className={styles.affordPctGreen}>~10–12%</span></li>
                </ul>
              </div>
            </div>
            <p style={{fontSize: '12px', color: 'var(--text-light)'}}>Sources: EPI (2025), DOL NDCP, Child Care Aware of America (2024)</p>
            <div className={`${styles.callout} ${styles.red}`}>
              <p><strong>Single Parents Face the Steepest Climb:</strong> The national average childcare cost for one child represents <strong>35% of single-parent median household income</strong>, compared to just 10% for married couples. In 45 states plus D.C., the average annual cost of care for two children in a center exceeded annual mortgage payments.<br/><small style={{opacity: .75}}>Source: Child Care Aware of America, 2024.</small></p>
            </div>
          </section>

          <section id="saving-tips">
            <div className={styles.sectionLabel}>Money-Saving Strategies</div>
            <h2>7 Ways to Reduce Your Childcare Bill</h2>
            <ul className={styles.strategyList}>
              <li className={styles.strategyItem}>
                <div className={styles.strategyNum}>01</div>
                <div className={styles.strategyContent}>
                  <h4>Use a Dependent Care FSA</h4>
                  <p>Contribute up to $5,000/year pre-tax through your employer. At a 25% federal rate, that saves $1,250 annually — often more valuable than the child care tax credit alone. Must be elected during open enrollment.</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyNum}>02</div>
                <div className={styles.strategyContent}>
                  <h4>Claim the Child & Dependent Care Tax Credit</h4>
                  <p>Claim 20–35% of up to $3,000 in expenses (one child) or $6,000 (two+). Maximum credit is $1,050 per child. Can be combined with FSA on expenses above the FSA limit — consult a tax professional to optimize both.</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyNum}>03</div>
                <div className={styles.strategyContent}>
                  <h4>Apply for Child Care Subsidies (CCDF)</h4>
                  <p>The Child Care and Development Fund provides subsidies to eligible lower- and moderate-income families through state-administered vouchers. Eligibility varies by state. Only 3 states' subsidy rates fully cover average infant care costs (Hawaii, Indiana, and South Dakota).</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyNum}>04</div>
                <div className={styles.strategyContent}>
                  <h4>Share Nanny Costs (Nanny Share)</h4>
                  <p>Splitting nanny costs with another family can cut per-family costs by 30–50% while still providing high staff-to-child ratios. Especially cost-effective for two families with similar-aged children in the same neighborhood.</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyNum}>05</div>
                <div className={styles.strategyContent}>
                  <h4>Ask About Sibling Discounts</h4>
                  <p>Many centers offer an average 10% discount for a second child. For families with two children in care, this can save $1,000–$2,000 per year at a typical center. Always ask — it's rarely advertised proactively.</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyNum}>06</div>
                <div className={styles.strategyContent}>
                  <h4>Consider Family Care Homes</h4>
                  <p>Home-based family childcare typically costs 10–20% less than center-based care per year, often with comparable quality. Look for providers licensed by your state for oversight and subsidy eligibility.</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyNum}>07</div>
                <div className={styles.strategyContent}>
                  <h4>Check Employer Benefits</h4>
                  <p>Many employers offer dependent care FSAs, backup childcare reimbursements, or partnerships with childcare providers. Check your HR benefits package — these perks are chronically underutilized by eligible employees.</p>
                </div>
              </li>
            </ul>
          </section>

          <section id="faq" aria-label="Frequently Asked Questions">
            <div className={styles.sectionLabel}>FAQ</div>
            <h2>Frequently Asked Questions</h2>
            <FAQItem 
              question="What is the average cost of childcare in the U.S. per year?" 
              answer="The national average cost of childcare for one child in 2024 was $13,128 per year, according to Child Care Aware of America. This is a blended average across care types. Center-based care averages about $14,760/year for infants specifically, while family home-based care averages around $11,992/year for infants. These averages mask enormous variation by state and county — costs range from $5,436/year in Mississippi to $24,243/year in Washington D.C."
            />
            <FAQItem 
              question="Why is childcare for infants so much more expensive?" 
              answer="The primary driver is caregiver-to-child ratios. Most state licensing rules require roughly 1 caregiver per 3 infants, but permit 1 caregiver per 8–10 preschoolers. Higher staffing ratios mean more labor cost per child, which translates directly into higher tuition rates. Infant care typically costs 15–30% more than toddler care at the same facility, according to HHS/ACF Market Rate Surveys."
            />
            <FAQItem 
              question="Is childcare a tax deduction?" 
              answer="Childcare is not a deduction but may qualify for the Child and Dependent Care Tax Credit (CDCTC). You can claim 20–35% of up to $3,000 in qualifying expenses for one child (maximum $1,050 credit) or $6,000 for two or more children (maximum $2,100 credit). A Dependent Care FSA allows you to set aside up to $5,000 pre-tax per year through your employer, which is often more valuable at higher income levels. Consult a tax professional for advice specific to your situation."
            />
            <FAQItem 
              question="How has childcare cost changed in recent years?" 
              answer="Childcare prices rose 29% from 2020 to 2024, outpacing overall inflation by 7 percentage points over the same period, per Child Care Aware of America. The BLS Consumer Price Index for day care and preschool rose approximately 22% between January 2020 and September 2024. The COVID-19 pandemic and its aftermath, combined with workforce shortages in the childcare sector, significantly accelerated price increases."
            />
            <FAQItem 
              question="Is childcare more expensive than college in most states?" 
              answer="Yes. The annual cost of infant care exceeds in-state public college tuition in 38 states and Washington D.C., according to EPI's March 2025 analysis — up from 33 states before the pandemic. In Washington D.C., infant care costs ($24,243) are more than four times the annual in-state college tuition. This comparison has become a widely-cited illustration of the severity of the childcare affordability crisis."
            />
            <FAQItem 
              question="What childcare subsidies are available?" 
              answer="The primary federal program is the Child Care and Development Fund (CCDF), which provides subsidies to eligible low- and moderate-income families through state-administered vouchers. Eligibility thresholds and benefit levels vary by state. As of 2024, subsidy rates fully covered the average cost of infant care in only three states: Hawaii, Indiana, and South Dakota. In half of all states, the gap between the subsidy rate and actual market cost exceeds $400/month. Visit your state's childcare agency website to check eligibility."
            />
          </section>

          <div className={styles.sourcesBox}>
            <h4>Sources & Methodology</h4>
            <ul>
              <li>U.S. Department of Labor — National Database of Childcare Prices (NDCP), 2022 (most recent county-level data available)</li>
              <li>Child Care Aware® of America — Price of Care report (2024), based on January 2025 survey</li>
              <li>Economic Policy Institute (EPI) — State-level childcare cost fact sheets, March 2025 (2023 data in 2024 dollars)</li>
              <li>U.S. Census Bureau, American Community Survey — Median household and family income by state</li>
              <li>HHS/ACF Child Care Market Rate Surveys — Care-type monthly averages and subsidy rate comparisons</li>
              <li>Bureau of Labor Statistics — CPI-U (Child Care & Preschool) for inflation-adjusted comparisons</li>
              <li>FinanceBuzz / Care.com — Nanny cost data and care type weekly averages for 2024</li>
              <li>World Population Review — State childcare cost rankings, February 2025 (citing EPI and DOL NDCP)</li>
            </ul>
          </div>

        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles.sidebarCard}>
            <h4>On This Page</h4>
            <ul className={styles.tocList}>
              <li><a href="#national-picture">National Picture</a></li>
              <li><a href="#age-costs">Cost by Age</a></li>
              <li><a href="#care-types">By Care Type</a></li>
              <li><a href="#by-state">By State</a></li>
              <li><a href="#affordability">Affordability Analysis</a></li>
              <li><a href="#saving-tips">7 Saving Strategies</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className={styles.alertCard}>
            <h4>⚠️ No State Is "Affordable"</h4>
            <p>The federal 7% affordability threshold for childcare is not met by any state for center-based infant care. The national average is ~10% of married-couple income and 35% for single parents.</p>
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
              <li><a onClick={() => router.push('/how-much-to-retire')} style={{cursor: 'pointer'}}>How Much Do I Need to Retire?</a></li>
              <li><a onClick={() => router.push('/how-to-plan-retirement')} style={{cursor: 'pointer'}}>Retirement Planning Guide</a></li>
              <li><a onClick={() => router.push('/healthcare-costs-in-retirement')} style={{cursor: 'pointer'}}>Healthcare Costs in Retirement</a></li>
              <li><a onClick={() => router.push('/social-security-benefits')} style={{cursor: 'pointer'}}>Social Security Benefits 2026</a></li>
              <li><a onClick={() => router.push('/retirement-statistics')} style={{cursor: 'pointer'}}>Retirement Statistics 2026</a></li>
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

export default ChildCareCost;
