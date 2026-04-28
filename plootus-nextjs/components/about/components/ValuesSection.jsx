import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  section: {
    backgroundColor: '#1A2B4A',
    padding: theme.spacing(6, 0),
    marginBottom: 0,
  },
  secLabel: {
    fontSize: '0.7rem',
    fontWeight: 700,
    letterSpacing: 2.5,
    textTransform: 'uppercase',
    color: '#5DFF9F',
    marginBottom: 8,
    textAlign: 'center',
    display: 'block',
    width: '100%',
  },
  title: {
    fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
    fontWeight: 800,
    color: '#fff',
    lineHeight: 1.15,
    letterSpacing: -0.4,
    marginBottom: 10,
    textAlign: 'center',
    display: 'block',
    width: '100%',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 18,
    marginTop: 40,
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
    },
  },
  valCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1.5px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    padding: '20px 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'background 0.2s, border-color 0.2s, transform 0.2s',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.08)',
      borderColor: 'rgba(93, 255, 159, 0.4)',
      transform: 'translateY(-4px)',
    },
  },
  valIconWrap: {
    width: 52,
    height: 52,
    background: 'rgba(93, 255, 159, 0.15)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  valIconSvg: {
    width: 26,
    height: 26,
    stroke: '#5DFF9F',
    fill: 'none',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
  cardTitle: {
    fontSize: '17px',
    fontWeight: 700,
    color: '#fff',
    marginBottom: 14,
    lineHeight: 1.3,
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  },
  cardDesc: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 1.6,
  },
}));

const ValuesSection = () => {
  const { classes } = useStyles();

  return (
    <section className={classes.section}>
      <Container maxWidth="lg" style={{ textAlign: 'center' }}>
        <div className={`${classes.secLabel} reveal`}>Our Philosophy</div>
        <Typography variant="h2" className={`${classes.title} reveal d1`}>
          Principles that guide our mission
        </Typography>
        <Box className={`${classes.valuesGrid} reveal d2`}>
          <Box className={classes.valCard}>
            <Box className={classes.valIconWrap}>
              <svg className={classes.valIconSvg} viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </Box>
            <Typography variant="h3" className={classes.cardTitle}>
              Democratize Retirement Planning for All
            </Typography>
            <Typography className={classes.cardDesc}>
              Retirement planning shouldn&apos;t be complicated or out of reach. We make it simple, personalized, and accessible—so whether you&apos;re just starting your career or nearing retirement, you can confidently plan for the life you want.
            </Typography>
          </Box>

          <Box className={classes.valCard}>
            <Box className={classes.valIconWrap}>
              <svg className={classes.valIconSvg} viewBox="0 0 24 24">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
            </Box>
            <Typography variant="h3" className={classes.cardTitle}>
              Technology-Enabled, Expert Advice—Without High Cost
            </Typography>
            <Typography className={classes.cardDesc}>
              We combine the power of technology with financial expertise to deliver accurate, unbiased, and affordable guidance by securely connecting your accounts and analyzing your financial picture.
            </Typography>
          </Box>

          <Box className={classes.valCard}>
            <Box className={classes.valIconWrap}>
              <svg className={classes.valIconSvg} viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="9 12 11 14 15 10"></polyline>
              </svg>
            </Box>
            <Typography variant="h3" className={classes.cardTitle}>
              Your Security. Our Top Priority.
            </Typography>
            <Typography className={classes.cardDesc}>
              We take your privacy seriously. Your data is protected with enterprise-grade encryption and strict security practices. We never store credentials and our read-only access keeps you in control.
            </Typography>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default ValuesSection;
