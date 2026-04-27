import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  section: {
    padding: theme.spacing(4.5, 0),
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
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  },
  secIntro: {
    fontSize: '0.98rem',
    color: '#6B7A90',
    lineHeight: 1.75,
    maxWidth: 900,
    fontWeight: 400,
    textAlign: 'center',
    margin: '0 auto',
    display: 'block',
    width: '100%',
  },
  featureRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 60,
    alignItems: 'center',
    marginBottom: 15,
    '&:last-child': {
      marginBottom: 0,
    },
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
      gap: 32,
    },
  },
  // Reverses the visual/text order on desktop; on mobile stacks normally
  reverse: {
    '& $featureVisual': {
      order: 2,
      [theme.breakpoints.down('md')]: {
        order: 1,
      },
    },
    '& $featureText': {
      order: 1,
      [theme.breakpoints.down('md')]: {
        order: 2,
      },
    },
  },
  featureTag: {
    display: 'inline-block',
    background: '#EEF2FF',
    color: '#3B5FDB',
    fontSize: '0.7rem',
    fontWeight: 700,
    padding: '3px 11px',
    borderRadius: 99,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  greenTag: {
    background: '#E8F9F0',
    color: '#2DBE6C',
  },
  featureText: {
    '& h3': {
      fontSize: '1.45rem',
      fontWeight: 800,
      color: '#1A2B4A',
      marginBottom: 12,
      letterSpacing: -0.3,
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    },
    '& p': {
      fontSize: '0.92rem',
      color: '#6B7A90',
      lineHeight: 1.78,
      marginBottom: 12,
      '& strong': {
        color: '#1A2B4A',
      },
    },
  },
  featureVisual: {
    borderRadius: 16,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      height: 280,
    },
  },
  visualContainer: {
    width: '100%',
    aspectRatio: '1.4 / 1',
    position: 'relative',
    padding: theme.spacing(1),
    border: '2px solid rgba(226, 232, 240, 0.3)',
    borderRadius: 20,
    background: 'rgba(255, 255, 255, 0.05)',
  },
  visualInner: {
    width: '100%',
    height: '100%',
    background: '#F5F7FD',
    borderRadius: 14,
    padding: theme.spacing(8),
    border: '1px solid rgba(226, 232, 240, 0.6)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
}));

