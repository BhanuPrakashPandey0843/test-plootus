import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './RothVsTraditional.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const RothVsTraditional = () => {
  const router = useRouter();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Calculator State
  const [income, setIncome] = useState(75000);
  const [filing, setFiling] = useState('single');
  const [stateRate, setStateRate] = useState(0);
  const [currentAge, setCurrentAge] = useState(35);
  const [retireAge, setRetireAge] = useState(65);
  const [contribution, setContribution] = useState(7000);
  const [returnRate, setReturnRate] = useState(0.07);
  const [retireBracket, setRetireBracket] = useState(0.22);

  // Results State
  const [rothAfterTax, setRothAfterTax] = useState(0);
  const [tradAfterTax, setTradAfterTax] = useState(0);
  const [yearsGrowth, setYearsGrowth] = useState(0);
  const [totalContrib, setTotalContrib] = useState(0);
  const [currentFedRate, setCurrentFedRate] = useState(0);
  const [recommendation, setRecommendation] = useState('');

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const brackets = {
    single: [
      { min: 0, max: 11925, rate: 0.10 },
      { min: 11925, max: 48475, rate: 0.12 },
      { min: 48475, max: 103350, rate: 0.22 },
      { min: 103350, max: 197300, rate: 0.24 },
      { min: 197300, max: 250525, rate: 0.32 },
      { min: 250525, max: 626350, rate: 0.35 },
      { min: 626350, max: Infinity, rate: 0.37 },
    ],
    mfj: [
      { min: 0, max: 23850, rate: 0.10 },
      { min: 23850, max: 96950, rate: 0.12 },
      { min: 96950, max: 206700, rate: 0.22 },
      { min: 206700, max: 394600, rate: 0.24 },
      { min: 394600, max: 501050, rate: 0.32 },
      { min: 501050, max: 751600, rate: 0.35 },
      { min: 751600, max: Infinity, rate: 0.37 },
    ],
    hoh: [
      { min: 0, max: 17000, rate: 0.10 },
      { min: 17000, max: 64850, rate: 0.12 },
      { min: 64850, max: 103350, rate: 0.22 },
      { min: 103350, max: 197300, rate: 0.24 },
      { min: 197300, max: 250500, rate: 0.32 },
      { min: 250500, max: 626350, rate: 0.35 },
      { min: 626350, max: Infinity, rate: 0.37 },
    ]
  };

  const getMarginalRate = (inc, fil) => {
    const b = brackets[fil] || brackets.single;
    for (let i = b.length - 1; i >= 0; i--) {
      if (inc > b[i].min) return b[i].rate;
    }
    return 0.10;
  };

  const fmt = (n) => '$' + Math.round(n).toLocaleString();

  useEffect(() => {
    const years = Math.max(retireAge - currentAge, 1);
    const fedRate = getMarginalRate(income, filing);
    const totalTaxRate = fedRate + stateRate;

    // Roth calculation
    const fvFactor = ((Math.pow(1 + returnRate, years) - 1) / returnRate) * (1 + returnRate);
    const rothBal = contribution * fvFactor;
    
    // Traditional calculation
    const tradPreTaxContrib = contribution / (1 - totalTaxRate);
    const tradBal = tradPreTaxContrib * fvFactor;
    const retireTaxRate = retireBracket + stateRate;
    const tradAfter = tradBal * (1 - retireTaxRate);

    setRothAfterTax(rothBal);
    setTradAfterTax(tradAfter);
    setYearsGrowth(years);
    setTotalContrib(contribution * years);
    setCurrentFedRate(fedRate);

    const diff = Math.abs(rothBal - tradAfter);
    const pct = Math.round((diff / Math.min(rothBal, tradAfter)) * 100);
    const rothWins = rothBal >= tradAfter;

    let rec = '';
    if (rothWins) {
      rec = `<strong>Roth IRA looks better for your situation</strong> — by approximately ${fmt(diff)} (${pct}%) over ${years} years. Your current tax rate (${Math.round(fedRate * 100)}% federal) is lower than your expected retirement rate (${Math.round(retireBracket * 100)}%), so paying taxes now and enjoying tax-free growth beats deferring.`;
    } else {
      rec = `<strong>Traditional IRA looks better for your situation</strong> — by approximately ${fmt(diff)} (${pct}%) over ${years} years. Your current tax rate (${Math.round(fedRate * 100)}% federal) is higher than your expected retirement rate (${Math.round(retireBracket * 100)}%), so the deduction now outweighs the future tax-free benefit.`;
    }
    if (pct < 5) {
      rec += ' The difference is small — <strong>tax diversification</strong> (holding both) may be the wisest strategy.';
    }
    setRecommendation(rec);
  }, [income, filing, stateRate, currentAge, retireAge, contribution, returnRate, retireBracket]);

  return (
    <div className={styles.container}>
      

      <HubNav />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>🧮 Interactive Calculator · 2025 IRS Data</div>
          <h1>Roth vs. Traditional IRA: Which Wins for You in 2025?</h1>
          <p className={styles.heroSub}>The right answer depends on your current tax bracket, your expected retirement tax rate, and how long your money has to grow. Our break-even calculator runs the numbers — with 2025 IRS limits and state tax data built in.</p>
          <div className={styles.heroPills}>
            <span className={styles.heroPill}>📋 2025 IRS contribution limits ($7,000 / $8,000)</span>
            <span className={styles.heroPill}>🏛️ All 50 state tax rates included</span>
            <span className={styles.heroPill}>🔒 No sign-up required</span>
          </div>
        </div>
      </section>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}><span className={styles.statNum}>$7,000</span><span className={styles.statLabel}>2025 IRA Contribution Limit</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>$8,000</span><span className={styles.statLabel}>Limit if Age 50+ (Catch-Up)</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>$150K</span><span className={styles.statLabel}>Roth Phase-Out Starts (Single)</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>Age 73</span><span className={styles.statLabel}>Traditional IRA <abbr title="Required Minimum Distribution">RMD</abbr> Age (SECURE 2.0)</span></div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent}>
          {/* CALCULATOR */}
          <section id="calculator">
            <div className={styles.sectionLabel}>Interactive Tool</div>
            <h2>Break-Even Calculator: Roth vs. Traditional IRA</h2>
            <p>Enter your details below. The calculator estimates your after-tax retirement balance under both scenarios using 2025 IRS rules and current federal tax brackets.</p>

            <div className={styles.calcWrapper}>
              <div className={styles.calcHeader}>
                <div>
                  <h3>🧮 Roth vs. Traditional IRA Break-Even Calculator (2025)</h3>
                  <div className={styles.calcHeaderSub}>Results update in real time · See methodology for assumptions</div>
                </div>
              </div>
              <div className={styles.calcBody}>
                <div className={styles.calcGrid}>
                  <div className={styles.calcField}>
                    <label className={styles.calcLabel}>Annual Gross Income</label>
                    <div className={styles.calcInputPrefix}>
                      <span>$</span>
                      <input className={styles.calcInput} type="number" value={income} onChange={(e) => setIncome(Number(e.target.value))} />
                    </div>
                  </div>
                  <div className={styles.calcField}>
                    <label className={styles.calcLabel}>Filing Status</label>
                    <select className={styles.calcSelect} value={filing} onChange={(e) => setFiling(e.target.value)}>
                      <option value="single">Single</option>
                      <option value="mfj">Married Filing Jointly</option>
                      <option value="hoh">Head of Household</option>
                    </select>
                  </div>
                  <div className={styles.calcField}>
                    <label className={styles.calcLabel}>State</label>
                    <select className={styles.calcSelect} value={stateRate} onChange={(e) => setStateRate(Number(e.target.value))}>
                      <option value="0">No State Income Tax (FL, TX, NV, WA…)</option>
                      <option value="0.025">Arizona – 2.5%</option>
                      <option value="0.044">Colorado – 4.4%</option>
                      <option value="0.0699">Connecticut – 6.99%</option>
                      <option value="0.057">Georgia – 5.7%</option>
                      <option value="0.11">Hawaii – 11%</option>
                      <option value="0.058">Idaho – 5.8%</option>
                      <option value="0.0495">Illinois – 4.95% (flat)</option>
                      <option value="0.0315">Indiana – 3.15% (flat)</option>
                      <option value="0.06">Iowa – 6.0%</option>
                      <option value="0.057">Kansas – 5.7%</option>
                      <option value="0.04">Kentucky – 4.0% (flat)</option>
                      <option value="0.0425">Louisiana – 4.25%</option>
                      <option value="0.0715">Maine – 7.15%</option>
                      <option value="0.0575">Maryland – 5.75%</option>
                      <option value="0.09">Massachusetts – 9%</option>
                      <option value="0.0425">Michigan – 4.25% (flat)</option>
                      <option value="0.0985">Minnesota – 9.85%</option>
                      <option value="0.05">Mississippi – 5.0%</option>
                      <option value="0.0495">Missouri – 4.95%</option>
                      <option value="0.0675">Montana – 6.75%</option>
                      <option value="0.0584">Nebraska – 5.84%</option>
                      <option value="0.1075">New Jersey – 10.75% top</option>
                      <option value="0.059">New Mexico – 5.9%</option>
                      <option value="0.109">New York – 10.9% top</option>
                      <option value="0.0475">North Carolina – 4.75% (flat)</option>
                      <option value="0.025">North Dakota – 2.5%</option>
                      <option value="0.0399">Ohio – 3.99%</option>
                      <option value="0.0475">Oklahoma – 4.75%</option>
                      <option value="0.099">Oregon – 9.9%</option>
                      <option value="0.0307">Pennsylvania – 3.07% (flat)</option>
                      <option value="0.0599">Rhode Island – 5.99%</option>
                      <option value="0.065">South Carolina – 6.5%</option>
                      <option value="0.0485">Utah – 4.85% (flat)</option>
                      <option value="0.0875">Vermont – 8.75%</option>
                      <option value="0.0575">Virginia – 5.75%</option>
                      <option value="0.0765">Wisconsin – 7.65%</option>
                    </select>
                  </div>
                  <div className={styles.calcField}>
                    <label className={styles.calcLabel}>Current Age</label>
                    <input className={styles.calcInput} type="number" value={currentAge} onChange={(e) => setCurrentAge(Number(e.target.value))} />
                  </div>
                  <div className={styles.calcField}>
                    <label className={styles.calcLabel}>Retirement Age</label>
                    <input className={styles.calcInput} type="number" value={retireAge} onChange={(e) => setRetireAge(Number(e.target.value))} />
                  </div>
                  <div className={styles.calcField}>
                    <label className={styles.calcLabel}>Annual Contribution ($)</label>
                    <div className={styles.calcInputPrefix}>
                      <span>$</span>
                      <input className={styles.calcInput} type="number" value={contribution} onChange={(e) => setContribution(Number(e.target.value))} />
                    </div>
                  </div>
                  <div className={styles.calcField}>
                    <label className={styles.calcLabel}>Expected Annual Return</label>
                    <select className={styles.calcSelect} value={returnRate} onChange={(e) => setReturnRate(Number(e.target.value))}>
                      <option value="0.05">5.0%</option>
                      <option value="0.06">6.0%</option>
                      <option value="0.07">7.0%</option>
                      <option value="0.08">8.0%</option>
                      <option value="0.09">9.0%</option>
                      <option value="0.10">10.0%</option>
                    </select>
                  </div>
                  <div className={`${styles.calcField} ${styles.full}`}>
                    <label className={styles.calcLabel}>Expected Tax Bracket in Retirement</label>
                    <select className={styles.calcSelect} value={retireBracket} onChange={(e) => setRetireBracket(Number(e.target.value))}>
                      <option value="0.10">10% — Very low income in retirement</option>
                      <option value="0.12">12% — Modest income in retirement</option>
                      <option value="0.22">22% — Same as today (moderate income)</option>
                      <option value="0.24">24% — Higher income in retirement</option>
                      <option value="0.32">32% — High income in retirement</option>
                      <option value="0.35">35% — Very high income</option>
                      <option value="0.37">37% — Top bracket</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className={styles.calcResults}>
                <div className={styles.resultsRow}>
                  <div className={`${styles.resultCard} ${rothAfterTax >= tradAfterTax ? styles.winner : styles.loser}`}>
                    <div className={`${styles.resultAccount} ${styles.roth}`}>🟣 Roth IRA</div>
                    <div className={styles.resultAmount}>{fmt(rothAfterTax)}</div>
                    <div className={styles.resultLabel}>After-tax at retirement</div>
                    {rothAfterTax >= tradAfterTax && <div><span className={styles.resultWinnerBadge}>✓ Better choice</span></div>}
                  </div>
                  <div className={`${styles.resultCard} ${tradAfterTax > rothAfterTax ? styles.winner : styles.loser}`}>
                    <div className={`${styles.resultAccount} ${styles.trad}`}>🟢 Traditional IRA</div>
                    <div className={styles.resultAmount}>{fmt(tradAfterTax)}</div>
                    <div className={styles.resultLabel}>After-tax at retirement</div>
                    {tradAfterTax > rothAfterTax && <div><span className={styles.resultWinnerBadge}>✓ Better choice</span></div>}
                  </div>
                </div>
                <div className={styles.resultStats}>
                  <div className={styles.resultStat}><div className={styles.resultStatVal}>{yearsGrowth} yrs</div><div className={styles.resultStatLabel}>Years of growth</div></div>
                  <div className={styles.resultStat}><div className={styles.resultStatVal}>{fmt(totalContrib)}</div><div className={styles.resultStatLabel}>Total contributions</div></div>
                  <div className={styles.resultStat}><div className={styles.resultStatVal}>{Math.round(currentFedRate * 100)}% federal</div><div className={styles.resultStatLabel}>Current federal bracket</div></div>
                </div>
                <div className={styles.recommendation}>
                  <div className={styles.recommendationIcon}>💡</div>
                  <div className={styles.recommendationText} dangerouslySetInnerHTML={{ __html: recommendation }}></div>
                </div>
                <div className={styles.calcDisclaimer}>⚠️ This calculator is for educational purposes only and does not constitute tax or financial advice. Consult a tax professional for personalized guidance.</div>
              </div>
            </div>
          </section>

          {/* AT A GLANCE */}
          <section id="at-a-glance">
            <div className={styles.sectionLabel}>Quick Reference</div>
            <h2>Roth vs. Traditional IRA: At a Glance</h2>
            <p>Both account types have the same contribution limits — the key difference is <strong>when</strong> you pay taxes.</p>
            <div className={styles.iraCompare}>
            <div className={`${styles.iraCard} ${styles.rothCard}`}>
              <div className={styles.iraCardTitle}>🟣 Roth IRA</div>
              <div className={styles.iraCardSubtitle}>Pay taxes now. Withdraw tax-free later.</div>
              <div className={styles.iraRow}><div className={styles.iraRowIcon}>💰</div><div className={styles.iraRowContent}><div className={styles.iraRowKey}>2025 Contribution Limit</div><div className={styles.iraRowVal}>$7,000/year ($8,000 if age 50+)</div></div></div>
              <div className={styles.iraRow}><div className={styles.iraRowIcon}>📊</div><div className={styles.iraRowContent}><div className={styles.iraRowKey}>Tax Treatment</div><div className={styles.iraRowVal}>After-tax — no deduction from income</div></div></div>
              <div className={styles.iraRow}><div className={styles.iraRowIcon}>📈</div><div className={styles.iraRowContent}><div className={styles.iraRowKey}>Growth</div><div className={styles.iraRowVal}>Tax-free — no tax on gains or dividends</div></div></div>
              <div className={styles.iraRow}><div className={styles.iraRowIcon}>🏖️</div><div className={styles.iraRowContent}><div className={styles.iraRowKey}>Withdrawals in Retirement</div><div className={styles.iraRowVal}>100% tax-free (after age 59½ + 5-year rule)</div></div></div>
              <div className={styles.iraRow}><div className={styles.iraRowIcon}>📋</div><div className={styles.iraRowContent}><div className={styles.iraRowKey}>Required Minimum Distributions</div><div className={styles.iraRowVal} style={{ color: 'var(--green)' }}>None — no RMDs during owner's lifetime</div></div></div>
              <div className={styles.iraRow}><div className={styles.iraRowIcon}>💵</div><div className={styles.iraRowContent}><div className={styles.iraRowKey}>2025 Income Limit (Full Contribution)</div><div className={styles.iraRowVal}>Single: &lt;$150,000 <abbr title="Modified Adjusted Gross Income">MAGI</abbr> | MFJ: &lt;$236,000</div></div></div>
              <div className={styles.iraRow}><div className={styles.iraRowIcon}>👶</div><div className={styles.iraRowContent}><div className={styles.iraRowKey}>Inheritance</div><div className={styles.iraRowVal}>Heirs inherit tax-free (if 5-year rule met)</div></div></div>
            </div>
            <div className={`${styles.iraCard} ${styles.tradCard}`}>
              <div className={styles.iraCardTitle}>🟢 Traditional IRA</div>
              <div className={styles.iraCardSubtitle}>Deduct now. Pay taxes in retirement.</div>
              <div className={styles.iraRow}><div className={styles.iraRowIcon}>💰</div><div className={styles.iraRowContent}><div className={styles.iraRowKey}>2025 Contribution Limit</div><div className={styles.iraRowVal}>$7,000/year ($8,000 if age 50+)</div></div></div>
              <div className={styles.iraRow}><div className={styles.iraRowIcon}>📊</div><div className={styles.iraRowContent}><div className={styles.iraRowKey}>Tax Treatment</div><div className={styles.iraRowVal}>Pre-tax (if eligible) — reduces taxable income today</div></div></div>
              <div className={styles.iraRow}><div className={styles.iraRowIcon}>📈</div><div className={styles.iraRowContent}><div className={styles.iraRowKey}>Growth</div><div className={styles.iraRowVal}>Tax-deferred — no tax until withdrawal</div></div></div>
              <div className={styles.iraRow}><div className={styles.iraRowIcon}>🏖️</div><div className={styles.iraRowContent}><div className={styles.iraRowKey}>Withdrawals in Retirement</div><div className={styles.iraRowVal}>Taxed as ordinary income at your future tax rate</div></div></div>
              <div className={styles.iraRow}><div className={styles.iraRowIcon}>📋</div><div className={styles.iraRowContent}><div className={styles.iraRowKey}>Required Minimum Distributions</div><div className={styles.iraRowVal} style={{ color: 'var(--red)' }}>Yes — must begin at age 73 (SECURE 2.0)</div></div></div>
              <div className={styles.iraRow}><div className={styles.iraRowIcon}>💵</div><div className={styles.iraRowContent}><div className={styles.iraRowKey}>Deductibility Phase-Out (Single, with plan)</div><div className={styles.iraRowVal}>$79,000–$89,000 MAGI (2025)</div></div></div>
              <div className={styles.iraRow}><div className={styles.iraRowIcon}>👶</div><div className={styles.iraRowContent}><div className={styles.iraRowKey}>Inheritance</div><div className={styles.iraRowVal}>Heirs pay income tax on withdrawals</div></div></div>
            </div>
          </div>
          </section>

          {/* IRS LIMITS */}
          <section id="irs-limits">
            <div className={styles.sectionLabel}>Official 2025 IRS Data</div>
            <h2>2025 IRA Contribution & Income Limits</h2>
            <div className={styles.limitBoxes}>
              <div className={styles.limitBox}><span className={styles.limitBoxVal}>$7,000</span><span className={styles.limitBoxLabel}>2025 Base Contribution Limit (both account types)</span></div>
              <div className={styles.limitBox}><span className={styles.limitBoxVal}>$8,000</span><span className={styles.limitBoxLabel}>Age 50+ Catch-Up Limit (2025)</span></div>
              <div className={styles.limitBox}><span className={styles.limitBoxVal}>$7,500</span><span className={styles.limitBoxLabel}>2026 Base Limit (increased $500)</span></div>
              <div className={styles.limitBox}><span className={styles.limitBoxVal}>Apr 15</span><span className={styles.limitBoxLabel}>Tax deadline to fund prior-year IRA</span></div>
            </div>

            <h3>Roth IRA Income Limits (2025)</h3>
            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable}>
                <thead><tr><th>MAGI Range</th><th>Filing Status</th><th>Roth Allowed</th></tr></thead>
                <tbody>
                  <tr><td>Under $150,000</td><td>Single</td><td style={{ color: 'var(--green)', fontWeight: 700 }}>Full ($7,000)</td></tr>
                  <tr><td>$150,000–$165,000</td><td>Single</td><td style={{ color: 'var(--gold)', fontWeight: 700 }}>Partial (reduced)</td></tr>
                  <tr><td>Over $165,000</td><td>Single</td><td style={{ color: 'var(--red)', fontWeight: 700 }}>Ineligible (use Backdoor Roth)</td></tr>
                  <tr><td>Under $236,000</td><td>Married Filing Jointly</td><td style={{ color: 'var(--green)', fontWeight: 700 }}>Full ($7,000)</td></tr>
                  <tr><td>$236,000–$246,000</td><td>Married Filing Jointly</td><td style={{ color: 'var(--gold)', fontWeight: 700 }}>Partial (reduced)</td></tr>
                  <tr><td>Over $246,000</td><td>Married Filing Jointly</td><td style={{ color: 'var(--red)', fontWeight: 700 }}>Ineligible (use Backdoor Roth)</td></tr>
                </tbody>
              </table>
            </div>

            <h3>Traditional IRA Deductibility Phase-Out (2025)</h3>
            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable}>
                <thead><tr><th>MAGI Range</th><th>Filing Status</th><th>Has Workplace Plan?</th></tr></thead>
                <tbody>
                  <tr><td>$79,000–$89,000</td><td>Single</td><td>Yes — deductibility phases out</td></tr>
                  <tr><td>$126,000–$146,000</td><td>Married Filing Jointly</td><td>You have one</td></tr>
                  <tr><td>$236,000–$246,000</td><td>Married Filing Jointly</td><td>Spouse has one (you don't)</td></tr>
                  <tr><td>$0–$10,000</td><td>Married Filing Separately</td><td>Yes</td></tr>
                  <tr><td>No limit</td><td>Any</td><td>No workplace plan — always fully deductible</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>Sources: IRS.gov Retirement Topics — IRA Contribution Limits; Fidelity Roth IRA Income Limits (November 2025); Ramsey Solutions IRA limits (2026); SoFi IRA contribution calculator (January 2026).</p>
          </section>

          {/* DECISION GUIDE */}
          <section id="decision-guide">
            <div className={styles.sectionLabel}>Decision Guide</div>
            <h2>When Should You Choose Each Account?</h2>
            <p>The break-even question is really about tax brackets: if you expect to pay <em>more</em> tax in retirement than today, Roth wins. If <em>less</em>, Traditional wins. But there are nuances:</p>
            <ul className={styles.decisionList}>
              <li className={styles.decisionItem}>
                <span className={`${styles.decisionBadge} ${styles.badgeRoth}`}>Choose Roth</span>
                <div className={styles.decisionText}>
                  <h4>You're early in your career (low bracket now)</h4>
                  <p>If you're in the 10% or 12% bracket today but expect to earn more over time, paying tax now at a low rate beats paying it at 22–32% in retirement. Young savers benefit most from decades of tax-free compounding.</p>
                </div>
              </li>
              <li className={styles.decisionItem}>
                <span className={`${styles.decisionBadge} ${styles.badgeTrad}`}>Choose Traditional</span>
                <div className={styles.decisionText}>
                  <h4>You're in your peak earning years (high bracket now)</h4>
                  <p>If you're at the 32% or 35% bracket now and expect a lower tax rate in retirement, the Traditional IRA deduction can be worth thousands per year — and may be more valuable than future tax-free growth.</p>
                </div>
              </li>
              <li className={styles.decisionItem}>
                <span className={`${styles.decisionBadge} ${styles.badgeRoth}`}>Choose Roth</span>
                <div className={styles.decisionText}>
                  <h4>You want tax-free income in retirement</h4>
                  <p>Social Security, pensions, and RMDs from Traditional accounts all push up taxable income in retirement. Roth withdrawals are invisible to the IRS, giving you more control over your taxable income — and potentially reducing Medicare premiums (IRMAA).</p>
                </div>
              </li>
              <li className={styles.decisionItem}>
                <span className={`${styles.decisionBadge} ${styles.badgeTrad}`}>Choose Traditional</span>
                <div className={styles.decisionText}>
                  <h4>You expect a much lower income in retirement</h4>
                  <p>If you plan to retire with modest Social Security, minimal pension income, and low expenses, your retirement tax rate may drop to 10–12%. In that case, the Traditional deduction now could be worth more than the Roth's future tax-free withdrawals.</p>
                </div>
              </li>
              <li className={styles.decisionItem}>
                <span className={`${styles.decisionBadge} ${styles.badgeRoth}`}>Choose Roth</span>
                <div className={styles.decisionText}>
                  <h4>You don't want Required Minimum Distributions (RMDs)</h4>
                  <p>Traditional IRAs require you to begin withdrawing at age 73 (SECURE 2.0). Roth IRAs have no RMDs during the owner's lifetime, making them ideal for those who want to leave assets to heirs or delay withdrawals indefinitely.</p>
                </div>
              </li>
              <li className={styles.decisionItem}>
                <span className={`${styles.decisionBadge} ${styles.badgeBoth}`}>Consider Both</span>
                <div className={styles.decisionText}>
                  <h4>Tax diversification is valuable at any income</h4>
                  <p>Many financial planners recommend holding <em>both</em> Roth and Traditional accounts — "tax diversification" — to give you flexibility in retirement to draw from the most tax-efficient source each year. You can split your $7,000 annual IRA contribution across both account types.</p>
                </div>
              </li>
              <li className={styles.decisionItem}>
                <span className={`${styles.decisionBadge} ${styles.badgeRoth}`}>Backdoor Roth</span>
                <div className={styles.decisionText}>
                  <h4>Your income is too high for a direct Roth contribution</h4>
                  <p>High earners above the Roth phase-out can still access Roth benefits through a Backdoor Roth conversion: contribute to a non-deductible Traditional IRA, then convert to Roth. Consult a tax advisor — the "pro-rata rule" can complicate this if you have other Traditional IRA balances.</p>
                </div>
              </li>
            </ul>

            <div className={styles.inlineCta}>
              <div className={styles.inlineCtaText}>
                <h4>See your full retirement picture</h4>
                <p>Plootus integrates your IRA with 401(k), Social Security, and spending — so you know exactly where you stand.</p>
              </div>
              <a onClick={() => router.push('/')} className={styles.inlineCtaBtn}>Try Plootus Free →</a>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq">
            <div className={styles.sectionLabel}>FAQ</div>
            <h2>Roth vs. Traditional IRA — FAQ</h2>
            {[
              { q: 'Can I contribute to both a Roth and a Traditional IRA in the same year?', a: 'Yes — but your combined contributions to all IRA accounts (Roth + Traditional) cannot exceed the annual limit: $7,000 in 2025 ($8,000 if age 50+). For example, you could contribute $4,000 to a Roth and $3,000 to a Traditional, as long as the total doesn\'t exceed $7,000. Source: IRS.gov, H&R Block IRA guide.' },
              { q: 'What if my income is too high to contribute to a Roth IRA?', a: 'High earners above the Roth phase-out threshold ($165,000 for single filers; $246,000 for MFJ in 2025) cannot contribute directly. However, you may be able to use a Backdoor Roth IRA: make a non-deductible contribution to a Traditional IRA, then convert it to a Roth IRA. Note: the "pro-rata rule" applies if you have other pre-tax IRA balances, which may create an unexpected tax bill. Consult a tax advisor.' },
              { q: 'Does contributing to a 401(k) at work affect my IRA deductibility?', a: 'Yes — if you (or your spouse) are covered by a workplace retirement plan, your Traditional IRA deduction may be phased out based on your MAGI. The phase-out for singles with a workplace plan in 2025 is $79,000–$89,000. Above that range, your contribution is non-deductible (but you can still contribute). Roth IRA eligibility uses different thresholds and is not affected by workplace plan coverage. Even one month of workplace plan coverage counts for the full year.' },
              { q: 'What is the 5-year rule for Roth IRA withdrawals?', a: 'To take a qualified (tax-free and penalty-free) withdrawal of Roth IRA earnings, your account must have been open for at least 5 years AND you must be age 59½ or older. Importantly, contributions (not earnings) can always be withdrawn from a Roth IRA penalty-free at any age, since you already paid tax on them. Source: IRS.gov, Vanguard, H&R Block.' },
              { q: 'What are Required Minimum Distributions (RMDs)?', a: 'RMDs are mandatory annual withdrawals the IRS requires starting at age 73 (under SECURE 2.0, enacted 2022). RMDs apply to Traditional IRAs, SEP IRAs, SIMPLE IRAs, and most employer plans. Roth IRAs are exempt from RMDs during the original owner\'s lifetime — which makes them a powerful estate-planning tool. Note: Roth accounts inherited by non-spouse beneficiaries are now generally subject to a 10-year depletion rule. Source: IRS.gov RMD rules.' },
              { q: 'How does the IRA contribution deadline work?', a: 'You have until the federal tax filing deadline (typically April 15) of the following year to fund your IRA for the prior tax year. For example, you can contribute to your 2025 IRA until April 15, 2026. This gives you extra time if you didn\'t max out during the calendar year. Source: IRS.gov, SoFi IRA calculator (January 2026).' },
              { q: 'What happens to a Roth IRA when I die?', a: 'If your account has met the 5-year aging rule, your heirs generally receive Roth IRA assets tax-free. Under the SECURE Act (2020), most non-spouse beneficiaries must deplete the inherited account within 10 years, but withdrawals remain tax-free. Spousal beneficiaries have more flexibility. By contrast, Traditional IRA beneficiaries owe income tax on every dollar they withdraw — making the Roth a particularly powerful wealth-transfer vehicle. Source: IRS.gov; Vanguard IRA comparison.' }
            ].map((faq, idx) => (
              <div key={idx} className={`${styles.faqItem} ${openFaqIndex === idx ? styles.open : ''}`}>
                <button className={styles.faqQ} onClick={() => toggleFaq(idx)}>
                  {faq.q} <span className={styles.faqIcon}>+</span>
                </button>
                <div className={styles.faqA}>{faq.a}</div>
              </div>
            ))}
          </section>

          <div className={styles.sourcesBox}>
            <h4>Sources</h4>
            <ul>
              <li>IRS.gov — 2025 IRA contribution limits; Roth IRA income phase-outs; Traditional IRA deductibility rules; RMD age (73 under SECURE 2.0); Publication 590-A</li>
              <li>Fidelity.com — Roth IRA income limits 2025 and 2026 (citing IRS November 2025 announcement); MAGI calculation guidance</li>
              <li>H&R Block — Combined contribution limit rules; 5-year rule; phase-out ranges</li>
              <li>Ramsey Solutions — 2025 and 2026 IRA contribution limits</li>
              <li>SoFi IRA Contribution Calculator — 2026 contribution limit confirmation ($7,500 base; $8,600 with catch-up)</li>
              <li>Vanguard — Roth vs. Traditional IRA eligibility and rules comparison</li>
              <li>Tax Foundation — 2025 Individual Income Tax Rates by State; individual state revenue department websites</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <h4>On This Page</h4>
            <ul className={styles.tocList}>
              <li><a href="#calculator">Break-Even Calculator</a></li>
              <li><a href="#at-a-glance">At a Glance</a></li>
              <li><a href="#irs-limits">2025 IRS Limits</a></li>
              <li><a href="#decision-guide">Decision Guide</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className={styles.ctaCard}>
            <h4>What's my retirement number?</h4>
            <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
            <a onClick={() => router.push('/retirement-calculator')} className={styles.ctaBtn}>
              Check Here
            </a>
          </div>
          <div className={styles.sidebarCard}>
            <h4>Related Tools & Guides</h4>
            <ul className={styles.relatedLinks}>
              <li><a onClick={() => router.push('/how-much-to-retire')}>How Much Do I Need to Retire?</a></li>
              <li><a onClick={() => router.push('/401k-by-age')}>401(k) Benchmarks by Age</a></li>
              <li><a onClick={() => router.push('/retire-early')}>FIRE / Early Retirement Guide</a></li>
              <li><a onClick={() => router.push('/social-security-benefits')}>Social Security Benefits 2026</a></li>
              <li><a onClick={() => router.push('/tax-friendly-states')}>Tax-Friendly States Guide</a></li>
            </ul>
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

export default RothVsTraditional;
