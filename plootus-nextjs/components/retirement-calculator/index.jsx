// =============================================================================
// RetirementCalculator page component — Next.js port
// Exact parity with:
//   packages/web/src/components/NewUI/RetirementCalculator/index.jsx
// =============================================================================
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Container } from '@mui/material';
import RetirementCalculatorHeader from './RetirementCalculatorHeader';
import CalculatorStatic from './CalculatorStatic/CalculatorStatic';
import PartnersSection from '../home/PartnersSection';
import BlogSection from '../home/BlogSection';
import HubNav from '../HubNav/HubNav';

const useStyles = makeStyles()(() => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '20px',
  },
}));

const RetirementCalculatorPage = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <HubNav />
      <RetirementCalculatorHeader />
      <Container maxWidth="lg">
        <CalculatorStatic
          hideHelmet={true}
          hideHeader={true}
          customStyle={{ marginTop: '0px', marginBottom: '0px' }}
        />
      </Container>
      <PartnersSection />
      <BlogSection />
    </div>
  );
};

export default RetirementCalculatorPage;
