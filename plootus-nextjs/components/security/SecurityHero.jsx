import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: '#f0f4fb',
    textAlign: 'center',
    padding: theme.spacing(8.5, 5, 7.5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(6, 2, 4),
    },
  },
  title: {
    fontSize: '2rem !important',
    fontWeight: '700 !important',
    color: '#1E293B',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem !important',
    },
  },
  titleHighlight: {
    color: '#4361EE',
  },
  tagline: {
    fontSize: '1.125rem',
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: theme.spacing(1),
  },
  subDescription: {
    fontSize: '1.125rem',
    color: '#64748B',
    maxWidth: '800px',
    margin: '0 auto 20px',
    lineHeight: 1.6,
  },
  heroBadges: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '14px',
    flexWrap: 'wrap',
  },
  heroBadgeItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '7px',
    background: '#fff',
    border: '1.5px solid #d1ddf5',
    borderRadius: '30px',
    padding: '8px 16px',
    fontSize: '13px',
    fontWeight: 600,
    color: '#374151',
    boxShadow: '0 1px 4px rgba(33,82,217,0.06)',
  },
  badgeIcon: {
    width: '20px',
    height: '20px',
    color: '#2152d9',
    flexShrink: 0,
  },
}));

const SecurityHero = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h1" className={classes.title}>
          Your Security. Our{' '}
          <span className={classes.titleHighlight}>Top Priority.</span>
        </Typography>
        <Typography className={classes.tagline}>
          Yes. 100% Secure. No Social Security Number Required.
        </Typography>
        <Typography className={classes.subDescription}>
          At Plootus, we've built every layer of our platform with your protection in mind.
          Bank-level encryption, read-only access, and zero storage of sensitive credentials.
        </Typography>

        <Box className={classes.heroBadges}>
          <Box className={classes.heroBadgeItem}>
            <svg className={classes.badgeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
            </svg>
            256-bit SSL Encryption
          </Box>
          <Box className={classes.heroBadgeItem}>
            <svg className={classes.badgeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
            Read-Only Access
          </Box>
          <Box className={classes.heroBadgeItem}>
            <svg className={classes.badgeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            AWS Cloud Secured
          </Box>
          <Box className={classes.heroBadgeItem}>
            <svg className={classes.badgeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
            </svg>
            Zero Credential Storage
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SecurityHero;
