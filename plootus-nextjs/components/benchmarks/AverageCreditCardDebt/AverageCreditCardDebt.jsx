import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './AverageCreditCardDebt.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const AverageCreditCardDebt = () => {
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
          <div className={styles['hero-eyebrow']}>💳 Research Report · Plootus 2026 · WalletHub, Federal Reserve, Experian</div>
          <h1>Average Credit Card Debt by Age and State (2026)</h1>
          <div className={styles['hero-deck']}>
            The average American household carries $6,501 in credit card debt. At typical interest rates of 24–27%, that's $1,650–$1,755 per year in pure interest — money that's not compounding in your retirement accounts.
          </div>
          <div className={styles['hero-meta']}>
            <span>By the Plootus Research Team</span>
            <span>Updated April 2026</span>
            <span>Sources: WalletHub, Federal Reserve, Experian, NY Fed</span>
          </div>
        </div>
      </div>

      <div className={styles['stat-strip']}>
        <div className={styles['stat-strip-inner']}>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$6,501</div>
            <div className={styles['stat-label']}>Average Credit Card Debt per Household (2026)</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$1.21T</div>
            <div className={styles['stat-label']}>Total U.S. Credit Card Debt</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">26.3%</div>
            <div className={styles['stat-label']}>Average APR Ages 18-29</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">3–7 yrs</div>
            <div className={styles['stat-label']}>Retirement Delay from High CC Debt</div>
          </div>
        </div>
      </div>

      <div className={styles['page-body']} itemScope itemType="https://schema.org/Article">
        <main className={styles['main-content']} role="main" aria-label="Average Credit Card Debt by Age and State 2026">
          <section id="by-age">
            <div className={styles['section-label']}>By Age Group</div>
            <h2>Average Credit Card Debt by Age (2026)</h2>
            <table className={styles['data-table']} summary="Average credit card debt by age group with APR and generation">
              <thead>
                <tr>
                  <th scope="col">Age Group</th>
                  <th scope="col">Avg. CC<br />Debt</th>
                  <th scope="col">Median CC<br />Debt</th>
                  <th scope="col">Avg. APR</th>
                  <th scope="col">Generation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>18–29</strong></td>
                  <td data-type="statistic">$2,570</td>
                  <td data-type="statistic">$1,200</td>
                  <td>26.3%</td>
                  <td><span className={`${styles['badge-blue']} ${styles.badge}`}>Gen Z</span></td>
                </tr>
                <tr>
                  <td><strong>30–39</strong></td>
                  <td data-type="statistic">$6,910</td>
                  <td data-type="statistic">$3,500</td>
                  <td>25.8%</td>
                  <td><span className={`${styles['badge-blue']} ${styles.badge}`}>Millennial</span></td>
                </tr>
                <tr>
                  <td><strong>40–49</strong></td>
                  <td data-type="statistic">$9,620</td>
                  <td data-type="statistic">$5,100</td>
                  <td>25.7%</td>
                  <td><span className={`${styles['badge-blue']} ${styles.badge}`}>Gen X</span></td>
                </tr>
                <tr>
                  <td><strong>50–59</strong></td>
                  <td data-type="statistic">$9,960</td>
                  <td data-type="statistic">$5,400</td>
                  <td>22.4%</td>
                  <td><span className={`${styles['badge-blue']} ${styles.badge}`}>Boomer/X</span></td>
                </tr>
                <tr>
                  <td><strong>60–74</strong></td>
                  <td data-type="statistic">$6,530</td>
                  <td data-type="statistic">$3,100</td>
                  <td>20.1%</td>
                  <td><span className={`${styles['badge-blue']} ${styles.badge}`}>Boomer</span></td>
                </tr>
                <tr>
                  <td><strong>75+</strong></td>
                  <td data-type="statistic">$3,990</td>
                  <td data-type="statistic">$1,800</td>
                  <td>18.5%</td>
                  <td><span className={`${styles['badge-blue']} ${styles.badge}`}>Silent</span></td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: '13px', color: 'var(--text-light)' }}>Sources: WalletHub Q1 2026; Federal Reserve SCF 2022; Experian State of Credit 2025.</p>
          </section>

          <section id="by-state">
            <div className={styles['section-label']}>By State</div>
            <h2>Average Credit Card Debt by State (2026) — Select States</h2>
            <table className={styles['data-table']} summary="Average credit card debt by state">
              <thead>
                <tr>
                  <th scope="col">State</th>
                  <th scope="col">Avg. CC<br />Debt</th>
                  <th scope="col">National<br />Rank</th>
                  <th scope="col">Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Alaska</strong></td>
                  <td data-type="statistic">$7,891</td>
                  <td style={{ fontSize: '12px' }}>Highest</td>
                  <td><span className={`${styles['badge-gold']} ${styles.badge}`}>C</span></td>
                </tr>
                <tr>
                  <td><strong>Connecticut</strong></td>
                  <td data-type="statistic">$7,258</td>
                  <td style={{ fontSize: '12px' }}>2nd highest</td>
                  <td><span className={`${styles['badge-gold']} ${styles.badge}`}>C</span></td>
                </tr>
                <tr>
                  <td><strong>Virginia</strong></td>
                  <td data-type="statistic">$7,124</td>
                  <td style={{ fontSize: '12px' }}>3rd</td>
                  <td><span className={`${styles['badge-gold']} ${styles.badge}`}>C+</span></td>
                </tr>
                <tr>
                  <td><strong>Maryland</strong></td>
                  <td data-type="statistic">$7,032</td>
                  <td style={{ fontSize: '12px' }}>4th</td>
                  <td><span className={`${styles['badge-gold']} ${styles.badge}`}>C+</span></td>
                </tr>
                <tr>
                  <td><strong>New Jersey</strong></td>
                  <td data-type="statistic">$6,890</td>
                  <td style={{ fontSize: '12px' }}>5th</td>
                  <td><span className={`${styles['badge-gold']} ${styles.badge}`}>C</span></td>
                </tr>
                <tr>
                  <td><strong>Texas</strong></td>
                  <td data-type="statistic">$6,823</td>
                  <td style={{ fontSize: '12px' }}>6th</td>
                  <td><span className={`${styles['badge-blue']} ${styles.badge}`}>B-</span></td>
                </tr>
                <tr>
                  <td><strong>Colorado</strong></td>
                  <td data-type="statistic">$6,714</td>
                  <td style={{ fontSize: '12px' }}>7th</td>
                  <td><span className={`${styles['badge-blue']} ${styles.badge}`}>B</span></td>
                </tr>
                <tr>
                  <td><strong>Washington</strong></td>
                  <td data-type="statistic">$6,608</td>
                  <td style={{ fontSize: '12px' }}>8th</td>
                  <td><span className={`${styles['badge-blue']} ${styles.badge}`}>B+</span></td>
                </tr>
                <tr>
                  <td><strong>National Avg</strong></td>
                  <td data-type="statistic">$6,501</td>
                  <td style={{ fontSize: '12px' }}></td>
                  <td><span className={`${styles['badge-blue']} ${styles.badge}`}>B</span></td>
                </tr>
                <tr>
                  <td><strong>Iowa</strong></td>
                  <td data-type="statistic">$5,188</td>
                  <td style={{ fontSize: '12px' }}>Lowest</td>
                  <td><span className={`${styles['badge-green']} ${styles.badge}`}>A</span></td>
                </tr>
                <tr>
                  <td><strong>Wisconsin</strong></td>
                  <td data-type="statistic">$5,201</td>
                  <td style={{ fontSize: '12px' }}>2nd lowest</td>
                  <td><span className={`${styles['badge-green']} ${styles.badge}`}>A</span></td>
                </tr>
                <tr>
                  <td><strong>Mississippi</strong></td>
                  <td data-type="statistic">$5,214</td>
                  <td style={{ fontSize: '12px' }}>3rd lowest</td>
                  <td><span className={`${styles['badge-green']} ${styles.badge}`}>A-</span></td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: '13px', color: 'var(--text-light)' }}>Source: WalletHub Q1 2026; Experian State of Credit 2025. Grade reflects relative debt level vs. income.</p>
          </section>

          <section id="retirement-impact">
            <div className={styles['section-label']}>Retirement Impact</div>
            <h2>How Credit Card Debt Delays Retirement</h2>
            <p>Credit card interest is money that <em>can never compound for you in retirement</em>. At a 26% APR, every $1,000 in credit card debt costs $260/year in interest. That same $260/year invested in a 401(k) at 7% for 25 years becomes approximately $18,000.</p>
            <div className={styles['card-grid']}>
              <div className={styles.card}>
                <div className={styles['card-val']} style={{ color: 'var(--red)' }}>$34K</div>
                <h4>Lost Retirement Savings</h4>
                <p>$7,000 in CC debt at 26% APR: $1,820/yr interest. If invested instead at 7% for 20 years: $70,000 vs. $36,000 saved. Net loss: $34,000.</p>
              </div>
              <div className={styles.card}>
                <div className={styles['card-val']} style={{ color: 'var(--gold)' }}>3–7 yrs</div>
                <h4>Retirement Delay</h4>
                <p>Average American carrying $7,000+ in CC debt delays retirement by 3–7 years compared to a debt-free peer with the same income who invests the interest savings.</p>
              </div>
            </div>
            <h3>Payoff Strategies: Avalanche vs. Snowball</h3>
            <div className={styles['two-col']}>
              <div className={styles['info-box']}>
                <p><strong>Avalanche Method (mathematically optimal):</strong> Pay minimum on all cards, put extra toward the highest-APR card first. Saves the most interest overall. Best for disciplined savers who want minimum lifetime interest paid.</p>
              </div>
              <div className={styles['green-box']}>
                <p><strong>Snowball Method (psychologically effective):</strong> Pay minimum on all cards, put extra toward the smallest balance first. Creates momentum from quick wins. Research shows higher completion rates despite paying slightly more total interest.</p>
              </div>
            </div>
          </section>

          <section id="faq" aria-label="Frequently Asked Questions" className={styles['faq-section']}>
            <h2>Frequently Asked Questions</h2>
            {[
              {
                q: 'Should I pay off credit card debt or invest in my 401(k)?',
                a: 'The math: always capture the full employer 401(k) match first (50–100% immediate return), then aggressively pay down credit card debt (26% guaranteed return by eliminating interest), then invest additional savings in your 401(k)/IRA. Paying off a 26% APR card is equivalent to earning a guaranteed 26% on that money — far exceeding average market returns. Exception: if you have a very low promotional APR (0% for 12–18 months), investing in your 401(k) during the promotional period can make sense.',
              },
              {
                q: 'What is the best credit card payoff strategy?',
                a: 'The avalanche method (paying highest APR debt first) saves the most money mathematically. On $15,000 spread across three cards (28%, 22%, 18% APR), the avalanche method saves approximately $2,100–$3,500 in interest versus minimum payments. The snowball method (smallest balance first) works better psychologically for many people — the quick wins of eliminating small balances build motivation. Choose the method you\'ll actually stick to: the best strategy is the one you complete.',
              },
              {
                q: 'How does credit card debt affect my retirement age?',
                a: 'Every dollar paying credit card interest is a dollar not compounding in your retirement accounts. A household with $9,000 in credit card debt at 26% APR pays $2,340/year in interest. If that household eliminated the debt and invested the $2,340/year at 7% for 20 years, they\'d accumulate approximately $90,000 in additional retirement savings. This difference — $90,000 — could fund 2–3 additional years of retirement, shifting the retirement date earlier by a meaningful amount.',
              },
            ].map((faq, index) => (
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

          <div className={styles['sources-box']}>
            <strong>📚 Sources</strong>
            <ul>
              <li>WalletHub, Credit Card Debt Statistics Q1 2026</li>
              <li>Federal Reserve, Survey of Consumer Finances 2022</li>
              <li>New York Federal Reserve, Consumer Credit Panel Q4 2025</li>
              <li>Experian, State of Credit Report 2025</li>
              <li>Consumer Financial Protection Bureau (CFPB), Consumer Credit Card Market Report 2025</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles['toc-box']}>
            <h3>On This Page</h3>
            <ul>
              <li><a href="#by-age">Debt by Age</a></li>
              <li><a href="#by-state">Debt by State</a></li>
              <li><a href="#retirement-impact">Retirement Impact</a></li>
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
            <a href="/how-much-to-retire">→ How Much Do I Need to Retire?</a>
            <a href="/compound-interest-calculator">→ Compound Interest Calculator</a>
            <a href="/average-savings-by-age">→ Average Savings by Age</a>
            <a href="/how-to-plan-retirement">→ How to Plan for Retirement</a>
          </div>
          <div className={styles['sidebar-card']} style={{ background: 'var(--off-white)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '8px' }}>
              Key Stat
            </p>
            <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.45, marginBottom: '5px' }}>
              "$9,000 in credit card debt at 26% APR = $2,340/yr in interest = $90,000 in lost retirement savings over 20 years."
            </p>
            <p style={{ fontSize: '11px', color: 'var(--text-light)', margin: 0 }}>
              Source: Plootus Research 2026
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

export default AverageCreditCardDebt;
