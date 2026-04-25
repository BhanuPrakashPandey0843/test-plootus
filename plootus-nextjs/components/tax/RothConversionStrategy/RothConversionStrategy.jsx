import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './RothConversionStrategy.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const RothConversionStrategy = () => {
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
          <p className={styles.heroTag}>🔄 Tax Strategy · Retirement Planning · IRMAA · 2026</p>
          <h1>Roth Conversion Strategy: The Complete 2026 Guide</h1>
          <p className={styles.heroDeck}>
            Roth conversions can save you hundreds of thousands in lifetime taxes — but only if you convert at the right time and in the right amount. This guide covers bracket-filling, IRMAA traps, the 5-year rule, and the Roth conversion ladder for early retirees.
          </p>
          <div className={styles.heroMeta}>
            <span>📅 Updated April 2026</span>
            <span>⏱ 10 min read</span>
            <span>📚 SECURE Act 2.0</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>$212K</span>
            <span className={styles.statLabel}>IRMAA Trigger — MFJ (2026)</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>5 yrs</span>
            <span className={styles.statLabel}>Conversion Holding Period</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>Age 59½</span>
            <span className={styles.statLabel}>Penalty-Free Withdrawal Age</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>73</span>
            <span className={styles.statLabel}>RMD Start Age — Reduces Window</span>
          </div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent} role="main">
          
          <section id="why">
            <p className={styles.sectionLabel}>The Case for Conversion</p>
            <h2>Why Convert Traditional IRA / 401(k) to Roth?</h2>
            <p>A Roth conversion is a taxable event today that eliminates taxes forever on the converted funds and all future growth. The case for converting rests on three pillars:</p>
            
            <div className={styles.cardGrid}>
              <div className={styles.card}>
                <div className={styles.cardVal}>Tax-Free Growth</div>
                <h4>No RMDs. No future tax.</h4>
                <p>Roth IRAs have no required minimum distributions. Converted funds and all future earnings grow and come out completely tax-free in retirement.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardVal}>Lower Future Brackets</div>
                <h4>Pay tax now at a lower rate</h4>
                <p>If you convert during low-income retirement years (before RMDs and Social Security), you may pay 12% now vs. 22%+ later — a permanent, compounded savings.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardVal}>Estate Planning</div>
                <h4>Tax-free inheritance</h4>
                <p>Heirs inherit Roth IRAs tax-free and must distribute within 10 years — but those distributions are not taxable income to them.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardVal}>RMD Reduction</div>
                <h4>Shrink future mandatory withdrawals</h4>
                <p>Every dollar converted to Roth reduces your future traditional IRA/401(k) balance — lowering future RMDs that could push you into higher brackets.</p>
              </div>
            </div>
          </section>

          <section id="when">
            <p className={styles.sectionLabel}>Timing</p>
            <h2>When Is the Best Time to Convert?</h2>
            <p>Roth conversions make the most financial sense when your current tax rate is lower than your expected future rate. The prime window is the <strong>"Roth conversion corridor"</strong>:</p>
            
            <div className={styles.highlightBox}>
              <p>📌 <strong>The Conversion Corridor:</strong> The years between retirement (when your wage income stops) and when Social Security and RMDs begin (typically ages 62–73). During this window, your income may drop to its lowest point of your adult life — making it the ideal time to fill lower brackets with Roth conversions.</p>
            </div>
            
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Life Stage</th>
                  <th>Typical Income Level</th>
                  <th>Conversion Attractiveness</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Working years (high income)</td>
                  <td>High — in 22%+ bracket</td>
                  <td className={styles.red}>Generally not attractive</td>
                </tr>
                <tr>
                  <td>Early retirement (before SS & RMDs)</td>
                  <td>Very low — may be in 10–12%</td>
                  <td className={styles.green}>⭐ Most attractive window</td>
                </tr>
                <tr>
                  <td>After Social Security begins</td>
                  <td>Moderate — SS + withdrawals</td>
                  <td className={styles.hi}>Moderate — depends on SS amount</td>
                </tr>
                <tr>
                  <td>After RMDs begin (age 73+)</td>
                  <td>High — RMDs push income up</td>
                  <td className={styles.red}>Less attractive; forced income</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="how-much">
            <h2>How Much to Convert Each Year: Bracket-Filling Strategy</h2>
            <p>The optimal approach: convert enough each year to fill your current bracket without crossing into the next one. This is called "bracket filling."</p>
            
            <div className={styles.greenBox}>
              <p>✓ <strong>Example — Married couple, ages 64–65:</strong><br />
