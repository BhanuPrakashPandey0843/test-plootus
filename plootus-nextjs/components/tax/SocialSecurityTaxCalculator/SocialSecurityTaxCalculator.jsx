import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import styles from './SocialSecurityTaxCalculator.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const SocialSecurityTaxCalculator = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);
  const [ssBen, setSsBen] = useState('');
  const [ssAgi, setSsAgi] = useState('');
  const [ssTei, setSsTei] = useState('0');
  const [filing, setFiling] = useState('single');
  const [result, setResult] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const calcSSTax = () => {
    const ben = parseFloat(ssBen) || 0;
    const agi = parseFloat(ssAgi) || 0;
    const tei = parseFloat(ssTei) || 0;
    const pi = agi + tei + (ben * 0.5);
    const t1 = filing === 'mfj' ? 32000 : 25000;
    const t2 = filing === 'mfj' ? 44000 : 34000;
    let taxable = 0;
    
    if (pi <= t1) {
      taxable = 0;
    } else if (pi <= t2) {
      taxable = Math.min(ben * 0.50, (pi - t1) * 0.50);
    } else {
      const t2taxable = Math.min(ben * 0.50, (t2 - t1) * 0.50);
      const additional = Math.min(ben * 0.85 - t2taxable, (pi - t2) * 0.85);
      taxable = Math.min(ben * 0.85, t2taxable + additional);
    }
    
    const pct = ben > 0 ? ((taxable / ben) * 100).toFixed(1) : 0;
    
    setResult({
      taxable: Math.round(taxable),
      pi: Math.round(pi),
      ben: Math.round(ben),
      pct,
      taxFree: Math.round(ben - taxable)
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Social Security Tax Calculator 2026 | Is Your Benefit Taxable? | Plootus</title>
        <meta name="description" content="Use our free Social Security tax calculator to find out exactly how much of your benefit is taxable based on your provisional income." />
        <link rel="canonical" href="https://www.plootus.com/social-security-tax-calculator" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Social Security Tax Calculator",
            "applicationCategory": "FinanceApplication",
            "description": "Calculates the taxable portion of Social Security benefits based on IRS provisional income thresholds.",
            "author": {
              "@type": "Organization",
              "name": "Plootus"
            }
          })}
        </script>
      </Head>

      <HubNav />

      <div className={styles.hero}>
        <div className={styles.heroBg}>TAXES</div>
        <div className={styles.heroInner}>
          <p className={styles.heroTag}>🧮 Free Calculator · 2026 IRS Thresholds</p>
          <h1>Social Security Tax Calculator 2026</h1>
          <p className={styles.heroDeck}>
            Up to 85% of Social Security benefits can be federally taxable. Find out how much of your benefit is taxable.
          </p>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent} role="main">
          <section id="calculator">
            <div className={styles.calcBox}>
              <h3>🧮 Calculate Your SS Tax (2026)</h3>
              <div className={styles.calcRow}>
                <div className={styles.calcField}>
                  <label>Annual SS Benefit ($)</label>
                  <input type="number" value={ssBen} onChange={(e) => setSsBen(e.target.value)} />
                </div>
                <div className={styles.calcField}>
                  <label>Other AGI ($)</label>
                  <input type="number" value={ssAgi} onChange={(e) => setSsAgi(e.target.value)} />
                </div>
              </div>
              <div className={styles.calcRow}>
                <div className={styles.calcField}>
                  <label>Filing Status</label>
                  <select value={filing} onChange={(e) => setFiling(e.target.value)}>
                    <option value="single">Single</option>
                    <option value="mfj">Married Filing Jointly</option>
                  </select>
                </div>
                <button className={styles.calcBtn} onClick={calcSSTax}>Calculate →</button>
              </div>
              
              {result && (
                <div className={`${styles.calcResult} ${styles.show}`}>
                  <div className={styles.calcResultNum}>${result.taxable.toLocaleString()}</div>
                  <div className={styles.calcResultLabel}>Taxable Portion of SS Benefits</div>
                </div>
              )}
            </div>
          </section>

          <section id="thresholds">
            <h2>The Provisional Income Formula</h2>
            <div className={styles.highlightBox}>
              <p>📌 <strong>Provisional Income = AGI + Tax-Exempt Interest + 50% of SS Benefits</strong></p>
            </div>
          </section>

          <section className={styles.faqSection} id="faq">
            <h2>Frequently Asked Questions</h2>
            {[
              { q: "How much of my benefit is taxable?", a: "It depends on your provisional income. Below $25k/$32k (Single/MFJ), none is taxable. Above that, up to 50% or 85% can be taxable." }
            ].map((faq, idx) => (
              <div key={idx} className={`${styles.faqItem} ${openFaq === idx ? styles.open : ''}`}>
                <button className={styles.faqQ} onClick={() => toggleFaq(idx)}>
                  {faq.q} <span className={styles.faqIcon}>+</span>
                </button>
                <div className={styles.faqA}><p>{faq.a}</p></div>
              </div>
            ))}
          </section>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.ctaCard}>
            <h4>Check your retirement readiness</h4>
            <div onClick={() => router.push('/retirement-calculator')} className={styles.ctaBtn} style={{cursor: 'pointer'}}>Check Here</div>
          </div>
        </aside>
      </div>
      <PartnersSection 
        titleFontSize="28px !important"
        titleFontWeight={800}
        titleColor="var(--navy) !important"
        titleLetterSpacing="-0.3px"
        paddingTop="40px"
        paddingBottom="60px"
      />
    </div>
  );
};

export default SocialSecurityTaxCalculator;
