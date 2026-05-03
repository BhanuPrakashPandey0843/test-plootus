import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { Scissors, Calendar, Clock } from 'lucide-react';
import styles from './TaxLossHarvesting.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const TaxLossHarvesting = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Tax-Loss Harvesting: Complete Guide for 2026 | Plootus</title>
        <meta name="description" content="Tax-loss harvesting turns declining investments into real tax savings. Learn about the wash-sale rule, deduction limits, and carryforward rules." />
        <link rel="canonical" href="https://www.plootus.com/tax-loss-harvesting" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Tax-Loss Harvesting: Complete Guide for 2026",
            "description": "Comprehensive guide to tax-loss harvesting in 2026.",
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
          <p className={styles.heroTag}><Scissors size={13} strokeWidth={2.5} /> Tax Strategy · Portfolio Management · 2026</p>
          <h1>Tax-Loss Harvesting: Complete Guide for 2026</h1>
          <p className={styles.heroDeck}>
            Tax-loss harvesting turns declining investments into real tax savings — without permanently leaving the market. Learn the wash-sale rule, deduction limits, and carryforward strategies.
          </p>
          <div className={styles.heroMeta}>
            <span><Calendar size={11} style={{display:'inline',marginRight:4}} />Updated April 2026</span>
            <span><Clock size={11} style={{display:'inline',marginRight:4}} />8 min read</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>$3,000</span>
            <span className={styles.statLabel}>Max Annual Deduction</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>61 days</span>
            <span className={styles.statLabel}>Wash-Sale Window</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>Unlimited</span>
            <span className={styles.statLabel}>Offset Potential</span>
          </div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent} role="main">
          <section id="how-it-works">
            <h2>How Tax-Loss Harvesting Works</h2>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Step</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Identify investments with unrealized losses</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Sell the position to realize the loss</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Apply the loss against capital gains</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="wash-sale">
            <h2>The Wash-Sale Rule</h2>
            <p>The IRS disallows the tax loss if you buy a "substantially identical" security within 30 days before or after the sale.</p>
            <div className={styles.warnBox}>
              <p>⚠️ <strong>Common traps:</strong> Buying the same stock in an IRA within 30 days, or spouse buying the same security.</p>
            </div>
          </section>

          <section className={styles.faqSection} id="faq">
            <h2>Frequently Asked Questions</h2>
            {[
              { q: "What is tax-loss harvesting?", a: "It is the practice of selling investments at a loss to generate a capital loss deduction that offsets gains." }
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
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#wash-sale">Wash-Sale Rule</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>
          <div className={styles.ctaCard}>
            <h4>Optimize your portfolio</h4>
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

export default TaxLossHarvesting;
