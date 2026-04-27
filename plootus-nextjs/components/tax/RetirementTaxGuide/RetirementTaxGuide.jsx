import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import styles from './RetirementTaxGuide.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const RetirementTaxGuide = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Retirement Tax Guide 2026: Every Account, Every Strategy | Plootus</title>
        <meta name="description" content="How every type of retirement income is taxed, the optimal account withdrawal order, Roth conversion strategy, Social Security tax management, and RMD planning." />
        <link rel="canonical" href="https://www.plootus.com/retirement-tax-guide" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Retirement Tax Guide 2026: Every Account, Every Strategy",
            "description": "Complete retirement tax strategy for 2026.",
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
          <p className={styles.heroTag}>🧮 Pillar Guide · Complete Retirement Tax Strategy · 2026</p>
          <h1>Retirement Tax Guide 2026: Every Account, Every Strategy</h1>
          <p className={styles.heroDeck}>
            How every type of retirement income is taxed, the optimal account withdrawal order, Roth conversion strategy, Social Security tax management, RMD planning, and state tax decisions.
          </p>
          <div className={styles.heroMeta}>
            <span>📅 Updated April 2026</span>
            <span>⏱ 12 min read</span>
            <span>📚 SECURE Act 2.0</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>$0</span>
            <span className={styles.statLabel}>Tax on Roth Withdrawals</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>85%</span>
            <span className={styles.statLabel}>Max % of SS Taxable</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>$3K</span>
            <span className={styles.statLabel}>Annual Loss Deduction</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>73</span>
            <span className={styles.statLabel}>Age RMDs Begin</span>
          </div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent} role="main">
          <section id="income-types">
            <p className={styles.sectionLabel}>Start Here</p>
            <h2>How Each Type of Retirement Income Is Taxed</h2>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Income Source</th>
                  <th>Federal Tax Treatment</th>
                  <th>State Tax?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Traditional 401(k) / IRA</strong></td>
                  <td className={styles.red}>Ordinary income rates (10%–37%)</td>
                  <td>Usually yes</td>
                </tr>
                <tr>
                  <td><strong>Roth IRA / Roth 401(k)</strong></td>
                  <td className={styles.green}>Tax-free</td>
                  <td>Usually no</td>
                </tr>
                <tr>
                  <td><strong>Social Security Benefits</strong></td>
                  <td>0%, 50%, or 85% taxable</td>
                  <td>Varies</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="withdrawal-order">
            <p className={styles.sectionLabel}>Withdrawal Strategy</p>
            <h2>The Optimal Account Withdrawal Order</h2>
            <ol>
              <li><strong>RMDs (Mandatory)</strong></li>
              <li><strong>Taxable brokerage accounts</strong></li>
              <li><strong>Tax-deferred accounts (Traditional)</strong></li>
              <li><strong>Tax-free accounts (Roth)</strong></li>
            </ol>
          </section>

          <section className={styles.faqSection} id="faq">
            <h2>Frequently Asked Questions</h2>
            {[
              { q: "How is retirement income taxed?", a: "It depends on the account type. Traditional accounts are taxed as ordinary income, Roth accounts are tax-free, and Social Security is partially taxable." }
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
              <li><a href="#income-types">Income Taxation</a></li>
              <li><a href="#withdrawal-order">Withdrawal Order</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>
          <div className={styles.ctaCard}>
            <h4>What's my retirement number?</h4>
            <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
            <div onClick={() => router.push('/retirement-calculator')} className={styles.ctaBtn} style={{cursor: 'pointer'}}>Check Here</div>
          </div>
          <div className={styles.sidebarCard}>
            <h4>Related Tax Guides</h4>
            <ul className={styles.relatedLinks}>
              <li><Link href="/federal-income-tax-brackets">Federal Tax Brackets 2026</Link></li>
              <li><Link href="/capital-gains-tax-rates">Capital Gains Tax Rates</Link></li>
            </ul>
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

export default RetirementTaxGuide;
