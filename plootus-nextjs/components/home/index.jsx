import React from 'react';
import { Container } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import HeroSection from './HeroSection';
import ChallengeBanner from './ChallengeBanner';
import PartnersSection from './PartnersSection';
import WhatPlootusDoes from './WhatPlootusDoes';
import FinanceFeatures from './FinanceFeatures';
import RetirementCalculator from './RetirementCalculator';
import HomeNewsSection from './HomeNewsSection';
import TestimonialsSection from './TestimonialsSection';
import BlogSection from './BlogSection';
import HubNav from '../HubNav/HubNav';

const useStyles = makeStyles()(() => ({
  root: {
    width: '100%',
  },
  container: {
    maxWidth: '100%',
    padding: 0,
    margin: 0,
  },
}));

const Home = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <HubNav />
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <ChallengeBanner />
        <HeroSection />
        <PartnersSection />
        <WhatPlootusDoes />
        <FinanceFeatures />
        <RetirementCalculator />
        <HomeNewsSection />
        <TestimonialsSection />
        <BlogSection />
      </Container>
    </div>
  );
};

export default Home;
