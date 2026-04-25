import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './SocialSecurityTaxCalculator.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const SocialSecurityTaxCalculator = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);
  const [ssBen, setSsBen] = useState('');
  const [ssAgi, setSsAgi] = useState('');
  const [ssTei, setSsTei] = useState('0');
  const [filing, setFiling] = useState('single');
  const [result, setResult] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const calcSSTax = () => {
    const ben = parseFloat(ssBen) || 0;
    const agi = parseFloat(ssAgi) || 0;
    const tei = parseFloat(ssTei) || 0;
    const pi = agi + tei + (ben * 0.5);
    const t1 = filing === 'mfj' ? 32000 : 25000;
    const t2 = filing === 'mfj' ? 44000 : 34000;
    let taxable = 0;
    
    if (pi <= t1) {
      taxable = 0;
    } else if (pi <= t2) {
      taxable = Math.min(ben * 0.50, (pi - t1) * 0.50);
    } else {
      const t2taxable = Math.min(ben * 0.50, (t2 - t1) * 0.50);
      const additional = Math.min(ben * 0.85 - t2taxable, (pi - t2) * 0.85);
      taxable = Math.min(ben * 0.85, t2taxable + additional);
    }
    
    const pct = ben > 0 ? ((taxable / ben) * 100).toFixed(1) : 0;
    
    setResult({
      taxable: Math.round(taxable),
      pi: Math.round(pi),
      ben: Math.round(ben),
      pct,
      taxFree: Math.round(ben - taxable)
    });
  };

  return (
    <div className={styles.container}>
      <HubNav />

      <div className={styles.hero}>
        <div className={styles.heroBg}>TAXES</div>
        <div className={styles.heroInner}>
          <p className={styles.heroTag}>🧮 Free Calculator · 2026 IRS Thresholds · Provisional Income</p>
          <h1>Social Security Tax Calculator 2026: Is Your Benefit Taxable?</h1>
          <p className={styles.heroDeck}>
            Up to 85% of Social Security benefits can be federally taxable. Use this free calculator to find out exactly how much of your SS benefit is taxable based on your provisional income, then learn proven strategies to keep more of your benefit.
          </p>
          <div className={styles.heroMeta}>
            <span>📅 Updated April 2026</span>
            <span>📚 IRS Publication 915</span>
            <span>🧮 Free Calculator</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>85%</span>
            <span className={styles.statLabel}>Max % of SS Benefits Taxable</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>$34K</span>
            <span className={styles.statLabel}>Single Threshold — 85% Taxable</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>$44K</span>
            <span className={styles.statLabel}>MFJ Threshold — 85% Taxable</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>28</span>
            <span className={styles.statLabel}>States That Fully Exempt SS</span>
          </div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent} role="main">
          
          <section id="calculator">
            <p className={styles.sectionLabel}>Free Calculator</p>
            <h2>Social Security Benefit Tax Calculator</h2>
            
            <div className={styles.calcBox}>
              <h3>🧮 Calculate Your Social Security Tax (2026)</h3>
              <div className={styles.calcRow}>
                <div className={styles.calcField}>
                  <label>Annual Social Security Benefit ($)</label>
                  <input 
                    type="number" 
                    value={ssBen} 
                    onChange={(e) => setSsBen(e.target.value)} 
                    placeholder="e.g. 24000" 
                    min="0" 
                  />
                </div>
                <div className={styles.calcField}>
                  <label>Other AGI (wages, pensions, IRA withdrawals) ($)</label>
                  <input 
                    type="number" 
                    value={ssAgi} 
                    onChange={(e) => setSsAgi(e.target.value)} 
                    placeholder="e.g. 30000" 
                    min="0" 
                  />
                </div>
                <div className={styles.calcField}>
                  <label>Tax-Exempt Interest Income ($)</label>
                  <input 
                    type="number" 
                    value={ssTei} 
                    onChange={(e) => setSsTei(e.target.value)} 
                    min="0" 
                  />
                </div>
              </div>
              <div className={styles.calcRow}>
                <div className={styles.calcField}>
                  <label>Filing Status</label>
                  <select value={filing} onChange={(e) => setFiling(e.target.value)}>
                    <option value="single">Single / HoH / MFS</option>
                    <option value="mfj">Married Filing Jointly</option>
                  </select>
                </div>
                <button className={styles.calcBtn} onClick={calcSSTax}>Calculate →</button>
              </div>
              
              {result && (
                <div className={`${styles.calcResult} ${styles.show}`}>
                  <div className={styles.calcResultNum}>${result.taxable.toLocaleString()}</div>
                  <div className={styles.calcResultLabel}>Taxable Portion of Social Security Benefits</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-mid)', marginTop: '12px', lineHeight: '1.9' }}>
                    Provisional income: <strong>${result.pi.toLocaleString()}</strong><br />
                    SS benefit: <strong>${result.ben.toLocaleString()}</strong><br />
                    Taxable portion: <strong>${result.taxable.toLocaleString()} ({result.pct}% of your benefit)</strong><br />
                    Tax-free portion: <strong>${result.taxFree.toLocaleString()}</strong><br /><br />
                    <em>The taxable amount is then taxed at your regular federal income tax bracket rate — not at a flat rate.</em>
                  </div>
                </div>
              )}
            </div>
          </section>

          <section id="how-it-works">
            <p className={styles.sectionLabel}>How It Works</p>
            <h2>How Social Security Benefits Are Taxed</h2>
            <p>Social Security benefits were not always taxable. Congress added taxation of benefits in 1983 (up to 50%) and expanded it in 1993 (up to 85%) to help fund Social Security's solvency. The income thresholds have <strong>never been adjusted for inflation</strong> since 1983 and 1993 — meaning more retirees pay tax on SS every year due to benefit increases and rising incomes.</p>
            <p>The IRS uses a specific formula based on your "provisional income" (also called "combined income") to determine how much of your benefit is taxable. Crucially, this is not a flat 85% tax on benefits — it means at most 85% of your benefit is <em>included in taxable income</em>, then taxed at your regular bracket rate.</p>
          </section>

          <section id="provisional">
            <h2>The Provisional Income Formula</h2>
            <div className={styles.highlightBox}>
              <p>📌 <strong>Provisional Income = Adjusted Gross Income (AGI) + Tax-Exempt Interest + 50% of Annual Social Security Benefits</strong><br /><br />
              AGI includes: wages, self-employment income, IRA withdrawals, pension income, capital gains, dividends, rental income (minus losses)<br />
              <em>Not included:</em> Roth IRA withdrawals, HSA distributions for qualified expenses, return of cost basis from taxable accounts</p>
            </div>
            <p>Notice that Roth IRA withdrawals do <strong>not</strong> count toward provisional income — this is one of the most powerful reasons to accumulate Roth assets for retirement.</p>
          </section>

          <section id="thresholds">
            <h2>2026 Federal Social Security Tax Thresholds</h2>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Filing Status</th>
                  <th>Provisional Income</th>
                  <th>Maximum SS Taxable</th>
                  <th>Tax Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="3"><strong>Single / HoH / MFS</strong></td>
                  <td className={styles.green}>Below $25,000</td>
                  <td className={styles.green}>0% — none taxable</td>
                  <td className={styles.green}>No tax on SS</td>
                </tr>
                <tr>
                  <td>$25,000 – $34,000</td>
                  <td className={styles.gold}>Up to 50% taxable</td>
                  <td className={styles.gold}>Phasing in</td>
                </tr>
                <tr>
                  <td className={styles.red}>Above $34,000</td>
                  <td className={styles.red}>Up to 85% taxable</td>
                  <td className={styles.red}>Max taxation</td>
                </tr>
                <tr>
                  <td rowSpan="3"><strong>Married Filing Jointly</strong></td>
                  <td className={styles.green}>Below $32,000</td>
                  <td className={styles.green}>0% — none taxable</td>
                  <td className={styles.green}>No tax on SS</td>
                </tr>
                <tr>
                  <td>$32,000 – $44,000</td>
                  <td className={styles.gold}>Up to 50% taxable</td>
                  <td className={styles.gold}>Phasing in</td>
                </tr>
                <tr>
                  <td className={styles.red}>Above $44,000</td>
                  <td className={styles.red}>Up to 85% taxable</td>
                  <td className={styles.red}>Max taxation</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>
              Note: These thresholds have not been indexed for inflation since 1983/1993. Source: IRS Publication 915.
            </p>
            
            <div className={styles.warnBox}>
              <p>⚠️ <strong>The "torpedo":</strong> Within the phase-in range, each additional dollar of income can effectively add $1.85 to your taxable income (your new dollar + $0.85 more of SS becoming taxable). This creates a hidden effective marginal rate up to 22.2% (12% bracket × 1.85) for retirees crossing these thresholds. It's sometimes called the Social Security "tax torpedo."</p>
            </div>
          </section>

          <section id="states">
            <h2>Which States Tax Social Security Benefits?</h2>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>State Tax Treatment</th>
                  <th>States</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.green}><strong>No state income tax (SS not taxed)</strong></td>
                  <td>Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, Wyoming</td>
                </tr>
                <tr>
                  <td className={styles.green}><strong>Fully exempt Social Security</strong></td>
                  <td>Alabama, Arizona, Arkansas, California, Colorado*, Delaware, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan, Mississippi, Missouri, Nebraska*, New Jersey, New York, North Carolina, Ohio, Oklahoma, Oregon, Pennsylvania, South Carolina, Virginia, Wisconsin</td>
                </tr>
                <tr>
                  <td className={styles.gold}><strong>Partially exempt / income-based</strong></td>
                  <td>Colorado*, Connecticut, Kansas, Minnesota, Montana, Nebraska*, New Mexico, Rhode Island, Utah, Vermont, West Virginia</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>
              *Colorado and Nebraska recently changed rules — verify current exemption amounts. State tax laws change. Verify with your state's revenue department. Updated April 2026.
            </p>
          </section>

          <section id="strategies">
            <p className={styles.sectionLabel}>Reduce Your SS Tax</p>
            <h2>6 Strategies to Minimize Social Security Taxation</h2>
            <ul>
              <li><strong>Use Roth IRA withdrawals instead of traditional IRA:</strong> Roth withdrawals don't count toward provisional income. Replacing a $20,000 traditional IRA withdrawal with a Roth withdrawal can keep you below the 85% threshold.</li>
              <li><strong>Use Qualified Charitable Distributions (QCDs):</strong> QCDs from your IRA (age 70½+) satisfy RMDs without adding to AGI — directly reducing provisional income. Up to $105,000/year.</li>
              <li><strong>Manage capital gain timing:</strong> Capital gains add to provisional income. Realize gains in years when other income is lower, or in years when you're already above the 85% threshold anyway (so marginal gains don't cause additional SS taxation).</li>
              <li><strong>Delay Social Security claiming:</strong> Paradoxically, claiming SS later means higher benefits — but it also means more years during the "conversion corridor" when your income is lower. Model the break-even carefully.</li>
              <li><strong>Consider I-bonds or deferred annuities:</strong> Interest on U.S. savings bonds (I-bonds) can be deferred — you only pay tax when you redeem them. Structuring redemptions strategically can help manage provisional income.</li>
              <li><strong>Relocate to a SS-exempt state:</strong> If your state taxes SS benefits, moving to one of the 28 states that fully exempt SS (or the 9 with no income tax) eliminates the state-level SS tax entirely.</li>
            </ul>
          </section>

          <section className={styles.faqSection} id="faq">
            <h2>Frequently Asked Questions</h2>
            
            {[
              {
                q: "How much of my Social Security benefit is taxable?",
                a: "It depends on your provisional income (AGI + tax-exempt interest + 50% of SS benefits). If provisional income is below $25,000 (single) or $32,000 (MFJ), none of your SS is federally taxable. Above $34,000 (single) / $44,000 (MFJ), up to 85% of benefits are included in taxable income. The taxable amount is then taxed at your regular bracket rate — it's not a flat 85% tax."
              },
              {
                q: "Does Roth IRA income affect Social Security taxes?",
                a: "No. Roth IRA qualified withdrawals are not included in your AGI and do not count toward provisional income. This is one of the key advantages of Roth assets in retirement — you can spend from your Roth without pushing more of your Social Security benefit into the taxable zone. Contrast this with traditional IRA withdrawals, which fully count toward provisional income."
              },
              {
                q: "Does municipal bond interest affect Social Security taxation?",
                a: "Yes — and this surprises many retirees. Tax-exempt municipal bond interest is added directly into the provisional income formula, even though it's federal-income-tax-exempt. A $20,000 muni bond interest payment can push your provisional income above the SS taxation threshold. This makes munis less attractive for retirees with significant SS income than they appear at first glance."
              },
              {
                q: "Will I get a 1099 for my Social Security benefits?",
                a: "Yes. The Social Security Administration sends Form SSA-1099 (or SSA-1042S for non-citizens) each January showing your total SS benefits for the prior year. Box 5 shows your net benefits — this is the number you use when calculating your taxable SS amount. You report this on Line 6a and 6b of Form 1040."
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
              <li>IRS Publication 915 — Social Security and Equivalent Railroad Retirement Benefits</li>
              <li>IRS Form 1040, Lines 6a and 6b — Social Security benefit reporting</li>
              <li>SSA — 2026 Social Security COLA and benefit schedule</li>
              <li>Tax Policy Center — Social Security Taxation History (1983/1993 legislation)</li>
              <li>Plootus Research — April 2026</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.tocBox}>
            <h3>On This Page</h3>
            <ol>
              <li><a href="#calculator">SS Tax Calculator</a></li>
              <li><a href="#how-it-works">How SS Taxation Works</a></li>
              <li><a href="#provisional">Provisional Income Formula</a></li>
              <li><a href="#thresholds">2026 Tax Thresholds</a></li>
              <li><a href="#states">State-by-State SS Tax</a></li>
              <li><a href="#strategies">Strategies to Reduce SS Tax</a></li>
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
        logoOpacity={0.8}
        logoGrayscale={100}
        paddingTop="40px"
        paddingBottom="60px"
      />
    </div>
  );
};

export default SocialSecurityTaxCalculator;
