import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './BestStatesForEarlyRetirement.module.css';
import PartnersSection from '../../home/PartnersSection';
import HubNav from '../../HubNav/HubNav';

const BestStatesForEarlyRetirement = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);
  const [spend, setSpend] = useState(60000);
  const [swr, setSwr] = useState(3.5);
  const [age, setAge] = useState(38);
  const [cur, setCur] = useState(200000);
  const [calcResult, setCalcResult] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const calcFIRE = () => {
    const s = Number(spend) || 60000;
    const r = (Number(swr) || 3.5) / 100;
    const c = Number(cur) || 200000;
    
    const fireNum = s / r;
    const gap = Math.max(0, fireNum - c);
    const annualNeeded = gap > 0 ? gap * r * 0.8 : 0;
    
    // approximate years calculation used in HTML
    const years = gap > 0 ? Math.round(Math.log(Math.max(fireNum / Math.max(c, 1), 1.001)) / Math.log(1.07)) : 0;
    
    setCalcResult({
      fireNum,
      gap,
      annualNeeded,
      years
    });
  };

  return (
    <div className={styles.container}>

      <HubNav />

      <div className={styles.hero}>
        <div className={styles['hero-inner']}>
          <div className={styles['hero-eyebrow']}>🔥 FIRE Research · Plootus 2026 · All 50 States · 3.5% Safe Withdrawal Rate</div>
          <h1>Best States for Early Retirement (FIRE) in 2026: FIRE Number for All 50 States</h1>
          <div className={styles['hero-deck']}>
            The right state can cut your FIRE number by $500,000 or more. Tennessee and South Dakota offer the best combination of low annual cost, zero income tax, and livable infrastructure for early retirees. Here's the data behind every state.
          </div>
          <div className={styles['hero-meta']}>
            <span>By the Plootus Research Team</span>
            <span>Updated April 2026</span>
            <span>Sources: BLS CES 2024, MERIC Q3 2025, Plootus Research 2026</span>
          </div>
        </div>
      </div>

      <div className={styles['stat-strip']}>
        <div className={styles['stat-strip-inner']}>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$1.30M</div>
            <div className={styles['stat-label']}>Minimum FIRE Number — Mississippi (cheapest)</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$3.69M</div>
            <div className={styles['stat-label']}>Maximum FIRE Number — Hawaii (priciest)</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">3.5%</div>
            <div className={styles['stat-label']}>Safe Withdrawal Rate for Early Retirees</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$2.39M</div>
            <div className={styles['stat-label']}>Gap Between Best and Worst FIRE State</div>
          </div>
        </div>
      </div>

      <div className={styles['page-body']} itemScope itemType="https://schema.org/Article">
        <main className={styles['main-content']} role="main" aria-label="Best States for FIRE Early Retirement 2026">
          <section id="methodology">
            <div className={styles['section-label']}>Methodology</div>
            <h2>How We Calculate FIRE Numbers by State</h2>
            <p>Unlike traditional retirement planning, early retirement <abbr title="Financial Independence, Retire Early">FIRE</abbr> planning excludes Social Security (unavailable before age 62) and uses a more conservative safe withdrawal rate:</p>
            <div className={styles['info-box']}>
              <p>
                <strong>FIRE Number Formula (early retirees):</strong><br />
                Annual State Cost ÷ 0.035 = FIRE Number<br />
                OR: Annual State Cost × 28.57 = FIRE Number<br /><br />
                Annual state cost = BLS Consumer Expenditure Survey 2024 (65+ household spending) × state cost-of-living index (MERIC Q3 2025). The 3.5% rate is used instead of 4% because early retirees face 40-50+ year horizons.
              </p>
            </div>
            <p>For the Social Security bridge period (ages 60–62), most FIRE practitioners maintain a separate 1–3 year cash cushion to avoid tapping the investment portfolio during a potential market downturn at the start of retirement.</p>
          </section>

          <section id="rankings">
            <div className={styles['section-label']}>Rankings</div>
            <h2>Top 10 Best States for FIRE / Early Retirement (2026)</h2>
            <div style={{ overflowX: 'auto' }}>
              <table className={styles['data-table']} summary="Best states for FIRE early retirement ranked by FIRE number and livability">
                <thead>
                  <tr>
                    <th scope="col">State</th>
                    <th scope="col">Annual Cost</th>
                    <th scope="col">FIRE Number<br />(3.5%)</th>
                    <th scope="col">Tax Grade</th>
                    <th scope="col">HC Rank</th>
                    <th scope="col">Income<br />Tax</th>
                    <th scope="col">SS<br />Tax</th>
                    <th scope="col">FIRE<br />Rating</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Tennessee</strong></td>
                    <td data-type="statistic">$49,500</td>
                    <td data-type="statistic">$1.41M</td>
                    <td><span className={`${styles['badge-green']} ${styles.badge}`}>A</span></td>
                    <td>#44</td>
                    <td>None</td>
                    <td>✅</td>
                    <td>★★★★★</td>
                  </tr>
                  <tr>
                    <td><strong>South Dakota</strong></td>
                    <td data-type="statistic">$52,000</td>
                    <td data-type="statistic">$1.49M</td>
                    <td><span className={`${styles['badge-green']} ${styles.badge}`}>A+</span></td>
                    <td>#4</td>
                    <td>None</td>
                    <td>✅</td>
                    <td>★★★★★</td>
                  </tr>
                  <tr>
                    <td><strong>Mississippi</strong></td>
                    <td data-type="statistic">$45,600</td>
                    <td data-type="statistic">$1.30M</td>
                    <td><span className={`${styles['badge-blue']} ${styles.badge}`}>B-</span></td>
                    <td>#49</td>
                    <td>4% flat</td>
                    <td>✅</td>
                    <td>★★★★☆</td>
                  </tr>
                  <tr>
                    <td><strong>Iowa</strong></td>
                    <td data-type="statistic">$50,200</td>
                    <td data-type="statistic">$1.44M</td>
                    <td><span className={`${styles['badge-blue']} ${styles.badge}`}>B</span></td>
                    <td>#28</td>
                    <td>3.8% flat</td>
                    <td>✅</td>
                    <td>★★★★☆</td>
                  </tr>
                  <tr>
                    <td><strong>Kansas</strong></td>
                    <td data-type="statistic">$48,500</td>
                    <td data-type="statistic">$1.38M</td>
                    <td><span className={`${styles['badge-blue']} ${styles.badge}`}>B+</span></td>
                    <td>#35</td>
                    <td>5.7% max</td>
                    <td>⚠️</td>
                    <td>★★★★☆</td>
                  </tr>
                  <tr>
                    <td><strong>Florida</strong></td>
                    <td data-type="statistic">$57,000</td>
                    <td data-type="statistic">$1.64M</td>
                    <td><span className={`${styles['badge-green']} ${styles.badge}`}>A+</span></td>
                    <td>#27</td>
                    <td>None</td>
                    <td>✅</td>
                    <td>★★★★☆</td>
                  </tr>
                  <tr>
                    <td><strong>Wyoming</strong></td>
                    <td data-type="statistic">$52,000</td>
                    <td data-type="statistic">$1.49M</td>
                    <td><span className={`${styles['badge-green']} ${styles.badge}`}>A+</span></td>
                    <td>#33</td>
                    <td>None</td>
                    <td>✅</td>
                    <td>★★★★☆</td>
                  </tr>
                  <tr>
                    <td><strong>Missouri</strong></td>
                    <td data-type="statistic">$49,500</td>
                    <td data-type="statistic">$1.41M</td>
                    <td><span className={`${styles['badge-blue']} ${styles.badge}`}>B+</span></td>
                    <td>#32</td>
                    <td>4.5% max</td>
                    <td>⚠️</td>
                    <td>★★★★☆</td>
                  </tr>
                  <tr>
                    <td><strong>Oklahoma</strong></td>
                    <td data-type="statistic">$47,500</td>
                    <td data-type="statistic">$1.36M</td>
                    <td><span className={`${styles['badge-blue']} ${styles.badge}`}>B-</span></td>
                    <td>#43</td>
                    <td>4.75% max</td>
                    <td>✅</td>
                    <td>★★★☆☆</td>
                  </tr>
                  <tr>
                    <td><strong>North Carolina</strong></td>
                    <td data-type="statistic">$55,000</td>
                    <td data-type="statistic">$1.59M</td>
                    <td><span className={`${styles['badge-blue']} ${styles.badge}`}>B+</span></td>
                    <td>#25</td>
                    <td>4.25% flat</td>
                    <td>✅</td>
                    <td>★★★★☆</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-light)' }}>
              Sources: BLS CES 2024; MERIC Q3 2025; Kiplinger 2026; WalletHub 2026; Plootus Research 2026.
            </p>
          </section>

          <section id="fire-calculator">
            <div className={styles['section-label']}>Calculator</div>
            <h2>Your Personal FIRE Number Calculator</h2>
            <div className={styles['calc-box']}>
              <h3>🔥 Calculate Your State-Adjusted FIRE Number</h3>
              <div className={styles['calc-row']}>
                <div className={styles['calc-field']}>
                  <label>Target Annual Spending ($)</label>
                  <input type="number" value={spend} onChange={(e) => setSpend(e.target.value)} />
                </div>
                <div className={styles['calc-field']}>
                  <label>Safe Withdrawal Rate (%)</label>
                  <input type="number" value={swr} onChange={(e) => setSwr(e.target.value)} step="0.5" min="2" max="6" />
                </div>
              </div>
              <div className={styles['calc-row']}>
                <div className={styles['calc-field']}>
                  <label>Current Age</label>
                  <input type="number" value={age} onChange={(e) => setAge(e.target.value)} min="25" max="60" />
                </div>
                <div className={styles['calc-field']}>
                  <label>Current Savings ($)</label>
                  <input type="number" value={cur} onChange={(e) => setCur(e.target.value)} />
                </div>
              </div>
              <div className={styles['calc-row']} style={{ justifyContent: 'flex-end' }}>
                <button className={styles['calc-btn']} onClick={calcFIRE}>Calculate My FIRE Number</button>
              </div>
              
              {calcResult && (
                  <div className={styles['calc-result']} style={{ display: 'block' }}>
                    <div className={styles['calc-result-num']}>${Math.round(calcResult.fireNum).toLocaleString()}</div>
                    <div className={styles['calc-result-label']}>
                      {calcResult.gap > 0 
                        ? `Gap: $${Math.round(calcResult.gap).toLocaleString()} remaining. Investing $${Math.round(calcResult.annualNeeded).toLocaleString()}/yr closes the gap in approximately ${calcResult.years} years.`
                        : 'You have already reached your FIRE number! Connect Plootus to build your withdrawal strategy.'}
                    </div>
                  </div>
              )}
            </div>
          </section>

          <section id="healthcare">
            <div className={styles['section-label']}>Critical Consideration</div>
            <h2>The FIRE Healthcare Gap — Your Biggest Pre-Medicare Risk</h2>
            <p>
              The most overlooked FIRE risk is healthcare. Before Medicare eligibility at age 65, you must fund health insurance independently. ACA Marketplace premiums for a 55-year-old can exceed $800–$1,200/month in many states. Income management is the key strategy: keep income below 400% of the federal poverty level to qualify for premium tax credits.
            </p>
            <div className={styles['two-col']}>
              <div className={styles.card}>
                <div className={styles['card-val']} style={{ color: 'var(--red)' }}>~$24K/yr</div>
                <h4>Estimated Healthcare Cost at Age 55</h4>
                <p>ACA Marketplace plan for a single 55-year-old without premium subsidies: approximately $18,000–$30,000/year depending on state and plan tier.</p>
              </div>
              <div className={styles.card}>
                <div className={styles['card-val']} style={{ color: 'var(--green)' }}>Income Mgmt</div>
                <h4>The FIRE Healthcare Strategy</h4>
                <p>Keep <abbr title="Modified Adjusted Gross Income">MAGI</abbr> below 400% FPL by using Roth conversions, managing 401(k) withdrawals, and holding an <abbr title="Health Savings Account">HSA</abbr>. Qualify for substantial premium tax credits.</p>
              </div>
            </div>
          </section>

          <section id="faq" aria-label="Frequently Asked Questions" className={styles['faq-section']}>
            <h2>Frequently Asked Questions</h2>
            {[
              {
                q: 'What is the best state for FIRE early retirement?',
                a: 'Tennessee offers the best overall combination for most early retirees: no state income tax, no estate tax, low annual retirement cost (~$49,500/year, FIRE number ~$1.41M at 3.5%), livable cities (Nashville, Knoxville, Chattanooga), and mild weather. South Dakota is comparable in taxes and costs with better healthcare (ranked #4 nationally) but is more rural. Mississippi offers the cheapest FIRE number ($1.30M) but ranks #49 in healthcare. Choose based on your priorities: lowest cost, best healthcare, or best overall livability.'
              },
              {
                q: 'Should early retirees use 3.5% or 4% safe withdrawal rate?',
                a: 'Early retirees — those planning for a 35-50+ year retirement horizon — should use 3.5% (or even 3.25–3.5%) rather than the classic 4% rule, which was designed for a 30-year retirement horizon. Historical backtesting shows that 4% has experienced some failure scenarios over 40+ year periods, while 3.5% maintains a survival rate exceeding 95% across nearly all historical market environments including the Great Depression and 1970s stagflation. The 3.5% multiplier: FIRE number = annual spending ÷ 0.035 (same as × 28.57). Source: Bengen (1994); Pfau (2011); Kitces Research.'
              },
              {
                q: 'How do early retirees access 401(k) funds before age 59.5?',
                a: 'Three main methods: (1) Roth Conversion Ladder — convert Traditional IRA/401(k) to Roth annually; access those conversions tax-free after 5 years. Start converting the year before early retirement to build the ladder. (2) Rule 72(t)/SEPP — IRS substantially equal periodic payments allow penalty-free withdrawals from IRAs at any age using three IRS-approved calculation methods. (3) 457(b) plans — government employees can access 457(b) at any age after separating from their employer, with no early withdrawal penalty. Most FIRE practitioners use a combination: live on taxable brokerage and Roth contributions (always accessible) while the conversion ladder matures.'
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
              <li>Bureau of Labor Statistics, Consumer Expenditure Survey 2024 (65+ age group)</li>
              <li>Missouri Economic Research and Information Center (MERIC), Cost of Living Index Q3 2025</li>
              <li>Bengen, W.P. (1994). Determining Withdrawal Rates Using Historical Data. Journal of Financial Planning</li>
              <li>Pfau, W. (2011). Safe Savings Rates: A New Approach to Retirement Planning. Journal of Financial Planning</li>
              <li>Kiplinger, Retirement Taxes 2026; WalletHub Best States to Retire 2026</li>
              <li>KFF Health Insurance Marketplace Calculator 2025</li>
              <li>Plootus Research 2026</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles['toc-box']}>
            <h3>On This Page</h3>
            <ul>
              <li><a href="#methodology">Methodology</a></li>
              <li><a href="#rankings">Rankings</a></li>
              <li><a href="#fire-calculator">Calculator</a></li>
              <li><a href="#healthcare">Healthcare Gap</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          </div>
          <div className={styles['cta-card']}>
            <h4>What's my retirement number?</h4>
            <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
            <div onClick={() => router.push('/retirement-calculator')} className={styles['cta-btn']}>
              Check Here
            </div>
          </div>
          <div className={`${styles['sidebar-card']} ${styles['related-card']}`}>
            <h4>Related Guides</h4>
            <a href="/retire-early">→ Retire Early — FIRE Guide</a>
            <a href="/cheapest-states-to-retire">→ Cheapest States to Retire</a>
            <a href="/tax-friendly-states-for-retirees">→ Tax-Friendly States</a>
            <a href="/healthcare-costs-in-retirement">→ Healthcare in Retirement</a>
          </div>
          <div className={styles['sidebar-card']} style={{ background: 'var(--off-white)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '8px' }}>Key Stat</p>
            <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.45, marginBottom: '5px' }}>"Choosing Tennessee over California for FIRE saves approximately $1 million in required savings."</p>
            <p style={{ fontSize: '11px', color: 'var(--text-light)', margin: 0 }}>Source: Plootus Research 2026</p>
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

export default BestStatesForEarlyRetirement;
