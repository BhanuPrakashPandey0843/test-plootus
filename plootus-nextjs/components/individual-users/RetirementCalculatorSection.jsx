import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Container, Typography } from '@mui/material';
// We will port CalculatorStatic shortly. For now, we will use the existing RetirementCalculator 
// from components/home if CalculatorStatic is too complex to port immediately, or I will port it.
// The user wants an EXACT match. So I must import CalculatorStatic once ported.
// I will create a placeholder import that points to the expected location.
import CalculatorStatic from '../calculators/CalculatorStatic/CalculatorStatic';

const useStyles = makeStyles()((theme) => ({
  root: {
    padding: theme.spacing(4, 0, 0, 0),
    backgroundColor: 'white',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6, 0, 0, 0),
    },
  },
  header: {
    textAlign: 'center',
    marginBottom: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(3),
    },
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#1E293B',
    marginBottom: theme.spacing(3),
    lineHeight: 1.2,
    [theme.breakpoints.up('md')]: {
      fontSize: '2.75rem',
    },
  },
  description: {
    color: '#727272',
    fontSize: '1rem',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: 1.6,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.125rem',
    },
  },
}));

const RetirementCalculatorSection = () => {
  const { classes } = useStyles();

  return (
    <div id="calculator-section" className={classes.root}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <div className={classes.header}>
          <Typography variant="h1" className={classes.title}>
            Plan Smarter with Our AI Retirement Calculator!
          </Typography>
          <Typography className={classes.description}>
            Use our AI Retirement Calculator to visualize your savings potential
            and discover how smart planning can secure your financial future.
          </Typography>
        </div>
        <CalculatorStatic />
      </Container>
    </div>
  );
};

export default RetirementCalculatorSection;
