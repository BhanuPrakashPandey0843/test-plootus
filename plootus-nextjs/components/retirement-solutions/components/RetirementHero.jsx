import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Container, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import SearchBox401kNew from '../../utils/SearchBox401kNew';
import useEmployerSearch from '../../../lib/hooks/useEmployerSearch';
import { fetch_allocations } from '../../../lib/slices/employerSlice';

const useStyles = makeStyles()((theme) => ({
  root: {
    position: 'relative',
    paddingBottom: theme.spacing(6),
  },
  heroSection: {
    backgroundColor: '#F8FAFC',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(16),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(20),
    },
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(6),
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing(8),
    },
  },
  leftContent: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      flex: '0 0 60%',
      maxWidth: '60%',
    },
  },
  heroTitle: {
    fontSize: '2.5rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    color: '#1E293B',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    },
  },
  heroTitleHighlight: {
    color: '#4361EE',
    display: 'inline',
  },
  description: {
    fontSize: '1.125rem',
    lineHeight: 1.6,
    marginBottom: theme.spacing(4),
    maxWidth: '90%',
    color: '#475569',
  },
  appButtons: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
  },
  appButton: {
    display: 'block',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
    },
  },
  appButtonImage: {
    height: 40,
  },
  rightContent: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      flex: '0 0 40%',
      maxWidth: '40%',
      height: 300,
    },
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    objectPosition: 'center',
    display: 'block',
  },
  searchSection: {
    position: 'relative',
    marginTop: theme.spacing(-12),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(-20),
    },
  },
  searchCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.05)',
    padding: theme.spacing(3),
    margin: theme.spacing(0, 2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4),
      margin: 0,
    },
  },
  searchTitle: {
    fontSize: '1.75rem',
    fontWeight: 600,
    color: '#1E293B',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
  },
  searchFieldWrapper: {
    marginBottom: theme.spacing(4),
    width: '100%',
  },
  companyLogosSection: {
    marginTop: theme.spacing(5),
  },
  logosTitle: {
    fontSize: '1rem',
    fontWeight: 500,
    color: '#64748B',
    marginBottom: theme.spacing(3),
  },
  logosGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
    gap: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(6, 1fr)',
    },
  },
  logoBox: {
    width: 80,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: '50%',
    border: '1px solid #E2E8F0',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.05)',
      borderColor: '#4361EE',
    },
    '&:focus': {
      outline: 'none',
      borderColor: '#4361EE',
      boxShadow: '0 0 0 2px rgba(67, 97, 238, 0.3)',
    },
  },
  logoImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}));

const companyLogos = [
  {
    name: 'AMAZON.COM SERVICES,INC. 401k',
    logo: '/images/employee-logos/amazon.png',
    ein: '911986545',
  },
  {
    name: 'GENERAL ELECTRIC COMPANY 401k',
    logo: '/images/employee-logos/ge.png',
    ein: '140689340',
  },
  {
    name: 'FACEBOOK, INC. 401k',
    logo: '/images/employee-logos/fb.png',
    ein: '201665019',
  },
  {
    name: 'TESLA, INC. 401k',
    logo: '/images/employee-logos/testla.png',
    ein: '912197729',
  },
  {
    name: 'APPLE INC. 401k',
    logo: '/images/employee-logos/apple.png',
    ein: '942404110',
  },
  {
    name: 'STARBUCKS CORPORATION 401k',
    logo: '/images/employee-logos/star.png',
    ein: '911325671',
  },
  {
    name: 'NISSAN NORTH AMERICA, INC. 401k',
    logo: '/images/employee-logos/nissan.png',
    ein: '952108010',
  },
  {
    name: 'NEW YORK UNIVERSITY 401k',
    logo: '/images/employee-logos/newyork.png',
    ein: '135562308',
  },
  {
    name: 'FAIRFIELD UNIVERSITY 403B',
    logo: '/images/employee-logos/fairuni.png',
    ein: '60646623',
  },
  {
    name: 'THE UNIVERSITY OF ALABAMA SYSTEM 403(B) PLAN',
    logo: '/images/employee-logos/alabama.png',
    ein: '999994609',
  },
  {
    name: 'Sacred Heart University 403b plan',
    logo: '/images/employee-logos/sacri.png',
    ein: '140689340',
  },
  {
    name: 'UNIVERSITY OF MICHIGAN 401A RETIREMENT PLAN',
    logo: '/images/employee-logos/michan.png',
    ein: '999994755',
  },
];

const RetirementHero = () => {
  const { classes } = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  const employerSearchProps = useEmployerSearch();

  const handleEmployerClick = async (company) => {
    localStorage.setItem(
      'empData',
      JSON.stringify({
        ein: company.ein,
        name: company.name.split(' (EIN')[0],
      })
    );

    await dispatch(
      fetch_allocations(
        {
          ein: company.ein,
          name: company.name.split(' (EIN')[0],
          showLimitExceedError: true,
        },
        true
      )
    );
    router.push('/employer');
  };

  return (
    <div className={classes.root}>
      <div className={classes.heroSection}>
        <Container maxWidth="lg">
          <div className={classes.contentWrapper}>
            <div className={classes.leftContent}>
              <Typography component="h1" className={classes.heroTitle}>
                Plan Smart,{' '}
                <span className={classes.heroTitleHighlight}>Retire Happy</span>
              </Typography>

              <Typography className={classes.description}>
                Plootus specializes in retirement planning through 401k and 403b
                plans—empowering you to make the right decisions for your
                future.
              </Typography>

              <div className={classes.appButtons}>
                <a
                  href="https://apps.apple.com/us/app/plootus/id1311669590"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.appButton}
                >
                  <img
                    src="/images/app-store-badge.png"
                    alt="Download on App Store"
                    className={classes.appButtonImage}
                  />
                </a>
              </div>
            </div>

            <div className={classes.rightContent}>
              <img
                src="/HOMEPAGE.svg"
                alt="Retirement Planning"
                className={classes.heroImage}
              />
            </div>
          </div>
        </Container>
      </div>

      <Container maxWidth="lg" className={classes.searchSection}>
        <div className={classes.searchCard}>
          <Typography variant="h2" className={classes.searchTitle}>
            Make the most of your Employer's 401k, 403b, 457, or TSP Plan!
          </Typography>

          <Typography className={classes.description}>
            See for yourself! Search for your employer-sponsored retirement plan
            to get FREE expert advice on choosing the right investments. We've
            analyzed over $618 billion in retirement assets to help you save
            more and earn more.
          </Typography>

          <div className={classes.searchFieldWrapper}>
            <SearchBox401kNew {...employerSearchProps} fromStatic={true} />
          </div>

          <div className={classes.companyLogosSection}>
            <Typography className={classes.logosTitle}>
              Popular 401k and 403b Searches
            </Typography>

            <div className={classes.logosGrid}>
              {companyLogos.map((company) => (
                <div
                  key={company.ein}
                  className={classes.logoBox}
                  onClick={() => handleEmployerClick(company)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Search ${company.name}`}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    title={`Plootus: ${company.name}`}
                    className={classes.logoImage}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RetirementHero;
