import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ShieldCheck } from 'lucide-react';
import styles from './MedicareSuplementMedigapComparison.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const MedicareSuplementMedigapComparison = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Medigap vs. Medicare Advantage Comparison (2026) | Plootus</title>
        <meta name="description" content="Compare Medigap Plan G, Plan N, and Medicare Advantage (Part C) for 2026. Learn about out-of-pocket costs, enrollment rules, and provider networks." />
        <link rel="canonical" href="https://www.plootus.com/medicare-supplement-medigap-comparison" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Medigap vs. Medicare Advantage: Plan G, Plan N, and Part C Compared (2026)",
            "description": "Comprehensive guide on Medicare supplement options, including detailed cost analysis and enrollment timelines.",
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
          <div className={styles['hero-eyebrow']}><ShieldCheck size={13} strokeWidth={2.5} /> Healthcare Guide · Plootus 2026 · CMS, KFF, Medicare.gov</div>
          <h1>Medigap vs. Medicare Advantage: Plan G, Plan N, and Part C Compared (2026)</h1>
          <div className={styles['hero-deck']}>
            Original Medicare (Parts A+B) covers 80% of costs but has <strong>no out-of-pocket maximum</strong>. A serious illness could cost tens of thousands. Supplemental coverage — either Medigap or Medicare Advantage — closes this gap. Here's exactly how each option compares in 2026.
          </div>
          <div className={styles['hero-meta']}>
            <span>By the Plootus Research Team</span>
            <span>Updated April 2026</span>
            <span>Sources: CMS 2025, KFF 2025, Medicare.gov</span>
          </div>
        </div>
      </div>

      <div className={styles['stat-strip']}>
        <div className={styles['stat-strip-inner']}>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$0</div>
            <div className={styles['stat-label']}>Original Medicare Out-of-Pocket Maximum (UNLIMITED EXPOSURE)</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$9,350</div>
            <div className={styles['stat-label']}>Medicare Advantage In-Network OOP Max 2025</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$185/mo</div>
            <div className={styles['stat-label']}>Medicare Part B Premium 2025</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$413K</div>
            <div className={styles['stat-label']}>Lifetime Healthcare Estimate, Couple Age 65 (Fidelity 2024)</div>
          </div>
        </div>
      </div>

      <div className={styles['page-body']} itemScope itemType="https://schema.org/Article">
        <main className={styles['main-content']} role="main" aria-label="Medigap Medicare Supplement Plan Comparison 2026">
          <section id="comparison">
            <div className={styles['section-label']}>Comparison</div>
            <h2>Medigap Plan G vs. Plan N vs. Medicare Advantage — Full Comparison (2026)</h2>
            <table className={styles['data-table']} summary="Medicare supplement options comparison: Medigap Plan G vs Plan N vs Medicare Advantage">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">Medigap<br />Plan G</th>
                  <th scope="col">Medigap<br />Plan N</th>
                  <th scope="col">Medicare<br />Advantage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Monthly Premium (avg.)</strong></td>
                  <td data-type="statistic">$150–$300/mo</td>
                  <td data-type="statistic">$100–$200/mo</td>
                  <td data-type="statistic">$0–$50/mo (above Part B)</td>
                </tr>
                <tr>
                  <td><strong>Out-of-Pocket Maximum</strong></td>
                  <td className={styles.green}><strong>No limit needed</strong> — nearly all costs covered</td>
                  <td className={styles.green}>Very low — only $20/$50 copays</td>
                  <td>$9,350 in-network (2025)</td>
                </tr>
                <tr>
                  <td><strong>Part B Deductible ($257/yr)</strong></td>
                  <td className={styles.bad}>NOT covered (you pay $257)</td>
                  <td className={styles.bad}>NOT covered</td>
                  <td>Varies by plan</td>
                </tr>
                <tr>
                  <td><strong>Doctor Visit Copays</strong></td>
                  <td className={styles.green}>$0</td>
                  <td>$20 per visit</td>
                  <td>Varies (typically $0–$35)</td>
                </tr>
                <tr>
                  <td><strong>Emergency Room Copay</strong></td>
                  <td className={styles.green}>$0</td>
                  <td>$50 (waived if admitted)</td>
                  <td>Typically $90–$120</td>
                </tr>
                <tr>
                  <td><strong>Provider Network</strong></td>
                  <td className={styles.green}>Any Medicare provider nationwide</td>
                  <td className={styles.green}>Any Medicare provider nationwide</td>
                  <td className={styles.bad}>Restricted network; HMO or PPO</td>
                </tr>
                <tr>
                  <td><strong>Prior Authorization Required</strong></td>
                  <td className={styles.green}>No</td>
                  <td className={styles.green}>No</td>
                  <td className={styles.bad}>Yes — for many services</td>
                </tr>
                <tr>
                  <td><strong>Dental/Vision/Hearing</strong></td>
                  <td className={styles.bad}>Not included</td>
                  <td className={styles.bad}>Not included</td>
                  <td className={styles.green}>Often included</td>
                </tr>
                <tr>
                  <td><strong>Part D Drug Coverage</strong></td>
                  <td className={styles.bad}>Separate Part D plan needed</td>
                  <td className={styles.bad}>Separate Part D plan needed</td>
                  <td className={styles.green}>Usually bundled</td>
                </tr>
                <tr>
                  <td><strong>Best For</strong></td>
                  <td>Frequent healthcare users; travelers; those wanting zero surprises</td>
                  <td>Relatively healthy retirees; moderate healthcare use</td>
                  <td>Healthy retirees; budget-conscious; prefer bundled benefits</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="cost-comparison">
            <div className={styles['section-label']}>Cost Analysis</div>
            <h2>Annual Cost Comparison at Different Healthcare Usage Levels</h2>
            <table className={styles['data-table']} summary="Annual Medicare supplement cost comparison by healthcare usage level">
              <thead>
                <tr>
                  <th scope="col">Healthcare Usage</th>
                  <th scope="col">Plan G<br />Annual Cost</th>
                  <th scope="col">Plan N<br />Annual Cost</th>
                  <th scope="col">Medicare<br />Advantage Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Minimal (2-3 doctor visits/yr, no hospitalizations)</td>
                  <td data-type="statistic">$2,657–$3,857</td>
                  <td data-type="statistic">$1,457–$2,657</td>
                  <td data-type="statistic">$600–$1,800</td>
                </tr>
                <tr>
                  <td>Moderate (6-10 visits, 1 minor procedure)</td>
                  <td data-type="statistic">$2,657–$3,857</td>
                  <td data-type="statistic">$1,697–$2,897</td>
                  <td data-type="statistic">$1,200–$4,000</td>
                </tr>
                <tr>
                  <td>High (multiple specialists, 1 hospitalization)</td>
                  <td data-type="statistic">$2,657–$3,857</td>
                  <td data-type="statistic">$2,057–$3,257</td>
                  <td data-type="statistic">$3,000–$9,350+</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: '13px', color: 'var(--text-light)' }}>
              Estimates based on CMS 2025 cost-sharing data. Plan G/N costs include premium + Part B deductible. Medicare Advantage includes premium + copays. Individual plans vary by insurer and state.
            </p>
            <div className={styles['info-box']}>
              <p>💡 <strong>The counterintuitive math:</strong> Medigap's higher premium can make it <em>cheaper</em> at moderate and high healthcare usage levels than Medicare Advantage, because Medigap's predictable costs replace uncertain out-of-pocket exposure. The break-even point for Plan G vs. Medicare Advantage is typically 2–4 hospitalizations or specialty procedures per year.</p>
            </div>
          </section>

          <section id="enrollment">
            <div className={styles['section-label']}>Enrollment Rules</div>
            <h2>Critical Medigap Enrollment Rules — Don't Miss Your Window</h2>
            <div className={styles['warn-box']}>
              <p>⚠️ <strong>The most important Medicare decision:</strong> You have a one-time 6-month Medigap Open Enrollment Period that begins the month you turn 65 AND are enrolled in Medicare Part B. During this window, insurers MUST offer you any Medigap plan at standard rates regardless of health status. After this window closes, in most states, insurers can use medical underwriting — meaning they can charge you more or deny coverage entirely based on pre-existing conditions.</p>
            </div>
            <ol style={{ paddingLeft: '20px', lineHeight: '2.2', fontSize: '15px', color: 'var(--text-mid)' }}>
              <li><strong>Apply for Medicare 3 months before turning 65</strong> — Medicare Part A and Part B eligibility begins at 65</li>
              <li><strong>Choose Medigap plan during the 6-month open enrollment period</strong> — guaranteed issue rights; no medical underwriting</li>
              <li><strong>Add a separate Part D drug plan</strong> if choosing Medigap (drug coverage not bundled)</li>
              <li><strong>Add dental/vision separately</strong> — standalone dental insurance runs $20–$50/month</li>
              <li><strong>Review annually during Medicare Annual Enrollment Period</strong> (Oct 15–Dec 7) — can switch Medicare Advantage plans or Part D drug plans</li>
            </ol>
          </section>

          <section id="faq" aria-label="Frequently Asked Questions" className={styles['faq-section']}>
            <h2>Frequently Asked Questions</h2>
            {[
              {
                q: 'Can I switch from Medicare Advantage to Medigap?',
                a: "Switching from Medicare Advantage back to Original Medicare + Medigap after your initial enrollment window has closed is possible but may require medical underwriting in most states (meaning you can be denied or charged higher premiums based on health conditions). Connecticut, Maine, Massachusetts, Minnesota, New York, and Vermont have more consumer-friendly rules that allow switching more freely. If you chose Medicare Advantage at 65 but want Medigap coverage, consult with a licensed Medicare broker about your state's rules before making any changes."
              },
              {
                q: 'Does Medigap cover prescription drugs?',
                a: "No — Medigap plans (including Plan G and Plan N) do not include prescription drug coverage. If you choose Medigap, you need to enroll in a separate Medicare Part D plan for prescription drug coverage. Medicare Advantage plans (Part C) typically bundle drug coverage (MAPD — Medicare Advantage Prescription Drug plans). When comparing total costs, include the Part D premium ($46/month average in 2025) when comparing Medigap total cost against Medicare Advantage."
              },
              {
                q: 'What does Medicare not cover that I should plan for?',
                a: "Original Medicare (Parts A+B), Medigap, and even most Medicare Advantage plans do not cover: (1) Dental care — routine exams, cleanings, fillings, dentures; (2) Hearing aids and routine hearing exams; (3) Routine vision care and glasses; (4) Long-term custodial care — the most expensive gap. 70% of Americans turning 65 will need some long-term care (HHS); nursing home private room costs approximately $127,750/year (Genworth 2024); Medicare only covers skilled nursing care short-term after hospitalization."
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
              <li>Centers for Medicare & Medicaid Services (CMS), Medicare 2025 Costs and Coverage (Medicare.gov)</li>
              <li>KFF, Medicare at a Glance 2025; KFF Medigap Enrollment Data</li>
              <li>Fidelity Investments, Retiree Health Care Cost Estimate 2024 ($413,000 estimate for couple)</li>
              <li>Genworth/CareScout, Cost of Care Survey 2024</li>
              <li>HHS/ACL, Long-Term Care Statistics</li>
              <li>Plootus Research 2026</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles['toc-box']}>
            <h3>On This Page</h3>
            <ul>
              <li><a href="#comparison">Plan Comparison</a></li>
              <li><a href="#cost-comparison">Cost Analysis</a></li>
              <li><a href="#enrollment">Enrollment Rules</a></li>
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
            <div onClick={() => router.push('/healthcare-costs-in-retirement')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ Healthcare Costs in Retirement</div>
            <div onClick={() => router.push('/long-term-care-costs')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ Long-Term Care Costs</div>
            <div onClick={() => router.push('/hsa-contribution-limits')} style={{cursor: 'pointer', color: 'var(--blue)', marginBottom: '8px'}}>→ HSA Contribution Limits</div>
            <div onClick={() => router.push('/how-much-to-retire')} style={{cursor: 'pointer', color: 'var(--blue)'}}>→ How Much Do I Need to Retire?</div>
          </div>
          <div className={styles['sidebar-card']} style={{ background: 'var(--off-white)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '8px' }}>Key Stat</p>
            <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.45, marginBottom: '5px' }}>"Medigap Plan G costs $2,657-$3,857/year but provides predictable coverage with virtually no surprise bills — unlike Medicare Advantage with up to $9,350 out-of-pocket risk."</p>
            <p style={{ fontSize: '11px', color: 'var(--text-light)', margin: 0 }}>Source: CMS 2025; Plootus Research 2026</p>
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

export default MedicareSuplementMedigapComparison;
