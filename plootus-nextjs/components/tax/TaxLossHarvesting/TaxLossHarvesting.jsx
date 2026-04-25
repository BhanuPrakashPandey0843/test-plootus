import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './TaxLossHarvesting.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const TaxLossHarvesting = () => {
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
          <p className={styles.heroTag}>📈 Tax Strategy · Portfolio Management · 2026</p>
          <h1>Tax-Loss Harvesting: Complete Guide for 2026</h1>
          <p className={styles.heroDeck}>
            Tax-loss harvesting turns declining investments into real tax savings — without permanently leaving the market. This guide covers how it works, the wash-sale rule, the $3,000 annual income deduction, carryforward rules, and when it makes (and doesn't make) sense for retirees.
          </p>
          <div className={styles.heroMeta}>
            <span>📅 Updated April 2026</span>
            <span>⏱ 8 min read</span>
            <span>📚 IRS Rules 2026</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>$3,000</span>
            <span className={styles.statLabel}>Max Annual Deduction vs. Ordinary Income</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>61 days</span>
            <span className={styles.statLabel}>Wash-Sale Rule Window</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>Unlimited</span>
            <span className={styles.statLabel}>Capital Gain Offset Potential</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>Indefinite</span>
            <span className={styles.statLabel}>Loss Carryforward Period</span>
          </div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent} role="main">
          
          <section id="how-it-works">
            <p className={styles.sectionLabel}>The Basics</p>
            <h2>How Tax-Loss Harvesting Works</h2>
            <p>Tax-loss harvesting works by deliberately selling investments that are worth less than you paid for them. The realized loss reduces your tax bill — either by offsetting capital gains you've realized elsewhere, or by deducting up to $3,000 against your ordinary income.</p>
            
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Step</th>
                  <th>Action</th>
                  <th>Tax Effect</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.hi}>1</td>
                  <td>Identify investments with unrealized losses in taxable accounts</td>
                  <td>No tax effect yet</td>
                </tr>
                <tr>
                  <td className={styles.hi}>2</td>
                  <td>Sell the position to realize the loss</td>
                  <td>Creates a deductible capital loss</td>
                </tr>
                <tr>
                  <td className={styles.hi}>3</td>
                  <td>Reinvest proceeds in a similar (not identical) security</td>
                  <td>Maintains market exposure; avoids wash-sale rule</td>
                </tr>
                <tr>
                  <td className={styles.hi}>4</td>
                  <td>Apply the loss against capital gains on your tax return</td>
                  <td>Reduces or eliminates capital gains tax</td>
                </tr>
                <tr>
                  <td className={styles.hi}>5</td>
                  <td>Deduct up to $3,000 of remaining loss against ordinary income</td>
                  <td>Reduces taxable income directly</td>
                </tr>
                <tr>
                  <td className={styles.hi}>6</td>
                  <td>Carry forward any unused losses to future years</td>
                  <td>Permanent tax savings — no expiration</td>
                </tr>
              </tbody>
            </table>
            
            <div className={styles.greenBox}>
              <p>✓ <strong>Example:</strong> You have a $20,000 realized capital gain from selling appreciated stock. You also have an investment down $15,000. You sell the loser, realizing a $15,000 loss. Net gain: $5,000. You only owe capital gains tax on $5,000 instead of $20,000 — at 15%, that's $750 owed instead of $3,000. Tax saved: $2,250.</p>
            </div>
          </section>

          <section id="wash-sale">
            <p className={styles.sectionLabel}>Critical Rule</p>
            <h2>The Wash-Sale Rule: What Disqualifies Your Loss</h2>
            <p>The IRS wash-sale rule (IRC Section 1091) disallows the tax loss if you buy a "substantially identical" security within 30 days before or after the sale — creating a 61-day blackout window total (30 days before + day of sale + 30 days after).</p>
            
            <div className={styles.warnBox}>
              <p>⚠️ <strong>Common wash-sale traps:</strong><br />
