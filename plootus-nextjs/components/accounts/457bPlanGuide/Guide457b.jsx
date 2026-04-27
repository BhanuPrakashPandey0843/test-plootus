import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from './Guide457b.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const Guide457b = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>457(b) Plan Guide 2026: Contribution Limits, Rules & Strategies | Plootus</title>
        <meta name="description" content="The 457(b) plan is one of the most powerful retirement accounts for government employees. Learn about 2026 limits and the unique no-penalty withdrawal advantage." />
        <link rel="canonical" href="https://www.plootus.com/457b-plan-guide" />
      </Head>

      <HubNav />

      <div className={styles.hero}>
        <div className={styles['hero-inner']}>
          <div className={styles['hero-eyebrow']}>🏛️ Guide · Plootus 2026 · IRS · Government Employees</div>
          <h1>457(b) Plan Guide 2026: Contribution Limits, Rules & Strategies for Government Employees</h1>
          <div className={styles['hero-deck']}>
            The 457(b) plan is one of the most powerful and overlooked retirement accounts available. It has the same contribution limits as a 401(k) — but with a unique advantage: <strong>no 10% early withdrawal penalty</strong>, making it ideal for public employees who retire in their 50s.
          </div>
          <div className={styles['hero-meta']}>
            <span>By the Plootus Research Team</span>
            <span>Updated April 2026</span>
            <span>Sources: IRS, SECURE 2.0 Act</span>
          </div>
        </div>
      </div>

      <div className={styles['stat-strip']}>
        <div className={styles['stat-strip-inner']}>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$24,500</div>
            <div className={styles['stat-label']}>Standard 457(b) Limit 2026</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$49,000</div>
            <div className={styles['stat-label']}>Special 3-Year Catch-Up Limit</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">0%</div>
            <div className={styles['stat-label']}>Early Withdrawal Penalty (vs 10% in 401k)</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">Age 73</div>
            <div className={styles['stat-label']}>RMD Start Age (SECURE 2.0)</div>
          </div>
        </div>
      </div>

      <div className={styles['page-body']} itemScope itemType="https://schema.org/Article">
        <main className={styles['main-content']} role="main" aria-label="457(b) Plan Complete Guide 2026">
          <section id="who-qualifies">
            <div className={styles['section-label']}>Eligibility</div>
            <h2>Who Qualifies for a 457(b) Plan?</h2>
            <div className={styles['two-col']}>
              <div className={styles['info-box']}>
                <p><strong>Governmental 457(b):</strong> Employees of state and local governments — police, firefighters, public school teachers, city/county workers, state agency employees. These plans can be rolled over to an IRA or 401(k).</p>
              </div>
              <div className={styles['warn-box']}>
                <p><strong>Non-governmental 457(b):</strong> Select employees of 501(c)(3) nonprofits (hospitals, universities) — typically executives and highly compensated staff. These cannot be rolled to an IRA. Plan assets remain subject to employer's general creditors.</p>
              </div>
            </div>
          </section>

          <section id="limits">
            <div className={styles['section-label']}>2026 Contribution Limits</div>
            <h2>457(b) Contribution Limits for 2026 — Including the Powerful Special Catch-Up</h2>
            <table className={styles['data-table']} summary="457b contribution limits for 2026 including special 3-year pre-retirement catch-up">
              <thead>
                <tr>
                  <th scope="col">Contribution Type</th>
                  <th scope="col">2026 Limit</th>
                  <th scope="col">Eligibility</th>
                  <th scope="col">Key Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Standard Contribution</strong></td>
                  <td data-type="statistic">$24,500/year</td>
                  <td>All 457(b) participants</td>
                  <td>Same as 401(k); up from $23,500 in 2025</td>
                </tr>
                <tr>
                  <td><strong>Age 50+ Catch-Up</strong></td>
                  <td data-type="statistic">+$8,000 = $32,500 total</td>
                  <td>Age 50+</td>
                  <td>Standard catch-up; same as 401(k)</td>
                </tr>
                <tr>
                  <td><strong>Special 3-Year Pre-Retirement Catch-Up</strong></td>
                  <td data-type="statistic" className={styles.hi}><strong>Up to $49,000/year</strong></td>
                  <td>Within 3 years of plan's normal retirement age; must have undercontributed in prior years</td>
                  <td>Most powerful 457(b) feature! Can contribute up to double the standard limit to make up unused prior years. Cannot use this AND the age-50+ catch-up in same year.</td>
                </tr>
                <tr>
                  <td><strong>SECURE 2.0 Super Catch-Up (Ages 60–63)</strong></td>
                  <td data-type="statistic">+$11,250 = $35,750 total</td>
                  <td>Ages 60–63</td>
                  <td>Alternative to standard $8,000 catch-up; cannot combine with special 3-year catch-up</td>
                </tr>
              </tbody>
            </table>
            <div className={styles['info-box']}>
              <p>💡 <strong>Can I have BOTH a 457(b) and a 401(k) or 403(b)?</strong> Yes — if your employer offers both (common for some nonprofit hospital systems), you can contribute the maximum to each independently. In 2026, that's $24,500 to your 403(b) and $24,500 to your 457(b) = $49,000 total in pre-tax contributions, not counting catch-ups. This is one of the most powerful retirement savings opportunities available.</p>
            </div>
          </section>

          <section id="key-advantage">
            <div className={styles['section-label']}>Key Advantage</div>
            <h2>The #1 Reason Government Workers Should Prioritize Their 457(b): No Early Withdrawal Penalty</h2>
            <p>This is the most important and underappreciated feature of the 457(b). When you separate from your employer (retire, resign, or are laid off), you can access your 457(b) funds at <strong>any age</strong> with only ordinary income taxes — no 10% penalty.</p>
            <div className={styles['two-col']}>
              <div className={styles.card}>
                <div className={styles['card-val']} style={{ color: 'var(--red)' }}>10%</div>
                <h4>401(k)/403(b) Early Withdrawal Penalty</h4>
                <p>Withdraw before age 59.5 from a 401(k) or 403(b) after leaving an employer and you pay ordinary income tax <strong>plus</strong> 10% IRS penalty on the withdrawal.</p>
              </div>
              <div className={styles.card}>
                <div className={styles['card-val']} style={{ color: 'var(--green)' }}>0%</div>
                <h4>457(b) Early Withdrawal Penalty</h4>
                <p>Withdraw at any age after separating from your employer. A firefighter retiring at 50 pays only ordinary income tax — no 10% penalty, ever.</p>
              </div>
            </div>
            <p>For police officers, firefighters, teachers, and other public employees who often retire in their early-to-mid 50s, this makes the 457(b) a critical bridge account to cover living expenses until pension payments begin in full or until other retirement accounts become accessible at age 59.5.</p>
          </section>

          <section id="faq" aria-label="Frequently Asked Questions" className={styles['faq-section']}>
            <h2>Frequently Asked Questions</h2>
            {[
              {
                q: 'Can I withdraw from my 457(b) before age 59.5?',
                a: "Yes — this is the 457(b)'s most powerful advantage. After separating from your employer (retiring, resigning, or being laid off), you can withdraw from your governmental 457(b) at any age without the 10% early withdrawal penalty that applies to 401(k) and 403(b) accounts. You will owe ordinary income tax on withdrawals, but no penalty. This makes the 457(b) an ideal bridge account for public employees who retire in their 50s and need income before Social Security or full pension payments begin.",
              },
              {
                q: 'What happens to my 457(b) if I change jobs?',
                a: "For governmental 457(b) plans, you can roll over the funds to another governmental 457(b), a 403(b), a 401(k), or a traditional IRA without tax consequences. For non-governmental 457(b) plans (offered by nonprofits to executives), you typically cannot roll over to an IRA — funds must be distributed according to the plan's distribution options, and the plan's assets remain subject to the employer's general creditors (an important risk to understand).",
              },
              {
                q: 'Should I contribute to a 457(b) or 401(k) first?',
                a: "If your employer offers both, the 457(b) is often the better first choice for government employees who plan to retire before 59.5 — because those funds have no early withdrawal penalty. Contribute to the 457(b) up to its limit, then contribute to the 403(b) or 401(k). If your plan has an employer match on the 403(b)/401(k), always capture the match first (free money), then prioritize the 457(b) for tax-deferred savings.",
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
            <h3>Plootus Supports 457(b) Plans</h3>
            <p>Unlike most retirement tools, Plootus is built for public sector employees. Connect your 457(b) and get personalized fund recommendations — free.</p>
            <div onClick={() => router.push('/')} style={{cursor: 'pointer'}}>Optimize My 457(b) →</div>
          </div>

          <div className={styles['sources-box']}>
            <strong>📚 Sources</strong>
            <ul>
              <li>IRS, 457(b) Deferred Compensation Plans — Plan Requirements (irs.gov)</li>
              <li>IRS, Retirement Topics — 457(b) Contribution Limits 2026</li>
              <li>SECURE 2.0 Act (Consolidated Appropriations Act, 2023)</li>
              <li>IRS, Publication 4484: Choose a Retirement Plan (Government)</li>
              <li>Plootus Research 2026</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles['toc-box']}>
            <h3>On This Page</h3>
            <ul>
              <li><a href="#who-qualifies">Who Qualifies</a></li>
              <li><a href="#limits">2026 Limits</a></li>
              <li><a href="#key-advantage">Key Advantage</a></li>
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
            <div onClick={() => router.push('/hsa-contribution-limits')} style={{cursor: 'pointer'}}>→ HSA Contribution Limits</div>
            <div onClick={() => router.push('/roth-vs-traditional')} style={{cursor: 'pointer'}}>→ Roth vs Traditional IRA</div>
            <div onClick={() => router.push('/how-to-plan-retirement')} style={{cursor: 'pointer'}}>→ How to Plan for Retirement</div>
          </div>
          <div className={styles['sidebar-card']} style={{ background: 'var(--off-white)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '8px' }}>
              Key Stat
            </p>
            <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.45, marginBottom: '5px' }}>
              "A firefighter retiring at 50 can access their 457(b) immediately with no 10% penalty."
            </p>
            <p style={{ fontSize: '11px', color: 'var(--text-light)', margin: 0 }}>
              Source: IRS 2026
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

export default Guide457b;
