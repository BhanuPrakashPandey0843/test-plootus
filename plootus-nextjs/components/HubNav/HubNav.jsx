import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './HubNav.module.css';

const hubData = [
  {
    id: 'planning',
    label: 'Planning',
    icon: '🗺',
    links: [
      { title: 'Complete Retirement Planning Guide', path: '/how-to-plan-retirement' },
      { title: 'How Much Do You Need to Retire?', path: '/how-much-to-retire' },
      { title: 'How to Retire Early (FIRE)', path: '/retire-early' },
      { title: 'How Much You Need to Earn', path: '/average-salary-by-state' },
      { title: 'Retirement Statistics 2026', path: '/retirement-statistics-2026' },
      { title: 'Retirement Savings Gap', path: '/retirement-savings-gap-gender-race' },
      { title: 'Roth vs. Traditional', path: '/roth-vs-traditional' },
      { title: 'Best Planning Tools', path: '/plootus-vs-best-retirement-tools' },
    ],
  },
  {
    id: 'benchmarks',
    label: 'Benchmarks',
    icon: '📊',
    links: [
      { title: 'Average 401(k) Balance by Age', path: '/401k-by-age' },
      { title: 'Average 403(b) Balance by Age', path: '/average-403b-balance-by-age' },
      { title: 'Average IRA Balance by Age', path: '/average-ira-balance-by-age' },
      { title: 'Average Net Worth by Age', path: '/average-net-worth-by-age' },
      { title: 'Average Savings by Age', path: '/average-savings-by-age' },
      { title: 'Average Credit Card Debt', path: '/average-credit-card-debt' },
      { title: 'Average Student Loan Debt', path: '/average-student-loan-debt' },
    ],
  },
  {
    id: 'accounts',
    label: 'Accounts',
    icon: '💼',
    links: [
      { title: '403(b) Plan Guide', path: '/403b-guide' },
      { title: '457(b) Plan Guide', path: '/457b-plan-guide' },
      { title: 'TSP (Thrift Savings Plan) Guide', path: '/tsp-thrift-savings-plan-guide' },
      { title: 'HSA Contribution Limits', path: '/hsa-contribution-limits' },
      { title: 'Social Security Benefits Guide', path: '/social-security-benefits' },
      { title: 'Roth IRA vs. Traditional IRA', path: '/roth-vs-traditional' },
    ],
  },
  {
    id: 'state-hub',
    label: 'By State',
    icon: '🏛',
    links: [
      { title: 'Retire by State Rankings', path: '/best-states-to-retire' },
      { title: 'Cheapest States to Retire', path: '/cheapest-states-to-retire' },
      { title: 'Best States for Early Retirement', path: '/best-states-for-early-retirement' },
      { title: 'Tax-Friendly States for Retirees', path: '/tax-friendly-states-for-retirees' },
      { title: 'Average Monthly Expenses by State', path: '/average-monthly-expenses-by-state' },
      { title: 'State Retirement Comparison Tool', path: '/tool-state-comparison' },
    ],
  },
  {
    id: 'calculators',
    label: 'Calculators',
    icon: '🧮',
    links: [
      { title: 'Retirement Income Calculator', path: '/retirement-income-calculator' },
      { title: 'Compound Interest Calculator', path: '/compound-interest-calculator' },
      { title: 'Inflation Impact Calculator', path: '/inflation-retirement-calculator' },
      { title: 'Social Security Calculator', path: '/social-security-calculator' },
      { title: 'RMD Calculator', path: '/rmd-calculator' },
      { title: 'Medicare Supplement Comparison', path: '/medicare-supplement-medigap-comparison' },
    ],
  },
  {
    id: 'income-costs',
    label: 'Income & Costs',
    icon: '💰',
    links: [
      { title: 'Average Salary by State', path: '/average-salary-by-state' },
      { title: 'Median Household Income', path: '/median-household-income' },
      { title: 'Minimum Wage by State', path: '/minimum-wage-by-state' },
      { title: 'Average Rent by City', path: '/rent-by-city' },
    ],
  },
  {
    id: 'family-debt',
    label: 'Family & Debt',
    icon: '👨‍👩‍👧',
    links: [
      { title: 'Cost of Raising a Child', path: '/cost-of-raising-child-by-state' },
      { title: 'Childcare Costs by State', path: '/childcare-costs' },
      { title: 'Average Student Loan Debt', path: '/average-student-loan-debt' },
      { title: 'Average Credit Card Debt', path: '/average-credit-card-debt' },
    ],
  },
  {
    id: 'health',
    label: 'Healthcare',
    icon: '🏥',
    links: [
      { title: 'Healthcare Costs in Retirement', path: '/healthcare-costs-in-retirement' },
      { title: 'Medigap Plan Comparison', path: '/medicare-supplement-medigap-comparison' },
      { title: 'Health Insurance Costs by State', path: '/health-insurance-costs' },
      { title: 'Long-Term Care Costs by State', path: '/long-term-care-costs' },
      { title: 'HSA Contribution Limits & Strategy', path: '/hsa-contribution-limits' },
    ],
  },
  {
    id: 'taxes',
    label: 'Taxes',
    icon: '🧾',
    links: [
      { title: 'Retirement Tax Guide 2026', path: '/retirement-tax-guide' },
      { title: 'Federal Income Tax Brackets', path: '/federal-income-tax-brackets' },
      { title: 'Capital Gains Tax Rates', path: '/capital-gains-tax-rates' },
      { title: 'Roth Conversion Strategy', path: '/roth-conversion-strategy' },
      { title: 'Social Security Tax Calculator', path: '/social-security-tax-calculator' },
      { title: 'Standard Deduction 2026', path: '/standard-deduction-2026' },
      { title: 'Tax-Loss Harvesting Guide', path: '/tax-loss-harvesting' },
      { title: 'IRA Contribution Limits', path: '/ira-contribution-limits' },
    ],
  },
];