• Selling a stock at a loss then buying the same stock within 30 days<br />
• Selling a mutual fund and buying an ETF tracking the exact same index (S&P 500 fund → another S&P 500 fund)<br />
• Having your spouse buy the same security in their account<br />
• Buying call options on the sold security<br />
• Selling in a taxable account but buying the same security in your IRA within 30 days</p>
            </div>
            
            <h3>What Is "Substantially Identical"?</h3>
            <p>The IRS has not precisely defined this, but courts and tax professionals generally consider:</p>
            <ul>
              <li><strong>Clearly wash-sale:</strong> Selling Apple stock and buying Apple stock. Selling Vanguard Total Market (VTSAX) and buying iShares Total Market (ITOT) — too similar.</li>
              <li><strong>Generally safe:</strong> Selling an S&P 500 ETF (SPY) and buying a total market ETF (VTI) — different index, different holdings. Selling a US large-cap fund and buying a developed international fund.</li>
              <li><strong>Gray area:</strong> Selling one S&P 500 fund and buying a different S&P 500 fund. Different fund company, same index — likely a wash sale.</li>
            </ul>
            
            <h3>What Happens If You Trigger a Wash Sale?</h3>
            <p>The disallowed loss is added to the cost basis of the repurchased shares (not permanently lost). You'll get the tax benefit when you eventually sell the replacement shares — but you've lost the ability to claim the loss now when you needed it.</p>
          </section>

          <section id="limits">
            <h2>Capital Loss Deduction Limits & Carryforward Rules</h2>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Situation</th>
                  <th>Deduction Limit</th>
                  <th>Carryforward?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Losses offsetting capital gains</td>
                  <td className={styles.green}>Unlimited (dollar-for-dollar)</td>
                  <td>Yes, until exhausted</td>
                </tr>
                <tr>
                  <td>Excess losses vs. ordinary income</td>
                  <td className={styles.hi}>$3,000/year ($1,500 MFS)</td>
                  <td className={styles.green}>Yes, indefinitely</td>
                </tr>
                <tr>
                  <td>Short-term losses offset</td>
                  <td>Short-term gains first, then long-term</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Long-term losses offset</td>
                  <td>Long-term gains first, then short-term</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
            
            <div className={styles.infoBox}>
              <p>📌 <strong>Netting order matters:</strong> The IRS requires you to net losses against gains of the same type first. Short-term losses offset short-term gains first; long-term losses offset long-term gains first. After netting, any remaining net loss offsets the other type (short vs. long), and then up to $3,000 offsets ordinary income. Track this carefully on Schedule D.</p>
            </div>
          </section>

          <section id="retirees">
            <p className={styles.sectionLabel}>Retiree-Specific Strategy</p>
            <h2>Tax-Loss Harvesting for Retirees: Key Considerations</h2>
            
            <h3>1. Only Taxable Accounts Qualify</h3>
            <p>Tax-loss harvesting <strong>only works in taxable brokerage accounts</strong>. Losses inside a 401(k), IRA, or Roth account cannot be harvested — those accounts have no taxable recognition of individual gains or losses.</p>
            
            <h3>2. RMD Income Creates More Opportunity</h3>
            <p>Retirees with large RMDs have significant ordinary income that capital losses can offset (up to $3,000/year). This makes loss harvesting potentially more valuable than for lower-income filers.</p>
            
            <h3>3. Medicare IRMAA Consideration</h3>
            <p>Realizing capital gains — even long-term — increases MAGI and can trigger Medicare IRMAA surcharges. Losses can offset these gains and keep MAGI below IRMAA thresholds, worth $888–$5,315/year in premium savings.</p>
            
            <h3>4. Estate Planning Angle</h3>
            <p>Heirs receive investments with a "stepped-up" cost basis at death — meaning all unrealized gains are permanently forgiven at death. If you plan to hold appreciated investments until death, harvesting gains and losses in taxable accounts may be less urgent than for others.</p>
            
            <h3>5. 0% Rate Consideration</h3>
            <p>If your taxable income is below $48,350 (single) / $96,700 (MFJ), you're in the 0% long-term capital gains bracket. In that case, losses may be more valuable deployed in other ways (or simply held for future higher-income years).</p>
          </section>

          <section id="gain-vs-loss">
            <h2>Tax-Gain Harvesting vs. Tax-Loss Harvesting</h2>
            <p>Most people have heard of tax-loss harvesting. Fewer know about its mirror image — <strong>tax-gain harvesting</strong>:</p>
            
            <div className={styles.twoCol}>
              <div className={styles.card}>
                <div className={styles.cardVal} style={{ color: 'var(--green)' }}>Tax-Gain Harvesting</div>
                <p><strong>When:</strong> You're in the 0% capital gains bracket<br />
                <strong>Action:</strong> Sell appreciated assets, pay 0% tax, immediately repurchase<br />
                <strong>Effect:</strong> Permanently raises your cost basis — reduces future taxable gains<br />
                <strong>No wash-sale rule</strong> applies to gains</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardVal} style={{ color: 'var(--red)' }}>Tax-Loss Harvesting</div>
                <p><strong>When:</strong> You have unrealized losses and capital gains to offset<br />
                <strong>Action:</strong> Sell declining assets, realize the loss, reinvest in similar security<br />
                <strong>Effect:</strong> Reduces current-year tax bill; lowers your cost basis going forward<br />
                <strong>Wash-sale rule applies</strong></p>
              </div>
            </div>
          </section>

          <section id="when-not">
            <h2>When Tax-Loss Harvesting Doesn't Make Sense</h2>
            <ul>
              <li><strong>You're in the 0% capital gains bracket:</strong> If you have no capital gains taxes to offset, the benefit is limited to the $3,000 ordinary income deduction</li>
              <li><strong>All your assets are in tax-deferred accounts:</strong> No taxable accounts = no harvesting opportunity</li>
              <li><strong>The loss is small relative to transaction costs:</strong> Commissions, bid-ask spreads, and rebalancing costs can eat into small tax savings</li>
              <li><strong>You'll trigger the wash-sale rule:</strong> If you're automatically reinvesting dividends in the same fund or making 401(k) contributions in the same holdings, you may accidentally trigger wash sales</li>
              <li><strong>You're close to retirement with low future income expectations:</strong> If your future brackets will be low anyway, the value of current losses is limited</li>
            </ul>
          </section>

          <section className={styles.faqSection} id="faq">
            <h2>Frequently Asked Questions</h2>
            
            {[
              {
                q: "What is tax-loss harvesting?",
                a: "Tax-loss harvesting is the practice of selling investments at a loss to generate a capital loss deduction. The realized loss offsets capital gains dollar-for-dollar, and up to $3,000 of excess losses can deduct against ordinary income each year. Unused losses carry forward indefinitely. You reinvest in a similar (not identical) security to maintain market exposure without triggering the wash-sale rule."
              },
              {
                q: "How much can I deduct from tax-loss harvesting in 2026?",
                a: "Capital losses offset capital gains without limit. If your losses exceed your gains, you can deduct up to $3,000 ($1,500 if married filing separately) against ordinary income per year. Losses beyond $3,000 carry forward to future years with no expiration — you can apply them in any future year you have capital gains or ordinary income to offset."
              },
              {
                q: "Does tax-loss harvesting work in an IRA?",
                a: "No. Tax-loss harvesting only applies to taxable (non-retirement) brokerage accounts. Losses inside a Traditional IRA, Roth IRA, 401(k), or other tax-advantaged account are not recognized for tax purposes — you cannot claim them as deductions. All gains and losses within these accounts are either tax-deferred or tax-free."
              },
              {
                q: "What counts as a 'substantially identical' security for the wash-sale rule?",
                a: "The IRS hasn't precisely defined this, but it clearly includes the same stock, bond, or fund. Most tax professionals consider ETFs and mutual funds tracking the exact same index to be substantially identical. Funds tracking different but similar indexes (S&P 500 vs. total stock market) are generally considered safe replacements. When in doubt, choose a replacement that tracks a genuinely different index, asset class, or geographic region."
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
              <li>IRC Section 1091 — Wash-Sale Rule</li>
              <li>IRS Publication 550 — Investment Income and Expenses</li>
              <li>IRS Schedule D — Capital Gains and Losses</li>
              <li>IRS Publication 544 — Sales and Other Dispositions of Assets</li>
              <li>Plootus Research — April 2026</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.tocBox}>
            <h3>On This Page</h3>
            <ol>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#wash-sale">The Wash-Sale Rule</a></li>
              <li><a href="#limits">Deduction Limits & Carryforward</a></li>
              <li><a href="#retirees">For Retirees</a></li>
              <li><a href="#gain-vs-loss">Gain vs. Loss Harvesting</a></li>
              <li><a href="#when-not">When NOT to Harvest</a></li>
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

export default TaxLossHarvesting;
