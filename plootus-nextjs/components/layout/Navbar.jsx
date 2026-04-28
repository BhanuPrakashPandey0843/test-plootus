import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from './NavBar.module.css';

import LogIn from '../auth/LogIn';
import MainSignupModal from '../auth/MainSignupModal';
import { LoginSignupContext } from '../auth/LoginSignupContext';

const NavBar = () => {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [solutionsClicked, setSolutionsClicked] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [resourcesClicked, setResourcesClicked] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { 
    loginModal, setLoginModal, 
    signupModal, setSignupModal 
  } = useContext(LoginSignupContext);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (solutionsOpen && !event.target.closest(`.${styles.solutionsContainer}`)) {
        setSolutionsClicked(false);
        setSolutionsOpen(false);
      }
      if (resourcesOpen && !event.target.closest(`.${styles.resourcesContainer}`)) {
        setResourcesClicked(false);
        setResourcesOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [solutionsOpen, resourcesOpen]);

  useEffect(() => {
    document.body.style.overflow = (isMobileMenuOpen || loginModal || signupModal) ? 'hidden' : 'unset';
  }, [isMobileMenuOpen, loginModal, signupModal]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [router.pathname]);

  const isLinkActive = (path) => {
    if (path === '/') return router.pathname === path;
    return router.pathname.startsWith(path);
  };

  const handleSolutionsEnter = () => { if (!solutionsClicked) setSolutionsOpen(true); };
  const handleSolutionsLeave = () => { if (!solutionsClicked) setSolutionsOpen(false); };
  const handleSolutionsClick = () => {
    const next = !solutionsClicked;
    setSolutionsClicked(next);
    setSolutionsOpen(next);
  };

  const handleResourcesEnter = () => { if (!resourcesClicked) setResourcesOpen(true); };
  const handleResourcesLeave = () => { if (!resourcesClicked) setResourcesOpen(false); };
  const handleResourcesClick = () => {
    const next = !resourcesClicked;
    setResourcesClicked(next);
    setResourcesOpen(next);
  };

  const closeSolutions = () => { setSolutionsClicked(false); setSolutionsOpen(false); };
  const closeResources = () => { setResourcesClicked(false); setResourcesOpen(false); };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoContainer}>
          <img src="/images/Plootus.png" alt="Plootus" className={styles.logo} />
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          <Link href="/" className={`${styles.navLink} ${isLinkActive('/') ? styles.active : ''}`}>
            Overview
          </Link>

          <div
            className={styles.solutionsContainer}
            onMouseEnter={handleSolutionsEnter}
            onMouseLeave={handleSolutionsLeave}
          >
            <button
              className={`${styles.navLink} ${styles.solutionsButton} ${
                isLinkActive('/individual-users') || isLinkActive('/financial-advisors') ? styles.active : ''
              }`}
              onClick={handleSolutionsClick}
            >
              Solutions
              <KeyboardArrowDownIcon className={`${styles.dropdownIcon} ${solutionsOpen ? styles.dropdownIconOpen : ''}`} />
            </button>
            <div className={`${styles.solutionsDropdown} ${solutionsOpen ? styles.dropdownVisible : ''}`}>
              <Link href="/individual-users" className={`${styles.dropdownItem} ${isLinkActive('/individual-users') ? styles.active : ''}`} onClick={closeSolutions}>
                Individual Users
              </Link>
              <Link href="/financial-advisors" className={`${styles.dropdownItem} ${isLinkActive('/financial-advisors') ? styles.active : ''}`} onClick={closeSolutions}>
                Financial Advisors
              </Link>
            </div>
          </div>

          <Link href="/partners" className={`${styles.navLink} ${isLinkActive('/partners') ? styles.active : ''}`}>
            Partners
          </Link>

          <Link href="/newsletter" className={`${styles.navLink} ${isLinkActive('/newsletter') ? styles.active : ''}`}>
            Newsletter
          </Link>

          <Link href="/finance-101" className={`${styles.navLink} ${isLinkActive('/finance-101') ? styles.active : ''}`}>
            Finance 101
          </Link>

          <Link href="/press" className={`${styles.navLink} ${isLinkActive('/press') ? styles.active : ''}`}>
            Press
          </Link>

          <div
            className={styles.resourcesContainer}
            onMouseEnter={handleResourcesEnter}
            onMouseLeave={handleResourcesLeave}
          >
            <button
              className={`${styles.navLink} ${styles.solutionsButton} ${
                isLinkActive('/where-is-my-refund') || isLinkActive('/retirement-calculator') ||
                isLinkActive('/unclaimed-money') || isLinkActive('/find-old-401k') ? styles.active : ''
              }`}
              onClick={handleResourcesClick}
            >
              Resources
              <KeyboardArrowDownIcon className={`${styles.dropdownIcon} ${resourcesOpen ? styles.dropdownIconOpen : ''}`} />
            </button>
            <div className={`${styles.solutionsDropdown} ${resourcesOpen ? styles.dropdownVisible : ''}`}>
              <Link href="/find-old-401k" className={`${styles.dropdownItem} ${isLinkActive('/find-old-401k') ? styles.active : ''}`} onClick={closeResources}>
                Find Old 401k
              </Link>
              <Link href="/retirement-calculator" className={`${styles.dropdownItem} ${isLinkActive('/retirement-calculator') ? styles.active : ''}`} onClick={closeResources}>
                Retirement Calculator
              </Link>
              <Link href="/unclaimed-money" className={`${styles.dropdownItem} ${isLinkActive('/unclaimed-money') ? styles.active : ''}`} onClick={closeResources}>
                Unclaimed Money
              </Link>
              <Link href="/where-is-my-refund" className={`${styles.dropdownItem} ${isLinkActive('/where-is-my-refund') ? styles.active : ''}`} onClick={closeResources}>
                Where Is My Refund?
              </Link>
            </div>
          </div>

          <Link href="/about" className={`${styles.navLink} ${isLinkActive('/about') ? styles.active : ''}`}>
            About Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className={styles.mobileMenuButton} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Desktop Auth Buttons */}
        <div className={styles.authButtons}>
          <div className={styles.loginWrapper}>
            <LogIn 
              modalIsOpen={loginModal}
              openModal={() => setLoginModal(true)}
              closeModal={() => setLoginModal(false)}
              signupopenModal={() => setSignupModal(true)}
            />
          </div>
          <div className={styles.signupWrapper}>
            <MainSignupModal 
              modalIsOpen={signupModal}
              openModal={() => setSignupModal(true)}
              closeModal={() => setSignupModal(false)}
              loginopenModal={() => setLoginModal(true)}
            />
            <button onClick={() => setSignupModal(true)} className={styles.signupBtn}>
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileNavLinks}>
          <Link href="/" className={`${styles.mobileNavLink} ${isLinkActive('/') ? styles.active : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
            Overview
          </Link>

          <div className={styles.mobileSolutionsContainer}>
            <button
              className={`${styles.mobileSolutionsButton} ${isLinkActive('/individual-users') || isLinkActive('/financial-advisors') ? styles.active : ''}`}
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
            >
              Solutions
              <KeyboardArrowDownIcon className={`${styles.dropdownIcon} ${mobileSolutionsOpen ? styles.dropdownIconOpen : ''}`} />
            </button>
            <div className={`${styles.mobileSubLinks} ${mobileSolutionsOpen ? styles.mobileSubLinksOpen : ''}`}>
              <Link href="/individual-users" className={isLinkActive('/individual-users') ? styles.active : ''} onClick={() => setIsMobileMenuOpen(false)}>
                Individual Users
              </Link>
              <Link href="/financial-advisors" className={isLinkActive('/financial-advisors') ? styles.active : ''} onClick={() => setIsMobileMenuOpen(false)}>
                Financial Advisors
              </Link>
            </div>
          </div>

          <Link href="/partners" className={`${styles.mobileNavLink} ${isLinkActive('/partners') ? styles.active : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
            Partners
          </Link>

          <Link href="/newsletter" className={`${styles.mobileNavLink} ${isLinkActive('/newsletter') ? styles.active : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
            Newsletter
          </Link>

          <Link href="/finance-101" className={`${styles.mobileNavLink} ${isLinkActive('/finance-101') ? styles.active : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
            Finance 101
          </Link>

          <Link href="/press" className={`${styles.mobileNavLink} ${isLinkActive('/press') ? styles.active : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
            Press
          </Link>

          <div className={styles.mobileSolutionsContainer}>
            <button
              className={`${styles.mobileSolutionsButton} ${
                isLinkActive('/where-is-my-refund') || isLinkActive('/retirement-calculator') ||
                isLinkActive('/unclaimed-money') || isLinkActive('/find-old-401k') ? styles.active : ''
              }`}
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
            >
              Resources
              <KeyboardArrowDownIcon className={`${styles.dropdownIcon} ${mobileResourcesOpen ? styles.dropdownIconOpen : ''}`} />
            </button>
            <div className={`${styles.mobileSubLinks} ${mobileResourcesOpen ? styles.mobileSubLinksOpen : ''}`}>
              <Link href="/retirement-calculator" className={isLinkActive('/retirement-calculator') ? styles.active : ''} onClick={() => setIsMobileMenuOpen(false)}>
                Retirement Calculator
              </Link>
              <Link href="/unclaimed-money" className={isLinkActive('/unclaimed-money') ? styles.active : ''} onClick={() => setIsMobileMenuOpen(false)}>
                Unclaimed Money
              </Link>
              <Link href="/where-is-my-refund" className={isLinkActive('/where-is-my-refund') ? styles.active : ''} onClick={() => setIsMobileMenuOpen(false)}>
                Where Is My Refund?
              </Link>
              <Link href="/find-old-401k" className={isLinkActive('/find-old-401k') ? styles.active : ''} onClick={() => setIsMobileMenuOpen(false)}>
                Find Old 401k
              </Link>
            </div>
          </div>

          <Link href="/about" className={`${styles.mobileNavLink} ${isLinkActive('/about') ? styles.active : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </Link>

          <div className={styles.mobileAuthButtons}>
            <button onClick={() => { setLoginModal(true); setIsMobileMenuOpen(false); }} className={styles.mobileLoginBtn}>Sign In</button>
            <button onClick={() => { setSignupModal(true); setIsMobileMenuOpen(false); }} className={styles.mobileSignupBtn}>Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
