import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import styles from './FederalIncomeTaxBrackets.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const FederalIncomeTaxBrackets = () => {
  const router = useRouter();
  const [fs, setFs] = useState('single');
  const [gi, setGi] = useState('');
  const [pt, setPt] = useState(0);
  const [calcRes, setCalcRes] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const calculateTax = () => {
    const grossIncome = parseFloat(gi) || 0;
    const preTax = parseFloat(pt) || 0;
    const sd = { single: 15000, mfj: 30000, hoh: 22500 };
    const br = {
      single: [[11925, 0.10], [48475, 0.12], [103350, 0.22], [197300, 0.24], [250525, 0.32], [626350, 0.35], [1e9, 0.37]],
      mfj: [[23850, 0.10], [96950, 0.12], [206700, 0.22], [394600, 0.24], [501050, 0.32], [751600, 0.35], [1e9, 0.37]],
      hoh: [[17000, 0.10], [64850, 0.12], [103350, 0.22], [197300, 0.24], [250500, 0.32], [626350, 0.35], [1e9, 0.37]]
    };

    const ti = Math.max(0, grossIncome - preTax - sd[fs]);
    let tax = 0;
    let prev = 0;
    let details = [];

    br[fs].forEach((b) => {
      const chunk = Math.min(ti, b[0]) - prev;
      if (chunk > 0) {
        const amt = chunk * b[1];
        tax += amt;
        details.push({
          rate: (b[1] * 100).toFixed(0),
          chunk: Math.round(chunk),
          amt: Math.round(amt)
        });
        prev = b[0];
      }
    });

    const eff = grossIncome > 0 ? ((tax / grossIncome) * 100).toFixed(1) : 0;

    setCalcRes({
      tax: Math.round(tax),
      ti: Math.round(ti),
      eff,
      details
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Federal Income Tax Brackets 2026: All 7 Rates & Thresholds | Plootus</title>
        <meta name="description" content="The 2026 federal tax brackets are 10%, 12%, 22%, 24%, 32%, 35%, and 37%. Use our tax estimator and see how brackets affect retirement income." />
        <link rel="canonical" href="https://www.plootus.com/federal-income-tax-brackets" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Federal Income Tax Brackets 2026: All 7 Rates & Thresholds",
            "description": "Comprehensive guide to 2026 federal income tax brackets.",
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
        <div className={styles.heroBg}>TAXES</div>
        <div className={styles.heroInner}>
          <div className={styles.heroTag}>🧾 Tax Guide · IRS Rev. Proc. 2025-40</div>
          <h1>Federal Income Tax Brackets 2026</h1>
          <p className={styles.heroSub}>
            The 2026 federal tax brackets are 10%, 12%, 22%, 24%, 32%, 35%, and 37% — adjusted for inflation.
          </p>
        </div>
      </section>

      <div className={styles.pageBody}>
        <main className={styles.mainContent}>
          <section id="calculator">
            <h2>2026 Federal Tax Estimator</h2>
            <div className={styles.calcBox}>
              <div className={styles.calcRow}>
                <div className={styles.calcField}>
                  <label>Filing Status</label>
                  <select value={fs} onChange={(e) => setFs(e.target.value)}>
                    <option value="single">Single</option>
                    <option value="mfj">Married Filing Jointly</option>
                  </select>
                </div>
                <div className={styles.calcField}>
                  <label>Gross Income ($)</label>
                  <input type="number" value={gi} onChange={(e) => setGi(e.target.value)} />
                </div>
                <button className={styles.calcBtn} onClick={calculateTax}>Calculate →</button>
              </div>
              {calcRes && (
                <div className={`${styles.calcResult} ${styles.show}`}>
                  <div className={styles.calcResultNum}>${calcRes.tax.toLocaleString()}</div>
                  <div className={styles.calcResultLabel}>Estimated Federal Tax</div>
                </div>
              )}
            </div>
          </section>

          <section id="brackets">
            <h2>2026 Single Filer Brackets</h2>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Rate</th>
                  <th>Taxable Income</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>10%</td><td>$0 – $11,925</td></tr>
                <tr><td>12%</td><td>$11,926 – $48,475</td></tr>
              </tbody>
            </table>
          </section>

          <section className={styles.faqSection} id="faq">
            <h2>Frequently Asked Questions</h2>
            {[
              { q: "What are the 2026 brackets?", a: "They range from 10% to 37% across 7 income tiers." }
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

export default FederalIncomeTaxBrackets;
