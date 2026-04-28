import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  section: {
    padding: theme.spacing(4.5, 0),
    backgroundColor: '#F5F7FF',
    textAlign: 'center',
    marginBottom: 0,
  },
  secLabel: {
    fontSize: '0.7rem',
    fontWeight: 700,
    letterSpacing: 2.5,
    textTransform: 'uppercase',
    color: '#3B5FDB',
    marginBottom: 11,
    textAlign: 'center',
    display: 'block',
    width: '100%',
  },
  title: {
    fontSize: 'clamp(1.85rem, 3vw, 2.6rem)',
    fontWeight: 800,
    color: '#1A2B4A',
    lineHeight: 1.15,
    letterSpacing: -0.4,
    marginBottom: 14,
    textAlign: 'center',
    display: 'block',
    width: '100%',
  },
  secIntro: {
    fontSize: '0.98rem',
    color: '#6B7A90',
    lineHeight: 1.75,
    maxWidth: 620,
    fontWeight: 400,
    textAlign: 'center',
    margin: '0 auto',
    display: 'block',
    width: '100%',
  },
  pressWrap: {
    borderTop: '1px solid #E4E9F2',
    paddingTop: 48,
    marginTop: 48,
  },
  pressLabel: {
    textAlign: 'center',
    fontSize: '0.7rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#6B7A90',
    marginBottom: 28,
  },
  pressLogos: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  pressItem: {
    textAlign: 'center',
    padding: '11px 26px',
    borderRight: '1px solid #E4E9F2',
    opacity: 0.7,
    transition: 'opacity 0.2s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
    '&:last-child': {
      borderRight: 'none',
    },
    '&:hover': {
      opacity: 1,
    },
    [theme.breakpoints.down('sm')]: {
      borderRight: 'none',
      borderBottom: '1px solid #E4E9F2',
      padding: '24px 0',
    },
  },
  pressLogoImg: {
    height: 60,
    width: 'auto',
    maxWidth: 140,
    objectFit: 'contain',
  },
  pressName: {
    fontSize: '0.95rem',
    fontWeight: 800,
    color: '#1A2B4A',
    letterSpacing: -0.2,
  },
  pressDesc: {
    fontSize: '0.68rem',
    color: '#6B7A90',
    marginTop: 2,
  },
}));

const PressSection = () => {
  const { classes } = useStyles();

  return (
    <section className={classes.section}>
      <Container maxWidth="lg" style={{ textAlign: 'center' }}>
        <div className={`${classes.secLabel} reveal`}>In the Press</div>
        <Typography variant="h2" className={`${classes.title} reveal d1`}>
          Featured and Recognized By
        </Typography>
        <Typography className={`${classes.secIntro} reveal d2`}>
          Plootus&apos;s mission to democratize retirement planning has been featured by leading financial publications and institutions.
        </Typography>

        <Box className={`${classes.pressWrap} reveal d3`}>
          <div className={classes.pressLabel}>As seen and featured in</div>
          <Box className={classes.pressLogos}>
            <Box className={classes.pressItem}>
              <img src="/images/About/plandviser.jpeg" alt="PLANADVISER" className={classes.pressLogoImg} />
              <Box>
                <Typography className={classes.pressName}>PLANADVISER</Typography>
                <Typography className={classes.pressDesc}>FinTech and AI in Planning</Typography>
              </Box>
            </Box>
            <Box className={classes.pressItem}>
              <img src="/images/About/plansponsor.jpeg" alt="PLANSPONSOR" className={classes.pressLogoImg} />
              <Box>
                <Typography className={classes.pressName}>PLANSPONSOR</Typography>
                <Typography className={classes.pressDesc}>Financial Planning Access</Typography>
              </Box>
            </Box>
            <Box className={classes.pressItem}>
              <img src="/images/About/ebri.jpeg" alt="EBRI" className={classes.pressLogoImg} />
              <Box>
                <Typography className={classes.pressName}>EBRI</Typography>
                <Typography className={classes.pressDesc}>Retirement Symposium Speaker</Typography>
              </Box>
            </Box>
            <Box className={classes.pressItem}>
              <img src="/images/About/college_investor.jpeg" alt="The College Investor" className={classes.pressLogoImg} />
              <Box>
                <Typography className={classes.pressName}>The College Investor</Typography>
                <Typography className={classes.pressDesc}>AI-Powered 401(k) Review</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default PressSection;
