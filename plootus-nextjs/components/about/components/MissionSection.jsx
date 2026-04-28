import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  mission: {
    background: 'linear-gradient(135deg, #3B5FDB 0%, #4C6FE8 100%)',
    padding: theme.spacing(10, 0),
    marginBottom: 0,
  },
  missionInner: {
    display: 'grid',
    gridTemplateColumns: '1.05fr 0.95fr',
    gap: 70,
    alignItems: 'center',
    [theme.breakpoints.down('md')]: { gridTemplateColumns: '1fr', gap: 36 },
  },
  secLabel: {
    fontSize: '0.7rem', fontWeight: 700, letterSpacing: 2.5,
    textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 11,
  },
  title: {
    fontSize: 'clamp(1.85rem, 3vw, 2.6rem)', fontWeight: 800, color: '#fff',
    lineHeight: 1.15, letterSpacing: -0.4, marginBottom: 14,
  },
  missionText: {
    '& p': {
      fontSize: '0.95rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8,
      marginBottom: 18, fontWeight: 400,
      '& strong': { color: '#fff' },
    },
  },
  missionPillars: { display: 'flex', flexDirection: 'column', gap: 20 },
  mp: {
    background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: 12, padding: '40px 24px', display: 'flex', gap: 14,
    alignItems: 'flex-start', transition: 'background 0.2s, border-color 0.2s',
    '&:hover': { background: 'rgba(255,255,255,0.16)', borderColor: 'rgba(255,255,255,0.3)' },
  },
  mpIcon: {
    width: 40, height: 40, borderRadius: 10,
    background: 'rgba(255,255,255,0.15)', display: 'flex',
    alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0,
  },
  mpTitle: { fontSize: '0.92rem', fontWeight: 700, color: '#fff', marginBottom: 4 },
  mpDesc: { fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 },
}));

const MissionSection = () => {
  const { classes } = useStyles();
  return (
    <section id="our-mission" className={classes.mission}>
      <Container maxWidth="lg">
        <Box className={`${classes.missionInner} reveal`}>
          <Box className={classes.missionText}>
            <div className={`${classes.secLabel} reveal d1`}>Our Mission</div>
            <Typography variant="h2" className={`${classes.title} reveal d2`}>
              Democratizing expert financial planning for every American
            </Typography>
            <Typography component="p" className="reveal d3">
              Most workers navigate their 401(k) completely alone — without advice, without context, and often without realizing they are losing thousands of dollars to hidden fees. Meanwhile,{' '}
              <strong>institutional investors and the wealthy have access to advisors who optimize every dollar.</strong>
            </Typography>
            <Typography component="p" className="reveal d3">
              Plootus was founded to close that gap. Using AI and patent-pending technology, we deliver the kind of personalized retirement analysis that previously cost thousands of dollars — completely free, with no conflicts of interest and no commissions.
            </Typography>
            <Typography component="p" className="reveal d3">
              <strong>Financial planning information needs to be available to everyone</strong> — on their phones, in plain language, in minutes. That is not a product pitch. It is the reason Plootus exists.
            </Typography>
          </Box>
          <Box className={`${classes.missionPillars} reveal d4`}>
            <Box className={classes.mp}>
              <Box className={classes.mpIcon}>🔬</Box>
              <Box>
                <Typography className={classes.mpTitle}>100% Unbiased Recommendations</Typography>
                <Typography className={classes.mpDesc}>We do not promote Fidelity, Vanguard, BlackRock, or anyone else. We analyze your actual plan options and recommend only what is best for you.</Typography>
              </Box>
            </Box>
            <Box className={classes.mp}>
              <Box className={classes.mpIcon}>🌎</Box>
              <Box>
                <Typography className={classes.mpTitle}>Built for Everyone, Not Just the Wealthy</Typography>
                <Typography className={classes.mpDesc}>Whether you are a first-year teacher or a senior engineer, you deserve the same quality of retirement guidance. Plootus is free — always.</Typography>
              </Box>
            </Box>
            <Box className={classes.mp}>
              <Box className={classes.mpIcon}>🛡️</Box>
              <Box>
                <Typography className={classes.mpTitle}>Privacy First, Always</Typography>
                <Typography className={classes.mpDesc}>No Social Security number required. No selling your data. We collect only what we need to help you — your financial life is yours.</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default MissionSection;