const FeaturesSection = () => {
  const { classes } = useStyles();

  const imgStyle = { width: '100%', height: 'auto', display: 'block' };

  return (
    <section className={classes.section}>
      <Container maxWidth="lg" style={{ textAlign: 'center' }}>
        <div className={`${classes.secLabel} reveal`}>Our Solution</div>
        <Typography variant="h2" className={`${classes.title} reveal d1`}>
          Built to make your money work harder
        </Typography>
        <Typography className={`${classes.secIntro} reveal d2`}>
          We combine cutting-edge technology with proven financial principles to give you an unfair advantage in retirement planning.
        </Typography>

        {/* Feature 1: Save on hidden fees — visual LEFT, text RIGHT */}
        <Box className={`${classes.featureRow} reveal d3`} style={{ marginTop: 10 }}>
          <Box className={classes.featureVisual}>
            <Box className={classes.visualContainer} style={{ maxWidth: '100%' }}>
              <Box className={classes.visualInner}>
                <img src="/images/home-features/graph1.png" alt="Save on Hidden Fees" style={imgStyle} />
              </Box>
            </Box>
          </Box>
          <Box className={classes.featureText}>
            <span className={`${classes.featureTag} ${classes.greenTag}`}>Core Feature</span>
            <Typography variant="h3">Save on Hidden Fees</Typography>
            <Typography component="p">Stop losing money to fees you never knew you were paying. Plootus analyzes every fund in your 401(k), 403(b), 457, or TSP plan — surfacing expense ratios, administrative charges, and unnecessary costs.</Typography>
            <Typography component="p">We then recommend lower-cost, better-performing alternatives from your actual plan. The average employee can recover <strong>tens of thousands of dollars</strong> in fees over a career simply by making smarter fund selections.</Typography>
            <Typography component="p">Per the U.S. Department of Labor, a 1% increase in plan fees reduces your final balance by <strong>28%</strong>. Plootus makes every basis point count.</Typography>
          </Box>
        </Box>

        {/* Feature 2: Employer search — text LEFT, visual RIGHT (reversed) */}
        <Box className={`${classes.featureRow} ${classes.reverse} reveal d3`}>
          <Box className={classes.featureText}>
            <span className={classes.featureTag}>AI-Powered</span>
            <Typography variant="h3">Quick Employer Search and Advice</Typography>
            <Typography component="p">Effortlessly locate your 401(k), 403(b), 457, or TSP plan — just enter your employer's name and Plootus delivers tailored investment recommendations within seconds. No hassle, just results.</Typography>
            <Typography component="p">Our algorithm analyzes your plan's complete fund lineup and maps the best options to your <strong>specific risk profile and retirement timeline</strong>. You do not need to understand expense ratios or Sharpe ratios. We do the work.</Typography>
            <Typography component="p">Switching jobs? Plootus analyzes both your old and new employer plans and helps you decide whether to roll over or keep your existing account.</Typography>
          </Box>
          <Box className={classes.featureVisual}>
            <Box className={classes.visualContainer} style={{ maxWidth: '100%' }}>
              <Box className={classes.visualInner}>
                <img src="/images/home-features/graph2.png" alt="Quick Employer Search and Advice" style={imgStyle} />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Feature 3: Dashboard — visual LEFT, text RIGHT */}
        <Box className={`${classes.featureRow} reveal d3`}>
          <Box className={classes.featureVisual}>
            <Box className={classes.visualContainer} style={{ maxWidth: '100%' }}>
              <Box className={classes.visualInner}>
                <img src="/images/track-accounts.png" alt="Track All Your Financial Accounts" style={imgStyle} />
              </Box>
            </Box>
          </Box>
          <Box className={classes.featureText}>
            <span className={classes.featureTag}>Financial Dashboard</span>
            <Typography variant="h3">Track All Your Financial Accounts in One Place</Typography>
            <Typography component="p">Effortlessly manage all your finances in one place. Plootus links your accounts, giving you real-time updates on your checking, savings, credit card, and investment account balances so you can stay on top of your financial health.</Typography>
            <Typography component="p">Connect over <strong>14,000+ banks, credit unions, and investment accounts</strong>. View income vs. expenses, net worth trends, and retirement progress — all from a single, clean dashboard.</Typography>
            <Typography component="p">No more logging into five different websites. Plootus is your financial command center.</Typography>
          </Box>
        </Box>

        {/* Feature 4: Retirement Calculator — text LEFT, visual RIGHT (reversed) */}
        <Box className={`${classes.featureRow} ${classes.reverse} reveal d3`}>
          <Box className={classes.featureText}>
            <span className={classes.featureTag}>Planning Tool</span>
            <Typography variant="h3">AI Retirement Calculator</Typography>
            <Typography component="p">Take the guesswork out of retirement. Plootus's AI-driven retirement calculator offers savings projections, strategic suggestions, and helps you adjust contributions to meet your goals — accounting for inflation, healthcare costs, and 30+ expense categories.</Typography>
            <Typography component="p">Tell us your target retirement year, expected expenses, and current savings. Plootus models your precise path — <strong>how much to contribute, when you can retire, and what income you will be able to sustain</strong> — with clarity and without jargon.</Typography>
            <Typography component="p">We analyze your spending patterns and life changes automatically. You do not need to update a spreadsheet. Plootus does it for you.</Typography>
          </Box>
          <Box className={classes.featureVisual}>
            <Box className={classes.visualContainer} style={{ maxWidth: '100%' }}>
              <Box className={classes.visualInner}>
                <img src="/images/home-features/graph3.png" alt="AI Retirement Calculator" style={imgStyle} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default FeaturesSection;
