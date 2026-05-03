import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { BarChart3, MapPin, TrendingUp, DollarSign } from 'lucide-react';
import styles from './AverageMonthlyExpensesByState.module.css';
import HubNav from '../../HubNav/HubNav';
import PartnersSection from '../../home/PartnersSection';

const AverageMonthlyExpensesByState = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'What is the average monthly expense for an American household?',
      a: "The Bureau of Labor Statistics Consumer Expenditure Survey 2024 reports average annual U.S. household expenditures of $77,158 — approximately $6,430 per month. This covers all spending categories: housing ($2,321/month or 34.9% of total), transportation ($1,214/month or 18.3%), food ($1,014/month or 15.3%), healthcare ($432/month or 6.5%), entertainment ($383/month or 5.8%), and other categories. Note: this is the national average across all household sizes and income levels; the median household spends considerably less. Source: BLS CES 2024."
    },
    {
      q: 'What is the biggest monthly expense for most households?',
      a: "Housing is the single largest monthly expense for American households, consuming approximately 34.9% of total spending, or $2,321 per month on average (BLS CES 2024). Housing includes rent or mortgage, property taxes, homeowner's or renter's insurance, and utilities. In high-cost states like California, New York, and Hawaii, housing often exceeds 40% of monthly spending. In lower-cost states like Mississippi or Arkansas, housing may be closer to 25–28% of spending. The 50/30/20 budgeting rule recommends spending no more than 30% of gross income on housing specifically. Source: BLS CES 2024."
    },
    {
      q: 'How does cost of living affect how much I need to save for retirement?',
      a: "Your monthly expenses directly determine your retirement number. The formula is: (expected annual retirement spending − annual Social Security income) ÷ 0.04 = savings needed. In Hawaii ($7,200/month = $86,400/year in expenses), a retiree needs approximately $1.5M+ in savings even after Social Security. In Mississippi ($3,500/month = $42,000/year), the same formula requires only about $430,000 in savings. That's a $1 million+ difference in required savings purely from the choice of retirement location. Source: BLS CES 2024; Plootus Research 2026."
    },
    {
      q: 'What is a good monthly budget?',
      a: "A commonly recommended framework is the 50/30/20 rule: allocate 50% of after-tax income to needs (housing, food, utilities, transportation), 30% to wants (entertainment, dining out, hobbies), and 20% to savings and debt repayment. On a $5,000/month after-tax income: $2,500 to needs, $1,500 to wants, $1,000 to savings. However, for retirement readiness, consider bumping savings to 15–20% of gross income if behind on retirement goals. Plootus recommends always capturing the full 401(k) employer match before other spending optimization. Source: Consumer Financial Protection Bureau; Fidelity 2026."
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Average Monthly Expenses by State 2026: Cost of Living Comparison | Plootus</title>
        <meta name="description" content="See how monthly expenses range by state in 2026. From $3,500 in Mississippi to $7,200 in Hawaii. Learn how your location impacts your retirement savings goal." />
        <link rel="canonical" href="https://www.plootus.com/average-monthly-expenses-by-state" />
      </Head>

      <HubNav />

      <div className={styles.hero}>
        <div className={styles['hero-inner']}>
          <p className={styles['hero-eyebrow']}><BarChart3 size={13} strokeWidth={2.5} /> Cost of Living Guide · BLS CES 2024 · All 50 States</p>
          <h1>Average Monthly Expenses by State 2026: Cost of Living Comparison</h1>
          <p className={styles['hero-deck']}>
            Monthly household expenses range from $3,500 in Mississippi to $7,200 in Hawaii — a $3,700/month difference that translates to over $1 million in required retirement savings. See where your state ranks and what it means for your financial plan.
          </p>
          <div className={styles['hero-meta']}>
            <span><MapPin size={11} strokeWidth={2.5} style={{display:'inline',verticalAlign:'middle',marginRight:3}} /> Updated April 2026</span><span><BarChart3 size={11} strokeWidth={2.5} style={{display:'inline',verticalAlign:'middle',marginRight:3}} /> Source: BLS CES 2024; MERIC Q3 2025</span>
          </div>
        </div>
      </div>

      <div className={styles['stat-strip']}>
        <div className={styles['stat-strip-inner']}>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$6,430</div>
            <div className={styles['stat-label']}>U.S. Avg Monthly Expenses</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$7,200</div>
            <div className={styles['stat-label']}>Highest: Hawaii</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$3,500</div>
            <div className={styles['stat-label']}>Lowest: Mississippi</div>
          </div>
          <div className={styles['stat-item']}>
            <div className={styles['stat-num']} data-type="statistic">$3,700/mo</div>
            <div className={styles['stat-label']}>Cost Gap: High vs. Low</div>
          </div>
        </div>
      </div>

      <div className={styles['page-body']} itemScope itemType="https://schema.org/Article">
        <main className={styles['main-content']} role="main" aria-label="Average Monthly Expenses by State 2026">
          <section id="breakdown">
            <p className={styles['section-label']}>National Breakdown</p>
            <h2>Where the Average U.S. Household Spends Its Money (2024)</h2>
            <table className={styles['data-table']} summary="Average annual and monthly household spending by category from BLS Consumer Expenditure Survey 2024">
              <thead>
                <tr>
                  <th scope="col">Category</th>
                  <th scope="col">Annual<br />Average</th>
                  <th scope="col">Monthly<br />Average</th>
                  <th scope="col">% of<br />Total</th>
                  <th scope="col">50/30/20<br />Bucket</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.hi}>Housing</td>
                  <td>$27,860</td>
                  <td data-type="statistic">$2,321</td>
                  <td>34.9%</td>
                  <td>Needs</td>
                </tr>
                <tr>
                  <td className={styles.hi}>Transportation</td>
                  <td>$14,570</td>
                  <td data-type="statistic">$1,214</td>
                  <td>18.3%</td>
                  <td>Needs</td>
                </tr>
                <tr>
                  <td className={styles.hi}>Food</td>
                  <td>$12,170</td>
                  <td data-type="statistic">$1,014</td>
                  <td>15.3%</td>
                  <td>Needs (groceries) / Wants (dining)</td>
                </tr>
                <tr>
                  <td className={styles.hi}>Personal Insurance &amp; Pensions</td>
                  <td>$8,720</td>
                  <td data-type="statistic">$727</td>
                  <td>10.9%</td>
                  <td>Savings</td>
                </tr>
                <tr>
                  <td className={styles.hi}>Healthcare</td>
                  <td>$5,190</td>
                  <td data-type="statistic">$432</td>
                  <td>6.5%</td>
                  <td>Needs</td>
                </tr>
                <tr>
                  <td className={styles.hi}>Entertainment</td>
                  <td>$4,590</td>
                  <td data-type="statistic">$383</td>
                  <td>5.8%</td>
                  <td>Wants</td>
                </tr>
                <tr>
                  <td className={styles.hi}>Clothing</td>
                  <td>$2,000</td>
                  <td data-type="statistic">$167</td>
                  <td>2.5%</td>
                  <td>Needs/Wants</td>
                </tr>
                <tr>
                  <td className={styles.hi}>Other</td>
                  <td>$4,958</td>
                  <td data-type="statistic">$413</td>
                  <td>6.2%</td>
                  <td>Mixed</td>
                </tr>
                <tr style={{ fontWeight: 700 }}>
                  <td>Total</td>
                  <td>$77,158</td>
                  <td data-type="statistic">$6,430</td>
                  <td>100%</td>
                  <td>—</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>
              Source: Bureau of Labor Statistics, Consumer Expenditure Survey 2024 (bls.gov/cex). National average across all consumer units.
            </p>
          </section>

          <section id="state-table">
            <p className={styles['section-label']}>State Data</p>
            <h2>Monthly Expenses by State — Key States</h2>
            <table className={styles['data-table']} summary="Average monthly and annual household expenses by state with housing, food, transportation costs and minimum retirement savings">
              <thead>
                <tr>
                  <th scope="col">State</th>
                  <th scope="col">Monthly<br />Expenses</th>
                  <th scope="col">Annual<br />Total</th>
                  <th scope="col">Housing<br />/mo</th>
                  <th scope="col">Food<br />/mo</th>
                  <th scope="col">Transport<br />/mo</th>
                  <th scope="col">Health<br />care/mo</th>
                  <th scope="col">Min. Savings<br />Target</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.hi}>Mississippi</td>
                  <td data-type="statistic">$3,500</td>
                  <td>$42,000</td>
                  <td>$1,600</td>
                  <td>$600</td>
                  <td>$540</td>
                  <td>$290</td>
                  <td data-type="statistic">$537K</td>
                </tr>
                <tr>
                  <td className={styles.hi}>Arkansas</td>
                  <td data-type="statistic">$3,600</td>
                  <td>$43,200</td>
                  <td>$1,650</td>
                  <td>$620</td>
                  <td>$560</td>
                  <td>$295</td>
                  <td data-type="statistic">$534K</td>
                </tr>
                <tr>
                  <td className={styles.hi}>Oklahoma</td>
                  <td data-type="statistic">$3,750</td>
                  <td>$45,000</td>
                  <td>$1,700</td>
                  <td>$640</td>
                  <td>$580</td>
                  <td>$300</td>
                  <td data-type="statistic">$573K</td>
                </tr>
                <tr>
                  <td className={styles.hi}>West Virginia</td>
                  <td data-type="statistic">$3,650</td>
                  <td>$43,800</td>
                  <td>$1,620</td>
                  <td>$630</td>
                  <td>$570</td>
                  <td>$305</td>
                  <td data-type="statistic">$558K</td>
                </tr>
                <tr>
                  <td className={styles.hi}>Alabama</td>
                  <td data-type="statistic">$3,700</td>
                  <td>$44,400</td>
                  <td>$1,680</td>
                  <td>$625</td>
                  <td>$550</td>
                  <td>$295</td>
                  <td data-type="statistic">$582K</td>
                </tr>
                <tr>
                  <td className={styles.hi}>Kansas</td>
                  <td data-type="statistic">$3,800</td>
                  <td>$45,600</td>
                  <td>$1,720</td>
                  <td>$650</td>
                  <td>$585</td>
                  <td>$310</td>
                  <td data-type="statistic">$590K</td>
                </tr>
                <tr>
                  <td className={styles.hi}>Indiana</td>
                  <td data-type="statistic">$3,850</td>
                  <td>$46,200</td>
                  <td>$1,760</td>
                  <td>$660</td>
                  <td>$600</td>
                  <td>$315</td>
                  <td data-type="statistic">$740K</td>
                </tr>
                <tr>
                  <td className={styles.hi}>Iowa</td>
                  <td data-type="statistic">$3,900</td>
                  <td>$46,800</td>
                  <td>$1,780</td>
                  <td>$670</td>
                  <td>$610</td>
                  <td>$320</td>
                  <td data-type="statistic">$730K</td>
                </tr>
                <tr>
                  <td className={styles.hi}>Tennessee</td>
                  <td data-type="statistic">$3,950</td>
                  <td>$47,400</td>
                  <td>$1,820</td>
                  <td>$665</td>
                  <td>$620</td>
                  <td>$310</td>
                  <td data-type="statistic">$613K</td>
                </tr>
                <tr>
                  <td className={styles.hi}>Missouri</td>
                  <td data-type="statistic">$3,980</td>
                  <td>$47,760</td>
                  <td>$1,840</td>
                  <td>$670</td>
                  <td>$625</td>
                  <td>$325</td>
                  <td data-type="statistic">$613K</td>
                </tr>
                <tr>
                  <td className={styles.hi}>National Average</td>
                  <td data-type="statistic">$5,400</td>
                  <td>$64,800</td>
                  <td>$2,321</td>
                  <td>$1,014</td>
                  <td>$1,214</td>
                  <td>$432</td>
                  <td data-type="statistic">$877K</td>
                </tr>
                <tr>
                  <td className={styles.hi}>California</td>
                  <td data-type="statistic">$6,800</td>
                  <td>$81,600</td>
                  <td>$3,200</td>
                  <td>$1,200</td>
                  <td>$1,100</td>
                  <td>$520</td>
                  <td data-type="statistic">$1.49M</td>
                </tr>
                <tr>
                  <td className={styles.hi}>New York</td>
                  <td data-type="statistic">$6,500</td>
                  <td>$78,000</td>
                  <td>$3,100</td>
                  <td>$1,180</td>
                  <td>$900</td>
                  <td>$505</td>
                  <td data-type="statistic">$1.43M</td>
                </tr>
                <tr>
                  <td className={styles.hi}>Massachusetts</td>
                  <td data-type="statistic">$7,000</td>
                  <td>$84,000</td>
                  <td>$3,400</td>
                  <td>$1,220</td>
                  <td>$950</td>
                  <td>$530</td>
                  <td data-type="statistic">$1.61M</td>
                </tr>
                <tr>
                  <td className={styles.hi}>Hawaii</td>
                  <td data-type="statistic">$7,200</td>
                  <td>$86,400</td>
                  <td>$3,600</td>
                  <td>$1,350</td>
                  <td>$980</td>
                  <td>$570</td>
                  <td data-type="statistic">$2.61M</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>
              Sources: BLS CES 2024 adjusted by MERIC Q3 2025 Cost of Living Index. Housing includes rent/mortgage, utilities, insurance. Min. savings = (annual expenses − avg SS $24,894) ÷ 0.04. Figures are estimates.
            </p>
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

          <div className={styles['cta-banner']}>
            <h3>See Your State-Adjusted Retirement Number</h3>
            <p>
              Plootus calculates your exact retirement number based on your actual monthly spending and state — not national averages that may be wildly off for you.
            </p>
            <div onClick={() => router.push('/')} style={{cursor: 'pointer'}}>Calculate My Number →</div>
          </div>

          <div className={styles['sources-box']}>
            <strong>📚 Sources</strong>
            <ul>
              <li>Bureau of Labor Statistics, Consumer Expenditure Survey 2024 (bls.gov/cex)</li>
              <li>Missouri Economic Research and Information Center (MERIC), Cost of Living Index Q3 2025</li>
              <li>U.S. Bureau of Economic Analysis, Personal Consumption Expenditures 2024</li>
              <li>Consumer Financial Protection Bureau, 50/30/20 Budget Rule</li>
              <li>Plootus Research 2026</li>
            </ul>
          </div>
        </main>

        <aside className={styles.sidebar} role="complementary" aria-label="Related resources and navigation">
          <div className={styles['toc-box']}>
            <h3>On This Page</h3>
            <ul>
              <li><a href="#breakdown">National Spending Breakdown</a></li>
              <li><a href="#state-table">State-by-State Data</a></li>
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
            <div onClick={() => router.push('/cheapest-states-to-retire')} style={{cursor: 'pointer'}}>→ Cheapest States to Retire 2026</div>
            <div onClick={() => router.push('/best-states-to-retire')} style={{cursor: 'pointer'}}>→ Best States to Retire 2026</div>
            <div onClick={() => router.push('/cost-of-raising-child-by-state')} style={{cursor: 'pointer'}}>→ Cost of Raising a Child by State</div>
            <div onClick={() => router.push('/tool-state-comparison')} style={{cursor: 'pointer'}}>→ State Retirement Comparison Tool</div>
            <div onClick={() => router.push('/how-much-to-retire')} style={{cursor: 'pointer'}}>→ How Much Do I Need to Retire?</div>
          </div>
          <div className={styles['sidebar-card']} style={{ background: 'var(--off-white)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '8px' }}>
              Key Stat
            </p>
            <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.45, marginBottom: '5px' }}>
              "Moving from Hawaii ($7,200/month) to Mississippi ($3,500/month) reduces required retirement savings by over $2 million under the 4% rule."
            </p>
            <p style={{ fontSize: '11px', color: 'var(--text-light)', margin: 0 }}>
              Source: BLS CES 2024; Plootus Research 2026
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

export default AverageMonthlyExpensesByState;
