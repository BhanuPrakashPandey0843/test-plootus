import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from './TaxFriendlyStatesForRetirees.module.css';
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

const TaxFriendlyStatesForRetirees = () => {
  const router = useRouter();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Most Tax-Friendly States for Retirees in 2026: A–F Tax Grade for All 50 States",
      "description": "A comprehensive guide grading all 50 U.S. states on four retirement tax factors: state income tax on 401(k)/IRA withdrawals, Social Security benefit taxation, property tax rates, and estate and inheritance taxes. 8 states have no income tax. 41 states plus D.C. do not tax Social Security benefits. Grades A+ through D assigned based on combined tax burden on retirees. Sources: Kiplinger State Tax Guide 2026, SmartAsset 2026, Tax Foundation 2026.",
      "datePublished": "2026-01-01",
      "dateModified": "2026-03-01",
      "author": {"@type":"Organization","name":"Plootus Research Team","url":"https://www.plootus.com"},
      "publisher": {
        "@type": "Organization","name":"Plootus","url":"https://www.plootus.com",
        "logo": {"@type":"ImageObject","url":"https://www.plootus.com/logo.png"}
      },
      "mainEntityOfPage": {"@type":"WebPage","@id":"https://www.plootus.com/tax-friendly-states-for-retirees"}
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Most Tax-Friendly States for Retirees in 2026 | Complete Guide | Plootus</title>
        <meta name="description" content="State taxes can cost retirees $5,000–$20,000 more per year — or nothing at all. We graded every state on income tax, Social Security tax, property tax, and estate taxes." />
        <link rel="canonical" href="https://www.plootus.com/tax-friendly-states-for-retirees" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <HubNav />

      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>📚 Plootus Guide · Updated March 2026</div>
          <h1>Most Tax-Friendly States for Retirees in 2026: A–F Grade for All 50 States</h1>
          <p className={styles.heroSub}>State taxes can cost retirees $5,000–$20,000 more per year — or nothing at all. We graded every state on income tax, Social Security tax, property tax, and estate taxes so you know exactly where you stand.</p>
          <div className={styles.heroMeta}>
            <span>By the Plootus Research Team</span>
            <span>Last updated: March 2026</span>
            <span>Sources: Kiplinger, SmartAsset, Tax Foundation</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}>
            <span className={styles.statNum} data-type="statistic">8</span>
            <span className={styles.statLabel}>States With No Income Tax</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum} data-type="statistic">41</span>
            <span className={styles.statLabel}>States That Don't Tax SS Benefits</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum} data-type="statistic">$400K+</span>
            <span className={styles.statLabel}>Potential Tax Savings Over 25 Years</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum} data-type="statistic">0%</span>
            <span className={styles.statLabel}>Income Tax in Best States</span>
          </div>
        </div>
      </div>

      <div className={styles.pageBody} itemScope itemType="https://schema.org/Article">
        <main className={styles.mainContent} role="main" aria-label="Tax-Friendly States for Retirees 2026 — A–F Tax Grades for All 50 States">
          <section id="overview">
            <div className={styles.sectionLabel}>Overview</div>
            <h2>Why State Taxes Can Be Your Biggest Retirement Expense</h2>
            <p>Federal income taxes are unavoidable — but state taxes are a choice. A retiree moving from California (13.3% top income tax rate) to Wyoming (0%) saves an estimated $10,000–$25,000+ per year in state income taxes alone, depending on their retirement income level. Over a 25-year retirement, that difference can exceed $400,000.</p>
            <p>Taxes in retirement come from four main sources, and each state handles them differently: <strong>state income tax</strong> on 401(k) and <abbr title="Individual Retirement Account">IRA</abbr> withdrawals, <strong>Social Security taxation</strong>, <strong>property tax</strong>, and <strong>estate and inheritance tax</strong>.</p>

            <div className={styles.pillarGrid}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>📊</div>
                <div className={styles.pillarTitle}>State Income Tax on Retirement Income</div>
                <div className={styles.pillarDesc}>8 states charge zero. Others tax 401(k)/IRA withdrawals at rates up to 13.3% (California). This is typically the largest state tax for retirees with significant savings.</div>
                <div className={styles.pillarTip}>Biggest impact: High-income retirees with large 401(k)/IRA withdrawals</div>
              </div>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>🏛️</div>
                <div className={styles.pillarTitle}>Social Security Taxation</div>
                <div className={styles.pillarDesc}>41 states + D.C. do not tax SS benefits. Only 8 states still tax Social Security income as of 2026: CO, CT, MN, MT, NM, RI, UT, and VT.</div>
                <div className={styles.pillarTip}>New in 2026: West Virginia eliminated its SS tax</div>
              </div>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>🏠</div>
                <div className={styles.pillarTitle}>Property Tax</div>
                <div className={styles.pillarDesc}>Varies enormously — from 0.28% in Hawaii to 2.47% in New Jersey. Many states offer senior property tax exemptions or "circuit breaker" credits that can significantly reduce the burden.</div>
                <div className={styles.pillarTip}>Check senior exemption programs — often not automatic</div>
              </div>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>📋</div>
                <div className={styles.pillarTitle}>Estate & Inheritance Tax</div>
                <div className={styles.pillarDesc}>Most states have eliminated estate taxes, but 12 states + D.C. still impose them — and 6 states have inheritance taxes. Rates can range from 1% to 20% of the estate value.</div>
                <div className={styles.pillarTip}>Often overlooked until it's too late to plan around</div>
              </div>
            </div>

            <div className={`${styles.callout} ${styles.gold}`}>
              <p><strong>Key Finding 2026:</strong> Eight states have no income tax at all. Forty-one states (plus D.C.) do not tax Social Security benefits. West Virginia became the latest state to fully eliminate its Social Security tax in 2026. Nebraska, Missouri, and Kansas eliminated theirs in 2024.<br/><small style={{opacity: .75}}>Source: Kiplinger State Tax Guide 2026; SmartAsset 2026.</small></p>
            </div>
          </section>

          <section id="no-income-tax">
            <div className={styles.sectionLabel}>No Income Tax States</div>
            <h2>States With No Income Tax in 2026</h2>
            <p>These 8 states charge zero state income tax — meaning your 401(k) withdrawals, IRA distributions, pension income, and all other retirement income is completely state-tax-free:</p>
            <div className={styles.noTaxGrid}>
              <div className={styles.noTaxCard}>
                <div className={styles.noTaxState}>Alaska</div>
                <div className={styles.noTaxTags}>
                  <span className={`${styles.noTaxTag} ${styles.good}`}>No income tax</span>
                  <span className={`${styles.noTaxTag} ${styles.good}`}>No sales tax</span>
                  <span className={`${styles.noTaxTag} ${styles.good}`}>Annual dividend check</span>
                </div>
              </div>
              <div className={styles.noTaxCard}>
                <div className={styles.noTaxState}>Florida</div>
                <div className={styles.noTaxTags}>
                  <span className={`${styles.noTaxTag} ${styles.good}`}>No income tax</span>
                  <span className={`${styles.noTaxTag} ${styles.good}`}>No SS tax</span>
                  <span className={`${styles.noTaxTag} ${styles.good}`}>#2 Overall Rank</span>
                </div>
              </div>
              <div className={styles.noTaxCard}>
                <div className={styles.noTaxState}>Nevada</div>
                <div className={styles.noTaxTags}>
                  <span className={`${styles.noTaxTag} ${styles.good}`}>No income tax</span>
                  <span className={`${styles.noTaxTag} ${styles.good}`}>No SS tax</span>
                  <span className={`${styles.noTaxTag} ${styles.good}`}>Low property tax</span>
                </div>
              </div>
              <div className={styles.noTaxCard}>
                <div className={styles.noTaxState}>New Hampshire</div>
                <div className={styles.noTaxTags}>
                  <span className={`${styles.noTaxTag} ${styles.good}`}>No income tax*</span>
                  <span className={`${styles.noTaxTag} ${styles.good}`}>No SS tax</span>
                  <span className={`${styles.noTaxTag} ${styles.good}`}>No sales tax</span>
                </div>
              </div>
              <div className={styles.noTaxCard}>
                <div className={styles.noTaxState}>South Dakota</div>
                <div className={styles.noTaxTags}>
                  <span className={`${styles.noTaxTag} ${styles.good}`}>No income tax</span>
                  <span className={`${styles.noTaxTag} ${styles.good}`}>No SS tax</span>
                  <span className={`${styles.noTaxTag} ${styles.good}`}>#4 Healthcare</span>
                </div>
              </div>
              <div className={styles.noTaxCard}>
                <div className={styles.noTaxState}>Tennessee</div>
                <div className={styles.noTaxTags}>
                  <span className={`${styles.noTaxTag} ${styles.good}`}>No income tax</span>
                  <span className={`${styles.noTaxTag} ${styles.good}`}>No SS tax</span>
                  <span className={`${styles.noTaxTag} ${styles.good}`}>Affordable cities</span>
                </div>
              </div>
              <div className={styles.noTaxCard}>
                <div className={styles.noTaxState}>Texas</div>
                <div className={styles.noTaxTags}>
                  <span className={`${styles.noTaxTag} ${styles.good}`}>No income tax</span>
                  <span className={`${styles.noTaxTag} ${styles.good}`}>No SS tax</span>
                  <span className={`${styles.noTaxTag} ${styles.good}`}>No estate tax</span>
                </div>
              </div>
              <div className={styles.noTaxCard}>
                <div className={styles.noTaxState}>Wyoming</div>
                <div className={styles.noTaxTags}>
                  <span className={`${styles.noTaxTag} ${styles.good}`}>No income tax</span>
                  <span className={`${styles.noTaxTag} ${styles.good}`}>No SS tax</span>
                  <span className={`${styles.noTaxTag} ${styles.good}`}>#1 Overall Rank</span>
                </div>
              </div>
            </div>
            <p style={{fontSize: '12px', color: 'var(--text-light)'}}>*New Hampshire taxes interest and dividend income above certain thresholds, but not wages, pensions, Social Security, or retirement account withdrawals. Source: SmartAsset, Kiplinger 2026.</p>
          </section>

          <section id="grading">
            <div className={styles.sectionLabel}>Complete Tax Grading</div>
            <h2>All 50 States — Tax Grade for Retirees (A–F)</h2>
            <p>We graded each state A through F based on four tax factors: income tax rate on retirement income, Social Security taxation, property tax burden, and estate/inheritance tax. Grade A = Best for retirees. Grade F = Avoid for taxes.</p>
            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable} summary="Data comparison table">
                <thead>
                  <tr>
                    <th scope="col">State</th>
                    <th scope="col">Tax<br/>Grade</th>
                    <th scope="col">Income Tax<br/>(Max)</th>
                    <th scope="col">Taxes<br/>SS?</th>
                    <th scope="col">Avg. Prop.<br/>Tax</th>
                    <th scope="col">Estate Tax?</th>
                    <th scope="col">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Wyoming</strong></td><td><span className={`${styles.gradeBadge} ${styles.gradeAPlus}`}>A+</span></td><td>None</td><td className={styles.check}>No</td><td>0.53%</td><td className={styles.check}>None</td><td>Best overall tax state</td></tr>
                  <tr><td><strong>Florida</strong></td><td><span className={`${styles.gradeBadge} ${styles.gradeAPlus}`}>A+</span></td><td>None</td><td className={styles.check}>No</td><td>0.83%</td><td className={styles.check}>None</td><td>Best QOL + tax combo</td></tr>
                  <tr><td><strong>South Dakota</strong></td><td><span className={`${styles.gradeBadge} ${styles.gradeAPlus}`}>A+</span></td><td>None</td><td className={styles.check}>No</td><td>1.01%</td><td className={styles.check}>None</td><td>Top 5 healthcare too</td></tr>
                  <tr><td><strong>Nevada</strong></td><td><span className={`${styles.gradeBadge} ${styles.gradeA}`}>A</span></td><td>None</td><td className={styles.check}>No</td><td>0.57%</td><td className={styles.check}>None</td><td>No income or estate tax</td></tr>
                  <tr><td><strong>Tennessee</strong></td><td><span className={`${styles.gradeBadge} ${styles.gradeA}`}>A</span></td><td>None</td><td className={styles.check}>No</td><td>0.65%</td><td className={styles.check}>None</td><td>No income tax since 2021</td></tr>
                  <tr><td><strong>Texas</strong></td><td><span className={`${styles.gradeBadge} ${styles.gradeA}`}>A</span></td><td>None</td><td className={styles.check}>No</td><td>1.68%</td><td className={styles.check}>None</td><td>Higher property tax</td></tr>
                  <tr><td><strong>Alaska</strong></td><td><span className={`${styles.gradeBadge} ${styles.gradeA}`}>A</span></td><td>None</td><td className={styles.check}>No</td><td>1.04%</td><td className={styles.check}>None</td><td>Annual PFD dividend</td></tr>
                  <tr><td><strong>Delaware</strong></td><td><span className={`${styles.gradeBadge} ${styles.gradeA}`}>A</span></td><td>6.6%</td><td className={styles.check}>No</td><td>0.56%</td><td className={styles.check}>None</td><td>No sales tax; low property tax</td></tr>
                  <tr><td><strong>Pennsylvania</strong></td><td><span className={`${styles.gradeBadge} ${styles.gradeB}`}>B</span></td><td>3.07%</td><td className={styles.check}>No</td><td>1.35%</td><td className={styles.cross}>Inheritance tax</td><td>Flat 3.07%; SS exempt</td></tr>
                  <tr><td><strong>Mississippi</strong></td><td><span className={`${styles.gradeBadge} ${styles.gradeB}`}>B</span></td><td>5%</td><td className={styles.check}>No</td><td>0.79%</td><td className={styles.check}>None</td><td>Retirement income exempt</td></tr>
                  <tr><td><strong>Georgia</strong></td><td><span className={`${styles.gradeBadge} ${styles.gradeB}`}>B</span></td><td>5.49%</td><td className={styles.check}>No</td><td>0.90%</td><td className={styles.check}>None</td><td>Generous retirement exclusions</td></tr>
                  <tr><td><strong>North Carolina</strong></td><td><span className={`${styles.gradeBadge} ${styles.gradeB}`}>B</span></td><td>4.5%</td><td className={styles.check}>No</td><td>0.78%</td><td className={styles.check}>None</td><td>Flat rate; improving</td></tr>
                  <tr><td><strong>Iowa</strong></td><td><span className={`${styles.gradeBadge} ${styles.gradeB}`}>B</span></td><td>6%</td><td className={styles.check}>No</td><td>1.50%</td><td className={styles.cross}>Inheritance tax</td><td>Phasing out inheritance tax</td></tr>
                  <tr><td><strong>New York</strong></td><td><span className={`${styles.gradeBadge} ${styles.gradeD}`}>D</span></td><td>10.9%</td><td className={styles.check}>No</td><td>1.64%</td><td className={styles.cross}>Estate tax</td><td>High income and estate tax</td></tr>
                  <tr><td><strong>California</strong></td><td><span className={`${styles.gradeBadge} ${styles.gradeD}`}>D</span></td><td>13.3%</td><td className={styles.check}>No</td><td>0.73%</td><td className={styles.check}>None</td><td>Highest income tax in US</td></tr>
                  <tr><td><strong>Minnesota</strong></td><td><span className={`${styles.gradeBadge} ${styles.gradeC}`}>C</span></td><td>9.85%</td><td className={styles.cross}>Yes</td><td>1.10%</td><td className={styles.cross}>Estate tax</td><td>Taxes SS; high income tax</td></tr>
                  <tr><td><strong>Vermont</strong></td><td><span className={`${styles.gradeBadge} ${styles.gradeC}`}>C</span></td><td>8.75%</td><td className={styles.cross}>Yes</td><td>1.80%</td><td className={styles.cross}>Estate tax</td><td>Taxes SS + estate tax</td></tr>
                  <tr><td><strong>Connecticut</strong></td><td><span className={`${styles.gradeBadge} ${styles.gradeD}`}>D</span></td><td>6.99%</td><td className={styles.cross}>Yes</td><td>2.15%</td><td className={styles.cross}>Estate tax</td><td>Taxes SS + high property tax</td></tr>
                  <tr><td><strong>New Jersey</strong></td><td><span className={`${styles.gradeBadge} ${styles.gradeF}`}>F</span></td><td>10.75%</td><td className={styles.check}>No</td><td>2.47%</td><td className={styles.cross}>Estate + inh. tax</td><td>Highest property tax in US</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{fontSize: '12px', color: 'var(--text-light)'}}>Source: Kiplinger State Tax Guide 2026; SmartAsset 2026; Tax Foundation 2026. Property tax rates: average effective rates from Tax Foundation 2025. SS taxation thresholds and income tax rates reflect 2026 law.</p>
          </section>

          <section id="faq" aria-label="Frequently Asked Questions">
            <div className={styles.sectionLabel}>FAQ</div>
            <h2>Frequently Asked Questions</h2>
            
            <FAQItem 
              question="Which states do NOT tax Social Security benefits?" 
              answer="As of 2026, 41 states plus Washington D.C. do not tax Social Security benefits at the level. The 8 states that still tax Social Security income are: Colorado, Connecticut, Minnesota, Montana, New Mexico, Rhode Island, Utah, and Vermont. West Virginia eliminated its Social Security tax in 2026, joining Missouri, Kansas, and Nebraska which did so in 2024."
            />
            <FAQItem 
              question="What is the best state for taxes if I have a large IRA or 401(k)?" 
              answer="For retirees with large 401(k) and IRA balances who will be taking substantial Required Minimum Distributions (RMDs), the states with no income tax — Wyoming, Florida, Nevada, Tennessee, Texas, South Dakota, Alaska, and New Hampshire — offer the greatest advantage. A $100,000 annual IRA withdrawal in California (13.3% state tax) costs $13,300 in state taxes alone. The same withdrawal in Wyoming costs $0. Over 20 years, that difference exceeds $266,000 (before investment returns)."
            />
            <FAQItem 
              question="Does moving to a tax-friendly state before retirement make sense?" 
              answer="Generally yes — if you're planning to move anyway, timing the move before you start taking large retirement distributions can be advantageous. However, some states (like California) have aggressive tax enforcement and may attempt to tax income earned while you were a resident. Establish a clear domicile in the new state — get a driver's license, register to vote, and spend the majority of your time there — before taking large retirement distributions to ensure you're definitively no longer a California (or other high-tax state) resident."
            />
            <FAQItem 
              question="Are there states with no estate tax?" 
              answer="The majority of states have no estate tax. As of 2026, only 12 states plus D.C. still impose an estate tax: Connecticut, Hawaii, Illinois, Maine, Maryland, Massachusetts, Minnesota, New York, Oregon, Rhode Island, Vermont, and Washington. Six states have an inheritance tax (imposed on heirs): Iowa, Kentucky, Maryland, Nebraska, New Jersey, and Pennsylvania. Maryland is the only state with both. If estate planning is a priority, these are key states to avoid or plan carefully around."
            />
          </section>

          <div className={styles.sourcesBox}>
            <h4>Sources</h4>
            <ul>
              <li>Kiplinger — State Tax Guide 2026</li>
              <li>SmartAsset — State Tax Comparison for Retirees 2026</li>
              <li>Tax Foundation — State Individual Income Tax Rates 2026</li>
              <li>Tax Foundation — Property Taxes by State 2025</li>
              <li>Social Security Administration — State Taxation of Benefits 2026</li>
              <li>Plootus Research — State Retirement Tax Analysis 2026</li>
              <li>West Virginia Legislature — SB 474 (SS Tax Elimination, 2026)</li>
              <li>Nebraska, Missouri, Kansas — SS Tax Repeal Legislation, 2024</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles.sidebarCard}>
            <h4>On This Page</h4>
            <ul className={styles.tocList}>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#no-income-tax">No Income Tax States</a></li>
              <li><a href="#grading">All 50 States Graded</a></li>
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
              <li><div onClick={() => router.push('/best-states-to-retire')} style={{cursor: 'pointer'}}>Best States to Retire 2026</div></li>
              <li><div onClick={() => router.push('/cheapest-states-to-retire')} style={{cursor: 'pointer'}}>Cheapest States to Retire</div></li>
              <li><div onClick={() => router.push('/how-much-to-retire')} style={{cursor: 'pointer'}}>How Much Do I Need?</div></li>
              <li><div onClick={() => router.push('/social-security-benefits')} style={{cursor: 'pointer'}}>Social Security Guide</div></li>
              <li><div onClick={() => router.push('/how-to-plan-retirement')} style={{cursor: 'pointer'}}>Retirement Planning Guide</div></li>
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

export default TaxFriendlyStatesForRetirees;
