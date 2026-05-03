import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { TrendingUp, Calculator, ShieldAlert, PiggyBank } from 'lucide-react';
import styles from './InflationRetirementCalculator.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const InflationRetirementCalculator = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);

  const [infSpend, setInfSpend] = useState(60000);
  const [infRate, setInfRate] = useState(3);
  const [infHealth, setInfHealth] = useState(5.5);
  const [infYears, setInfYears] = useState(25);
  const [infHpct, setInfHpct] = useState(15);
  const [infCola, setInfCola] = useState(2.5);

  const [calcResult, setCalcResult] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const calcInf = () => {
    const spend = parseFloat(infSpend) || 60000;
    const rate = (parseFloat(infRate) || 3) / 100;
    const hRate = (parseFloat(infHealth) || 5.5) / 100;
    const years = parseInt(infYears) || 25;
    const hPct = (parseFloat(infHpct) || 15) / 100;
    const cola = (parseFloat(infCola) || 2.5) / 100;

    const healthSpend = spend * hPct;
    const genSpend = spend * (1 - hPct);

    const futureSpend = (yr) => {
      return genSpend * Math.pow(1 + rate, yr) + healthSpend * Math.pow(1 + hRate, yr);
    };

    const yr10 = futureSpend(10);
    const yr20 = futureSpend(Math.min(20, years));
    const yrEnd = futureSpend(years);

    const extraSavings = (yrEnd - spend) / 0.04 * 0.5;

    const ssBenefit = 24894;
    const ssFinalCOLA = ssBenefit * Math.pow(1 + cola, years);
    const ssFinalInf = ssBenefit * Math.pow(1 + rate, years);
    const ssGap = ssFinalInf - ssFinalCOLA;

    setCalcResult({
      yrEnd: Math.round(yrEnd),
      yr10: Math.round(yr10),
      yr20: Math.round(yr20),
      extraSavings: Math.round(extraSavings),
      ssGap: ssGap > 0 ? Math.round(ssGap) : 0
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Inflation Retirement Calculator: Eroding Savings Impact | Plootus</title>
        <meta name="description" content="Calculate how inflation and healthcare cost rises affect your retirement savings. Find strategies to inflation-proof your financial plan." />
        <link rel="canonical" href="https://www.plootus.com/inflation-retirement-calculator" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Inflation Retirement Calculator",
            "operatingSystem": "All",
            "applicationCategory": "FinancialApplication",
            "description": "An interactive tool to project the impact of general and healthcare inflation on retirement spending needs.",
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
          <p className={styles['hero-eyebrow']}>
            <TrendingUp size={13} strokeWidth={2.5} />
            Interactive Tool · Plootus 2026 · BLS, CMS, Fidelity Data
          </p>
          <h1>Inflation Retirement Calculator: How Inflation Erodes Your Retirement Savings</h1>
          <div className={styles['hero-deck']}>
            $60,000/year in today&apos;s dollars becomes $97,000/year in 20 years at 3% inflation — and $131,000/year at 4% inflation. Healthcare costs inflate even faster. This calculator shows exactly how inflation changes your retirement number and what you can do about it.
          </div>
          <div className={styles['hero-meta']}>
            <span>By the Plootus Research Team</span>
            <span>Updated April 2026</span>
            <span>Sources: BLS CPI, Federal Reserve, CMS, FICA</span>
          </div>
        </div>
      </div>

      <div className={styles['stat-strip']}>
        <div className={styles['stat-strip-inner']}>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$97K</div>
            <div className={styles['stat-label']}>$60K at 3% Inflation in 20 Years</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">5–7%</div>
            <div className={styles['stat-label']}>Annual Healthcare Cost Inflation</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">2.5%</div>
            <div className={styles['stat-label']}>Social Security COLA 2025</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$200K+</div>
            <div className={styles['stat-label']}>Extra Savings Needed per 1% Higher Inflation</div>
          </div>
        </div>
      </div>

      <div className={styles['page-body']} itemScope itemType="https://schema.org/Article">
        <main className={styles['main-content']} role="main" aria-label="Inflation Retirement Calculator 2026">
          <section id="calculator">
            <div className={styles['section-label']}>Calculator</div>
            <h2>How Much Will You Need Due to Inflation?</h2>
            <div className={styles['calc-box']}>
              <h3>📈 Retirement Inflation Impact Calculator</h3>
              <div className={styles['calc-row']}>
                <div className={styles['calc-field']}>
                  <label>Current Annual Retirement Spending Goal ($)</label>
                  <input type="number" value={infSpend} onChange={(e) => setInfSpend(e.target.value)} />
                </div>
                <div className={styles['calc-field']}>
                  <label>General Inflation Rate (%)</label>
                  <input type="number" value={infRate} onChange={(e) => setInfRate(e.target.value)} step="0.5" min="1" max="10" />
                </div>
              </div>
              <div className={styles['calc-row']}>
                <div className={styles['calc-field']}>
                  <label>Healthcare Inflation Rate (%)</label>
                  <input type="number" value={infHealth} onChange={(e) => setInfHealth(e.target.value)} step="0.5" min="1" max="12" />
                </div>
                <div className={styles['calc-field']}>
                  <label>Retirement Length (years)</label>
                  <input type="number" value={infYears} onChange={(e) => setInfYears(e.target.value)} min="10" max="40" />
                </div>
              </div>
              <div className={styles['calc-row']}>
                <div className={styles['calc-field']}>
                  <label>Healthcare Share of Budget (%)</label>
                  <input type="number" value={infHpct} onChange={(e) => setInfHpct(e.target.value)} min="5" max="40" />
                </div>
                <div className={styles['calc-field']}>
                  <label>Expected SS COLA (%)</label>
                  <input type="number" value={infCola} onChange={(e) => setInfCola(e.target.value)} step="0.5" min="0" max="5" />
                </div>
              </div>
              <div className={styles['calc-row']} style={{ justifyContent: 'flex-end' }}>
                <button className={styles['calc-btn']} onClick={calcInf}>Calculate Inflation Impact</button>
              </div>

              {calcResult && (
                  <div className={styles['calc-result']} style={{ display: 'block' }}>
                    <div className={styles['calc-result-num']}>${calcResult.yrEnd.toLocaleString()}/yr</div>
                    <div className={styles['calc-result-label']}>Annual Spending Needed at End of Retirement</div>
                    <div className={styles['calc-result-grid']}>
                      <div className={styles['crg-item']}>
                        <div className={styles['crg-val']}>${calcResult.yr10.toLocaleString()}</div>
                        <div className={styles['crg-label']}>Spending in Year 10</div>
                      </div>
                      <div className={styles['crg-item']}>
                        <div className={styles['crg-val']}>${calcResult.yr20.toLocaleString()}</div>
                        <div className={styles['crg-label']}>Spending in Year 20</div>
                      </div>
                      <div className={styles['crg-item']}>
                        <div className={styles['crg-val']}>+${calcResult.extraSavings.toLocaleString()}</div>
                        <div className={styles['crg-label']}>Extra Savings Needed (vs 0% inflation)</div>
                      </div>
                      <div className={styles['crg-item']}>
                        <div className={styles['crg-val']}>
                          {calcResult.ssGap > 0 ? `-$${calcResult.ssGap.toLocaleString()}` : '$0'}
                        </div>
                        <div className={styles['crg-label']}>SS COLA Purchasing Power Gap</div>
                      </div>
                    </div>
                  </div>
              )}
            </div>
          </section>

          <section id="inflation-data">
            <div className={styles['section-label']}>Data</div>
            <h2>What Your $60,000 Becomes at Different Inflation Rates</h2>
            <table className={styles['data-table']} summary="Future value of 60000 annual retirement spending at various inflation rates over time">
              <thead>
                <tr>
                  <th scope="col">Inflation Rate</th><th scope="col">In 10 Years</th><th scope="col">In 20 Years</th><th scope="col">In 30 Years</th><th scope="col">Extra Savings<br />Needed (25-yr)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.green}>2% (low)</td>
                  <td data-type="statistic">$73,100</td>
                  <td data-type="statistic">$89,100</td>
                  <td data-type="statistic">$108,600</td>
                  <td>+$82,000</td>
                </tr>
                <tr>
                  <td className={styles.hi}><strong>3% (historical avg)</strong></td>
                  <td data-type="statistic"><strong>$80,600</strong></td>
                  <td data-type="statistic"><strong>$108,400</strong></td>
                  <td data-type="statistic"><strong>$145,600</strong></td>
                  <td>+$165,000</td>
                </tr>
                <tr>
                  <td className={styles.gold}>4% (elevated)</td>
                  <td data-type="statistic">$88,800</td>
                  <td data-type="statistic">$131,400</td>
                  <td data-type="statistic">$194,700</td>
                  <td>+$285,000</td>
                </tr>
                <tr>
                  <td className={styles.bad}>5% (high)</td>
                  <td data-type="statistic">$97,700</td>
                  <td data-type="statistic">$159,200</td>
                  <td data-type="statistic">$259,700</td>
                  <td>+$447,000</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: '13px', color: 'var(--text-light)' }}>
              Starting from $60,000/year in today's dollars. Extra savings needed calculated using 4% withdrawal rule over 25 years. Source: Plootus Research using BLS CPI methodology.
            </p>
          </section>

          <section id="healthcare-inflation">
            <div className={styles['section-label']}>Healthcare Specific</div>
            <h2>Healthcare Inflation — The Bigger Threat</h2>
            <p>
              Healthcare costs for retirees have historically increased at 5–7% per year — significantly faster than general <abbr title="Consumer Price Index">CPI</abbr> inflation of 2–3%. This creates an accelerating gap between what your savings can buy and what healthcare actually costs:
            </p>
            <div className={styles['card-grid']}>
              <div className={styles.card}>
                <div className={styles['card-val']} style={{ color: 'var(--red)' }}>5–7%/yr</div>
                <h4>Healthcare Cost Inflation Rate</h4>
                <p>CMS National Health Expenditure data shows per-capita healthcare costs rising 5-7% annually for retirees — more than double general CPI. By age 80, average healthcare spending is 2-3× what it was at 65.</p>
              </div>
              <div className={styles.card}>
                <div className={styles['card-val']} style={{ color: 'var(--gold)' }}>$413K → $700K+</div>
                <h4>Inflation-Adjusted Healthcare Estimate</h4>
                <p>Fidelity's $413,000 lifetime healthcare estimate (2024 dollars) grows to $700,000+ in nominal terms over a 30-year retirement at 5% healthcare inflation. This gap is why HSA accumulation during working years is so critical.</p>
              </div>
              <div className={styles.card}>
                <div className={styles['card-val']} style={{ color: 'var(--blue)' }}>HSA</div>
                <h4>Best Inflation Hedge for Healthcare</h4>
                <p>HSA funds invested and compounding grow tax-free. $4,300/year invested from age 45 to 65 at 7% average return accumulates approximately $192,000 tax-free for healthcare costs — partially offsetting healthcare inflation.</p>
              </div>
              <div className={styles.card}>
                <div className={styles['card-val']} style={{ color: 'var(--green)' }}>2.5%</div>
                <h4>SS COLA vs Healthcare Reality</h4>
                <p>The 2025 Social Security COLA was 2.5%. Healthcare costs for retirees increased approximately 5-6%. The gap — purchasing power lost each year — compounds to significant real income erosion over a 20-year retirement.</p>
              </div>
            </div>
          </section>

          <section id="strategies">
            <div className={styles['section-label']}>Strategies</div>
            <h2>5 Ways to Inflation-Proof Your Retirement</h2>
            <ol style={{ paddingLeft: '20px', lineHeight: '2.2', fontSize: '15px', color: 'var(--text-mid)' }}>
              <li><strong>Delay Social Security to 70</strong> — permanently increases your inflation-adjusted income by 76% vs. claiming at 62. SS COLA applies to a higher base amount.</li>
              <li><strong>Maximize HSA contributions</strong> — $4,300/individual, $8,550/family (2026). Triple tax advantage; grows tax-free specifically for healthcare (the fastest-inflating cost).</li>
              <li><strong>Hold inflation-resistant assets</strong> — <abbr title="Treasury Inflation-Protected Securities">TIPS</abbr>, I-Bonds (up to $10,000/year), dividend growth stocks with pricing power, real estate investment trusts (<abbr title="Real Estate Investment Trusts">REITs</abbr>).</li>
              <li><strong>Build in a 3% annual withdrawal increase</strong> — in your retirement model, assume spending grows 3% per year so your savings target accounts for real cost increases.</li>
              <li><strong>Stay in equities longer</strong> — stocks historically outpace inflation by 4-5% per year over long periods. Moving entirely to bonds at retirement exposes you to purchasing power erosion over a 25-year horizon.</li>
            </ol>
          </section>

          <section id="faq" aria-label="Frequently Asked Questions" className={styles['faq-section']}>
            <h2>Frequently Asked Questions</h2>
            {[
              {
                q: 'How should I account for inflation in retirement planning?',
                a: "Build inflation into every layer of your retirement model. Use the 4% rule with annual inflation adjustments: withdraw 4% in year one, then increase that dollar amount by your actual inflation rate each year. Model healthcare separately at 5-6% inflation (not 2-3%). When calculating your retirement number, use a real return (investment return minus inflation): if stocks return 7% and inflation is 3%, your real return is 4%. A 4% real return on your portfolio is what matters — not the nominal 7%. Use the Plootus retirement calculator to model your personal inflation scenario."
              },
              {
                q: 'Does Social Security protect against inflation?',
                a: "Partially. Social Security benefits receive annual Cost-of-Living Adjustments (COLA) based on the CPI-W. The 2025 COLA was 2.5%, 2024 was 3.2%, and 2023 was 8.7% (the highest since 1981). However, the CPI-W tracks spending patterns of urban wage earners — not retirees, who spend more on healthcare and housing. The CPI-E (Consumer Price Index for the Elderly), which better reflects retiree spending patterns, has historically grown slightly faster than CPI-W. Net result: SS COLA partially but not fully keeps pace with retiree-specific inflation, especially healthcare."
              },
              {
                q: 'What assets best protect against inflation in retirement?',
                a: "Three main inflation-protecting asset classes: (1) TIPS (Treasury Inflation-Protected Securities) — their principal adjusts with CPI, providing guaranteed inflation protection; available through Treasury Direct or as TIPS funds in your 401(k)/IRA; (2) I-Bonds — inflation-indexed savings bonds, max $10,000/year purchase, tied to CPI-U; held for at least 1 year; ideal for short-to-medium term savings; (3) Equities (dividend growth stocks) — companies with strong pricing power raise dividends faster than inflation over time; the S&P 500 has historically returned approximately 7% real (after inflation) over long periods."
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
              <li>Bureau of Labor Statistics, Consumer Price Index (CPI) historical data (bls.gov)</li>
              <li>Centers for Medicare & Medicaid Services (CMS), National Health Expenditure data</li>
              <li>Social Security Administration, COLA history and CPI-W methodology</li>
              <li>Fidelity Investments, Retiree Health Care Cost Estimate 2024 ($413,000)</li>
              <li>TreasuryDirect.gov, I-Bonds and TIPS information</li>
              <li>Plootus Research 2026</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles['toc-box']}>
            <h3>On This Page</h3>
            <ul>
              <li><a href="#calculator">Calculator</a></li>
              <li><a href="#inflation-data">Data Table</a></li>
              <li><a href="#healthcare-inflation">Healthcare</a></li>
              <li><a href="#strategies">Strategies</a></li>
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
            <div onClick={() => router.push('/hsa-contribution-limits')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ HSA Contribution Limits</div>
            <div onClick={() => router.push('/healthcare-costs-in-retirement')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ Healthcare Costs in Retirement</div>
            <div onClick={() => router.push('/social-security-benefits')} style={{cursor: 'pointer', color: 'var(--blue)'}}>→ Social Security Benefits Guide</div>
          </div>
          <div className={styles['sidebar-card']} style={{ background: 'var(--off-white)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '8px' }}>Key Stat</p>
            <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.45, marginBottom: '5px' }}>"At 3% general inflation + 5.5% healthcare inflation, a retiree spending $60,000/year today will need $115,000-$140,000/year in 20 years to maintain the same lifestyle."</p>
            <p style={{ fontSize: '11px', color: 'var(--text-light)', margin: 0 }}>Source: Plootus Research 2026; BLS CPI; CMS NHE Data</p>
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

export default InflationRetirementCalculator;
