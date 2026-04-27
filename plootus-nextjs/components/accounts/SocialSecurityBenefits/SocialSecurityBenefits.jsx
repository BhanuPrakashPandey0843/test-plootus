import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Chart from 'chart.js/auto';
import styles from './SocialSecurityBenefits.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const SocialSecurityBenefits = () => {
  const router = useRouter();
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ages = [62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
      const cum62 = ages.map(a => Math.max(0, (a - 62) * 12 * 1400));
      const cum67 = ages.map(a => Math.max(0, (a - 67) * 12 * 2000));
      const cum70 = ages.map(a => Math.max(0, (a - 70) * 12 * 2480));

      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ages,
          datasets: [
            {
              label: 'Claim at 62 ($1,400/mo)',
              data: cum62,
              borderColor: '#E03131',
              backgroundColor: 'rgba(224, 49, 49, 0.06)',
              borderWidth: 2,
              pointRadius: 0,
              tension: 0.3,
              fill: true
            },
            {
              label: 'Claim at 67 ($2,000/mo)',
              data: cum67,
              borderColor: '#3B5BDB',
              backgroundColor: 'rgba(59, 91, 219, 0.06)',
              borderWidth: 2,
              pointRadius: 0,
              tension: 0.3,
              fill: true
            },
            {
              label: 'Claim at 70 ($2,480/mo)',
              data: cum70,
              borderColor: '#2CB67D',
              backgroundColor: 'rgba(44, 182, 125, 0.06)',
              borderWidth: 2,
              pointRadius: 0,
              tension: 0.3,
              fill: true
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: { font: { family: 'Plus Jakarta Sans' }, boxWidth: 12 }
            },
            tooltip: {
              callbacks: {
                label: (ctx) => '$' + ctx.parsed.y.toLocaleString()
              }
            }
          },
          scales: {
            y: {
              ticks: {
                callback: (v) => '$' + (v / 1000).toFixed(0) + 'K',
                font: { family: 'Plus Jakarta Sans', size: 11 }
              },
              grid: { color: '#E2E8F4' }
            },
            x: {
              title: { display: true, text: 'Age', font: { family: 'Plus Jakarta Sans', size: 12 } },
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

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Social Security Benefits in 2026: When to Claim, Spousal Benefits & the Break-Even Age",
      "description": "A comprehensive guide to maximizing Social Security retirement benefits in 2026. Covers how benefits are calculated, Full Retirement Age by birth year, the financial impact of claiming at 62 vs. 67 vs. 70 (with cumulative lifetime totals), spousal and survivor benefit strategies, Social Security taxation by state, the 2035 trust fund depletion timeline, and a break-even analysis. Claiming at 70 instead of 62 increases monthly benefits by approximately 77%. Sources: Social Security Administration, AARP, Charles Schwab 2026.",
      "datePublished": "2026-01-01",
      "dateModified": "2026-03-01",
      "author": { "@type": "Organization", "name": "Plootus Research Team", "url": "https://www.plootus.com" },
      "publisher": {
        "@type": "Organization", "name": "Plootus", "url": "https://www.plootus.com",
        "logo": { "@type": "ImageObject", "url": "https://www.plootus.com/logo.png" }
      },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.plootus.com/social-security-benefits" },
      "about": [{ "@type": "Thing", "name": "Social Security Claiming Strategy" },
      { "@type": "Thing", "name": "Social Security Spousal Benefits" },
      { "@type": "Thing", "name": "Social Security Break-Even Age" },
      { "@type": "Thing", "name": "Social Security Trust Fund" }],
      "keywords": "social security claiming strategy, when to claim Social Security, social security break-even, spousal benefits social security, FRA full retirement age, social security 2026"
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Social Security Benefits in 2026: When to Claim, Spousal Benefits & the Break-Even Age | Plootus</title>
        <meta name="description" content="A comprehensive guide to maximizing Social Security retirement benefits in 2026. Covers how benefits are calculated, Full Retirement Age by birth year, and the financial impact of claiming." />
        <link rel="canonical" href="https://www.plootus.com/social-security-benefits" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <HubNav />

      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>📚 Plootus Guide · Updated March 2026</div>
          <h1>Social Security Benefits in 2026: When to Claim, Spousal Benefits & the Break-Even Age</h1>
          <p className={styles.heroSub}>Claiming Social Security at the wrong age can cost you $200,000+ in lifetime income. Here's the complete guide to maximizing your benefit — including the strategies most people miss.</p>
          <div className={styles.heroMeta}>
            <span>By the Plootus Research Team</span>
            <span>Last updated: March 2026</span>
            <span>Sources: <abbr title="Social Security Administration">SSA</abbr>, Vanguard, AARP, Charles Schwab</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">$24,894</span><span className={styles.statLabel}>Avg. Annual SS Benefit (2025)</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">77%</span><span className={styles.statLabel}>Benefit Increase: Age 62 → 70</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">Age 80–81</span><span className={styles.statLabel}>Break-Even: Claiming 62 vs. 70</span></div>
          <div className={styles.statItem}><span className={styles.statNum} data-type="statistic">$5,108</span><span className={styles.statLabel}>Max Monthly Benefit at Age 70</span></div>
        </div>
      </div>

      <div className={styles.pageBody} itemScope itemType="https://schema.org/Article">
        <main className={styles.mainContent} role="main" aria-label="Social Security Benefits Guide 2026 — Claiming Strategy and Analysis">
          <section id="basics">
            <div className={styles.sectionLabel}>The Basics</div>
            <h2>How Social Security Retirement Benefits Work</h2>
            <p>Social Security retirement benefits are primarily based on two things: your <strong>average earnings over your 35 highest-earning working years</strong>, and the <strong>age at which you begin claiming benefits</strong>.</p>
            <p>You have an eight-year window — from age 62 to age 70 — to start collecting. The longer you wait within that window, the higher your monthly payment for the rest of your life. The SSA calculates your benefit at your <strong>Full Retirement Age (<abbr title="Full Retirement Age">FRA</abbr>)</strong>, which is 67 for anyone born in 1960 or later. Claim before FRA and your benefit is permanently reduced. Claim after FRA (up to 70) and it's permanently increased by 8% per year in delayed retirement credits.</p>
            <div className={styles.callout}>
              <p><strong>The Key Number:</strong> Waiting from 62 to 70 increases your monthly Social Security benefit by approximately <strong>77%</strong> — permanently, for the rest of your life. For someone entitled to $1,800/month at FRA, that's the difference between $1,260/month (at 62) and $2,232/month (at 70).<br /><small style={{ opacity: .75 }}>Source: Social Security Administration; AARP Break-Even Age Guide 2025.</small></p>
            </div>
          </section>

          <section id="fra">
            <div className={styles.sectionLabel}>Full Retirement Age</div>
            <h2>Full Retirement Age (FRA) by Birth Year</h2>
            <p>Your Full Retirement Age is the benchmark the SSA uses to calculate your benefit. Claim before FRA and your benefit is reduced; claim after FRA and it grows by 8% per year up to age 70:</p>
            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable} summary="Data comparison table">
                <thead>
                  <tr><th scope="col">Year of Birth</th><th scope="col">Full Retirement Age</th><th scope="col">Benefit at Age 62 (% of FRA)</th><th scope="col">Benefit at Age 70 (% of FRA)</th></tr>
                </thead>
                <tbody>
                  <tr><td>1943–1954</td><td><strong>66</strong></td><td>75%</td><td>132%</td></tr>
                  <tr><td>1955</td><td><strong>66 and 2 months</strong></td><td>74.2%</td><td>130.7%</td></tr>
                  <tr><td>1956</td><td><strong>66 and 4 months</strong></td><td>73.3%</td><td>129.3%</td></tr>
                  <tr><td>1957</td><td><strong>66 and 6 months</strong></td><td>72.5%</td><td>128%</td></tr>
                  <tr><td>1958</td><td><strong>66 and 8 months</strong></td><td>71.7%</td><td>126.7%</td></tr>
                  <tr><td>1959</td><td><strong>66 and 10 months</strong></td><td>70.8%</td><td>125.3%</td></tr>
                  <tr><td><strong>1960 or later</strong></td><td><strong>67</strong></td><td>70%</td><td>124%</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>Source: Social Security Administration. Anyone born in 1964 who claims in 2026 will receive as little as 70% of their full benefit if claiming at 62. Source: AARP; SSA benefit reduction schedules.</p>
          </section>

          <section id="claiming">
            <div className={styles.sectionLabel}>62 vs. 67 vs. 70</div>
            <h2>Claiming at 62 vs. 67 vs. 70: The Real Numbers</h2>
            <p>To illustrate the stakes of your claiming decision, here's a concrete comparison for someone with a <strong>Full Retirement Age benefit of $2,000/month</strong> (born 1960+, FRA = 67):</p>
            <div className={styles.claimCompare}>
              <div className={styles.claimCard}>
                <div className={styles.claimAge}>62</div>
                <div className={styles.claimAgeLabel}>Early Claim</div>
                <div className={styles.claimRow}><span className={styles.claimRowLabel}>Monthly benefit</span><span className={styles.claimRowVal} style={{ color: 'var(--red)' }}>$1,400/mo (−30%)</span></div>
                <div className={styles.claimRow}><span className={styles.claimRowLabel}>Annual benefit</span><span className={styles.claimRowVal}>$16,800/yr</span></div>
                <div className={styles.claimRow}><span className={styles.claimRowLabel}>Total by age 80</span><span className={styles.claimRowVal}>$302,400</span></div>
                <div className={styles.claimRow}><span className={styles.claimRowLabel}>Total by age 85</span><span className={styles.claimRowVal}>$386,400</span></div>
                <div className={styles.claimRow}><span className={styles.claimRowLabel}>Reduction</span><span className={styles.claimRowVal}>Permanent — for life</span></div>
              </div>
              <div className={`${styles.claimCard} ${styles.best}`}>
                <div className={styles.claimAge}>67</div>
                <div className={styles.claimAgeLabel}>Full Retirement Age</div>
                <div className={styles.claimRow}><span className={styles.claimRowLabel}>Monthly benefit</span><span className={styles.claimRowVal}>$2,000/mo (100%)</span></div>
                <div className={styles.claimRow}><span className={styles.claimRowLabel}>Annual benefit</span><span className={styles.claimRowVal}>$24,000/yr</span></div>
                <div className={styles.claimRow}><span className={styles.claimRowLabel}>Total by age 80</span><span className={styles.claimRowVal}>$312,000</span></div>
                <div className={styles.claimRow}><span className={styles.claimRowLabel}>Total by age 85</span><span className={styles.claimRowVal}>$432,000</span></div>
                <div className={styles.claimRow}><span className={styles.claimRowLabel}>Break-even vs. 62</span><span className={styles.claimRowVal}>~Age 79</span></div>
              </div>
              <div className={styles.claimCard}>
                <div className={styles.claimAge}>70</div>
                <div className={styles.claimAgeLabel}>Maximum Benefit</div>
                <div className={styles.claimRow}><span className={styles.claimRowLabel}>Monthly benefit</span><span className={styles.claimRowVal} style={{ color: 'var(--green)' }}>$2,480/mo (+24%)</span></div>
                <div className={styles.claimRow}><span className={styles.claimRowLabel}>Annual benefit</span><span className={styles.claimRowVal}>$29,760/yr</span></div>
                <div className={styles.claimRow}><span className={styles.claimRowLabel}>Total by age 80</span><span className={styles.claimRowVal}>$297,600</span></div>
                <div className={styles.claimRow}><span className={styles.claimRowLabel}>Total by age 85</span><span className={styles.claimRowVal}>$446,400</span></div>
                <div className={styles.claimRow}><span className={styles.claimRowLabel}>Break-even vs. 62</span><span className={styles.claimRowVal}>~Age 80–81</span></div>
              </div>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>Based on $2,000/month FRA benefit for someone born 1960+ (FRA = 67). Delayed retirement credit: 8%/year from FRA to 70 = 24% total increase. Source: SSA; AARP 2025; Charles Schwab.</p>

            <div className={styles.chartBox}>
              <h3>Cumulative Lifetime Benefits by Claiming Age ($2,000/mo FRA Benefit)</h3>
              <div style={{ height: '320px', position: 'relative' }}>
                <canvas ref={chartRef}></canvas>
              </div>
              <p className={styles.chartSource}>Break-even between claiming at 62 vs. 70 is approximately age 80–81. No <abbr title="Cost-of-Living Adjustment">COLA</abbr> adjustments applied. Source: Social Security Administration.</p>
            </div>

            <div className={`${styles.callout} ${styles.gold}`}>
              <p><strong>The Break-Even Insight:</strong> If you live past age 80–81, you come out ahead by waiting until 70. The average 65-year-old today has a 50% chance of living past age 85. For married couples, at least one partner has a 50% chance of reaching 90+. The math strongly favors delaying — especially for the higher-earning spouse.<br /><small style={{ opacity: .75 }}>Source: SSA Life Expectancy Tables 2024; AARP 2025.</small></p>
            </div>
          </section>

          <section id="spousal">
            <div className={styles.sectionLabel}>Spousal Benefits</div>
            <h2>Spousal & Survivor Benefits: Strategies Most Couples Miss</h2>
            <p>Social Security offers significant benefits for spouses and survivors that most people don't fully understand — and many couples leave thousands of dollars per year unclaimed as a result.</p>
            <div className={styles.strategyGrid}>
              <div className={styles.strategyCard}>
                <div className={styles.strategyTitle}>💑 Spousal Benefit (Up to 50%)</div>
                <div className={styles.strategyDesc}>A spouse who worked little or not at all can receive up to 50% of their partner's FRA benefit — even without paying into Social Security themselves. The claiming spouse must be at least 62, and the worker must have already filed. Benefits are reduced if claimed before the claiming spouse's own FRA.</div>
                <div className={styles.strategyTip}>Example: Worker gets $2,400/mo at FRA → Spouse can get up to $1,200/mo</div>
              </div>
              <div className={styles.strategyCard}>
                <div className={styles.strategyTitle}>⬆️ Delayed Survivor Benefit Strategy</div>
                <div className={styles.strategyDesc}>For couples where one spouse earns significantly more, having the higher earner delay to age 70 maximizes the survivor benefit. When the higher earner dies, the surviving spouse keeps the larger of the two benefits — making this especially valuable for women, who statistically outlive men.</div>
                <div className={styles.strategyTip}>Strategy: Lower earner claims early; higher earner waits until 70</div>
              </div>
              <div className={styles.strategyCard}>
                <div className={styles.strategyTitle}>🔄 Divorced Spouse Benefits</div>
                <div className={styles.strategyDesc}>If your marriage lasted at least 10 years and you're currently unmarried, you may be eligible for up to 50% of your ex-spouse's FRA benefit — without affecting their benefit or their current spouse's benefit. You must be at least 62 to claim.</div>
                <div className={styles.strategyTip}>Your claim doesn't reduce your ex's benefit in any way</div>
              </div>
              <div className={styles.strategyCard}>
                <div className={styles.strategyTitle}>🪦 Survivor Benefit (Up to 100%)</div>
                <div className={styles.strategyDesc}>When a spouse dies, the surviving spouse can receive up to 100% of the deceased's benefit — including delayed retirement credits. You can claim a reduced survivor benefit as early as age 60 (50 if disabled). If your own benefit is higher, you can switch later.</div>
                <div className={styles.strategyTip}>Claim survivor benefit early, switch to own benefit at 70 if larger</div>
              </div>
            </div>
          </section>

          <section id="taxation">
            <div className={styles.sectionLabel}>SS Taxation</div>
            <h2>Will Your Social Security Benefits Be Taxed?</h2>
            <p>Social Security benefits may be subject to both federal and state income taxes, depending on your total income. Understanding the thresholds can help you plan withdrawals strategically.</p>
            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable} summary="Data comparison table">
                <thead>
                  <tr><th scope="col">Combined Income*</th><th scope="col">Filing Status</th><th scope="col">% of SS Benefits Taxable (Federal)</th></tr>
                </thead>
                <tbody>
                  <tr><td>Under $25,000</td><td>Single</td><td style={{ color: 'var(--green)', fontWeight: 700 }}>0% — No federal tax on SS</td></tr>
                  <tr><td>Under $32,000</td><td>Married Filing Jointly</td><td style={{ color: 'var(--green)', fontWeight: 700 }}>0% — No federal tax on SS</td></tr>
                  <tr><td>$25,000–$34,000</td><td>Single</td><td style={{ color: 'var(--gold)', fontWeight: 700 }}>Up to 50% of benefits taxable</td></tr>
                  <tr><td>$32,000–$44,000</td><td>Married Filing Jointly</td><td style={{ color: 'var(--gold)', fontWeight: 700 }}>Up to 50% of benefits taxable</td></tr>
                  <tr><td>Over $34,000</td><td>Single</td><td style={{ color: 'var(--red)', fontWeight: 700 }}>Up to 85% of benefits taxable</td></tr>
                  <tr><td>Over $44,000</td><td>Married Filing Jointly</td><td style={{ color: 'var(--red)', fontWeight: 700 }}>Up to 85% of benefits taxable</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>*Combined income = Adjusted Gross Income + Non-taxable interest + ½ of SS benefits. Source: IRS Publication 915.</p>
            <div className={`${styles.callout} ${styles.green}`}>
              <p><strong>State-Level Good News:</strong> As of 2026, <strong>41 states + D.C. do not tax Social Security benefits</strong> at the state level. Only 8 states still tax SS income: Colorado, Connecticut, Minnesota, Montana, New Mexico, Rhode Island, Utah, and Vermont. West Virginia fully eliminated its SS tax in 2026.<br /><small style={{ opacity: .75 }}>Source: Kiplinger State Tax Guide 2026.</small></p>
            </div>
          </section>

          <section id="faq" aria-label="Frequently Asked Questions">
            <div className={styles.sectionLabel}>FAQ</div>
            <h2>Frequently Asked Questions</h2>
            {[
              {
                q: "When should I start claiming Social Security?",
                a: "The optimal claiming age depends on your health and life expectancy, financial need, and whether you're married. If you're in poor health or need income immediately, claiming earlier may make sense. If you're healthy and have other income sources — especially if you're the higher-earning spouse in a marriage — delaying to 70 is typically the best financial decision. For every year you delay past FRA, your benefit grows by a guaranteed 8% per year, an inflation-adjusted return that's very hard to beat with investments."
              },
              {
                q: "What is the Social Security break-even age?",
                a: "The break-even age is when cumulative lifetime benefits from waiting equal the cumulative benefits from claiming early. Between claiming at 62 vs. 70 (using a $2,000 FRA benefit), the break-even is approximately age 80–81. This means: if you live past 80–81, you come out ahead by waiting until 70. Since half of today's 65-year-olds live past 85, delaying is statistically favorable for most healthy retirees."
              },
              {
                q: "Can I work while collecting Social Security?",
                a: "Yes, with an important caveat if you claim before your Full Retirement Age. Before FRA: If you earn more than $22,320 (2024 limit), the SSA withholds $1 in benefits for every $2 you earn above the limit. In the year you reach FRA, a more generous $1-for-$3 reduction applies. After FRA: You can earn unlimited income with no benefit reduction. Withheld benefits are not lost — they're added back to your calculation once you reach FRA."
              },
              {
                q: "What happens to Social Security if the trust fund runs out in 2035?",
                a: "The SSA's 2024 Trustees Report projects the trust fund could be depleted by 2035 without Congressional action. At that point, Social Security would still be funded by ongoing payroll taxes — but could only pay approximately 83% of scheduled benefits. This is not the same as benefits disappearing. Congress has historically acted before depletion (as in 1983). Most analysts expect some combination of benefit adjustments, tax increases, or retirement age changes well before 2035."
              },
              {
                q: "Can I claim Social Security based on my ex-spouse's record?",
                a: "Yes, if your marriage lasted at least 10 years and you're currently unmarried. You may receive up to 50% of your ex-spouse's FRA benefit if that amount exceeds your own. Your claim doesn't reduce your ex-spouse's benefit or their current spouse's benefit in any way. You must be at least 62 to claim, and benefits are reduced if claimed before your own FRA. You don't need your ex's cooperation — you file directly with the SSA."
              }
            ].map((faq, idx) => (
              <div key={idx} className={`${styles.faqItem} ${openFaqIndex === idx ? styles.open : ''}`}>
                <button className={styles.faqQ} onClick={() => toggleFaq(idx)}>
                  {faq.q} <span className={styles.faqIcon}>+</span>
                </button>
                <div className={styles.faqA}>{faq.a}</div>
              </div>
            ))}
          </section>

          <div className={styles.sourcesBox}>
            <h4>Sources</h4>
            <ul>
              <li>Social Security Administration — Retirement Benefits Publication (2026)</li>
              <li>Social Security Administration — Monthly Statistical Snapshot, November 2025</li>
              <li>Social Security Administration — Annual Trustees Report 2024</li>
              <li>Social Security Administration — Benefit Reduction and Delayed Credit Schedules</li>
              <li>AARP — Break-Even Age Guide 2025</li>
              <li>Internal Revenue Service — Publication 915, Social Security and Equivalent Railroad Retirement Benefits (2025)</li>
              <li>Charles Schwab — Social Security Optimization Strategies 2026</li>
              <li>Kiplinger — State Tax Guide 2026</li>
              <li>SSA — Life Expectancy Tables 2024</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles.sidebarCard}>
            <h4>On This Page</h4>
            <ul className={styles.tocList}>
              <li><a href="#basics">How SS Works</a></li>
              <li><a href="#fra">Full Retirement Age</a></li>
              <li><a href="#claiming">62 vs. 67 vs. 70</a></li>
              <li><a href="#spousal">Spousal Benefits</a></li>
              <li><a href="#taxation">SS Taxation</a></li>
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
              <li><div onClick={() => router.push('/how-much-to-retire')} style={{cursor: 'pointer'}}>How Much Do I Need?</div></li>
              <li><div onClick={() => router.push('/how-to-plan-retirement')} style={{cursor: 'pointer'}}>Retirement Planning Guide</div></li>
              <li><div onClick={() => router.push('/tax-friendly-states')} style={{cursor: 'pointer'}}>Tax-Friendly States Guide</div></li>
              <li><div onClick={() => router.push('/retirement-statistics')} style={{cursor: 'pointer'}}>Retirement Statistics 2026</div></li>
              <li><div onClick={() => router.push('/retire-early')} style={{cursor: 'pointer'}}><abbr title="Financial Independence, Retire Early">FIRE</abbr> / Early Retirement Guide</div></li>
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

export default SocialSecurityBenefits;
