import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { useRouter } from 'next/router';

const useStyles = makeStyles()((theme) => ({
  challengeHeroSection: {
    backgroundImage:
      'linear-gradient(135deg,#2363A5 ), radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06) 2px, transparent 2px), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.06) 2px, transparent 2px)',
    backgroundSize: 'auto, 12px 12px, 14px 14px',
    backgroundBlendMode: 'overlay',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
  },
  challengeHeroContentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing(4),
    },
  },
  challengeHeroContent: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      flex: '0 0 60%',
      maxWidth: '60%',
    },
  },
  challengeHeroTitle: {
    fontWeight: 700,
    color: '#FFFFFF',
    marginBottom: theme.spacing(0.5),
    fontSize: '1.75rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.25rem',
    },
  },
  challengeHeroTagline: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#38A169',
    marginBottom: theme.spacing(0.5),
  },
  challengeHeroDescription: {
    color: '#E2E8F0',
    marginBottom: theme.spacing(1.5),
    fontWeight: 600,
    fontSize: '0.875rem',
  },
  challengeHeroCtaButton: {
    backgroundColor: '#F59E0B',
    color: '#FFFFFF',
    padding: theme.spacing(0.75, 2),
    borderRadius: 8,
    fontSize: '0.9rem',
    fontWeight: 700,
    textTransform: 'none',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    '&:hover': {
      backgroundColor: '#D97706',
    },
  },
  challengeHeroActionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(1.5),
    marginTop: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing(3),
    },
  },
  challengeHeroDateContainer: {
    display: 'flex',
    flexDirection: 'column',
    borderLeft: '2px solid rgba(255,255,255,0.3)',
    paddingLeft: theme.spacing(1.5),
  },
  challengeHeroImageContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      flex: '0 0 40%',
      maxWidth: '40%',
    },
  },
  challengeHeroImage: {
    width: '70%',
    maxWidth: 300,
    height: 'auto',
  },
}));

const ChallengeBanner = () => {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <Box className={classes.challengeHeroSection}>
      <Container maxWidth="xl">
        <Box className={classes.challengeHeroContentWrapper}>
          <Box className={classes.challengeHeroContent}>
            <Typography variant="h3" className={classes.challengeHeroTitle}>
              Plootus 21-Day Financial Habits Challenge
            </Typography>
            <Typography className={classes.challengeHeroTagline}>
              Small Steps. Big Change. Master Your Money in 21 Days.
            </Typography>
            <Typography className={classes.challengeHeroDescription}>
              Join the Plootus 21-Day Financial Habits Challenge. <br />
              Daily 5-minute tasks to build confidence, reduce stress, and win prizes!
            </Typography>

            <Box className={classes.challengeHeroActionContainer}>
              <Box className={classes.challengeHeroDateContainer}>
                <Typography style={{ color: '#E2E8F0', fontWeight: 700, fontSize: '1rem', marginBottom: 2 }}>
                  Challenge starts May 1, 2026
                </Typography>
                <Typography style={{ color: '#E0E7FF', fontSize: '0.75rem', fontWeight: 500 }}>
                  (Registration closes April 28)
                </Typography>
              </Box>
              <Button
                variant="contained"
                className={classes.challengeHeroCtaButton}
                onClick={() => router.push('/21dayfinancialchallenge')}
              >
                Register FREE!
              </Button>
            </Box>
          </Box>
          <Box className={classes.challengeHeroImageContainer}>
            <img
              src="/HOMEPAGE.svg"
              alt="Financial planning illustration"
              className={classes.challengeHeroImage}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ChallengeBanner;
