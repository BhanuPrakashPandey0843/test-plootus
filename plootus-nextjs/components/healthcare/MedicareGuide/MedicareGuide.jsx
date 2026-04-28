import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Chart from 'chart.js/auto';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';
import styles from './MedicareGuide.module.css';

const MedicareGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState(null);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['≤$106K\n(Standard)', '$106K–$133K\nTier 1', '$133K–$167K\nTier 2', '$167K–$200K\nTier 3', '$200K–$500K\nTier 4', '>$500K\nTier 5'],
          datasets: [{
            label: '2026 Monthly Part B Premium',
            data: [185.00, 259.00, 370.00, 480.90, 591.90, 628.90],
            backgroundColor: [
              'rgba(44,182,125,0.85)',
              'rgba(59,91,219,0.7)',
              'rgba(245,159,0,0.75)',
              'rgba(245,159,0,0.9)',
              'rgba(224,49,49,0.75)',
              'rgba(224,49,49,0.95)'
            ],
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: c => '$' + c.parsed.y.toFixed(2) + '/month' } }
          },
          scales: {
            y: {
              ticks: { callback: v => '$' + v, font: { family: 'Plus Jakarta Sans', size: 11 } },
              grid: { color: '#E2E8F4' },
              min: 0,
              max: 700
            },
            x: { ticks: { font: { family: 'Plus Jakarta Sans', size: 10 } }, grid: { display: false } }
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
        <title>Medicare Guide 2026: Parts A, B, C & D Explained | Plootus</title>
        <meta name="description" content="Complete Medicare guide for 2026. Parts A, B, C, and D explained side-by-side — what each covers, what each costs, and every enrollment window you need to know." />
      </Head>

      <HubNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>🏥 Medicare.gov · CMS 2026 Official Data</div>
          <h1>Medicare Guide 2026: Parts A, B, C & D Explained</h1>
          <p className={styles.heroSub}>Medicare's four parts cover very different things — and the costs, gaps, and enrollment windows catch millions of Americans off guard every year. Here's everything you need to know before you turn 65.</p>
          <div className={styles.heroMeta}>
            <span>📚 Sources: CMS.gov, Medicare.gov, IRMAA 2026 thresholds, Kaiser Family Foundation</span>
            <span>🗓️ 2026 Premiums & Deductibles</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}><span className={styles.statNum}>67M</span><span className={styles.statLabel}>Americans on Medicare (2025)</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>$185/mo</span><span className={styles.statLabel}>Part B Standard Premium 2026</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>$0</span><span className={styles.statLabel}>Part A Premium for Most Enrollees</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>$315K</span><span className={styles.statLabel}>Avg. Couple Healthcare Cost in Retirement</span></div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent}>
          {/* OVERVIEW */}
          <section id="overview">
            <div className={styles.sectionLabel}>The Big Picture</div>
            <h2>Medicare at a Glance — What You're Actually Getting</h2>
            <p>Medicare is federal health insurance for people 65 and older, plus certain younger people with disabilities. It is not free, it does not cover everything, and the structure of four separate "Parts" confuses nearly everyone approaching 65. Understanding what each part does — and doesn't cover — is the essential first step.</p>

            <div className={styles.keyStatsGrid}>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum}>$315,000</div>
                <div className={styles.keyStatLabel}>Avg. Healthcare Cost for a 65-Year-Old Couple in Retirement</div>
                <div className={styles.keyStatSource}>Fidelity Retiree Health Care Cost Estimate, 2024</div>
                <div className={styles.keyStatDesc}>This covers premiums, deductibles, copays, and out-of-pocket costs — but does not include long-term care. Medicare covers roughly 62% of healthcare spending for beneficiaries.</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum}>80%</div>
                <div className={styles.keyStatLabel}>Of Approved Costs Covered by Original Medicare (Parts A+B)</div>
                <div className={styles.keyStatSource}>Medicare.gov</div>
                <div className={styles.keyStatDesc}>The remaining 20% after the Part B deductible is your responsibility — with no annual out-of-pocket maximum in Original Medicare, leaving significant financial exposure without a Medigap plan.</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum}>7 in 10</div>
                <div className={styles.keyStatLabel}>Medicare Beneficiaries Supplement with Additional Coverage</div>
                <div className={styles.keyStatSource}>KFF Medicare Policy, 2024</div>
                <div className={styles.keyStatDesc}>Original Medicare's gaps are significant. Most beneficiaries add Medicare Advantage, a Medigap supplement, or employer retiree coverage to limit their out-of-pocket exposure.</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum}>10%</div>
                <div className={styles.keyStatLabel}>Permanent Part B Premium Penalty Per Year Enrolled Late</div>
                <div className={styles.keyStatSource}>Medicare.gov · 2026</div>
                <div className={styles.keyStatDesc}>Miss your Initial Enrollment Period without a qualifying exception and you'll pay 10% more on your Part B premium for every 12-month period you delayed — for life. Part D has a similar penalty.</div>
              </div>
            </div>

            <div className={`${styles.callout} ${styles.blue}`}>
              <p><strong>🗺 How to Use This Guide:</strong> Start with the four Parts section to understand what each covers, then check the costs section for 2026 numbers, the enrollment windows section to know your deadlines, and finally the planning section to decide between Original Medicare and Medicare Advantage.</p>
            </div>
          </section>

          {/* THE FOUR PARTS */}
          <section id="parts">
            <div className={styles.sectionLabel}>The Four Parts</div>
            <h2>Medicare Parts A, B, C & D — Side by Side</h2>
            <p>Think of Medicare in two layers. The bottom layer is <strong>Original Medicare</strong> — Part A (hospital) and Part B (medical). The top layer is optional add-ons: <strong>Part C</strong> (Medicare Advantage, a private plan that replaces Parts A+B) and <strong>Part D</strong> (prescription drugs). You must understand both layers to choose correctly.</p>

            <div className={styles.partsGrid}>
              <div className={`${styles.partCard} ${styles.partA}`}>
                <div className={styles.partBadge}>🏥 Part A</div>
                <div className={styles.partTitle}>Hospital Insurance</div>
                <div className={styles.partSubtitle}>Inpatient care & facility stays</div>
                <div className={styles.partCost}>$0/month</div>
                <div className={styles.partCostLabel}>Premium — for most people (160+ quarters of Medicare taxes)</div>
                <ul className={styles.partCovers}>
                  <li>Inpatient hospital stays (after deductible)</li>
                  <li>Skilled nursing facility care (days 1–100, with conditions)</li>
                  <li>Home health care (medically necessary, intermittent)</li>
                  <li>Hospice care (comfort care for terminal illness)</li>
                  <li>Inpatient mental health care</li>
                  <li>Inpatient rehab facility stays</li>
                </ul>
                <div className={styles.partDoesntCover}>✗ Custodial long-term care · Dental · Vision · Hearing</div>
              </div>

              <div className={`${styles.partCard} ${styles.partB}`}>
                <div className={styles.partBadge}>🩺 Part B</div>
                <div className={styles.partTitle}>Medical Insurance</div>
                <div className={styles.partSubtitle}>Outpatient care & doctor visits</div>
                <div className={styles.partCost}>$185/month</div>
                <div className={styles.partCostLabel}>Standard premium 2026 (higher if income &gt; $106,000 single)</div>
                <ul className={styles.partCovers}>
                  <li>Doctor visits and specialist consultations</li>
                  <li>Outpatient surgery and procedures</li>
                  <li>Diagnostic tests (lab work, imaging, X-rays)</li>
                  <li>Preventive screenings (mammograms, colonoscopies, etc.)</li>
                  <li>Durable medical equipment (wheelchairs, walkers)</li>
                  <li>Mental health services (outpatient)</li>
                  <li>Physical, occupational, and speech therapy</li>
                  <li>Some home health care and ambulance services</li>
                </ul>
                <div className={styles.partDoesntCover}>✗ Dental · Vision · Hearing aids · Prescription drugs · Long-term care</div>
              </div>

              <div className={`${styles.partCard} ${styles.partC}`}>
                <div className={styles.partBadge}>🏢 Part C</div>
                <div className={styles.partTitle}>Medicare Advantage</div>
                <div className={styles.partSubtitle}>Bundled private alternative to A+B</div>
                <div className={styles.partCost}>$0–$200+/month</div>
                <div className={styles.partCostLabel}>Avg. premium ~$17/mo in 2026; varies widely by plan and region</div>
                <ul className={styles.partCovers}>
                  <li>Everything in Parts A and B (required by law)</li>
                  <li>Usually includes Part D drug coverage</li>
                  <li>Often includes dental, vision, and hearing benefits</li>
                  <li>Annual out-of-pocket maximum (~$8,850 in-network 2026)</li>
                  <li>May include extras: gym memberships, transportation</li>
                  <li>HMO, PPO, PFFS, and SNP plan types available</li>
                </ul>
                <div className={styles.partDoesntCover}>✗ Custodial long-term care · May restrict provider networks · Requires referrals (HMO)</div>
              </div>

              <div className={`${styles.partCard} ${styles.partD}`}>
                <div className={styles.partBadge}>💊 Part D</div>
                <div className={styles.partTitle}>Prescription Drug Coverage</div>
                <div className={styles.partSubtitle}>Standalone drug plans (with Original Medicare)</div>
                <div className={styles.partCost}>~$46/month</div>
                <div className={styles.partCostLabel}>Avg. national base beneficiary premium 2026 (varies by plan)</div>
                <ul className={styles.partCovers}>
                  <li>Prescription medications on the plan's formulary (drug list)</li>
                  <li>Covered drugs at retail pharmacies and mail-order</li>
                  <li>Out-of-pocket cap: $2,000/year starting 2025 (IRA)</li>
                  <li>Medicare Prescription Payment Plan (monthly installments)</li>
                  <li>Coverage in 4 stages: deductible → initial → catastrophic</li>
                </ul>
                <div className={styles.partDoesntCover}>✗ Drugs not on your plan's formulary · Most OTC drugs · Some specialty drugs (may require step therapy)</div>
              </div>
            </div>

            <div className={`${styles.callout} ${styles.red}`}>
              <p><strong>🚫 The Three Big Medicare Gaps:</strong> Original Medicare (Parts A+B) does not cover <strong>dental care</strong>, <strong>vision and eyeglasses</strong>, or <strong>hearing aids</strong> — three of the most common and expensive health needs for people 65+. It also does not cover long-term custodial care or most care received outside the US. Medicare Advantage plans often (but not always) fill some of these gaps.</p>
            </div>
          </section>

          {/* 2026 COSTS */}
          <section id="costs">
            <div className={styles.sectionLabel}>2026 Official Numbers</div>
            <h2>Medicare Costs in 2026 — Premiums, Deductibles & Out-of-Pocket</h2>
            <p>Medicare has three types of cost-sharing: premiums (what you pay monthly regardless of use), deductibles (what you pay before coverage kicks in), and coinsurance/copays (your share of each service). Here are the official 2026 figures from CMS.</p>

            <div className={styles.costGrid}>
              <div className={styles.costCard}>
                <div className={styles.costCardHeader}>
                  <span className={styles.costCardIcon}>🏥</span>
                  <span className={styles.costCardTitle}>Part A — Hospital</span>
                  <span className={styles.costCardBadge} style={{ background: 'var(--blue-light)', color: 'var(--blue)' }}>Most Pay $0 Premium</span>
                </div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>Monthly premium (40+ quarters)</span><span className={styles.costRowVal} style={{ color: 'var(--green)' }}>$0</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>Monthly premium (30–39 quarters)</span><span className={styles.costRowVal}>$284/mo</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>Monthly premium (&lt;30 quarters)</span><span className={styles.costRowVal} style={{ color: 'var(--red)' }}>$518/mo</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>Inpatient deductible (per benefit period)</span><span className={styles.costRowVal}>$1,676</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>Hospital days 1–60 coinsurance</span><span className={styles.costRowVal} style={{ color: 'var(--green)' }}>$0/day</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>Hospital days 61–90 coinsurance</span><span className={styles.costRowVal}>$419/day</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>Lifetime reserve days (91–150)</span><span className={styles.costRowVal} style={{ color: 'var(--red)' }}>$838/day</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>Skilled nursing days 1–20</span><span className={styles.costRowVal} style={{ color: 'var(--green)' }}>$0/day</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>Skilled nursing days 21–100</span><span className={styles.costRowVal}>$209.50/day</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>Skilled nursing days 101+</span><span className={styles.costRowVal} style={{ color: 'var(--red)' }}>$0 — not covered</span></div>
              </div>

              <div className={styles.costCard}>
                <div className={styles.costCardHeader}>
                  <span className={styles.costCardIcon}>🩺</span>
                  <span className={styles.costCardTitle}>Part B — Medical</span>
                  <span className={styles.costCardBadge} style={{ background: 'var(--green-light)', color: '#065f46' }}>Income-Adjusted</span>
                </div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>Standard monthly premium</span><span className={styles.costRowVal}>$185.00/mo</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>Annual deductible</span><span className={styles.costRowVal}>$257</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>Coinsurance after deductible</span><span className={styles.costRowVal}>20% of approved amount</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>Annual out-of-pocket maximum</span><span className={styles.costRowVal} style={{ color: 'var(--red)' }}>None (Original Medicare)</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>IRMAA tier 1 (&gt;$106K / &gt;$212K MFJ)</span><span className={styles.costRowVal}>$259.00/mo</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>IRMAA tier 2 (&gt;$133K / &gt;$266K MFJ)</span><span className={styles.costRowVal}>$370.00/mo</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>IRMAA tier 3 (&gt;$167K / &gt;$334K MFJ)</span><span className={styles.costRowVal}>$480.90/mo</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>IRMAA tier 4 (&gt;$200K / &gt;$400K MFJ)</span><span className={styles.costRowVal}>$591.90/mo</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>IRMAA tier 5 (&gt;$500K / &gt;$750K MFJ)</span><span className={styles.costRowVal} style={{ color: 'var(--red)' }}>$628.90/mo</span></div>
              </div>

              <div className={styles.costCard}>
                <div className={styles.costCardHeader}>
                  <span className={styles.costCardIcon}>💊</span>
                  <span className={styles.costCardTitle}>Part D — Prescription Drugs</span>
                  <span className={styles.costCardBadge} style={{ background: 'var(--red-light)', color: 'var(--red)' }}>Plan Varies</span>
                </div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>Avg. national base premium 2026</span><span className={styles.costRowVal}>~$46/mo</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>Max standard deductible 2026</span><span className={styles.costRowVal}>$590</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>Annual out-of-pocket cap (IRA 2025+)</span><span className={styles.costRowVal} style={{ color: 'var(--green)' }}>$2,000</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>IRMAA tier 1 (&gt;$106K / &gt;$212K MFJ)</span><span className={styles.costRowVal}>+$13.70/mo surcharge</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>IRMAA tier 2 (&gt;$133K / &gt;$266K MFJ)</span><span className={styles.costRowVal}>+$35.30/mo surcharge</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>IRMAA tier 3 (&gt;$167K / &gt;$334K MFJ)</span><span className={styles.costRowVal}>+$57.00/mo surcharge</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>IRMAA tier 4 (&gt;$200K / &gt;$400K MFJ)</span><span className={styles.costRowVal}>+$78.60/mo surcharge</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>IRMAA tier 5 (&gt;$500K / &gt;$750K MFJ)</span><span className={styles.costRowVal} style={{ color: 'var(--red)' }}>+$85.80/mo surcharge</span></div>
              </div>

              <div className={styles.costCard}>
                <div className={styles.costCardHeader}>
                  <span className={styles.costCardIcon}>🏢</span>
                  <span className={styles.costCardTitle}>Part C — Medicare Advantage</span>
                  <span className={styles.costCardBadge} style={{ background: 'var(--gold-light)', color: '#92400e' }}>Private Plans</span>
                </div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>Avg. monthly premium 2026</span><span className={styles.costRowVal}>~$17/mo</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>Range of premiums available</span><span className={styles.costRowVal}>$0 – $200+/mo</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>In-network OOP maximum (CMS limit)</span><span className={styles.costRowVal} style={{ color: 'var(--green)' }}>$9,350 (2026)</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>Combined in+out-of-network OOP max</span><span className={styles.costRowVal}>$14,000 (2026)</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>Still must pay Part B premium?</span><span className={styles.costRowVal} style={{ color: 'var(--red)' }}>Yes — always</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>Drug coverage included?</span><span className={styles.costRowVal}>Usually yes (MAPD plans)</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>Dental/vision/hearing included?</span><span className={styles.costRowVal}>Often yes (varies by plan)</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>Network restriction?</span><span className={styles.costRowVal}>Yes (HMO/PPO networks)</span></div>
                <div className={styles.costRow}><span className={styles.costRowLabel}>Can use any Medicare provider?</span><span className={styles.costRowVal} style={{ color: 'var(--red)' }}>No — in-network only (HMO)</span></div>
              </div>
            </div>

            <div className={`${styles.callout} ${styles.gold}`}>
              <p><strong>⚠️ IRMAA Cliff Warning:</strong> IRMAA (Income-Related Monthly Adjustment Amount) is calculated using your tax return from <strong>2 years prior</strong>. So your 2026 Medicare premiums are based on your 2024 income. A Roth conversion, home sale, or one-time income event can spike you into a higher bracket for a full year. You can appeal using Form SSA-44 if your income has since dropped due to a life-changing event.</p>
            </div>

            <div className={styles.chartBox}>
              <h3>2026 Monthly Medicare Cost by Income Level (Part B Premium + IRMAA Surcharge)</h3>
              <canvas ref={chartRef} height="220"></canvas>
              <p className={styles.chartSource}>Source: CMS.gov 2026 Medicare Costs · Single filer income thresholds shown · Married filing jointly thresholds are approximately double. Plootus Research 2026.</p>
            </div>

            <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '10px', fontStyle: 'italic' }}>* IRMAA thresholds shown are for single filers. MFJ thresholds: $212K / $266K / $334K / $400K / $750K. IRMAA is recalculated annually. Source: CMS.gov (2026).</p>
          </section>

          {/* ENROLLMENT WINDOWS */}
          <section id="enrollment">
            <div className={styles.sectionLabel}>Enrollment Windows</div>
            <h2>Medicare Enrollment Periods — Every Deadline You Need to Know</h2>
            <p>Missing your enrollment window is one of the most expensive Medicare mistakes you can make — penalties are permanent and follow you for life. Here are all the enrollment periods and when each applies to you.</p>

            <div className={styles.timeline}>
              <div className={styles.tlItem}>
                <div className={styles.tlLeft}>
                  <div className={`${styles.tlDot} ${styles.blue}`}>1</div>
                  <div className={styles.tlConnector}></div>
                </div>
                <div className={styles.tlRight}>
                  <div className={`${styles.tlWindow} ${styles.blue}`}>Initial Enrollment Period (IEP)</div>
                  <div className={styles.tlTitle}>Your Primary Window — 7 Months Around Your 65th Birthday</div>
                  <div className={styles.tlDesc}>Runs from 3 months before the month you turn 65 through 3 months after. This is your first and most important opportunity to enroll in Parts A and B. Enroll during the 3 months before your birthday month and coverage starts on the 1st of that month. Enroll in the month of or after and coverage is delayed 1–3 months.</div>
                  <span className={styles.tlTip}>✓ Best strategy: Enroll 3 months before your birthday month for seamless coverage start</span>
                </div>
              </div>

              <div className={styles.tlItem}>
                <div className={styles.tlLeft}>
                  <div className={`${styles.tlDot} ${styles.green}`}>2</div>
                  <div className={styles.tlConnector}></div>
                </div>
                <div className={styles.tlRight}>
                  <div className={`${styles.tlWindow} ${styles.green}`}>Special Enrollment Period (SEP)</div>
                  <div className={styles.tlTitle}>If You Have Employer Coverage — Enroll Within 8 Months of Losing It</div>
                  <div className={styles.tlDesc}>If you or your spouse have active employer group health coverage when you turn 65, you can delay Part B without penalty. You get an 8-month SEP that starts when either (a) the employment ends or (b) the group health coverage ends — whichever comes first. This is the only legitimate reason to delay past 65. COBRA and marketplace plans do not count as qualifying coverage for SEP purposes.</div>
                  <span className={styles.tlPenalty}>⚠ COBRA does not trigger an SEP — enroll before COBRA ends or you'll face a penalty gap</span>
                </div>
              </div>

              <div className={styles.tlItem}>
                <div className={styles.tlLeft}>
                  <div className={`${styles.tlDot} ${styles.gold}`}>3</div>
                  <div className={styles.tlConnector}></div>
                </div>
                <div className={styles.tlRight}>
                  <div className={`${styles.tlWindow} ${styles.gold}`}>General Enrollment Period (GEP)</div>
                  <div className={styles.tlTitle}>Jan 1 – Mar 31 Each Year — Penalty Applies</div>
                  <div className={styles.tlDesc}>If you missed your IEP and don't qualify for a SEP, you can enroll during the GEP (January 1 through March 31 each year). Coverage begins July 1. You will owe a permanent Part B premium penalty of 10% for each 12-month period you were eligible but didn't enroll. Coverage begins the month after enrollment.</div>
                  <span className={styles.tlPenalty}>⚠ 10% permanent penalty on Part B premium per year delayed — no limit on how long this compounds</span>
                </div>
              </div>

              <div className={styles.tlItem}>
                <div className={styles.tlLeft}>
                  <div className={`${styles.tlDot} ${styles.red}`}>4</div>
                </div>
                <div className={styles.tlRight}>
                  <div className={`${styles.tlWindow} ${styles.red}`}>Annual Enrollment Period (AEP) — Part C & D</div>
                  <div className={styles.tlTitle}>Oct 15 – Dec 7 Each Year — Switch or Add Plans</div>
                  <div className={styles.tlDesc}>The Annual Enrollment Period (also called Open Enrollment) runs October 15 through December 7. During this window you can: switch from Original Medicare to Medicare Advantage (or vice versa), switch between Medicare Advantage plans, join, switch, or drop a Part D drug plan. Changes take effect January 1 of the following year. There is also a Medicare Advantage Open Enrollment Period from January 1 – March 31 for those already enrolled in MA.</div>
                  <span className={styles.tlTip}>✓ Review your Part D plan annually — formularies and premiums change every year</span>
                </div>
              </div>
            </div>

            <h3>Late Enrollment Penalties — How Bad Are They?</h3>
            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable}>
                <thead><tr><th>Part</th><th>Penalty Amount</th><th>Duration</th><th>Example Calculation</th><th>How to Avoid</th></tr></thead>
                <tbody>
                  <tr>
                    <td><strong>Part A</strong></td>
                    <td>10% premium surcharge</td>
                    <td>Twice the number of years you delayed</td>
                    <td>Delayed 2 years → pay penalty for 4 years</td>
                    <td>Most people qualify for premium-free Part A — enroll at 65 regardless</td>
                  </tr>
                  <tr>
                    <td><strong>Part B</strong></td>
                    <td style={{ color: 'var(--red)', fontWeight: 600 }}>+10% per 12-month period delayed</td>
                    <td style={{ color: 'var(--red)', fontWeight: 600 }}>Permanent — for life</td>
                    <td>Delayed 3 years: $185 × 1.30 = $240.50/mo forever</td>
                    <td>Enroll at 65 or use SEP if covered by employer group plan</td>
                  </tr>
                  <tr>
                    <td><strong>Part D</strong></td>
                    <td>1% of national base premium × months without coverage</td>
                    <td style={{ color: 'var(--red)', fontWeight: 600 }}>Permanent — for life</td>
                    <td>24 months uncovered: 24% × $46 ≈ $11/mo penalty added</td>
                    <td>Enroll when first eligible or maintain creditable drug coverage (employer plan)</td>
                  </tr>
                  <tr>
                    <td><strong>Part C (Medicare Advantage)</strong></td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>No separate penalty</td>
                    <td>N/A</td>
                    <td>Part B penalty still applies if Part B was delayed</td>
                    <td>Enroll during IEP, SEP, or AEP</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={styles.inlineCta}>
              <div className={styles.inlineCtaText}><h4>Factor Medicare Into Your Retirement Healthcare Budget</h4><p>Plootus models your projected Medicare costs — including IRMAA surcharges based on your income — alongside your full retirement plan.</p></div>
              <Link href="/retirement-calculator" className={styles.inlineCtaBtn}>Check Here</Link>
            </div>
          </section>

          {/* ORIGINAL vs ADVANTAGE */}
          <section id="original-vs-advantage">
            <div className={styles.sectionLabel}>The Biggest Decision</div>
            <h2>Original Medicare vs. Medicare Advantage — How to Choose</h2>
            <p>After deciding when to enroll, the most consequential Medicare choice you'll make is whether to stay in <strong>Original Medicare</strong> (Parts A+B, usually with a Medigap supplement and Part D) or switch to <strong>Medicare Advantage</strong> (Part C). They're fundamentally different systems.</p>

            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable}>
                <thead><tr><th>Factor</th><th>Original Medicare + Medigap + Part D</th><th>Medicare Advantage (Part C)</th></tr></thead>
                <tbody>
                  <tr>
                    <td><strong>Provider choice</strong></td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>Any Medicare-accepting provider in the US</td>
                    <td>In-network only (HMO) or higher cost out-of-network (PPO)</td>
                  </tr>
                  <tr>
                    <td><strong>Out-of-pocket maximum</strong></td>
                    <td>None in Original Medicare; Medigap fills the gap</td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>Required cap — $9,350 in-network (2026)</td>
                  </tr>
                  <tr>
                    <td><strong>Monthly cost</strong></td>
                    <td>$185 (Part B) + ~$150 Medigap + ~$46 Part D = ~$380/mo</td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>$185 (Part B) + ~$17 MA = ~$202/mo (avg.)</td>
                  </tr>
                  <tr>
                    <td><strong>Dental / vision / hearing</strong></td>
                    <td style={{ color: 'var(--red)' }}>Not covered — must buy separate</td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>Often included</td>
                  </tr>
                  <tr>
                    <td><strong>Drug coverage</strong></td>
                    <td>Separate Part D plan required</td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>Usually bundled (MAPD plans)</td>
                  </tr>
                  <tr>
                    <td><strong>Predictability</strong></td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>Very high — Medigap covers most gaps</td>
                    <td>Variable — copays add up; prior authorization required</td>
                  </tr>
                  <tr>
                    <td><strong>Travel / out-of-area care</strong></td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>Any US Medicare provider — great for travel</td>
                    <td style={{ color: 'var(--red)' }}>In-network restrictions; often poor out-of-area coverage</td>
                  </tr>
                  <tr>
                    <td><strong>Medigap availability later</strong></td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>Always eligible to switch back to Original Medicare</td>
                    <td style={{ color: 'var(--red)' }}>May face medical underwriting if switching to Medigap later</td>
                  </tr>
                  <tr>
                    <td><strong>Best for</strong></td>
                    <td>People with ongoing health needs, heavy travel, or specialist care</td>
                    <td>Healthy people in stable markets, cost-conscious retirees, those wanting extra benefits</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={`${styles.callout} ${styles.gold}`}>
              <p><strong>⚠️ The Medigap Lock-In Risk:</strong> When you first turn 65 and enroll in Part B, you have guaranteed issue rights for Medigap — insurers must sell you any plan at standard rates regardless of health. If you join Medicare Advantage first and later want to switch to Original Medicare + Medigap, most states allow insurers to deny your Medigap application or charge higher rates based on your health history. This is the primary reason some experts recommend starting with Original Medicare + Medigap, even if costs are higher initially.</p>
            </div>
          </section>

          {/* MEDIGAP */}
          <section id="medigap">
            <div className={styles.sectionLabel}>Supplement Plans</div>
            <h2>Medigap (Medicare Supplement) Plans — Filling the Gaps</h2>
            <p>Original Medicare pays 80% of approved costs after your deductible — leaving you responsible for 20% with no annual cap. On a $500,000 hospital stay, that's $100,000 out of pocket. Medigap plans (sold by private insurers) cover some or all of that remaining 20%, giving you cost predictability.</p>

            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable}>
                <thead><tr><th>Medigap Plan</th><th>Part A Coinsurance</th><th>Part B Coinsurance (20%)</th><th>Part A Deductible</th><th>Part B Deductible</th><th>Foreign Travel Emergency</th><th>Best For</th></tr></thead>
                <tbody>
                  <tr>
                    <td><strong>Plan G</strong> ⭐ Most Popular</td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>100%</td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>100%</td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>100%</td>
                    <td style={{ color: 'var(--red)' }}>Not covered</td>
                    <td style={{ color: 'var(--green)' }}>80% (up to limits)</td>
                    <td>Most comprehensive for new enrollees; best value after Plan F discontinued</td>
                  </tr>
                  <tr>
                    <td><strong>Plan N</strong></td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>100%</td>
                    <td>Up to $20 copay/visit</td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>100%</td>
                    <td style={{ color: 'var(--red)' }}>Not covered</td>
                    <td style={{ color: 'var(--green)' }}>80%</td>
                    <td>Lower premium than G; accepts small copays; healthy people with few doctor visits</td>
                  </tr>
                  <tr>
                    <td><strong>Plan F</strong> (pre-2020 only)</td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>100%</td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>100%</td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>100%</td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>100%</td>
                    <td style={{ color: 'var(--green)' }}>80%</td>
                    <td>Only available if you turned 65 before Jan 1, 2020 — most comprehensive ever offered</td>
                  </tr>
                  <tr>
                    <td><strong>Plan K</strong></td>
                    <td>50%</td>
                    <td>50%</td>
                    <td>50%</td>
                    <td style={{ color: 'var(--red)' }}>Not covered</td>
                    <td style={{ color: 'var(--red)' }}>Not covered</td>
                    <td>Lower premium; OOP max ~$7,220 (2026); cost-sharing tradeoff</td>
                  </tr>
                  <tr>
                    <td><strong>Plan L</strong></td>
                    <td>75%</td>
                    <td>75%</td>
                    <td>75%</td>
                    <td style={{ color: 'var(--red)' }}>Not covered</td>
                    <td style={{ color: 'var(--red)' }}>Not covered</td>
                    <td>Middle ground; OOP max ~$3,610 (2026)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '10px' }}>Medigap plans are standardized by letter — Plan G from any insurer covers the same benefits as Plan G from any other insurer. Only premiums differ. Premiums vary significantly by state, age, and insurer. Compare multiple carriers. Note: Medigap does not include Part D drug coverage — add a standalone Part D plan.</p>
          </section>

          {/* PLANNING TIPS */}
          <section id="planning">
            <div className={styles.sectionLabel}>Planning Guide</div>
            <h2>Medicare Planning — What to Do and When</h2>
            <ul className={styles.strategyList}>
              <li className={styles.strategyItem}><div className={styles.strategyIcon}>📅</div><div className={styles.strategyContent}><h4>Start Planning at Age 64 — Not 65</h4><p>Your Initial Enrollment Period begins 3 months before your 65th birthday. That means you need to start researching plans, comparing Medigap carriers, and evaluating Part D formularies at least 3–4 months before you turn 65. If you wait until your birthday to start, you may miss the optimal enrollment window or scramble to compare plans under time pressure.</p></div></li>
              <li className={styles.strategyItem}><div className={styles.strategyIcon}>💼</div><div className={styles.strategyContent}><h4>Coordinate With Employer Coverage Carefully</h4><p>If you're still working at 65 with employer group health coverage, you can delay Medicare Parts A and B without penalty — but only if the employer plan is for an active employee. Retiree coverage, COBRA, or ACA marketplace plans do not count. When you do lose qualifying employer coverage, you have 8 months to enroll in Part B without penalty. Don't rely on COBRA as a bridge — it does not trigger a Special Enrollment Period.</p></div></li>
              <li className={styles.strategyItem}><div className={styles.strategyIcon}>📊</div><div className={styles.strategyContent}><h4>Watch Your Income 2 Years Before Medicare Starts</h4><p>IRMAA surcharges are based on your Modified Adjusted Gross Income from 2 years prior. A large Roth conversion, business sale, or other income event at age 63 could spike your Medicare premiums at 65 by $74–$443/month per person. If you're doing Roth conversions, model the IRMAA impact carefully — it may be worth spreading conversions over multiple years or taking smaller conversions to stay below thresholds.</p></div></li>
              <li className={styles.strategyItem}><div className={styles.strategyIcon}>💊</div><div className={styles.strategyContent}><h4>Review Your Part D Plan Every October During AEP</h4><p>Drug plan formularies, premiums, and pharmacy networks change every year. A drug that was Tier 2 (preferred generic) in your plan last year may be Tier 4 (non-preferred brand) next year, tripling your cost. Medicare's Plan Finder tool (medicare.gov/plan-compare) lets you enter your specific drugs and compare total annual costs across all available Part D plans in your area. This 20-minute annual review routinely saves beneficiaries $500–$2,000/year.</p></div></li>
              <li className={styles.strategyItem}><div className={styles.strategyIcon}>🏥</div><div className={styles.strategyContent}><h4>Budget for the Gaps Original Medicare Doesn't Cover</h4><p>Dental, vision, and hearing aid costs are not covered by Original Medicare and are often inadequately covered by Medicare Advantage plans. A single dental implant can cost $3,000–$5,000; hearing aids can run $1,500–$7,000 per pair. Build a dedicated healthcare reserve fund or dental savings plan into your retirement budget — don't assume Medicare covers these just because you're 65.</p></div></li>
              <li className={styles.strategyItem}><div className={styles.strategyIcon}>🌎</div><div className={styles.strategyContent}><h4>Original Medicare Wins for Travelers — Medicare Advantage Doesn't Travel Well</h4><p>If you plan to travel significantly in retirement — including spending winters in another state — Original Medicare with Medigap Plan G is almost always better than Medicare Advantage. Most MA plans are HMOs or PPOs tied to local provider networks. Out-of-network emergency coverage exists but routine care outside your plan's service area is often not covered or very expensive. Original Medicare is accepted by any Medicare-participating provider anywhere in the US.</p></div></li>
            </ul>
          </section>

          {/* FAQ */}
          <section id="faq">
            <div className={styles.sectionLabel}>FAQ</div>
            <h2>Medicare FAQ</h2>
            <div className={`${styles.faqItem} ${openFaq === 0 ? styles.open : ''}`}>
              <button className={styles.faqQ} onClick={() => toggleFaq(0)}>Do I automatically get Medicare at 65? <span className={styles.faqIcon}>+</span></button>
              {openFaq === 0 && <div className={styles.faqA}>It depends. If you're already collecting Social Security benefits before age 65, you are automatically enrolled in Medicare Parts A and B and will receive your Medicare card in the mail about 3 months before your 65th birthday. If you are not yet collecting Social Security, you must actively enroll through SSA.gov, by calling 1-800-772-1213, or by visiting a Social Security office. Don't assume it's automatic — missing the window creates permanent penalties.</div>}
            </div>

            <div className={`${styles.faqItem} ${openFaq === 1 ? styles.open : ''}`}>
              <button className={styles.faqQ} onClick={() => toggleFaq(1)}>What does Medicare not cover? <span className={styles.faqIcon}>+</span></button>
              {openFaq === 1 && <div className={styles.faqA}>Original Medicare (Parts A+B) does NOT cover: routine dental care (cleanings, fillings, dentures, implants), routine vision care and eyeglasses, hearing aids and exams, most cosmetic procedures, long-term custodial care (nursing homes, assisted living), most care outside the United States, and most prescription drugs (Part D is a separate add-on). These are significant gaps — a complete retirement healthcare plan must account for all of them.</div>}
            </div>

            <div className={`${styles.faqItem} ${openFaq === 2 ? styles.open : ''}`}>
              <button className={styles.faqQ} onClick={() => toggleFaq(2)}>When should I sign up for Medicare if I'm still working? <span className={styles.faqIcon}>+</span></button>
              {openFaq === 2 && <div className={styles.faqA}>If you have active employer group health coverage through your own (or your spouse's) current job, you can delay Medicare without penalty. You'll get an 8-month Special Enrollment Period starting when your employment or group coverage ends — whichever comes first. Important: if your employer has fewer than 20 employees, Medicare becomes your primary insurer at 65 whether you enroll or not — check your employer's size. Retiree plans and COBRA do not qualify as active employer coverage for SEP purposes.</div>}
            </div>

            <div className={`${styles.faqItem} ${openFaq === 3 ? styles.open : ''}`}>
              <button className={styles.faqQ} onClick={() => toggleFaq(3)}>Is Medicare Advantage better than Original Medicare? <span className={styles.faqIcon}>+</span></button>
              {openFaq === 3 && <div className={styles.faqA}>Neither is universally better — it depends on your health, financial situation, and lifestyle. Medicare Advantage typically costs less month-to-month and includes dental/vision extras, making it attractive for healthy people managing costs. Original Medicare with a Medigap supplement offers more predictability, freedom to see any US Medicare provider, and is usually better for people with ongoing health needs, frequent specialist care, or significant travel. The key warning: switching from MA back to Original Medicare + Medigap may require medical underwriting — so your initial choice has long-term implications.</div>}
            </div>

            <div className={`${styles.faqItem} ${openFaq === 4 ? styles.open : ''}`}>
              <button className={styles.faqQ} onClick={() => toggleFaq(4)}>How much will I pay for Medicare in 2026? <span className={styles.faqIcon}>+</span></button>
              {openFaq === 4 && <div className={styles.faqA}>For most people: Part A is free (if you worked 40+ quarters). Part B is $185/month standard (higher if income &gt; $106,000 single / $212,000 MFJ). A Medigap Plan G supplement runs approximately $100–$250/month depending on your age and state. A Part D drug plan averages ~$46/month. Total for Original Medicare + Medigap G + Part D: roughly $330–$480/month, or $3,960–$5,760/year per person. Medicare Advantage plans average ~$17/month but still require the Part B premium.</div>}
            </div>

            <div className={`${styles.faqItem} ${openFaq === 5 ? styles.open : ''}`}>
              <button className={styles.faqQ} onClick={() => toggleFaq(5)}>What is the Medicare out-of-pocket maximum? <span className={styles.faqIcon}>+</span></button>
              {openFaq === 5 && <div className={styles.faqA}>Original Medicare (Parts A+B alone) has no out-of-pocket maximum — your 20% coinsurance exposure is theoretically unlimited. This is why most financial planners strongly recommend adding a Medigap supplement if you stay in Original Medicare. Medicare Advantage plans are required to have an out-of-pocket maximum — in 2026, the CMS limit is $9,350 for in-network services and $14,000 for combined in- and out-of-network. Part D now also has a $2,000 annual out-of-pocket cap starting in 2025 under the Inflation Reduction Act.</div>}
            </div>

            <div className={`${styles.faqItem} ${openFaq === 6 ? styles.open : ''}`}>
              <button className={styles.faqQ} onClick={() => toggleFaq(6)}>Can I have both Medicare and employer health insurance? <span className={styles.faqIcon}>+</span></button>
              {openFaq === 6 && <div className={styles.faqA}>Yes — coordination of benefits rules determine who pays first. If you work for an employer with 20+ employees, your employer plan pays first and Medicare is secondary. If your employer has fewer than 20 employees, Medicare pays first (primary) and your employer plan pays secondary. In most cases, carrying employer coverage alongside Medicare is beneficial — but you should understand which plan is primary to avoid surprise bills. Note: if Medicare is primary and you don't enroll, your employer plan may not cover what Medicare would have paid.</div>}
            </div>
          </section>

          <div className={styles.sourcesBox}>
            <h4>Sources</h4>
            <p>CMS.gov — 2026 Medicare Costs (Medicare.gov/costs) · Medicare & You 2026 Handbook (CMS) · Kaiser Family Foundation (KFF) Medicare Policy Data 2024 · Fidelity Retiree Health Care Cost Estimate 2024 · SSA.gov — Medicare Enrollment Periods · CMS IRMAA 2026 Income Thresholds · IRA Inflation Reduction Act Part D Out-of-Pocket Cap ($2,000) · CMS Medicare Advantage OOP Maximum 2026 · Medigap standardized plan benefits (CMS) · National base beneficiary premium 2026 (CMS.gov/medicare/Part-D)</p>
          </div>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <h4>On This Page</h4>
            <ul className={styles.tocList}>
              <li><a href="#overview">At a Glance</a></li>
              <li><a href="#parts">Parts A, B, C & D</a></li>
              <li><a href="#costs">2026 Costs</a></li>
              <li><a href="#enrollment">Enrollment Windows</a></li>
              <li><a href="#original-vs-advantage">Original vs. Advantage</a></li>
              <li><a href="#medigap">Medigap Plans</a></li>
              <li><a href="#planning">Planning Guide</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className={styles.ctaCard}>
            <h4>Factor Medicare Into Your Retirement Plan</h4>
            <p>Plootus models your projected Medicare costs — including IRMAA — alongside your savings, Social Security, and state taxes.</p>
            <Link href="/retirement-calculator" className={styles.ctaBtn}>Check Here</Link>
          </div>
          <div className={styles.sidebarCard}>
            <h4>Related Guides</h4>
            <ul className={styles.relatedLinks}>
              <li><Link href="/healthcare-costs-in-retirement">Healthcare Costs in Retirement</Link></li>
              <li><Link href="/long-term-care-costs">Long-Term Care Costs 2026</Link></li>
              <li><Link href="/medicare-supplement-medigap-comparison">Medigap Plan Comparison</Link></li>
              <li><Link href="/social-security-benefits">Social Security Benefits Guide</Link></li>
              <li><Link href="/roth-conversion-strategy">Roth Conversions & IRMAA</Link></li>
              <li><Link href="/retirement-tax-guide">Retirement Tax Guide</Link></li>
            </ul>
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

export default MedicareGuide;
