import React from 'react';
import { makeStyles } from 'tss-react/mui';
import HeroSection from './components/HeroSection';
import OurPhilosophy from './components/OurPhilosophy';

const useStyles = makeStyles()(() => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Philosophy = () => {
  const { classes } = useStyles();

  return (
    <main className={classes.root}>
      <HeroSection />
      <OurPhilosophy />
    </main>
  );
};

export default Philosophy;
