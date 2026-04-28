import React from 'react';
import { makeStyles } from 'tss-react/mui';
import HubNav from '../HubNav/HubNav';
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
      <HubNav />
      {/* PageHeaders component should ideally be added here, but for Next.js it's better to use next/head in the page component. */}
      
      <RetirementHero />
      <SmartRetirementPlanning />
      <RetirementCalculatorSection />
      <PartnersSection />
    </div>
  );
};

export default RetirementSolutions;
