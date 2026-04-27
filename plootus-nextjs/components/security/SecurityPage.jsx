import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import SecurityHero from './SecurityHero';
import SecurityPillars from './SecurityPillars';
import PartnersSection from '../about/components/PartnersSection';

const useStyles = makeStyles()(() => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
}));

const SecurityPage = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root} component="main">
      <SecurityHero />
      <SecurityPillars />
      <PartnersSection
        titleColor="#1A2B4A"
        titleFontSize="30px"
        subtitleFontSize="15px"
      />
    </Box>
  );
};

export default SecurityPage;
