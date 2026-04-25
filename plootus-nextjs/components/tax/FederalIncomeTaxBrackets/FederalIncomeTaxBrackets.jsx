import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './FederalIncomeTaxBrackets.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const FederalIncomeTaxBrackets = () => {
  const router = useRouter();
  const [fs, setFs] = useState('single');
  const [gi, setGi] = useState('');
  const [pt, setPt] = useState(0);
  const [calcRes, setCalcRes] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const calculateTax = () => {
    const grossIncome = parseFloat(gi) || 0;
    const preTax = parseFloat(pt) || 0;
    const sd = { single: 15000, mfj: 30000, hoh: 22500 };
    const br = {
      single: [[11925, 0.10], [48475, 0.12], [103350, 0.22], [197300, 0.24], [250525, 0.32], [626350, 0.35], [1e9, 0.37]],
      mfj: [[23850, 0.10], [96950, 0.12], [206700, 0.22], [394600, 0.24], [501050, 0.32], [751600, 0.35], [1e9, 0.37]],
      hoh: [[17000, 0.10], [64850, 0.12], [103350, 0.22], [197300, 0.24], [250500, 0.32], [626350, 0.35], [1e9, 0.37]]
    };

    const ti = Math.max(0, grossIncome - preTax - sd[fs]);
    let tax = 0;
    let prev = 0;
    let details = [];

    br[fs].forEach((b) => {
      const chunk = Math.min(ti, b[0]) - prev;
      if (chunk > 0) {
        const amt = chunk * b[1];
        tax += amt;
        details.push({
          rate: (b[1] * 100).toFixed(0),
          chunk: Math.round(chunk),
          amt: Math.round(amt)
        });
        prev = b[0];
      }
    });

    const eff = grossIncome > 0 ? ((tax / grossIncome) * 100).toFixed(1) : 0;

    setCalcRes({
      tax: Math.round(tax),
      ti: Math.round(ti),
      eff,
      details
    });
  };

  const faqs = [
    {
      q: "What are the 2026 federal income tax brackets?",
      a: "The 2026 federal brackets are: 10% (up to $11,925 single / $23,850 MFJ), 12% (up to $48,475 / $96,950), 22% (up to $103,350 / $206,700), 24% (up to $197,300 / $394,600), 32% (up to $250,525 / $501,050), 35% (up to $626,350 / $751,600), and 37% above those thresholds. Source: IRS Rev. Proc. 2025-40."
    },
    {
      q: "How do I lower my taxable income?",
      a: "The most powerful ways: (1) Maximize pre-tax 401(k) or 403(b) contributions — $23,500 in 2026, or $31,000 if age 50+. (2) Contribute to a Traditional IRA if deductible ($7,000 / $8,000 age 50+). (3) Fund an HSA — $4,300 single / $8,550 family. (4) Use Qualified Charitable Distributions from your IRA (age 70½+) instead of cash donations. (5) Harvest capital losses to offset gains."
    },
    {
      q: "Are 401(k) withdrawals taxed as ordinary income?",
      a: "Yes. Traditional 401(k) and IRA withdrawals are taxed as ordinary income at your marginal bracket rate. They stack on top of Social Security, pensions, and other income. Roth 401(k) and Roth IRA qualified withdrawals are completely tax-free. This difference is the foundation of Roth conversion strategy."
    },
    {
      q: "Will the 2026 tax brackets change after this year?",
      a: "Key TCJA provisions are scheduled to sunset after 2025 (some extended to 2026). Without Congressional action, top rates could revert to 39.6%, the standard deduction could drop roughly in half, and the AMT exemption could shrink significantly. As of April 2026, the legislative outcome remains uncertain. Plootus will update this page when changes are confirmed."
    },
    {
      q: "What is the marginal vs. effective tax rate?",
      a: "Your marginal rate is the rate on your last dollar of income — your \"tax bracket.\" Your effective rate is total tax ÷ total income. A single filer with $80,000 in taxable income is in the 22% marginal bracket but pays an effective rate of ~15.6%. For financial planning, your marginal rate matters most for decisions at the margin (like Roth conversions); your effective rate is more useful for budgeting."
    }
  ];

  return (
    <div className={styles.container}>
      <HubNav />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>TAXES</div>
        <div className={styles.heroInner}>
          <div>
            <div className={styles.heroTag}>🧾 Tax Guide · IRS Rev. Proc. 2025-40 · All Filing Statuses</div>
            <h1>
              Federal Income Tax Brackets 2026: All 7 Rates &amp; Thresholds
            </h1>
            <p className={styles.heroSub}>
              The 2026 federal tax brackets are 10%, 12%, 22%, 24%, 32%, 35%, and 37% — adjusted for inflation. See every bracket, calculate your estimated tax, and learn how your bracket affects 401(k) withdrawals, Roth conversions, and capital gains.
            </p>
            <div className={styles.heroMeta}>
              <span>📅 Updated April 2026</span>
              <span>📚 Source: IRS Rev. Proc. 2025-40</span>
              <span>⏱ 8 min read</span>
              <span>🧮 Includes Tax Calculator</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stat Strip */}
      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}>
            <div className={styles.statNum}>37%</div>
            <div className={styles.statLabel}>Top Federal Rate 2026</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>$30K</div>
            <div className={styles.statLabel}>Standard Deduction — MFJ</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>$15K</div>
            <div className={styles.statLabel}>Standard Deduction — Single</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>7</div>
            <div className={styles.statLabel}>Total Tax Brackets</div>
          </div>
        </div>
      </div>

      {/* Main Content & Sidebar */}
      <div className={styles.pageBody}>
        <main className={styles.mainContent}>
          <section id="calculator">
            <p className={styles.sectionLabel}>Interactive Tool</p>
            <h2>2026 Federal Income Tax Estimator</h2>
            <div className={styles.calcBox}>
              <h3>🧮 Estimate Your 2026 Federal Tax</h3>
              <div className={styles.calcRow}>
                <div className={styles.calcField}>
                  <label>Filing Status</label>
                  <select id="fs" value={fs} onChange={(e) => setFs(e.target.value)}>
                    <option value="single">Single</option>
                    <option value="mfj">Married Filing Jointly</option>
                    <option value="hoh">Head of Household</option>
                  </select>
                </div>
                <div className={styles.calcField}>
                  <label>Gross Income ($)</label>
                  <input
                    type="number"
                    id="gi"
                    placeholder="e.g. 85000"
                    min="0"
                    value={gi}
                    onChange={(e) => setGi(e.target.value)}
                  />
                </div>
                <div className={styles.calcField}>
                  <label>Pre-Tax 401(k)/IRA ($)</label>
                  <input
                    type="number"
                    id="pt"
                    min="0"
                    value={pt}
                    onChange={(e) => setPt(e.target.value)}
                  />
                </div>
                <button className={styles.calcBtn} onClick={calculateTax}>
                  Calculate &rarr;
                </button>
              </div>

              {calcRes && (
                <div className={`${styles.calcResult} ${styles.show}`}>
                  <div className={styles.calcResultNum} id="r-tax">
                    ${calcRes.tax.toLocaleString()}
                  </div>
                  <div className={styles.calcResultLabel}>Estimated Federal Income Tax</div>
                  <div className={styles.calcDetail} id="r-detail">
                    <strong>Bracket breakdown:</strong><br />
                    {calcRes.details.map((d, i) => (
                      <React.Fragment key={i}>
                        {d.rate}% &times; ${d.chunk.toLocaleString()} = ${d.amt.toLocaleString()}
                        <br />
                      </React.Fragment>
                    ))}
                    <br />
                    Taxable income: <strong>${calcRes.ti.toLocaleString()}</strong> &nbsp;|&nbsp; Effective rate: <strong>{calcRes.eff}%</strong>
                  </div>
                </div>
              )}
            </div>
          </section>

          <section id="single">
            <p className={styles.sectionLabel}>2026 Brackets</p>
            <h2>Single Filers — 2026 Federal Income Tax Brackets</h2>
            <p>These rates apply to <strong>taxable income</strong> — gross income minus the $15,000 standard deduction (or itemized deductions) and pre-tax retirement contributions.</p>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Rate</th>
                  <th>Taxable Income (Single)</th>
                  <th>Tax Owed on This Tier</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={styles.green}>10%</td><td>$0 – $11,925</td><td>10% of taxable income</td></tr>
                <tr><td className={styles.hi}>12%</td><td>$11,926 – $48,475</td><td>$1,193 + 12% of amount over $11,925</td></tr>
                <tr><td className={styles.hi}>22%</td><td>$48,476 – $103,350</td><td>$5,579 + 22% of amount over $48,475</td></tr>
                <tr><td className={styles.gold}>24%</td><td>$103,351 – $197,300</td><td>$17,651 + 24% of amount over $103,350</td></tr>
                <tr><td className={styles.gold}>32%</td><td>$197,301 – $250,525</td><td>$40,199 + 32% of amount over $197,300</td></tr>
                <tr><td className={styles.red}>35%</td><td>$250,526 – $626,350</td><td>$57,231 + 35% of amount over $250,525</td></tr>
                <tr><td className={styles.red}>37%</td><td>$626,351+</td><td>$188,769 + 37% of amount over $626,350</td></tr>
              </tbody>
            </table>
          </section>

          <section id="mfj">
            <h2>Married Filing Jointly — 2026 Federal Tax Brackets</h2>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Rate</th>
                  <th>Taxable Income (MFJ)</th>
                  <th>Tax Owed on This Tier</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={styles.green}>10%</td><td>$0 – $23,850</td><td>10% of taxable income</td></tr>
                <tr><td className={styles.hi}>12%</td><td>$23,851 – $96,950</td><td>$2,385 + 12% over $23,850</td></tr>
                <tr><td className={styles.hi}>22%</td><td>$96,951 – $206,700</td><td>$11,157 + 22% over $96,950</td></tr>
                <tr><td className={styles.gold}>24%</td><td>$206,701 – $394,600</td><td>$35,302 + 24% over $206,700</td></tr>
                <tr><td className={styles.gold}>32%</td><td>$394,601 – $501,050</td><td>$80,398 + 32% over $394,600</td></tr>
                <tr><td className={styles.red}>35%</td><td>$501,051 – $751,600</td><td>$114,462 + 35% over $501,050</td></tr>
                <tr><td className={styles.red}>37%</td><td>$751,601+</td><td>$202,154 + 37% over $751,600</td></tr>
              </tbody>
            </table>
          </section>

          <section id="hoh">
            <h2>Head of Household — 2026 Federal Tax Brackets</h2>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Rate</th>
                  <th>Taxable Income (HoH)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={styles.green}>10%</td><td>$0 – $17,000</td></tr>
                <tr><td className={styles.hi}>12%</td><td>$17,001 – $64,850</td></tr>
                <tr><td className={styles.hi}>22%</td><td>$64,851 – $103,350</td></tr>
                <tr><td className={styles.gold}>24%</td><td>$103,351 – $197,300</td></tr>
                <tr><td className={styles.gold}>32%</td><td>$197,301 – $250,500</td></tr>
                <tr><td className={styles.red}>35%</td><td>$250,501 – $626,350</td></tr>
                <tr><td className={styles.red}>37%</td><td>$626,351+</td></tr>
              </tbody>
            </table>
          </section>

          <section id="standard-ded">
            <p className={styles.sectionLabel}>Standard Deduction</p>
            <h2>2026 Standard Deduction by Filing Status</h2>
            <p>The standard deduction reduces taxable income before any bracket calculation. Roughly 90% of filers take the standard deduction. Taxpayers 65+ or blind receive an additional amount.</p>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Filing Status</th>
                  <th>Standard Deduction</th>
                  <th>Age 65+ Add-On</th>
                  <th>Total if 65+</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Single</td><td className={styles.hi}>$15,000</td><td>+$1,600</td><td className={styles.green}>$16,600</td></tr>
                <tr><td>Married Filing Jointly</td><td className={styles.hi}>$30,000</td><td>+$1,300/spouse</td><td className={styles.green}>$32,600–$33,900</td></tr>
                <tr><td>Head of Household</td><td className={styles.hi}>$22,500</td><td>+$1,600</td><td className={styles.green}>$24,100</td></tr>
                <tr><td>Married Filing Separately</td><td className={styles.hi}>$15,000</td><td>+$1,300</td><td className={styles.green}>$16,300</td></tr>
              </tbody>
            </table>
            <div className={styles.infoBox}>
              <p>📌 <strong>Retirement tip:</strong> A married couple both age 65 can have up to $33,900 in taxable income before owing any federal income tax. This is the sweet spot for Roth conversion planning — converting pre-tax dollars up to this threshold costs nothing in tax.</p>
            </div>
          </section>

          <section id="how-it-works">
            <p className={styles.sectionLabel}>Tax Education</p>
            <h2>How Marginal Tax Brackets Actually Work</h2>
            <p>Tax brackets are <strong>marginal</strong> — each rate only applies to the income within that band, not your entire income. Your “effective rate” is always lower than your marginal bracket.</p>
            <div className={styles.highlightBox}>
              <p>💡 <strong>Example (Single filer, $80,000 taxable income):</strong><br />
                10% &times; $11,925 = $1,193<br />
                12% &times; $36,550 = $4,386<br />
                22% &times; $31,525 = $6,936<br />
                Total tax: <strong>$12,515</strong> — Effective rate: <strong>15.6%</strong> (not 22%)
              </p>
            </div>
            <div className={styles.cardGrid}>
              <div className={styles.card}>
                <div className={styles.cardVal}>Marginal Rate</div>
                <h4>Your top bracket</h4>
                <p>Applies only to income within that specific range. Your &quot;22% bracket&quot; doesn't mean you owe 22% of all your income.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardVal}>Effective Rate</div>
                <h4>What you truly pay</h4>
                <p>Total tax ÷ total income. Always lower than your marginal rate. The number that actually matters for budgeting.</p>
              </div>
            </div>
          </section>

          <section id="retirement">
            <p className={styles.sectionLabel}>Retirement Planning</p>
            <h2>How Tax Brackets Affect Retirement Income Strategy</h2>
            <p>Your bracket determines how much of each retirement dollar the IRS keeps. Understanding this drives every major retirement tax decision:</p>
            <ul>
              <li><strong>Roth conversions:</strong> Convert pre-tax IRA dollars in years when you're in the 10–22% bracket to avoid future RMDs in the 24–32% bracket</li>
              <li><strong>Withdrawal order:</strong> Tap taxable accounts first (capital gains rates), then Roth (tax-free), then traditional IRA/401(k) (ordinary income) — sequenced to stay in lower brackets</li>
              <li><strong>RMD management:</strong> Required Minimum Distributions stack on top of all other income and can push you from 22% to 24% — or trigger Medicare IRMAA surcharges</li>
              <li><strong>Capital gains threshold:</strong> Stay below $48,350 (single) / $96,700 (MFJ) in taxable income and your long-term capital gains are taxed at 0%</li>
              <li><strong>Social Security taxation:</strong> Higher income increases the taxable portion of Social Security benefits (up to 85%), creating a hidden extra marginal rate of ~8% at certain income levels</li>
            </ul>
            <div className={styles.warnBox}>
              <p>⚠️ <strong>The critical threshold at $48,475 (single):</strong> Crossing this line means both a jump from 12% to 22% income tax AND from 0% to 15% on long-term capital gains. A $1 difference in income can cost thousands in taxes for a retiree with significant investment assets. Plan your income to stay below this line when possible.</p>
            </div>
          </section>

          <section id="amt">
            <h2>Alternative Minimum Tax (AMT) — 2026</h2>
            <p>Most middle-income taxpayers are exempt from AMT due to a large exemption amount. You only pay AMT if it exceeds your regular tax calculation.</p>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Filing Status</th>
                  <th>AMT Exemption</th>
                  <th>Phase-Out Begins</th>
                  <th>AMT Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Single</td><td className={styles.hi}>$88,100</td><td>$626,350</td><td>26% / 28%</td></tr>
                <tr><td>Married Filing Jointly</td><td className={styles.hi}>$137,000</td><td>$1,252,700</td><td>26% / 28%</td></tr>
                <tr><td>Married Filing Separately</td><td className={styles.hi}>$68,500</td><td>$626,350</td><td>26% / 28%</td></tr>
              </tbody>
            </table>
          </section>

          <section id="changes">
            <h2>2025 vs. 2026: What Changed</h2>
            <p>IRS adjusts brackets each year for inflation. 2026 thresholds rose approximately 2.8% from 2025 due to COLA adjustments.</p>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Rate</th>
                  <th>Single 2025 Top</th>
                  <th>Single 2026 Top</th>
                  <th>Increase</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={styles.green}>10%</td><td>$11,600</td><td className={styles.hi}>$11,925</td><td className={styles.green}>+$325</td></tr>
                <tr><td className={styles.hi}>12%</td><td>$47,150</td><td className={styles.hi}>$48,475</td><td className={styles.green}>+$1,325</td></tr>
                <tr><td className={styles.hi}>22%</td><td>$100,525</td><td className={styles.hi}>$103,350</td><td className={styles.green}>+$2,825</td></tr>
                <tr><td className={styles.gold}>24%</td><td>$191,950</td><td className={styles.hi}>$197,300</td><td className={styles.green}>+$5,350</td></tr>
                <tr><td className={styles.gold}>32%</td><td>$243,725</td><td className={styles.hi}>$250,525</td><td className={styles.green}>+$6,800</td></tr>
                <tr><td className={styles.red}>35%/37%</td><td>$609,350</td><td className={styles.hi}>$626,350</td><td className={styles.green}>+$17,000</td></tr>
              </tbody>
            </table>
          </section>

          <section className={styles.faqSection} id="faq">
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <div key={index} className={`${styles.faqItem} ${openFaq === index ? styles.open : ''}`}>
                <button className={styles.faqQ} onClick={() => toggleFaq(index)}>
                  {faq.q} <span className={styles.faqIcon}>+</span>
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
              <li>IRS Rev. Proc. 2025-40 — 2026 inflation adjustments for tax provisions</li>
              <li>IRS Publication 505 — Tax Withholding and Estimated Tax</li>
              <li>IRS Publication 554 — Tax Guide for Seniors</li>
              <li>Plootus Research Team — April 2026</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.tocBox}>
            <h3>On This Page</h3>
            <ol>
              <li><a href="#calculator">Tax Calculator</a></li>
              <li><a href="#single">Single Filer Brackets</a></li>
              <li><a href="#mfj">Married Filing Jointly</a></li>
              <li><a href="#hoh">Head of Household</a></li>
              <li><a href="#standard-ded">Standard Deduction</a></li>
              <li><a href="#how-it-works">How Brackets Work</a></li>
              <li><a href="#retirement">Retirement Impact</a></li>
              <li><a href="#amt">AMT 2026</a></li>
              <li><a href="#changes">2025 vs 2026</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>
          
          <div className={styles.ctaCard}>
            <h4>What's my retirement number?</h4>
            <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
            <div onClick={() => router.push('/retirement-calculator')} className={styles.ctaBtn}>Check Here</div>
          </div>
          
          <div className={styles.sidebarCard} style={{ background: 'var(--gold-light)', borderColor: '#F0C050' }}>
            <h4 style={{ color: '#7C5A00' }}>⚠️ Key Threshold</h4>
            <p style={{ fontSize: '13px', color: '#7C5A00', margin: 0 }}>
              Income above <strong>$48,350 (single) / $96,700 (MFJ)</strong> in taxable income triggers both the 22% ordinary income bracket AND the 15% capital gains rate. The most important line for retirees to manage.
            </p>
          </div>

          <div className={styles.sidebarCard}>
            <h4>Related Tax Guides</h4>
            <ul className={styles.relatedLinks}>
              <li><a onClick={() => router.push('/capital-gains-tax-rates')}>Capital Gains Tax Rates</a></li>
              <li><a onClick={() => router.push('/roth-conversion-strategy')}>Roth Conversion Strategy</a></li>
              <li><a onClick={() => router.push('/ira-contribution-limits')}>IRA Contribution Limits</a></li>
              <li><a onClick={() => router.push('/standard-deduction-2026')}>Standard Deduction 2026</a></li>
              <li><a onClick={() => router.push('/tax-loss-harvesting')}>Tax-Loss Harvesting Guide</a></li>
              <li><a onClick={() => router.push('/retirement-tax-guide')}>Retirement Tax Guide</a></li>
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

export default FederalIncomeTaxBrackets;
