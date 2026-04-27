import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Chart from 'chart.js/auto';
import styles from './RetirementStatistics.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const RetirementStatistics = () => {
  const router = useRouter();
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Gen Z\n(under 28)', 'Millennials\n(28–43)', 'Gen X\n(44–59)', 'Boomers\n(60–78)'],
          datasets: [
            { label: 'Average Balance', data: [11700, 92409, 296252, 506302], backgroundColor: '#3B5BDB', borderRadius: 5 },
            { label: 'Median Balance', data: [4800, 35400, 98000, 225000], backgroundColor: '#EEF2FF', borderColor: '#3B5BDB', borderWidth: 1, borderRadius: 5 }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { font: { family: 'Plus Jakarta Sans' }, boxWidth: 12 } },
            tooltip: { callbacks: { label: c => c.dataset.label + ': $' + c.parsed.y.toLocaleString() } }
          },
          scales: {
            y: { ticks: { callback: v => '$' + (v/1000).toFixed(0) + 'K', font: { family: 'Plus Jakarta Sans', size: 11 } }, grid: { color: '#E2E8F4' } },
            x: { ticks: { font: { family: 'Plus Jakarta Sans', size: 11 } }, grid: { display: false } }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Retirement Statistics 2026: 60+ Key Data Points | Plootus Research</title>
        <meta name="description" content="A comprehensive collection of the most important retirement statistics for 2026 — savings, Social Security, state costs, healthcare, taxes, and contribution limits." />
        <link rel="canonical" href="https://www.plootus.com/retirement-statistics-2026" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Retirement Statistics 2026: 60+ Key Data Points on Savings, Social Security & More",
            "description": "60+ cited retirement statistics for 2026.",
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
            "datePublished": "2026-01-01",
            "dateModified": "2026-03-01"
          })}
        </script>
      </Head>

      <HubNav />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>📊 Journalist Resource · Plootus Research 2026</div>
          <h1>Retirement Statistics 2026: 60+ Key Data Points</h1>
          <p className={styles.heroSub}>A comprehensive, fully-cited collection of the most important retirement statistics for 2026.</p>
          <div className={styles.heroMeta}>
            <span>By the Plootus Research Team</span>
            <span>Last updated: March 2026</span>
          </div>
        </div>
      </section>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}><span className={styles.statNum}>60+</span><span className={styles.statLabel}>Cited Statistics</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>$148K</span><span className={styles.statLabel}>Avg. 401(k) Balance</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>$24,894</span><span className={styles.statLabel}>Avg. Annual SS Benefit</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>$24,500</span><span className={styles.statLabel}>2026 401(k) Limit</span></div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent}>
          <section id="savings">
            <div className={styles.sectionLabel}>Savings</div>
            <h2>💰 Retirement Savings Statistics</h2>
            <div className={styles.statCards}>
              <div className={styles.statCard}>
                <div className={styles.statCardNum}>$148,153</div>
                <div className={styles.statCardLabel}>Average 401(k) Balance</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statCardNum}>$38,176</div>
                <div className={styles.statCardLabel}>Median 401(k) Balance</div>
              </div>
            </div>

            <div className={styles.chartBox}>
              <h3>Average 401(k) Balance by Generation (2025)</h3>
              <div style={{ height: '300px', position: 'relative' }}>
                <canvas ref={chartRef}></canvas>
              </div>
            </div>
          </section>

          <section id="social-security">
            <div className={styles.sectionLabel}>Social Security</div>
            <h2>🏛️ Social Security Statistics</h2>
            <div className={styles.statCards}>
              <div className={styles.statCard}>
                <div className={styles.statCardNum}>$24,894</div>
                <div className={styles.statCardLabel}>Average Annual SS Benefit</div>
              </div>
            </div>
          </section>

          <section id="cost-by-state">
            <div className={styles.sectionLabel}>Geography</div>
            <h2>🏠 Cost of Retirement Statistics</h2>
            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable}>
                <thead><tr><th>State</th><th>Annual Cost</th><th>Min. Savings</th></tr></thead>
                <tbody>
                  <tr><td><strong>Hawaii</strong></td><td>$129,296</td><td>$2,610,050</td></tr>
                  <tr><td><strong>Mississippi</strong></td><td>$45,600</td><td>$515,025</td></tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <h4>On This Page</h4>
            <ul className={styles.tocList}>
              <li><a href="#savings">Savings Statistics</a></li>
              <li><a href="#social-security">Social Security</a></li>
              <li><a href="#cost-by-state">Cost of Retirement</a></li>
            </ul>
          </div>
          <div className={styles.ctaCard}>
            <h4>What's my retirement number?</h4>
            <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
            <div onClick={() => router.push('/retirement-calculator')} className={styles.ctaBtn} style={{cursor: 'pointer'}}>
              Check Here
            </div>
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

export default RetirementStatistics;
