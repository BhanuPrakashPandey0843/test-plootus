import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
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
    ],
    mfj: [
      { min: 0, max: 23850, rate: 0.10 },
      { min: 23850, max: 96950, rate: 0.12 },
      { min: 96950, max: 206700, rate: 0.22 },
      { min: 206700, max: 394600, rate: 0.24 },
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
      rec = `<strong>Roth IRA looks better</strong> by approximately ${fmt(diff)} (${pct}%) over ${years} years.`;
    } else {
      rec = `<strong>Traditional IRA looks better</strong> by approximately ${fmt(diff)} (${pct}%) over ${years} years.`;
    }
    setRecommendation(rec);
  }, [income, filing, stateRate, currentAge, retireAge, contribution, returnRate, retireBracket]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Roth vs. Traditional IRA: Break-Even Calculator (2025) | Plootus</title>
        <meta name="description" content="Should you choose Roth or Traditional IRA in 2025? Our break-even calculator uses your income, tax bracket, and expected retirement rate." />
        <link rel="canonical" href="https://www.plootus.com/roth-vs-traditional" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Roth vs. Traditional IRA: Break-Even Calculator (2025)",
            "description": "An interactive calculator comparing Roth and Traditional IRA accounts for 2025.",
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
            }
          })}
        </script>
      </Head>

      <HubNav />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>🧮 Interactive Calculator · 2025 IRS Data</div>
          <h1>Roth vs. Traditional IRA: Which Wins for You?</h1>
          <p className={styles.heroSub}>Run the numbers to see which IRA type fits your tax situation best.</p>
        </div>
      </section>

      <div className={styles.pageBody}>
        <main className={styles.mainContent}>
          <section id="calculator">
            <h2>Break-Even Calculator</h2>
            <div className={styles.calcWrapper}>
              <div className={styles.calcBody}>
                <div className={styles.calcGrid}>
                  <div className={styles.calcField}>
                    <label>Annual Income</label>
                    <input type="number" value={income} onChange={(e) => setIncome(Number(e.target.value))} />
                  </div>
                  <div className={styles.calcField}>
                    <label>Filing Status</label>
                    <select value={filing} onChange={(e) => setFiling(e.target.value)}>
                      <option value="single">Single</option>
                      <option value="mfj">Married Filing Jointly</option>
                    </select>
                  </div>
                  <div className={styles.calcField}>
                    <label>Current Age</label>
                    <input type="number" value={currentAge} onChange={(e) => setCurrentAge(Number(e.target.value))} />
                  </div>
                  <div className={styles.calcField}>
                    <label>Retirement Age</label>
                    <input type="number" value={retireAge} onChange={(e) => setRetireAge(Number(e.target.value))} />
                  </div>
                </div>
              </div>

              <div className={styles.calcResults}>
                <div className={styles.resultsRow}>
                  <div className={`${styles.resultCard} ${rothAfterTax >= tradAfterTax ? styles.winner : ''}`}>
                    <div>🟣 Roth IRA</div>
                    <div className={styles.resultAmount}>{fmt(rothAfterTax)}</div>
                  </div>
                  <div className={`${styles.resultCard} ${tradAfterTax > rothAfterTax ? styles.winner : ''}`}>
                    <div>🟢 Traditional IRA</div>
                    <div className={styles.resultAmount}>{fmt(tradAfterTax)}</div>
                  </div>
                </div>
                <div className={styles.recommendation} dangerouslySetInnerHTML={{ __html: recommendation }}></div>
              </div>
            </div>
          </section>

          <section id="faq" className={styles.faqSection}>
            <h2>Frequently Asked Questions</h2>
            {[
              { q: 'Can I contribute to both?', a: 'Yes, but the total combined contribution cannot exceed $7,000 for 2025.' }
            ].map((faq, idx) => (
              <div key={idx} className={`${styles.faqItem} ${openFaqIndex === idx ? styles.open : ''}`}>
                <button className={styles.faqQ} onClick={() => toggleFaq(idx)}>
                  {faq.q}
                </button>
                <div className={styles.faqA}>{faq.a}</div>
              </div>
            ))}
          </section>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.ctaCard}>
            <h4>Check your retirement readiness</h4>
            <div onClick={() => router.push('/retirement-calculator')} className={styles.ctaBtn} style={{cursor: 'pointer'}}>
              Calculator
            </div>
          </div>
          <div className={styles.sidebarCard}>
            <h4>Related Guides</h4>
            <Link href="/how-much-to-retire">→ How Much to Retire</Link>
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
