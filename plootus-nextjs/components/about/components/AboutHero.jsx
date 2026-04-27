import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  hero: {
    background: 'linear-gradient(135deg, #3B5FDB 0%, #4C6FE8 40%, #5B7FFF 100%)',
    padding: theme.spacing(2.5, 0, 0),
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 0,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: -120,
      right: -80,
      width: 480,
      height: 480,
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.06)',
      pointerEvents: 'none',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 40,
      left: -60,
      width: 300,
      height: 300,
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.04)',
      pointerEvents: 'none',
    },
  },
  heroInner: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    gap: theme.spacing(5),
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
    },
  },
  heroContent: {
    padding: theme.spacing(4, 0, 4),
  },
  heroBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 7,
    background: 'rgba(255, 255, 255, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    borderRadius: 99,
    padding: '6px 16px',
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '0.74rem',
    fontWeight: 600,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginBottom: 22,
    '&::before': {
      content: '"●"',
      color: '#5DFF9F',
      fontSize: '0.6rem',
    },
  },
  title: {
    fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
    fontWeight: 800,
    color: '#fff',
    lineHeight: 1.12,
    letterSpacing: -0.5,
    marginBottom: 20,
  },
  greenText: {
    color: '#5DFF9F',
  },
  heroSub: {
    fontSize: '1.02rem',
    color: 'rgba(255, 255, 255, 0.78)',
    lineHeight: 1.75,
    maxWidth: 520,
    marginBottom: 36,
    fontWeight: 400,
  },
  heroBtns: {
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
  },
  btnWhite: {
    background: '#fff',
    color: '#3B5FDB',
    padding: '12px 26px',
    borderRadius: 8,
    fontWeight: 700,
    fontSize: '0.88rem',
    textDecoration: 'none',
    transition: 'transform 0.15s, box-shadow 0.2s',
    textTransform: 'none',
    '&:hover': {
      background: '#fff',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    },
  },
  btnOutlineWhite: {
    background: 'transparent',
    color: '#fff',
    border: '2px solid rgba(255, 255, 255, 0.5)',
    padding: '10px 24px',
    borderRadius: 8,
    fontWeight: 600,
    fontSize: '0.88rem',
    textDecoration: 'none',
    transition: 'border-color 0.2s, background 0.2s',
    textTransform: 'none',
    '&:hover': {
      borderColor: '#fff',
      background: 'rgba(255, 255, 255, 0.1)',
    },
  },
  heroVisual: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  visualContainer: {
    width: '100%',
    maxWidth: 520,
    aspectRatio: '1.4 / 1',
    position: 'relative',
    padding: theme.spacing(1.5),
    border: '3px solid rgba(226, 232, 240, 0.3)',
    borderRadius: 24,
    background: 'rgba(255, 255, 255, 0.05)',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    },
  },
  visualInner: {
    width: '100%',
    height: '100%',
    background: '#F5F7FD',
    borderRadius: 16,
    padding: theme.spacing(3),
    border: '1px solid rgba(226, 232, 240, 0.6)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5),
    },
  },
  heroImage: {
    width: '100%',
    height: 'auto',
    maxHeight: '100%',
    objectFit: 'contain',
    display: 'block',
  },
}));

const AboutHero = () => {
  const { classes } = useStyles();

  return (
    <section className={classes.hero}>
      <Container maxWidth="lg">
        <Box className={classes.heroInner}>
          <Box className={`${classes.heroContent} reveal`}>
            <Box className={`${classes.heroBadge} reveal d1`}>About Plootus</Box>
            <Typography variant="h1" className={`${classes.title} reveal d2`}>
              <span className={classes.greenText}>Invest</span> smarter,<br />retire with confidence.
            </Typography>
            <Typography className={`${classes.heroSub} reveal d3`}>
              Plootus was built on a simple belief: every American deserves expert retirement guidance — not just the wealthy. We use AI to optimize your 401(k), 403(b), 457, or TSP plan, cut hidden fees, and give you a clear path to a secure retirement. Free. Unbiased. Always.
            </Typography>
            <Box className={`${classes.heroBtns} reveal d4`}>
              <Button href="/" className={classes.btnWhite}>Get Started Free</Button>
              <Button href="#our-mission" className={classes.btnOutlineWhite}>Our Mission</Button>
            </Box>
          </Box>
          <Box className={`${classes.heroVisual} reveal d3`}>
            <Box className={classes.visualContainer}>
              <Box className={classes.visualInner}>
                <img
                  src="/images/track-accounts.png"
                  alt="Track All Your Financial Accounts"
                  className={classes.heroImage}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default AboutHero;
