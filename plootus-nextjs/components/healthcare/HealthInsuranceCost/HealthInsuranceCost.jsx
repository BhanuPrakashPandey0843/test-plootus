import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ShieldPlus, BookOpen, Calendar } from 'lucide-react';
import styles from './HealthInsuranceCost.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const HealthInsuranceCost = () => {
  const router = useRouter();
  const [openFaqs, setOpenFaqs] = useState({});

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

    animateStats();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Average Health Insurance Cost by State & Plan Type (2025) | Plootus</title>
        <meta name="description" content="Health insurance costs depend on how you get coverage. We break down 2025 average premiums by plan type and state using KFF's 2025 Employer Health Benefits Survey and marketplace data." />
        <link rel="canonical" href="https://www.plootus.com/health-insurance-costs" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Plootus Research Team" />
        <meta name="date" content="2025-01-01" />

        {/* Open Graph */}
        <meta property="og:title" content="Health Insurance Cost by State & Plan Type (2025) | Plootus" />
        <meta property="og:description" content="Average employer health plan: $9,325/yr single, $26,993/yr family. ACA silver benchmark: $497/mo for age 40. State range: $325/mo (NH) to $1,277/mo (VT). KFF 2025 data." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.plootus.com/health-insurance-costs" />
        <meta property="og:site_name" content="Plootus" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@plootus" />
        <meta name="twitter:title" content="Health Insurance Costs by Plan Type & State 2025" />
        <meta name="twitter:description" content="Employee cost: $114/mo (single), $525/mo (family). ACA silver: $497/mo. With subsidies: $66/mo avg. KFF 2025 Employer Health Benefits Survey." />
      </Head>

      <HubNav />

      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}><ShieldPlus size={14} /> <abbr title="Kaiser Family Foundation">KFF</abbr> 2025 Data</div>
          <h1>Average Health Insurance Cost by State & Plan Type (2025)</h1>
          <p className={styles.heroSub}>Health insurance costs depend on how you get coverage: employer-sponsored, <abbr title="Affordable Care Act">ACA</abbr> Marketplace, or Medicare. We break down 2025 average premiums by plan type and state, using KFF's authoritative data.</p>
          <div className={styles.heroMeta}>
            <span><BookOpen size={12} style={{display:'inline',verticalAlign:'middle',marginRight:4}} />Sources: KFF 2025 Employer Health Benefits Survey; KFF Marketplace Benchmark Premiums; HHS; Fidelity</span>
            <span><Calendar size={12} style={{display:'inline',verticalAlign:'middle',marginRight:4}} />2025 Data</span>
          </div>
        </div>
      </div>

      {/* Stat Strip */}
      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">$9,325/yr</span><span className={styles.statLabel}>Employer Plan — Single (Total)</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">$26,993/yr</span><span className={styles.statLabel}>Employer Plan — Family (Total)</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">$497/mo</span><span className={styles.statLabel}>ACA Silver Benchmark (Age 40)</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">$66/mo</span><span className={styles.statLabel}>ACA Avg with Premium Tax Credit</span></div>
        </div>
      </div>

      <div className={styles.pageBody} itemScope itemType="https://schema.org/Article">
        <main className={styles.mainContent} role="main" aria-label="Health Insurance Costs by Plan Type and State 2025">
          <section id="overview">
            <div className={styles.sectionLabel}>National Overview</div>
            <h2>Health Insurance Costs at a Glance (2025)</h2>
            <p>Data from KFF's 2025 Employer Health Benefits Survey (1,862 firms surveyed Jan–July 2025) and KFF's marketplace benchmark premium analysis. Employer premiums include both employer and employee contributions.</p>
            <div className={styles.keyStatsGrid}>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">$9,325/yr</div>
                <div className={styles.keyStatLabel}>Employer Plan — Single Coverage (Total)</div>
                <div className={styles.keyStatDesc}>Employee pays avg. ~$1,368/yr ($114/mo). +5% vs. 2024. Employer covers the remaining ~$7,957/yr.</div>
                <div className={styles.keyStatSource}>KFF 2025 Employer Health Benefits Survey</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">$26,993/yr</div>
                <div className={styles.keyStatLabel}>Employer Plan — Family Coverage (Total)</div>
                <div className={styles.keyStatDesc}>Employee pays avg. ~$6,296/yr ($525/mo). +6% vs. 2024. Employer covers ~$20,697/yr.</div>
                <div className={styles.keyStatSource}>KFF 2025 Employer Health Benefits Survey</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">$497/mo</div>
                <div className={styles.keyStatLabel}>ACA Marketplace Silver Benchmark</div>
                <div className={styles.keyStatDesc}>For a 40-year-old buying the second-lowest silver plan nationally. $5,964/year. Range: $325 (NH) to $1,277 (VT).</div>
                <div className={styles.keyStatSource}>KFF Marketplace Benchmark Premiums; Fidelity (Aug 2025)</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum} data-type="key-statistic">$66/mo avg.</div>
                <div className={styles.keyStatLabel}>ACA — With Premium Tax Credit</div>
                <div className={styles.keyStatDesc}>Average subsidized premium after ACA subsidies; varies widely by income and location. Eligible up to 400% FPL.</div>
                <div className={styles.keyStatSource}>ConsumerShield citing KFF data, Jan 2026</div>
              </div>
            </div>
          </section>

          <section id="plan-type">
            <div className={styles.sectionLabel}>Plan Comparison</div>
            <h2>Health Insurance Cost by Plan Type (2025)</h2>
            <p>The type of insurance you have dramatically changes your out-of-pocket premium. Here's how each category compares:</p>
            <div className={styles.planTableWrap}>
              <table className={styles.planTable} summary="Health insurance premium comparison by coverage type">
                <thead>
                  <tr>
                    <th scope="col">Coverage Type</th>
                    <th scope="col">Monthly Premium (Employee/Individual)</th>
                    <th scope="col">Annual Cost</th>
                    <th scope="col">Who Pays Rest</th>
                    <th scope="col">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Employer-Sponsored (Single)</strong></td><td style={{ color: 'var(--green)', fontWeight: 700 }}>$114/mo avg.</td><td>$1,368/yr</td><td>Employer pays ~$663/mo avg.</td><td>Workers with employer benefit</td></tr>
                  <tr><td><strong>Employer-Sponsored (Family)</strong></td><td style={{ fontWeight: 600 }}>$525/mo avg.</td><td>$6,296/yr</td><td>Employer pays ~$1,725/mo avg.</td><td>Families with employer coverage</td></tr>
                  <tr><td><strong>ACA Marketplace — Bronze</strong></td><td>$381/mo</td><td>$4,572/yr</td><td>Individual pays full (subsidies may apply)</td><td>Young, healthy; low-use</td></tr>
                  <tr><td><strong>ACA Marketplace — Silver (Benchmark)</strong></td><td style={{ fontWeight: 600 }}>$497/mo</td><td>$5,964/yr</td><td>Subsidies vary by income</td><td>Most unsubsidized enrollees</td></tr>
                  <tr><td><strong>ACA Marketplace — Gold</strong></td><td>$507/mo</td><td>$6,084/yr</td><td>Lower cost-sharing at care</td><td>High utilizers; frequent care</td></tr>
                  <tr><td><strong>ACA — With Full Subsidy</strong></td><td style={{ color: 'var(--green)', fontWeight: 700 }}>$66/mo avg.</td><td>~$792/yr</td><td>Federal premium tax credit covers rest</td><td>Income 100–400% FPL</td></tr>
                  <tr><td><strong>Medicare Part B (2025)</strong></td><td>$185/mo standard</td><td>$2,220/yr</td><td>Medicare trust fund</td><td>Age 65+ or disabled</td></tr>
                  <tr><td><strong><abbr title="High-Deductible Health Plan">HDHP</abbr>/HSA (employer plan)</strong></td><td>~$88/mo avg. (employee share)</td><td>~$1,056/yr</td><td>Employer pays rest; <abbr title="Health Savings Account">HSA</abbr> triple-tax advantage</td><td>Healthy; high-deductible tolerant</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>Sources: KFF 2025 Employer Health Benefits Survey · KFF Marketplace Benchmark Premiums · Fidelity (Aug 2025) · HHS/CMS · ConsumerShield citing KFF Healthcare.gov data (Jan 2026).</p>
          </section>

          <section id="by-state">
            <div className={styles.sectionLabel}>State Data</div>
            <h2>ACA Benchmark Premium by State (2025)</h2>
            <p>The "benchmark premium" is the second-lowest-cost Silver plan for a 40-year-old. This varies enormously by state due to insurer competition, provider costs, and state policy.</p>
            <div className={styles.stateTableWrap}>
              <table className={styles.stateTable} summary="State-level data table">
                <thead>
                  <tr>
                    <th scope="col">State</th>
                    <th scope="col">Monthly Benchmark (Age 40, Silver)</th>
                    <th scope="col">vs. National Avg ($497)</th>
                    <th scope="col">Notable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Vermont</strong></td><td style={{ color: 'var(--red)', fontWeight: 700 }}>$1,277</td><td style={{ color: 'var(--red)' }}>+157%</td><td>Most expensive; few insurers</td></tr>
                  <tr><td><strong>Wyoming</strong></td><td style={{ color: 'var(--red)' }}>$950</td><td style={{ color: 'var(--red)' }}>+91%</td><td>Limited competition</td></tr>
                  <tr><td><strong>West Virginia</strong></td><td style={{ color: 'var(--red)' }}>$850</td><td style={{ color: 'var(--red)' }}>+71%</td><td>Rural market challenges</td></tr>
                  <tr><td><strong>Alaska</strong></td><td style={{ color: 'var(--red)' }}>$820</td><td style={{ color: 'var(--red)' }}>+65%</td><td>High cost of care</td></tr>
                  <tr><td><strong>Nebraska</strong></td><td style={{ color: 'var(--gold)' }}>$750</td><td style={{ color: 'var(--gold)' }}>+51%</td><td>Low insurer count</td></tr>
                  <tr><td><strong>National Average</strong></td><td><strong>$497</strong></td><td>—</td><td>KFF 2025 benchmark</td></tr>
                  <tr><td><strong>Texas</strong></td><td>$520</td><td style={{ color: 'var(--gold)' }}>+5%</td><td>Moderate competition</td></tr>
                  <tr><td><strong>Florida</strong></td><td>$540</td><td style={{ color: 'var(--gold)' }}>+9%</td><td>Large uninsured population</td></tr>
                  <tr><td><strong>Oregon</strong></td><td style={{ color: 'var(--green)' }}>$400</td><td style={{ color: 'var(--green)' }}>−19%</td><td>Strong Medicaid competition</td></tr>
                  <tr><td><strong>Minnesota</strong></td><td style={{ color: 'var(--green)' }}>$380</td><td style={{ color: 'var(--green)' }}>−23%</td><td>Reinsurance program</td></tr>
                  <tr><td><strong>Maryland</strong></td><td style={{ color: 'var(--green)' }}>$385</td><td style={{ color: 'var(--green)' }}>−22%</td><td>State reinsurance fund</td></tr>
                  <tr><td><strong>Rhode Island</strong></td><td style={{ color: 'var(--green)' }}>$355</td><td style={{ color: 'var(--green)' }}>−29%</td><td>Competitive market</td></tr>
                  <tr><td><strong>Massachusetts</strong></td><td style={{ color: 'var(--green)' }}>$340</td><td style={{ color: 'var(--green)' }}>−32%</td><td>Strong insurer competition</td></tr>
                  <tr><td><strong>New Hampshire</strong></td><td style={{ color: 'var(--green)', fontWeight: 700 }}>$325</td><td style={{ color: 'var(--green)' }}>−35%</td><td>Most affordable state</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>KFF "Marketplace Average Monthly Benchmark Premiums" (State Health Facts, Nov 2025). All premiums are for a 40-year-old buying the second-lowest-cost silver plan. Actual rates vary by age, specific ZIP code, and insurer.</p>
          </section>

          <section id="tips">
            <div className={styles.sectionLabel}>Cost-Saving Strategies</div>
            <h2>How to Reduce Your Health Insurance Costs</h2>
            <ul className={styles.strategyList}>
              <li className={styles.strategyItem}>
                <div className={styles.strategyIcon}>💰</div>
                <div className={styles.strategyContent}>
                  <h4>Check ACA Subsidy Eligibility</h4>
                  <p>If you buy your own insurance, you may qualify for a premium tax credit if your income is 100–400% of the federal poverty level. In 2025, a single adult earning up to $58,320 or a family of 4 earning up to $120,000 may qualify. The average subsidized premium is just $66/month. Use KFF's Health Insurance Marketplace Calculator at kff.org.</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyIcon}>🏦</div>
                <div className={styles.strategyContent}>
                  <h4>Use an HSA with an HDHP</h4>
                  <p>A Health Savings Account paired with a high-deductible health plan (HDHP) offers triple tax savings: contributions are pre-tax, growth is tax-free, and withdrawals for medical expenses are tax-free. In 2025, you can contribute up to $4,300 (individual) or $8,550 (family) to an HSA. Source: IRS 2025 HSA limits.</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyIcon}>🔄</div>
                <div className={styles.strategyContent}>
                  <h4>Shop During Open Enrollment</h4>
                  <p>ACA plans can change premiums and networks annually — the cheapest plan last year may not be cheapest this year. The national Open Enrollment Period runs Nov 1–Jan 15 on Healthcare.gov. State-based exchanges may have different dates.</p>
                </div>
              </li>
              <li className={styles.strategyItem}>
                <div className={styles.strategyIcon}>📊</div>
                <div className={styles.strategyContent}>
                  <h4>Compare Total Cost, Not Just Premium</h4>
                  <p>A lower monthly premium often means a higher deductible. Calculate your "break-even" point. Use the plan's actuarial value (bronze=60%, silver=70%, gold=80%) as a guide for how costs are split between you and the insurer.</p>
                </div>
              </li>
            </ul>
          </section>

          <section id="faq">
            <div className={styles.sectionLabel}>FAQ</div>
            <h2>Health Insurance FAQ</h2>
            <div className={`${styles.faqItem} ${openFaqs[0] ? styles.faqItemOpen : ''}`}>
              <button className={styles.faqQ} onClick={() => toggleFaq(0)}>
                How much does health insurance cost per month in 2025? <span className={styles.faqIcon}>+</span>
              </button>
              <div className={styles.faqA}>
                It depends on how you get coverage. If you have employer-sponsored insurance, you pay an average of $114/month for single coverage or $525/month for family coverage. On the ACA Marketplace without subsidies, the average benchmark silver plan costs $497/month for a 40-year-old. With ACA subsidies, the average drops to $66/month. These figures are from KFF's 2025 Employer Health Benefits Survey and KFF's marketplace analysis, as reported by Fidelity (August 2025) and ConsumerShield (January 2026).
              </div>
            </div>
            <div className={`${styles.faqItem} ${openFaqs[1] ? styles.faqItemOpen : ''}`}>
              <button className={styles.faqQ} onClick={() => toggleFaq(1)}>
                What are the ACA plan tiers (Bronze, Silver, Gold, Platinum)? <span className={styles.faqIcon}>+</span>
              </button>
              <div className={styles.faqA}>
                ACA marketplace plans are categorized by "metal tiers" that reflect how costs are split between you and the insurer. Bronze plans cover about 60% of average costs (you pay 40%) but have the lowest premiums. Silver plans cover 70% of costs and are the benchmark for subsidies. Gold covers 80% of costs with higher premiums. Platinum covers 90% with the highest premiums. If you use a lot of healthcare services, gold or platinum may save money overall despite higher premiums. Source: KFF; Fidelity.
              </div>
            </div>
            <div className={`${styles.faqItem} ${openFaqs[2] ? styles.faqItemOpen : ''}`}>
              <button className={styles.faqQ} onClick={() => toggleFaq(2)}>
                Does health insurance cover long-term care? <span className={styles.faqIcon}>+</span>
              </button>
              <div className={styles.faqA}>
                No — standard health insurance, including employer plans and ACA marketplace plans, does not cover long-term care (custodial care such as help with bathing, dressing, or eating). Medicare also does not cover long-term custodial care — it only covers short-term skilled nursing facility stays after a qualifying hospitalization. Medicaid covers long-term care for eligible low-income individuals. Long-term care insurance (a separate product) is specifically designed to cover these costs.
              </div>
            </div>
          </section>

          <div className={styles.sourcesBox}>
            <h4>Sources</h4>
            <p>KFF 2025 Employer Health Benefits Survey (1,862 firms, Jan–July 2025) · KFF "Marketplace Average Monthly Benchmark Premiums" (State Health Facts, Nov 2025) · Fidelity "How much is health insurance per month?" (Aug 2025) · HHS/CMS Medicare Part B 2025 standard premium · ConsumerShield citing KFF Healthcare.gov data (Jan 2026) · Urban Institute "Marketplace Premiums in 2025" (June 2025)</p>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles.sidebarCard}>
            <h4>On This Page</h4>
            <ul className={styles.tocList}>
              <li><a href="#overview">National Overview</a></li>
              <li><a href="#plan-type">By Plan Type</a></li>
              <li><a href="#by-state">By State (ACA)</a></li>
              <li><a href="#tips">Cost-Saving Tips</a></li>
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
              <li><a onClick={() => router.push('/long-term-care-costs')} style={{cursor: 'pointer'}}>Long-Term Care Costs 2025</a></li>
              <li><a onClick={() => router.push('/healthcare-costs-in-retirement')} style={{cursor: 'pointer'}}>Healthcare Costs in Retirement</a></li>
              <li><a onClick={() => router.push('/how-much-to-retire')} style={{cursor: 'pointer'}}>How Much Do I Need to Retire?</a></li>
              <li><a onClick={() => router.push('/best-states-to-retire')} style={{cursor: 'pointer'}}>Best States for Retiree Healthcare</a></li>
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

export default HealthInsuranceCost;
