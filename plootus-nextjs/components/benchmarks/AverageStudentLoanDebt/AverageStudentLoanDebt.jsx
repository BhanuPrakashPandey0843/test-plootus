import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from './AverageStudentLoanDebt.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const AverageStudentLoanDebt = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Average Student Loan Debt by Age (2026) | Plootus</title>
        <meta name="description" content="Report on average student loan debt by age in 2026. Learn how student loans delay retirement and find the best payoff vs. invest strategies." />
        <link rel="canonical" href="https://www.plootus.com/average-student-loan-debt" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Average Student Loan Debt by Age (2026): The Retirement Delay Nobody Talks About",
            "description": "Comprehensive guide on student loan trends in the U.S., including average balances by demographic and impact on retirement timelines.",
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
          <div className={styles['hero-eyebrow']}>📊 Research Report · Plootus 2026 · Federal Reserve, NCES, ED.gov</div>
          <h1>Average Student Loan Debt by Age (2026): The Retirement Delay Nobody Talks About</h1>
          <div className={styles['hero-deck']}>
            The average federal student loan borrower owes $38,787. That debt doesn't just feel heavy — it directly delays retirement by an average of 4–7 years through redirected savings, reduced 401(k) contributions, and slower wealth accumulation.
          </div>
          <div className={styles['hero-meta']}>
            <span>By the Plootus Research Team</span>
            <span>Updated April 2026</span>
            <span>Sources: Federal Reserve 2025, U.S. Dept. of Education</span>
          </div>
        </div>
      </div>

      <div className={styles['stat-strip']}>
        <div className={styles['stat-strip-inner']}>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$38,787</div>
            <div className={styles['stat-label']}>Avg Student Loan Debt per Borrower</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$1.74T</div>
            <div className={styles['stat-label']}>Total U.S. Student Loan Debt</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">43.2M</div>
            <div className={styles['stat-label']}>Americans with Federal Student Loans</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">4–7 yrs</div>
            <div className={styles['stat-label']}>Average Retirement Delay from Student Debt</div>
          </div>
        </div>
      </div>

      <div className={styles['page-body']} itemScope itemType="https://schema.org/Article">
        <main className={styles['main-content']} role="main" aria-label="Average Student Loan Debt by Age 2026">
          <section id="by-age">
            <div className={styles['section-label']}>By Age Group</div>
            <h2>Average Student Loan Debt by Age Group (2026)</h2>
            <table className={styles['data-table']} summary="Average student loan debt by age group with borrower share">
              <thead>
                <tr>
                  <th scope="col">Age Group</th>
                  <th scope="col">Avg. Student Loan<br />Debt</th>
                  <th scope="col">Median Balance</th>
                  <th scope="col">% with Student Loans</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Under 24</strong></td>
                  <td data-type="statistic">$14,900</td>
                  <td data-type="statistic">$8,200</td>
                  <td>43%</td>
                </tr>
                <tr>
                  <td><strong>25–34</strong></td>
                  <td data-type="statistic">$38,600</td>
                  <td data-type="statistic">$22,500</td>
                  <td>51%</td>
                </tr>
                <tr>
                  <td><strong>35–44</strong></td>
                  <td data-type="statistic">$47,200</td>
                  <td data-type="statistic">$28,700</td>
                  <td>40%</td>
                </tr>
                <tr>
                  <td><strong>45–54</strong></td>
                  <td data-type="statistic">$44,800</td>
                  <td data-type="statistic">$24,100</td>
                  <td>29%</td>
                </tr>
                <tr>
                  <td><strong>55–61</strong></td>
                  <td data-type="statistic">$40,400</td>
                  <td data-type="statistic">$18,900</td>
                  <td>22%</td>
                </tr>
                <tr>
                  <td><strong>62+</strong></td>
                  <td data-type="statistic">$30,200</td>
                  <td data-type="statistic">$14,400</td>
                  <td>9%</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: '13px', color: 'var(--text-light)' }}>
              Sources: Federal Reserve SCF 2022; U.S. Dept. of Education Q4 2025; Plootus Research 2026.
            </p>
          </section>

          <section id="retirement-delay">
            <div className={styles['section-label']}>Retirement Impact</div>
            <h2>How Student Debt Delays Retirement — The Real Math</h2>
            <p>
              Student loan payments redirect money that would otherwise compound in retirement accounts. A borrower paying $400/month on student loans instead of investing that in a 401(k) at 7% over 10 years loses approximately $69,000 in potential retirement savings — just from the opportunity cost of the payment period.
            </p>
            <div className={styles['card-grid']}>
              <div className={styles.card}>
                <div className={styles['card-val']} style={{ color: 'var(--red)' }}>$69K</div>
                <h4>Lost Compounding (10-Year Payoff)</h4>
                <p>$400/month student loan payment over 10 years at 6.53% interest. If invested at 7% instead: $69,000 in lost retirement compounding per $400/month.</p>
              </div>
              <div className={styles.card}>
                <div className={styles['card-val']} style={{ color: 'var(--gold)' }}>4–7 yrs</div>
                <h4>Average Retirement Delay</h4>
                <p>Americans with significant student debt (over $30,000) retire an average of 4–7 years later than debt-free peers with similar incomes, due to reduced savings capacity and lower net worth accumulation.</p>
              </div>
            </div>
            <h3>Payoff vs. Invest: The Decision Framework</h3>
            <table className={styles['data-table']} summary="Student loan payoff vs investing decision by interest rate">
              <thead>
                <tr>
                  <th scope="col">Loan Interest<br />Rate</th>
                  <th scope="col">Recommended<br />Strategy</th>
                  <th scope="col">Rationale</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Under 4%</strong></td>
                  <td className={styles.green}><strong>Invest aggressively</strong></td>
                  <td>Expected market returns (~7%) exceed guaranteed debt savings. Invest max 401(k) and IRA while making minimum loan payments.</td>
                </tr>
                <tr>
                  <td><strong>4–5.5%</strong></td>
                  <td className={styles.hi}>Invest with moderate payoff</td>
                  <td>Close call. Capture 401(k) match, fund IRA, then split extra between loans and investing.</td>
                </tr>
                <tr>
                  <td><strong>5.5–7%</strong></td>
                  <td className={styles.gold}>Split evenly</td>
                  <td>Uncertain which wins long-term. Split extra cash between extra loan payments and 401(k)/IRA contributions.</td>
                </tr>
                <tr>
                  <td><strong>Over 7%</strong></td>
                  <td className={styles.bad}>Pay off aggressively</td>
                  <td>Guaranteed return exceeds expected market returns. After capturing 401(k) match, put all extra toward loans.</td>
                </tr>
                <tr>
                  <td><strong>Any rate (PSLF eligible)</strong></td>
                  <td className={styles.green}>Max 401(k)/IRA first</td>
                  <td>Contribute max to reduce AGI, lower IDR payments, and maximize forgiveness. 401(k) contributions effectively reduce your mandatory loan payment under income-driven plans.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="faq" aria-label="Frequently Asked Questions" className={styles['faq-section']}>
            <h2>Frequently Asked Questions</h2>
            {[
              {
                q: 'Should I pay off student loans before saving for retirement?',
                a: "No — in almost every case, you should save for retirement alongside paying student loans, not instead of. Always contribute enough to your 401(k) to capture the full employer match first (that's a guaranteed 50–100% return). Then prioritize loan payoff versus additional retirement savings based on your interest rate: if your rate exceeds 7%, pay loans aggressively; if it's below 5%, invest more in retirement accounts. If you're pursuing PSLF, maximize 401(k) contributions because they reduce your income-driven repayment payment."
              },
              {
                q: 'What is income-driven repayment (IDR) and who qualifies?',
                a: 'Income-driven repayment plans cap your monthly federal student loan payment at a percentage of your discretionary income. The SAVE plan (Saving on a Valuable Education), the current standard IDR plan, caps payments at 5% of discretionary income for undergraduate loans and 10% for graduate loans (or 7.5% for mixed). After 10–25 years of payments, remaining balances are forgiven (20–25 years for most plans; 10 years for PSLF). Key IDR plans: SAVE, IBR (Income-Based Repayment), PAYE (Pay As You Earn), ICR (Income-Contingent Repayment). Source: StudentAid.gov 2026.'
              },
              {
                q: 'What is Public Service Loan Forgiveness (PSLF)?',
                a: 'PSLF forgives remaining federal student loan balances after 120 qualifying monthly payments (10 years) while working full-time for a qualifying government or nonprofit employer. Qualifying employers include: federal, state, local, or tribal governments; public schools; 501(c)(3) nonprofits; and certain other nonprofits. You must be on a qualifying IDR plan. Payments need not be consecutive. PSLF forgiveness is currently tax-free at the federal level. Key strategy: maximize 401(k) contributions to reduce AGI, lower your IDR payment, and make the most of forgiveness.'
              }
            ].map((faq, index) => (
              <div key={index} className={`${styles['faq-item']} ${openFaq === index ? styles['faq-item-open'] : ''}`}>
                <div className={styles['faq-q']} onClick={() => toggleFaq(index)}>
                  {faq.q}
                  <span>+</span>
                </div>
                {openFaq === index && (
                  <div className={styles['faq-a']} style={{ display: 'block' }}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </section>

          <div className={styles['sources-box']}>
            <strong>📚 Sources</strong>
            <ul>
              <li>Federal Reserve, Survey of Consumer Finances 2022</li>
              <li>U.S. Department of Education, Federal Student Loan Portfolio Q4 2025 (studentaid.gov)</li>
              <li>National Center for Education Statistics (NCES), Baccalaureate & Beyond Longitudinal Study 2024</li>
              <li>New York Federal Reserve, Center for Microeconomic Data — Student Loan Data</li>
              <li>AAMC, Medical Student Education: Debt, Costs, and Loan Repayment Facts 2025</li>
              <li>Plootus Research 2026</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles['toc-box']}>
            <h3>On This Page</h3>
            <ul>
              <li><a href="#by-age">Debt by Age</a></li>
              <li><a href="#retirement-delay">Retirement Impact</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          </div>
          <div className={styles['cta-card']}>
            <h4>What's my retirement number?</h4>
            <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
            <div onClick={() => router.push('/retirement-calculator')} className={styles['cta-btn']} style={{cursor: 'pointer'}}>
              Check Here
            </div>
          </div>
          <div className={`${styles['sidebar-card']} ${styles['related-card']}`}>
            <h4>Related Guides</h4>
            <div onClick={() => router.push('/compound-interest-calculator')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ Compound Interest Calculator</div>
            <div onClick={() => router.push('/average-savings-by-age')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ Average Savings by Age</div>
            <div onClick={() => router.push('/hsa-contribution-limits')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ HSA Contribution Limits</div>
            <div onClick={() => router.push('/roth-vs-traditional')} style={{cursor: 'pointer', color: 'var(--blue)'}}>→ Roth vs Traditional IRA</div>
          </div>
          <div className={styles['sidebar-card']} style={{ background: 'var(--off-white)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '8px' }}>Key Stat</p>
            <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.45, marginBottom: '5px' }}>"Americans with $30,000+ in student debt retire 4-7 years later than debt-free peers with the same income."</p>
            <p style={{ fontSize: '11px', color: 'var(--text-light)', margin: 0 }}>Source: Plootus Research 2026</p>
          </div>
        </aside>
      </div>
      <PartnersSection 
        titleFontSize="28px !important"
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

export default AverageStudentLoanDebt;
