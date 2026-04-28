import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  section: { padding: theme.spacing(6, 0), marginBottom: 0 },
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
  problemContent: { margin: '40px auto 0', textAlign: 'left' },
  problemText: {
    '& p': {
      fontSize: '0.95rem', color: '#444F5E', lineHeight: 1.8, marginBottom: 16,
      '& strong': { color: '#1A2B4A' },
    },
  },
  highlightBox: {
    background: '#EEF2FF', borderLeft: '4px solid #3B5FDB',
    borderRadius: '0 12px 12px 0', padding: '18px 22px',
    fontSize: '0.92rem', color: '#1A2B4A', fontWeight: 600,
    lineHeight: 1.55, margin: '22px 0',
  },
}));

const ProblemSection = () => {
  const { classes } = useStyles();
  return (
    <section className={classes.section}>
      <Container maxWidth="lg" style={{ textAlign: 'center' }}>
        <div className={`${classes.secLabel} reveal`}>The Problem</div>
        <Typography variant="h2" className={`${classes.title} reveal d1`}>
          The retirement crisis hiding in plain sight
        </Typography>
        <Box className={`${classes.problemContent} reveal d2`}>
          <Box className={classes.problemText}>
            <Typography component="p">
              The 401(k) was created to put retirement savings in the hands of working Americans. What it also created — unintentionally — was a system where{' '}
              <strong>complexity, jargon, and hidden fees overwhelmingly favor the financial industry over the individual.</strong>
            </Typography>
            <div className={classes.highlightBox}>
              "The difference between a good and bad fund selection, compounded over 30 years, can easily exceed $200,000. Most workers make this decision once, during onboarding, with no advice."
            </div>
            <Typography component="p">
              Most workers select their 401(k) investments once and never revisit them. Target-date funds feel safe but often carry excessive fees. And with{' '}
              <strong>60% of Americans relying solely on their 401(k)</strong> as their primary retirement vehicle, the stakes could not be higher.
            </Typography>
            <Typography component="p">
              Plootus was built to change this — by making expert, AI-driven 401(k) analysis available to anyone with a smartphone, in under a minute, at no cost.
            </Typography>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default ProblemSection;
