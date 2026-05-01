import React from 'react';
import { makeStyles } from 'tss-react/mui';
import HubNav from '../HubNav/HubNav';
import RetirementHero from './components/RetirementHero';
import SmartRetirementPlanning from './components/SmartRetirementPlanning';
import RetirementCalculatorSection from './components/RetirementCalculatorSection';
import PartnersSection from '../home/PartnersSection';
import CalculatorStatic from '../retirement-calculator/CalculatorStatic/CalculatorStatic';
import Head from 'next/head';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
  },
}));

const RetirementSolutions = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Head>
        <title>401k & Retirement Planning for Individuals — Free AI Advisor | Plootus</title>
        <meta name="description" content="Take control of your 401(k), 403(b), or 457 plan with Plootus. Our free AI analyzes your employer's retirement plan, recommends the best funds for your risk profile, and helps you retire on time — no financial advisor fees required." />
        <meta property="og:title" content="Free Retirement Planning for Individuals | Plootus" />
        <meta property="og:description" content="Plootus helps individuals optimize their 401k and 403b plans for free — personalized fund picks, fee analysis, and retirement goal tracking in one place." />
        <link rel="canonical" href="https://www.plootus.com/individual-users" />
      </Head>
      <HubNav />
      
      <RetirementHero />
      <SmartRetirementPlanning />
      <RetirementCalculatorSection />
      <PartnersSection />
    </div>
  );
};

export default RetirementSolutions;
