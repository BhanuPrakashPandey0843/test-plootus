import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  ctaSection: {
    background: 'linear-gradient(135deg, #3B5FDB 0%, #4C6FE8 50%, #5B7FFF 100%)',
    padding: theme.spacing(4.5, 0),
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: 0,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: -100,
      right: -100,
      width: 400,
      height: 400,
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.06)',
      pointerEvents: 'none',
    },
  },
  ctaInner: {
    position: 'relative',
    zIndex: 1,
    maxWidth: 980,
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    marginBottom: 16,
    fontSize: 'clamp(1.85rem, 3vw, 2.6rem)',
    fontWeight: 800,
  },
  desc: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.73)',
    lineHeight: 1.7,
    marginBottom: 32,
  },
  ctaBtns: {
    display: 'flex',
    justifyContent: 'center',
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
    textTransform: 'none',
    transition: 'transform 0.15s, box-shadow 0.2s',
    '&:hover': {
      background: '#fff',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    },
  },
  btnBlueDark: {
    background: 'rgba(255, 255, 255, 0.12)',
    border: '2px solid rgba(255, 255, 255, 0.4)',
    color: '#fff',
    padding: '10px 24px',
    borderRadius: 8,
    fontWeight: 600,
    fontSize: '0.88rem',
    textTransform: 'none',
    transition: 'background 0.2s',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.2)',
    },
  },
}));

const CTASection = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.ctaSection}>
      <Container maxWidth="lg" style={{ textAlign: 'center' }}>
        <Box className={`${classes.ctaInner} reveal`}>
          <Typography variant="h2" className={`${classes.title} reveal d1`} align="center">
            Your retirement deserves better than guesswork.
          </Typography>
          <Typography className={`${classes.desc} reveal d2`} align="center">
            Join thousands of Americans who have used Plootus to optimize their 401(k), cut hidden fees, and build a clear path to retirement — completely free, in minutes.
          </Typography>
          <Box className={`${classes.ctaBtns} reveal d3`}>
            <Button href="/" className={classes.btnWhite}>Get Your Free Analysis</Button>
            <Button href="/individual-users" className={classes.btnBlueDark}>Explore Solutions</Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default CTASection;
