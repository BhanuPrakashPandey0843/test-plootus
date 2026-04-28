import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  section: { padding: theme.spacing(4.5, 0), backgroundColor: '#F5F7FF', marginBottom: 0 },
  secLabel: {
    fontSize: '0.7rem', fontWeight: 700, letterSpacing: 2.5,
    textTransform: 'uppercase', color: '#3B5FDB', marginBottom: 11,
    textAlign: 'center', display: 'block', width: '100%',
  },
  title: {
    fontSize: 'clamp(1.85rem, 3vw, 2.6rem)', fontWeight: 800, color: '#1A2B4A',
    lineHeight: 1.15, letterSpacing: -0.4, marginBottom: 14,
    textAlign: 'center', display: 'block', width: '100%',
  },
  secIntro: {
    fontSize: '0.98rem', color: '#6B7A90', lineHeight: 1.75, maxWidth: 720,
    fontWeight: 400, textAlign: 'center', margin: '0 auto',
  },
  stepsWrap: {
    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20,
    marginTop: 52, position: 'relative',
    '&::before': {
      content: '""', position: 'absolute', top: 28, left: '14%',
      width: '72%', height: 2,
      background: 'linear-gradient(90deg, #3B5FDB, #4C6FE8, #5B7FFF)',
      [theme.breakpoints.down('md')]: { display: 'none' },
    },
    [theme.breakpoints.down('md')]: { gridTemplateColumns: 'repeat(2, 1fr)' },
    [theme.breakpoints.down('sm')]: { gridTemplateColumns: '1fr' },
  },
  stepCard: {
    background: '#FFFFFF', border: '1px solid #E4E9F2', borderRadius: 12,
    padding: '23px 5px', textAlign: 'center', position: 'relative',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 6px 24px rgba(59,95,219,0.12)' },
  },
  stepNum: {
    width: 54, height: 54, borderRadius: '50%', background: '#3B5FDB',
    color: '#fff', fontSize: '1.15rem', fontWeight: 800,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 18px', position: 'relative', zIndex: 1,
    boxShadow: '0 4px 14px rgba(59,95,219,0.35)',
  },
  stepTitle: { fontSize: '0.92rem', fontWeight: 700, color: '#1A2B4A', marginBottom: 8 },
  stepDesc: { fontSize: '0.8rem', color: '#6B7A90', lineHeight: 1.65 },
}));

const HowItWorks = () => {
  const { classes } = useStyles();
  return (
    <section className={classes.section}>
      <Container maxWidth="lg" style={{ textAlign: 'center' }}>
        <div className={`${classes.secLabel} reveal`}>How It Works</div>
        <Typography variant="h2" className={`${classes.title} reveal d1`}>
          Expert 401(k) guidance in under a minute
        </Typography>
        <Typography className={`${classes.secIntro} reveal d2`}>
          Plootus uses a patent-pending AI algorithm to analyze your employer's retirement plan and generate personalized investment recommendations. No account linking required to get started.
        </Typography>
        <Box className={`${classes.stepsWrap} reveal d3`}>
          <Box className={classes.stepCard}>
            <div className={classes.stepNum}>1</div>
            <Typography className={classes.stepTitle}>Search Your Employer</Typography>
            <Typography className={classes.stepDesc}>Find your 401(k), 403(b), 457, or TSP plan from our database of thousands of U.S. employer plans. Just type your employer name — no login or SSN needed.</Typography>
          </Box>
          <Box className={classes.stepCard}>
            <div className={classes.stepNum}>2</div>
            <Typography className={classes.stepTitle}>Set Your Risk Strategy</Typography>
            <Typography className={classes.stepDesc}>Choose conservative, moderate, or aggressive. Plootus factors in your age, timeline, and savings to calibrate the right allocation for your goals.</Typography>
          </Box>
          <Box className={classes.stepCard}>
            <div className={classes.stepNum}>3</div>
            <Typography className={classes.stepTitle}>Get Your Allocation</Typography>
            <Typography className={classes.stepDesc}>Our AI scans your plan's actual fund lineup and selects the best-performing, lowest-fee options available to you. A personalized portfolio in seconds.</Typography>
          </Box>
          <Box className={classes.stepCard}>
            <div className={classes.stepNum}>4</div>
            <Typography className={classes.stepTitle}>Track and Stay on Course</Typography>
            <Typography className={classes.stepDesc}>Link all your accounts for a complete financial picture. Plootus monitors your portfolio and alerts you when your strategy needs adjustment.</Typography>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default HowItWorks;
