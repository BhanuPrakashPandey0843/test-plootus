import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './AverageSavingsByAge.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const AverageSavingsByAge = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);
  const [expenses, setExpenses] = useState(4500);
  const [security, setSecurity] = useState(4);
  const [calcResult, setCalcResult] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const calcEF = () => {
    const exp = parseFloat(expenses) || 4500;
    const months = parseInt(security) || 4;
    const target = exp * months;
    setCalcResult({
      target,
      months,
      exp,
    });
  };

  return (
    <div className={styles.container}>
      <HubNav />

      <div className={styles.hero}>
        <div className={styles['hero-inner']}>
          <p className={styles['hero-eyebrow']}>📊 Data Guide · Federal Reserve + FDIC Data 2026</p>
          <h1>Average Savings by Age in 2026: Benchmarks, Gaps & What to Do About Them</h1>
          <p className={styles['hero-deck']}>
            The average American has $65,100 in savings — but the median is just $8,000. Here's what people actually save at every life stage, the benchmarks that actually matter, and exactly how to catch up.
          </p>
          <div className={styles['hero-meta']}>
            <span>📅 Updated April 2026</span>
            <span>⏱ 8 min read</span>
            <span>📚 Sources: Federal Reserve SCF, FDIC, Fidelity</span>
          </div>
        </div>
      </div>

      <div className={styles['stat-strip']}>
        <div className={styles['stat-strip-inner']}>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$8,000</div>
            <div className={styles['stat-label']}>Median U.S. Savings Balance</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$65,100</div>
            <div className={styles['stat-label']}>Average U.S. Savings Balance</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">4.6%</div>
            <div className={styles['stat-label']}>Personal Savings Rate Q1 2026</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">20%</div>
            <div className={styles['stat-label']}>Recommended Savings Rate</div>
          </div>
        </div>
      </div>

      <div className={styles['page-body']} itemScope itemType="https://schema.org/Article">
        <main className={styles['main-content']} role="main" aria-label="Average Savings by Age — Benchmarks and Analysis">
          <section id="overview">
            <p className={styles['section-label']}>Overview</p>
            <h2>Two Types of Savings — and Why Both Matter</h2>
            <p>When people ask "how much should I have in savings?" they're actually asking about two separate things that are often conflated:</p>
            <div className={styles['two-col']}>
              <div className={styles.card}>
                <h4>💰 Emergency Savings</h4>
                <p>3–6 months of living expenses in liquid, FDIC-insured accounts (high-yield savings, money market). Protects against job loss, medical emergencies, car repairs. Target: $15,000–$40,000 for most households. Should NOT be invested.</p>
              </div>
              <div className={styles.card}>
                <h4>📈 Retirement Savings</h4>
                <p>Long-term investments in tax-advantaged accounts: 401(k), IRA, HSA. Measured by Fidelity's salary-multiple benchmarks. Average 401(k) balance (all ages): $148,153 (Vanguard 2025). Should be invested appropriately for your timeline.</p>
              </div>
            </div>
            <p>The data below covers <em>total savings balances</em> including both categories. The typical American household has far more in retirement accounts than in liquid savings, so these figures blend both types.</p>
          </section>

          <section id="table">
            <p className={styles['section-label']}>The Data</p>
            <h2>Average &amp; Median Savings by Age (Federal Reserve 2022)</h2>
            <table className={styles['data-table']} summary="Average and median savings account balances by age group from Federal Reserve Survey of Consumer Finances 2022">
              <thead>
                <tr>
                  <th scope="col">Age Group</th>
                  <th scope="col">Avg. Savings</th>
                  <th scope="col">Median Savings</th>
                  <th scope="col">Rec. Emergency<br />Fund</th>
                  <th scope="col">Priority<br />Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.hi}>Under 35</td>
                  <td data-type="statistic">$20,540</td>
                  <td data-type="statistic">$5,400</td>
                  <td>$1,200 – $3,600</td>
                  <td style={{ fontSize: '12.5px' }}>Build 3-6 month emergency fund first, then maximize 401(k) match</td>
                </tr>
                <tr>
                  <td className={styles.hi}>35–44</td>
                  <td data-type="statistic">$41,540</td>
                  <td data-type="statistic">$9,000</td>
                  <td>$2,500 – $5,000</td>
                  <td style={{ fontSize: '12.5px' }}>Emergency fund complete; shift focus to retirement acceleration</td>
                </tr>
                <tr>
                  <td className={styles.hi}>45–54</td>
                  <td data-type="statistic">$71,130</td>
                  <td data-type="statistic">$7,500</td>
                  <td>$3,000 – $6,000</td>
                  <td style={{ fontSize: '12.5px' }}>Peak earning decade — maximize all tax-advantaged accounts</td>
                </tr>
                <tr>
                  <td className={styles.hi}>55–64</td>
                  <td data-type="statistic">$92,100</td>
                  <td data-type="statistic">$9,350</td>
                  <td>$4,000 – $8,000</td>
                  <td style={{ fontSize: '12.5px' }}>Final push with catch-up contributions; begin SS break-even analysis</td>
                </tr>
                <tr>
                  <td className={styles.hi}>65–74</td>
                  <td data-type="statistic">$99,620</td>
                  <td data-type="statistic">$9,200</td>
                  <td>$5,000 – $10,000</td>
                  <td style={{ fontSize: '12.5px' }}>Shift to preservation; keep 1-2 year cash buffer to avoid selling in downturns</td>
                </tr>
                <tr>
                  <td className={styles.hi}>75+</td>
                  <td data-type="statistic">$83,190</td>
                  <td data-type="statistic">$7,520</td>
                  <td>$4,000 – $8,000</td>
                  <td style={{ fontSize: '12.5px' }}>RMDs begin at 73; coordinate withdrawals with SS to minimize taxes</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: '12.5px', color: 'var(--text-light)', marginTop: '8px' }}>
              Source: Federal Reserve Survey of Consumer Finances 2022. Figures include savings accounts, money market accounts, CDs, and other liquid deposits. Does not include retirement account balances.
            </p>
          </section>

          <section id="emergency">
            <p className={styles['section-label']}>Emergency Fund</p>
            <h2>How Much Emergency Savings Do You Actually Need?</h2>
            <p>The 3–6 month rule is a starting point, not a fixed number. Here's how to calculate your personal emergency fund target:</p>
            <div className={styles['calc-box']}>
              <h3>🧮 Emergency Fund Calculator</h3>
              <div className={styles['calc-row']}>
                <div className={styles['calc-field']}>
                  <label>Monthly Essential Expenses ($)</label>
                  <input
                    type="number"
                    value={expenses}
                    onChange={(e) => setExpenses(e.target.value)}
                    step="100"
                  />
                </div>
                <div className={styles['calc-field']}>
                  <label>Job Security</label>
                  <select value={security} onChange={(e) => setSecurity(e.target.value)}>
                    <option value="3">High (stable job/industry)</option>
                    <option value="4">Medium (average stability)</option>
                    <option value="6">Low (freelance/variable income)</option>
                  </select>
                </div>
                <button className={styles['calc-btn']} onClick={calcEF}>Calculate</button>
              </div>
              {calcResult && (
                <div className={styles['calc-result']} style={{ display: 'block' }}>
                  <div className={styles['calc-result-num']}>${calcResult.target.toLocaleString()}</div>
                  <div className={styles['calc-result-label']}>Recommended Emergency Fund</div>
                  <div style={{ marginTop: '12px', fontSize: '13px', color: 'var(--text-mid)' }}>
                    Based on {calcResult.months} months of ${calcResult.exp.toLocaleString()}/month in essential expenses.<br /><br />
                    <strong>Best vehicle:</strong> High-yield savings account (currently 4.5–5.0% APY). At ${calcResult.target.toLocaleString()}, that earns approximately ${Math.round(calcResult.target * 0.048).toLocaleString()}/year in interest — risk-free and FDIC-insured.
                  </div>
                </div>
              )}
            </div>
          </section>

          <section id="retirement-savings">
            <p className={styles['section-label']}>Retirement Savings Track</p>
            <h2>Are Your Retirement Savings on Track?</h2>
            <p>Emergency savings aside, retirement savings is the bigger long-term challenge. Fidelity's salary-multiple benchmarks give a clear target at every age. The 2026 IRS contribution limits that help you get there:</p>
            <div className={styles['card-grid']}>
              <div className={styles.card}>
                <div className={styles['card-val']}>$24,500</div>
                <h4>401(k) Limit 2026</h4>
                <p>Standard annual contribution limit. Age 50+: $32,500 (+ $8,000 catch-up). Ages 60–63: $35,750 (SECURE 2.0 super catch-up).</p>
              </div>
              <div className={styles.card}>
                <div className={styles['card-val']}>$7,000</div>
                <h4>IRA Limit 2026</h4>
                <p>Annual IRA contribution limit (Roth or Traditional). Age 50+: $8,000 (+ $1,000 catch-up). Income limits apply to Roth.</p>
              </div>
              <div className={styles.card}>
                <div className={styles['card-val']}>$4,300</div>
                <h4>HSA Limit 2026</h4>
                <p>Individual HSA contribution limit. Family: $8,550. Triple tax advantage: deductible, grows tax-free, tax-free medical withdrawals.</p>
              </div>
              <div className={styles.card}>
                <div className={styles['card-val']}>15%</div>
                <h4>Target Savings Rate</h4>
                <p>Fidelity recommends saving 15% of pre-tax income for retirement including employer match. Current average: 14.3% (Fidelity Q1 2025).</p>
              </div>
            </div>
          </section>

          <section id="faq" aria-label="Frequently Asked Questions" className={styles['faq-section']}>
            <h2>Frequently Asked Questions</h2>
            {[
              {
                q: 'How much savings should I have at 30?',
                a: "Financial experts generally recommend having 3–6 months of living expenses in an emergency fund before aggressively investing. By age 30, many planners suggest having at least 1× your annual salary saved for retirement specifically. The Federal Reserve reports a median savings balance of approximately $5,400 for the under-35 age group — significantly below what most financial plans recommend. If you're behind, prioritize: (1) employer 401(k) match (free money), (2) paying off high-interest debt, (3) Roth IRA, (4) building emergency fund to $15,000–$25,000."
              },
              {
                q: 'How much should I have in savings at 40?',
                a: 'At 40, the recommended emergency fund is 3–6 months of expenses, which for the average American household spending approximately $6,400/month means $19,200–$38,400 in liquid savings. Separately, Fidelity recommends 3× your annual salary saved for retirement by age 40. The Federal Reserve reports a median savings balance of $9,000 for the 35–44 age group — this includes both emergency savings and short-term savings, not retirement accounts. Source: Federal Reserve SCF 2022; Fidelity 2026.'
              },
              {
                q: 'Is $100,000 in savings a lot?',
                a: "$100,000 in savings is above the median for all U.S. age groups up to age 65+, but whether it's 'a lot' depends on context. As an emergency fund, $100,000 covers approximately 15+ months of average household expenses — well beyond the recommended 6 months. As retirement savings at age 50 on a $70,000 salary, $100,000 represents 1.4× salary, significantly behind Fidelity's 6× benchmark. Context is everything: savings held in a high-yield savings account earning 4.5%+ generates $4,500/year in interest, while the same amount in a traditional savings account at 0.04% generates just $40/year. Source: Federal Reserve SCF 2022; FDIC 2025."
              },
              {
                q: 'What percentage of income should I save?',
                a: "Standard guidance: save 20% of gross income total (the 50/30/20 rule — 50% needs, 30% wants, 20% savings). For retirement specifically, Fidelity recommends saving 15% of pre-tax income including employer match. The current average employee savings rate is 7.7% of paycheck for retirement, plus employer match brings it to approximately 14.3% total (Fidelity Q1 2025). For emergency savings, save enough to cover 3–6 months of essential expenses. If you're behind on retirement, consider temporarily increasing to 20%+ using SECURE 2.0 catch-up provisions if age 50+. Source: Fidelity Q1 2025; Bureau of Economic Analysis."
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
              <li>Federal Reserve Board, Survey of Consumer Finances 2022</li>
              <li>Federal Reserve Board, Economic Well-Being of U.S. Households 2024</li>
              <li>FDIC National Survey of Unbanked and Underbanked Households 2023</li>
              <li>Fidelity Investments, Q1 2025 Retirement Analysis</li>
              <li>Vanguard Group, How America Saves 2025</li>
              <li>Bureau of Economic Analysis, Personal Saving Rate 2026</li>
              <li>IRS, Retirement Plan Contribution Limits 2026</li>
              <li>Plootus Research 2026</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles['toc-box']}>
            <h3>On This Page</h3>
            <ul>
              <li><a href="#overview">Two Types of Savings</a></li>
              <li><a href="#table">Savings by Age Table</a></li>
              <li><a href="#emergency">Emergency Fund Calculator</a></li>
              <li><a href="#retirement-savings">Retirement Savings Track</a></li>
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
            <a href="https://www.plootus.com/average-net-worth-by-age">→ Average Net Worth by Age</a>
            <a href="https://www.plootus.com/401k-balance-by-age">→ Average 401(k) Balance by Age</a>
            <a href="/how-much-to-retire">→ How Much Do I Need to Retire?</a>
            <a href="https://www.plootus.com/roth-vs-traditional">→ Roth vs. Traditional IRA</a>
            <a href="https://www.plootus.com/compound-interest-calculator">→ Compound Interest Calculator</a>
          </div>
          <div className={styles['sidebar-card']} style={{ background: 'var(--off-white)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '8px' }}>Key Stat</p>
            <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.45, marginBottom: '5px' }}>"65% of non-retired U.S. adults say their retirement savings are not on track — Federal Reserve 2024."</p>
            <p style={{ fontSize: '11px', color: 'var(--text-light)', margin: 0 }}>Source: Federal Reserve, Economic Well-Being of U.S. Households 2024</p>
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

export default AverageSavingsByAge;
