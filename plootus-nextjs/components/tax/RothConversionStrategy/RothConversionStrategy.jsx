import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRightLeft, Calendar, Clock } from 'lucide-react';
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
      <Head>
        <title>Roth Conversion Strategy: The Complete 2026 Guide | Plootus</title>
        <meta name="description" content="Roth conversions can save you hundreds of thousands in lifetime taxes. Learn about bracket-filling, IRMAA traps, the 5-year rule, and the conversion ladder." />
        <link rel="canonical" href="https://www.plootus.com/roth-conversion-strategy" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Roth Conversion Strategy: The Complete 2026 Guide",
            "description": "Comprehensive Roth conversion strategy for 2026.",
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
        <div className={styles.heroBg}>TAXES</div>
        <div className={styles.heroInner}>
          <p className={styles.heroTag}><ArrowRightLeft size={13} strokeWidth={2.5} /> Tax Strategy · Retirement Planning · 2026</p>
          <h1>Roth Conversion Strategy: The Complete 2026 Guide</h1>
          <p className={styles.heroDeck}>
            Roth conversions can save you hundreds of thousands in lifetime taxes — but only if you convert at the right time and in the right amount. Master bracket-filling, IRMAA limits, and the conversion ladder.
          </p>
          <div className={styles.heroMeta}>
            <span><Calendar size={11} style={{display:'inline',marginRight:4}} />Updated April 2026</span>
            <span><Clock size={11} style={{display:'inline',marginRight:4}} />10 min read</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>$212K</span>
            <span className={styles.statLabel}>IRMAA Trigger — MFJ</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>5 yrs</span>
            <span className={styles.statLabel}>Holding Period</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>Age 59½</span>
            <span className={styles.statLabel}>Penalty-Free Withdrawals</span>
          </div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent} role="main">
          <section id="why">
            <h2>Why Convert Traditional IRA / 401(k) to Roth?</h2>
            <div className={styles.cardGrid}>
              <div className={styles.card}>
                <h4>Tax-Free Growth</h4>
                <p>Roth IRAs have no required minimum distributions and earnings grow tax-free.</p>
              </div>
              <div className={styles.card}>
                <h4>Lower Brackets</h4>
                <p>Convert during low-income years to pay tax now at a lower rate.</p>
              </div>
            </div>
          </section>

          <section id="irmaa">
            <h2>Medicare IRMAA: The Hidden Conversion Trap</h2>
            <p>IRMAA is based on income from two years prior. A large conversion in 2026 determines your 2028 Medicare premiums.</p>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>MAGI (MFJ)</th>
                  <th>Premium Increase</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>≤ $212,000</td>
                  <td>Base rate</td>
                </tr>
                <tr>
                  <td>$212,001–$266,000</td>
                  <td>+$888/yr</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className={styles.faqSection} id="faq">
            <h2>Frequently Asked Questions</h2>
            {[
              { q: "When is the best time to convert?", a: "The best time is the 'Roth conversion corridor' — the years between retirement and when Social Security and RMDs begin." }
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
          <div className={styles.tocBox}>
            <h3>On This Page</h3>
            <ol>
              <li><a href="#why">Why Convert</a></li>
              <li><a href="#irmaa">IRMAA Traps</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>
          <div className={styles.ctaCard}>
            <h4>Check your retirement strategy</h4>
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

export default RothConversionStrategy;
