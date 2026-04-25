import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './TspThriftSavingPlanGuide.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const TspThriftSavingPlanGuide = () => {
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
          <div className={styles['hero-eyebrow']}>🏛️ Guide · Plootus 2026 · Federal Employees & Military</div>
          <h1>TSP (Thrift Savings Plan) Guide 2026: Best Funds, Contribution Limits & Strategy</h1>
          <div className={styles['hero-deck']}>
            The Thrift Savings Plan offers one of the cheapest investment options in America — the C Fund tracks the S&P 500 at just 0.055% expense ratio. But most federal employees don't know their TSP fund options or how to optimize their allocation. This guide covers everything.
          </div>
          <div className={styles['hero-meta']}>
            <span>By the Plootus Research Team</span>
            <span>Updated April 2026</span>
            <span>Sources: TSP.gov, FRTIB, IRS 2026</span>
          </div>
        </div>
      </div>

      <div className={styles['stat-strip']}>
        <div className={styles['stat-strip-inner']}>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$24,500</div>
            <div className={styles['stat-label']}>TSP Contribution Limit 2026</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">0.055%</div>
            <div className={styles['stat-label']}>C Fund Expense Ratio (S&P 500)</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$35,750</div>
            <div className={styles['stat-label']}>Ages 60-63 Super Catch-Up (SECURE 2.0)</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">5%</div>
            <div className={styles['stat-label']}>FERS Agency Matching Contribution</div>
          </div>
        </div>
      </div>

      <div className={styles['page-body']} itemScope itemType="https://schema.org/Article">
        <main className={styles['main-content']} role="main" aria-label="TSP Thrift Savings Plan Complete Guide 2026">
          <section id="overview">
            <div className={styles['section-label']}>Overview</div>
            <h2>What Is the TSP and Who Qualifies?</h2>
            <p>The Thrift Savings Plan (<abbr title="Thrift Savings Plan">TSP</abbr>) is the retirement plan for federal government employees and military members, administered by the Federal Retirement Thrift Investment Board (<abbr title="Federal Retirement Thrift Investment Board">FRTIB</abbr>). It is the world's largest defined contribution plan, with over $900 billion in assets and more than 7 million participants.</p>
            <div className={styles['two-col']}>
              <div className={styles['info-box']}>
                <p><strong>FERS employees (Federal Employees Retirement System):</strong> Hired after 1983. Receive automatic 1% TSP contribution + matching up to 4% (5% total with your 5% contribution). TSP is a critical component alongside FERS pension and Social Security.</p>
              </div>
              <div className={styles['warn-box']}>
                <p><strong>CSRS employees (Civil Service Retirement System):</strong> Hired before 1984. Have a more generous pension but receive no employer TSP match. Can still contribute to TSP up to the annual limit.</p>
              </div>
            </div>
          </section>

          <section id="funds">
            <div className={styles['section-label']}>TSP Funds</div>
            <h2>The 5 Core TSP Funds — Expense Ratios and Strategy</h2>
            <table className={styles['data-table']} summary="TSP fund options with expense ratios and recommended use">
              <thead>
                <tr>
                  <th scope="col">Fund</th>
                  <th scope="col">What It<br />Tracks</th>
                  <th scope="col">Expense<br />Ratio</th>
                  <th scope="col">10-Yr Avg<br />Return</th>
                  <th scope="col">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>G Fund</strong><br />Government Securities</td>
                  <td>Short-term U.S. Treasuries (guaranteed no loss)</td>
                  <td data-type="statistic">0.055%</td>
                  <td>~2.5%</td>
                  <td>Capital preservation; very close to retirement</td>
                </tr>
                <tr>
                  <td><strong>F Fund</strong><br />Fixed Income Index</td>
                  <td>Bloomberg U.S. Aggregate Bond Index</td>
                  <td data-type="statistic">0.055%</td>
                  <td>~2.1%</td>
                  <td>Bond allocation for diversification</td>
                </tr>
                <tr>
                  <td><strong>C Fund</strong><br />Common Stock Index</td>
                  <td>S&P 500 (500 largest U.S. companies)</td>
                  <td data-type="statistic" className={styles.hi}><strong>0.055%</strong></td>
                  <td><strong>~13.1%</strong></td>
                  <td>Core equity holding; most popular TSP fund</td>
                </tr>
                <tr>
                  <td><strong>S Fund</strong><br />Small Cap Stock Index</td>
                  <td>Dow Jones U.S. Completion Total Stock Market Index</td>
                  <td data-type="statistic">0.055%</td>
                  <td>~11.8%</td>
                  <td>Small/mid-cap growth exposure</td>
                </tr>
                <tr>
                  <td><strong>I Fund</strong><br />International Stock Index</td>
                  <td>MSCI EAFE Index (Europe, Australia, Asia)</td>
                  <td data-type="statistic">0.055%</td>
                  <td>~5.4%</td>
                  <td>International diversification</td>
                </tr>
              </tbody>
            </table>
            <div className={styles['info-box']}>
              <p>💡 <strong>The C Fund vs. Vanguard comparison:</strong> The TSP C Fund at 0.055% tracks the same S&P 500 index as Vanguard's VOO ETF (0.03%). Both are effectively free. This is extraordinary — federal employees have access to institutional-quality index funds at near-zero cost that most private-sector workers don't have without careful 401(k) fund selection.</p>
            </div>

            <h3>Recommended TSP Allocation Strategies</h3>
            <div className={styles['card-grid']}>
              <div className={styles.card}>
                <h4>Aggressive Growth (20–40 years to retirement)</h4>
                <p>80% C Fund + 20% S Fund. Maximizes U.S. stock market exposure. Some add 10–20% I Fund for international diversification. Zero bond allocation appropriate for long horizons.</p>
              </div>
              <div className={styles.card}>
                <h4>Moderate Growth (10–20 years to retirement)</h4>
                <p>60% C Fund + 20% S Fund + 10% I Fund + 10% F Fund. Adds bond exposure for stability while maintaining equity growth. Classic balanced approach.</p>
              </div>
              <div className={styles.card}>
                <h4>Conservative (Under 10 years)</h4>
                <p>40% C Fund + 15% S Fund + 10% I Fund + 35% G/F Fund. Shifts toward capital preservation. G Fund provides inflation-adjusted return with no market risk.</p>
              </div>
              <div className={styles.card}>
                <h4>Lifecycle (L) Funds — Set It and Forget It</h4>
                <p>L Funds automatically adjust allocation as you approach retirement. L2040 for those retiring around 2040. Simple, diversified, zero management required.</p>
              </div>
            </div>
          </section>

          <section id="match">
            <div className={styles['section-label']}>FERS Match</div>
            <h2>Never Leave the FERS Match on the Table</h2>
            <p>FERS employees receive one of the most generous employer matching structures in any retirement plan:</p>
            <table className={styles['data-table']} summary="FERS TSP matching contribution schedule">
              <thead>
                <tr>
                  <th scope="col">Employee<br />Contribution</th>
                  <th scope="col">Automatic Gov't<br />Contribution</th>
                  <th scope="col">Matching<br />Contribution</th>
                  <th scope="col">Total Gov't<br />Contribution</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0%</td>
                  <td data-type="statistic">1%</td>
                  <td>0%</td>
                  <td>1%</td>
                </tr>
                <tr>
                  <td>1%</td>
                  <td>1%</td>
                  <td>1%</td>
                  <td>2%</td>
                </tr>
                <tr>
                  <td>3%</td>
                  <td>1%</td>
                  <td>3%</td>
                  <td>4%</td>
                </tr>
                <tr>
                  <td className={styles.gold}><strong>5% (minimum recommended)</strong></td>
                  <td className={styles.gold}>1%</td>
                  <td className={styles.gold}>4%</td>
                  <td className={styles.gold}><strong>5% — maximum match</strong></td>
                </tr>
                <tr>
                  <td>10%+</td>
                  <td>1%</td>
                  <td>4% (capped)</td>
                  <td>5% (capped)</td>
                </tr>
              </tbody>
            </table>
            <p>At a $70,000 salary, contributing 5% ($3,500/year) earns $3,500 in government match + $700 automatic = $4,200 in free contributions per year. Over 25 years at 7% average return, that $4,200/year grows to approximately $277,000 — all from money you never contributed yourself.</p>
          </section>

          <section id="faq" aria-label="Frequently Asked Questions" className={styles['faq-section']}>
            <h2>Frequently Asked Questions</h2>
            {[
              {
                q: 'Can I have both a TSP and an IRA?',
                a: "Yes — TSP and IRA contribution limits are completely separate. You can contribute $24,500 to your TSP and $7,000 to a Roth or Traditional IRA in the same year (2026 limits; $8,000 IRA if age 50+). Many federal employees use a Roth IRA alongside their traditional TSP to create tax diversification. If you expect TSP withdrawals to push you into a higher tax bracket, having Roth IRA funds available for tax-free supplemental income is valuable."
              },
              {
                q: 'What is the Roth TSP option?',
                a: "The Roth TSP allows after-tax contributions that grow tax-free. Same contribution limits as Traditional TSP ($24,500 in 2026). Key advantages: withdrawals in retirement are tax-free (including growth); starting in 2023 (SECURE 2.0), Roth TSP accounts are exempt from Required Minimum Distributions. The employer match (FERS automatic 1% + match) always goes into the Traditional TSP side, regardless of whether you contribute Roth or Traditional. If you expect your income to be lower now than in retirement, Roth TSP may be advantageous."
              },
              {
                q: 'What happens to my TSP when I leave federal service?',
                a: "When you separate from federal service (retire, resign, or are laid off), your TSP options are: (1) Leave the money in your TSP — still invested, still low cost, no immediate action required; (2) Roll over to a Traditional IRA or another employer's 401(k)/403(b) — useful if you want access to more investment options; (3) Roll Roth TSP to a Roth IRA — preserves tax-free status and eliminates future RMDs on that money. Take a cash distribution only as a last resort — it's fully taxable as ordinary income in the year received."
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
            <h3>Plootus Supports TSP Accounts</h3>
            <p>We help federal employees and military members maximize their Thrift Savings Plan. Get a personalized analysis of your TSP funds today — free.</p>
            <a href="/">Analyze My TSP →</a>
          </div>

          <div className={styles['sources-box']}>
            <strong>📚 Sources</strong>
            <ul>
              <li>Federal Retirement Thrift Investment Board (FRTIB), TSP.gov — Fund performance, expense ratios, contribution limits 2026</li>
              <li>IRS, Retirement Plan Contribution Limits 2026 (irs.gov)</li>
              <li>SECURE 2.0 Act (Consolidated Appropriations Act, 2023) — Roth TSP RMD exemption, super catch-up</li>
              <li>Office of Personnel Management (OPM), FERS Retirement Guide 2026</li>
              <li>Plootus Research 2026</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles['toc-box']}>
            <h3>On This Page</h3>
            <ul>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#funds">TSP Funds</a></li>
              <li><a href="#match">FERS Match</a></li>
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
            <a href="/457b-plan-guide">→ 457(b) Plan Guide</a>
            <a href="/403b-guide">→ 403(b) Contribution Limits</a>
            <a href="/hsa-contribution-limits">→ HSA Contribution Limits</a>
            <a href="/how-to-plan-retirement">→ How to Plan for Retirement</a>
          </div>
          <div className={styles['sidebar-card']} style={{ background: 'var(--off-white)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '8px' }}>Key Stat</p>
            <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.45, marginBottom: '5px' }}>"The TSP C Fund at 0.055% expense ratio is one of the cheapest S&P 500 index funds available to any investor in America."</p>
            <p style={{ fontSize: '11px', color: 'var(--text-light)', margin: 0 }}>Source: FRTIB TSP.gov 2026</p>
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

export default TspThriftSavingPlanGuide;
