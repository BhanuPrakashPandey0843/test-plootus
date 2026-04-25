import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  heroSection: {
    backgroundColor: '#FFFFFF',
    padding: theme.spacing(8, 0, 4),
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#4361EE',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  },
  heroSubtitle: {
    fontSize: '1.125rem',
    color: '#64748B',
    maxWidth: '1100px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
}));

const LostFoundHero = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.heroSection}>
      <Container maxWidth="lg">
        <Typography variant="h1" className={classes.heroTitle}>
          Find Your Old 401k - Retirement Savings Lost & Found
        </Typography>
        <Typography className={classes.heroSubtitle}>
          Easily locate forgotten retirement accounts like 401(k)s, pensions, and other employer-sponsored plans.
          Learn how the database works, who it's for, and how to securely access your information to reclaim the
          benefits you've earned.
        </Typography>
      </Container>
    </Box>
  );
};

export default LostFoundHero;
