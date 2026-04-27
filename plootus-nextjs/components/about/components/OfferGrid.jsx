import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  section: {
    padding: theme.spacing(6, 0),
    backgroundColor: '#F5F7FF',
    marginBottom: 0,
  },
  secLabel: {
    fontSize: '0.7rem',
    fontWeight: 700,
    letterSpacing: 2.5,
    textTransform: 'uppercase',
    color: '#3B5FDB',
    marginBottom: 8,
    textAlign: 'center',
    display: 'block',
    width: '100%',
  },
  title: {
    fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
    fontWeight: 800,
    color: '#1A2B4A',
    lineHeight: 1.15,
    letterSpacing: -0.4,
    marginBottom: 10,
    textAlign: 'center',
    display: 'block',
    width: '100%',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  },
  secIntro: {
    fontSize: '0.92rem',
    color: '#6B7A90',
    lineHeight: 1.6,
    maxWidth: 900,
    fontWeight: 400,
    textAlign: 'center',
    margin: '0 auto',
    display: 'block',
    width: '100%',
  },
  offerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 16,
    marginTop: 40,
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
  },
  offerCard: {
    background: '#FFFFFF',
    border: '1px solid #E4E9F2',
    borderRadius: 16,
    padding: '20px 22px',
    transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      borderRadius: '16px 16px 0 0',
      background: 'linear-gradient(90deg, #3B5FDB, #5B7FFF)',
      transform: 'scaleX(0)',
      transformOrigin: 'left',
      transition: 'transform 0.3s',
    },
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 12px 32px rgba(59, 95, 219, 0.12)',
      borderColor: '#c0cefd',
      '&::after': {
        transform: 'scaleX(1)',
      },
    },
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
    width: '100%',
    justifyContent: 'center',
  },
  ocIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    background: '#EEF2FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    flexShrink: 0,
  },
  greenIcon: {
    background: '#E8F9F0',
  },
  cardTitle: {
    fontSize: '0.92rem',
    fontWeight: 700,
    color: '#1A2B4A',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  },
  cardDesc: {
    fontSize: '0.8rem',
    color: '#6B7A90',
    lineHeight: 1.6,
    marginBottom: 12,
  },
  ocTag: {
    display: 'inline-block',
    marginTop: 'auto',
    fontSize: '0.62rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    padding: '2px 8px',
    borderRadius: 99,
    background: '#EEF2FF',
    color: '#3B5FDB',
  },
  greenTag: {
    background: '#E8F9F0',
    color: '#2DBE6C',
  },
}));

const OfferGrid = () => {
  const { classes } = useStyles();

  return (
    <section className={classes.section}>
      <Container maxWidth="lg" style={{ textAlign: 'center' }}>
        <div className={`${classes.secLabel} reveal`}>Everything You Need</div>
        <Typography variant="h2" className={`${classes.title} reveal d1`}>
          Take control of your financial future
        </Typography>
        <Typography className={`${classes.secIntro} reveal d2`}>
          From tracking your accounts to budgeting and personalized investment advice, Plootus simplifies your financial life.
        </Typography>

        <Box className={`${classes.offerGrid} reveal d3`}>
          <Box className={classes.offerCard}>
            <Box className={classes.cardHeader}>
              <Box className={classes.ocIcon}>🤖</Box>
              <Typography className={classes.cardTitle}>AI-Powered 401(k) Optimizer</Typography>
            </Box>
            <Typography className={classes.cardDesc}>Our algorithm analyzes your plan's complete fund lineup, selecting the best-performing, lowest-fee options based on your risk profile. Get an optimized portfolio in under a minute.</Typography>
            <span className={classes.ocTag}>Core Feature</span>
          </Box>

          <Box className={classes.offerCard}>
            <Box className={classes.cardHeader}>
              <Box className={`${classes.ocIcon} ${classes.greenIcon}`}>💸</Box>
              <Typography className={classes.cardTitle}>Hidden Fee Detector</Typography>
            </Box>
            <Typography className={classes.cardDesc}>Most workers lose $100,000+ in unnecessary fees over their career. Plootus surfaces every cost — expense ratios, management fees, administrative charges — and shows you cheaper alternatives in your plan.</Typography>
            <span className={`${classes.ocTag} ${classes.greenTag}`}>Fee Analysis</span>
          </Box>

          <Box className={classes.offerCard}>
            <Box className={classes.cardHeader}>
              <Box className={classes.ocIcon}>📊</Box>
              <Typography className={classes.cardTitle}>Complete Financial Dashboard</Typography>
            </Box>
            <Typography className={classes.cardDesc}>Link 14,000+ accounts across banks, brokerages, and credit cards. Track your net worth, spending, income, and retirement progress — all in one unified view with real-time data.</Typography>
            <span className={classes.ocTag}>Account Aggregation</span>
          </Box>

          <Box className={classes.offerCard}>
            <Box className={classes.cardHeader}>
              <Box className={classes.ocIcon}>🧮</Box>
              <Typography className={classes.cardTitle}>Retirement Income Calculator</Typography>
            </Box>
            <Typography className={classes.cardDesc}>Model your retirement path with precision. Set your target year, expected expenses, and Plootus calculates your required contribution rate, projected income, and savings milestones — automatically.</Typography>
            <span className={classes.ocTag}>Planning Tool</span>
          </Box>

          <Box className={classes.offerCard}>
            <Box className={classes.cardHeader}>
              <Box className={classes.ocIcon}>📱</Box>
              <Typography className={classes.cardTitle}>iOS and Android App</Typography>
            </Box>
            <Typography className={classes.cardDesc}>Full Plootus functionality on your phone. Check your retirement progress, review fund recommendations, track spending, and receive alerts when your portfolio needs attention — anywhere, anytime.</Typography>
            <span className={classes.ocTag}>Mobile</span>
          </Box>

          <Box className={classes.offerCard}>
            <Box className={classes.cardHeader}>
              <Box className={`${classes.ocIcon} ${classes.greenIcon}`}>👥</Box>
              <Typography className={classes.cardTitle}>Financial Advisor Collaboration</Typography>
            </Box>
            <Typography className={classes.cardDesc}>Prefer working with a human advisor? Delegate access to any advisor of your choice. Advisors can view your complete financial position and manage recommendations — all through the Plootus platform.</Typography>
            <span className={`${classes.ocTag} ${classes.greenTag}`}>Advisor Access</span>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default OfferGrid;
