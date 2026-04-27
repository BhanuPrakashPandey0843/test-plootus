import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import HeroSection from './components/HeroSection';
import OurPhilosophy from './components/OurPhilosophy';
import PartnersSection from '../about/components/PartnersSection';

const useStyles = makeStyles()(() => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
}));

const PhilosophyPage = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root} component="main">
      <HeroSection />
      <OurPhilosophy />
      <PartnersSection
        titleColor="#1A2B4A"
        titleFontSize="35px"
        subtitleFontSize="17px"
      />
    </Box>
  );
};

export default PhilosophyPage;
