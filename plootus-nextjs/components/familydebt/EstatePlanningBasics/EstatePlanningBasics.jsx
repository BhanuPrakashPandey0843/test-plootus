import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Chart from 'chart.js/auto';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';
import styles from './EstatePlanningBasics.module.css';

const EstatePlanningBasics = () => {
  const [activeTab, setActiveTab] = useState('family-debt');
  const [openFaq, setOpenFaq] = useState(null);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['$250,000\nEstate', '$500,000\nEstate', '$750,000\nEstate', '$1M\nEstate', '$2M\nEstate', '$3M\nEstate'],
          datasets: [{
            label: 'Probate Cost (avg. 4%)',
            data: [10000, 20000, 30000, 40000, 80000, 120000],
            backgroundColor: 'rgba(224,49,49,0.80)',
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: c => '$' + c.parsed.y.toLocaleString() } }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: { callback: v => '$' + (v/1000).toFixed(0) + 'K', font: { family: 'Plus Jakarta Sans', size: 11 } },
              grid: { color: '#E2E8F4' }
            },
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
      <HubNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>📜 Estate Planning Starter Guide · 2026</div>
          <h1>Estate Planning Basics: Wills, Trusts, Beneficiaries & Powers of Attorney</h1>
          <p className={styles.heroSub}>68% of Americans have no will. Most people think estate planning is only for the wealthy — it isn't. It's for anyone who has money, property, dependents, or wishes about their own medical care. Here's the complete starter guide: 4 documents every adult needs, wills vs. trusts compared, and why your beneficiary form beats your will every time.</p>
          <div className={styles.heroMeta}>
            <span>📚 Sources: American Bar Association, AARP, Martindale-Nolo Survey, Uniform Law Commission</span>
            <span>🗓️ 2026 Thresholds & Federal Estate Tax Limits</span>
          </div>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.statItem}><span className={styles.statNum}>68%</span><span className={styles.statLabel}>of Americans Have No Will</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>3–7%</span><span className={styles.statLabel}>of Estate Value Lost to Probate Costs</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>$13.99M</span><span className={styles.statLabel}>Federal Estate Tax Exemption 2026 (per person)</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>4 Docs</span><span className={styles.statLabel}>Every Adult Needs — Regardless of Wealth</span></div>
        </div>
      </div>

      <div className={styles.pageBody}>
        <main className={styles.mainContent}>
          {/* OVERVIEW */}
          <section id="overview">
            <div className={styles.sectionLabel}>Why Everyone Needs This</div>
            <h2>Estate Planning: Not Just for the Wealthy</h2>
            <p>Estate planning is the process of arranging what happens to your assets, your medical decisions, and your dependents when you can no longer make those choices yourself — whether due to death, disability, or incapacity. It is not a one-time event only for the rich. It is a set of legal documents that every adult over 18 needs.</p>
            <p>Without a plan, your state's intestacy laws decide who gets your assets — which may not be the people you'd choose. Courts appoint a guardian for your minor children — which may not be the person you'd choose. Hospitals may not consult your partner or family because they're not legally authorized — even if you'd want them to be. Estate planning is how you take back control of these decisions.</p>

            <div className={styles.keyStatsGrid}>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum}>68%</div>
                <div className={styles.keyStatLabel}>of Americans Have No Will or Estate Plan</div>
                <div className={styles.keyStatSource}>Martindale-Nolo Research 2024</div>
                <div className={styles.keyStatDesc}>The most commonly cited reasons: "I haven't gotten around to it" (40%), "I don't have enough assets" (33%), and "It's too expensive" (21%). Online will services start under $200. Attorney-drafted wills range from $300–$1,500 for most people.</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum}>6–24 Months</div>
                <div className={styles.keyStatLabel}>Typical Time for an Estate to Clear Probate</div>
                <div className={styles.keyStatSource}>American Bar Association</div>
                <div className={styles.keyStatDesc}>Probate is the court-supervised process for validating a will and distributing assets. It is public, slow, and costly — typically 3–7% of the gross estate value in legal fees and court costs. A revocable living trust avoids probate entirely.</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum}>$13.99M</div>
                <div className={styles.keyStatLabel}>Federal Estate Tax Exemption Per Person (2026)</div>
                <div className={styles.keyStatSource}>IRS Rev. Proc. 2025-28</div>
                <div className={styles.keyStatDesc}>Estates below this threshold owe no federal estate tax. The exemption is scheduled to revert to roughly $7M per person on January 1, 2026 when the TCJA sunsets — making 2025 a critical planning window for high-net-worth families. Married couples can effectively double the exemption via portability.</div>
              </div>
              <div className={styles.keyStatCard}>
                <div className={styles.keyStatNum}>$0</div>
                <div className={styles.keyStatLabel}>Value of a Will for Assets with Beneficiary Designations</div>
                <div className={styles.keyStatSource}>IRS / ERISA rules</div>
                <div className={styles.keyStatDesc}>Your will has no power over retirement accounts (401k, IRA), life insurance, annuities, or transfer-on-death accounts. Those go directly to whoever is named on the beneficiary form — even if your will says otherwise. Outdated beneficiary forms are one of the most common and expensive estate planning mistakes.</div>
              </div>
            </div>

            <div className={`${styles.callout} ${styles.red}`}>
              <p><strong>🚨 The Beneficiary Form Always Wins:</strong> If your IRA beneficiary form still names your ex-spouse from a 2009 divorce, your ex-spouse gets the IRA — regardless of your current will, your remarriage, or your wishes. The beneficiary designation is a legal contract with the financial institution that supersedes your will. Review all beneficiary forms today.</p>
            </div>
          </section>

          {/* FOUR CORE DOCUMENTS */}
          <section id="documents">
            <div className={styles.sectionLabel}>The Four Essentials</div>
            <h2>The 4 Documents Every Adult Needs</h2>
            <p>Think of these as a set — each one covers a different gap. A will alone is not a complete estate plan. Financial and healthcare decisions need their own separate legal documents, and these work together to cover every scenario: death, incapacity, and medical emergency.</p>

            <div className={styles.docGrid}>
              <div className={`${styles.docCard} ${styles.dcBlue}`}>
                <div className={styles.docIcon}>📜</div>
                <span className={styles.docNum}>Document 1</span>
                <div className={styles.docTitle}>Last Will & Testament</div>
                <div className={styles.docSubtitle}>Directs your probate estate after death</div>
                <ul className={styles.docCovers}>
                  <li>Names your beneficiaries for probate assets</li>
                  <li>Appoints an executor to manage the estate process</li>
                  <li>Names a guardian for minor children — critical for parents</li>
                  <li>Specifies wishes for personal property, sentimental items</li>
                  <li>Can establish testamentary trusts for minors or special needs</li>
                  <li>Directs funeral and burial preferences</li>
                </ul>
                <div className={styles.docWarning}>⚠ Does NOT control: retirement accounts, life insurance, jointly held property, or TOD/POD accounts. These bypass the will entirely via beneficiary designation.</div>
              </div>

              <div className={`${styles.docCard} ${styles.dcGreen}`}>
                <div className={styles.docIcon}>⚡</div>
                <span className={styles.docNum}>Document 2</span>
                <div className={styles.docTitle}>Durable Power of Attorney</div>
                <div className={styles.docSubtitle}>Financial decisions if you're incapacitated</div>
                <ul className={styles.docCovers}>
                  <li>Authorizes an "agent" to manage your finances</li>
                  <li>Pay bills, file taxes, manage investments during incapacity</li>
                  <li>Sell or manage real estate on your behalf</li>
                  <li>"Durable" means it survives your incapacity (regular POA does not)</li>
                  <li>Can be immediate or "springing" (activates on incapacity)</li>
                  <li>Revocable — you can cancel it at any time while competent</li>
                </ul>
                <div className={styles.docWarning}>⚠ Without this: family must petition a court for guardianship/conservatorship — a costly, public, months-long process just to manage your finances.</div>
              </div>

              <div className={`${styles.docCard} ${styles.dcGold}`}>
                <div className={styles.docIcon}>🏥</div>
                <span className={styles.docNum}>Document 3</span>
                <div className={styles.docTitle}>Healthcare Power of Attorney</div>
                <div className={styles.docSubtitle}>Medical decisions if you can't speak for yourself</div>
                <ul className={styles.docCovers}>
                  <li>Names a healthcare agent (proxy) to make medical decisions</li>
                  <li>Applies when you are unconscious, incapacitated, or incompetent</li>
                  <li>Agent can consent to or refuse treatments, surgery, medications</li>
                  <li>Can authorize or deny life-sustaining treatment</li>
                  <li>Often combined with a HIPAA Authorization form</li>
                  <li>Each state has its own form — use your state's version</li>
                </ul>
                <div className={styles.docWarning}>⚠ Without this: hospitals default to next-of-kin hierarchy (spouse → adult children → parents → siblings). Unmarried partners have no legal standing without this document.</div>
              </div>

              <div className={`${styles.docCard} ${styles.dcRed}`}>
                <div className={styles.docIcon}>📋</div>
                <span className={styles.docNum}>Document 4</span>
                <div className={styles.docTitle}>Advance Directive (Living Will)</div>
                <div className={styles.docSubtitle}>Your end-of-life medical wishes, in writing</div>
                <ul className={styles.docCovers}>
                  <li>Specifies your wishes for life-sustaining treatment</li>
                  <li>Ventilators, feeding tubes, CPR — yes or no, under what conditions</li>
                  <li>Addresses artificial nutrition and hydration</li>
                  <li>Can specify organ and tissue donation preferences</li>
                  <li>Guides your healthcare agent when making decisions</li>
                  <li>Recognized in all 50 states (form varies by state)</li>
                </ul>
                <div className={styles.docWarning}>⚠ Without this: your healthcare agent must guess your wishes — or family members may disagree, leading to painful conflict during an already devastating time.</div>
              </div>
            </div>

            <div className={`${styles.callout} ${styles.green}`}>
              <p><strong>✅ Bonus: HIPAA Authorization.</strong> A separate HIPAA Authorization allows designated people to access your medical records and speak with your doctors — even if you're not incapacitated. Without it, hospitals may refuse to share information with a spouse, parent, or adult child. This is a one-page form, often provided free by your doctor's office or hospital, and is separate from the Healthcare POA.</p>
            </div>
          </section>

          {/* WILL VS TRUST */}
          <section id="will-vs-trust">
            <div className={styles.sectionLabel}>The Core Decision</div>
            <h2>Will vs. Revocable Living Trust — Which Do You Need?</h2>
            <p>This is the most common question in estate planning, and the honest answer depends on your estate size, the number of properties you own, your state's probate costs, and how much privacy matters to you. A will is the right starting point for most people. A trust adds meaningful benefits once your estate is more complex.</p>

            <div className={styles.dataTableWrap}>
              <table className={styles.compareTable}>
                <thead>
                  <tr><th>Factor</th><th>Last Will & Testament</th><th>Revocable Living Trust</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Probate required?</strong></td>
                    <td style={{ color: 'var(--red)' }}>Yes — must go through court</td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>No — assets transfer directly to beneficiaries</td>
                  </tr>
                  <tr>
                    <td><strong>Timeline to distribute assets</strong></td>
                    <td style={{ color: 'var(--red)' }}>6–24 months through probate court</td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>Days to weeks — no court involvement</td>
                  </tr>
                  <tr>
                    <td><strong>Privacy</strong></td>
                    <td style={{ color: 'var(--red)' }}>Public record — anyone can see assets/beneficiaries</td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>Completely private — never public record</td>
                  </tr>
                  <tr>
                    <td><strong>Cost to create</strong></td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>$300–$1,500 (attorney) or $100–$300 (online)</td>
                    <td style={{ color: 'var(--gold)' }}>$1,500–$3,500+ (attorney-drafted recommended)</td>
                  </tr>
                  <tr>
                    <td><strong>Incapacity protection</strong></td>
                    <td style={{ color: 'var(--red)' }}>No — activates only at death</td>
                    <td style={{ color: 'var(--green)', fontWeight: 600 }}>Yes — trustee can manage if you're incapacitated</td>
                  </tr>
                  <tr>
                    <td><strong>Best for</strong></td>
                    <td>Younger adults, simpler estates, single-state owners</td>
                    <td>Larger estates, multiple properties, blended families</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={`${styles.callout} ${styles.gold}`}>
              <p><strong>⚠️ The Unfunded Trust Problem:</strong> A revocable living trust only works for assets that are legally transferred into it — a process called "funding" the trust. If you create a trust but forget to retitle your home and accounts, those assets still go through probate as if the trust didn't exist.</p>
            </div>

            <div className={styles.chartBox}>
              <h3>Probate Cost as % of Estate Value — How Much a Living Trust Could Save</h3>
              <canvas ref={chartRef} height="220"></canvas>
              <p className={styles.chartSource}>Probate costs include attorney fees, executor fees, court filing fees, and appraisal costs. Estimates based on typical state statutory fee schedules. Plootus Research 2026.</p>
            </div>
          </section>

          {/* BENEFICIARIES */}
          <section id="beneficiaries">
            <div className={styles.sectionLabel}>Most Overlooked Step</div>
            <h2>Beneficiary Designations — The Document That Beats Your Will</h2>
            <p>Beneficiary designations are legally binding contracts that bypass your will entirely. They are the most powerful and most neglected part of estate planning. Millions of people have outdated designations naming ex-spouses or deceased relatives.</p>

            <div className={styles.dataTableWrap}>
              <table className={styles.priorityTable}>
                <thead>
                  <tr><th>Asset Type</th><th>Controlled by Will?</th><th>Controlled by Beneficiary Form?</th></tr>
                </thead>
                <tbody>
                  <tr><td>401(k) / 403(b) / IRA</td><td style={{ color: 'var(--red)' }}>No</td><td style={{ color: 'var(--green)', fontWeight: 600 }}>Yes — always</td></tr>
                  <tr><td>Life insurance policy</td><td style={{ color: 'var(--red)' }}>No</td><td style={{ color: 'var(--green)', fontWeight: 600 }}>Yes — always</td></tr>
                  <tr><td>TOD/POD Accounts</td><td style={{ color: 'var(--red)' }}>No</td><td style={{ color: 'var(--green)', fontWeight: 600 }}>Yes — bypasses probate</td></tr>
                  <tr><td>Solely owned real estate</td><td style={{ color: 'var(--green)', fontWeight: 600 }}>Yes — controlled by will</td><td>No beneficiary form exists</td></tr>
                  <tr><td>Personal property</td><td style={{ color: 'var(--green)', fontWeight: 600 }}>Yes — controlled by will</td><td>No beneficiary form exists</td></tr>
                </tbody>
              </table>
            </div>


          </section>

          {/* PROBATE BY STATE */}
          <section id="probate">
            <div className={styles.sectionLabel}>Probate Costs</div>
            <h2>Probate Costs & Complexity by State</h2>
            <div className={styles.dataTableWrap}>
              <table className={styles.dataTable}>
                <thead>
                  <tr><th>State</th><th>Probate Cost Est.</th><th>Trust Planning Priority</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>California</strong></td><td style={{ color: 'var(--red)', fontWeight: 700 }}>4–7%+ (statutory)</td><td style={{ color: 'var(--red)', fontWeight: 700 }}>Very High</td></tr>
                  <tr><td><strong>Florida</strong></td><td style={{ color: 'var(--red)' }}>3–5%</td><td style={{ color: 'var(--red)' }}>High</td></tr>
                  <tr><td><strong>New York</strong></td><td style={{ color: 'var(--gold)' }}>2–5%</td><td style={{ color: 'var(--gold)' }}>Moderate–High</td></tr>
                  <tr><td><strong>Texas</strong></td><td style={{ color: 'var(--green)' }}>1–3%</td><td style={{ color: 'var(--green)' }}>Lower</td></tr>
                  <tr><td><strong>Wisconsin</strong></td><td style={{ color: 'var(--green)' }}>1–2%</td><td style={{ color: 'var(--green)' }}>Low–Moderate</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CHECKLIST */}
          <section id="checklist">
            <div className={styles.sectionLabel}>Action Plan</div>
            <h2>Estate Planning Checklist — Start Here</h2>
            <ul className={styles.checklist}>
              <li className={`${styles['checklist-item']} ${styles.priority}`}>
                <div className={styles['check-box']}>!</div>
                <div>
                  <div className={styles['checklist-label']}>Review & update all beneficiary designations <span className={styles['checklist-priority']}>Do First</span></div>
                  <div className={styles['checklist-sublabel']}>Check every retirement account, life insurance policy, and bank account.</div>
                </div>
              </li>
              <li className={`${styles['checklist-item']} ${styles.priority}`}>
                <div className={styles['check-box']}>!</div>
                <div>
                  <div className={styles['checklist-label']}>Draft or update your Last Will & Testament <span className={styles['checklist-priority']}>Do First</span></div>
                  <div className={styles['checklist-sublabel']}>Names beneficiaries and a guardian for minor children.</div>
                </div>
              </li>
              <li className={`${styles['checklist-item']} ${styles.priority}`}>
                <div className={styles['check-box']}>!</div>
                <div>
                  <div className={styles['checklist-label']}>Execute a Durable Power of Attorney for finances <span className={styles['checklist-priority']}>Do First</span></div>
                  <div className={styles['checklist-sublabel']}>Name someone to manage finances if you're incapacitated.</div>
                </div>
              </li>
              <li className={`${styles['checklist-item']} ${styles.priority}`}>
                <div className={styles['check-box']}>!</div>
                <div>
                  <div className={styles['checklist-label']}>Sign a Healthcare POA & Advance Directive <span className={styles['checklist-priority']}>Do First</span></div>
                  <div className={styles['checklist-sublabel']}>Use your state's specific form for medical decisions.</div>
                </div>
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section id="faq">
            <div className={styles.sectionLabel}>FAQ</div>
            <h2>Estate Planning FAQ</h2>
            {[
              { q: "Do I need an estate attorney or can I use an online service?", a: "Online services are sufficient for many straightforward situations. An attorney is recommended for minor children, business owners, blended families, or high-net-worth estates." },
              { q: "What happens if I die without a will (intestate)?", a: "State laws determine who gets your assets, often following a hierarchy of spouse, children, and then other relatives. Unmarried partners typically receive nothing." },
              { q: "Does my retirement account go through my will?", a: "No. Retirement accounts and life insurance pass directly to whoever you've named on the beneficiary form, bypassing your will entirely." },
              { q: "What is the difference between a revocable and irrevocable trust?", a: "A revocable trust can be changed and avoids probate but doesn't protect from creditors. An irrevocable trust generally cannot be changed and can reduce estate taxes." }
            ].map((faq, index) => (
              <div key={index} className={`${styles.faqItem} ${openFaq === index ? styles.open : ''}`}>
                <button className={styles.faqQ} onClick={() => toggleFaq(index)}>
                  {faq.q} <span className={styles.faqIcon}>+</span>
                </button>
                {openFaq === index && <div className={styles.faqA}>{faq.a}</div>}
              </div>
            ))}
          </section>

          <div className={styles.sourcesBox}>
            <h4>Sources</h4>
            <p>American Bar Association · AARP Estate Planning Guides · IRS Rev. Proc. 2025-28 · TCJA §11061 · ERISA §205 · Martindale-Nolo Research 2024</p>
          </div>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <h4>On This Page</h4>
            <ul className={styles.tocList}>
              <li><a href="#overview">Why Everyone Needs This</a></li>
              <li><a href="#documents">4 Core Documents</a></li>
              <li><a href="#will-vs-trust">Will vs. Living Trust</a></li>
              <li><a href="#beneficiaries">Beneficiary Designations</a></li>
              <li><a href="#probate">Probate Costs by State</a></li>
              <li><a href="#checklist">Action Plan</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className={styles.ctaCard}>
            <h4>What's my retirement number?</h4>
            <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
            <Link href="/retirement-calculator" className={styles.ctaBtn}>Check Here</Link>
          </div>
          <div className={styles.sidebarCard}>
            <h4>Related Guides</h4>
            <ul className={styles.relatedLinks}>
              <li><Link href="/retirement-planning">Retirement Planning Guide</Link></li>
              <li><Link href="/roth-vs-traditional">Roth vs. Traditional IRA</Link></li>
              <li><Link href="/social-security-benefits">Social Security Benefits</Link></li>
              <li><Link href="/long-term-care-costs">Long-Term Care Costs</Link></li>
              <li><Link href="/ira-contribution-limits">IRA Contribution Limits 2026</Link></li>
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

export default EstatePlanningBasics;
