import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import styles from './AverageSalaryByState.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const stateData = [
  { state: "Alabama", avg: "$55,420", median: "$46,580", taxGrade: "B-", taxBadge: "badge-blue", savings: "$680K" },
  { state: "Alaska", avg: "$65,280", median: "$54,340", taxGrade: "B", taxBadge: "badge-blue", savings: "$890K" },
  { state: "Arizona", avg: "$62,840", median: "$51,200", taxGrade: "B+", taxBadge: "badge-blue", savings: "$880K" },
  { state: "Arkansas", avg: "$51,030", median: "$42,060", taxGrade: "B-", taxBadge: "badge-blue", savings: "$534K" },
  { state: "California", avg: "$82,760", median: "$67,900", taxGrade: "C", taxBadge: "badge-red", savings: "$1.49M" },
  { state: "Colorado", avg: "$76,540", median: "$62,840", taxGrade: "B", taxBadge: "badge-blue", savings: "$1.15M" },
  { state: "Connecticut", avg: "$80,610", median: "$65,730", taxGrade: "C", taxBadge: "badge-red", savings: "$1.14M" },
  { state: "Delaware", avg: "$63,280", median: "$52,600", taxGrade: "B", taxBadge: "badge-blue", savings: "$870K" },
  { state: "Florida", avg: "$58,960", median: "$49,260", taxGrade: "A+", taxBadge: "badge-green", savings: "$1.01M" },
  { state: "Georgia", avg: "$62,400", median: "$51,740", taxGrade: "B-", taxBadge: "badge-blue", savings: "$825K" },
  { state: "Hawaii", avg: "$65,700", median: "$54,280", taxGrade: "C", taxBadge: "badge-red", savings: "$2.61M" },
  { state: "Idaho", avg: "$56,820", median: "$47,340", taxGrade: "B+", taxBadge: "badge-blue", savings: "$750K" },
  { state: "Illinois", avg: "$67,520", median: "$55,800", taxGrade: "B-", taxBadge: "badge-blue", savings: "$940K" },
  { state: "Indiana", avg: "$58,460", median: "$48,620", taxGrade: "B+", taxBadge: "badge-blue", savings: "$740K" },
  { state: "Iowa", avg: "$58,100", median: "$48,740", taxGrade: "B+", taxBadge: "badge-blue", savings: "$730K" },
  { state: "Kansas", avg: "$59,380", median: "$49,980", taxGrade: "B+", taxBadge: "badge-blue", savings: "$590K" },
  { state: "Kentucky", avg: "$54,380", median: "$45,440", taxGrade: "B-", taxBadge: "badge-blue", savings: "$583K" },
  { state: "Louisiana", avg: "$55,840", median: "$47,220", taxGrade: "B-", taxBadge: "badge-blue", savings: "$600K" },
  { state: "Maine", avg: "$57,460", median: "$48,120", taxGrade: "B", taxBadge: "badge-blue", savings: "$780K" },
  { state: "Maryland", avg: "$79,920", median: "$65,340", taxGrade: "B", taxBadge: "badge-blue", savings: "$1.06M" },
  { state: "Massachusetts", avg: "$88,820", median: "$71,460", taxGrade: "B", taxBadge: "badge-blue", savings: "$1.61M" },
  { state: "Michigan", avg: "$62,560", median: "$52,380", taxGrade: "B", taxBadge: "badge-blue", savings: "$830K" },
  { state: "Minnesota", avg: "$71,460", median: "$58,340", taxGrade: "B", taxBadge: "badge-blue", savings: "$960K" },
  { state: "Mississippi", avg: "$53,940", median: "$44,820", taxGrade: "B-", taxBadge: "badge-blue", savings: "$557K" },
  { state: "Missouri", avg: "$60,080", median: "$50,460", taxGrade: "B+", taxBadge: "badge-blue", savings: "$613K" },
  { state: "Montana", avg: "$54,060", median: "$45,380", taxGrade: "C", taxBadge: "badge-red", savings: "$850K" },
  { state: "Nebraska", avg: "$59,640", median: "$50,220", taxGrade: "B+", taxBadge: "badge-blue", savings: "$800K" },
  { state: "Nevada", avg: "$60,340", median: "$50,100", taxGrade: "A+", taxBadge: "badge-green", savings: "$770K" },
  { state: "New Hampshire", avg: "$71,260", median: "$58,420", taxGrade: "A", taxBadge: "badge-green", savings: "$880K" },
  { state: "New Jersey", avg: "$80,660", median: "$65,580", taxGrade: "C", taxBadge: "badge-red", savings: "$1.23M" },
  { state: "New Mexico", avg: "$56,220", median: "$46,560", taxGrade: "C", taxBadge: "badge-red", savings: "$820K" },
  { state: "New York", avg: "$84,180", median: "$68,240", taxGrade: "C", taxBadge: "badge-red", savings: "$1.43M" },
  { state: "North Carolina", avg: "$61,820", median: "$51,420", taxGrade: "B", taxBadge: "badge-blue", savings: "$810K" },
  { state: "North Dakota", avg: "$63,720", median: "$53,080", taxGrade: "A+", taxBadge: "badge-green", savings: "$780K" },
  { state: "Ohio", avg: "$61,380", median: "$51,620", taxGrade: "B", taxBadge: "badge-blue", savings: "$800K" },
  { state: "Oklahoma", avg: "$55,260", median: "$46,120", taxGrade: "B+", taxBadge: "badge-blue", savings: "$573K" },
  { state: "Oregon", avg: "$69,180", median: "$56,980", taxGrade: "B-", taxBadge: "badge-blue", savings: "$1.11M" },
  { state: "Pennsylvania", avg: "$65,880", median: "$54,540", taxGrade: "B", taxBadge: "badge-blue", savings: "$890K" },
  { state: "Rhode Island", avg: "$65,660", median: "$53,920", taxGrade: "C", taxBadge: "badge-red", savings: "$930K" },
  { state: "South Carolina", avg: "$57,060", median: "$47,880", taxGrade: "B", taxBadge: "badge-blue", savings: "$770K" },
  { state: "South Dakota", avg: "$55,820", median: "$47,080", taxGrade: "A+", taxBadge: "badge-green", savings: "$680K" },
  { state: "Tennessee", avg: "$59,200", median: "$49,760", taxGrade: "A", taxBadge: "badge-green", savings: "$613K" },
  { state: "Texas", avg: "$63,760", median: "$52,980", taxGrade: "A+", taxBadge: "badge-green", savings: "$820K" },
  { state: "Utah", avg: "$62,580", median: "$52,820", taxGrade: "B-", taxBadge: "badge-blue", savings: "$870K" },
  { state: "Vermont", avg: "$59,620", median: "$50,240", taxGrade: "C", taxBadge: "badge-red", savings: "$880K" },
  { state: "Virginia", avg: "$74,860", median: "$60,480", taxGrade: "B", taxBadge: "badge-blue", savings: "$960K" },
  { state: "Washington", avg: "$80,400", median: "$64,800", taxGrade: "B+", taxBadge: "badge-blue", savings: "$1.09M" },
  { state: "West Virginia", avg: "$50,540", median: "$42,180", taxGrade: "B+", taxBadge: "badge-blue", savings: "$558K" },
  { state: "Wisconsin", avg: "$61,900", median: "$51,980", taxGrade: "B+", taxBadge: "badge-blue", savings: "$830K" },
  { state: "Wyoming", avg: "$62,980", median: "$52,460", taxGrade: "A+", taxBadge: "badge-green", savings: "$990K" }
];

