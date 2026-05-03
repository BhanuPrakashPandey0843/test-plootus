import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Calculator, Clock, TrendingDown, Banknote } from 'lucide-react';
import styles from './RetirementIncomeCalculator.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const RetirementIncomeCalculator = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);

  const [bal, setBal] = useState(750000);
  const [wdraw, setWdraw] = useState(45000);
  const [ss, setSs] = useState(24894);
  const [ret, setRet] = useState(7);
  const [inf, setInf] = useState(2.5);
  const [age, setAge] = useState(65);

  const [calcResult, setCalcResult] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const calcRI = () => {
    const b = parseFloat(bal) || 750000;
    const w = parseFloat(wdraw) || 45000;
    const s = parseFloat(ss) || 24894;
    const r = (parseFloat(ret) || 7) / 100;
    const i = (parseFloat(inf) || 2.5) / 100;
    const a = parseInt(age) || 65;

    const netRet = r - i;
    const netWdraw = Math.max(0, w - s);
    let bal2 = b;
    let yrs = 0;
    
    while (bal2 > 0 && yrs < 60) {
      bal2 = bal2 * (1 + netRet) - netWdraw;
      yrs++;
    }

    const endAge = a + yrs;
    
    setCalcResult({
      yrs,
      endAge
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Retirement Income Calculator: Portfolio Longevity | Plootus</title>
        <meta name="description" content="Find out how long your retirement savings will last. Use our interactive calculator to project decumulation, including Social Security and inflation." />
        <link rel="canonical" href="https://www.plootus.com/retirement-income-calculator" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Retirement Income Calculator",
            "operatingSystem": "All",
            "applicationCategory": "FinancialApplication",
            "description": "An interactive tool to project how long a retirement portfolio will last based on withdrawal needs and Social Security.",
            "author": {
              "@type": "Organization",
              "name": "Plootus"
            }
          })}
        </script>
      </Head>

      <HubNav />

      <div className={styles.hero}>
        <div className={styles['hero-inner']}>
          <p className={styles['hero-eyebrow']}><Calculator size={13} strokeWidth={2.5} /> Interactive Tool · Plootus 2026 · Decumulation Planning</p>
          <h1>Retirement Income Calculator: How Long Will Your Money Last?</h1>
          <div className={styles['hero-deck']}>
            Most retirement calculators focus on <em>accumulation</em> — how much you save. This one focuses on what actually matters in retirement: <em>decumulation</em> — how efficiently you spend it down. Includes withdrawal order optimization and Roth conversion savings.
          </div>
          <div className={styles['hero-meta']}>
            <span>By the Plootus Research Team</span>
            <span>Updated April 2026</span>
            <span>Sources: Bengen (1994), Trinity Study, IRS 2026</span>
          </div>
        </div>
      </div>

      <div className={styles['stat-strip']}>
        <div className={styles['stat-strip-inner']}>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">4%</div>
            <div className={styles['stat-label']}>Safe Withdrawal Rate (30-yr horizon)</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$40,000</div>
            <div className={styles['stat-label']}>Annual withdrawal from $1M balance</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">40+ yrs</div>
            <div className={styles['stat-label']}>How long $1M lasts at 4% + 7% return</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$50K–$200K</div>
            <div className={styles['stat-label']}>Tax savings from optimal withdrawal order</div>
          </div>
        </div>
      </div>

      <div className={styles['page-body']} itemScope itemType="https://schema.org/Article">
        <main className={styles['main-content']} role="main" aria-label="Retirement Income Calculator — Decumulation Planning">
          <section id="calculator">
            <div className={styles['section-label']}>Calculator</div>
            <h2>How Long Will My Retirement Savings Last?</h2>
            <div className={styles['calc-box']}>
              <h3>🧮 Retirement Portfolio Longevity Calculator</h3>
              <div className={styles['calc-row']}>
                <div className={styles['calc-field']}>
                  <label>Retirement Savings Balance ($)</label>
                  <input type="number" value={bal} onChange={(e) => setBal(e.target.value)} />
                </div>
                <div className={styles['calc-field']}>
                  <label>Annual Withdrawal Need ($)</label>
                  <input type="number" value={wdraw} onChange={(e) => setWdraw(e.target.value)} />
                </div>
              </div>
              <div className={styles['calc-row']}>
                <div className={styles['calc-field']}>
                  <label>Annual Social Security Income ($)</label>
                  <input type="number" value={ss} onChange={(e) => setSs(e.target.value)} />
                </div>
                <div className={styles['calc-field']}>
                  <label>Expected Annual Return (%)</label>
                  <input type="number" value={ret} onChange={(e) => setRet(e.target.value)} step="0.5" />
                </div>
              </div>
              <div className={styles['calc-row']}>
                <div className={styles['calc-field']}>
                  <label>Inflation Rate (%)</label>
                  <input type="number" value={inf} onChange={(e) => setInf(e.target.value)} step="0.5" />
                </div>
                <div className={styles['calc-field']}>
                  <label>Your Current Age</label>
                  <input type="number" value={age} onChange={(e) => setAge(e.target.value)} min="50" max="80" />
                </div>
              </div>
              <div className={styles['calc-row']} style={{ justifyContent: 'flex-end', flexWrap: 'nowrap' }}>
                <button className={styles['calc-btn']} onClick={calcRI}>Calculate Portfolio Longevity</button>
              </div>

              {calcResult && (
                  <div className={styles['calc-result']} style={{ display: 'block' }}>
                    <div className={styles['calc-result-num']} style={{ fontSize: '32px' }}>
                      {calcResult.yrs >= 60 ? '60+ years ✅' : `${calcResult.yrs} years`}
                    </div>
                    <div className={styles['calc-result-label']}>
                      {calcResult.yrs >= 60 
                        ? 'Portfolio never depletes — excellent withdrawal strategy!' 
                        : `Portfolio lasts until age ${calcResult.endAge}. ${calcResult.endAge < 85 ? '⚠️ Consider reducing withdrawals or delaying Social Security.' : '✅ Good longevity.'}`}
                    </div>
                  </div>
              )}
            </div>
          </section>

          <section id="withdrawal-rates">
            <div className={styles['section-label']}>Withdrawal Rate Guide</div>
            <h2>Safe Withdrawal Rates by Retirement Horizon</h2>
            <table className={styles['data-table']} summary="Safe withdrawal rates by retirement horizon showing portfolio longevity">
              <thead>
                <tr>
                  <th scope="col">Horizon</th>
                  <th scope="col">Safe Rate</th>
                  <th scope="col">Multiplier</th>
                  <th scope="col">$1M Annual<br />Withdrawal</th>
                  <th scope="col">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>20 years</td>
                  <td data-type="statistic" className={styles.hi}>5–6%</td>
                  <td>16–20×</td>
                  <td>$50,000–$60,000</td>
                  <td>Retire at 75+; shorter expected retirement</td>
                </tr>
                <tr>
                  <td><strong>30 years (standard)</strong></td>
                  <td data-type="statistic" className={styles.hi}><strong>4%</strong></td>
                  <td>25×</td>
                  <td><strong>$40,000</strong></td>
                  <td>Traditional retirement age 65; Bengen (1994)</td>
                </tr>
                <tr>
                  <td>35 years</td>
                  <td data-type="statistic">3.5%</td>
                  <td>28.57×</td>
                  <td>$35,000</td>
                  <td>Early retirement age 55–60</td>
                </tr>
                <tr>
                  <td>40–50 years</td>
                  <td data-type="statistic">3–3.5%</td>
                  <td>29–33×</td>
                  <td>$30,000–$35,000</td>
                  <td>FIRE movement; retire at 45–55</td>
                </tr>
              </tbody>
            </table>
            <div className={styles['info-box']}>
              <p>📌 <strong>William Bengen's 2026 update:</strong> The original creator of the 4% rule now suggests 4.7% may be appropriate based on current market valuations and bond yields. Most financial planners still recommend 4% as a conservative baseline for planning purposes. Source: Davenport Advisors 2026.</p>
            </div>
          </section>

          <section id="withdrawal-order">
            <div className={styles['section-label']}>Tax Strategy</div>
            <h2>The Withdrawal Order That Saves $50K–$200K</h2>
            <p>The account you withdraw from first has a massive impact on your lifetime tax bill. The conventional tax-efficient withdrawal sequence:</p>
            <ol style={{ paddingLeft: '20px', lineHeight: '2', fontSize: '15px', color: 'var(--text-mid)' }}>
              <li><strong>Taxable brokerage accounts first</strong> — capital gains taxed at preferential rates (0%, 15%, 20%); spend dividends first, then sell appreciated assets</li>
              <li><strong>Tax-deferred accounts second</strong> (Traditional 401(k), Traditional IRA) — withdraw to fill lower tax brackets; plan around RMDs starting at age 73</li>
              <li><strong>Tax-free accounts last</strong> (Roth IRA, Roth 401(k)) — let them compound tax-free as long as possible; no RMDs on Roth IRA</li>
            </ol>
            <div className={styles['warn-box']}>
              <p>⚠️ <strong>Roth Conversion Window:</strong> Early retirement (ages 60–72) is the ideal time to convert Traditional IRA funds to Roth while income is low and before Required Minimum Distributions begin at 73. Each dollar converted at a low tax rate is a dollar that will never be subject to RMDs or future tax rate increases. Most retirees can convert $20,000–$60,000/year without exceeding a 12–22% bracket.</p>
            </div>
          </section>

          <section id="faq" aria-label="Frequently Asked Questions" className={styles['faq-section']}>
            <h2>Frequently Asked Questions</h2>
            {[
              {
                q: 'How much do I need to retire at 60?',
                a: "To retire at 60 with a 35-year horizon, use the 3.5% withdrawal rate (28.57× annual spending). If you need $60,000/year in retirement and expect $24,894 in Social Security (available at 62), you need your savings to cover $35,106/year until Social Security begins, then $35,106 from savings ongoing. At 3.5%, you need approximately $1 million. Before 62, you need to fund all $60,000 from savings — so have a 2-year buffer plan for the gap period. Source: Plootus Research 2026; SSA Nov 2025."
              },
              {
                q: 'What happens when RMDs kick in?',
                a: "Required Minimum Distributions (RMDs) begin at age 73 (SECURE 2.0 Act). The IRS requires you to withdraw a minimum amount from Traditional IRAs and 401(k)s each year, calculated by dividing your account balance by your IRS life expectancy factor. For a 73-year-old with $1 million, the RMD is approximately $40,000 (factor of 26.5). Large RMDs can push you into higher tax brackets and trigger IRMAA surcharges on Medicare premiums. This is why Roth conversions before age 73 are so valuable — they permanently reduce your future RMD obligations."
              },
              {
                q: 'Should I take Social Security early to preserve my portfolio?',
                a: "No — in most cases, delaying Social Security as long as possible is the better strategy. Each year you delay past your Full Retirement Age (67 for those born in 1960+), your benefit permanently increases by 8%. Waiting from 67 to 70 increases your benefit by 24% — permanently. This is a guaranteed 8% return with no market risk. For a couple, the higher-earning spouse should strongly consider waiting to 70, as the survivor benefit is based on this higher amount. The optimal strategy is usually to draw down savings in early retirement while delaying Social Security."
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

          <div className={styles['cta-banner']}>
            <h3>See Your Personalized Retirement Income Plan</h3>
            <p>Connect your actual accounts and get a decumulation strategy tailored to your balance, tax situation, and Social Security timing — free with Plootus.</p>
            <div onClick={() => router.push('/')} style={{cursor: 'pointer', color: 'white', textDecoration: 'underline'}}>Get My Retirement Plan →</div>
          </div>

          <div className={styles['sources-box']}>
            <strong> Sources</strong>
            <ul>
              <li>Bengen, W.P. (1994). Determining Withdrawal Rates Using Historical Data. Journal of Financial Planning — original 4% rule study</li>
              <li>Cooley, Hubbard & Walz (1998). Retirement Savings: Choosing a Withdrawal Rate That Is Sustainable — Trinity Study</li>
              <li>IRS, Required Minimum Distributions (RMDs) 2026; IRS Life Expectancy Tables</li>
              <li>IRS, 2026 Federal Income Tax Brackets</li>
              <li>SECURE 2.0 Act (Consolidated Appropriations Act, 2023) — RMD age change to 73</li>
              <li>Davenport Advisors (2026). Updated 4% Rule Analysis</li>
              <li>Social Security Administration, Monthly Statistical Snapshot November 2025</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles['toc-box']}>
            <h3>On This Page</h3>
            <ul>
              <li><a href="#calculator">Calculator</a></li>
              <li><a href="#withdrawal-rates">Safe Rates</a></li>
              <li><a href="#withdrawal-order">Withdrawal Order</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          </div>
          <div className={styles['cta-card']}>
            <h4>What's my retirement number?</h4>
            <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
            <div onClick={() => router.push('/retirement-calculator')} className={styles['cta-btn']} style={{cursor: 'pointer'}}>
              Check Here
            </div>
          </div>
          <div className={`${styles['sidebar-card']} ${styles['related-card']}`}>
            <h4>Related Guides</h4>
            <div onClick={() => router.push('/how-much-to-retire')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ How Much Do I Need to Retire?</div>
            <div onClick={() => router.push('/roth-vs-traditional')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ Roth vs Traditional IRA</div>
            <div onClick={() => router.push('/social-security-benefits')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ Social Security Benefits Guide</div>
            <div onClick={() => router.push('/tax-friendly-states-for-retirees')} style={{cursor: 'pointer', color: 'var(--blue)'}}>→ Tax-Friendly States for Retirees</div>
          </div>
          <div className={styles['sidebar-card']} style={{ background: 'var(--off-white)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '8px' }}>Key Stat</p>
            <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.45, marginBottom: '5px' }}>"$1 million at a 4% withdrawal rate + 7% return lasts 40+ years."</p>
            <p style={{ fontSize: '11px', color: 'var(--text-light)', margin: 0 }}>Source: Bengen (1994); Trinity Study (1998)</p>
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

export default RetirementIncomeCalculator;
