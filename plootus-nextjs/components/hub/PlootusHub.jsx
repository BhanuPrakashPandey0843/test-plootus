import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import HubNav from '../HubNav/HubNav';
import styles from './PlootusHub.module.css';
import PartnersSection from '../home/PartnersSection';

const PlootusHub = () => {
  const [activeTab, setActiveTab] = useState('planning');
  const [openFaq, setOpenFaq] = useState(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 160;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveTab(id);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['planning', 'benchmarks', 'accounts', 'state-hub', 'calculators', 'income-costs', 'family-debt', 'health', 'taxes', 'faq'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          if (
            el.offsetTop <= scrollPosition &&
            el.offsetTop + el.offsetHeight > scrollPosition
          ) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <HubNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.hubBadge}>📚 Complete Resource Hub · 2026</div>
          <h1>Your <em>Complete</em> Retirement &amp;<br />Personal Finance Library</h1>
          <p className={styles.heroSub}>Every calculator, data report, state comparison, and planning guide — built for people who want real answers, not guesswork. 44 free resources. All in one place.</p>
          <div className={styles.heroCtaRow}>
            <Link href="/how-to-plan-retirement" className={styles.heroBtnPrimary}>Start Planning →</Link>
            <Link href="/tool-state-comparison" className={styles.heroBtnOutline}>Compare States</Link>
          </div>
        </div>
      </section>

      <div className={styles.hubBody}>

        {/* PLANNING SECTION */}
        <section className={styles.hubSection} id="planning">
          <div className={styles.sectionLabel}>Start Here</div>
          <h2>Retirement Planning Guides</h2>
          <p className={styles.sectionSub}>The big-picture decisions that determine whether your retirement succeeds or falls short — step-by-step, data-backed.</p>

          <div className={styles.callout}>
            <strong>Not sure where to start?</strong> Begin with <Link href="/how-to-plan-retirement">How to Plan for Retirement</Link>, then use the <Link href="/retirement-income-calculator">Retirement Income Calculator</Link> to get your real number.
          </div>

          <div className={styles.cardGrid3}>
            <Link href="/how-to-plan-retirement" className={`${styles.contentCard} ${styles.pillar}`}>
              <span className={`${styles.ccBadge} ${styles.guide}`}>Pillar Guide</span>
              <div className={styles.ccTitle}>Retirement Planning — Complete Guide 2026</div>
              <div className={styles.ccDesc}>The full framework: when to start, how much to save, which accounts to use, Social Security timing, and healthcare planning. The only guide most people need.</div>
              <div className={styles.ccMeta}><span>10 chapters · Updated 2026</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/how-to-plan-retirement" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.guide}`}>Step-by-Step</span>
              <div className={styles.ccTitle}>How to Plan for Retirement</div>
              <div className={styles.ccDesc}>A clear, actionable 7-step process — from setting your retirement target to choosing the right accounts and adjusting for inflation and healthcare costs.</div>
              <div className={styles.ccMeta}><span>Beginner-friendly</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/how-much-to-retire" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.research}`}>Data</span>
              <div className={styles.ccTitle}>How Much Do You Need to Retire?</div>
              <div className={styles.ccDesc}>The 4% rule, the real math behind it, and why your answer depends on where you live, when you retire, and what healthcare will cost. Includes by-state targets.</div>
              <div className={styles.ccMeta}><span>State-adjusted targets</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/retire-early" className={`${styles.contentCard} ${styles.featured}`}>
              <span className={`${styles.ccBadge} ${styles.popular}`}>Popular</span>
              <div className={styles.ccTitle}>How to Retire Early — FIRE Guide 2026</div>
              <div className={styles.ccDesc}>The mechanics of early retirement: the savings rate required, the 25x rule, healthcare before Medicare, and the states where FIRE is most achievable.</div>
              <div className={styles.ccMeta}><span>FIRE strategies · Healthcare bridge</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/average-salary-by-state" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.data}`}>Data</span>
              <div className={styles.ccTitle}>How Much Do You Need to Earn to Retire Comfortably?</div>
              <div className={styles.ccDesc}>Income targets by state, lifestyle, and retirement age. Includes the minimum income needed to max 401(k) contributions and still cover living expenses.</div>
              <div className={styles.ccMeta}><span>By state &amp; lifestyle</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/retirement-statistics-2026" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.research}`}>Research</span>
              <div className={styles.ccTitle}>Retirement Statistics 2026</div>
              <div className={styles.ccDesc}>60+ sourced statistics: savings rates, Social Security solvency, gender gaps, racial wealth gaps, healthcare costs, and retirement confidence. Free to cite with attribution.</div>
              <div className={styles.ccMeta}><span>60+ stats · All sourced</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/retirement-savings-gap-gender-race" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.research}`}>Research</span>
              <div className={styles.ccTitle}>Retirement Savings Gap: Gender &amp; Race</div>
              <div className={styles.ccDesc}>Women retire with 30% less than men. Black and Hispanic Americans face a savings gap 2–3x wider. This report breaks down why — and what policies could close it.</div>
              <div className={styles.ccMeta}><span>Sourced data · 2026</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/roth-vs-traditional" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.guide}`}>Guide</span>
              <div className={styles.ccTitle}>Roth vs. Traditional IRA &amp; 401(k)</div>
              <div className={styles.ccDesc}>Tax now or tax later? The complete comparison: income limits, RMD rules, conversion ladders, and which wins at every income level and tax bracket.</div>
              <div className={styles.ccMeta}><span>Side-by-side comparison</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/plootus-vs-best-retirement-tools" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.guide}`}>Comparison</span>
              <div className={styles.ccTitle}>Best Retirement Planning Tools 2026</div>
              <div className={styles.ccDesc}>Plootus vs. Personal Capital, Fidelity, Vanguard, and other top retirement tools. Honest comparison of features, costs, and accuracy of projections.</div>
              <div className={styles.ccMeta}><span>Unbiased comparison</span><span className={styles.ccArrow}>→</span></div>
            </Link>
          </div>
        </section>

        {/* BENCHMARKS SECTION */}
        <section className={styles.hubSection} id="benchmarks">
          <div className={styles.sectionLabel}>Am I on Track?</div>
          <h2>Balance &amp; Savings Benchmarks by Age</h2>
          <p className={styles.sectionSub}>Where do you stand vs. your peers? Use these data reports to benchmark your savings across every account type and age group.</p>

          <div className={styles.cardGrid4}>
            <Link href="/401k-by-age" className={styles.benchCard}>
              <div className={styles.bcNum}>$87K</div>
              <div className={styles.bcLabel}>Median 401(k) · Age 35–44</div>
              <div className={styles.bcTitle}>Average 401(k) Balance by Age</div>
              <div className={styles.bcDesc}>Median and mean 401(k) balances at every decade. Includes Fidelity, Vanguard, and Federal Reserve data cross-referenced for 2026.</div>
              <div className={styles.bcCta}>See benchmarks →</div>
            </Link>
            <Link href="/401k-by-age" className={styles.benchCard}>
              <div className={styles.bcNum}>15%</div>
              <div className={styles.bcLabel}>Recommended Savings Rate</div>
              <div className={styles.bcTitle}>401(k) Savings Guide by Age</div>
              <div className={styles.bcDesc}>How much should be in your 401(k) at 30, 40, 50, 60? Targets, catch-up strategies, and contribution limits for 2026.</div>
              <div className={styles.bcCta}>See targets →</div>
            </Link>
            <Link href="/average-403b-balance-by-age" className={styles.benchCard}>
              <div className={styles.bcNum}>$71K</div>
              <div className={styles.bcLabel}>Median 403(b) · Age 35–44</div>
              <div className={styles.bcTitle}>Average 403(b) Balance by Age</div>
              <div className={styles.bcDesc}>Teacher, nurse, nonprofit worker? See how your 403(b) stacks up vs. peers. Includes TIAA data and catch-up options.</div>
              <div className={styles.bcCta}>See benchmarks →</div>
            </Link>
            <Link href="/average-ira-balance-by-age" className={styles.benchCard}>
              <div className={styles.bcNum}>$54K</div>
              <div className={styles.bcLabel}>Median IRA · Age 35–44</div>
              <div className={styles.bcTitle}>Average IRA Balance by Age</div>
              <div className={styles.bcDesc}>Roth and Traditional IRA balances by decade. Includes 2026 contribution limits, income phase-outs, and Roth conversion thresholds.</div>
              <div className={styles.bcCta}>See benchmarks →</div>
            </Link>
            <Link href="/average-net-worth-by-age" className={styles.benchCard}>
              <div className={styles.bcNum}>$168K</div>
              <div className={styles.bcLabel}>Median Net Worth · Age 35–44</div>
              <div className={styles.bcTitle}>Average Net Worth by Age</div>
              <div className={styles.bcDesc}>Federal Reserve data on median and mean net worth at every age bracket, broken down by race, education, and income level.</div>
              <div className={styles.bcCta}>See benchmarks →</div>
            </Link>
            <Link href="/average-savings-by-age" className={styles.benchCard}>
              <div className={styles.bcNum}>$5.5K</div>
              <div className={styles.bcLabel}>Median Liquid Savings · Age 35–44</div>
              <div className={styles.bcTitle}>Average Savings by Age</div>
              <div className={styles.bcDesc}>How much Americans have in checking and savings accounts by age — and how that compares to recommended emergency fund targets.</div>
              <div className={styles.bcCta}>See benchmarks →</div>
            </Link>
            <Link href="/average-credit-card-debt" className={styles.benchCard}>
              <div className={styles.bcNum}>$6,501</div>
              <div className={styles.bcLabel}>Avg. CC Debt · 2026</div>
              <div className={styles.bcTitle}>Average Credit Card Debt by Age &amp; State</div>
              <div className={styles.bcDesc}>TransUnion and CFPB data on credit card balances by age, income, and state. Includes payoff strategies and debt-to-income implications.</div>
              <div className={styles.bcCta}>See data →</div>
            </Link>
            <Link href="/average-student-loan-debt" className={styles.benchCard}>
              <div className={styles.bcNum}>$37.7K</div>
              <div className={styles.bcLabel}>Avg. Student Loan · 2026</div>
              <div className={styles.bcTitle}>Average Student Loan Debt</div>
              <div className={styles.bcDesc}>Federal student loan data by degree type, school, age bracket, and state. Includes income-driven repayment breakeven analysis.</div>
              <div className={styles.bcCta}>See data →</div>
            </Link>
          </div>
        </section>

        {/* ACCOUNTS SECTION */}
        <section className={styles.hubSection} id="accounts">
          <div className={styles.sectionLabel}>Account Types</div>
          <h2>Retirement Account Guides</h2>
          <p className={styles.sectionSub}>Deep dives into every major retirement account — rules, limits, strategies, and how they fit into your overall plan.</p>

          <div className={styles.cardGrid3}>
            <Link href="/403b-guide" className={`${styles.contentCard} ${styles.pillar}`}>
              <span className={`${styles.ccBadge} ${styles.guide}`}>Complete Guide</span>
              <div className={styles.ccTitle}>403(b) Plan — Complete Guide 2026</div>
              <div className={styles.ccDesc}>Everything teachers, nurses, and nonprofit employees need to know: contribution limits, employer matching rules, investment options, TIAA-CREF, and rollover rules.</div>
              <div className={styles.ccMeta}><span>Public sector workers · 2026 limits</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/457b-plan-guide" className={`${styles.contentCard} ${styles.pillar}`}>
              <span className={`${styles.ccBadge} ${styles.guide}`}>Complete Guide</span>
              <div className={styles.ccTitle}>457(b) Plan — Complete Guide 2026</div>
              <div className={styles.ccDesc}>The government and nonprofit retirement account that lets you contribute twice as much in the final 3 years before retirement. Rules, limits, and withdrawal strategies.</div>
              <div className={styles.ccMeta}><span>Government workers · 2026 limits</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/tsp-thrift-savings-plan-guide" className={`${styles.contentCard} ${styles.pillar}`}>
              <span className={`${styles.ccBadge} ${styles.guide}`}>Complete Guide</span>
              <div className={styles.ccTitle}>TSP (Thrift Savings Plan) — Complete Guide</div>
              <div className={styles.ccDesc}>Federal employees and military members: contribution limits, G/F/C/S/I fund options, lifecycle funds, matching rules, and the best TSP withdrawal strategy in retirement.</div>
              <div className={styles.ccMeta}><span>Federal &amp; military workers</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/hsa-contribution-limits" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.data}`}>Limits &amp; Rules</span>
              <div className={styles.ccTitle}>HSA Contribution Limits 2026</div>
              <div className={styles.ccDesc}>The triple-tax-advantaged account most people underuse. 2026 limits, eligibility rules, investment strategies, and why an HSA is often the best retirement account you're ignoring.</div>
              <div className={styles.ccMeta}><span>2026 IRS limits</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/social-security-benefits" className={`${styles.contentCard} ${styles.featured}`}>
              <span className={`${styles.ccBadge} ${styles.popular}`}>Must-Read</span>
              <div className={styles.ccTitle}>Social Security Benefits — Complete Guide</div>
              <div className={styles.ccDesc}>When to claim, how benefits are calculated, spousal benefits, survivor benefits, and the $100K+ difference between claiming at 62 vs. 70. Includes 2026 COLA update.</div>
              <div className={styles.ccMeta}><span>2026 COLA · Claiming strategies</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/roth-vs-traditional" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.guide}`}>Guide</span>
              <div className={styles.ccTitle}>Roth vs. Traditional — The Full Comparison</div>
              <div className={styles.ccDesc}>Roth IRA vs. Traditional IRA vs. Roth 401(k) — tax implications, income limits, RMDs, and conversion strategies. Includes the Roth conversion ladder for early retirees.</div>
              <div className={styles.ccMeta}><span>All account types compared</span><span className={styles.ccArrow}>→</span></div>
            </Link>
          </div>
        </section>

        {/* CTA 1 */}
        <div className={styles.ctaBanner}>
          <h3>What's my retirement number?</h3>
          <p>Using our Retirement Calculator, let us help you figure out if you are on track for your planned retirement.</p>
          <Link href="/retirement-calculator" className={styles.ctaBtnGreen}>Click Here →</Link>
        </div>

        {/* BY STATE SECTION */}
        <section className={styles.hubSection} id="state-hub">
          <div className={styles.sectionLabel}>Where You Retire Matters</div>
          <h2>Retirement by State — All Resources</h2>
          <p className={styles.sectionSub}>The state you choose for retirement can determine whether your savings last 15 years or 35. The gap between the most and least expensive states is over $1.9 million.</p>

          <div className={styles.cardGrid3}>
            <Link href="/best-states-to-retire" className={`${styles.contentCard} ${styles.pillar}`}>
              <span className={`${styles.ccBadge} ${styles.research}`}>Hub</span>
              <div className={styles.ccTitle}>Retire by State — 2026 Full Rankings</div>
              <div className={styles.ccDesc}>All 50 states ranked by retirement cost, taxes, healthcare quality, and quality of life. Includes minimum savings required, annual cost, and tax grade for every state.</div>
              <div className={styles.ccMeta}><span>All 50 states · 2026 data</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/best-states-to-retire" className={`${styles.contentCard} ${styles.featured}`}>
              <span className={`${styles.ccBadge} ${styles.popular}`}>Popular</span>
              <div className={styles.ccTitle}>Best States to Retire in 2026</div>
              <div className={styles.ccDesc}>The top 10 overall states for retirement — balancing cost, taxes, healthcare, weather, and quality of life. Wyoming, Florida, and South Dakota lead the 2026 rankings.</div>
              <div className={styles.ccMeta}><span>Composite ranking · All factors</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/cheapest-states-to-retire" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.data}`}>Data</span>
              <div className={styles.ccTitle}>Cheapest States to Retire 2026</div>
              <div className={styles.ccDesc}>Mississippi, Oklahoma, Kansas, and West Virginia require the least retirement savings. See annual costs, minimum savings required, and the trade-offs on healthcare and quality of life.</div>
              <div className={styles.ccMeta}><span>Annual cost · Minimum savings</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/best-states-for-early-retirement" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.guide}`}>Guide</span>
              <div className={styles.ccTitle}>Best States for Early Retirement (FIRE)</div>
              <div className={styles.ccDesc}>The states where FIRE is most achievable — low cost of living, no income tax, and access to ACA marketplace plans before Medicare. Nevada, Tennessee, and Texas lead.</div>
              <div className={styles.ccMeta}><span>FIRE + healthcare bridge</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/tax-friendly-states-for-retirees" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.data}`}>Tax Data</span>
              <div className={styles.ccTitle}>Tax-Friendly States for Retirees 2026</div>
              <div className={styles.ccDesc}>Which states tax Social Security, pensions, and 401(k) withdrawals — and which don't. Wyoming, Florida, and South Dakota take the top spots. California, NY, and NJ rank last.</div>
              <div className={styles.ccMeta}><span>All income tax types · 50 states</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/tax-friendly-states-for-retirees" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.data}`}>Tax Data</span>
              <div className={styles.ccTitle}>Most Tax-Friendly States — Overall Rankings</div>
              <div className={styles.ccDesc}>Overall tax burden by state — income, sales, property, and estate taxes combined. The complete picture for both pre-retirees and retirees.</div>
              <div className={styles.ccMeta}><span>All tax types · All ages</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/tool-state-comparison" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.research}`}>Data</span>
              <div className={styles.ccTitle}>State Retirement Data Comparison</div>
              <div className={styles.ccDesc}>Side-by-side data for all 50 states: annual retirement cost, minimum savings, tax grade, healthcare rank, and crime/weather scores. Download the full dataset.</div>
              <div className={styles.ccMeta}><span>All 50 states · Full dataset</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/tool-state-comparison" className={`${styles.contentCard} ${styles.toolType}`}>
              <span className={`${styles.ccBadge} ${styles.tool}`}>Interactive Tool</span>
              <div className={styles.ccTitle}>State Retirement Comparison Tool</div>
              <div className={styles.ccDesc}>Pick any two states and see adjusted annual costs, required savings, tax comparison, and your lifetime financial advantage. Instant results — no account needed.</div>
              <div className={styles.ccMeta}><span>Any 2 states · Live results</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/average-monthly-expenses-by-state" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.data}`}>Data</span>
              <div className={styles.ccTitle}>Average Monthly Expenses by State</div>
              <div className={styles.ccDesc}>Bureau of Labor Statistics data on average monthly expenses by state — broken into housing, food, transportation, healthcare, and discretionary spending.</div>
              <div className={styles.ccMeta}><span>BLS data · 50 states</span><span className={styles.ccArrow}>→</span></div>
            </Link>
          </div>
        </section>

        {/* CALCULATORS SECTION */}
        <section className={styles.hubSection} id="calculators">
          <div className={styles.sectionLabel}>Tools &amp; Calculators</div>
          <h2>Free Retirement Calculators</h2>
          <p className={styles.sectionSub}>Interactive tools that give you real numbers — not generic estimates. Use them together for the full picture.</p>

          <div className={styles.cardGrid4}>
            <Link href="/retirement-income-calculator" className={styles.toolCard}>
              <span className={styles.toolIcon}>🧮</span>
              <div className={styles.toolTitle}>Retirement Income Calculator</div>
              <div className={styles.toolDesc}>How much monthly income will your savings generate? Input savings, Social Security estimate, and years in retirement. Adjusts for inflation and state taxes.</div>
              <div className={styles.toolCta}>Open calculator →</div>
            </Link>
            <Link href="/compound-interest-calculator" className={styles.toolCard}>
              <span className={styles.toolIcon}>📈</span>
              <div className={styles.toolTitle}>Compound Interest Calculator</div>
              <div className={styles.toolDesc}>See the real power of compounding with your numbers. Adjust contribution amount, frequency, rate of return, and time horizon. Includes inflation toggle.</div>
              <div className={styles.toolCta}>Open calculator →</div>
            </Link>
            <Link href="/inflation-retirement-calculator" className={styles.toolCard}>
              <span className={styles.toolIcon}>📉</span>
              <div className={styles.toolTitle}>Inflation Impact Calculator</div>
              <div className={styles.toolDesc}>What will $1M actually be worth in 20 years? How much more do you need to save to keep up with inflation? Model different inflation scenarios.</div>
              <div className={styles.toolCta}>Open calculator →</div>
            </Link>
            <Link href="/social-security-calculator" className={styles.toolCard}>
              <span className={styles.toolIcon}>🏛</span>
              <div className={styles.toolTitle}>Social Security Benefit Calculator</div>
              <div className={styles.toolDesc}>Estimate your monthly Social Security benefit at ages 62, 67, and 70. See the break-even point and the total lifetime value of different claiming strategies.</div>
              <div className={styles.toolCta}>Open calculator →</div>
            </Link>
            <Link href="/rmd-calculator" className={styles.toolCard}>
              <span className={styles.toolIcon}>📋</span>
              <div className={styles.toolTitle}>RMD Calculator</div>
              <div className={styles.toolDesc}>Required Minimum Distribution calculator for Traditional IRA and 401(k). Uses 2026 IRS Uniform Lifetime Table. Calculate your RMD and plan future withdrawals.</div>
              <div className={styles.toolCta}>Calculate RMD →</div>
            </Link>
            <Link href="/tool-state-comparison" className={styles.toolCard}>
              <span className={styles.toolIcon}>🗺</span>
              <div className={styles.toolTitle}>State Comparison Tool</div>
              <div className={styles.toolDesc}>Compare any two states head-to-head: annual retirement cost, minimum savings needed, tax burden, and lifetime savings advantage. Instant results.</div>
              <div className={styles.toolCta}>Compare states →</div>
            </Link>
            <Link href="/medicare-supplement-medigap-comparison" className={styles.toolCard}>
              <span className={styles.toolIcon}>🏥</span>
              <div className={styles.toolTitle}>Medicare Supplement (Medigap) Comparison</div>
              <div className={styles.toolDesc}>Compare Medigap Plans A through N side-by-side. See which covers foreign travel, skilled nursing, and what each plan costs in your state.</div>
              <div className={styles.toolCta}>Compare plans →</div>
            </Link>
            <Link href="/plootus-vs-best-retirement-tools" className={styles.toolCard}>
              <span className={styles.toolIcon}>⚖️</span>
              <div className={styles.toolTitle}>Best Retirement Tools Comparison</div>
              <div className={styles.toolDesc}>Plootus vs. Personal Capital vs. Fidelity vs. Vanguard Retirement Planner. Which tool gives you the most accurate retirement projection?</div>
              <div className={styles.toolCta}>See comparison →</div>
            </Link>
          </div>
        </section>

        {/* INCOME & COSTS SECTION */}
        <section className={styles.hubSection} id="income-costs">
          <div className={styles.sectionLabel}>Income &amp; Cost of Living</div>
          <h2>Income, Wages &amp; Cost of Living Data</h2>
          <p className={styles.sectionSub}>Real earnings and cost-of-living data — essential for knowing where to retire, how much you need to earn, and whether your savings will last.</p>

          <div className={styles.cardGrid3}>
            <Link href="/average-salary-by-state" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.data}`}>Data</span>
              <div className={styles.ccStat}>$63,795</div>
              <div className={styles.ccStatLabel}>Median household income, US</div>
              <div className={styles.ccTitle}>Average Salary by State 2026</div>
              <div className={styles.ccDesc}>BLS median wage data for all 50 states, broken down by occupation, education level, and metro area. Includes real wage growth adjusted for local cost.</div>
              <div className={styles.ccMeta}><span>BLS 2026 data</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/median-household-income" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.data}`}>Data</span>
              <div className={styles.ccTitle}>Median Household Income by State</div>
              <div className={styles.ccDesc}>Census Bureau data on median household income by state, age bracket, race, and education level. Critical context for planning a sustainable retirement income.</div>
              <div className={styles.ccMeta}><span>Census Bureau · 2026</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/minimum-wage-by-state" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.data}`}>Data</span>
              <div className={styles.ccTitle}>Minimum Wage by State 2026</div>
              <div className={styles.ccDesc}>Current minimum wage for all 50 states, plus scheduled increases and local city ordinances above state minimums. Updated as of January 2026.</div>
              <div className={styles.ccMeta}><span>All 50 states · 2026 rates</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/rent-by-city" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.data}`}>Data</span>
              <div className={styles.ccTitle}>Average Rent by City 2026</div>
              <div className={styles.ccDesc}>Median rent for 1-bedroom and 2-bedroom apartments in 300+ US cities. Essential for retirees considering renting vs. owning and comparing costs.</div>
              <div className={styles.ccMeta}><span>300+ cities · Zillow data</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/average-monthly-expenses-by-state" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.data}`}>Data</span>
              <div className={styles.ccTitle}>Average Monthly Expenses by State</div>
              <div className={styles.ccDesc}>BLS Consumer Expenditure Survey data — monthly average spending on housing, food, transportation, healthcare, and discretionary items.</div>
              <div className={styles.ccMeta}><span>BLS data · 50 states</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/average-net-worth-by-age" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.data}`}>Data</span>
              <div className={styles.ccTitle}>Average Net Worth by Age &amp; Percentile</div>
              <div className={styles.ccDesc}>Federal Reserve Survey of Consumer Finances data on net worth by age, race, education, and income quintile. Find your percentile and targets.</div>
              <div className={styles.ccMeta}><span>Fed SCF data · 2026</span><span className={styles.ccArrow}>→</span></div>
            </Link>
          </div>
        </section>

        {/* FAMILY & DEBT SECTION */}
        <section className={styles.hubSection} id="family-debt">
          <div className={styles.sectionLabel}>Family Finances &amp; Debt</div>
          <h2>Family Costs, Children &amp; Debt</h2>
          <p className={styles.sectionSub}>Major life expenses that affect your retirement timeline — from raising children to paying off debt. Know the numbers before making big decisions.</p>

          <div className={styles.cardGrid3}>
            <Link href="/cost-of-raising-child-by-state" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.data}`}>Data</span>
              <div className={styles.ccStat}>$310K</div>
              <div className={styles.ccStatLabel}>Avg. cost to raise a child to 18</div>
              <div className={styles.ccTitle}>Cost of Raising a Child by State</div>
              <div className={styles.ccDesc}>USDA data updated for 2026 — total and annual cost of raising a child from birth to 18 in every state. Includes housing, childcare, food, and education.</div>
              <div className={styles.ccMeta}><span>USDA data · All 50 states</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/childcare-costs" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.data}`}>Data</span>
              <div className={styles.ccStat}>$1,230</div>
              <div className={styles.ccStatLabel}>Avg. monthly daycare cost, US</div>
              <div className={styles.ccTitle}>Childcare Costs by State 2026</div>
              <div className={styles.ccDesc}>Average monthly and annual childcare costs — daycare, preschool, nanny — in every state. Includes tax planning tips.</div>
              <div className={styles.ccMeta}><span>By state · All care types</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/average-student-loan-debt" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.data}`}>Data</span>
              <div className={styles.ccStat}>$37.7K</div>
              <div className={styles.ccStatLabel}>Avg. federal student loan balance</div>
              <div className={styles.ccTitle}>Average Student Loan Debt 2026</div>
              <div className={styles.ccDesc}>Federal and private student loan data by degree type, school, and state. Includes IDR repayment, PSLF, and refinancing strategies.</div>
              <div className={styles.ccMeta}><span>Federal loan data · 2026</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/average-credit-card-debt" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.data}`}>Data</span>
              <div className={styles.ccTitle}>Average Credit Card Debt by Age &amp; State</div>
              <div className={styles.ccDesc}>TransUnion data on average credit card balances and delinquency rates by age and income. Includes payoff framework.</div>
              <div className={styles.ccMeta}><span>TransUnion data · 2026</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/retirement-savings-gap-gender-race" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.research}`}>Research</span>
              <div className={styles.ccTitle}>Retirement Savings Gap: Gender &amp; Race</div>
              <div className={styles.ccDesc}>Data-backed analysis of the retirement savings gap between demographics. Includes income, investment behavior, and structural factors.</div>
              <div className={styles.ccMeta}><span>Fed + EBRI data · 2026</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/average-savings-by-age" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.data}`}>Data</span>
              <div className={styles.ccTitle}>Average Savings by Age 2026</div>
              <div className={styles.ccDesc}>Liquid savings (checking, savings) by age bracket. Includes emergency fund benchmarks and how liquid savings interact with retirement.</div>
              <div className={styles.ccMeta}><span>FDIC + Fed data</span><span className={styles.ccArrow}>→</span></div>
            </Link>
          </div>
        </section>

        {/* HEALTHCARE SECTION */}
        <section className={styles.hubSection} id="health">
          <div className={styles.sectionLabel}>Healthcare in Retirement</div>
          <h2>Healthcare Costs, Insurance &amp; Medicare</h2>
          <p className={styles.sectionSub}>Healthcare is the #1 underestimated retirement expense. A 65-year-old couple needs an estimated $315,000 for healthcare alone.</p>

          <div className={styles.cardGrid3}>
            <Link href="/healthcare-costs-in-retirement" className={`${styles.contentCard} ${styles.pillar}`}>
              <span className={`${styles.ccBadge} ${styles.guide}`}>Pillar Guide</span>
              <div className={styles.ccStat}>$315K</div>
              <div className={styles.ccStatLabel}>Fidelity estimate for couple age 65</div>
              <div className={styles.ccTitle}>Healthcare Costs in Retirement</div>
              <div className={styles.ccDesc}>The complete guide: Medicare, Medigap, Medicare Advantage, prescription costs, and the bridge from early retirement to age 65.</div>
              <div className={styles.ccMeta}><span>Medicare + ACA + Medigap</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/medicare-supplement-medigap-comparison" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.tool}`}>Comparison Tool</span>
              <div className={styles.ccTitle}>Medicare Supplement (Medigap) Plan Comparison</div>
              <div className={styles.ccDesc}>Plans A through N compared — premiums, coverage, and gaps. When to choose Medicare Advantage vs. Medigap, and how to shop.</div>
              <div className={styles.ccMeta}><span>Plans A–N · All states</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/health-insurance-costs" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.data}`}>Data</span>
              <div className={styles.ccTitle}>Health Insurance Costs by Age &amp; State</div>
              <div className={styles.ccDesc}>Average monthly health insurance premiums by age and plan type — before and after ACA subsidies. Critical for early retirement.</div>
              <div className={styles.ccMeta}><span>ACA data · All 50 states</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/long-term-care-costs" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.data}`}>Data</span>
              <div className={styles.ccStat}>$108K</div>
              <div className={styles.ccStatLabel}>Avg. annual nursing home cost, US</div>
              <div className={styles.ccTitle}>Long-Term Care Costs by State 2026</div>
              <div className={styles.ccDesc}>Genworth data on nursing home, assisted living, and home health costs by state. Includes LTC insurance and Medicaid planning.</div>
              <div className={styles.ccMeta}><span>Genworth data · 50 states</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/hsa-contribution-limits" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.data}`}>Limits &amp; Strategy</span>
              <div className={styles.ccTitle}>HSA Contribution Limits &amp; Strategy 2026</div>
              <div className={styles.ccDesc}>2026 HSA limits, rules, and how to use an HSA as a stealth retirement account for healthcare expenses — including after age 65.</div>
              <div className={styles.ccMeta}><span>2026 IRS limits</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/social-security-benefits" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.guide}`}>Guide</span>
              <div className={styles.ccTitle}>Social Security &amp; Medicare Timing</div>
              <div className={styles.ccDesc}>How claiming age affects Medicare premium surcharges (IRMAA) and the interaction between SS income and ACA subsidies.</div>
              <div className={styles.ccMeta}><span>IRMAA · ACA · Medicaid</span><span className={styles.ccArrow}>→</span></div>
            </Link>
          </div>
        </section>

        {/* TAXES SECTION */}
        <section className={styles.hubSection} id="taxes">
          <div className={styles.sectionLabel}>🧾 Tax Guides — New</div>
          <h2>Tax Strategy: Guides for Every Situation</h2>
          <p className={styles.sectionSub}>Taxes are one of the biggest — and most controllable — retirement expenses. These 8 guides cover the highest-searched tax topics for individuals, families, and retirees. All data-backed, all free.</p>

          <div className={styles.callout}><strong>Why taxes matter more than you think:</strong> A retiree in the 22% bracket paying $60,000/year in withdrawals pays $13,200 in federal tax alone. Strategic Roth conversions, tax-loss harvesting, and choosing the right state can save $200,000–$500,000 over a 25-year retirement. <Link href="/retirement-tax-guide">Start with the Retirement Tax Guide →</Link></div>

          <div className={styles.cardGrid3}>
            <Link href="/retirement-tax-guide" className={`${styles.contentCard} ${styles.pillar}`}>
              <span className={`${styles.ccBadge} ${styles.guide}`}>Pillar Guide</span>
              <div className={styles.ccTitle}>Retirement Tax Guide 2026 — Complete Strategy</div>
              <div className={styles.ccDesc}>The master guide to retirement taxes: how 401(k), IRA, Roth, Social Security, RMDs, and capital gains are taxed — with the optimal withdrawal order and Roth conversion strategy.</div>
              <div className={styles.ccMeta}><span>All account types · 2026 IRS rules</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/federal-income-tax-brackets" className={`${styles.contentCard} ${styles.featured}`}>
              <span className={`${styles.ccBadge} ${styles.popular}`}>High Traffic</span>
              <div className={styles.ccStat}>37%</div>
              <div className={styles.ccStatLabel}>Top federal marginal rate 2026</div>
              <div className={styles.ccTitle}>Federal Income Tax Brackets 2026</div>
              <div className={styles.ccDesc}>All 7 federal income tax brackets and rates for 2026 — single, married filing jointly, head of household. Includes standard deduction, AMT thresholds, and how brackets affect retirement withdrawals.</div>
              <div className={styles.ccMeta}><span>2026 IRS official rates · All filing statuses</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/capital-gains-tax-rates" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.data}`}>Data + Strategy</span>
              <div className={styles.ccStat}>0%</div>
              <div className={styles.ccStatLabel}>LTCG rate for income ≤$96,700 (MFJ)</div>
              <div className={styles.ccTitle}>Capital Gains Tax Rates 2026</div>
              <div className={styles.ccDesc}>Short-term vs. long-term capital gains tax rates, all 2026 thresholds, the 0% bracket strategy for retirees, NIIT surcharge rules, and how to keep more of your investment gains.</div>
              <div className={styles.ccMeta}><span>2026 rates · Retiree strategy</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/roth-conversion-strategy" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.guide}`}>Strategy Guide</span>
              <div className={styles.ccTitle}>Roth Conversion Strategy: The Complete Guide</div>
              <div className={styles.ccDesc}>When to convert, how much to convert, how to avoid Medicare IRMAA surcharges, and the 5-year rule. Includes year-by-year Roth conversion ladder for the retirement income gap window.</div>
              <div className={styles.ccMeta}><span>Brackets · IRMAA · Ladder strategy</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/social-security-tax-calculator" className={`${styles.contentCard} ${styles.toolType}`}>
              <span className={`${styles.ccBadge} ${styles.calculator}`}>Calculator</span>
              <div className={styles.ccTitle}>Social Security Tax Calculator 2026</div>
              <div className={styles.ccDesc}>Is your Social Security benefit taxable? Enter your provisional income and filing status — instantly see what percentage (0%, 50%, or 85%) of your benefit is subject to federal tax.</div>
              <div className={styles.ccMeta}><span>Free calculator · 2026 thresholds</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/standard-deduction-2026" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.data}`}>Data</span>
              <div className={styles.ccStat}>$30,000</div>
              <div className={styles.ccStatLabel}>Standard deduction · MFJ · 2026</div>
              <div className={styles.ccTitle}>Standard Deduction 2026: All Filing Statuses</div>
              <div className={styles.ccDesc}>2026 standard deduction amounts for single, married filing jointly, head of household, and the extra deduction for taxpayers 65+. Includes when itemizing beats the standard deduction.</div>
              <div className={styles.ccMeta}><span>2026 IRS amounts · Age 65+ rules</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/tax-loss-harvesting" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.guide}`}>Strategy Guide</span>
              <div className={styles.ccTitle}>Tax-Loss Harvesting: How It Works &amp; When to Use It</div>
              <div className={styles.ccDesc}>Turn investment losses into tax savings. How to harvest losses without triggering the wash-sale rule, offset up to $3,000 of ordinary income, and carry losses forward. Best practices for retirees.</div>
              <div className={styles.ccMeta}><span>Wash-sale rule · Portfolio strategy</span><span className={styles.ccArrow}>→</span></div>
            </Link>
            <Link href="/ira-contribution-limits" className={styles.contentCard}>
              <span className={`${styles.ccBadge} ${styles.data}`}>Limits &amp; Rules</span>
              <div className={styles.ccStat}>$7,000</div>
              <div className={styles.ccStatLabel}>IRA contribution limit 2026 (under 50)</div>
              <div className={styles.ccTitle}>IRA Contribution Limits 2026 — Traditional &amp; Roth</div>
              <div className={styles.ccDesc}>2026 IRA and Roth IRA contribution limits, income phase-out ranges, deductibility rules for Traditional IRA, backdoor Roth strategy, and spousal IRA rules for non-working spouses.</div>
              <div className={styles.ccMeta}><span>2026 IRS limits · All filing statuses</span><span className={styles.ccArrow}>→</span></div>
            </Link>
          </div>
        </section>

        {/* FINAL CTA */}
        <div className={styles.ctaBanner}>
          <h3>Stop Worrying. Start Planning</h3>
          <p>Plootus connects to your real accounts and tells you exactly where you stand — with a retirement date, monthly income projection, and state-adjusted targets built for your life.</p>
          <Link href="/" className={styles.ctaBtnGreen}>Get My Free Retirement Plan →</Link>
        </div>

        {/* FAQ SECTION */}
        <section className={styles.hubSection} id="faq">
          <div className={styles.sectionLabel}>FAQ</div>
          <h2>Common Questions About Retirement Planning</h2>
          <div style={{ marginTop: '20px' }}>
            {[
              {
                q: "How much do I need to retire comfortably?",
                a: "The short answer: 25x your annual expenses (the 4% rule). If you spend $60,000/year in retirement, you need $1.5M. But this number changes significantly by state — retiring in Mississippi requires roughly $680,000 while retiring in Hawaii requires over $2.5M for the same lifestyle. Use the Plootus Retirement Income Calculator for your state-adjusted number."
              },
              {
                q: "What is the best retirement account — 401(k), IRA, or Roth?",
                a: "There's no single answer — it depends on your current tax rate vs. expected retirement tax rate. General rule: if you're in a low tax bracket now (under 22%), Roth accounts win. If you're in a high bracket (32%+), pre-tax Traditional 401(k) or IRA likely wins. Most financial planners recommend using both for tax diversification."
              },
              {
                q: "When should I claim Social Security?",
                a: "Claiming at 62 gives you benefits sooner but permanently reduces your monthly payment by up to 30%. Waiting until 70 maximizes your monthly benefit — roughly 76% more than claiming at 62. The break-even point is typically around age 80. If you expect to live past 80 and don't need the money early, waiting is almost always the financially optimal choice."
              },
              {
                q: "Which state is best for retirement taxes?",
                a: "Wyoming, Florida, and South Dakota are consistently the top three — all have zero state income tax, no tax on Social Security, low property taxes, and no estate or inheritance tax. The worst states for retirees on taxes are California, New York, and New Jersey."
              },
              {
                q: "How much will healthcare cost in retirement?",
                a: "Fidelity estimates a 65-year-old couple will spend $315,000 on healthcare over their retirement — not including long-term care. Medicare covers roughly 80% of costs, leaving significant gaps filled by Medigap or Medicare Advantage plans. If you retire before 65, you'll need a healthcare bridge using ACA marketplace plans."
              },
              {
                q: "What is an RMD and when do I have to take it?",
                a: "A Required Minimum Distribution (RMD) is a mandatory annual withdrawal from Traditional IRAs, 401(k)s, and most tax-deferred retirement accounts. Under the SECURE 2.0 Act, RMDs now begin at age 73 (increasing to 75 in 2033). Roth IRAs have no RMDs."
              }
            ].map((item, idx) => (
              <div key={idx} className={`${styles.faqItem} ${openFaq === idx ? styles.open : ''}`}>
                <button className={styles.faqQ} onClick={() => toggleFaq(idx)}>
                  {item.q} <span className={styles.faqIcon}>+</span>
                </button>
                {openFaq === idx && (
                  <div className={styles.faqA}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

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

export default PlootusHub;
