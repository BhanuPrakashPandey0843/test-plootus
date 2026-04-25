import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Chart from 'chart.js/auto';
import styles from './LongTermCareCost.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const LongTermCareCost = () => {
  const router = useRouter();
  const [openFaqs, setOpenFaqs] = useState({});
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const toggleFaq = (index) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    // Number Animation Logic
    const animateStats = () => {
      const stats = document.querySelectorAll('[data-type="statistic"], [data-type="key-statistic"]');
      stats.forEach(el => {
        const val = el.innerText;
        if (val.includes('%') || val.includes('$') || isNaN(val.replace(/[%$,]/g, ''))) {
          // If it has symbols, we need to extract the number
          const numPart = val.replace(/[^0-9.]/g, '');
          if (!numPart) return;
          
          const target = parseFloat(numPart);
          const prefix = val.startsWith('$') ? '$' : '';
          const suffix = val.includes('%') ? '%' : (val.includes('/yr') ? '/yr' : (val.includes('/mo') ? '/mo' : (val.includes('/hr') ? '/hr' : '')));
          
          let startTime = null;
          const duration = 1500;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentVal = Math.floor(progress * target);
            el.innerText = `${prefix}${currentVal.toLocaleString()}${suffix}`;
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              el.innerText = val; // Ensure exact final value
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

    if (chartRef.current) {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
        const ctx = chartRef.current.getContext('2d');
        chartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: [['Adult Day', 'Health Care'], ['Home Care', '(Non-Medical)'], ['Assisted', 'Living'], ['Nursing Home', '(Semi-Private)'], ['Nursing Home', '(Private Room)']],
            datasets: [{
              label: 'Annual Median Cost (2024–25)',
              data: [26000, 80080, 74400, 111325, 127750],
              backgroundColor: [
                'rgba(44,182,125,0.8)',
                'rgba(245,159,0,0.7)',
                'rgba(245,159,0,0.85)',
                'rgba(224,49,49,0.7)',
                'rgba(224,49,49,0.9)'
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
                backgroundColor: 'rgba(13, 27, 62, 0.9)',
                titleFont: { family: 'Plus Jakarta Sans', size: 12 },
                bodyFont: { family: 'Plus Jakarta Sans', size: 12 },
                padding: 10,
                displayColors: false,
                callbacks: { label: c => '$' + c.parsed.y.toLocaleString() + '/year' } 
              }
            },
            scales: {
              y: { 
                beginAtZero: true,
                ticks: { 
                  callback: v => '$' + (v / 1000).toFixed(0) + 'K', 
                  font: { family: 'Plus Jakarta Sans', size: 11 },
                  color: '#6B7FA8'
                }, 
                grid: { color: '#E2E8F4', drawBorder: false } 
              },
              x: { 
                ticks: { 
                  font: { family: 'Plus Jakarta Sans', size: 11 },
                  color: '#6B7FA8'
                }, 
                grid: { display: false, drawBorder: false } 
              }
            }
          }
        });
    }

    animateStats();

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Long-Term Care Costs & Insurance Premiums by Age (2025) | Plootus</title>
        <meta name="description" content="7 in 10 Americans turning 65 will need long-term care. The national median cost of a nursing home private room is now $127,750/year. Here's everything you need to plan." />
        <link rel="canonical" href="https://www.plootus.com/long-term-care-costs" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Plootus Research Team" />
        <meta name="date" content="2025-01-01" />

        {/* Open Graph */}
        <meta property="og:title" content="Long-Term Care Costs & Insurance Premiums by Age (2025) | Plootus" />
        <meta property="og:description" content="70% of Americans turning 65 will need LTC. Nursing home private room: $127,750/yr. Assisted living: $6,200/mo. LTC insurance at 55: $950/yr male. Genworth/CareScout 2024-25." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.plootus.com/long-term-care-costs" />
        <meta property="og:site_name" content="Plootus" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@plootus" />
        <meta name="twitter:title" content="Long-Term Care Costs 2025: Nursing Home, Assisted Living, Home Care" />
        <meta name="twitter:description" content="Nursing home: $127,750/yr. Assisted living: $6,200/mo. LTC insurance age 55: $950/yr (male). Medicare does NOT cover custodial care. Plan now." />
      </Head>

      <HubNav />

      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>🧓 Genworth/CareScout 2024–25 Data</div>
          <h1>Long-Term Care Costs & Insurance Premiums by Age (2025)</h1>
          <p className={styles.heroSub}>7 in 10 Americans turning 65 will need long-term care. The national median cost of a nursing home private room has reached $127,750/year. Here's everything you need to plan — care costs, insurance premiums by age, and what Medicare covers (and doesn't).</p>
          <div className={styles.heroMeta}>
            <span>📚 Sources: Genworth/CareScout Cost of Care Survey (2024–25); <abbr title="American Association for Long-Term Care Insurance">AALTCI</abbr> 2024 Price Index; NCOA; HHS/ACL; IRS</span>
            <span>🗓️ 2024–25 Data</span>
          </div>
        </div>
      </div>

      {/* Stat Strip */}
      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">70%</span><span className={styles.statLabel}>of Americans 65+ Will Need <abbr title="Long-Term Care">LTC</abbr></span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">$127,750/yr</span><span className={styles.statLabel}>Nursing Home Private Room (2024)</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">$6,200/mo</span><span className={styles.statLabel}>Assisted Living (2025)</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">$35/hr</span><span className={styles.statLabel}>Home Care — Non-Medical (2025)</span></div>
        </div>
      </div>

      <div className={styles.pageBody} itemScope itemType="https://schema.org/Article">
        <main className={styles.mainContent} role="main" aria-label="Long-Term Care Costs and Insurance Premiums 2025">
          <section id="overview">
            <div className={styles.sectionLabel}>The Numbers</div>
            <h2>Long-Term Care: The Need & The Cost (2024–25)</h2>
            <p>Data from Genworth's annual Cost of Care Survey (partnership with CareScout), the most comprehensive LTC cost study in the U.S. The 2025 CareScout survey covered 15,000+ providers; the 2024 Genworth/CareScout survey contacted 140,000+ providers.</p>
            <div className={styles.keyStatsGrid}>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">70%</div>
                <div className={styles.keyStatLabel}>Will Need LTC at Some Point</div>
                <div className={styles.keyStatDesc}>Of Americans turning 65 will require long-term care services at some point during their lifetime.</div>
                <div className={styles.keyStatSource}>HHS/ACL; Genworth Cost of Care Survey; Inszone Insurance (2025)</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">$127,750/yr</div>
                <div className={styles.keyStatLabel}>Nursing Home Private Room (2024)</div>
                <div className={styles.keyStatDesc}>National median; +9% from 2023. Daily rate: ~$350. Up to $129,575 in CareScout's 2025 estimate.</div>
                <div className={styles.keyStatSource}>Genworth/CareScout Cost of Care Survey 2024 (released Mar 2025)</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">$6,200/mo</div>
                <div className={styles.keyStatLabel}>Assisted Living Facility (2025)</div>
                <div className={styles.keyStatDesc}>$74,400/year; +5% from 2024. Ranges from $40K (low-cost states) to $140K (Hawaii).</div>
                <div className={styles.keyStatSource}>CareScout Cost of Care Survey 2025</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">$26,000/yr</div>
                <div className={styles.keyStatLabel}>Adult Day Care (2024)</div>
                <div className={styles.keyStatDesc}>Lower-cost community option at 5 days/week, 8hrs/day model. Often Medicare/Medicaid eligible.</div>
                <div className={styles.keyStatSource}>Genworth Cost of Care Survey, 2024; Inszone Insurance 2025</div>
              </div>
            </div>

            <h3>Care Cost by Setting</h3>
            <div className={styles.ltcCareGrid}>
              <div className={styles.ltcCard}>
                <div className={styles.ltcIcon}>🏠</div>
                <div className={styles.ltcType}>Home Care — Non-Medical</div>
                <div className={styles.ltcCost}>$35/hr</div>
                <div className={styles.ltcDesc}>~$80,080/year at 44 hrs/week. +3% YoY.<br /><small>Source: CareScout 2025</small></div>
              </div>
              <div className={styles.ltcCard}>
                <div className={styles.ltcIcon}>🏡</div>
                <div className={styles.ltcType}>Assisted Living Facility</div>
                <div className={styles.ltcCost}>$6,200/mo</div>
                <div className={styles.ltcDesc}>$74,400/year. Ranges $40K–$140K by state.<br /><small>Source: CareScout 2025</small></div>
              </div>
              <div className={styles.ltcCard}>
                <div className={styles.ltcIcon}>🏥</div>
                <div className={styles.ltcType}>Nursing Home (Private Room)</div>
                <div className={styles.ltcCost}>$127,750/yr</div>
                <div className={styles.ltcDesc}>National median. Semi-private: $111,325/yr.<br /><small>Source: Genworth/CareScout 2024</small></div>
              </div>
            </div>

            <div className={`${styles.callout} ${styles.red}`}>
              <p><strong>Medicare Does NOT Cover Long-Term Custodial Care:</strong> Medicare covers short-term skilled nursing after hospitalization (up to 100 days). It does not cover custodial care — the type needed when someone requires help with daily activities like bathing, dressing, or eating. Medicaid covers LTC only after assets are nearly exhausted. This is the primary financial risk of longevity.</p>
            </div>
          </section>

          <section id="care-costs">
            <div className={styles.sectionLabel}>Annual Cost Comparison</div>
            <h2>Annual Long-Term Care Costs by Setting (2024–25)</h2>
            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable} summary="Data table with sortable columns">
                <thead>
                  <tr>
                    <th scope="col">Care<br />Setting</th>
                    <th scope="col">Annual Median<br />(2024–25)</th>
                    <th scope="col">Monthly</th>
                    <th scope="col">Daily/<br />Hourly</th>
                    <th scope="col">YoY<br />Change</th>
                    <th scope="col">Coverage<br />Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Nursing Home — Private Room</strong></td><td style={{ color: 'var(--red)', fontWeight: 700 }}>$127,750–$129,575</td><td>$10,646–$10,798</td><td>$350–$355/day</td><td style={{ color: 'var(--red)' }}>+9% (2024)</td><td>Medicare: short-term only; Medicaid: if eligible</td></tr>
                  <tr><td><strong>Nursing Home — Semi-Private</strong></td><td style={{ color: 'var(--red)' }}>$111,325</td><td>$9,277</td><td>~$305/day</td><td style={{ color: 'var(--red)' }}>+7% (2024)</td><td>Medicaid most common payer</td></tr>
                  <tr><td><strong>Assisted Living Community</strong></td><td style={{ color: 'var(--gold)' }}>$70,800–$74,400</td><td>$5,900–$6,200</td><td>~$196/day</td><td style={{ color: 'var(--gold)' }}>+5% (2025)</td><td>Private pay, LTCi; not Medicare/Medicaid typically</td></tr>
                  <tr><td><strong>Home Care — Non-Medical (44 hrs/wk)</strong></td><td style={{ color: 'var(--gold)' }}>$75,504–$80,080</td><td>$6,292–$6,673</td><td>$33–$35/hr</td><td>+3–10%</td><td>Private pay, LTCi; some Medicaid waivers</td></tr>
                  <tr><td><strong>Adult Day Health Care</strong></td><td style={{ color: 'var(--green)' }}>$26,000</td><td>$2,167</td><td>~$100/day</td><td>Stable</td><td>Some Medicaid; sliding-scale common</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '10px' }}>Sources: Genworth/CareScout Cost of Care Survey 2024 (released March 2025; 140,000+ providers); CareScout Cost of Care Survey 2025 (July–Nov 2025). VeritasRM (June 2025) citing both surveys.</p>

            <div className={styles.chartBox} style={{ marginTop: '24px' }}>
              <h3>Annual LTC Cost by Care Setting — National Medians (2024–25)</h3>
              <div style={{ height: '240px' }}>
                <canvas ref={chartRef}></canvas>
              </div>
              <p className={styles.chartSource}>Source: Genworth/CareScout Cost of Care Survey 2024 & 2025 · Plootus Research 2025</p>
            </div>
          </section>

          <section id="premiums">
            <div className={styles.sectionLabel}>Insurance Premiums</div>
            <h2>LTC Insurance Premium by Age (2024–25)</h2>
            <p>LTC insurance premiums rise sharply with age and are significantly higher for women (who statistically need care longer). Data from the AALTCI 2024 Annual Price Index survey. All premiums are for a $165,000-benefit policy with no inflation protection unless noted.</p>
            <table className={styles.premTable} summary="Long-term care insurance premiums by age of purchase">
              <thead>
                <tr>
                  <th scope="col">Age at<br />Purchase</th>
                  <th scope="col">Single Male<br />(Annual)</th>
                  <th scope="col">Single Female<br />(Annual)</th>
                  <th scope="col">Couple<br />(Combined)</th>
                  <th scope="col">vs.<br />Age 55</th>
                  <th scope="col">Planning<br />Note</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Age 45</strong></td><td style={{ color: 'var(--green)', fontWeight: 600 }}>~$700</td><td style={{ color: 'var(--green)', fontWeight: 600 }}>~$1,100</td><td style={{ color: 'var(--green)', fontWeight: 600 }}>~$1,700</td><td style={{ color: 'var(--green)' }}>Best rates</td><td>Lowest premiums; best health eligibility odds</td></tr>
                <tr><td><strong>Age 50</strong></td><td style={{ color: 'var(--green)' }}>~$820</td><td style={{ color: 'var(--green)' }}>~$1,300</td><td style={{ color: 'var(--green)' }}>~$2,000</td><td>Still affordable</td><td>Sweet spot — healthy enough to qualify, lower rate than 55</td></tr>
                <tr><td><strong>Age 55</strong></td><td><strong>$950</strong></td><td><strong>$1,500</strong></td><td><strong>$2,600</strong></td><td>Baseline</td><td>AALTCI 2024 reference age; most commonly purchased</td></tr>
                <tr><td><strong>Age 60</strong></td><td style={{ color: 'var(--gold)' }}>$1,200</td><td style={{ color: 'var(--gold)' }}>$1,900</td><td style={{ color: 'var(--gold)' }}>$2,600</td><td style={{ color: 'var(--gold)' }}>+26–27%</td><td>Still insurable for most; costs rising noticeably</td></tr>
                <tr><td><strong>Age 65</strong></td><td style={{ color: 'var(--red)' }}>$1,700+</td><td style={{ color: 'var(--red)' }}>$2,700+</td><td style={{ color: 'var(--red)' }}>$3,800+</td><td style={{ color: 'var(--red)' }}>+79–80%</td><td>Many applicants declined due to health; limited options</td></tr>
                <tr><td><strong>Age 70+</strong></td><td style={{ color: 'var(--red)', fontWeight: 700 }}>$3,000+</td><td style={{ color: 'var(--red)', fontWeight: 700 }}>$4,500+</td><td style={{ color: 'var(--red)', fontWeight: 700 }}>$6,000+</td><td style={{ color: 'var(--red)' }}>+215%+</td><td>Increasingly difficult to qualify; hybrid products common</td></tr>
              </tbody>
            </table>
            <div className={`${styles.callout} ${styles.gold}`}>
              <p><strong>⚠️ Important:</strong> Only about 3–4% of Americans age 50+ carry LTC insurance (<abbr title="Kaiser Family Foundation">KFF</abbr> Health News, 2023). The market has contracted significantly as insurers have exited or raised premiums dramatically. <strong>Hybrid life insurance/LTC policies</strong> have grown in popularity as an alternative — they combine a death benefit with LTC coverage and don't require use-it-or-lose-it premiums. Consult a licensed insurance professional for current quotes specific to your health and state.</p>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>Source: AALTCI 2024 Annual Price Index survey (referenced by NCOA, Nationwide, Aug 2024). All for $165,000 benefit with no inflation protection. Age 45, 50, 65, 70+ estimates are Plootus extrapolations based on AALTCI data patterns. KFF Health News (2023) for coverage rate.</p>
          </section>

          <section id="tax">
            <div className={styles.sectionLabel}>Tax Advantages</div>
            <h2>LTC Insurance Tax Deductibility (2025)</h2>
            <p>Premiums paid for tax-qualified LTC insurance policies may be deductible as medical expenses if you itemize. The IRS sets age-based annual limits on deductible premiums, adjusted annually.</p>
            <table className={styles.taxTable} summary="IRS tax deductibility limits for long-term care insurance premiums by age">
              <thead>
                <tr>
                  <th scope="col">Age Range (Tax<br />Year End)</th>
                  <th scope="col">2025 Max<br />Deductible Premium</th>
                  <th scope="col">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Age 40 or younger</td><td>$480</td><td>Must itemize; total medical expenses must exceed 7.5% of AGI</td></tr>
                <tr><td>Age 41–50</td><td>$900</td><td>Same conditions apply</td></tr>
                <tr><td>Age 51–60</td><td>$1,800</td><td>Same conditions apply</td></tr>
                <tr><td><strong>Age 61–70</strong></td><td style={{ color: 'var(--green)', fontWeight: 700 }}>$4,810</td><td>Significant benefit for most buyers in this age range</td></tr>
                <tr><td><strong>Age 71 and older</strong></td><td style={{ color: 'var(--green)', fontWeight: 700 }}>$6,020</td><td>Highest deduction limit — most advantageous age bracket</td></tr>
              </tbody>
            </table>
            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>Source: IRS 2025 Tax-Deductible Limits for Qualified LTC Insurance Premiums (AALTCI; VeritasRM June 2025). Self-employed individuals may deduct 100% of eligible premiums without itemizing. Consult a tax professional.</p>
          </section>

          <section id="planning">
            <div className={styles.sectionLabel}>Planning Guide</div>
            <h2>How to Plan for Long-Term Care Costs</h2>
            <ul className={styles.strategyList}>
              <li className={styles.strategyItem}>
                <div className={styles.strategyNum}>1</div>
                <div className={styles.strategyContent}>
                  <h4>Buy Earlier for Lower Premiums</h4>
                  <p>The single most impactful decision is timing. A policy bought at age 55 vs. 65 can cost less than half as much annually. Waiting also increases the risk of being declined — a significant health event can make you uninsurable. Most financial planners suggest considering LTC insurance between ages 55–65.</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyNum}>2</div>
                <div className={styles.strategyContent}>
                  <h4>Understand What Medicare Does — and Doesn't — Cover</h4>
                  <p>Medicare covers skilled nursing care for up to 100 days after a qualifying 3-day hospital stay — but only if you need skilled care. It does NOT cover custodial care (help with daily activities) which is the most common LTC need. Medicaid covers LTC only after you have spent down most assets. Source: Medicare.gov (2025).</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyNum}>3</div>
                <div className={styles.strategyContent}>
                  <h4>Consider Hybrid Life/LTC Policies</h4>
                  <p>Hybrid policies combine life insurance (or annuity) with LTC benefits. You don't lose premiums if you never need LTC — the death benefit pays your heirs instead. They've grown significantly as traditional standalone LTC policies have become harder to buy. Generally require a lump-sum or limited-pay premium structure.</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyNum}>4</div>
                <div className={styles.strategyContent}>
                  <h4>Self-Insure With a Dedicated Fund</h4>
                  <p>If you have significant assets ($1M+), self-insurance may be an option: invest a dedicated portfolio specifically for potential LTC needs. The national median LTC need is about 3 years; a $200,000–$400,000 dedicated fund (starting from age 55) may be sufficient for many middle-income needs. This avoids insurance risk and premium increases.</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyNum}>5</div>
                <div className={styles.strategyContent}>
                  <h4>Home Care Is Often the Preference — and More Affordable</h4>
                  <p>Most Americans prefer to receive care at home. Home care (non-medical caregiver, 44 hrs/week) costs a national median of $80,080/year — less than nursing home care, and often eligible for family caregiver arrangements. A smaller LTC policy covering home care only can be significantly less expensive.</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyNum}>6</div>
                <div className={styles.strategyContent}>
                  <h4>Have the LTC Conversation Early</h4>
                  <p>Nearly 70% of Americans say they haven't talked about LTC planning with family. Starting the conversation at age 50–55 — when healthy — allows time to explore options, understand family care preferences, and make financial arrangements before a crisis occurs.</p>
                </div>
              </li>
            </ul>
          </section>

          <section id="faq">
            <div className={styles.sectionLabel}>FAQ</div>
            <h2>Long-Term Care FAQ</h2>
            <div className={`${styles.faqItem} ${openFaqs[0] ? styles.faqItemOpen : ''}`}>
              <button className={styles.faqQ} onClick={() => toggleFaq(0)}>How much does long-term care cost in 2025? <span className={styles.faqIcon}>+</span></button>
              <div className={styles.faqA}>Based on the 2025 CareScout Cost of Care Survey, national median costs are approximately: Nursing home (private room) ~$129,575/year ($355/day, +1% from 2024); assisted living community $74,400/year ($6,200/month, +5%); non-medical home care $80,080/year at 44 hours/week ($35/hour, +3%); adult day health care ~$26,000/year. These are national medians — costs vary significantly by state and local market.</div>
            </div>
            <div className={`${styles.faqItem} ${openFaqs[1] ? styles.faqItemOpen : ''}`}>
              <button className={styles.faqQ} onClick={() => toggleFaq(1)}>Does Medicare pay for long-term care? <span className={styles.faqIcon}>+</span></button>
              <div className={styles.faqA}>Medicare does NOT cover long-term custodial care — the most common type of LTC, which involves help with daily activities like bathing, dressing, and eating in a nursing home or at home. Medicare does cover: (1) Short-term skilled nursing facility care (up to 100 days after a qualifying 3-day hospital stay, with significant cost-sharing after day 20); (2) Short-term home health care for skilled nursing or therapy after an illness/surgery. Once you need only custodial care, Medicare stops paying. Source: Medicare.gov (2025).</div>
            </div>
            <div className={`${styles.faqItem} ${openFaqs[2] ? styles.faqItemOpen : ''}`}>
              <button className={styles.faqQ} onClick={() => toggleFaq(2)}>What is the best age to buy long-term care insurance? <span className={styles.faqIcon}>+</span></button>
              <div className={styles.faqA}>Most financial planners and the AALTCI recommend buying LTC insurance between ages 55–65 — ideally closer to 55–60. This window offers: lower premiums than waiting until 65+; sufficient health to qualify; and enough years for the policy to potentially be needed. The AALTCI's 2024 Price Index found that premiums at age 60 are roughly 26% higher than at age 55, and at age 65 they are roughly 80% higher. Beyond 70, many traditional LTC products are unavailable. Source: NCOA citing AALTCI; NCOA.org LTC insurance article.</div>
            </div>
            <div className={`${styles.faqItem} ${openFaqs[3] ? styles.faqItemOpen : ''}`}>
              <button className={styles.faqQ} onClick={() => toggleFaq(3)}>What does long-term care insurance actually cover? <span className={styles.faqIcon}>+</span></button>
              <div className={styles.faqA}>Tax-qualified LTC insurance policies typically cover care in: (1) Nursing homes; (2) Assisted living communities; (3) Home health care; (4) Adult day centers; (5) Hospice care. Benefits are triggered when you need help with at least 2 of 6 "Activities of Daily Living" (<abbr title="Activities of Daily Living">ADLs</abbr>: bathing, dressing, eating, toileting, continence, transferring/mobility) or have severe cognitive impairment. Policies have a benefit amount, a benefit period, an elimination period (typically 90 days), and optional inflation protection.</div>
            </div>
          </section>

          <div className={styles.sourcesBox}>
            <h4>Sources</h4>
            <p>Genworth/CareScout Cost of Care Survey 2024 (released March 2025; 140,000+ providers) · CareScout Cost of Care Survey 2025 (July–Nov 2025) · AALTCI 2024 Annual Price Index survey (referenced by NCOA, Nationwide, Aug 2024) · KFF Health News (2023) for LTC insurance coverage rate · HHS/ACL LTC statistics · IRS 2025 Tax-Deductible Limits for Qualified LTC Insurance Premiums · VeritasRM (June 2025)</p>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles.sidebarCard}>
            <h4>On This Page</h4>
            <ul className={styles.tocList}>
              <li><a href="#overview">The Numbers</a></li>
              <li><a href="#care-costs">Care Costs by Setting</a></li>
              <li><a href="#premiums">Insurance Premiums by Age</a></li>
              <li><a href="#tax">Tax Deductibility 2025</a></li>
              <li><a href="#planning">Planning Guide</a></li>
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
              <li><a onClick={() => router.push('/health-insurance-costs')} style={{cursor: 'pointer'}}>Health Insurance Costs 2025</a></li>
              <li><a onClick={() => router.push('/healthcare-costs-in-retirement')} style={{cursor: 'pointer'}}>Healthcare Costs in Retirement</a></li>
              <li><a onClick={() => router.push('/how-much-to-retire')} style={{cursor: 'pointer'}}>How Much Do I Need to Retire?</a></li>
              <li><a onClick={() => router.push('/social-security-benefits')} style={{cursor: 'pointer'}}>Social Security Benefits Guide</a></li>
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

export default LongTermCareCost;
