import React from 'react';
import { makeStyles } from 'tss-react/mui';
import RetirementHero from './RetirementHero';
import SmartRetirementPlanning from './SmartRetirementPlanning';
import RetirementCalculatorSection from './RetirementCalculatorSection';
import PartnersSection from '../home/PartnersSection';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background?.default || '#ffffff',
    minHeight: '100vh',
  },
}));

const RetirementSolutions = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <RetirementHero />
      <SmartRetirementPlanning />
      <RetirementCalculatorSection />
      <PartnersSection />
    </div>
  );
};

export default RetirementSolutions;
