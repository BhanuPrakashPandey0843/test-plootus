import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from './HsaContributionLimits.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const HsaContributionLimits = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);
  
  const [hsaContrib, setHsaContrib] = useState(4300);
  const [hsaBal, setHsaBal] = useState(5000);
  const [hsaYears, setHsaYears] = useState(25);
  
  const [hsaResult, setHsaResult] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const calcHSA = () => {
    const c = parseFloat(hsaContrib) || 4300;
    const b = parseFloat(hsaBal) || 0;
    const y = parseInt(hsaYears) || 25;
    const r = 0.07;
    const rm = r / 12;
    let bal = b;
    for (let m = 0; m < y * 12; m++) {
      bal = bal * (1 + rm) + c / 12;
    }
    
    setHsaResult({
      c,
      y,
      bal: Math.round(bal)
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>HSA Contribution Limits 2026: How to Use Your HSA as a Retirement Account | Plootus</title>
        <meta name="description" content="The HSA is the only account in the U.S. tax code with a triple tax advantage. Learn the 2026 contribution limits and the retirement optimization strategy." />
        <link rel="canonical" href="https://www.plootus.com/hsa-contribution-limits" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "HSA Contribution Limits 2026: How to Use Your HSA as a Retirement Account",
            "description": "Complete guide to Health Savings Account (HSA) contribution limits for 2026, IRS rules, and the triple-tax-free retirement strategy.",
            "author": {
              "@type": "Organization",
              "name": "Plootus Research Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Plootus",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.plootus.com/logo.png"
              }
            },
            "datePublished": "2026-04-01",
            "dateModified": "2026-04-25"
          })}
        </script>
      </Head>

      <HubNav />

      <div className={styles.hero}>
        <div className={styles['hero-inner']}>
          <p className={styles['hero-eyebrow']}>📘 Complete Guide · IRS 2026 Limits · The Triple-Tax Account</p>
          <h1>HSA Contribution Limits 2026: How to Use Your HSA as a Retirement Account</h1>
          <p className={styles['hero-deck']}>
            The <abbr title="Health Savings Account">HSA</abbr> is the only account in the U.S. tax code with a triple tax advantage — and most people use less than 30% of its potential. Here's the 2026 contribution limits and the retirement optimization strategy nobody teaches.
          </p>
          <div className={styles['hero-meta']}>
            <span>📅 Updated April 2026</span>
            <span>📚 Source: IRS Rev. Proc. 2025-19</span>
            <span>⏱ 8 min read</span>
          </div>
        </div>
      </div>

      <div className={styles['stat-strip']}>
        <div className={styles['stat-strip-inner']}>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$4,300</div>
            <div className={styles['stat-label']}>2026 HSA Limit — Self-Only</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$8,550</div>
            <div className={styles['stat-label']}>2026 HSA Limit — Family</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$1,000</div>
            <div className={styles['stat-label']}>Age 55+ Catch-Up</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">Triple</div>
            <div className={styles['stat-label']}>Tax Advantages</div>
          </div>
        </div>
      </div>

      <div className={styles['page-body']} itemScope itemType="https://schema.org/Article">
        <main className={styles['main-content']} role="main" aria-label="HSA Contribution Limits 2026 — Complete Guide">
          <section id="limits">
            <p className={styles['section-label']}>2026 IRS Limits</p>
            <h2>2026 HSA Contribution Limits</h2>
            <table className={styles['data-table']} summary="HSA contribution limits by coverage type and age for 2026 and comparison to 2025">
              <thead>
                <tr>
                  <th scope="col">Coverage<br />Type</th>
                  <th scope="col">2025 Limit</th>
                  <th scope="col">2026 Limit</th>
                  <th scope="col">Age 55+<br />2026</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.hi}>Self-Only (HDHP)</td>
                  <td>$4,150</td>
                  <td className={styles.hi}>$4,300</td>
                  <td className={styles.green}>$5,300</td>
                </tr>
                <tr>
                  <td className={styles.hi}>Family (HDHP)</td>
                  <td>$8,300</td>
                  <td className={styles.hi}>$8,550</td>
                  <td className={styles.green}>$9,550</td>
                </tr>
                <tr>
                  <td>Additional Catch-Up (Age 55+)</td>
                  <td>$1,000</td>
                  <td className={styles.hi}>$1,000</td>
                  <td>—</td>
                </tr>
              </tbody>
            </table>
            <div className={styles['info-box']}>
              <p>💡 <strong>2026 HDHP Requirements:</strong> Minimum deductible $1,650 (self) / $3,300 (family). Maximum out-of-pocket $8,300 (self) / $16,600 (family). You must be enrolled in a qualifying HDHP to contribute to an HSA.</p>
            </div>
          </section>

          <section id="triple-tax">
            <p className={styles['section-label']}>The Strategy</p>
            <h2>The HSA Triple Tax Advantage — Explained</h2>
            <div className={styles['card-grid']}>
              <div className={styles.card}>
                <div className={styles['card-val']}>Tax 1</div>
                <h4>Pre-Tax Contributions</h4>
                <p>HSA contributions through payroll are pre-FICA (Social Security and Medicare taxes) AND pre-income tax. That's a 22–37% federal + 7.65% FICA tax savings on every dollar contributed. Contributing directly (not through payroll) gives you an above-the-line income tax deduction but not the FICA savings.</p>
              </div>
              <div className={styles.card}>
                <div className={styles['card-val']}>Tax 2</div>
                <h4>Tax-Free Growth</h4>
                <p>HSA funds invested in stocks, ETFs, or mutual funds grow completely tax-free — no capital gains taxes, no dividend taxes. The account compounds untouched by the IRS until you withdraw.</p>
              </div>
              <div className={styles.card}>
                <div className={styles['card-val']}>Tax 3</div>
                <h4>Tax-Free Withdrawals</h4>
                <p>Withdrawals for qualified medical expenses are 100% tax-free at any age. In retirement, healthcare is one of your biggest expenses — funding it from a tax-free HSA is enormously valuable.</p>
              </div>
              <div className={styles.card}>
                <div className={styles['card-val']}>Bonus</div>
                <h4>After 65: Second IRA</h4>
                <p>After age 65, HSA withdrawals for non-medical expenses are taxed like a Traditional IRA — ordinary income, no penalty. This makes your HSA a backup retirement account if you stay healthy.</p>
              </div>
            </div>
          </section>

          <section id="strategy">
            <p className={styles['section-label']}>Optimal Approach</p>
            <h2>The "Invest Your HSA, Pay Medical Costs Out-of-Pocket" Strategy</h2>
            <p>The most powerful HSA strategy used by retirement-focused savers:</p>
            <ol style={{ paddingLeft: '20px', color: 'var(--text-mid)', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
              <li>Max your HSA every year ($4,300 or $8,550 in 2026)</li>
              <li>Pay all current medical costs <em>out-of-pocket</em> (not from HSA)</li>
              <li>Invest all HSA funds in low-cost index funds immediately</li>
              <li>Save every single medical receipt (no expiration on reimbursement)</li>
              <li>In retirement, reimburse yourself tax-free from accumulated receipts, OR</li>
              <li>Use HSA funds directly for Medicare premiums, dental, vision, LTC insurance</li>
            </ol>
            <div className={styles['warn-box']}>
              <p>⚠️ <strong>Key Requirement:</strong> You need sufficient cash flow to pay medical bills out-of-pocket. This strategy works best when you have a solid emergency fund AND are in a low-deductible-usage year.</p>
            </div>
          </section>

          <section id="calculator">
            <p className={styles['section-label']}>Calculator</p>
            <h2>HSA Growth Projector</h2>
            <div className={styles['calc-box']}>
              <h3>🧮 How Much Will My HSA Be Worth at Retirement?</h3>
              <div className={styles['calc-row']}>
                <div className={styles['calc-field']}>
                  <label>Annual Contribution ($)</label>
                  <input type="number" value={hsaContrib} onChange={e => setHsaContrib(e.target.value)} step="100" />
                </div>
                <div className={styles['calc-field']}>
                  <label>Current Balance ($)</label>
                  <input type="number" value={hsaBal} onChange={e => setHsaBal(e.target.value)} step="500" />
                </div>
                <div className={styles['calc-field']}>
                  <label>Years to Retirement</label>
                  <input type="number" value={hsaYears} onChange={e => setHsaYears(e.target.value)} min="1" max="45" />
                </div>
                <button className={styles['calc-btn']} onClick={calcHSA}>Project</button>
              </div>
              
              {hsaResult && (
                  <div className={styles['calc-result']} style={{ display: 'block' }}>
                    <div className={styles['calc-result-num']}>${hsaResult.bal.toLocaleString()}</div>
                    <div className={styles['calc-result-label']}>Projected HSA Balance (at 7% return)</div>
                    <div style={{ marginTop: '12px', fontSize: '13px', color: 'var(--text-mid)' }}>
                      Contributing <strong>{hsaResult.c.toLocaleString()}/year</strong> for <strong>{hsaResult.y} years</strong> at 7% return.<br/><br/>
                      If entirely tax-free (used for healthcare): equivalent to <strong>${Math.round(hsaResult.bal / 0.78).toLocaleString()}</strong> in a taxable account at a 22% tax rate.<br/><br/>
                      Covers approximately <strong>{Math.round(hsaResult.bal / 413000 * 100)}%</strong> of Fidelity's $413,000 lifetime healthcare estimate for a couple.
                    </div>
                  </div>
              )}
            </div>
          </section>

          <section id="faq" aria-label="Frequently Asked Questions" className={styles['faq-section']}>
            <h2>Frequently Asked Questions</h2>
            {[
              {
                q: 'What are the HSA contribution limits for 2026?',
                a: "The 2026 HSA contribution limits (set by the IRS annually) are: $4,300 for self-only HDHP coverage and $8,550 for family HDHP coverage. Individuals age 55 or older by December 31, 2026 can contribute an additional $1,000 catch-up contribution: $5,300 (self-only) or $9,550 (family). These limits represent an increase from 2025 limits of $4,150 (self-only) and $8,300 (family). Source: IRS Revenue Procedure 2025-19."
              },
              {
                q: 'What qualifies as a high-deductible health plan (HDHP) for HSA?',
                a: "To be eligible for an HSA, you must be enrolled in a qualifying High-Deductible Health Plan (HDHP). For 2026, an HDHP must have: minimum deductible of $1,650 (self-only) or $3,300 (family), and maximum out-of-pocket costs of $8,300 (self-only) or $16,600 (family). You cannot be enrolled in Medicare, cannot be claimed as someone else's dependent, and generally cannot have other health coverage. Source: IRS 2026."
              },
              {
                q: 'Can I use my HSA as a retirement account?',
                a: "Yes — and this is one of the most underutilized retirement strategies available. After age 65, you can withdraw HSA funds for ANY purpose (not just medical) penalty-free, paying only ordinary income tax — exactly like a Traditional IRA. Before 65, non-medical withdrawals incur a 20% penalty plus taxes. The key strategy: invest your HSA in growth-oriented index funds (most HSAs offer investment options once you exceed $1,000–$2,000 in balance), let it compound, and save all medical receipts. You can reimburse yourself tax-free from old receipts at any time. A maxed HSA ($4,300/year from age 30 to 65 at 7% return) grows to approximately $640,000 — entirely tax-free if used for healthcare. Source: IRS Publication 969; Plootus Research 2026."
              },
              {
                q: 'What expenses can I pay with HSA funds?',
                a: "HSA funds can be used tax-free for any IRS-qualified medical expense for you, your spouse, or your dependents. This includes: doctor visits and copays, prescription medications, dental care (including braces, fillings, implants), vision care (glasses, contacts, LASIK), mental health treatment, chiropractic care, Medicare premiums (Parts B, C, D — NOT Medigap after a certain point), long-term care insurance premiums (age-based limits), and most medical equipment. HSA funds cannot be used for over-the-counter medications without a prescription (as of 2020, many OTC items became eligible under the CARES Act). Source: IRS Publication 502; IRS Publication 969."
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
              <li>IRS Revenue Procedure 2025-19: 2026 HSA contribution limits</li>
              <li>IRS Publication 969: Health Savings Accounts and Other Tax-Favored Health Plans</li>
              <li>IRS Publication 502: Medical and Dental Expenses</li>
              <li>CARES Act (2020): OTC medication HSA eligibility</li>
              <li>SECURE 2.0 Act (2023): HSA provisions</li>
              <li>Fidelity Investments, Retiree Health Care Cost Estimate 2024 ($413,000 estimate)</li>
              <li>Plootus Research 2026</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles['toc-box']}>
            <h3>On This Page</h3>
            <ul>
              <li><a href="#limits">2026 HSA Limits</a></li>
              <li><a href="#triple-tax">Triple Tax Advantage</a></li>
              <li><a href="#strategy">Investment Strategy</a></li>
              <li><a href="#calculator">HSA Projector</a></li>
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
            <div onClick={() => router.push('/403b-guide')} style={{cursor: 'pointer'}}>→ 403(b) Plan Guide</div>
            <div onClick={() => router.push('/roth-vs-traditional')} style={{cursor: 'pointer'}}>→ Roth vs. Traditional IRA</div>
            <div onClick={() => router.push('/healthcare-costs-in-retirement')} style={{cursor: 'pointer'}}>→ Healthcare Costs in Retirement</div>
            <div onClick={() => router.push('/401k-by-age')} style={{cursor: 'pointer'}}>→ 401(k) Contribution Limits</div>
            <div onClick={() => router.push('/how-much-to-retire')} style={{cursor: 'pointer'}}>→ How Much Do I Need to Retire?</div>
          </div>
          <div className={styles['sidebar-card']} style={{ background: 'var(--off-white)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '8px' }}>Key Stat</p>
            <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.45, marginBottom: '5px' }}>"Only 4% of HSA accountholders invest their HSA funds. The other 96% earn near-zero in a cash account instead of compounding at 7%+."</p>
            <p style={{ fontSize: '11px', color: 'var(--text-light)', margin: 0 }}>Source: Devenir Research, 2024 HSA Research Report</p>
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

export default HsaContributionLimits;
