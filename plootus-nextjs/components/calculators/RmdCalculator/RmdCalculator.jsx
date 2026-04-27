import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from './RmdCalculator.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const RMD_TABLE = {
  73: 26.5, 74: 25.5, 75: 24.6, 76: 23.7, 77: 22.9, 78: 22.0, 79: 21.1,
  80: 20.2, 81: 19.4, 82: 18.5, 83: 17.7, 84: 16.8, 85: 16.0, 86: 15.2,
  87: 14.4, 88: 13.7, 89: 12.9, 90: 12.2
};

const RmdCalculator = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);
  const [age, setAge] = useState("75");
  const [balance, setBalance] = useState("500000");
  const [result, setResult] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const calculateRMD = () => {
    let currentAge = parseInt(age, 10);
    if (isNaN(currentAge)) currentAge = 73;

    let currentBal = parseFloat(balance);
    if (isNaN(currentBal)) currentBal = 0;

    if (currentAge < 73) {
      setResult({
        rmd: "$0",
        message: "RMDs are not required until age 73 (SECURE 2.0). You have time to do Roth conversions to reduce future RMDs — connect your account to Plootus to model your optimal conversion strategy.",
        isWarning: true
      });
      return;
    }

    const period = RMD_TABLE[currentAge] || RMD_TABLE[90] || 12.2;
    const rmd = Math.round(currentBal / period);

    setResult({
      rmd: "$" + rmd.toLocaleString(),
      message: (
        <>
            Balance <strong>${currentBal.toLocaleString()}</strong> ÷ distribution period <strong>{period}</strong> (IRS Table III, age {currentAge}) = <strong>${rmd.toLocaleString()}</strong> required withdrawal.<br /><br />
            <strong>Tax impact:</strong> This adds ${rmd.toLocaleString()} to your taxable income — potentially pushing you into a higher bracket or triggering Medicare IRMAA surcharges.<br /><br />
            <strong>Qualified Charitable Distribution (QCD):</strong> If you don't need the income, you can donate up to $105,000/year directly from your IRA to charity — it counts toward your RMD but is excluded from your taxable income.
        </>
      ),
      isWarning: false
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>RMD Calculator 2026: Required Minimum Distributions | Plootus</title>
        <meta name="description" content="Calculate your 2026 Required Minimum Distribution (RMD) under SECURE 2.0 rules. Learn when to start withdrawals and how to minimize taxes." />
        <link rel="canonical" href="https://www.plootus.com/rmd-calculator" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "RMD Calculator",
            "operatingSystem": "All",
            "applicationCategory": "FinancialApplication",
            "description": "An interactive calculator to determine Required Minimum Distributions (RMDs) based on IRS Table III and SECURE 2.0 rules.",
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
          <p className={styles['hero-eyebrow']}>🧮 Interactive Calculator · SECURE 2.0 Updated · Age 73+ Required</p>
          <h1>Required Minimum Distribution (RMD) Calculator 2026</h1>
          <p className={styles['hero-deck']}><abbr title="Required Minimum Distribution">RMD</abbr>s start at age 73 under SECURE 2.0. Missing one triggers a 25% penalty. Enter your balance and age to calculate your required 2026 distribution — and see Roth conversion strategies to reduce future RMDs.</p>
          <div className={styles['hero-meta']}>
            <span>📅 Updated April 2026</span><span>📚 IRS Uniform Lifetime Table</span><span>🔢 Instant results</span>
          </div>
        </div>
      </div>

      <div className={styles['stat-strip']}>
        <div className={styles['stat-strip-inner']}>
          <div className={styles['stat-item']}><div className={styles['stat-num']} data-type="statistic">Age 73</div><div className={styles['stat-label']}>RMD Start Age (SECURE 2.0)</div></div>
          <div className={styles['stat-item']}><div className={styles['stat-num']} data-type="statistic">25%</div><div className={styles['stat-label']}>Penalty for Missing RMD</div></div>
          <div className={styles['stat-item']}><div className={styles['stat-num']} data-type="statistic">26.5 yrs</div><div className={styles['stat-label']}>Distribution Period at 73</div></div>
          <div className={styles['stat-item']}><div className={styles['stat-num']} data-type="statistic">$0</div><div className={styles['stat-label']}>Roth IRA RMDs</div></div>
        </div>
      </div>

      <div className={styles['page-body']} itemScope itemType="https://schema.org/Article">
        <main className={styles['main-content']} role="main" aria-label="RMD Calculator 2026 — Required Minimum Distributions">

          <section id="calculator">
            <p className={styles['section-label']}>Calculator</p>
            <h2>RMD Calculator 2026</h2>
            <div className={styles['calc-box']}>
              <h3>🧮 Calculate Your Required Minimum Distribution</h3>
              <div className={styles['calc-row']}>
                <div className={styles['calc-field']}>
                  <label>Your Age in 2026</label>
                  <input type="number" id="rmd-age" value={age} onChange={(e) => setAge(e.target.value)} min="73" max="100" />
                </div>
                <div className={styles['calc-field']}>
                  <label>Year-End 2025 Account Balance ($)</label>
                  <input type="number" id="rmd-bal" value={balance} onChange={(e) => setBalance(e.target.value)} step="10000" />
                </div>
                <button className={styles['calc-btn']} onClick={calculateRMD}>Calculate RMD</button>
              </div>
              
              {result && (
                <div className={styles['calc-result']} style={{ display: 'block' }}>
                  <div className={styles['calc-result-num']}>{result.rmd}</div>
                  <div className={styles['calc-result-label']}>Your 2026 Required Minimum Distribution</div>
                  <div style={{ marginTop: '12px', fontSize: '13px', color: 'var(--text-mid)' }}>{result.message}</div>
                </div>
              )}
            </div>
          </section>

          <section id="irs-table">
            <p className={styles['section-label']}>IRS Reference</p>
            <h2>IRS Uniform Lifetime Table (Table III) — Distribution Periods</h2>
            <table className={styles['data-table']} summary="IRS Uniform Lifetime Table showing distribution periods by age for RMD calculation 2026">
              <thead>
                <tr><th scope="col">Age</th><th scope="col">Distribution<br />Period</th><th scope="col">RMD on<br />$500K</th><th scope="col">RMD %</th></tr>
              </thead>
              <tbody>
                <tr><td className={styles.hi}>73</td><td>26.5</td><td data-type="statistic">$18,867</td><td>3.8%</td></tr>
                <tr><td className={styles.hi}>74</td><td>25.5</td><td data-type="statistic">$19,607</td><td>3.9%</td></tr>
                <tr><td className={styles.hi}>75</td><td>24.6</td><td data-type="statistic">$20,325</td><td>4.1%</td></tr>
                <tr><td className={styles.hi}>76</td><td>23.7</td><td data-type="statistic">$21,097</td><td>4.2%</td></tr>
                <tr><td className={styles.hi}>77</td><td>22.9</td><td data-type="statistic">$21,834</td><td>4.4%</td></tr>
                <tr><td className={styles.hi}>78</td><td>22.0</td><td data-type="statistic">$22,727</td><td>4.5%</td></tr>
                <tr><td className={styles.hi}>79</td><td>21.1</td><td data-type="statistic">$23,696</td><td>4.7%</td></tr>
                <tr><td className={styles.hi}>80</td><td>20.2</td><td data-type="statistic">$24,752</td><td>5.0%</td></tr>
                <tr><td className={styles.hi}>81</td><td>19.4</td><td data-type="statistic">$25,773</td><td>5.2%</td></tr>
                <tr><td className={styles.hi}>82</td><td>18.5</td><td data-type="statistic">$27,027</td><td>5.4%</td></tr>
                <tr><td className={styles.hi}>83</td><td>17.7</td><td data-type="statistic">$28,248</td><td>5.6%</td></tr>
                <tr><td className={styles.hi}>84</td><td>16.8</td><td data-type="statistic">$29,761</td><td>6.0%</td></tr>
                <tr><td className={styles.hi}>85</td><td>16.0</td><td data-type="statistic">$31,250</td><td>6.2%</td></tr>
                <tr><td className={styles.hi}>86</td><td>15.2</td><td data-type="statistic">$32,894</td><td>6.6%</td></tr>
                <tr><td className={styles.hi}>87</td><td>14.4</td><td data-type="statistic">$34,722</td><td>6.9%</td></tr>
                <tr><td className={styles.hi}>88</td><td>13.7</td><td data-type="statistic">$36,496</td><td>7.3%</td></tr>
                <tr><td className={styles.hi}>89</td><td>12.9</td><td data-type="statistic">$38,759</td><td>7.8%</td></tr>
                <tr><td className={styles.hi}>90</td><td>12.2</td><td data-type="statistic">$40,983</td><td>8.2%</td></tr>
              </tbody>
            </table>
          </section>

          <section id="roth-strategy">
            <p className={styles['section-label']}>Planning Strategy</p>
            <h2>Reduce Future RMDs with Roth Conversions</h2>
            <p>The best time to reduce RMDs is <em>before</em> they start. Strategic Roth conversions in the years between retirement (often 60–65) and RMD start age (73) can dramatically reduce future mandatory withdrawals:</p>
            <div className={styles['card-grid']}>
              <div className={styles.card}><h4>Why Convert?</h4><p>Converting Traditional IRA funds to Roth reduces your pre-tax balance, which reduces future RMDs. The converted amount is taxed in the conversion year — but at potentially lower rates than future forced distributions.</p></div>
              <div className={styles.card}><h4>When to Convert?</h4><p>Ideal window: age 60–72, when income is often lower than working years but before RMDs force withdrawals. Fill up your current tax bracket each year without going higher. The 0% long-term capital gains bracket is often accessible.</p></div>
              <div className={styles.card}><h4>QCD Strategy</h4><p>Age 70.5+: donate directly from your IRA to charity (Qualified Charitable Distribution). Up to $105,000/year counts toward your RMD and is excluded from income. Better than donating after-tax income if you're charitably inclined.</p></div>
              <div className={styles.card}><h4>Plootus Models It</h4><p>Connect your Traditional IRA to Plootus and we'll model the optimal Roth conversion amount for each year before 73 — showing the exact tax savings over your retirement lifetime.</p></div>
            </div>
          </section>

          <section id="faq" aria-label="Frequently Asked Questions" className={styles['faq-section']}>
            <h2>Frequently Asked Questions</h2>
            {[
              {
                q: "What age do RMDs start in 2026?",
                a: "Required Minimum Distributions (RMDs) must begin by April 1 of the year following the year you turn 73, under the SECURE 2.0 Act (which changed the age from 72 to 73 effective January 1, 2023). The SECURE 2.0 Act also schedules a further increase to age 75 starting in 2033. If you turn 73 in 2026, your first RMD is due by April 1, 2027 (but taking it by December 31, 2026 avoids a double RMD in 2027). All subsequent RMDs are due by December 31 of each year. Source: IRS; SECURE 2.0 Act (Consolidated Appropriations Act, 2023)."
              },
              {
                q: "How is the RMD calculated?",
                a: "Your annual RMD is calculated by dividing your account balance (as of December 31 of the prior year) by a distribution period from the IRS Uniform Lifetime Table. The most commonly used table (IRS Publication 590-B, Table III) gives distribution periods based on your age. Example: Age 73 has a distribution period of 26.5 years. If your year-end IRA balance was $500,000, your 2026 RMD = $500,000 ÷ 26.5 = $18,868. You must calculate separately for each Traditional IRA, 401(k), 403(b), and 457(b) you own. Source: IRS Publication 590-B; SECURE 2.0 Act."
              },
              {
                q: "Do Roth IRAs have RMDs?",
                a: "Roth IRAs have no RMDs during the account owner's lifetime under current tax law — this is one of the most powerful Roth IRA advantages. Roth 401(k) accounts previously required RMDs during the owner's lifetime, but SECURE 2.0 (effective 2024) eliminated Roth 401(k) RMDs, aligning them with Roth IRAs. Roth IRA beneficiaries (inherited Roth IRAs) generally must take distributions under the 10-year rule. This RMD exemption means Roth accounts can compound tax-free indefinitely during the owner's lifetime, making Roth conversions in early retirement a powerful strategy. Source: IRS; SECURE 2.0 Act."
              },
              {
                q: "What happens if I miss an RMD?",
                a: "Missing an RMD or taking less than the required amount results in a 25% excise tax on the shortfall (the IRS reduced the penalty from 50% under SECURE 2.0). If you correct the error in a timely manner (within 2 years), the penalty is reduced to 10%. Example: if your RMD was $20,000 and you took only $15,000, you owe 25% × $5,000 = $1,250 penalty, plus ordinary income tax on the $5,000 you should have taken. Always consult a financial advisor or CPA if you think you may have missed an RMD. Source: IRS; SECURE 2.0 Act; IRS Form 5329."
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
              <li>IRS Publication 590-B: Distributions from Individual Retirement Arrangements (2025 version)</li>
              <li>IRS, Uniform Lifetime Table (Table III) — used for most IRA RMD calculations</li>
              <li>SECURE 2.0 Act (Consolidated Appropriations Act, 2023): RMD age changes</li>
              <li>IRS Notice 2022-53 (RMD waiver guidance)</li>
              <li>IRS, Qualified Charitable Distributions (QCDs) — Publication 590-B</li>
              <li>Plootus Research 2026</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles['toc-box']}>
            <h3>On This Page</h3>
            <ul>
              <li><a href="#calculator">RMD Calculator</a></li>
              <li><a href="#irs-table">IRS Lifetime Table</a></li>
              <li><a href="#roth-strategy">Roth Conversion Strategy</a></li>
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
            <div onClick={() => router.push('/roth-vs-traditional')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ Roth vs. Traditional IRA</div>
            <div onClick={() => router.push('/average-ira-balance-by-age')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ Average IRA Balance by Age</div>
            <div onClick={() => router.push('/social-security-benefits')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ Social Security Benefits Guide</div>
            <div onClick={() => router.push('/tax-friendly-states-for-retirees')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ Tax-Friendly States for Retirees</div>
            <div onClick={() => router.push('/how-to-plan-retirement')} style={{cursor: 'pointer', color: 'var(--blue)'}}>→ How to Plan for Retirement</div>
          </div>
          <div className={styles['sidebar-card']} style={{ background: 'var(--off-white)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '8px' }}>Key Stat</p>
            <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.45, marginBottom: '5px' }}>"A $1M Traditional IRA generates approximately $37,736 in RMDs at age 73 — pushing some retirees into higher tax brackets unexpectedly."</p>
            <p style={{ fontSize: '11px', color: 'var(--text-light)', margin: 0 }}>Source: IRS Uniform Lifetime Table / Plootus Research 2026</p>
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

export default RmdCalculator;
