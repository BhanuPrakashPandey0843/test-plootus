import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './IraContributionLimits.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const IraContributionLimits = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <HubNav />

      <div className={styles.hero}>
        <div className={styles.heroBg}>TAXES</div>
        <div className={styles.heroInner}>
          <p className={styles.heroTag}>💰 Tax Guide · IRS COLA 2026 · Traditional & Roth IRA</p>
          <h1>IRA Contribution Limits 2026: Traditional, Roth & Backdoor Rules</h1>
          <p className={styles.heroDeck}>
            The 2026 IRA contribution limit is $7,000 ($8,000 age 50+). Roth IRA eligibility phases out at $150,000–$165,000 (single) and $236,000–$246,000 (MFJ). Complete guide to deductibility rules, income limits, backdoor Roth, SEP IRA, and spousal IRA contributions.
          </p>
          <div className={styles.heroMeta}>
            <span>📅 Updated April 2026</span>
            <span>📚 Source: IRS COLA 2026</span>
            <span>⏱ 7 min read</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>$7,000</span>
            <span className={styles.statLabel}>IRA Limit Under Age 50</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>$8,000</span>
            <span className={styles.statLabel}>IRA Limit Age 50+</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>$69,000</span>
            <span className={styles.statLabel}>SEP IRA Limit 2026</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>$150K</span>
            <span className={styles.statLabel}>Roth Phase-Out Start — Single</span>
          </div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent} role="main">
          
          <section id="limits">
            <p className={styles.sectionLabel}>2026 Limits</p>
            <h2>2026 IRA Contribution Limits — All Account Types</h2>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Account Type</th>
                  <th>Under Age 50</th>
                  <th>Age 50–59</th>
                  <th>Age 60–63</th>
                  <th>Age 64+</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Traditional IRA</td>
                  <td className={styles.hi}>$7,000</td>
                  <td className={styles.hi}>$8,000</td>
                  <td className={styles.hi}>$8,000</td>
                  <td className={styles.hi}>$8,000</td>
                </tr>
                <tr>
                  <td>Roth IRA</td>
                  <td className={styles.hi}>$7,000</td>
                  <td className={styles.hi}>$8,000</td>
                  <td className={styles.hi}>$8,000</td>
                  <td className={styles.hi}>$8,000</td>
                </tr>
                <tr>
                  <td>Combined IRA limit (Trad + Roth)</td>
                  <td className={styles.hi}>$7,000</td>
                  <td className={styles.hi}>$8,000</td>
                  <td className={styles.hi}>$8,000</td>
                  <td className={styles.hi}>$8,000</td>
                </tr>
                <tr>
                  <td>401(k) / 403(b) / 457(b)</td>
                  <td className={styles.hi}>$23,500</td>
                  <td className={styles.hi}>$31,000</td>
                  <td className={styles.gold}>$34,750 ⭐</td>
                  <td className={styles.hi}>$31,000</td>
                </tr>
                <tr>
                  <td>SEP IRA</td>
                  <td className={styles.hi}>$69,000</td>
                  <td className={styles.hi}>$69,000</td>
                  <td className={styles.hi}>$69,000</td>
                  <td className={styles.hi}>$69,000</td>
                </tr>
                <tr>
                  <td>SIMPLE IRA</td>
                  <td className={styles.hi}>$16,500</td>
                  <td className={styles.hi}>$20,000</td>
                  <td className={styles.hi}>$20,000</td>
                  <td className={styles.hi}>$20,000</td>
                </tr>
                <tr>
                  <td>HSA (self-only / family)</td>
                  <td className={styles.hi}>$4,300 / $8,550</td>
                  <td className={styles.hi}>$5,300 / $9,550</td>
                  <td className={styles.hi}>$5,300 / $9,550</td>
                  <td className={styles.hi}>$5,300 / $9,550</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>
              ⭐ Super catch-up: Ages 60–63 qualify for an enhanced 401(k) catch-up of $11,250 (vs. standard $7,500), for a total of $34,750. This expires at age 64 (SECURE Act 2.0).
            </p>
            <div className={styles.infoBox}>
              <p>📌 <strong>Combined IRA limit:</strong> The $7,000/$8,000 limit is shared across all your Traditional and Roth IRAs combined. If you contribute $3,000 to a Traditional IRA, you can only contribute $4,000 more to a Roth IRA (under age 50). You cannot contribute more than your earned income for the year.</p>
            </div>
          </section>

          <section id="roth-limits">
            <p className={styles.sectionLabel}>Roth IRA</p>
            <h2>Roth IRA Income Limits 2026</h2>
            <p>Roth IRA contributions phase out at higher income levels. Above the phase-out, you can use the backdoor Roth strategy (see below).</p>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Filing Status</th>
                  <th>Full Contribution (MAGI)</th>
                  <th>Phase-Out Range</th>
                  <th>No Direct Contribution</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Single / HoH</td>
                  <td className={styles.green}>Below $150,000</td>
                  <td>$150,000–$165,000</td>
                  <td className={styles.red}>Above $165,000</td>
                </tr>
                <tr>
                  <td>Married Filing Jointly</td>
                  <td className={styles.green}>Below $236,000</td>
                  <td>$236,000–$246,000</td>
                  <td className={styles.red}>Above $246,000</td>
                </tr>
                <tr>
                  <td>Married Filing Separately</td>
                  <td className={styles.green}>$0 (no contribution)</td>
                  <td>$0–$10,000</td>
                  <td className={styles.red}>Above $10,000</td>
                </tr>
              </tbody>
            </table>
            <h3>Calculating a Partial Roth Contribution</h3>
            <p>If your MAGI falls in the phase-out range, your maximum contribution is reduced proportionally. Formula: Maximum contribution × (phase-out end − your MAGI) ÷ phase-out range width.</p>
            <div className={styles.highlightBox}>
              <p>📌 <strong>Example:</strong> Single filer, MAGI = $157,500 (midpoint of $150K–$165K phase-out). Reduced contribution = $7,000 × ($165,000 − $157,500) ÷ $15,000 = $7,000 × 50% = <strong>$3,500</strong>. Round down to nearest $10; minimum is $200 if any contribution is allowed.</p>
            </div>
          </section>

          <section id="trad-deduct">
            <h2>Traditional IRA Deductibility Rules 2026</h2>
            <p>Anyone with earned income can contribute to a Traditional IRA, but <strong>deducting</strong> the contribution depends on your income and whether you (or your spouse) are covered by a workplace retirement plan.</p>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Filing Status</th>
                  <th>Covered by Workplace Plan?</th>
                  <th>Full Deduction (MAGI)</th>
                  <th>Phase-Out Range</th>
                  <th>No Deduction</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Single / HoH</td>
                  <td>Yes</td>
                  <td className={styles.green}>Below $79,000</td>
                  <td>$79,000–$89,000</td>
                  <td className={styles.red}>Above $89,000</td>
                </tr>
                <tr>
                  <td>Single / HoH</td>
                  <td>No</td>
                  <td className={styles.green}>Any amount</td>
                  <td>N/A</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>Married Filing Jointly</td>
                  <td>Both covered</td>
                  <td className={styles.green}>Below $126,000</td>
                  <td>$126,000–$146,000</td>
                  <td className={styles.red}>Above $146,000</td>
                </tr>
                <tr>
                  <td>Married Filing Jointly</td>
                  <td>Only contributor covered</td>
                  <td className={styles.green}>Below $126,000</td>
                  <td>$126,000–$146,000</td>
                  <td className={styles.red}>Above $146,000</td>
                </tr>
                <tr>
                  <td>Married Filing Jointly</td>
                  <td>Only spouse covered</td>
                  <td className={styles.green}>Below $236,000</td>
                  <td>$236,000–$246,000</td>
                  <td className={styles.red}>Above $246,000</td>
                </tr>
                <tr>
                  <td>Married Filing Separately</td>
                  <td>Either covered</td>
                  <td className={styles.red}>$0</td>
                  <td>$0–$10,000</td>
                  <td className={styles.red}>Above $10,000</td>
                </tr>
              </tbody>
            </table>
            <div className={styles.warnBox}>
              <p>⚠️ If you make a non-deductible Traditional IRA contribution, you must file <strong>IRS Form 8606</strong> to track your basis. Failing to do so means you could be taxed twice on the same money at withdrawal. Keep Form 8606 on file for the life of the IRA.</p>
            </div>
          </section>

          <section id="backdoor">
            <h2>The Backdoor Roth IRA Strategy</h2>
            <p>If your income exceeds the Roth IRA limit, you can still get money into a Roth through the "backdoor" strategy: make a non-deductible Traditional IRA contribution, then immediately convert it to Roth. Since the contribution had no deduction, there's little or no tax owed on the conversion.</p>
            <ul>
              <li><strong>Step 1:</strong> Contribute $7,000 (or $8,000 age 50+) to a Traditional IRA. Do not deduct it.</li>
              <li><strong>Step 2:</strong> Convert the Traditional IRA to a Roth IRA. Because it was after-tax money, you owe little/no tax (just on any earnings between contribution and conversion).</li>
              <li><strong>Step 3:</strong> File Form 8606 to document the non-deductible contribution and conversion.</li>
            </ul>
            <div className={styles.warnBox}>
              <p>⚠️ <strong>Pro-rata rule:</strong> If you have other pre-tax IRA balances (rollover IRAs, deductible Traditional IRA contributions), the IRS applies the pro-rata rule — mixing your after-tax contribution with your pre-tax balance. This can create an unexpected tax bill. Consider rolling pre-tax IRA assets into your 401(k) before using the backdoor strategy.</p>
            </div>
          </section>

          <section id="sep">
            <h2>SEP IRA & SIMPLE IRA Limits 2026</h2>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Account</th>
                  <th>2026 Limit</th>
                  <th>Who Can Use It</th>
                  <th>Key Rules</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SEP IRA</td>
                  <td className={styles.hi}>$69,000</td>
                  <td>Self-employed, small business owners</td>
                  <td>Up to 25% of compensation; employer contributions only</td>
                </tr>
                <tr>
                  <td>SIMPLE IRA (employee)</td>
                  <td className={styles.hi}>$16,500</td>
                  <td>Employers with ≤100 employees</td>
                  <td>+$3,500 catch-up age 50+; employer must match 2–3%</td>
                </tr>
                <tr>
                  <td>Solo 401(k) — employee</td>
                  <td className={styles.hi}>$23,500</td>
                  <td>Self-employed, no full-time employees</td>
                  <td>+$7,500 catch-up age 50+; +$11,250 age 60–63</td>
                </tr>
                <tr>
                  <td>Solo 401(k) — total (employee + employer)</td>
                  <td className={styles.hi}>$70,000</td>
                  <td>Self-employed</td>
                  <td>Employer portion: up to 25% of net self-employment income</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="spousal">
            <h2>Spousal IRA: Contributing for a Non-Working Spouse</h2>
            <p>A working spouse can contribute to an IRA on behalf of a non-working (or low-earning) spouse, up to the IRA contribution limit — as long as the couple's combined earned income is at least equal to both contributions.</p>
            <div className={styles.greenBox}>
              <p>✓ <strong>Example:</strong> One spouse earns $80,000; the other has no income. The working spouse can contribute $7,000 to their own IRA and $7,000 to a spousal IRA — $14,000 total. Roth IRA income limits and Traditional IRA deductibility rules still apply based on the couple's combined MAGI.</p>
            </div>
          </section>

          <section className={styles.faqSection} id="faq">
            <h2>Frequently Asked Questions</h2>
            
            {[
              {
                q: "What is the 2026 IRA contribution limit?",
                a: "The 2026 IRA contribution limit is $7,000 for taxpayers under age 50, and $8,000 for those 50 and older. This limit applies to the combined total of all your Traditional and Roth IRA contributions for the year. You cannot contribute more than your earned income (wages, self-employment income, alimony received). Source: IRS COLA adjustments for 2026."
              },
              {
                q: "Can I contribute to a Roth IRA if I make too much money?",
                a: "You cannot contribute directly to a Roth IRA if your MAGI exceeds $165,000 (single) or $246,000 (MFJ) in 2026. However, you can use the backdoor Roth strategy: make a non-deductible Traditional IRA contribution, then immediately convert it to a Roth IRA. Watch out for the pro-rata rule if you have other pre-tax IRA balances."
              },
              {
                q: "What is the deadline to contribute to an IRA for 2026?",
                a: "You have until the tax filing deadline — typically April 15, 2027 — to make a 2026 IRA contribution. This is true for both Traditional and Roth IRAs. You do not need to file your taxes by that date; the contribution deadline is independent of when you actually file. If you file an extension, the IRA contribution deadline is still April 15, not the extended due date."
              },
              {
                q: "What happens if I contribute too much to my IRA?",
                a: "Excess IRA contributions incur a 6% excise tax each year the excess remains in the account. To avoid the penalty, withdraw the excess contribution plus earnings before the tax filing deadline (including extensions). If you realize the mistake after the deadline, you can still withdraw the excess but will owe the 6% penalty for the year it was made."
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
              <li>IRS Notice 2025-XX — 2026 IRA Contribution Limits (COLA adjustments)</li>
              <li>IRS Publication 590-A — Contributions to IRAs</li>
              <li>IRS Form 8606 — Nondeductible IRAs</li>
              <li>Plootus Research — April 2026</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.tocBox}>
            <h3>On This Page</h3>
            <ol>
              <li><a href="#limits">2026 Contribution Limits</a></li>
              <li><a href="#roth-limits">Roth IRA Income Limits</a></li>
              <li><a href="#trad-deduct">Traditional IRA Deductibility</a></li>
              <li><a href="#backdoor">Backdoor Roth IRA</a></li>
              <li><a href="#sep">SEP & SIMPLE IRA</a></li>
              <li><a href="#spousal">Spousal IRA Rules</a></li>
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

export default IraContributionLimits;
