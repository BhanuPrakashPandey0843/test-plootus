import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './CapitalGainsTaxRates.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const CapitalGainsTaxRates = () => {
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
          <p className={styles.heroTag}>📉 Tax Guide &middot; IRS 2026 Rates &middot; Retirement Strategy</p>
          <h1>Capital Gains Tax Rates 2026: Complete Guide</h1>
          <p className={styles.heroDeck}>
            Long-term capital gains can be taxed at 0% in retirement if you manage income carefully. 
            The 2026 thresholds, short-term vs. long-term rules, NIIT, and how capital gains interact 
            with Social Security taxes — all here.
          </p>
          <div className={styles.heroMeta}>
            <span>📅 Updated April 2026</span>
            <span>📚 Source: IRS 2026</span>
            <span>⏱️ 7 min read</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>0%</span>
            <span className={styles.statLabel}>LTCG Rate ≤$96,700 MFJ</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>15%</span>
            <span className={styles.statLabel}>LTCG Rate for Most Investors</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>3.8%</span>
            <span className={styles.statLabel}>NIIT Surcharge High Earners</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>1 yr</span>
            <span className={styles.statLabel}>Hold Period for LTCG Status</span>
          </div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent} role="main">
          
          <section id="stlt">
            <p className={styles.sectionLabel}>The Basics</p>
            <h2>Short-Term vs. Long-Term Capital Gains</h2>
            <p>When you sell an investment at a profit, the tax rate depends on how long you held it:</p>
            
            <div className={styles.cardGrid}>
              <div className={styles.card} style={{ borderTop: '3px solid var(--red)' }}>
                <div className={styles.cardVal} style={{ color: 'var(--red)' }}>Short-Term</div>
                <h4>Held 12 months or less</h4>
                <p>Taxed as ordinary income at your regular bracket rate (10%&ndash;37%). Same rate as your wages. No preferential treatment.</p>
              </div>
              <div className={styles.card} style={{ borderTop: '3px solid var(--green)' }}>
                <div className={styles.cardVal} style={{ color: 'var(--green)' }}>Long-Term</div>
                <h4>Held more than 12 months</h4>
                <p>Taxed at preferential rates of 0%, 15%, or 20% — dramatically lower than ordinary income rates for most investors.</p>
              </div>
            </div>
            
            <div className={styles.highlightBox}>
              <p>📌 The difference between short- and long-term treatment can be enormous. Selling a $50,000 gain after 11 months vs. 13 months could cost an extra $5,500 in taxes for someone in the 22% bracket. Holding period matters.</p>
            </div>
          </section>

          <section id="rates">
            <p className={styles.sectionLabel}>2026 Rates</p>
            <h2>2026 Long-Term Capital Gains Tax Rates</h2>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>LTCG Rate</th>
                  <th>Single</th>
                  <th>Married Filing Jointly</th>
                  <th>Head of Household</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.green}>0%</td>
                  <td>$0 &ndash; $48,350</td>
                  <td>$0 &ndash; $96,700</td>
                  <td>$0 &ndash; $64,750</td>
                </tr>
                <tr>
                  <td className={styles.hi}>15%</td>
                  <td>$48,351 &ndash; $533,400</td>
                  <td>$96,701 &ndash; $600,050</td>
                  <td>$64,751 &ndash; $566,700</td>
                </tr>
                <tr>
                  <td className={styles.gold}>20%</td>
                  <td>$533,401+</td>
                  <td>$600,051+</td>
                  <td>$566,701+</td>
                </tr>
                <tr>
                  <td className={styles.red}>+3.8% NIIT</td>
                  <td>MAGI &gt; $200,000</td>
                  <td>MAGI &gt; $250,000</td>
                  <td>MAGI &gt; $200,000</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '4px' }}>
              These thresholds apply to <em>taxable income</em> (after the standard deduction), not gross income. Source: IRS 2026.
            </p>
            <p>
              Note: Qualified dividends from stocks held more than 60 days are taxed at the same preferential long-term capital gains rates — not as ordinary income.
            </p>
          </section>

          <section id="niit">
            <h2>Net Investment Income Tax (NIIT) — 3.8%</h2>
            <p>
              On top of regular capital gains rates, a 3.8% surtax applies to net investment income for taxpayers above the MAGI thresholds. 
              This means high earners face effective capital gains rates of 18.8% or 23.8%.
            </p>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Filing Status</th>
                  <th>NIIT Kicks In Above</th>
                  <th>Max Effective LTCG Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Single / HoH</td>
                  <td className={styles.hi}>$200,000 MAGI</td>
                  <td className={styles.red}>23.8%</td>
                </tr>
                <tr>
                  <td>Married Filing Jointly</td>
                  <td className={styles.hi}>$250,000 MAGI</td>
                  <td className={styles.red}>23.8%</td>
                </tr>
                <tr>
                  <td>Married Filing Separately</td>
                  <td className={styles.hi}>$125,000 MAGI</td>
                  <td className={styles.red}>23.8%</td>
                </tr>
              </tbody>
            </table>
            <p>
              NIIT applies to capital gains, dividends, interest, rental income, and passive business income &mdash; but not wages or self-employment income.
            </p>
          </section>

          <section id="zero">
            <p className={styles.sectionLabel}>Retirement Opportunity</p>
            <h2>The 0% Capital Gains Rate: A Retiree&rsquo;s Most Powerful Tool</h2>
            <p>
              The 0% long-term capital gains rate is one of the most valuable &mdash; and most underused &mdash; tax breaks available to retirees. Here&rsquo;s how to access it:
            </p>
            <div className={styles.greenBox}>
              <p>✓ <strong>Who qualifies:</strong> Retirees with taxable income below $48,350 (single) or $96,700 (MFJ) pay <em>zero</em> federal capital gains tax on long-term investment gains and qualified dividends. This is after the standard deduction, so a married couple 65+ could have roughly $130,000 in gross income and still qualify.</p>
            </div>
            <h3>How to Stay in the 0% Zone</h3>
            <ul>
              <li><strong>Use Roth accounts strategically:</strong> Roth withdrawals don't count as taxable income &mdash; draw from Roth to cover expenses while selling taxable investments at 0% gains rates</li>
              <li><strong>Time IRA withdrawals carefully:</strong> Each traditional IRA dollar withdrawn increases taxable income and can push you out of the 0% bracket</li>
              <li><strong>Use Qualified Charitable Distributions:</strong> QCDs from IRAs satisfy RMDs without adding to taxable income</li>
              <li><strong>Consider the standard deduction headroom:</strong> With a $30,000 standard deduction (MFJ) + $2,600 extra if both spouses are 65+, you have $129,300 in gross income before hitting the 0% limit</li>
            </ul>
          </section>

          <section id="gain-harvesting">
            <h2>Tax-Gain Harvesting: Resetting Basis at 0%</h2>
            <p>
              If you&rsquo;re in the 0% capital gains bracket, you can sell appreciated investments, pay no tax on the gains, and immediately repurchase them &mdash; permanently raising your cost basis. This is called &ldquo;gain harvesting&rdquo; or &ldquo;tax-gain harvesting.&rdquo;
            </p>
            <div className={styles.infoBox}>
              <p>📌 <strong>Example:</strong> You own 500 shares of an index fund purchased at $40/share (basis: $20,000). Current value: $100/share ($50,000 total). You sell and repurchase. You realize a $30,000 gain &mdash; taxed at 0% because your taxable income is $60,000 MFJ. Your new basis is $100/share. Future gains will be measured from $100, not $40 &mdash; permanently reducing your future tax exposure.</p>
            </div>
            <p>Unlike tax-loss harvesting (which is limited by the wash-sale rule), <strong>gain harvesting has no waiting period</strong> &mdash; you can sell and repurchase the same security immediately.</p>
          </section>

          <section id="ss-interaction">
            <h2>How Capital Gains Interact With Social Security Taxes</h2>
            <p>
              This is the &ldquo;double hit&rdquo; most retirees don&rsquo;t see coming: long-term capital gains &mdash; even gains taxed at 0% &mdash; still count toward your <strong>provisional income</strong> for calculating how much of your Social Security benefit is federally taxable.
            </p>
            <p>
              Provisional income = AGI + tax-exempt interest + 50% of Social Security. Capital gains are included in AGI. A large gain in one year can push your provisional income above the $34,000 (single) or $44,000 (MFJ) threshold where 85% of SS becomes taxable &mdash; adding an effective hidden tax rate of about 8.5 cents per dollar of gain.
            </p>
            <div className={styles.warnBox}>
              <p>⚠️ <strong>Modeling required:</strong> Always model capital gains realizations together with your Social Security income. A $50,000 LTCG that looks &ldquo;free&rdquo; at 0% could cost $4,000+ in extra Social Security taxes if it pushes your provisional income above the 85% threshold.</p>
            </div>
          </section>

          <section className={styles.faqSection} id="faq">
            <h2>Frequently Asked Questions</h2>
            
            {[
              {
                q: "What are the 2026 long-term capital gains tax rates?",
                a: "The 2026 LTCG rates are 0% (taxable income up to $48,350 single / $96,700 MFJ), 15% (up to $533,400 / $600,050 MFJ), and 20% above those thresholds. High-income taxpayers also owe an additional 3.8% NIIT, making the effective max rate 23.8%. Qualified dividends receive the same preferential treatment."
              },
              {
                q: "How long must I hold an investment to get long-term rates?",
                a: "More than 12 months &mdash; meaning at least one year and one day. If you sell on exactly the 12-month anniversary, that's still short-term. The clock starts the day after you purchase and includes the day you sell."
              },
              {
                q: "Do capital gains affect my Social Security benefits?",
                a: "Yes. Capital gains count as part of your provisional income, which determines how much of your Social Security benefit is federally taxable (0%, 50%, or 85%). Even if you're in the 0% LTCG bracket, a large gain could push your provisional income above the SS taxation thresholds, effectively adding an 8&ndash;9% hidden marginal rate on those gains."
              },
              {
                q: "Are capital gains taxed in my state?",
                a: "Most states tax capital gains as ordinary income at the state income tax rate. Nine states have no income tax at all (FL, TX, WA, NV, WY, SD, TN, AK, NH). Some states have special LTCG rates. Washington state has a 7% capital gains tax on gains over $262,000. California taxes all capital gains as ordinary income (up to 13.3%)."
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
              <li>IRS Rev. Proc. 2025-40 &mdash; 2026 capital gains thresholds</li>
              <li>IRS Topic No. 409 &mdash; Capital Gains and Losses</li>
              <li>IRS Publication 550 &mdash; Investment Income and Expenses</li>
              <li>IRS Form 8960 &mdash; Net Investment Income Tax</li>
              <li>Plootus Research &mdash; April 2026</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.tocBox}>
            <h3>On This Page</h3>
            <ol>
              <li><a href="#stlt">Short-Term vs. Long-Term</a></li>
              <li><a href="#rates">2026 LTCG Rates</a></li>
              <li><a href="#niit">Net Investment Income Tax</a></li>
              <li><a href="#zero">The 0% Rate Strategy</a></li>
              <li><a href="#ss-interaction">Capital Gains & Social Security</a></li>
              <li><a href="#gain-harvesting">Gain Harvesting</a></li>
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

export default CapitalGainsTaxRates;
