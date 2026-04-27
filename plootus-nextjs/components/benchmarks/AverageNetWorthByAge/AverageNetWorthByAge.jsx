import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from './AverageNetWorthByAge.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const NW_MEDIANS = { 18: 11900, 25: 39000, 35: 135600, 45: 247200, 55: 185000, 65: 409900, 75: 335600, 85: 300000 };
const NW_AVGS = { 18: 100000, 25: 183500, 35: 549600, 45: 975800, 55: 1566900, 65: 1794600, 75: 1624100, 85: 1400000 };

const getBracket = (age) => {
  if (age < 25) return 18;
  if (age < 35) return 25;
  if (age < 45) return 35;
  if (age < 55) return 45;
  if (age < 65) return 55;
  if (age < 75) return 65;
  if (age < 85) return 75;
  return 85;
};

const AverageNetWorthByAge = () => {
  const router = useRouter();

  // FAQ state
  const [openFaq, setOpenFaq] = useState(null);

  // Calculator state
  const [age, setAge] = useState(45);
  const [nw, setNw] = useState(300000);
  const [calcResult, setCalcResult] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleCalculate = () => {
    const actAge = parseInt(age) || 45;
    const actNw = parseFloat(nw) || 0;
    const b = getBracket(actAge);
    const med = NW_MEDIANS[b];
    const avg = NW_AVGS[b];
    const vsM = ((actNw / med - 1) * 100).toFixed(0);
    const vsA = ((actNw / avg - 1) * 100).toFixed(0);
    const above = actNw >= med;

    setCalcResult({
      nwFormatted: actNw.toLocaleString(),
      above,
      med,
      avg,
      vsM,
      vsA,
      actNw,
    });
  };

  const faqs = [
    {
      q: 'What is the average net worth for a 40-year-old?',
      a: 'The Federal Reserve Survey of Consumer Finances 2022 reports an average net worth of $549,600 and a median of $135,600 for the 35–44 age group. The median is a more useful benchmark — a handful of high-net-worth households dramatically skew the average. At 40, Fidelity recommends having 3× your annual salary saved for retirement specifically. If your salary is $80,000, that target is $240,000 in retirement accounts alone, which should be a significant portion of your total net worth.'
    },
    {
      q: 'What is the average net worth for a 50-year-old?',
      a: 'For the 45–54 age group, the Federal Reserve reports an average net worth of $975,800 and a median of $247,200. The large gap between average and median reflects significant wealth concentration at the top. A more actionable benchmark: Fidelity recommends 6× your salary in retirement savings by age 50. At age 50 you also gain access to $8,000/year in IRA catch-up contributions and $32,500/year in 401(k) contributions (standard + catch-up) under 2026 IRS limits. Source: Federal Reserve SCF 2022; IRS 2026.'
    },
    {
      q: 'How is net worth different from retirement savings?',
      a: 'Net worth is the total value of all assets (home equity, investments, bank accounts, vehicles, retirement accounts) minus all liabilities (mortgage, student loans, car loans, credit card debt). Retirement savings refers specifically to funds in tax-advantaged accounts like 401(k), IRA, 403(b), and HSA. Your net worth is always higher than your retirement savings alone. The key planning question is: what portion of your net worth is actually accessible for retirement? Home equity, for example, is often the largest asset but requires either selling or a reverse mortgage to access.'
    },
    {
      q: 'Is $1 million net worth good?',
      a: '$1 million in net worth places you above the median for all age groups under 75, but context matters enormously. A $1 million net worth at age 35 is exceptional. At age 60, it may be below the retirement savings target depending on your spending expectations. Using the 4% rule, $1 million in liquid retirement savings supports approximately $40,000/year in withdrawals. Add average Social Security of $24,894/year and total retirement income would be about $64,894/year — comfortable in lower-cost states, tight in expensive ones. Source: Federal Reserve SCF 2022; SSA November 2025.'
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Average Net Worth by Age in 2026: Official Benchmarks | Plootus</title>
        <meta name="description" content="Report on average and median net worth by age in 2026 based on Federal Reserve data. Compare your net worth and retirement readiness today." />
        <link rel="canonical" href="https://www.plootus.com/average-net-worth-by-age" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Average Net Worth by Age in 2026: Every Benchmark You Need",
            "description": "Comprehensive guide on household net worth trends in the U.S., including percentile rankings and retirement impact analysis.",
            "author": {
              "@type": "Organization",
              "name": "Plootus Research Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Plootus",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.plootus.com/logo.png"
              }
            },
            "datePublished": "2026-04-01",
            "dateModified": "2026-04-01"
          })}
        </script>
      </Head>

      <HubNav />

      <div className={styles.hero}>
        <div className={styles['hero-inner']}>
          <p className={styles['hero-eyebrow']}>📊 Data Guide · 2026 Federal Reserve Data</p>
          <h1>Average Net Worth by Age in 2026: Every Benchmark You Need</h1>
          <p className={styles['hero-deck']}>
            The average U.S. net worth is $1.06 million — but the median is just $192,700. That gap tells the real story. Here's what Americans actually have at every age, and what you need to hit for retirement security.
          </p>
          <div className={styles['hero-meta']}>
            <span>📅 Updated April 2026</span>
            <span>⏱ 7 min read</span>
            <span>📚 Source: Federal Reserve SCF 2022</span>
            <span>✅ Verified by Plootus Research</span>
          </div>
        </div>
      </div>

      <div className={styles['stat-strip']}>
        <div className={styles['stat-strip-inner']}>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$1.06M</div>
            <div className={styles['stat-label']}>Avg. Net Worth — All Ages</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$192,700</div>
            <div className={styles['stat-label']}>Median Net Worth — All Ages</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$409,900</div>
            <div className={styles['stat-label']}>Median Age 65–74</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">3×</div>
            <div className={styles['stat-label']}>Fidelity Salary Target at Age 40</div>
          </div>
        </div>
      </div>

      <div className={styles['page-body']} itemScope itemType="https://schema.org/Article">
        <main className={styles['main-content']} role="main" aria-label="Average Net Worth by Age — Data and Analysis">
          <section id="overview">
            <p className={styles['section-label']}>Overview</p>
            <h2>Why Average and Median Net Worth Are So Different</h2>
            <p>
              The Federal Reserve's <abbr title="Survey of Consumer Finances">SCF</abbr>, published every three years, is the gold standard for U.S. household wealth data. The most recent edition (2022, released 2023) shows a dramatic split: the average net worth of all U.S. families is $1,063,700, while the median — the figure that splits the population in half — is just $192,700.
            </p>
            <p>
              That nearly 5× gap is driven by extreme concentration at the top. The wealthiest 1% hold approximately 31% of all U.S. wealth. For most families, the median is a far better benchmark. If you're above the median for your age group, you're doing better than half of Americans.
            </p>
            <div className={styles['info-box']}>
              <p>
                💡 <strong>Key Definition:</strong> Net worth = total assets (home equity, retirement accounts, investments, bank accounts, vehicles) minus total liabilities (mortgage, student loans, auto loans, credit card debt). It is NOT the same as retirement savings — home equity is usually the largest component for most households.
              </p>
            </div>
          </section>

          <section id="table">
            <p className={styles['section-label']}>The Data</p>
            <h2>Average and Median Net Worth by Age Group (2022)</h2>
            <p>All figures from the Federal Reserve Survey of Consumer Finances 2022. These are the most authoritative household wealth benchmarks available in the U.S.</p>
            <table className={styles['data-table']} summary="Average and median net worth by age group, Federal Reserve 2022">
              <thead>
                <tr>
                  <th scope="col">Age Group</th>
                  <th scope="col">Average<br />Net Worth</th>
                  <th scope="col">Median<br />Net Worth</th>
                  <th scope="col">Key Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.hi}>Under 35</td>
                  <td data-type="statistic">$183,500</td>
                  <td data-type="statistic">$39,000</td>
                  <td>Focus on 401(k) match capture + eliminating high-interest debt</td>
                </tr>
                <tr>
                  <td className={styles.hi}>35–44</td>
                  <td data-type="statistic">$549,600</td>
                  <td data-type="statistic">$135,600</td>
                  <td>Fidelity benchmark: 3× salary. Maximize HSA + Roth IRA</td>
                </tr>
                <tr>
                  <td className={styles.hi}>45–54</td>
                  <td data-type="statistic">$975,800</td>
                  <td data-type="statistic">$247,200</td>
                  <td>Peak earning years. Catch-up contributions at 50+</td>
                </tr>
                <tr>
                  <td className={styles.hi}>55–64</td>
                  <td data-type="statistic">$1,566,900</td>
                  <td data-type="statistic">$185,000</td>
                  <td>Final sprint. SECURE 2.0 super catch-up ages 60-63</td>
                </tr>
                <tr>
                  <td className={styles.hi}>65–74</td>
                  <td data-type="statistic">$1,794,600</td>
                  <td data-type="statistic">$409,900</td>
                  <td>Retirement. Optimize withdrawal order + SS timing</td>
                </tr>
                <tr>
                  <td className={styles.hi}>75+</td>
                  <td data-type="statistic">$1,624,100</td>
                  <td data-type="statistic">$335,600</td>
                  <td>Drawdown phase. RMDs start at 73</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: '12.5px', color: 'var(--text-light)', marginTop: '8px' }}>
              Source: Federal Reserve Board, Survey of Consumer Finances 2022 (triennial survey). Values in 2022 dollars. The 2025 edition will be released in approximately 2026.
            </p>
          </section>

          <section id="retirement-fit">
            <p className={styles['section-label']}>Retirement Lens</p>
            <h2>How Your Net Worth Maps to Retirement Readiness</h2>
            <p>Net worth and retirement readiness are related but not identical. A high net worth concentrated in illiquid assets (a paid-off home, for example) may not translate to retirement income. Here's how to think about the breakdown:</p>
            <div className={styles['card-grid']}>
              <div className={styles.card}>
                <div className={styles['card-val']}>~35%</div>
                <h4>Home Equity</h4>
                <p>The largest asset for most households. Accessible via sale or reverse mortgage, but typically not a retirement income source.</p>
              </div>
              <div className={styles.card}>
                <div className={styles['card-val']}>~30%</div>
                <h4>Retirement Accounts</h4>
                <p>401(k), IRA, 403(b), TSP — the primary retirement income source. Average 401(k) balance: $148,153 (Vanguard 2025).</p>
              </div>
              <div className={styles.card}>
                <div className={styles['card-val']}>~20%</div>
                <h4>Other Investments</h4>
                <p>Taxable brokerage, business equity, rental property — variable and not always liquid.</p>
              </div>
              <div className={styles.card}>
                <div className={styles['card-val']}>~15%</div>
                <h4>Cash & Vehicles</h4>
                <p>Emergency reserves, checking/savings, vehicles. Important for liquidity but low-return.</p>
              </div>
            </div>
            <div className={styles['highlight-box']}>
              <p>📌 The Plootus Rule of Thumb: Your "retirement net worth" — the portion actually usable for retirement income — is typically 40–60% of your total net worth, depending on how much is locked in your home and illiquid assets.</p>
            </div>
          </section>

          <section id="benchmarks">
            <p className={styles['section-label']}>Fidelity Benchmarks</p>
            <h2>Salary-Multiple Retirement Targets by Age</h2>
            <p>While net worth is the full picture, Fidelity's retirement-specific benchmarks (salary multiples) give you a clearer retirement readiness target. These apply to retirement savings specifically, not total net worth:</p>
            <table className={styles['data-table']} summary="Fidelity salary-multiple retirement savings benchmarks by age">
              <thead>
                <tr>
                  <th scope="col">Age</th>
                  <th scope="col">Fidelity Target</th>
                  <th scope="col">Example<br />($80K salary)</th>
                  <th scope="col">2026 Limit<br />(Standard)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.hi}>30</td>
                  <td>1× salary</td>
                  <td>$80,000</td>
                  <td>$24,500 / $7,000 IRA</td>
                </tr>
                <tr>
                  <td className={styles.hi}>40</td>
                  <td>3× salary</td>
                  <td>$240,000</td>
                  <td>$24,500 / $7,000 IRA</td>
                </tr>
                <tr>
                  <td className={styles.hi}>50</td>
                  <td>6× salary</td>
                  <td>$480,000</td>
                  <td>$32,500 / $8,000 IRA (catch-up)</td>
                </tr>
                <tr>
                  <td className={styles.hi}>60</td>
                  <td>8× salary</td>
                  <td>$640,000</td>
                  <td>$35,750 (SECURE 2.0 super catch-up)</td>
                </tr>
                <tr>
                  <td className={styles.hi}>67</td>
                  <td>10× salary</td>
                  <td>$800,000</td>
                  <td>—</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="calculator">
            <p className={styles['section-label']}>Calculator</p>
            <h2>Net Worth Percentile Calculator</h2>
            <p>Enter your age and net worth to see how you compare to Federal Reserve benchmarks:</p>
            <div className={styles['calc-box']}>
              <h3>🧮 Where Do You Stand?</h3>
              <div className={styles['calc-row']}>
                <div className={styles['calc-field']}>
                  <label>Your Age</label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    min="18"
                    max="90"
                  />
                </div>
                <div className={styles['calc-field']}>
                  <label>Your Net Worth ($)</label>
                  <input
                    type="number"
                    value={nw}
                    onChange={(e) => setNw(e.target.value)}
                    step="10000"
                  />
                </div>
                <button className={styles['calc-btn']} onClick={handleCalculate}>Calculate</button>
              </div>

              {calcResult && (
                <div className={`${styles['calc-result']} ${styles.show}`}>
                  <div className={styles['calc-result-num']}>${calcResult.nwFormatted}</div>
                  <div className={styles['calc-result-label']}>
                    {calcResult.above
                      ? 'Above the median for your age group ✅'
                      : 'Below the median for your age group — time to accelerate'
                    }
                  </div>
                  <div style={{ marginTop: '12px', fontSize: '13px', color: 'var(--text-mid)' }}>
                    <strong>Median for age group:</strong> ${calcResult.med.toLocaleString()} &nbsp;|&nbsp; <strong>Average:</strong> ${calcResult.avg.toLocaleString()}
                    <br /><br />
                    You are <strong>{Math.abs(calcResult.vsM)}% {calcResult.vsM >= 0 ? 'above' : 'below'}</strong> the median and <strong>{Math.abs(calcResult.vsA)}% {calcResult.vsA >= 0 ? 'above' : 'below'}</strong> the average for your age group.
                    <br /><br />
                    {calcResult.actNw < calcResult.med
                      ? 'Connect your Plootus account to get a personalized action plan to close the gap.'
                      : "You're ahead of most peers. Plootus can help optimize your 401(k) fund selection to keep growing."
                    }
                  </div>
                </div>
              )}
            </div>
          </section>

          <section id="faq" aria-label="Frequently Asked Questions" className={styles['faq-section']}>
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
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
            <h3>See Your Real Retirement Readiness Score</h3>
            <p>Plootus connects to your actual 401(k) and shows exactly where you stand against these benchmarks — personalized to your salary, age, and state — in minutes.</p>
            <div onClick={() => router.push('/')} style={{cursor: 'pointer', color: 'white', textDecoration: 'underline'}}>Connect My Accounts Free →</div>
          </div>

          <div className={styles['sources-box']}>
            <strong>📚 Sources</strong>
            <ul>
              <li>Federal Reserve Board, Survey of Consumer Finances 2022 (released October 2023) — triennial survey of U.S. household finances</li>
              <li>Federal Reserve Board, Economic Well-Being of U.S. Households 2024</li>
              <li>Fidelity Investments, How Much Should I Save for Retirement? — salary multiplier benchmarks</li>
              <li>Vanguard Group, How America Saves 2025 (~5M participants)</li>
              <li>IRS, Retirement Plan Contribution Limits 2026</li>
              <li>Social Security Administration, Monthly Statistical Snapshot, November 2025</li>
              <li>Plootus Research 2026</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles['toc-box']}>
            <h3>On This Page</h3>
            <ul>
              <li><a href="#overview">Why Average ≠ Median</a></li>
              <li><a href="#table">Net Worth by Age Table</a></li>
              <li><a href="#retirement-fit">Retirement Fit</a></li>
              <li><a href="#benchmarks">Fidelity Benchmarks</a></li>
              <li><a href="#calculator">Net Worth Calculator</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          </div>
          <div className={styles['cta-card']}>
            <h4>What's my retirement number?</h4>
            <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
            <div onClick={() => router.push('/retirement-calculator')} className={styles['cta-btn']} style={{cursor: 'pointer'}}>
              Check Here
            </div>
          </div>
          <div className={`${styles['sidebar-card']} ${styles['related-card']}`}>
            <h4>Related Guides</h4>
            <div onClick={() => router.push('/how-much-to-retire')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ How Much Do I Need to Retire?</div>
            <div onClick={() => router.push('/401k-balance-by-age')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ Average 401(k) Balance by Age</div>
            <div onClick={() => router.push('/average-savings-by-age')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ Average Savings by Age</div>
            <div onClick={() => router.push('/best-states-to-retire')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ Best States to Retire 2026</div>
            <div onClick={() => router.push('/roth-vs-traditional')} style={{cursor: 'pointer', color: 'var(--blue)'}}>→ Roth vs. Traditional IRA</div>
          </div>
          <div className={styles['sidebar-card']} style={{ background: 'var(--off-white)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '8px' }}>
              Key Stat
            </p>
            <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.45, marginBottom: '5px' }}>
              "The median U.S. net worth is $192,700 — just 18% of the $1.06M average. A few very wealthy households skew the average dramatically."
            </p>
            <p style={{ fontSize: '11px', color: 'var(--text-light)', margin: 0 }}>
              Source: Federal Reserve Survey of Consumer Finances 2022
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

export default AverageNetWorthByAge;
