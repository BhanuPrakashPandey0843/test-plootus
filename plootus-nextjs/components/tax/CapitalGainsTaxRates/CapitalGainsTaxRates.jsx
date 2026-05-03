import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { TrendingDown, Calendar } from 'lucide-react';
import styles from './CapitalGainsTaxRates.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const CapitalGainsTaxRates = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Capital Gains Tax Rates 2026: Complete Guide | Plootus</title>
        <meta name="description" content="Long-term capital gains can be taxed at 0% in retirement. Learn about 2026 thresholds, NIIT, and how gains affect Social Security taxes." />
        <link rel="canonical" href="https://www.plootus.com/capital-gains-tax-rates" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Capital Gains Tax Rates 2026: Complete Guide",
            "description": "Comprehensive guide to 2026 capital gains tax rates and strategies.",
            "author": {
              "@type": "Organization",
              "name": "Plootus Research Team"
            }
          })}
        </script>
      </Head>

      <HubNav />

      <div className={styles.hero}>
        <div className={styles.heroBg}>TAXES</div>
        <div className={styles.heroInner}>
          <p className={styles.heroTag}><TrendingDown size={13} strokeWidth={2.5} /> Tax Guide · IRS 2026 Rates</p>
          <h1>Capital Gains Tax Rates 2026</h1>
          <p className={styles.heroDeck}>
            Long-term capital gains can be taxed at 0% in retirement if you manage income carefully. Learn the 2026 thresholds, NIIT rules, and strategies to minimize your tax bill.
          </p>
          <div className={styles.heroMeta}>
            <span><Calendar size={11} style={{display:'inline',marginRight:4}} />Updated 2026</span>
            <span>IRS 2026 Thresholds</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>0%</span>
            <span className={styles.statLabel}>LTCG Rate ≤$96,700 MFJ</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>15%</span>
            <span className={styles.statLabel}>Rate for Most Investors</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>3.8%</span>
            <span className={styles.statLabel}>NIIT Surcharge</span>
          </div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent} role="main">
          <section id="rates">
            <h2>2026 Long-Term Capital Gains Tax Rates</h2>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>LTCG Rate</th>
                  <th>Single</th>
                  <th>Married Filing Jointly</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.green}>0%</td>
                  <td>$0 – $48,350</td>
                  <td>$0 – $96,700</td>
                </tr>
                <tr>
                  <td className={styles.hi}>15%</td>
                  <td>$48,351 – $533,400</td>
                  <td>$96,701 – $600,050</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="zero">
            <h2>The 0% Capital Gains Rate</h2>
            <div className={styles.greenBox}>
              <p>✓ <strong>Who qualifies:</strong> Retirees with taxable income below $48,350 (single) or $96,700 (MFJ) pay <em>zero</em> federal capital gains tax on long-term investment gains.</p>
            </div>
          </section>

          <section className={styles.faqSection} id="faq">
            <h2>Frequently Asked Questions</h2>
            {[
              { q: "What is the 2026 LTCG rate?", a: "It is 0% for taxable income up to $48,350 (Single) / $96,700 (MFJ), then 15% or 20%." }
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

export default CapitalGainsTaxRates;
