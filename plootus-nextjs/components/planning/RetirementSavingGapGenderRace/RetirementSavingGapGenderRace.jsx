import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './RetirementSavingGapGenderRace.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const RetirementSavingGapGenderRace = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={styles.container}>

      <HubNav />

      <div className={styles.hero}>
        <div className={styles['hero-inner']}>
          <div className={styles['hero-eyebrow']}>📊 Research Report · Plootus 2026 · Federal Reserve, U.S. Census, GAO</div>
          <h1>Retirement Savings Gap by Gender and Race: The Data Behind the Inequality</h1>
          <div className={styles['hero-deck']}>
            Women retire with 30–40% less than men. Black and Hispanic households hold a fraction of the retirement savings of white households. This isn't a behavior gap — it's a structural one, driven by wage gaps, career interruptions, part-time work rates, and unequal access to employer retirement plans.
          </div>
          <div className={styles['hero-meta']}>
            <span>By the Plootus Research Team</span>
            <span>Updated April 2026</span>
            <span>Sources: Federal Reserve SCF 2022, GAO 2022, U.S. Census Bureau, NIRS</span>
          </div>
        </div>
      </div>

      <div className={styles['stat-strip']}>
        <div className={styles['stat-strip-inner']}>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">30–40%</div>
            <div className={styles['stat-label']}>Less Retirement Savings: Women vs. Men</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$20K</div>
            <div className={styles['stat-label']}>Median Retirement Savings, Black Households</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$1M+</div>
            <div className={styles['stat-label']}>Lifetime Retirement Wealth Lost to Gender Pay Gap</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">47%</div>
            <div className={styles['stat-label']}>Women 65+ Rely Primarily on Social Security</div>
          </div>
        </div>
      </div>

      <div className={styles['page-body']} itemScope itemType="https://schema.org/Article">
        <main className={styles['main-content']} role="main" aria-label="Retirement Savings Gap by Gender and Race 2026">
          <section id="gender-gap">
            <div className={styles['section-label']}>Gender Gap</div>
            <h2>The Retirement Gender Gap — Why It Happens and How Big It Is</h2>
            <table className={styles['data-table']} summary="Retirement savings comparison between women and men across key metrics">
              <thead>
                <tr>
                  <th scope="col">Metric</th>
                  <th scope="col">Women</th>
                  <th scope="col">Men</th>
                  <th scope="col">Gap</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Median Balance<br />(All Ages)</td>
                  <td data-type="statistic">~$47,000</td>
                  <td data-type="statistic">~$89,000</td>
                  <td className={styles.bad}>47% less</td>
                </tr>
                <tr>
                  <td>Average SS<br />Benefit (2025)</td>
                  <td data-type="statistic">~$16,956/yr</td>
                  <td data-type="statistic">~$22,716/yr</td>
                  <td className={styles.bad}>25% less</td>
                </tr>
                <tr>
                  <td>% Relying<br />on SS</td>
                  <td data-type="statistic">47%</td>
                  <td data-type="statistic">28%</td>
                  <td className={styles.bad}>+19 pct pts</td>
                </tr>
                <tr>
                  <td>Average life expectancy at 65</td>
                  <td data-type="statistic">87 years</td>
                  <td data-type="statistic">83 years</td>
                  <td className={styles.bad}>4 more years to fund</td>
                </tr>
                <tr>
                  <td>Median wage (full-time workers, 2024)</td>
                  <td data-type="statistic">84¢ per $1</td>
                  <td data-type="statistic">$1.00</td>
                  <td className={styles.bad}>−16%</td>
                </tr>
              </tbody>
            </table>
            <p>Sources: GAO (2022); NIRS (2024); SSA Monthly Statistical Snapshot November 2025; BLS Current Population Survey 2024.</p>
          </section>

          <section id="race-gap">
            <div className={styles['section-label']}>Race Gap</div>
            <h2>Retirement Savings by Race — The Data</h2>
            <table className={styles['data-table']} summary="Median retirement savings by race and ethnicity">
              <thead>
                <tr>
                  <th scope="col">Race / Ethnicity</th>
                  <th scope="col">Median Account<br />Balance</th>
                  <th scope="col">% with No<br />Savings</th>
                  <th scope="col">Average SS<br />Benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>White non-Hispanic</td>
                  <td data-type="statistic" className={styles.green}>~$80,000</td>
                  <td>37%</td>
                  <td>~$25,100/yr</td>
                </tr>
                <tr>
                  <td>Asian</td>
                  <td data-type="statistic">~$68,000</td>
                  <td>34%</td>
                  <td>~$24,500/yr</td>
                </tr>
                <tr>
                  <td>Black / African American</td>
                  <td data-type="statistic" className={styles.bad}>~$20,000</td>
                  <td>65%</td>
                  <td>~$18,800/yr</td>
                </tr>
                <tr>
                  <td>Hispanic / Latino</td>
                  <td data-type="statistic" className={styles.bad}>~$6,000</td>
                  <td>71%</td>
                  <td>~$16,900/yr</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: '13px', color: 'var(--text-light)' }}>
              Sources: Federal Reserve Survey of Consumer Finances 2022; SSA Beneficiary Data 2025. Retirement account balance = 401(k), IRA, and other defined contribution plan balances combined.
            </p>
            <div className={styles['warn-box']}>
              <p>⚠️ The data above reflects systemic and structural factors — not individual behavior. Black and Hispanic workers are more likely to be employed in industries and job types without employer-sponsored retirement plans (food service, retail, domestic work), more likely to work part-time below plan enrollment thresholds, and more likely to carry higher student loan burdens relative to income.</p>
            </div>
          </section>

          <section id="solutions">
            <div className={styles['section-label']}>What Actually Helps</div>
            <h2>What Closes the Retirement Savings Gap — Policy and Personal Strategies</h2>
            <div className={styles['two-col']}>
              <div className={styles['info-box']}>
                <p><strong>Structural solutions (policy level):</strong> Automatic enrollment in 401(k) plans (proven to increase participation among lower-income workers by 40+%); Multiple Employer Plans (MEPs) for gig workers and part-time workers; Social Security credits for caregiving gaps; closing the gender pay gap; expanding EITC for working-age adults.</p>
              </div>
              <div className={styles['green-box']}>
                <p><strong>Individual strategies (action-oriented):</strong> Use Roth IRA if income is low (Roth IRA has no employer required — anyone with earned income can contribute); max HSA for healthcare buffer; delay Social Security to 70 (increases benefit by 24% vs FRA; especially powerful for women with longer life expectancies); supplement with part-time work in early retirement; choose states with no SS income tax to maximize income.</p>
              </div>
            </div>
          </section>

          <section id="faq" aria-label="Frequently Asked Questions" className={styles['faq-section']}>
            <h2>Frequently Asked Questions</h2>
            {[
              {
                q: 'Do women need more retirement savings than men?',
                a: "Yes — for two reasons. First, women have a longer average life expectancy (approximately 87 years at 65, versus 83 for men), meaning they need to fund approximately 4 more years of retirement. Second, women typically have lower Social Security benefits (reflecting lower lifetime earnings), creating a larger gap that personal savings must fill. A woman targeting the same retirement lifestyle as a man needs approximately $80,000–$150,000 more in retirement savings to account for the longer horizon, all else equal."
              },
              {
                q: 'How does the gender pay gap affect retirement savings?',
                a: "The retirement impact of the gender pay gap compounds over a career. A woman earning 84 cents per dollar earned by a man, over a 40-year career starting at $50,000, earns approximately $320,000 less in total wages. At a 10% savings rate, that's $32,000 less in direct contributions. But the compounding effect is much larger: $32,000 less invested, compounding at 7% for 20 years, represents approximately $124,000 in lost retirement savings. Total lifetime retirement wealth impact of the gender pay gap: commonly estimated at $400,000–$1,000,000+ depending on salary level and career length."
              }
            ].map((faq, index) => (
              <div key={index} className={`${styles['faq-item']} ${openFaq === index ? styles['faq-item-open'] : ''}`}>
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

          <div className={styles['sources-box']}>
            <strong>📚 Sources</strong>
            <ul>
              <li>Federal Reserve, Survey of Consumer Finances 2022</li>
              <li>U.S. Government Accountability Office (GAO), Retirement Security: Women Face Challenges in Ensuring Financial Security in Retirement, 2022</li>
              <li>National Institute on Retirement Security (NIRS), Shortchanged in Retirement 2024</li>
              <li>Bureau of Labor Statistics, Current Population Survey Annual Social and Economic Supplement 2024</li>
              <li>Social Security Administration, Beneficiary Data and Income Statistics 2025</li>
              <li>U.S. Census Bureau, American Community Survey 2023</li>
              <li>Plootus Research 2026</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles['toc-box']}>
            <h3>On This Page</h3>
            <ul>
              <li><a href="#gender-gap">Gender Gap</a></li>
              <li><a href="#race-gap">Race Gap</a></li>
              <li><a href="#solutions">Solutions</a></li>
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
            <a href="/social-security-benefits">→ Social Security Benefits Guide</a>
            <a href="/average-net-worth-by-age">→ Average Net Worth by Age</a>
            <a href="/best-states-to-retire">→ Best States to Retire</a>
            <a href="/roth-vs-traditional">→ Roth vs Traditional IRA</a>
          </div>
          <div className={styles['sidebar-card']} style={{ background: 'var(--off-white)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '8px' }}>Key Stat</p>
            <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.45, marginBottom: '5px' }}>"A woman needs approximately $80,000-$150,000 more in retirement savings than a man of the same age to fund the same lifestyle, due to longer average life expectancy."</p>
            <p style={{ fontSize: '11px', color: 'var(--text-light)', margin: 0 }}>Source: GAO 2022; NIRS 2024</p>
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

export default RetirementSavingGapGenderRace;
