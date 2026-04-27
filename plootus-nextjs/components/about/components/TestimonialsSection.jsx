import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  section: {
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
  testiGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 20,
    marginTop: 52,
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
    },
  },
  testiCard: {
    background: '#FFFFFF',
    border: '1px solid #E4E9F2',
    borderRadius: 20,
    padding: 26,
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 6px 24px rgba(59, 95, 219, 0.12)',
    },
  },
  stars: {
    color: '#F5A623',
    fontSize: '0.83rem',
    marginBottom: 12,
    letterSpacing: 1,
  },
  testiText: {
    fontSize: '0.86rem',
    color: '#444F5E',
    lineHeight: 1.75,
    marginBottom: 18,
    fontStyle: 'italic',
  },
  testiAuthor: {
    fontWeight: 700,
    fontSize: '0.8rem',
    color: '#1A2B4A',
  },
  testiSource: {
    fontSize: '0.71rem',
    color: '#6B7A90',
    marginTop: 2,
    '& a': {
      color: '#3B5FDB',
      textDecoration: 'none',
    },
  },
}));

const TestimonialsSection = () => {
  const { classes } = useStyles();

  return (
    <section className={classes.section}>
      <Container maxWidth="lg" style={{ textAlign: 'center' }}>
        <div className={`${classes.secLabel} reveal`}>What Users Say</div>
        <Typography variant="h2" className={`${classes.title} reveal d1`}>
          Real results for real people
        </Typography>
        <Box className={`${classes.testiGrid} reveal d2`}>
          <Box className={classes.testiCard}>
            <div className={classes.stars}>★★★★★</div>
            <Typography className={classes.testiText}>
              "This is an awesome app which gives you all flexibility to plan and invest. Especially for novice users like me who do not want to spend time but still want to plan finances. I have tried Betterment, Wealthfront and Financial Engines — none gives the same flexibility and features as Plootus."
            </Typography>
            <Typography className={classes.testiAuthor}>Verified App Store User</Typography>
            <Typography className={classes.testiSource}>
              <a href="https://apps.apple.com/us/app/plootus-401k-403b-simplified/id1311669590" target="_blank" rel="noopener noreferrer">
                Apple App Store Review
              </a>
            </Typography>
          </Box>

          <Box className={classes.testiCard}>
            <div className={classes.stars}>★★★★★</div>
            <Typography className={classes.testiText}>
              "Easy and free to use app for 401(k) allocation. I was able to pick the right investment strategy for my retirement. They also provide a budgeting and planning tool — all for FREE. Excellent tool for anyone looking to take control of their financial future."
            </Typography>
            <Typography className={classes.testiAuthor}>Verified Trustpilot User</Typography>
            <Typography className={classes.testiSource}>
              <a href="https://www.trustpilot.com/review/plootus.com" target="_blank" rel="noopener noreferrer">
                Trustpilot Review
              </a>
            </Typography>
          </Box>

          <Box className={classes.testiCard}>
            <div className={classes.stars}>★★★★★</div>
            <Typography className={classes.testiText}>
              "Plootus makes every user unafraid and excited to tackle the world of investing. By asking for limited information, the app chooses retirement plans suited to the user's needs — while also telling you exactly how much you need to save before retiring."
            </Typography>
            <Typography className={classes.testiAuthor}>Verified App Store User</Typography>
            <Typography className={classes.testiSource}>
              <a href="https://apps.apple.com/us/app/plootus-401k-403b-simplified/id1311669590" target="_blank" rel="noopener noreferrer">
                Apple App Store Review
              </a>
            </Typography>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
