import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from './Guide403b.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const Guide403b = () => {
  const router = useRouter();
  const [calcState, setCalcState] = useState({
    balance: 50000,
    contribution: 12000,
    years: 20,
    rate: 7,
  });

  const [calcResult, setCalcResult] = useState(null);

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleCalc = () => {
    const b = parseFloat(calcState.balance) || 0;
    const c = parseFloat(calcState.contribution) || 0;
    const y = parseInt(calcState.years) || 20;
    const r = (parseFloat(calcState.rate) / 100) || 0.07;
    const fv = b * Math.pow(1 + r, y) + c * ((Math.pow(1 + r, y) - 1) / r);

    setCalcResult({
      futureValue: Math.round(fv),
      annualIncome: Math.round(fv * 0.04),
      optimizedFutureValue: Math.round(b * Math.pow(1 + r, y) + (24500) * ((Math.pow(1 + r, y) - 1) / r)),
      balance: b,
      contribution: c,
      years: y,
      rate: r,
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>403(b) Retirement Plan: Contribution Limits, Rules & Optimization Guide (2026) | Plootus</title>
        <meta name="description" content="Complete guide to 403(b) retirement plans for teachers, nurses, and nonprofit workers. Covers 2026 contribution limits, catch-up rules, and investment strategies." />
        <link rel="canonical" href="https://www.plootus.com/403b-guide" />
      </Head>

      <HubNav />

      <div className={styles.hero}>
        <div className={styles['hero-inner']}>
          <p className={styles['hero-eyebrow']}>📘 Complete Guide · 2026 IRS Data · Teachers, Nurses & Nonprofit Workers</p>
          <h1>403(b) Retirement Plan: Contribution Limits, Rules & Optimization Guide (2026)</h1>
          <p className={styles['hero-deck']}>
            If you work for a school, hospital, university, or nonprofit, you have a 403(b) — not a 401(k). The 2026 limits are the same, but the rules (and often the investment options) are different. Here's everything you need to know to maximize it.
          </p>
          <div className={styles['hero-meta']}>
            <span>📅 Updated April 2026</span>
            <span>⏱ 9 min read</span>
            <span>📚 Source: IRS 2026</span>
            <span>✅ Verified by Plootus Research</span>
          </div>
        </div>
      </div>

      <div className={styles['stat-strip']}>
        <div className={styles['stat-strip-inner']}>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']}>$24,500</div>
            <div className={styles['stat-label']}>403(b) Standard Limit 2026</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']}>$35,750</div>
            <div className={styles['stat-label']}>Ages 60–63 Super Catch-Up</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']}>$3,000</div>
            <div className={styles['stat-label']}>15-Year Rule Extra Catch-Up</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']}>$15,000</div>
            <div className={styles['stat-label']}>Lifetime 15-Year Rule Max</div>
          </div>
        </div>
      </div>

      <div className={styles['page-body']} itemScope itemType="https://schema.org/Article">
        <main className={styles['main-content']} role="main" aria-label="403(b) Plan Guide 2026">
          <section id="what-is">
            <p className={styles['section-label']}>The Basics</p>
            <h2>What Is a 403(b) Plan?</h2>
            <p>
              A <strong>403(b) plan</strong> — also called a <abbr title="Tax-Sheltered Annuity">TSA</abbr> or Tax-Deferred Annuity — is a defined contribution retirement plan for employees of:
            </p>
            <div className={styles['card-grid']}>
              <div className={styles.card}>
                <h4>🏫 Public Schools & Universities</h4>
                <p>K–12 teachers, administrators, college faculty and staff at public institutions. The largest 403(b) segment by number of participants.</p>
              </div>
              <div className={styles.card}>
                <h4>🏥 Hospitals & Healthcare</h4>
                <p>Nurses, doctors, administrators at nonprofit hospitals (most U.S. hospitals are technically nonprofits under 501(c)(3)).</p>
              </div>
              <div className={styles.card}>
                <h4>🏛️ Nonprofit Organizations</h4>
                <p>Any 501(c)(3) organization — charities, foundations, cultural institutions, social services agencies.</p>
              </div>
              <div className={styles.card}>
                <h4>⛪ Religious Organizations</h4>
                <p>Churches and other religious organizations have special 403(b) rules with some additional flexibility on plan administration.</p>
              </div>
            </div>
            <div className={styles['info-box']}>
              <p>💡 <strong>Quick Check:</strong> Look at your pay stub. If it shows "403(b)" deductions, you have this plan. If it shows "401(k)" you have a 401(k). Some employees — particularly at hospitals affiliated with universities — may have access to both.</p>
            </div>
          </section>

          <section id="limits">
            <p className={styles['section-label']}>2026 Contribution Limits</p>
            <h2>403(b) Contribution Limits for 2026</h2>
            <p>The IRS sets 403(b) limits identically to 401(k) limits since the SECURE Act. There are up to three simultaneous catch-up opportunities for older workers:</p>
            <table className={styles['data-table']} summary="403(b) contribution limits for 2026 by age category">
              <thead>
                <tr>
                  <th scope="col">Age</th>
                  <th scope="col">Annual Limit</th>
                  <th scope="col">How to Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Under 50</td>
                  <td className={styles.hi}>$24,500</td>
                  <td>Standard pre-tax or Roth 403(b) contributions</td>
                </tr>
                <tr>
                  <td>Age 50+</td>
                  <td className={styles.hi}>$32,500 (+$8,000)</td>
                  <td>Standard + Age 50+ catch-up contribution</td>
                </tr>
                <tr>
                  <td>Ages 60–63 (SECURE 2.0)</td>
                  <td className={styles.hi}>$35,750 (+$11,250)</td>
                  <td>Standard + Super catch-up (replaces standard catch-up)</td>
                </tr>
                <tr>
                  <td>15-Year Rule (any age)</td>
                  <td className={styles.hi}>+$3,000/yr (up to $15,000 lifetime)</td>
                  <td>403(b)-only extra catch-up for 15+ year employees</td>
                </tr>
              </tbody>
            </table>
            <div className={styles['warn-box']}>
              <p>⚠️ <strong>SECURE 2.0 Super Catch-Up:</strong> The ages 60–63 super catch-up ($11,250 extra instead of $8,000) took effect in 2025. If you turn 60, 61, 62, or 63 in 2026, you qualify. At 64, you revert to the standard $8,000 catch-up.</p>
            </div>
          </section>

          <section id="vs-401k">
            <p className={styles['section-label']}>Comparison</p>
            <h2>403(b) vs. 401(k): Key Differences</h2>
            <table className={styles['data-table']} summary="403(b) vs 401(k) comparison table — contribution limits, rules, and investment options">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">403(b)</th>
                  <th scope="col">401(k)</th>
                  <th scope="col">Verdict</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Contribution Limit (2026)</td>
                  <td>$24,500</td>
                  <td>$24,500</td>
                  <td className={styles.green}>Equal</td>
                </tr>
                <tr>
                  <td>Age 50+ Catch-Up</td>
                  <td>$8,000 total</td>
                  <td>$8,000 total</td>
                  <td className={styles.green}>Equal</td>
                </tr>
                <tr>
                  <td>Ages 60–63 Super Catch-Up (SECURE 2.0)</td>
                  <td>$11,250 extra</td>
                  <td>$11,250 extra</td>
                  <td className={styles.green}>Equal</td>
                </tr>
                <tr>
                  <td>15-Year Rule Extra Catch-Up</td>
                  <td>✅ Yes (up to $3,000/yr)</td>
                  <td>❌ No</td>
                  <td className={styles.green}>403(b) advantage</td>
                </tr>
                <tr>
                  <td>Employer Match Available</td>
                  <td>✅ Usually</td>
                  <td>✅ Usually</td>
                  <td className={styles.green}>Equal</td>
                </tr>
                <tr>
                  <td>Roth Option</td>
                  <td>✅ Yes (Roth 403(b))</td>
                  <td>✅ Yes (Roth 401(k))</td>
                  <td className={styles.green}>Equal</td>
                </tr>
                <tr>
                  <td>Investment Options</td>
                  <td>Often limited (annuities)</td>
                  <td>Broader (mutual funds)</td>
                  <td className={styles.green}>401(k) often better</td>
                </tr>
                <tr>
                  <td>Typical Employer Types</td>
                  <td>Schools, hospitals, nonprofits</td>
                  <td>Private companies, some gov.</td>
                  <td className={styles.green}>Different</td>
                </tr>
                <tr>
                  <td>Plootus Support</td>
                  <td>✅ Full optimization</td>
                  <td>✅ Full optimization</td>
                  <td className={styles.green}>Equal</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="calculator">
            <p className={styles['section-label']}>Calculator</p>
            <h2>403(b) Savings Projector</h2>
            <div className={styles['calc-box']}>
              <h3>🧮 How Much Will My 403(b) Be Worth at Retirement?</h3>
              <div className={styles['calc-row']}>
                <div className={styles['calc-field']}>
                  <label>Current Balance ($)</label>
                  <input
                    type="number"
                    value={calcState.balance}
                    step="1000"
                    onChange={(e) => setCalcState({ ...calcState, balance: e.target.value })}
                  />
                </div>
                <div className={styles['calc-field']}>
                  <label>Annual Contribution ($)</label>
                  <input
                    type="number"
                    value={calcState.contribution}
                    step="500"
                    onChange={(e) => setCalcState({ ...calcState, contribution: e.target.value })}
                  />
                </div>
                <div className={styles['calc-field']}>
                  <label>Years to Retirement</label>
                  <input
                    type="number"
                    value={calcState.years}
                    min="1"
                    max="45"
                    onChange={(e) => setCalcState({ ...calcState, years: e.target.value })}
                  />
                </div>
                <div className={styles['calc-field']}>
                  <label>Expected Return (%)</label>
                  <input
                    type="number"
                    value={calcState.rate}
                    min="1"
                    max="12"
                    step="0.5"
                    onChange={(e) => setCalcState({ ...calcState, rate: e.target.value })}
                  />
                </div>
                <button className={styles['calc-btn']} onClick={handleCalc}>
                  Project
                </button>
              </div>

              {calcResult && (
                <div className={`${styles['calc-result']} ${styles.show}`}>
                  <div className={styles['calc-result-num']}>${calcResult.futureValue.toLocaleString()}</div>
                  <div className={styles['calc-result-label']}>Projected 403(b) Balance at Retirement</div>
                  <div style={{ marginTop: '12px', fontSize: '13px', color: 'var(--text-mid)' }}>
                    Starting with <strong>{calcResult.balance.toLocaleString()}</strong>, contributing{' '}
                    <strong>{calcResult.contribution.toLocaleString()}/year</strong> for <strong>{calcResult.years} years</strong>{' '}
                    at <strong>{(calcResult.rate * 100).toFixed(1)}%</strong> return.
                    <br />
                    <br />
                    This would generate approximately <strong>${calcResult.annualIncome.toLocaleString()}/year</strong> in retirement
                    income using the 4% withdrawal rule.
                    <br />
                    <br />
                    <strong>Tip:</strong> Maximizing to $24,500/year instead would project to{' '}
                    <strong>${calcResult.optimizedFutureValue.toLocaleString()}</strong>.
                  </div>
                </div>
              )}
            </div>
          </section>

          <section id="faq" aria-label="Frequently Asked Questions" className={styles['faq-section']}>
            <h2>Frequently Asked Questions</h2>
            {[
              {
                q: 'What is a 403(b) plan and who qualifies?',
                a: 'A 403(b) plan, also called a Tax-Sheltered Annuity (TSA), is a tax-advantaged retirement plan for employees of public schools, colleges, universities, certain nonprofits (501(c)(3) organizations), hospitals, and some religious organizations. If your employer is a school district, hospital, university, or nonprofit, you very likely have access to a 403(b) instead of (or in addition to) a 401(k). The IRS rules governing 403(b) plans are established under Section 403(b) of the Internal Revenue Code. Source: IRS Publication 571.',
              },
              {
                q: 'What is the 15-year rule for 403(b) plans?',
                a: 'The 15-year rule is a special 403(b)-only provision that allows certain long-tenured employees to contribute an additional $3,000 per year above the standard limit, up to a lifetime maximum of $15,000. To qualify: you must have at least 15 years of service with the same employer, your employer must sponsor a 403(b) plan, and your average annual contributions over your tenure must have been below a certain threshold. This catch-up applies in addition to the standard age-50+ catch-up. Not all 403(b) plans offer this feature — check with your HR department. Source: IRS Section 402(g)(7).',
              },
              {
                q: 'Can I contribute to both a 403(b) and an IRA?',
                a: 'Yes. Your 403(b) contributions do not affect your IRA contribution eligibility directly, but being an active participant in a 403(b) may limit your ability to deduct Traditional IRA contributions if your income exceeds certain thresholds (2026: $79,000–$89,000 single; $126,000–$146,000 married). However, you can always contribute to a Roth IRA if your income is below $153,000 (single) or $242,000 (married), and Roth IRA eligibility is not affected by 403(b) participation. Many 403(b) participants benefit from contributing to both: max the 403(b) employer match, then fund a Roth IRA, then return to maximize the 403(b). Source: IRS 2026.',
              },
              {
                q: 'Are 403(b) investment options good?',
                a: '403(b) plans have historically had a reputation for poor investment options — particularly reliance on high-fee insurance annuity products. However, this varies dramatically by employer. Many large school districts and university systems now offer excellent low-cost index fund options through providers like Fidelity, Vanguard, and TIAA. The key questions to ask about your 403(b): (1) What are the expense ratios on available funds? (Any above 0.5% warrants scrutiny.) (2) Are there Vanguard or Fidelity index funds available? (3) Does your plan use an insurance annuity wrapper that adds fees? Plootus analyzes your specific 403(b) fund options and recommends the best available funds. Source: Plootus Research; GAO Report on 403(b) Plans 2023.',
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

          <div className={styles['cta-banner']}>
            <h3>Get 403(b) Fund Recommendations — Free</h3>
            <p>
              Plootus analyzes your specific 403(b) plan's investment options and tells you exactly which funds to choose — minimizing
              fees and maximizing long-term returns. Supports all major 403(b) providers including TIAA, Fidelity, Vanguard, and more.
            </p>
            <div onClick={() => router.push('/')} style={{cursor: 'pointer'}}>Optimize My 403(b) →</div>
          </div>

          <div className={styles['sources-box']}>
            <strong>📚 Sources</strong>
            <ul>
              <li>IRS, Publication 571: Tax-Sheltered Annuity Plans (irs.gov/pub571)</li>
              <li>IRS, Section 403(b) Tax-Sheltered Annuity Plans</li>
              <li>IRS, Retirement Plan Contribution Limits 2026 (irs.gov)</li>
              <li>IRS, SECURE 2.0 Act provisions (2023)</li>
              <li>GAO, 403(b) Plans: DOL Could Improve Oversight of Plan Fees, GAO-23-105403</li>
              <li>TIAA Research, 403(b) Plan Participant Behavior</li>
              <li>Plootus Research 2026</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles['toc-box']}>
            <h3>On This Page</h3>
            <ul>
              <li><a href="#what-is">What Is a 403(b)?</a></li>
              <li><a href="#limits">2026 Limits</a></li>
              <li><a href="#vs-401k">403(b) vs. 401(k)</a></li>
              <li><a href="#calculator">Savings Projector</a></li>
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
            <div onClick={() => router.push('/401k-by-age')} style={{cursor: 'pointer'}}>→ 401(k) Contribution Limits 2026</div>
            <div onClick={() => router.push('/roth-vs-traditional')} style={{cursor: 'pointer'}}>→ Roth vs. Traditional IRA</div>
            <div onClick={() => router.push('/hsa-contribution-limits')} style={{cursor: 'pointer'}}>→ HSA Guide 2026</div>
            <div onClick={() => router.push('/how-much-to-retire')} style={{cursor: 'pointer'}}>→ How Much Do I Need to Retire?</div>
            <div onClick={() => router.push('/457b-plan-guide')} style={{cursor: 'pointer'}}>→ 457(b) Plan Guide</div>
          </div>
          <div className={styles['sidebar-card']} style={{ background: 'var(--off-white)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '8px' }}>
              Key Stat
            </p>
            <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.45, marginBottom: '5px' }}>
              "403(b) participants pay an average of 0.8% more in fees than 401(k) participants due to annuity product wrapping — costing a $100K account $70,000+ over 20 years."
            </p>
            <p style={{ fontSize: '11px', color: 'var(--text-light)', margin: 0 }}>
              Source: GAO Report on 403(b) Plans 2023
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

export default Guide403b;
