import React from 'react';
import { makeStyles } from 'tss-react/mui';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import SignUpBanner from './SignUpBanner';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background?.default || '#ffffff',
    minHeight: '100vh',
  },
}));

const FinancialAdvisorsPage = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <HeroSection />
      <FeaturesSection />
      <SignUpBanner />
    </div>
  );
};

export default FinancialAdvisorsPage;
