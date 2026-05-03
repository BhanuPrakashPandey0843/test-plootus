import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { TrendingDown, BookOpen, Calendar } from 'lucide-react';
import styles from './RetirementSavingGapGenderRace.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const RetirementSavingGapGenderRace = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Retirement Savings Gap by Gender and Race (2026) | Plootus</title>
        <meta name="description" content="Women retire with 30–40% less than men. Black and Hispanic households hold a fraction of the retirement savings of white households. We break down the data behind the inequality." />
        <link rel="canonical" href="https://www.plootus.com/retirement-savings-gap-gender-race" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Retirement Savings Gap by Gender and Race: The Data Behind the Inequality",
            "description": "Women retire with 30–40% less than men. Black and Hispanic households hold a fraction of the retirement savings of white households.",
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
        <div className={styles['hero-inner']}>
          <div className={styles['hero-eyebrow']}><TrendingDown size={13} /> Research Report · Plootus 2026 · Federal Reserve, U.S. Census, GAO</div>
          <h1>Retirement Savings Gap by Gender and Race: The Data Behind the Inequality</h1>
          <div className={styles['hero-deck']}>
            Women retire with 30–40% less than men. Black and Hispanic households hold a fraction of the retirement savings of white households. This isn't a behavior gap — it's a structural one.
          </div>
          <div className={styles['hero-meta']}>
            <span><BookOpen size={12} style={{display:'inline',verticalAlign:'middle',marginRight:4}} />By the Plootus Research Team</span>
            <span><Calendar size={12} style={{display:'inline',verticalAlign:'middle',marginRight:4}} />Updated April 2026</span>
            <span>Sources: Federal Reserve SCF 2022, GAO 2022, U.S. Census Bureau, NIRS</span>
          </div>
        </div>
      </div>

      <div className={styles['stat-strip']}>
        <div className={styles['stat-strip-inner']}>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">30–40%</div>
            <div className={styles['stat-label']}>Less Retirement Savings: Women vs. Men</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$20K</div>
            <div className={styles['stat-label']}>Median Retirement Savings, Black Households</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$1M+</div>
            <div className={styles['stat-label']}>Wealth Lost to Gender Pay Gap</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">47%</div>
            <div className={styles['stat-label']}>Women 65+ Rely on Social Security</div>
          </div>
        </div>
      </div>

      <div className={styles['page-body']} itemScope itemType="https://schema.org/Article">
        <main className={styles['main-content']} role="main" aria-label="Retirement Savings Gap by Gender and Race 2026">
          <section id="gender-gap">
            <div className={styles['section-label']}>Gender Gap</div>
            <h2>The Retirement Gender Gap</h2>
            <table className={styles['data-table']} summary="Retirement savings comparison">
              <thead>
                <tr>
                  <th scope="col">Metric</th>
                  <th scope="col">Women</th>
                  <th scope="col">Men</th>
                  <th scope="col">Gap</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Median Balance</td>
                  <td>~$47,000</td>
                  <td>~$89,000</td>
                  <td className={styles.bad}>47% less</td>
                </tr>
                <tr>
                  <td>% Relying on SS</td>
                  <td>47%</td>
                  <td>28%</td>
                  <td className={styles.bad}>+19 pct pts</td>
                </tr>
                <tr>
                  <td>Life Expectancy at 65</td>
                  <td>87 years</td>
                  <td>83 years</td>
                  <td className={styles.bad}>+4 years</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="race-gap">
            <div className={styles['section-label']}>Race Gap</div>
            <h2>Retirement Savings by Race</h2>
            <table className={styles['data-table']} summary="Median retirement savings by race">
              <thead>
                <tr>
                  <th scope="col">Race / Ethnicity</th>
                  <th scope="col">Median Account Balance</th>
                  <th scope="col">% with No Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>White non-Hispanic</td>
                  <td className={styles.green}>~$80,000</td>
                  <td>37%</td>
                </tr>
                <tr>
                  <td>Black / African American</td>
                  <td className={styles.bad}>~$20,000</td>
                  <td>65%</td>
                </tr>
                <tr>
                  <td>Hispanic / Latino</td>
                  <td className={styles.bad}>~$6,000</td>
                  <td>71%</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="faq" className={styles['faq-section']}>
            <h2>Frequently Asked Questions</h2>
            {[
              {
                q: 'Do women need more retirement savings than men?',
                a: "Yes — women have a longer average life expectancy, meaning they need to fund more years of retirement."
              }
            ].map((faq, index) => (
              <div key={index} className={`${styles['faq-item']} ${openFaq === index ? styles['faq-item-open'] : ''}`}>
                <div className={styles['faq-q']} onClick={() => toggleFaq(index)}>
                  {faq.q}
                  <span>+</span>
                </div>
                {openFaq === index && (
                  <div className={styles['faq-a']}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </section>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles['toc-box']}>
            <h3>On This Page</h3>
            <ul>
              <li><a href="#gender-gap">Gender Gap</a></li>
              <li><a href="#race-gap">Race Gap</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          </div>
          <div className={styles['cta-card']}>
            <h4>What's my retirement number?</h4>
            <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
            <div onClick={() => router.push('/retirement-calculator')} className={styles['cta-btn']} style={{ cursor: 'pointer' }}>
              Check Here
            </div>
          </div>
          <div className={`${styles['sidebar-card']} ${styles['related-card']}`}>
            <h4>Related Guides</h4>
            <Link href="/social-security-benefits">→ Social Security Benefits Guide</Link>
            <Link href="/average-net-worth-by-age">→ Average Net Worth by Age</Link>
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

export default RetirementSavingGapGenderRace;