const HubNav = ({ activeTab, setActiveTab }) => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({});
  const navRef = React.useRef(null);

  const isHubPage = router.pathname === '/retirement-guide';

  const handleSectionClick = (id) => {
    if (isHubPage) {
      const el = document.getElementById(id);
      if (el) {
        const offset = 140;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const offsetPosition = elementRect - bodyRect - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
      if (setActiveTab) setActiveTab(id);
    } else {
      router.push(`/retirement-guide#${id}`);
    }
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    if (router.asPath.includes('#')) {
      const id = router.asPath.split('#')[1];
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const offset = 140;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const offsetPosition = elementRect - bodyRect - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [router.asPath]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (openDropdown && navRef.current) {
      const navItem = navRef.current.querySelector(`[data-section="${openDropdown}"]`);
      if (navItem) {
        const rect = navItem.getBoundingClientRect();
        const dropdownWidth = 280;
        const viewportWidth = window.innerWidth;
        const rightEdge = rect.right + dropdownWidth;
        setDropdownPosition(rightEdge > viewportWidth ? { left: 'auto', right: 0 } : { left: 0, right: 'auto' });
      }
    }
  }, [openDropdown]);

  return (
    <nav className={styles.hubNav} aria-label="Global Financial Resource Navigation" ref={navRef}>
      <div className={styles.navContainer}>
        <div className={styles.navHeader}>
          <div className={styles.hubBrand} onClick={() => router.push('/retirement-guide')}>
            <span className={styles.brandText}>Plootus Resource Hub</span>
          </div>
          <button
            className={styles.mobileMenuToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <ArrowRight size={24} color="#1a1a1a" /> : <ArrowLeft size={24} color="#1a1a1a" />}
          </button>
        </div>

        <div className={`${styles.navContent} ${isMobileMenuOpen ? styles.show : ''}`}>
          <div className={styles.navList}>
            {hubData.map((section) => (
              <div
                key={section.id}
                data-section={section.id}
                className={`${styles.navItem} ${activeTab === section.id ? styles.active : ''}`}
                onMouseEnter={() => setOpenDropdown(section.id)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className={styles.sectionTrigger} onClick={() => handleSectionClick(section.id)}>
                  <span className={styles.sectionIcon}>{section.icon}</span>
                  <span className={styles.sectionLabel}>{section.label}</span>
                  <span className={styles.dropdownArrow}>▾</span>
                </div>

                <div
                  className={`${styles.dropdown} ${openDropdown === section.id ? styles.open : ''}`}
                  style={openDropdown === section.id ? dropdownPosition : {}}
                >
                  <ul className={styles.dropdownList}>
                    {section.links.map((link, idx) => (
                      <li key={idx} className={styles.dropdownItem}>
                        <Link
                          href={link.path}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HubNav;
