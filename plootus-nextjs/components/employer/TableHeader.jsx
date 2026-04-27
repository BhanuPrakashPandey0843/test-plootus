import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  headerRow: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px 16px',
    backgroundColor: '#F8FAFC',
    borderBottom: '2px solid #E2E8F0',
    color: '#64748B',
    fontWeight: 600,
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  srno: {
    width: '40px',
  },
  leftCol: {
    flex: 2,
  },
  valCol: {
    flex: 1,
    textAlign: 'center',
  },
  ratingCol: {
    flex: 1,
    textAlign: 'center',
  },
}));

const TableHeader = ({ current }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.headerRow}>
      <div className={classes.srno}>#</div>
      <div className={classes.leftCol}>Fund Name</div>
      <div className={classes.valCol}>Allocation</div>
      <div className={classes.ratingCol}>Morningstar Rating</div>
    </div>
  );
};

export default TableHeader;