const faqs = [
  {
    q: "What state has the highest average salary?",
    a: "Massachusetts has the highest average annual wage of any U.S. state at approximately $88,820, according to Bureau of Labor Statistics Occupational Employment and Wage Statistics (OEWS) 2024 data. New York ($84,180), California ($82,760), Washington ($80,400), and New Jersey ($80,660) round out the top five. Washington D.C. — not a state — has the highest average wage of any U.S. jurisdiction at approximately $109,000+. Source: BLS OEWS 2024."
  },
  {
    q: "What is the average U.S. salary in 2026?",
    a: "Based on Bureau of Labor Statistics data (May 2024 OEWS, most recent available), the average annual wage in the United States is approximately $65,470. The median annual wage is approximately $48,060 — significantly lower than the average due to high-earning professionals skewing the mean. For comparison: the Social Security Administration reports the national average wage index (AWI) for 2024 was approximately $66,621. Source: BLS OEWS 2024; SSA AWI 2024."
  },
  {
    q: "How does average salary relate to how much I need for retirement?",
    a: "Your salary affects retirement planning in two direct ways: (1) It determines your Social Security benefit — SS is calculated based on your 35 highest-earning years. Higher lifetime earnings = higher SS benefit, up to the maximum of $5,108/month at age 70 in 2025. (2) It sets your retirement savings benchmark — Fidelity recommends saving 10× your final salary by retirement. On a $65,000 salary, that's $650,000 in retirement accounts. Your state's cost of living also matters — $65,000 in Mississippi has very different purchasing power than $65,000 in California. Source: SSA; Fidelity 2026."
  },
  {
    q: "Is it worth moving to a high-salary state for retirement savings?",
    a: "Moving to a higher-salary state typically comes with a higher cost of living that offsets much of the salary premium — this is known as geographic arbitrage in reverse. The more financially powerful move for many people is to spend your high-earning career years in a higher-salary state, maximize retirement contributions, then move to a lower-cost, tax-friendly state for retirement. For example: spend your career in New York (avg salary $84,180) maximizing 401(k) contributions, then retire in Tennessee (no income tax, $49,500/yr cost of living) — a combination that can save $1M+ in required savings versus retiring in New York. Source: Plootus Research 2026."
  }
];

