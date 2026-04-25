import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './AverageIraBalance.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const AverageIraBalance = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'What is the average IRA balance?',
      a: "According to Vanguard's How America Saves 2025 (covering approximately 5 million participants across 1,400+ plans), the average IRA balance across all age groups is approximately $127,534. The median IRA balance is significantly lower at approximately $38,000. Fidelity's Q4 2025 Retirement Analysis (24.8 million participants) reports similar figures. The Roth IRA average is lower than the Traditional IRA average primarily because Roth IRAs are used more by younger workers who have had less time to accumulate. Source: Vanguard 2025; Fidelity Q4 2025."
    },
    {
      q: 'How much should I have in my IRA at 60?',
      a: "There's no universal target for IRA balances specifically — the key is your total retirement savings across all accounts relative to your income and spending needs. That said, for context: the average IRA balance for the 55–64 age group is approximately $329,800, and the median is $202,000. Fidelity recommends having 8× your salary saved across all retirement accounts by age 60. If your salary is $80,000, that's $640,000 total — which might be split across a 401(k), IRA, and other accounts. Also: starting at age 60 (until 63), SECURE 2.0 allows a $35,750 total annual contribution to your 403(b)/401(k) — use it. Source: Vanguard 2025; Fidelity 2026; IRS 2026."
    },
    {
      q: 'What is the IRA contribution limit for 2026?',
      a: "The IRA contribution limit for 2026 is $7,000 for people under age 50 and $8,000 for those age 50 and older (the $1,000 catch-up contribution). This limit applies to the total of all your IRA accounts combined — you cannot contribute $7,000 to both a Roth IRA and a Traditional IRA in the same year (you could split it, e.g., $3,500 each). The Roth IRA income phase-out for 2026 is estimated at $153,000–$168,000 for single filers and $242,000+ for married filing jointly. Above these limits, use the Backdoor Roth IRA strategy. Source: IRS 2026 (projected based on inflation adjustments)."
    },
    {
      q: 'Does a Roth IRA or Traditional IRA grow faster?',
      a: "Both Roth and Traditional IRAs grow at the same rate before taxes — it's the same money invested in the same funds. The difference is when taxes are paid. In a Roth IRA, you pay taxes on contributions now, and all growth and withdrawals in retirement are completely tax-free. In a Traditional IRA, you get a tax deduction now (if eligible), but all withdrawals in retirement are taxed as ordinary income. A Roth IRA effectively grows 'faster' in terms of after-tax value if your tax rate in retirement is the same as or higher than your current rate. Traditional IRA is better if you expect a lower tax rate in retirement. Most planners recommend a mix of both for tax diversification. Source: IRS; Plootus Research 2026."
    }
  ];

  return (
    <div className={styles.container}>
      <HubNav />

      <div className={styles.hero}>
        <div className={styles['hero-inner']}>
          <p className={styles['hero-eyebrow']}>📊 Data Guide · Vanguard + Fidelity 2025 Data</p>
          <h1>Average IRA Balance by Age in 2026: Roth &amp; Traditional Benchmarks</h1>
          <p className={styles['hero-deck']}>
            The average IRA balance is $127,534 — but most Americans have far less. See what IRA savers actually hold at every age, the 2026 contribution limits, and the strategies that separate ahead-of-schedule savers from the rest.
          </p>
          <div className={styles['hero-meta']}>
            <span>📅 Updated April 2026</span>
            <span>⏱ 7 min read</span>
            <span>📚 Sources: Vanguard, Fidelity, IRS 2026</span>
          </div>
        </div>
      </div>

      <div className={styles['stat-strip']}>
        <div className={styles['stat-strip-inner']}>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$127,534</div>
            <div className={styles['stat-label']}>Avg. IRA Balance (All Ages)</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$80,386</div>
            <div className={styles['stat-label']}>Avg. Roth IRA Balance</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$7,000</div>
            <div className={styles['stat-label']}>2026 IRA Contribution Limit</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$8,000</div>
            <div className={styles['stat-label']}>Age 50+ Contribution Limit</div>
          </div>
        </div>
      </div>

      <div className={styles['page-body']} itemScope itemType="https://schema.org/Article">
        <main className={styles['main-content']} role="main" aria-label="Average IRA Balance by Age — Data and Benchmarks">
          <section id="overview">
            <p className={styles['section-label']}>Overview</p>
            <h2>IRA vs. Roth IRA: Two Different Accounts, Same Limit</h2>
            <p>
              There are two main types of individual retirement accounts — and you can contribute to both in the same year (up to the combined annual limit):
            </p>
            <div className={styles['two-col']}>
              <div className={styles.card}>
                <h4>📋 Traditional IRA</h4>
                <p><strong>Tax now or later:</strong> Contributions may be tax-deductible. All growth and withdrawals in retirement are taxed as ordinary income. RMDs begin at age 73. Best for those expecting lower taxes in retirement.</p>
              </div>
              <div className={styles.card}>
                <h4>🌱 Roth IRA</h4>
                <p><strong>Tax now, free later:</strong> Contributions are after-tax. All growth and qualified withdrawals are completely tax-free. No RMDs during lifetime. Best for those expecting higher taxes in retirement or wanting maximum flexibility.</p>
              </div>
            </div>
          </section>

          <section id="table">
            <p className={styles['section-label']}>The Data</p>
            <h2>Average IRA &amp; Roth IRA Balance by Age (2026 Data)</h2>
            <p>Data sourced from Vanguard How America Saves 2025 and Fidelity Q4 2025 Retirement Analysis — the two most comprehensive retirement savings databases available.</p>
            <table className={styles['data-table']} summary="Average and median IRA and Roth IRA balances by age group from Vanguard 2025 and Fidelity Q4 2025">
              <thead>
                <tr>
                  <th scope="col">Age Group</th>
                  <th scope="col">Average<br />Balance</th>
                  <th scope="col">Median<br />Balance</th>
                  <th scope="col">Top 10%<br />Balance</th>
                  <th scope="col">Recommended<br />Target</th>
                  <th scope="col">Key Strategy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.hi}>Under 25</td>
                  <td data-type="statistic">$8,300</td>
                  <td data-type="statistic">$7,200</td>
                  <td data-type="statistic">$10,000</td>
                  <td data-type="statistic">$9,500</td>
                  <td style={{ fontSize: '12px' }}>Open Roth IRA now — time is your biggest advantage</td>
                </tr>
                <tr>
                  <td className={styles.hi}>25–34</td>
                  <td data-type="statistic">$28,400</td>
                  <td data-type="statistic">$25,000</td>
                  <td data-type="statistic">$35,000</td>
                  <td data-type="statistic">$28,000</td>
                  <td style={{ fontSize: '12px' }}>Max Roth IRA annually; contribute to 401(k) match</td>
                </tr>
                <tr>
                  <td className={styles.hi}>35–44</td>
                  <td data-type="statistic">$87,600</td>
                  <td data-type="statistic">$58,000</td>
                  <td data-type="statistic">$102,000</td>
                  <td data-type="statistic">$71,000</td>
                  <td style={{ fontSize: '12px' }}>Consider Backdoor Roth if income exceeds phase-out</td>
                </tr>
                <tr>
                  <td className={styles.hi}>45–54</td>
                  <td data-type="statistic">$197,300</td>
                  <td data-type="statistic">$122,000</td>
                  <td data-type="statistic">$225,000</td>
                  <td data-type="statistic">$142,000</td>
                  <td style={{ fontSize: '12px' }}>Age 50+ catch-up begins ($1K extra IRA/year)</td>
                </tr>
                <tr>
                  <td className={styles.hi}>55–64</td>
                  <td data-type="statistic">$329,800</td>
                  <td data-type="statistic">$202,000</td>
                  <td data-type="statistic">$356,000</td>
                  <td data-type="statistic">$228,000</td>
                  <td style={{ fontSize: '12px' }}>Plan Roth conversions to reduce future RMDs</td>
                </tr>
                <tr>
                  <td className={styles.hi}>65–74</td>
                  <td data-type="statistic">$461,200</td>
                  <td data-type="statistic">$280,000</td>
                  <td data-type="statistic">$498,000</td>
                  <td data-type="statistic">$318,000</td>
                  <td style={{ fontSize: '12px' }}>RMDs begin at 73 for Traditional IRA; Roth IRA exempt</td>
                </tr>
                <tr>
                  <td className={styles.hi}>75+</td>
                  <td data-type="statistic">$385,400</td>
                  <td data-type="statistic">$239,000</td>
                  <td data-type="statistic">$421,000</td>
                  <td data-type="statistic">$270,000</td>
                  <td style={{ fontSize: '12px' }}>Coordinate RMDs with SS to minimize tax bracket creep</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: '12.5px', color: 'var(--text-light)', marginTop: '8px' }}>
              Sources: Vanguard How America Saves 2025; Fidelity Q4 2025 Retirement Analysis. Average figures skewed by high-balance outliers; median is more representative of typical accounts.
            </p>
          </section>

          <section id="limits">
            <p className={styles['section-label']}>2026 IRS Rules</p>
            <h2>IRA Contribution Limits &amp; Income Rules for 2026</h2>
            <table className={styles['data-table']} summary="IRA contribution limits and Roth IRA income phase-out ranges for 2026">
              <thead>
                <tr>
                  <th scope="col">Rule</th>
                  <th scope="col">Single / HoH</th>
                  <th scope="col">Married Filing Jointly</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Annual contribution limit (under 50)</td>
                  <td className={styles.hi}>$7,000</td>
                  <td className={styles.hi}>$7,000 per person</td>
                </tr>
                <tr>
                  <td>Annual contribution limit (age 50+)</td>
                  <td className={styles.hi}>$8,000</td>
                  <td className={styles.hi}>$8,000 per person</td>
                </tr>
                <tr>
                  <td>Roth IRA phase-out begins (2026 est.)</td>
                  <td>$153,000 MAGI</td>
                  <td>$242,000 MAGI</td>
                </tr>
                <tr>
                  <td>Roth IRA fully phased out (2026 est.)</td>
                  <td>$168,000 MAGI</td>
                  <td>$252,000 MAGI</td>
                </tr>
                <tr>
                  <td>Traditional IRA deductibility phase-out (active participant)</td>
                  <td>$79,000–$89,000</td>
                  <td>$126,000–$146,000</td>
                </tr>
                <tr>
                  <td>Backdoor Roth IRA available above?</td>
                  <td className={styles.green}>✅ Yes, any income</td>
                  <td className={styles.green}>✅ Yes, any income</td>
                </tr>
                <tr>
                  <td>Traditional IRA RMD start age (SECURE 2.0)</td>
                  <td colSpan="2">Age 73</td>
                </tr>
                <tr>
                  <td>Roth IRA RMD requirement</td>
                  <td colSpan="2" className={styles.green}>None — no RMDs during lifetime</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="faq" aria-label="Frequently Asked Questions" className={styles['faq-section']}>
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`${styles['faq-item']} ${openFaq === index ? styles['faq-item-open'] : ''}`}
              >
                <div className={styles['faq-q']} onClick={() => toggleFaq(index)}>
                  {faq.q}
                  <span>+</span>
                </div>
                {openFaq === index && (
                  <div className={styles['faq-a']} style={{ display: 'block' }}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </section>

          <div className={styles['cta-banner']}>
            <h3>Get Personalized IRA Recommendations</h3>
            <p>
              Plootus connects to your IRA and 401(k) accounts, shows your real balance versus benchmarks, and recommends the optimal fund selections — completely free.
            </p>
            <a href="/">Connect My IRA →</a>
          </div>

          <div className={styles['sources-box']}>
            <strong>📚 Sources</strong>
            <ul>
              <li>Vanguard Group, How America Saves 2025 (~5M participants, 1,400+ plans)</li>
              <li>Fidelity Investments, Q4 2025 Retirement Analysis (24.8M participants, 26,200 plans)</li>
              <li>Employee Benefit Research Institute, IRA Database 2024</li>
              <li>IRS, Retirement Topics: IRA Contribution Limits 2026 (irs.gov)</li>
              <li>IRS, Publication 590-A: Contributions to Individual Retirement Arrangements</li>
              <li>SECURE 2.0 Act (Consolidated Appropriations Act, 2023)</li>
              <li>Plootus Research 2026</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles['toc-box']}>
            <h3>On This Page</h3>
            <ul>
              <li><a href="#overview">IRA vs. Roth IRA</a></li>
              <li><a href="#table">Balance by Age Table</a></li>
              <li><a href="#limits">2026 Rules</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          </div>
          <div className={styles['cta-card']}>
            <h4>What's my retirement number?</h4>
            <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
            <a onClick={() => router.push('/retirement-calculator')} className={styles['cta-btn']}>
              Check Here
            </a>
          </div>
          <div className={`${styles['sidebar-card']} ${styles['related-card']}`}>
            <h4>Related Guides</h4>
            <a href="/roth-vs-traditional">→ Roth vs. Traditional IRA Calculator</a>
            <a href="/401k-balance-by-age">→ Average 401(k) Balance by Age</a>
            <a href="/hsa-contribution-limits">→ HSA Guide 2026</a>
            <a href="/how-much-to-retire">→ How Much Do I Need to Retire?</a>
            <a href="/roth-vs-traditional">→ Backdoor Roth IRA Guide</a>
          </div>
          <div className={styles['sidebar-card']} style={{ background: 'var(--off-white)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '8px' }}>
              Key Stat
            </p>
            <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.45, marginBottom: '5px' }}>
              "If you max your Roth IRA at $7,000/year from age 25 to 65 at 7% returns, you'd have approximately $1.5 million — 100% tax-free."
            </p>
            <p style={{ fontSize: '11px', color: 'var(--text-light)', margin: 0 }}>
              Source: Plootus Research 2026 / IRS projection
            </p>
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

export default AverageIraBalance;