Pension income: $30,000/year<br />
Taxable Social Security (50%): $12,000<br />
Standard deduction (both 65+): −$32,600<br />
Current taxable income: ~$9,400 (in 10% bracket)<br />
12% bracket top (MFJ): $96,950<br />
Conversion headroom: $96,950 − $9,400 = <strong>$87,550</strong><br />
Converting up to $87,550 of traditional IRA keeps them in the 12% bracket.
</p>
            </div>
            <p>Repeat this analysis every year during the conversion corridor. Each conversion increases the amount of Roth assets that grow tax-free, reducing future RMDs and the taxes they'd generate.</p>
          </section>

          <section id="irmaa">
            <p className={styles.sectionLabel}>Medicare IRMAA Warning</p>
            <h2>Medicare IRMAA: The Hidden Roth Conversion Trap</h2>
            <p>Medicare Part B and Part D premiums increase significantly for higher-income beneficiaries through Income-Related Monthly Adjustment Amounts (IRMAA). <strong>IRMAA is based on income from two years prior.</strong> A large Roth conversion in 2026 determines your 2028 Medicare premiums.</p>
            
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>2026 MAGI (Single)</th>
                  <th>2026 MAGI (MFJ)</th>
                  <th>2028 Part B Premium/mo</th>
                  <th>Premium Increase vs. Base</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.green}>≤ $106,000</td>
                  <td className={styles.green}>≤ $212,000</td>
                  <td>$185.00</td>
                  <td className={styles.green}>Base rate</td>
                </tr>
                <tr>
                  <td>$106,001–$133,000</td>
                  <td>$212,001–$266,000</td>
                  <td>$259.00</td>
                  <td className={styles.gold}>+$74/mo (+$888/yr)</td>
                </tr>
                <tr>
                  <td>$133,001–$167,000</td>
                  <td>$266,001–$334,000</td>
                  <td>$370.00</td>
                  <td className={styles.red}>+$185/mo (+$2,220/yr)</td>
                </tr>
                <tr>
                  <td>$167,001–$200,000</td>
                  <td>$334,001–$400,000</td>
                  <td>$480.90</td>
                  <td className={styles.red}>+$295.90/mo (+$3,551/yr)</td>
                </tr>
                <tr>
                  <td>$200,001–$500,000</td>
                  <td>$400,001–$750,000</td>
                  <td>$591.90</td>
                  <td className={styles.red}>+$406.90/mo (+$4,883/yr)</td>
                </tr>
                <tr>
                  <td>&gt; $500,000</td>
                  <td>&gt; $750,000</td>
                  <td>$627.90</td>
                  <td className={styles.red}>+$442.90/mo (+$5,315/yr)</td>
                </tr>
              </tbody>
            </table>
            
            <div className={styles.warnBox}>
              <p>⚠️ <strong>The cliff problem:</strong> IRMAA is a cliff, not a slope. Being $1 over the $212,000 threshold (MFJ) costs you $888 more in Medicare premiums the following year. For couples, convert carefully to stay below each IRMAA tier. Adding Part D IRMAA makes the dollar stakes even higher.</p>
            </div>
          </section>

          <section id="five-year">
            <h2>The 5-Year Rule for Roth Conversions</h2>
            <p>Roth conversions have a 5-year holding requirement before the converted funds can be withdrawn penalty-free (if you're under age 59½). Each conversion starts its own 5-year clock from January 1 of the conversion year.</p>
            <ul>
              <li><strong>Age 59½+:</strong> No 5-year rule applies to conversions — you can withdraw converted funds immediately without penalty (though earnings have a separate 5-year rule from when you first opened a Roth IRA)</li>
              <li><strong>Under 59½ (FIRE retirees):</strong> Must wait 5 years from each conversion before withdrawing those specific funds without the 10% early withdrawal penalty</li>
              <li><strong>Ordering rules:</strong> Withdrawals from a Roth IRA come out in this order: (1) regular contributions (always tax and penalty-free), (2) conversions in chronological order, (3) earnings last</li>
            </ul>
          </section>

          <section id="ladder">
            <h2>The Roth Conversion Ladder for Early Retirees</h2>
            <p>FIRE retirees who retire before 59½ often use the Roth conversion ladder to access pre-tax retirement funds without paying the 10% early withdrawal penalty:</p>
            <ul>
              <li><strong>Year 1 of retirement:</strong> Convert $X from Traditional IRA to Roth. Pay income tax on conversion. The 5-year clock starts.</li>
              <li><strong>Years 2–4:</strong> Continue converting each year. Live off taxable brokerage accounts, Roth contributions, or small Roth IRA withdrawals (contributions are always accessible).</li>
              <li><strong>Year 5+:</strong> The first year's conversion is now accessible penalty-free. Each subsequent year, the next rung of the ladder unlocks.</li>
            </ul>
            
            <div className={styles.infoBox}>
              <p>📌 <strong>The key insight:</strong> By converting small amounts each year and waiting 5 years, you create a perpetual stream of penalty-free withdrawals — using today's low tax rates to fund your future withdrawals with tax-free Roth dollars. This strategy requires at least 5 years of non-Roth assets to live on while the ladder builds.</p>
            </div>
          </section>

          <section id="mechanics">
            <h2>How to Actually Execute a Roth Conversion</h2>
            <ul>
              <li><strong>Where to convert:</strong> Contact your IRA custodian (Fidelity, Vanguard, Schwab, etc.) and request a conversion. They'll ask how much and whether to convert in-kind (transfer investments) or as cash.</li>
              <li><strong>Tax withholding:</strong> Do NOT withhold taxes from the conversion amount. Pay the tax from outside the IRA. Withholding reduces the amount converted and is treated as an early distribution if under 59½.</li>
              <li><strong>Timing:</strong> Conversions can be done any time during the calendar year, including up to December 31. The conversion counts as 2026 income regardless of when in 2026 you do it. There is no longer a "recharacterization" (undo) option for conversions.</li>
              <li><strong>Reporting:</strong> Your custodian will send you Form 1099-R showing the conversion. You'll report it on Form 8606 (Part II) with your tax return.</li>
            </ul>
          </section>

          <section className={styles.faqSection} id="faq">
            <h2>Frequently Asked Questions</h2>
            
            {[
              {
                q: "When is the best time to do a Roth conversion?",
                a: "The best time is the \"Roth conversion corridor\" — the years between retirement and when Social Security and RMDs begin (typically ages 62–73). Your income is at its lowest, so you pay the least tax on conversions. Specifically, convert each year to fill your current bracket without crossing into the next one or triggering Medicare IRMAA surcharges."
              },
              {
                q: "Do you pay state taxes on a Roth conversion?",
                a: "Yes, in most states. A Roth conversion adds to your state taxable income just like it does federally. Exceptions: states with no income tax (FL, TX, WA, NV, WY, SD, TN, AK, NH) owe no state tax on conversions. Some states like Illinois fully exempt retirement income, which may include conversions depending on how the state defines retirement income. Check your state's specific rules."
              },
              {
                q: "Can I convert just part of my Traditional IRA to a Roth?",
                a: "Yes. There is no minimum or maximum conversion amount. You can convert any portion of your Traditional IRA to Roth in any given year. In fact, partial conversions are the standard approach — converting just enough to fill a specific tax bracket without crossing into the next one."
              },
              {
                q: "Is a Roth conversion a good idea at age 70?",
                a: "At age 70, RMDs are approaching (begin at 73), Social Security is likely in full swing, and your income is probably higher than earlier in retirement. Conversions are still worthwhile if: your current effective rate is below what you'd pay on future RMDs; you want to reduce RMDs; you're focused on estate planning (leaving tax-free Roth to heirs). Model it carefully with IRMAA thresholds in mind."
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
              <li>IRS Publication 590-A — Roth Conversions</li>
              <li>IRS Publication 590-B — Distributions from IRAs (5-year rules)</li>
              <li>IRS Form 8606 — Roth conversion reporting</li>
              <li>CMS 2026 Medicare Part B Premium Schedule</li>
              <li>SECURE Act 2.0 (P.L. 117-328) — RMD age changes</li>
              <li>Plootus Research — April 2026</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.tocBox}>
            <h3>On This Page</h3>
            <ol>
              <li><a href="#why">Why Convert to Roth</a></li>
              <li><a href="#when">When to Convert</a></li>
              <li><a href="#how-much">How Much to Convert</a></li>
              <li><a href="#irmaa">Medicare IRMAA Traps</a></li>
              <li><a href="#five-year">The 5-Year Rule</a></li>
              <li><a href="#ladder">Roth Conversion Ladder</a></li>
              <li><a href="#mechanics">Mechanics of a Conversion</a></li>
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

export default RothConversionStrategy;
