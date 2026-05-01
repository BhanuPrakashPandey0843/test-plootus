import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Container, Typography } from '@mui/material';

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: '#F8FAFC',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(6),
    },
  },
  contentWrapper: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
  },
  title: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#1E293B',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
    },
  },
  highlightedText: {
    color: '#4361EE',
  },
  description: {
    fontSize: '1.125rem',
    color: '#64748B',
    maxWidth: '920px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
}));

const RetirementCalculatorHeader = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <div className={classes.contentWrapper}>
          <Typography variant="h1" className={classes.title}>
            <span className={classes.highlightedText}>AI Retirement{' '}Calculator</span>
            <br />
            Free, Accurate 401(k), 403(b), 457(b) Retirement Planner
          </Typography>
          <Typography className={classes.description}>
            Use Plootus’ free AI retirement calculator to see if you’re on track. Instantly analyze your 401(k), 403(b), 457(b),  savings, and spending to project retirement income, expenses, and retirement age by location.
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default RetirementCalculatorHeader;
