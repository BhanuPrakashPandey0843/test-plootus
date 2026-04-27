import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  footerRow: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px 16px',
    backgroundColor: '#F8FAFC',
    borderTop: '2px solid #E2E8F0',
    fontWeight: 700,
    color: '#1E293B',
    fontSize: '1rem',
  },
  srno: {
    width: '40px',
  },
  leftCol: {
    flex: 2,
    textAlign: 'right',
    paddingRight: '20px',
    textTransform: 'uppercase',
  },
  valCol: {
    flex: 1,
    textAlign: 'center',
    color: '#4361EE',
  },
  ratingCol: {
    flex: 1,
  },
}));

const TableFooter = ({ total, current }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.footerRow}>
      <div className={classes.srno}></div>
      <div className={classes.leftCol}>Total Allocation</div>
      <div className={classes.valCol}>{total}%</div>
      <div className={classes.ratingCol}></div>
    </div>
  );
};

export default TableFooter;
