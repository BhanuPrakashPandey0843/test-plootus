import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import {
  FileText, Calendar, BookOpen, PenLine,
  User, Users, UserCheck,
  TrendingUp, ChevronDown, ArrowRight
} from 'lucide-react';
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
        <div className={styles.heroGrid}></div>
        <div className={styles.heroGlow1}></div>
        <div className={styles.heroGlow2}></div>
        <div className={styles.heroBg}>TAXES</div>
        <div className={styles.heroInner}>

          {/* ── Left column ── */}
          <div className={styles.heroLeft}>
            <div className={styles.heroTag}>
              <span className={styles.heroTagDot}></span>
              <FileText size={11} strokeWidth={2.5} />
              Tax Guide&nbsp;&nbsp;·&nbsp;&nbsp;IRS Rev. Proc. 2025-40
            </div>

            <h1>
              Standard Deduction
              <span className={styles.heroH1Accent}> 2026</span>
            </h1>

            <p className={styles.heroSub}>
              The 2026 standard deduction is <strong>$15,000</strong> for single
              filers and <strong>$30,000</strong> for married filing jointly —
              shielding that income from federal tax entirely. Taxpayers 65 or
              older receive up to <strong>$2,600</strong> in additional relief.
            </p>

            <div className={styles.heroMeta}>
              <span className={styles.heroMetaPill}>
                <Calendar size={12} strokeWidth={2} />
                Updated 2026
              </span>
              <span className={styles.heroMetaPill}>
                <BookOpen size={12} strokeWidth={2} />
                IRS Rev. Proc. 2025-40
              </span>
              <span className={styles.heroMetaPill}>
                <PenLine size={12} strokeWidth={2} />
                Plootus Research
              </span>
            </div>
          </div>

          {/* ── Right column — stat cards ── */}
          <div className={styles.heroRight}>
            <div className={styles.heroCard}>
              <div className={styles.heroCardHeader}>
                <span className={styles.heroCardIcon}><User size={14} strokeWidth={2} /></span>
                <span className={styles.heroCardLabel}>Single Filer</span>
              </div>
              <div className={styles.heroCardVal}>$15,000</div>
              <div className={styles.heroCardSub}>Standard deduction · 2026</div>
            </div>

            <div className={`${styles.heroCard} ${styles.heroCardBlue}`}>
              <div className={styles.heroCardHeader}>
                <span className={`${styles.heroCardIcon} ${styles.heroCardIconBlue}`}><Users size={14} strokeWidth={2} /></span>
                <span className={styles.heroCardLabel}>Married Filing Jointly</span>
              </div>
              <div className={styles.heroCardVal}>$30,000</div>
              <div className={styles.heroCardSub}>Standard deduction · 2026</div>
            </div>

            <div className={styles.heroCard}>
              <div className={styles.heroCardHeader}>
                <span className={styles.heroCardIcon}><UserCheck size={14} strokeWidth={2} /></span>
                <span className={styles.heroCardLabel}>Age 65+ Bonus (Single)</span>
              </div>
              <div className={styles.heroCardVal}>+$1,600</div>
              <div className={styles.heroCardSub}>Additional deduction</div>
            </div>
          </div>

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
                What is the 2026 standard deduction for a married couple?
                <span className={styles.faqIcon}><ChevronDown size={18} strokeWidth={2} /></span>
              </button>
              <div className={styles.faqA}>
                It is $30,000 for married filing jointly.
              </div>
            </div>
          </section>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.ctaCard}>
            <h4>Check Your Retirement Readiness</h4>
            <p>See if you're on track — personalized to your income and age.</p>
            <div onClick={() => router.push('/retirement-calculator')} className={styles.ctaBtn} style={{cursor: 'pointer'}}>
              Get Started <ArrowRight size={15} strokeWidth={2.5} style={{marginLeft: 6, verticalAlign: 'middle'}} />
            </div>
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
