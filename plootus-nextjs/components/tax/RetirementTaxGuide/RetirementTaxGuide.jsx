import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './RetirementTaxGuide.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const RetirementTaxGuide = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <HubNav />

      <div className={styles.hero}>
        <div className={styles.heroBg}>TAXES</div>
        <div className={styles.heroInner}>
          <p className={styles.heroTag}>🧮 Pillar Guide · Complete Retirement Tax Strategy · 2026</p>
          <h1>Retirement Tax Guide 2026: Every Account, Every Strategy</h1>
          <p className={styles.heroDeck}>
            How every type of retirement income is taxed, the optimal account withdrawal order, Roth conversion strategy, Social Security tax management, RMD planning, and state tax decisions. The only retirement tax guide most people need.
          </p>
          <div className={styles.heroMeta}>
            <span>📅 Updated April 2026</span>
            <span>⏱ 12 min read</span>
            <span>📚 SECURE Act 2.0</span>
            <span>📌 2026 IRS Rules</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>$0</span>
            <span className={styles.statLabel}>Tax on Roth Qualified Withdrawals</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>85%</span>
            <span className={styles.statLabel}>Max % of SS Benefits Taxable</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>$3K</span>
            <span className={styles.statLabel}>Annual Capital Loss Deduction Limit</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>73</span>
            <span className={styles.statLabel}>Age RMDs Begin — SECURE 2.0</span>
          </div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent} role="main">
          
          <section id="income-types">
            <p className={styles.sectionLabel}>Start Here</p>
            <h2>How Each Type of Retirement Income Is Taxed</h2>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Income Source</th>
                  <th>Federal Tax Treatment</th>
                  <th>State Tax?</th>
                  <th>Affects SS Taxation?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Traditional 401(k) / IRA Withdrawal</strong></td>
                  <td className={styles.red}>Ordinary income rates (10%–37%)</td>
                  <td>Usually yes</td>
                  <td className={styles.red}>Yes — adds to provisional income</td>
                </tr>
                <tr>
                  <td><strong>Roth IRA / Roth 401(k) Withdrawal (qualified)</strong></td>
                  <td className={styles.green}>Tax-free</td>
                  <td>Usually no</td>
                  <td className={styles.green}>No</td>
                </tr>
                <tr>
                  <td><strong>Social Security Benefits</strong></td>
                  <td>0%, 50%, or 85% taxable (based on provisional income)</td>
                  <td>Varies by state</td>
                  <td>N/A (is the source)</td>
                </tr>
                <tr>
                  <td><strong>Pension / Annuity Income</strong></td>
                  <td className={styles.red}>Ordinary income rates</td>
                  <td>Varies; some states exempt pensions</td>
                  <td className={styles.red}>Yes</td>
                </tr>
                <tr>
                  <td><strong>Long-Term Capital Gains</strong></td>
                  <td className={styles.green}>0%, 15%, or 20% (LTCG rates)</td>
                  <td>Usually yes (as ordinary income in most states)</td>
                  <td className={styles.red}>Yes — adds to provisional income</td>
                </tr>
                <tr>
                  <td><strong>Short-Term Capital Gains</strong></td>
                  <td className={styles.red}>Ordinary income rates</td>
                  <td>Yes</td>
                  <td className={styles.red}>Yes</td>
                </tr>
                <tr>
                  <td><strong>Dividends (Qualified)</strong></td>
                  <td className={styles.green}>0%, 15%, or 20% (LTCG rates)</td>
                  <td>Usually yes</td>
                  <td className={styles.red}>Yes</td>
                </tr>
                <tr>
                  <td><strong>Dividends (Ordinary / Non-qualified)</strong></td>
                  <td className={styles.red}>Ordinary income rates</td>
                  <td>Yes</td>
                  <td className={styles.red}>Yes</td>
                </tr>
                <tr>
                  <td><strong>HSA Withdrawals (qualified medical)</strong></td>
                  <td className={styles.green}>Tax-free</td>
                  <td>Usually no</td>
                  <td className={styles.green}>No</td>
                </tr>
                <tr>
                  <td><strong>Municipal Bond Interest</strong></td>
                  <td className={styles.green}>Federal tax-free</td>
                  <td>Usually state-tax-free if in-state bond</td>
                  <td className={styles.red}>Yes — counts in provisional income</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="withdrawal-order">
            <p className={styles.sectionLabel}>Withdrawal Strategy</p>
            <h2>The Optimal Retirement Account Withdrawal Order</h2>
            <p>The sequence in which you draw from your accounts is one of the highest-leverage tax decisions in retirement. The conventional tax-efficient order:</p>
            <ol>
              <li><strong>Required Minimum Distributions (first — mandatory):</strong> Take your RMD from Traditional IRA/401(k). You have no choice — failure to take the full RMD results in a 25% excise tax on the missed amount.</li>
              <li><strong>Taxable brokerage accounts:</strong> Withdraw next from taxable accounts. Long-term gains are taxed at 0%–20% (vs. 10%–37% for ordinary income). Your original cost basis comes out tax-free.</li>
              <li><strong>Tax-deferred accounts (Traditional IRA / 401(k)):</strong> Withdraw to fill remaining budget needs — but manage carefully to stay in the lowest bracket possible and avoid triggering SS taxation cliffs or IRMAA thresholds.</li>
              <li><strong>Tax-free accounts (Roth IRA / Roth 401(k)):</strong> Draw from Roth last. These assets grow tax-free, have no RMDs, and can be left as a tax-free legacy for heirs.</li>
            </ol>
            
            <div className={styles.infoBox}>
              <p>📌 <strong>Exception to the rule:</strong> If you're doing Roth conversions in low-income years, you may want to draw heavily from Roth to cover living expenses while converting traditional IRA to Roth — this sequencing can be more valuable than strict withdrawal order adherence.</p>
            </div>
          </section>

          <section id="social-security">
            <h2>Social Security Tax: The Provisional Income Formula</h2>
            <p>Up to 85% of Social Security benefits are taxable, depending on your "provisional income" (also called combined income):</p>
            <div className={styles.highlightBox}>
              <p>📌 <strong>Provisional Income = AGI + Tax-Exempt Interest + 50% of Social Security Benefits</strong></p>
            </div>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Filing Status</th>
                  <th>Provisional Income</th>
                  <th>% of SS Benefits Taxable</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="3">Single</td>
                  <td className={styles.green}>Below $25,000</td>
                  <td className={styles.green}>0%</td>
                </tr>
                <tr>
                  <td>$25,000–$34,000</td>
                  <td className={styles.gold}>Up to 50%</td>
                </tr>
                <tr>
                  <td className={styles.red}>Above $34,000</td>
                  <td className={styles.red}>Up to 85%</td>
                </tr>
                <tr>
                  <td rowSpan="3">Married Filing Jointly</td>
                  <td className={styles.green}>Below $32,000</td>
                  <td className={styles.green}>0%</td>
                </tr>
                <tr>
                  <td>$32,000–$44,000</td>
                  <td className={styles.gold}>Up to 50%</td>
                </tr>
                <tr>
                  <td className={styles.red}>Above $44,000</td>
                  <td className={styles.red}>Up to 85%</td>
                </tr>
              </tbody>
            </table>
            <p>Key strategies to reduce SS taxation: draw from Roth (not counted in provisional income), use QCDs instead of IRA withdrawals, time capital gain realizations carefully.</p>
          </section>

          <section id="rmds">
            <h2>RMD Tax Planning: Strategies to Reduce the Bite</h2>
            <p>Required Minimum Distributions from Traditional IRAs and 401(k)s are taxed as ordinary income and stack on top of all other retirement income. Strategies to reduce the RMD tax burden:</p>
            <ul>
              <li><strong>Roth conversions before age 73:</strong> Every dollar converted to Roth is one less dollar subject to future RMDs. Converting during the corridor window reduces lifetime RMDs dramatically.</li>
              <li><strong>Qualified Charitable Distributions (QCDs):</strong> Donate directly from your IRA to charity (up to $105,000/year age 70½+). QCDs satisfy your RMD without adding to your AGI.</li>
              <li><strong>Still-working exception:</strong> If you're still working at 73 and own less than 5% of the company, you can delay RMDs from your current employer's 401(k) until you retire.</li>
              <li><strong>Delay first RMD carefully:</strong> You can delay your very first RMD to April 1 of the following year — but that means two RMDs in one year. Often not worth it unless tax circumstances are dramatically different.</li>
            </ul>
          </section>

          <section id="roth">
            <h2>The Roth Conversion Corridor: Your Most Valuable Tax Window</h2>
            <p>The years between retirement and Social Security/RMD onset — typically ages 60–73 — represent the most powerful tax-planning window of your financial life. Income drops to its lowest point, enabling Roth conversions at rock-bottom rates.</p>
            
            <div className={styles.greenBox}>
              <p>✓ <strong>The corridor math:</strong> A married couple retiring at 62 with $1.5M in Traditional IRA assets and $50,000/year in living expenses (covered from savings, not IRA) could convert $50,000–$87,000/year to Roth at the 12% tax rate for 11 years before RMDs begin. Total tax savings vs. converting later at 22%+: potentially $100,000–$200,000 over retirement.</p>
            </div>
          </section>

          <section id="state-taxes">
            <h2>State Taxes: The Multiplier on Every Retirement Decision</h2>
            <p>State taxes on retirement income vary enormously. The right state choice can save $3,000–$15,000/year in taxes — and several hundred thousand dollars over a 25-year retirement.</p>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>State Tax Treatment</th>
                  <th>States</th>
                  <th>Estimated Annual Savings vs. High-Tax States</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.green}><strong>No state income tax at all</strong></td>
                  <td>FL, TX, WA, NV, WY, SD, TN, AK, NH</td>
                  <td className={styles.green}>$3,000–$15,000+/year</td>
                </tr>
                <tr>
                  <td className={styles.hi}><strong>No tax on SS + pension</strong></td>
                  <td>IL, PA, MS + many others</td>
                  <td className={styles.hi}>$1,000–$5,000/year</td>
                </tr>
                <tr>
                  <td className={styles.gold}><strong>Partial exemptions</strong></td>
                  <td>Most remaining states</td>
                  <td className={styles.gold}>$500–$3,000/year</td>
                </tr>
                <tr>
                  <td className={styles.red}><strong>Full tax on retirement income</strong></td>
                  <td>CA, NY, NJ, MN, OR</td>
                  <td className={styles.red}>Baseline (highest cost)</td>
                </tr>
              </tbody>
            </table>
            <p>See the full 50-state analysis at <a onClick={() => router.push('/tax-friendly-states-for-retirees')} style={{ color: 'var(--blue)', cursor: 'pointer' }}>Tax-Friendly States for Retirees</a>.</p>
          </section>

          <section id="strategies">
            <p className={styles.sectionLabel}>Action Plan</p>
            <h2>Top 10 Retirement Tax-Reduction Strategies</h2>
            <ol>
              <li><strong>Execute Roth conversions during the conversion corridor</strong> (ages 60–73) to fill the 12% bracket and reduce future RMDs</li>
              <li><strong>Sequence withdrawals tax-efficiently</strong>: RMDs → taxable accounts → traditional IRA → Roth</li>
              <li><strong>Manage income to stay in the 0% LTCG bracket</strong> ($96,700 MFJ taxable income threshold) through Roth withdrawals and QCDs</li>
              <li><strong>Use QCDs for charitable giving</strong> (up to $105,000/year) instead of cash donations to reduce AGI and provisional income</li>
              <li><strong>Delay Social Security</strong> to age 70 if possible to maximize the non-taxable and tax-advantaged income from Roth during the wait period</li>
              <li><strong>Manage IRMAA thresholds</strong>: Keep MAGI below $106,000 (single) / $212,000 (MFJ) to avoid Medicare premium surcharges</li>
              <li><strong>Harvest capital losses annually</strong> in taxable accounts to offset gains and reduce taxable income</li>
              <li><strong>Maximize HSA contributions</strong> in pre-retirement years; use HSA tax-free for Medicare premiums and medical costs in retirement</li>
              <li><strong>Consider relocating to a no/low-income-tax state</strong> before retirement — the savings compound over decades</li>
              <li><strong>Consider a Donor-Advised Fund</strong> for large charitable contributions — bunching several years of giving can let you itemize in the donation year and take the standard deduction in others</li>
            </ol>
          </section>

          <section className={styles.faqSection} id="faq">
            <h2>Frequently Asked Questions</h2>
            
            {[
              {
                q: "How is retirement income taxed?",
                a: "Retirement income is taxed differently by type. Traditional 401(k) and IRA withdrawals are taxed as ordinary income (10%–37%). Roth IRA qualified withdrawals are tax-free. Social Security is 0–85% federally taxable based on provisional income. Long-term capital gains from taxable accounts are taxed at 0%, 15%, or 20%. Pensions are generally taxed as ordinary income. HSA withdrawals for qualified medical expenses are tax-free."
              },
              {
                q: "What is the best way to minimize taxes in retirement?",
                a: "The highest-impact strategies: (1) Do Roth conversions during the low-income years before RMDs begin. (2) Sequence withdrawals from taxable accounts first (LTCG rates), then traditional IRA (fill brackets), then Roth last. (3) Use QCDs for charitable giving to avoid AGI inclusion. (4) Manage income to stay below IRMAA thresholds and the 0% LTCG line. (5) Consider relocating to a no-income-tax state before retirement."
              },
              {
                q: "At what age do Required Minimum Distributions begin?",
                a: "Under the SECURE Act 2.0, RMDs now begin at age 73 for anyone born after December 31, 1950. The RMD age will rise to 75 for anyone who turns 74 after December 31, 2032. Roth IRAs have no RMDs during the owner's lifetime (starting 2024, Roth 401(k)s also have no RMDs, per SECURE Act 2.0)."
              },
              {
                q: "Is Social Security income taxable in retirement?",
                a: "Yes, at the federal level, up to 85% of Social Security benefits may be taxable — based on your \"provisional income.\" If provisional income exceeds $34,000 (single) or $44,000 (MFJ), up to 85% of your SS benefit is included in taxable income. At the state level, 28 states fully exempt SS from income tax; nine states have no income tax at all; the remaining states have varying rules."
              },
              {
                q: "Can I do a Roth conversion after age 72?",
                a: "Yes, there is no age limit on Roth conversions. However, you must take your RMD before converting — you cannot convert your RMD amount itself. Converting after RMDs begin is less tax-efficient because your income is already higher, but it may still be worthwhile for estate planning purposes or if you have years with unusually low income."
              }
            ].map((faq, idx) => (
              <div 
                key={idx} 
                className={`${styles.faqItem} ${openFaq === idx ? styles.open : ''}`}
              >
                <button className={styles.faqQ} onClick={() => toggleFaq(idx)}>
                  {faq.q} 
                  <span className={styles.faqIcon}>+</span>
                </button>
                <div className={styles.faqA}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </section>

          <div className={styles.sourcesBox}>
            <strong>Sources</strong>
            <ul>
              <li>IRS Publication 590-A & 590-B — IRA contributions and distributions</li>
              <li>IRS Publication 554 — Tax Guide for Seniors</li>
              <li>IRS Publication 915 — Social Security and Equivalent Railroad Retirement Benefits</li>
              <li>IRS Rev. Proc. 2025-40 — 2026 inflation adjustments</li>
              <li>SECURE Act 2.0 (P.L. 117-328) — RMD changes</li>
              <li>Plootus Research — April 2026</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.tocBox}>
            <h3>On This Page</h3>
            <ol>
              <li><a href="#income-types">How Each Income Type Is Taxed</a></li>
              <li><a href="#withdrawal-order">Optimal Withdrawal Order</a></li>
              <li><a href="#social-security">Social Security Tax</a></li>
              <li><a href="#rmds">RMD Tax Planning</a></li>
              <li><a href="#roth">Roth Conversion Corridor</a></li>
              <li><a href="#state-taxes">State Tax Considerations</a></li>
              <li><a href="#strategies">Top Tax-Reduction Strategies</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>

          <div className={styles.ctaCard}>
            <h4>What's my retirement number?</h4>
            <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
            <div onClick={() => router.push('/retirement-calculator')} className={styles.ctaBtn}>Check Here</div>
          </div>

          <div className={styles.sidebarCard}>
            <h4>Related Tax Guides</h4>
            <ul className={styles.relatedLinks}>
              <li><a onClick={() => router.push('/federal-income-tax-brackets')}>Federal Tax Brackets 2026</a></li>
              <li><a onClick={() => router.push('/capital-gains-tax-rates')}>Capital Gains Tax Rates</a></li>
              <li><a onClick={() => router.push('/roth-conversion-strategy')}>Roth Conversion Strategy</a></li>
              <li><a onClick={() => router.push('/ira-contribution-limits')}>IRA Contribution Limits</a></li>
              <li><a onClick={() => router.push('/standard-deduction-2026')}>Standard Deduction 2026</a></li>
              <li><a onClick={() => router.push('/tax-loss-harvesting')}>Tax-Loss Harvesting Guide</a></li>
            </ul>
          </div>
        </aside>
      </div>
      
      <PartnersSection 
        titleFontSize="28px !important"
        titleFontWeight={800}
        titleColor="var(--navy) !important"
        titleLetterSpacing="-0.3px"
        logoOpacity={0.8}
        logoGrayscale={100}
        paddingTop="40px"
        paddingBottom="60px"
      />
    </div>
  );
};

export default RetirementTaxGuide;
