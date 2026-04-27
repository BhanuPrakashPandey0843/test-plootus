import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import styles from './StandardDeduction2026.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const StandardDeduction2026 = () => {
  const router = useRouter();

  const toggleFaq = (e) => {
    e.currentTarget.parentElement.classList.toggle(styles.open);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Standard Deduction 2026: All Amounts & Age 65+ Rules | Plootus</title>
        <meta name="description" content="The 2026 standard deduction is $15,000 for single filers and $30,000 for married filing jointly. Learn about age 65+ rules and when to itemize." />
        <link rel="canonical" href="https://www.plootus.com/standard-deduction-2026" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Standard Deduction 2026: All Amounts & Age 65+ Rules",
            "description": "2026 standard deduction amounts and rules.",
            "author": {
              "@type": "Organization",
              "name": "Plootus"
            }
          })}
        </script>
      </Head>

      <HubNav />

      <section className={styles.hero}>
        <div className={styles.heroBg}>TAXES</div>
        <div className={styles.heroInner}>
          <div className={styles.heroTag}>🧾 Tax Guide · IRS Rev. Proc. 2025-40</div>
          <h1>Standard Deduction 2026: All Amounts & Age 65+ Rules</h1>
          <p className={styles.heroSub}>
            The 2026 standard deduction is $15,000 for single filers and $30,000 for married filing jointly — before any income is taxed.
          </p>
        </div>
      </section>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}>
            <div className={styles.statNum}>$30,000</div>
            <div className={styles.statLabel}>MFJ Standard Deduction</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>$15,000</div>
            <div className={styles.statLabel}>Single Standard Deduction</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>$32,600</div>
            <div className={styles.statLabel}>MFJ + Both 65+</div>
          </div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent}>
          <section id="amounts">
            <h2>Standard Deduction Amounts by Filing Status — 2026</h2>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Filing Status</th>
                  <th>2026 Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Single</td>
                  <td className={styles.hi}>$15,000</td>
                </tr>
                <tr>
                  <td>Married Filing Jointly</td>
                  <td className={styles.hi}>$30,000</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="age65">
            <h2>Additional Deduction for 65+ or Blind</h2>
            <p>Taxpayers 65+ or blind receive an additional standard deduction amount.</p>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Situation</th>
                  <th>Additional Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Age 65+ (Single/HoH)</td>
                  <td className={styles.hi}>$1,600</td>
                </tr>
                <tr>
                  <td>Age 65+ (MFJ/MFS)</td>
                  <td className={styles.hi}>$1,300</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className={styles.faqSection} id="faq">
            <h2>Frequently Asked Questions</h2>
            <div className={styles.faqItem}>
              <button className={styles.faqQ} onClick={toggleFaq}>
                What is the 2026 standard deduction for a married couple? <span className={styles.faqIcon}>+</span>
              </button>
              <div className={styles.faqA}>
                It is $30,000 for married filing jointly.
              </div>
            </div>
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

export default StandardDeduction2026;
