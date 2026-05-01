import React, { useEffect, useState, useContext } from 'react';
import Head from 'next/head';
import { makeStyles } from 'tss-react/mui';
import { Container, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import SearchBox401k from '../utils/SearchBox401kNew';
import Picker, { usePickerModal } from '../utils/Picker/Picker';
import FundsTable from './FundsTable';
import MessageBox from './MessageBox';
import MainSignupScreen from './MainSignupScreen';
import PartnersSection from '../home/PartnersSection';
import BlogSection from '../home/BlogSection';
import HubNav from '../HubNav/HubNav';

import { LoginSignupContext } from '../auth/LoginSignupContext';
import { strategy_constants, fetch_allocations, employerNewDataSelector } from '../../lib/slices/employerSlice';
import useEmployerSearch from '../../lib/hooks/useEmployerSearch';

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: '#F8FAFC',
    minHeight: '100vh',
    paddingBottom: theme.spacing(10),
  },
  invisibleRoot: {
    backgroundColor: '#FFFFFF',
    minHeight: '100vh',
    paddingBottom: theme.spacing(10),
  },
  heroSection: {
    backgroundColor: '#F8FAFC',
    padding: theme.spacing(8, 0, 12, 0),
    position: 'relative',
    overflow: 'hidden',
  },
  heroContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: theme.spacing(6),
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      textAlign: 'left',
    },
  },
  heroText: {
    flex: 1,
  },
  heroTitle: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#1E293B',
    lineHeight: 1.2,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    },
  },
  heroSubtitle: {
    fontSize: '1.125rem',
    color: '#64748B',
    lineHeight: 1.6,
    maxWidth: '600px',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  innerImage: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
  },
  searchSection: {
    marginTop: theme.spacing(-8),
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  searchBoxWrapper: {
    width: '100%',
    maxWidth: '800px',
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: theme.spacing(3),
    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
  },
  mainContentRow: {
    marginTop: theme.spacing(4),
  },
  tableContainer: {
    position: 'relative',
    marginTop: theme.spacing(4),
  },
}));

const StaticEmployer = () => {
  const { classes } = useStyles();
  const router = useRouter();
  const props = useEmployerSearch();
  const dispatch = useDispatch();

  const { funds, employer_selected } = useSelector(employerNewDataSelector);
  const [strategy, setStrategy] = useState(0);

  const { picker, setIndex } = usePickerModal((idx) => {
    setStrategy(idx);
  }, strategy);

  const { signupModal, setSignupModal, setLoginModal } = useContext(LoginSignupContext) || {};

  const openModal = () => {
    if (setSignupModal) setSignupModal(true);
  };

  const hasData = funds && funds.length > 0;
  const showMessageBox = props.employer_selected !== '' && !props.data?.length && !hasData;

  return (
    <div className={hasData ? classes.root : classes.invisibleRoot}>
      <Head>
        <title>401k IRA 403b 457 Financial Investment Advisors | Plootus</title>
        <meta
          name="description"
          content="Professional Investment Advisors to give advice beyond traditional retirement. Analyze your 401k, IRA, 430b and 457 options. Simply add your employer to get your free financial advice."
        />
        <meta
          name="keywords"
          content="401k plan, 403b plan, Retirement Planning, Financial Planning, 401k rollover, 401k early withdrawl, 457 plan, TSP plan,401k, 403b, early retirement, student loan"
        />
      </Head>

      <HubNav />

      <div className={classes.heroSection}>
        <Container maxWidth="lg">
          <div className={classes.heroContainer}>
            <div className={classes.heroText}>
              <Typography variant="h1" className={classes.heroTitle}>
                Get the Most Out of Your Employer's 401k, 403b, 457, or TSP Plan
              </Typography>
              <Typography className={classes.heroSubtitle}>
                Search for your employer-sponsored retirement plan and get FREE
                expert guidance on optimizing your investment allocation. We help
                you maximize growth and build a stronger future.
              </Typography>
            </div>
            {/* The image is missing from next-app but we point to monorepo relative if possible, or placeholder */}
            <div className={classes.imageContainer}>
              <img className={classes.innerImage} src="/images/employee.svg" alt="" onError={(e) => { e.target.style.display = 'none'; }} />
            </div>
          </div>
        </Container>
      </div>

      <Container maxWidth="lg">
        <div className={classes.searchSection}>
          <div className={classes.searchBoxWrapper}>
            <SearchBox401k {...props} fromStatic={true} dontNull={true} />
            
            {showMessageBox && (
              <div style={{ marginTop: '24px' }}>
                <MessageBox />
              </div>
            )}
          </div>
        </div>

        {hasData && (
          <div className={classes.mainContentRow}>
            <Picker
              rows={strategy_constants}
              activeIndex={picker.activeIndex}
              setIndex={setIndex}
              myStyle={{ marginBottom: '24px' }}
            />
            
            <div className={classes.tableContainer}>
              <FundsTable strategy={strategy} />
              <MainSignupScreen openModal={openModal} />
            </div>
          </div>
        )}
      </Container>

      {!hasData && (
        <div style={{ marginTop: '80px' }}>
          <PartnersSection />
          <BlogSection />
        </div>
      )}
    </div>
  );
};

export default StaticEmployer;
