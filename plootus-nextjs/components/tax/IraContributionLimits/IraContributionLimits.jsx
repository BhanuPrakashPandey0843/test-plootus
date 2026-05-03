import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { PiggyBank, Calendar } from 'lucide-react';
import styles from './IraContributionLimits.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const IraContributionLimits = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>IRA Contribution Limits 2026: Traditional, Roth & Backdoor Rules | Plootus</title>
        <meta name="description" content="The 2026 IRA contribution limit is $7,000 ($8,000 age 50+). Learn about Roth eligibility, income limits, and backdoor Roth rules." />
        <link rel="canonical" href="https://www.plootus.com/ira-contribution-limits" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "IRA Contribution Limits 2026: Traditional, Roth & Backdoor Rules",
            "description": "Comprehensive guide to 2026 IRA contribution and income limits.",
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
          <p className={styles.heroTag}><PiggyBank size={13} strokeWidth={2.5} /> Tax Guide · IRS COLA 2026</p>
          <h1>IRA Contribution Limits 2026</h1>
          <p className={styles.heroDeck}>
            The 2026 IRA limit is $7,000 ($8,000 age 50+). Know the Roth income limits, backdoor rules, and SECURE 2.0 catch-up changes before you contribute.
          </p>
          <div className={styles.heroMeta}>
            <span><Calendar size={11} style={{display:'inline',marginRight:4}} />Updated 2026</span>
            <span>IRS COLA Adjusted</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>$7,000</span>
            <span className={styles.statLabel}>Limit Under Age 50</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>$8,000</span>
            <span className={styles.statLabel}>Limit Age 50+</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>$69K</span>
            <span className={styles.statLabel}>SEP IRA Limit</span>
          </div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent} role="main">
          <section id="limits">
            <h2>2026 IRA Contribution Limits</h2>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Account Type</th>
                  <th>Under Age 50</th>
                  <th>Age 50+</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Traditional IRA</td>
                  <td className={styles.hi}>$7,000</td>
                  <td className={styles.hi}>$8,000</td>
                </tr>
                <tr>
                  <td>Roth IRA</td>
                  <td className={styles.hi}>$7,000</td>
                  <td className={styles.hi}>$8,000</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="roth-limits">
            <h2>Roth IRA Income Limits 2026</h2>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Filing Status</th>
                  <th>Full Contribution (MAGI)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Single</td>
                  <td className={styles.green}>Below $150,000</td>
                </tr>
                <tr>
                  <td>Married Filing Jointly</td>
                  <td className={styles.green}>Below $236,000</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className={styles.faqSection} id="faq">
            <h2>Frequently Asked Questions</h2>
            {[
              { q: "What is the 2026 IRA limit?", a: "It is $7,000 for under 50 and $8,000 for 50+." }
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

export default IraContributionLimits;
