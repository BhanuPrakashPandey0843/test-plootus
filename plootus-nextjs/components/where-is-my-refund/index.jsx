import React from 'react';
import { makeStyles } from 'tss-react/mui';
import RefundHeader from './components/RefundHeader';
import RefundButtons from './components/RefundButtons';
import RefundInfo from './components/RefundInfo';
import StateRefundGrid from './components/StateRefundGrid';
import TaxPartners from './components/TaxPartners';
import PartnersCarousel from './components/PartnersCarousel';

const useStyles = makeStyles()(() => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '40px',
  },
}));

const WhereIsMyRefundPage = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <RefundHeader />
      <RefundButtons />
      <RefundInfo />
      <TaxPartners />
      <PartnersCarousel />
      <StateRefundGrid />
    </div>
  );
};

export default WhereIsMyRefundPage;
