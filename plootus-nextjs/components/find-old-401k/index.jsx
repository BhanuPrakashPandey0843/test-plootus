import React from 'react';
import { Box, Container } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import PartnersSection from '../home/PartnersSection';

// Sub-components
import LostFoundHero from './components/LostFoundHero';
import UnderstandingDatabase from './components/UnderstandingDatabase';
import HowItWorks from './components/HowItWorks';
import AccessDatabase from './components/AccessDatabase';
import PlanSponsors from './components/PlanSponsors';

const useStyles = makeStyles()((theme) => ({
  root: {
    paddingBottom: theme.spacing(0),
    backgroundColor: '#FFFFFF',
    minHeight: '100vh',
  },
  contentContainer: {
    paddingTop: theme.spacing(2),
  },
}));

const FindOld401k = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      {/* Hero Section */}
      <LostFoundHero />

      {/* Main Content */}
      <Container maxWidth="lg" className={classes.contentContainer}>
        <UnderstandingDatabase />
        <AccessDatabase />
        <HowItWorks />
        <PlanSponsors />
      </Container>

      {/* Partners Section */}
      <PartnersSection />
    </Box>
  );
};

export default FindOld401k;
