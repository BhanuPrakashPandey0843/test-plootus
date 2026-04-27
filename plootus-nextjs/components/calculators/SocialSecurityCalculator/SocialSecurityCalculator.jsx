import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from './SocialSecurityCalculator.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const SocialSecurityCalculator = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);
  const [fra, setFra] = useState("2000");
  const [birth, setBirth] = useState("1962");
  const [result, setResult] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const calcSS = () => {
    const currentFra = parseFloat(fra) || 2000;
    const currentBirth = parseInt(birth, 10) || 1962;

    let fraAge = 67; // 1960+
    if (currentBirth <= 1954) fraAge = 66;
    else if (currentBirth <= 1959) fraAge = 66 + (currentBirth - 1954) * 2 / 12;

    const red62 = fraAge === 67 ? 0.70 : (fraAge === 66 ? 0.75 : 0.73);
    const b62 = Math.round(currentFra * red62);
    const b67 = currentFra;
    const b70 = Math.round(currentFra * 1.24);

    const annDiff = (b70 - b62) * 12;
    const permanentIncrease = Math.round((b70 / b62 - 1) * 100);

    setResult({
      cards: [
        {
          val: `${b62.toLocaleString()}/mo`,
          color: "var(--red)",
          title: "Claiming at 62",
          lines: [
            `$${(b62 * 12).toLocaleString()}/yr`,
            `$${(b62 * 12 * 10).toLocaleString()} by 72`,
            `$${(b62 * 12 * 18).toLocaleString()} by 80`,
            `$${(b62 * 12 * 23).toLocaleString()} by 85`
          ]
        },
        {
          val: `${b67.toLocaleString()}/mo`,
          title: `Claiming at FRA (${fraAge < 67 ? fraAge : 67})`,
          lines: [
            `$${(b67 * 12).toLocaleString()}/yr`,
            `Break-even vs 62: ~age 79`,
            `$${(b67 * 12 * (80 - fraAge)).toLocaleString()} by 80`,
            `$${(b67 * 12 * (85 - fraAge)).toLocaleString()} by 85`
          ]
        },
        {
          val: `${b70.toLocaleString()}/mo`,
          color: "var(--green)",
          title: "Claiming at 70",
          lines: [
            `$${(b70 * 12).toLocaleString()}/yr`,
            `Break-even vs 62: ~age 81`,
            `$${(b70 * 12 * 10).toLocaleString()} by 80`,
            `$${(b70 * 12 * 15).toLocaleString()} by 85`
          ]
        }
      ],
      ctx: (
        <>
          <strong>Monthly difference (62 vs 70):</strong> ${(b70 - b62).toLocaleString()}/month — a <strong>{permanentIncrease}% permanent increase</strong>.<br />
          <strong>Annual difference:</strong> ${annDiff.toLocaleString()}/year for the rest of your life.<br /><br />
          <strong>Break-even analysis:</strong> Waiting until 70 pays off if you live past approximately age 80–82. The average person who reaches age 65 lives to approximately 84 (female) or 82 (male).<br /><br />
          <strong>Married couple strategy:</strong> Lower earner can claim at 62–65 for immediate income while higher earner waits until 70 — maximizing the survivor benefit if the higher earner dies first.
        </>
      )
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Social Security Calculator 2026: Break-Even Analysis | Plootus</title>
        <meta name="description" content="Estimate your Social Security benefit at 62, 67, and 70. Use our break-even calculator to find the optimal age to claim based on birth year and FRA." />
        <link rel="canonical" href="https://www.plootus.com/social-security-calculator" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Social Security Calculator",
            "operatingSystem": "All",
            "applicationCategory": "FinancialApplication",
            "description": "An interactive calculator to compare Social Security benefits at different claiming ages (62, 67, 70) with break-even analysis.",
            "author": {
              "@type": "Organization",
              "name": "Plootus"
            }
          })}
        </script>
      </Head>

      <HubNav />

      <div className={styles.hero}>
        <div className={styles['hero-inner']}>
          <p className={styles['hero-eyebrow']}>🧮 Interactive Calculator · SSA 2026 Data · Break-Even Analysis</p>
          <h1>Social Security Calculator 2026: Estimate Your Benefit at 62, 67, or 70</h1>
          <p className={styles['hero-deck']}>Enter your estimated FRA benefit and see the difference between claiming at 62, 67, or 70 — in monthly income, lifetime totals, and break-even age. The right choice can mean $200,000+ more in lifetime income.</p>
          <div className={styles['hero-meta']}>
            <span>📅 Updated April 2026</span><span>📚 SSA 2026 Data</span><span>🔢 Instant break-even analysis</span>
          </div>
        </div>
      </div>

      <div className={styles['stat-strip']}>
        <div className={styles['stat-strip-inner']}>
          <div className={styles['stat-item']}><div className={styles['stat-num']} data-type="statistic">$24,894</div><div className={styles['stat-label']}>Avg. Annual SS Benefit 2025</div></div>
          <div className={styles['stat-item']}><div className={styles['stat-num']} data-type="statistic">$5,108</div><div className={styles['stat-label']}>Max Monthly Benefit at 70</div></div>
          <div className={styles['stat-item']}><div className={styles['stat-num']} data-type="statistic">77%</div><div className={styles['stat-label']}>Benefit Increase: 62→70</div></div>
          <div className={styles['stat-item']}><div className={styles['stat-num']} data-type="statistic">Age 82-83</div><div className={styles['stat-label']}>Break-Even: 67 vs. 70</div></div>
        </div>
      </div>

      <div className={styles['page-body']} itemScope itemType="https://schema.org/Article">
        <main className={styles['main-content']} role="main" aria-label="Social Security Calculator 2026">
          <section id="calculator">
            <p className={styles['section-label']}>Calculator</p>
            <h2>Social Security Break-Even Calculator</h2>
            <div className={styles['calc-box']}>
              <h3>🧮 Compare Your Benefit at 62, 67, and 70</h3>
              <div className={styles['calc-row']}>
                <div className={styles['calc-field']}>
                  <label>Your FRA Monthly Benefit ($) <span style={{ fontWeight: 400, fontSize: '11px' }}>(from SSA.gov or estimated)</span></label>
                  <input type="number" value={fra} onChange={(e) => setFra(e.target.value)} step="50" />
                </div>
                <div className={styles['calc-field']}>
                  <label>Your Birth Year</label>
                  <input type="number" value={birth} onChange={(e) => setBirth(e.target.value)} min="1943" max="2000" />
                </div>
                <button className={styles['calc-btn']} onClick={calcSS}>Calculate</button>
              </div>
              {result && (
                <div className={styles['calc-result']} style={{ display: 'block', textAlign: 'left' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                    {result.cards.map((card, i) => (
                      <div key={i} className={styles.card} style={{ textAlign: 'center' }}>
                        <div className={styles['card-val']} style={{ color: card.color }}>{card.val}</div>
                        <h4>{card.title}</h4>
                        <p>
                          {card.lines.map((line, j) => (
                            <React.Fragment key={j}>
                              {line}<br />
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-mid)' }}>{result.ctx}</div>
                </div>
              )}
            </div>
          </section>

          <section id="fra-table">
            <p className={styles['section-label']}>Reference</p>
            <h2>Full Retirement Age by Birth Year</h2>
            <table className={styles['data-table']} summary="Social Security Full Retirement Age and benefit percentages by birth year">
              <thead>
                <tr><th scope="col">Birth Year</th><th scope="col">Full Retirement<br />Age</th><th scope="col">Benefit<br />at 62</th><th scope="col">Benefit<br />at 70</th></tr>
              </thead>
              <tbody>
                <tr><td>1943–1954</td><td className={styles.hi}>66</td><td>75%</td><td className={styles.green}>132%</td></tr>
                <tr><td>1955</td><td className={styles.hi}>66 + 2 months</td><td>74.2%</td><td className={styles.green}>130.7%</td></tr>
                <tr><td>1956</td><td className={styles.hi}>66 + 4 months</td><td>73.3%</td><td className={styles.green}>129.3%</td></tr>
                <tr><td>1957</td><td className={styles.hi}>66 + 6 months</td><td>72.5%</td><td className={styles.green}>128%</td></tr>
                <tr><td>1958</td><td className={styles.hi}>66 + 8 months</td><td>71.7%</td><td className={styles.green}>126.7%</td></tr>
                <tr><td>1959</td><td className={styles.hi}>66 + 10 months</td><td>70.8%</td><td className={styles.green}>125.3%</td></tr>
                <tr><td className={styles.gold}>1960 or later</td><td className={`${styles.hi} ${styles.gold}`}>67</td><td>70%</td><td className={styles.green}>124%</td></tr>
              </tbody>
            </table>
          </section>

          <section id="faq" aria-label="Frequently Asked Questions" className={styles['faq-section']}>
            <h2>Frequently Asked Questions</h2>
            {[
              {
                q: "How does Social Security calculate my benefit?",
                a: "The Social Security Administration calculates your benefit in three steps: (1) They take your earnings from your 35 highest-earning years, indexed for wage inflation. (2) They compute your Average Indexed Monthly Earnings (AIME) — the average of those 35 years divided by 12. (3) They apply a progressive benefit formula (the PIA — Primary Insurance Amount) to your AIME: 90% of the first $1,226, plus 32% of the next $6,172, plus 15% of everything above $7,391 (2025 bend points). The resulting PIA is your FRA benefit. Claiming before FRA reduces it; claiming after increases it by 8%/year up to 70. Source: Social Security Administration."
              },
              {
                q: "What is the maximum Social Security benefit in 2026?",
                a: "The maximum possible Social Security retirement benefit for someone claiming at age 70 in 2025 is $5,108 per month ($61,296 per year). To receive this maximum, you must have earned above the Social Security wage base for 35 years AND claim at age 70. The wage base for 2025 is $176,100. Most Americans receive significantly less — the average retired worker benefit in November 2025 was $2,075/month ($24,894/year). Source: SSA, Monthly Statistical Snapshot November 2025."
              },
              {
                q: "When is the best time to claim Social Security?",
                a: "There is no single 'best' time — it depends on your health, financial situation, marital status, and other income sources. However, the mathematical case for waiting is strong: (1) Every year you wait past FRA (67 for those born 1960+) permanently increases your benefit by 8%. (2) The break-even age for waiting from 67 to 70 is approximately 82–83, which the average person who reaches 65 will outlive. (3) For married couples, the higher earner waiting until 70 maximizes the survivor benefit for the lower earner. The main reasons to claim early: poor health expectation, immediate financial need, or being the lower earner in a couple where the higher earner is waiting. Source: SSA; AARP 2025; Charles Schwab."
              },
              {
                q: "Does working affect my Social Security benefit?",
                a: "Working affects your Social Security benefit in two ways: (1) While collecting before FRA: the earnings test applies — in 2026, earning more than approximately $22,720/year causes $1 in withheld benefits for every $2 above the limit (but withheld amounts are NOT lost — they're added back at FRA). (2) Working at any age can replace a lower-earning year in your 35-year calculation, potentially increasing your PIA. At FRA and beyond, there is no earnings limit. Source: SSA; IRS."
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
              <li>Social Security Administration, How Benefits Are Calculated (ssa.gov)</li>
              <li>SSA, Monthly Statistical Snapshot, November 2025</li>
              <li>SSA, Full Retirement Age chart (ssa.gov/benefits/retirement/planner/agereduction.html)</li>
              <li>AARP, Social Security Break-Even Age Guide 2025</li>
              <li>Charles Schwab, Social Security Claiming Strategies 2026</li>
              <li>Plootus Research 2026</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles['toc-box']}>
            <h3>On This Page</h3>
            <ul>
              <li><a href="#calculator">SS Break-Even Calculator</a></li>
              <li><a href="#fra-table">FRA by Birth Year</a></li>
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
            <div onClick={() => router.push('/social-security-benefits')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ Social Security Benefits Guide</div>
            <div onClick={() => router.push('/how-much-to-retire')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ How Much Do I Need to Retire?</div>
            <div onClick={() => router.push('/tax-friendly-states-for-retirees')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ Tax-Friendly States for Retirees</div>
            <div onClick={() => router.push('/retirement-income-calculator')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ Retirement Income Calculator</div>
            <div onClick={() => router.push('/how-to-plan-retirement')} style={{cursor: 'pointer', color: 'var(--blue)'}}>→ How to Plan for Retirement</div>
          </div>
          <div className={styles['sidebar-card']} style={{ background: 'var(--off-white)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '8px' }}>Key Stat</p>
            <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.45, marginBottom: '5px' }}>"Claiming at 70 instead of 62 increases monthly Social Security by approximately 77% permanently — for someone born 1960+ with FRA of 67."</p>
            <p style={{ fontSize: '11px', color: 'var(--text-light)', margin: 0 }}>Source: SSA; Plootus Research 2026</p>
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

export default SocialSecurityCalculator;
