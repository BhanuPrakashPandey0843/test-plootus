import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { employerNewDataSelector } from '../../lib/slices/employerSlice';
import TableHeader from './TableHeader';
import TableRow, { getStratData } from './TableRow';
import TableFooter from './TableFooter';

const useStyles = makeStyles()((theme) => ({
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '600px',
  },
  headerDiv: {
    backgroundColor: '#F8FAFC',
    borderBottom: '2px solid #E2E8F0',
  },
  rows: {
    flex: 1,
    overflowY: 'auto', // Replacing react-custom-scrollbars with native scrolling
    width: '100%',
  },
}));

export const get_name = (strategy) => {
  switch (strategy) {
    case 0:
      return 'proposed_5';
    case 1:
      return 'proposed_1';
    case 2:
      return 'proposed_2';
    case 3:
      return 'proposed_3';
    case 4:
      return 'proposed_4';
    default:
      return undefined;
  }
};

const wrapper = (strat) => {
  const strat_name = get_name(strat);
  function compare(a, b) {
    if (strat_name) {
      if (parseFloat(a[strat_name]) < parseFloat(b[strat_name])) {
        return 1;
      }
      if (parseFloat(a[strat_name]) > parseFloat(b[strat_name])) {
        return -1;
      }
      return 0;
    } else {
      console.log('Strategy is undefined');
      return 0;
    }
  }
  return compare;
};

const FundsTable = ({ strategy, style, funds: propsFunds }) => {
  const { classes } = useStyles();
  const [total, setTotal] = useState(0);
  const { funds: reduxFunds } = useSelector(employerNewDataSelector);
  const funds = propsFunds || reduxFunds || [];
  const current = false;
  
  // Create a new sorted array to avoid mutating Redux state
  const _funds = [...funds].sort(wrapper(strategy));

  useEffect(() => {
    if (funds && funds.length) {
      let Total = 0;
      for (let i = 0; i < funds.length; i++) {
        Total += parseFloat(getStratData(strategy, funds[i])) || 0;
      }
      setTotal(Total);
    }
  }, [strategy, funds]);

  return (
    <div className={classes.container} style={style}>
      <div className={classes.headerDiv}>
        <TableHeader current={current} />
      </div>
      <div className={classes.rows}>
        {_funds.map((item, index) => (
          <TableRow
            key={item.symbol || index}
            item={item}
            index={index}
            strategy={strategy}
            current={current}
          />
        ))}
        <TableFooter total={Math.round(total)} current={current} />
      </div>
    </div>
  );
};

export default FundsTable;
