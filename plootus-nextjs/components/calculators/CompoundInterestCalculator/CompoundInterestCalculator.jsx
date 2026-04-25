import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Chart from 'chart.js/auto';
import styles from './CompoundInterestCalculator.module.css';
import PartnersSection from '../../home/PartnersSection';
import HubNav from '../../HubNav/HubNav';

const CompoundInterestCalculator = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);

  const [ciStart, setCiStart] = useState(10000);
  const [ciMonthly, setCiMonthly] = useState(500);
  const [ciRate, setCiRate] = useState(7);
  const [ciYears, setCiYears] = useState(25);
  const [ciMatch, setCiMatch] = useState(50);
  const [ciMatchCap, setCiMatchCap] = useState(6);
  const [ciSalary, setCiSalary] = useState(75000);

  const [result, setResult] = useState(null);
  
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const calculateCI = () => {
    const P = parseFloat(ciStart) || 0;
    const M = parseFloat(ciMonthly) || 0;
    const r = parseFloat(ciRate) / 100 || 0;
    const T = parseInt(ciYears) || 0;
    const matchPct = parseFloat(ciMatch) / 100 || 0;
    const matchCap = parseFloat(ciMatchCap) / 100 || 0;
    const salary = parseFloat(ciSalary) || 0;

    const annualEmployee = M * 12;
    const matchableContrib = Math.min(annualEmployee, salary * matchCap);
    const annualMatch = matchableContrib * matchPct;
    const totalAnnual = annualEmployee + annualMatch;
    const rm = r / 12;

    let balance = P;
    const labels = [];
    const vals = [];
    const contribVals = [];
    let totalContrib = P;

    for (let y = 1; y <= T; y++) {
      for (let m = 0; m < 12; m++) {
        balance = balance * (1 + rm) + totalAnnual / 12;
      }
      totalContrib += totalAnnual;
      labels.push('Yr ' + y);
      vals.push(Math.round(balance));
      contribVals.push(Math.round(totalContrib));
    }

    const total = Math.round(balance);
    const growth = total - Math.round(totalContrib);

    setResult({
      total,
      growth,
      totalContrib: Math.round(totalContrib),
      annualMatch,
      T
    });

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      chartInstanceRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: 'Total Balance',
              data: vals,
              borderColor: '#3B5BDB',
              backgroundColor: 'rgba(59,91,219,.1)',
              fill: true,
              tension: 0.4
            },
            {
              label: 'Total Contributions',
              data: contribVals,
              borderColor: '#2CB67D',
              backgroundColor: 'transparent',
              borderDash: [5, 5],
              tension: 0.4
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true
            }
          },
          scales: {
            y: {
              ticks: {
                callback: v => '$' + Math.round(v / 1000) + 'K'
              }
            }
          }
        }
      });
    }
  };

  useEffect(() => {
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.container}>

      <HubNav />

      <div className={styles.hero}>
        <div className={styles['hero-inner']}>
          <p className={styles['hero-eyebrow']}>🧮 Interactive Calculator · With 401(k) Match Included</p>
          <h1>Compound Interest Calculator — With Employer 401(k) Match (2026)</h1>
          <p className={styles['hero-deck']}>
            See exactly how your money grows over time — and how much your employer's 401(k) match accelerates it. Unlike basic calculators, this one includes the match to show your real compound growth picture.
          </p>
          <div className={styles['hero-meta']}>
            <span>📅 Updated April 2026</span>
            <span>🔢 Instant live results</span>
            <span>✅ Includes employer match</span>
          </div>
        </div>
      </div>

      <div className={styles['stat-strip']}>
        <div className={styles['stat-strip-inner']}>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$76,123</div>
            <div className={styles['stat-label']}>$10K at 7% over 30 Years</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">×7.6</div>
            <div className={styles['stat-label']}>30-Year Compound Multiplier</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">9 yrs</div>
            <div className={styles['stat-label']}>Rule of 72 at 8% Return</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">100%</div>
            <div className={styles['stat-label']}>Return on Captured Match</div>
          </div>
        </div>
      </div>

      <div className={styles['page-body']} itemScope itemType="https://schema.org/Article">
        <main className={styles['main-content']} role="main" aria-label="Compound Interest Calculator with 401(k) Match">
          <section id="calculator">
            <p className={styles['section-label']}>Calculator</p>
            <h2>Compound Interest Calculator</h2>
            <div className={styles['calc-box']} style={{ padding: '32px' }}>
              <h3>🧮 Calculate Your Compound Growth</h3>
              <div className={styles['calc-row']}>
                <div className={styles['calc-field']}>
                  <label>Starting Amount ($)</label>
                  <input type="number" value={ciStart} onChange={e => setCiStart(e.target.value)} step="500" />
                </div>
                <div className={styles['calc-field']}>
                  <label>Monthly Contribution ($)</label>
                  <input type="number" value={ciMonthly} onChange={e => setCiMonthly(e.target.value)} step="50" />
                </div>
                <div className={styles['calc-field']}>
                  <label>Annual Return (%)</label>
                  <input type="number" value={ciRate} onChange={e => setCiRate(e.target.value)} min="0.5" max="15" step="0.5" />
                </div>
              </div>
              <div className={styles['calc-row']}>
                <div className={styles['calc-field']}>
                  <label>Time Period (Years)</label>
                  <input type="number" value={ciYears} onChange={e => setCiYears(e.target.value)} min="1" max="50" />
                </div>
                <div className={styles['calc-field']}>
                  <label>Employer Match (%)</label>
                  <input type="number" value={ciMatch} onChange={e => setCiMatch(e.target.value)} min="0" max="100" step="5" />
                </div>
                <div className={styles['calc-field']}>
                  <label>Match Cap (% of salary)</label>
                  <input type="number" value={ciMatchCap} onChange={e => setCiMatchCap(e.target.value)} min="0" max="10" step="0.5" />
                </div>
                <div className={styles['calc-field']}>
                  <label>Annual Salary ($)</label>
                  <input type="number" value={ciSalary} onChange={e => setCiSalary(e.target.value)} step="1000" />
                </div>
              </div>
              <div style={{ marginTop: '8px' }}>
                <button className={styles['calc-btn']} onClick={calculateCI} style={{ width: '100%', padding: '14px', fontSize: '16px' }}>Calculate →</button>
              </div>
              
              <div className={styles['calc-result']} style={{ display: result ? 'block' : 'none', textAlign: 'left', padding: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div className={styles['calc-result-num']} style={{ fontSize: '28px' }}>${result?.total?.toLocaleString()}</div>
                    <div className={styles['calc-result-label']}>Total Balance</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div className={styles['calc-result-num']} style={{ fontSize: '28px', color: 'var(--green)' }}>${result?.totalContrib?.toLocaleString()}</div>
                    <div className={styles['calc-result-label']}>Total Contributions</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div className={styles['calc-result-num']} style={{ fontSize: '28px', color: 'var(--gold)' }}>${result?.growth?.toLocaleString()}</div>
                    <div className={styles['calc-result-label']}>Total Growth</div>
                  </div>
                </div>
                <canvas ref={chartRef} height="80"></canvas>
                {result && (
                  <div style={{ marginTop: '16px', fontSize: '13px', color: 'var(--text-mid)' }}>
                    <strong>Employer match adds:</strong> {Math.round(result.annualMatch).toLocaleString()}/year ({Math.round(result.annualMatch/12).toLocaleString()}/month) — that's {Math.round(result.annualMatch * result.T).toLocaleString()} over {result.T} years in additional contributions alone, before compounding.<br/><br/>
                    <strong>4% withdrawal rate:</strong> This balance would generate approximately <strong>{Math.round(result.total * 0.04).toLocaleString()}/year</strong> in retirement income.
                  </div>
                )}
              </div>
            </div>
          </section>

          <section id="how-it-works">
            <p className={styles['section-label']}>How It Works</p>
            <h2>The Math Behind Compound Interest</h2>
            <p>The compound interest formula: <strong>A = P(1 + r/n)<sup>nt</sup></strong></p>
            <p>Where: A = final amount | P = principal (starting amount) | r = annual interest rate | n = compounding periods per year | t = time in years</p>
            <p>For monthly compounding (the standard for most investment accounts): n = 12. Most retirement calculators and investment accounts compound monthly.</p>
            <div className={styles['info-box']}>
              <p>💡 <strong>The Rule of 72:</strong> Divide 72 by your annual interest rate to estimate how many years it takes to double your money. At 6% → 12 years. At 8% → 9 years. At 10% → 7.2 years.</p>
            </div>
            <table className={styles['data-table']} summary="Compound interest growth table showing $10,000 and $500/month at different annual return rates over 10, 20, and 30 years">
              <thead>
                <tr>
                  <th scope="col">Annual Return</th><th scope="col">10 Years</th><th scope="col">20 Years</th><th scope="col">30 Years</th><th scope="col">Years to<br />Double</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>5%</td><td>$113,700</td><td>$222,700</td><td>$429,700</td><td>14.4 years</td></tr>
                <tr><td className={styles.hi}>7%</td><td>$124,400</td><td>$275,400</td><td>$601,900</td><td>10.3 years</td></tr>
                <tr><td className={styles.green}>8%</td><td>$129,900</td><td>$307,200</td><td>$729,600</td><td>9.0 years</td></tr>
                <tr><td>10%</td><td>$142,500</td><td>$385,900</td><td>$1,082,000</td><td>7.2 years</td></tr>
              </tbody>
            </table>
            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>
              Assumes $10,000 starting amount + $500/month contributions. Values rounded. Returns are illustrative; actual investment returns vary.
            </p>
          </section>

          <section id="faq" aria-label="Frequently Asked Questions" className={styles['faq-section']}>
            <h2>Frequently Asked Questions</h2>
            {[
              {
                q: 'What is compound interest?',
                a: "Compound interest is interest calculated on both the initial principal AND the accumulated interest from previous periods. Unlike simple interest (which only applies to the original principal), compound interest snowballs over time — your gains generate their own gains. Example: $10,000 at 7% simple interest earns $700/year forever. At 7% compounded annually, you earn $700 in year 1, $749 in year 2, $802 in year 3 — because each year's interest is added to the base. Over 30 years, $10,000 at 7% compound interest grows to $76,123 — versus $31,000 at simple interest. This is why starting early is so powerful."
              },
              {
                q: 'What is the Rule of 72?',
                a: "The Rule of 72 is a quick mental math shortcut to estimate how long it takes to double your money at a given compound interest rate: divide 72 by the annual interest rate. Examples: At 6% annual return, money doubles in 72÷6 = 12 years. At 8% return, money doubles in 72÷8 = 9 years. At 10% return: 72÷10 = 7.2 years. At 3% (high-yield savings): 72÷3 = 24 years. This is why the difference between a 6% and 8% investment return seems small but is enormous over decades of retirement investing."
              },
              {
                q: 'How does the employer 401(k) match affect compound interest?',
                a: "An employer 401(k) match is effectively an immediate 50–100% return on your contribution — before any investment growth. For example: if you contribute $5,000 and your employer matches 50% of that (adding $2,500), you start year 2 with $7,500 compounding instead of $5,000. That extra $2,500 compounds at 7% for 30 years and becomes $19,031 — from a match you didn't 'earn.' This is why Plootus and every financial planner say the employer match is always the first priority: it's the most powerful compound interest multiplier available to you."
              },
              {
                q: 'What return rate should I use for retirement planning?',
                a: "For long-term retirement planning, most financial planners use 6–7% as a realistic expected annual return for a diversified portfolio (stocks and bonds), adjusted for inflation. The historical average annual return of the S&P 500 is approximately 10% nominally, but inflation erodes 3% of that, leaving roughly 7% in real returns. More conservative planners use 5–6% to account for sequence-of-returns risk. For a primarily stock portfolio, 7% is commonly used. For balanced portfolios (60/40 stocks/bonds), 5.5–6.5% is more typical. Plootus uses your actual asset allocation and fund expense ratios to calculate a more precise projected return. Source: Schwab; Vanguard research."
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
            <h3>Make Compound Interest Work Harder for You</h3>
            <p>The real lever in your 401(k) is fund selection — high-expense-ratio funds can reduce your effective compound return by 1% or more per year. Plootus identifies and replaces high-fee funds in your specific plan with better alternatives.</p>
            <a href="/">Optimize My Funds →</a>
          </div>

          <div className={styles['sources-box']}>
            <strong>📚 Sources</strong>
            <ul>
              <li>Standard financial mathematics: Time Value of Money (TVM) formulas</li>
              <li>Vanguard Research, The Case for Low-Cost Index Funds</li>
              <li>Charles Schwab, Understanding Investment Returns and Compound Growth</li>
              <li>IRS, Retirement Plan Contribution Limits 2026 (irs.gov)</li>
              <li>S&P 500 historical return data: Bloomberg (nominal ~10%/yr; real ~7%/yr)</li>
              <li>Plootus Research 2026</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles['toc-box']}>
            <h3>On This Page</h3>
            <ul>
              <li><a href="#calculator">Compound Interest Calculator</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
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
            <a href="/401k-by-age">→ 401(k) Contribution Limits 2026</a>
            <a href="/roth-vs-traditional">→ Roth vs. Traditional IRA</a>
            <a href="/hsa-contribution-limits">→ HSA Guide 2026</a>
            <a href="/average-net-worth-by-age">→ Average Net Worth by Age</a>
            <a href="/how-much-to-retire">→ How Much Do I Need to Retire?</a>
          </div>
          <div className={styles['sidebar-card']} style={{ background: 'var(--off-white)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '8px' }}>Key Stat</p>
            <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.45, marginBottom: '5px' }}>"A 1% higher expense ratio in your 401(k) reduces your compound growth by approximately 21% over 30 years on a $100,000 portfolio."</p>
            <p style={{ fontSize: '11px', color: 'var(--text-light)', margin: 0 }}>Source: Plootus Research 2026 / Vanguard research</p>
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

export default CompoundInterestCalculator;