const AverageSalaryByState = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const filteredStates = useMemo(() => {
    return stateData.filter(item => 
      item.state.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className={styles.container}>
      <HubNav />

      <div className={styles.hero}>
        <div className={styles['hero-inner']}>
          <p className={styles['hero-eyebrow']}>📊 Data Guide · BLS OEWS 2024 · 50-State Rankings</p>
          <h1>Average Salary by State 2026: Complete 50-State Table</h1>
          <p className={styles['hero-deck']}>
            Average salaries range from $50,540 in West Virginia to $88,820 in Massachusetts — a $38,000 gap. See where your state ranks, how your salary compares, and what it means for your retirement number.
          </p>
          <div className={styles['hero-meta']}>
            <span>📅 Updated April 2026</span><span>📚 Source: BLS OEWS 2024</span><span>⏱ 6 min read</span>
          </div>
        </div>
      </div>

      <div className={styles['stat-strip']}>
        <div className={styles['stat-strip-inner']}>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$65,470</div>
            <div className={styles['stat-label']}>U.S. Average Annual Salary</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$88,820</div>
            <div className={styles['stat-label']}>Highest: Massachusetts</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$50,540</div>
            <div className={styles['stat-label']}>Lowest: West Virginia</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$38K</div>
            <div className={styles['stat-label']}>Salary Gap: High vs. Low</div>
          </div>
        </div>
      </div>

      <div className={styles['page-body']} itemScope itemType="https://schema.org/Article">
        <main className={styles['main-content']} role="main" aria-label="Average Salary by State 2026 — 50-State Table">
          <section id="overview">
            <p className={styles['section-label']}>The Data</p>
            <h2>Average Salary by State — All 50 States (2024 BLS Data)</h2>
            <p>Sorted alphabetically. Tax grade from Plootus's retirement tax analysis. Min. savings = (annual cost − avg SS $24,894) ÷ 4% for retirement purposes.</p>
            <p>
              <input
                id="state-search"
                type="text"
                placeholder="🔍 Search a state..."
                style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '15px', marginBottom: '12px', fontFamily: 'inherit' }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </p>
            <table className={styles['data-table']} id="salary-table" summary="Average and median annual salary by state from BLS OEWS 2024 with retirement tax grade and minimum savings">
              <thead>
                <tr>
                  <th scope="col">State</th>
                  <th scope="col">Avg. Annual<br />Salary</th>
                  <th scope="col">Median<br />Salary</th>
                  <th scope="col">Retire. Tax<br />Grade</th>
                  <th scope="col">Min. Retire.<br />Savings</th>
                </tr>
              </thead>
              <tbody id="salary-body">
                {filteredStates.map((row, index) => (
                  <tr key={index}>
                    <td className={styles.hi}>{row.state}</td>
                    <td data-type="statistic">{row.avg}</td>
                    <td data-type="statistic">{row.median}</td>
                    <td>
                      <span className={`${styles.badge} ${styles[row.taxBadge]}`}>{row.taxGrade}</span>
                    </td>
                    <td data-type="statistic">{row.savings}</td>
                  </tr>
                ))}
                {filteredStates.length === 0 && (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center', padding: '16px' }}>No states found matching "{searchQuery}"</td>
                  </tr>
                )}
              </tbody>
            </table>
            <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '8px' }}>
              Source: BLS Occupational Employment and Wage Statistics (OEWS) May 2024. Tax grades from Plootus Research 2026 based on income tax, SS tax, property tax. Min. savings: (annual retirement cost − avg SS $24,894) ÷ 0.04 (4% rule).
            </p>
          </section>

          <section id="retirement-link">
            <p className={styles['section-label']}>Retirement Connection</p>
            <h2>How Your State Salary Affects Your Retirement Number</h2>
            <p>Your state salary affects retirement in two ways: what you can save (higher salary = higher possible contributions) and what your Social Security benefit will be (calculated from your 35 highest-earning years).</p>
            <div className={styles['highlight-box']}>
              <p>📌 <strong>Fidelity Rule:</strong> Save 10× your final salary by retirement (age 67). On Massachusetts's $88,820 average salary, that target is $888,200. On West Virginia's $50,540, the target is $505,400 — over $380,000 less to accumulate.</p>
            </div>
          </section>

          <section id="faq" aria-label="Frequently Asked Questions" className={styles['faq-section']}>
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`${styles['faq-item']} ${openFaq === index ? styles['faq-item-open'] : ''}`}
              >
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
              <li>Bureau of Labor Statistics, Occupational Employment and Wage Statistics (OEWS) May 2024 (bls.gov/oes)</li>
              <li>Social Security Administration, National Average Wage Index (AWI) 2024 (ssa.gov)</li>
              <li>Fidelity Investments, Retirement Savings Benchmarks 2026</li>
              <li>Plootus Research 2026 (retirement tax grades; cost of living adjustments)</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles['toc-box']}>
            <h3>On This Page</h3>
            <ul>
              <li><a href="#overview">50-State Salary Table</a></li>
              <li><a href="#retirement-link">Retirement Connection</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          </div>
          <div className={styles['cta-card']}>
            <h4>What's my retirement number?</h4>
            <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
            <div onClick={() => router.push('/retirement-calculator')} className={styles['cta-btn']}>
              Check Here
            </div>
          </div>
          <div className={`${styles['sidebar-card']} ${styles['related-card']}`}>
            <h4>Related Guides</h4>
            <a onClick={() => router.push('/best-states-to-retire')}>→ Best States to Retire 2026</a>
            <a onClick={() => router.push('/median-household-income')}>→ Median Household Income by State</a>
            <a onClick={() => router.push('/tax-friendly-states-for-retirees')}>→ Tax-Friendly States for Retirees</a>
            <a onClick={() => router.push('/how-much-to-retire')}>→ How Much Do I Need to Retire?</a>
            <a onClick={() => router.push('/cheapest-states-to-retire')}>→ Cheapest States to Retire</a>
          </div>
          <div className={styles['sidebar-card']} style={{ background: 'var(--off-white)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '8px' }}>
              Key Stat
            </p>
            <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.45, marginBottom: '5px' }}>
              "Moving from New York (avg $84K salary) to Tennessee (no income tax, $49K/yr retirement cost) can save over $1M in required retirement savings."
            </p>
            <p style={{ fontSize: '11px', color: 'var(--text-light)', margin: 0 }}>
              Source: Plootus Research 2026
            </p>
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

export default AverageSalaryByState;
