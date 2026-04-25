import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './StandardDeduction2026.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const StandardDeduction2026 = () => {
  const router = useRouter();

  const toggleFaq = (e) => {
    e.currentTarget.parentElement.classList.toggle(styles.open);
  };

  return (
    <div className={styles.container}>
      <HubNav />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>TAXES</div>
        <div className={styles.heroInner}>
          <div>
            <div className={styles.heroTag}>🧾 Tax Guide · IRS Rev. Proc. 2025-40 · All Filing Statuses</div>
            <h1>Standard Deduction 2026: All Amounts, Age 65+ Rules & When to Itemize</h1>
            <p className={styles.heroSub}>
              The 2026 standard deduction is $15,000 for single filers and $30,000 for married filing jointly — before any income is taxed. Taxpayers 65+ receive up to $2,600 more. Here are all amounts, the itemizing comparison, and what it means for your retirement tax bill.
            </p>
            <div className={styles.heroMeta}>
              <span>📅 Updated April 2026</span>
              <span>📚 Source: IRS Rev. Proc. 2025-40</span>
              <span>⏱ 5 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stat Strip */}
      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}>
            <div className={styles.statNum}>$30,000</div>
            <div className={styles.statLabel}>MFJ Standard Deduction</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>$15,000</div>
            <div className={styles.statLabel}>Single Standard Deduction</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>$32,600</div>
            <div className={styles.statLabel}>MFJ + Both Spouses 65+</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>~90%</div>
            <div className={styles.statLabel}>Filers Who Take Standard Deduction</div>
          </div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent}>
          <section id="amounts">
            <div className={styles.sectionLabel}>2026 Standard Deduction</div>
            <h2>Standard Deduction Amounts by Filing Status — 2026</h2>
            <p>The standard deduction is the amount the IRS lets you subtract from your gross income before calculating your tax. It reduces your taxable income dollar-for-dollar.</p>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Filing Status</th>
                  <th>2026 Standard Deduction</th>
                  <th>2025 Amount</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Single</td>
                  <td className={styles.hi}>$15,000</td>
                  <td>$14,600</td>
                  <td className={styles.green}>+$400</td>
                </tr>
                <tr>
                  <td>Married Filing Jointly (MFJ)</td>
                  <td className={styles.hi}>$30,000</td>
                  <td>$29,200</td>
                  <td className={styles.green}>+$800</td>
                </tr>
                <tr>
                  <td>Head of Household (HoH)</td>
                  <td className={styles.hi}>$22,500</td>
                  <td>$21,900</td>
                  <td className={styles.green}>+$600</td>
                </tr>
                <tr>
                  <td>Married Filing Separately (MFS)</td>
                  <td className={styles.hi}>$15,000</td>
                  <td>$14,600</td>
                  <td className={styles.green}>+$400</td>
                </tr>
                <tr>
                  <td>Qualifying Surviving Spouse</td>
                  <td className={styles.hi}>$30,000</td>
                  <td>$29,200</td>
                  <td className={styles.green}>+$800</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>
              Source: IRS Rev. Proc. 2025-40. MFS filers cannot take the standard deduction if their spouse itemizes.
            </p>
          </section>

          <section id="age65">
            <div className={styles.sectionLabel}>Age 65+ Rules</div>
            <h2>Additional Standard Deduction for Taxpayers 65+ or Blind</h2>
            <p>Taxpayers who are 65 or older (as of December 31 of the tax year) or legally blind receive an additional standard deduction amount on top of the base amount. These additional amounts are also inflation-adjusted.</p>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Situation</th>
                  <th>Additional Amount (2026)</th>
                  <th>Applies To</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Age 65+ (or blind) — Single / HoH</td>
                  <td className={styles.hi}>$1,600</td>
                  <td>Per qualifying taxpayer</td>
                </tr>
                <tr>
                  <td>Age 65+ (or blind) — MFJ / MFS / Surviving Spouse</td>
                  <td className={styles.hi}>$1,300</td>
                  <td>Per qualifying spouse</td>
                </tr>
                <tr>
                  <td>Age 65+ AND blind — Single / HoH</td>
                  <td className={styles.hi}>$3,200</td>
                  <td>Both conditions apply</td>
                </tr>
                <tr>
                  <td>Age 65+ AND blind — MFJ</td>
                  <td className={styles.hi}>$2,600</td>
                  <td>Per qualifying spouse</td>
                </tr>
              </tbody>
            </table>

            <div className={styles.cardGrid}>
              <div className={styles.card}>
                <div className={styles.cardVal}>$16,600</div>
                <h4>Single, age 65+</h4>
                <p>Base $15,000 + $1,600 additional. No federal tax on the first $16,600 of taxable income.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardVal}>$32,600</div>
                <h4>MFJ, one spouse 65+</h4>
                <p>Base $30,000 + $1,300 additional = $31,300. If both spouses 65+: $32,600.</p>
              </div>
            </div>
            
            <div className={styles.greenBox}>
              <p>✓ <strong>Retirement planning insight:</strong> A married couple both age 65 can shield the first $32,600 of taxable income entirely from federal tax. Adding pre-tax retirement contributions further reduces gross income before this calculation. This is the foundation of the Roth conversion "sweet spot" window in early retirement.</p>
            </div>
          </section>

          <section id="itemize">
            <div className={styles.sectionLabel}>Standard vs. Itemizing</div>
            <h2>Should You Take the Standard Deduction or Itemize?</h2>
            <p>You should itemize only if your total itemizable deductions exceed your standard deduction. Use the standard deduction otherwise — it requires no documentation and is always available.</p>
            <div className={styles.highlightBox}>
              <p>📍 <strong>Quick rule:</strong> If you don't have a large mortgage and don't live in a high-tax state, the standard deduction almost certainly wins. About 90% of filers now take the standard deduction after TCJA nearly doubled it.</p>
            </div>
            <h3>When Itemizing Might Beat the Standard Deduction</h3>
            <ul>
              <li><strong>Large mortgage interest:</strong> If you're paying $20,000+/year in mortgage interest and have other deductions, itemizing may win</li>
              <li><strong>High state and local taxes (SALT):</strong> Capped at $10,000 ($5,000 MFS) — this cap limits the value for high-tax-state residents</li>
              <li><strong>Significant charitable contributions:</strong> Cash donations to 501(c)(3) organizations are deductible; bunching multiple years into one through a Donor-Advised Fund can push you over the standard deduction threshold</li>
              <li><strong>Large unreimbursed medical expenses:</strong> Only expenses above 7.5% of AGI are deductible; the threshold makes this meaningful only for very high medical costs</li>
              <li><strong>Casualty losses from a federally declared disaster:</strong> Can be significant after natural disasters</li>
            </ul>
          </section>

          <section id="common-itemized">
            <h2>Common Itemized Deductions &amp; 2026 Limits</h2>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Deduction</th>
                  <th>2026 Limit</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>State &amp; Local Taxes (SALT)</td>
                  <td className={styles.hi}>$10,000 ($5,000 MFS)</td>
                  <td>Includes income tax or sales tax + property tax</td>
                </tr>
                <tr>
                  <td>Mortgage Interest</td>
                  <td className={styles.hi}>Loans up to $750,000</td>
                  <td>Primary + 1 secondary home; old loans (pre-12/17/2017) capped at $1M</td>
                </tr>
                <tr>
                  <td>Charitable Contributions (cash)</td>
                  <td className={styles.hi}>Up to 60% of AGI</td>
                  <td>Must be to qualified 501(c)(3) organizations</td>
                </tr>
                <tr>
                  <td>Charitable Contributions (stock)</td>
                  <td className={styles.hi}>Up to 30% of AGI</td>
                  <td>Deduct FMV; avoid capital gains</td>
                </tr>
                <tr>
                  <td>Medical &amp; Dental Expenses</td>
                  <td className={styles.hi}>Above 7.5% of AGI</td>
                  <td>Only excess above threshold is deductible</td>
                </tr>
                <tr>
                  <td>Casualty &amp; Theft Losses</td>
                  <td>Disaster areas only</td>
                  <td>Must be federally declared disaster; above 10% AGI</td>
                </tr>
                <tr>
                  <td>Investment Interest Expense</td>
                  <td>Net investment income</td>
                  <td>Margin interest on investments</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="retirement">
            <div className={styles.sectionLabel}>Retirement Planning</div>
            <h2>How the Standard Deduction Shapes Retirement Tax Strategy</h2>
            <p>For most retirees, the standard deduction defines the baseline income that's completely tax-free each year. This drives several key strategies:</p>
            <ul>
              <li><strong>Roth conversions up to the standard deduction:</strong> A married couple 65+ can convert $32,600 of pre-tax IRA money to Roth each year with zero federal income tax</li>
              <li><strong>Social Security management:</strong> The standard deduction reduces your taxable income but doesn't directly affect provisional income (which is what triggers Social Security taxation)</li>
              <li><strong>QCD vs. itemizing charitable deductions:</strong> Retirees 70½+ who make Qualified Charitable Distributions from their IRA get a better tax result than itemizing charitable gifts — QCDs reduce AGI directly, while itemized deductions only help if you exceed the standard deduction</li>
              <li><strong>Bunching charitable gifts:</strong> Rather than donating $10,000 per year (which may not clear your standard deduction), consider donating $30,000 every three years via a Donor-Advised Fund — itemize in the donation year, take the standard deduction in the other two</li>
            </ul>
          </section>

          <section className={styles.faqSection} id="faq">
            <div className={styles.sectionLabel}>FAQ</div>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.faqItem}>
              <button className={styles.faqQ} onClick={toggleFaq}>
                What is the 2026 standard deduction for a married couple? <span className={styles.faqIcon}>+</span>
              </button>
              <div className={styles.faqA}>
                The 2026 standard deduction for married filing jointly is $30,000. If one spouse is 65 or older, add $1,300 for a total of $31,300. If both spouses are 65+, the total is $32,600. These amounts are adjusted from the 2025 amounts of $29,200 (base) per IRS Rev. Proc. 2025-40.
              </div>
            </div>
            <div className={styles.faqItem}>
              <button className={styles.faqQ} onClick={toggleFaq}>
                Can I take the standard deduction if I own a home? <span className={styles.faqIcon}>+</span>
              </button>
              <div className={styles.faqA}>
                Yes. Homeowners can choose either the standard deduction or itemize — whichever is larger. If your mortgage interest + property taxes + other deductions exceed your standard deduction ($15,000 single / $30,000 MFJ), itemizing may save more. If not, take the standard deduction — no documentation required.
              </div>
            </div>
            <div className={styles.faqItem}>
              <button className={styles.faqQ} onClick={toggleFaq}>
                What is the standard deduction for a dependent? <span className={styles.faqIcon}>+</span>
              </button>
              <div className={styles.faqA}>
                <p>A taxpayer who can be claimed as a dependent has a limited standard deduction: the greater of $1,350 or the sum of their earned income plus $450, capped at the regular standard deduction for their filing status. This prevents dependents with investment income from escaping tax through the full standard deduction.</p>
              </div>
            </div>
            <div className={styles.faqItem}>
              <button className={styles.faqQ} onClick={toggleFaq}>
                Is the standard deduction going away after 2026? <span className={styles.faqIcon}>+</span>
              </button>
              <div className={styles.faqA}>
                <p>Under current law, the Tax Cuts and Jobs Act nearly doubled the standard deduction starting in 2018. If TCJA provisions are allowed to expire (some after 2025, some after 2026), the standard deduction could roughly revert to pre-2018 levels — approximately $7,500 (single) / $15,000 (MFJ). Congressional action would be needed to prevent this. Plootus will update this page as legislation develops.</p>
              </div>
            </div>
          </section>

          <div className={styles.sourcesBox}>
            <strong>Sources</strong>
            <ul>
              <li>IRS Rev. Proc. 2025-40 — 2026 Standard Deduction Amounts</li>
              <li>IRS Publication 501 — Dependents, Standard Deduction, and Filing Information</li>
              <li>IRS Schedule A — Itemized Deductions</li>
              <li>Plootus Research — April 2026</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.tocBox}>
            <h3>On This Page</h3>
            <ol>
              <li><a href="#amounts">2026 Deduction Amounts</a></li>
              <li><a href="#age65">Age 65+ Bonus</a></li>
              <li><a href="#itemize">Standard vs. Itemizing</a></li>
              <li><a href="#common-itemized">Common Itemized Deductions</a></li>
              <li><a href="#retirement">Retirement Implications</a></li>
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

export default StandardDeduction2026;
