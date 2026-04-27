import React from 'react';
import { Typography, Container } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: '#F8FAFC',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
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
  highlightedText: {
    color: '#4361EE',
  },
  tagline: {
    fontSize: '1.125rem',
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: theme.spacing(1),
  },
  description: {
    fontSize: '1.125rem',
    color: '#64748B',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: 1.6,
    '& strong': {
      color: '#1E293B',
      fontWeight: 700,
    },
  },
}));

const PhilosophyHero = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h1" className={classes.title}>
          Our <span className={classes.highlightedText}>Philosophy</span>
        </Typography>
        <Typography className={classes.tagline}>
          Smart Technology. Expert Guidance. Your Best Future.
        </Typography>
        <Typography className={classes.description}>
          At <strong>Plootus</strong>, we believe everyone deserves the tools, insights, and confidence to make smarter financial decisions—today and for years to come.
        </Typography>
      </Container>
    </div>
  );
};

export default PhilosophyHero;
