import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Rating from '@mui/material/Rating';
import { makeStyles } from 'tss-react/mui';
import { BLUE_PLOOT } from '../../lib/slices/employerSlice';

const GREEN_PLOOT = '#36B37E';

const useStyles = makeStyles()((theme) => ({
  row: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    borderBottom: '1px solid #F1F5F9',
    transition: 'background-color 0.2s',
  },
  srno: {
    width: '40px',
    fontWeight: 500,
    color: '#64748B',
  },
  leftCol: {
    flex: 2,
    display: 'flex',
    alignItems: 'center',
  },
  circle: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    marginRight: '16px',
    flexShrink: 0,
  },
  tickerInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  tickerName: {
    color: BLUE_PLOOT,
    fontWeight: 600,
    fontSize: '0.95rem',
  },
  tickerSymbol: {
    color: '#64748B',
    fontSize: '0.8rem',
  },
  valCol: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 600,
    color: '#1E293B',
  },
  ratingCol: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export const roundNum = (num, decimals = 2, fixed = 0) => {
  if (num === null || num === undefined) return '';
  const parsed = parseFloat(num);
  if (isNaN(parsed)) return '';
  if (fixed) return parsed.toFixed(decimals);
  return Math.round(parsed * Math.pow(10, decimals)) / Math.pow(10, decimals);
};

export const getStratData = (strategy, item) => {
  switch (strategy) {
    case 0:
      return item.proposed_5;
    case 1:
      return item.proposed_1;
    case 2:
      return item.proposed_2;
    case 3:
      return item.proposed_3;
    case 4:
      return item.proposed_4;
    default:
      return undefined;
  }
};

const TableRow = ({ item, strategy, index, current }) => {
  const { classes } = useStyles();
  const bgColor = index % 2 === 0 ? '#FFFFFF' : '#F8FAFC';

  if (!item || !item.ticker_name) return null;

  const val = getStratData(strategy, item);

  return (
    <div className={classes.row} style={{ backgroundColor: bgColor }}>
      <div className={classes.srno}>{index + 1}.</div>
      
      <div className={classes.leftCol}>
        <div
          className={classes.circle}
          style={{ backgroundColor: index % 2 === 0 ? BLUE_PLOOT : GREEN_PLOOT }}
        />
        <div className={classes.tickerInfo}>
          <span className={classes.tickerName}>{item.ticker_name}</span>
          <span className={classes.tickerSymbol}>{item.ticker}</span>
        </div>
      </div>

      <div className={classes.valCol}>
        {val !== undefined ? `${roundNum(val, 1, 1)}%` : '0.0%'}
      </div>

      <div className={classes.ratingCol}>
        {item.rating ? (
          <Rating
            name="read-only"
            value={parseFloat(item.rating)}
            precision={0.1}
            readOnly
            size="small"
            emptyIcon={<StarBorderIcon fontSize="inherit" style={{ color: '#fcce41' }} />}
            style={{ color: '#fcce41' }}
          />
        ) : (
          <span style={{ color: '#94A3B8' }}>--</span>
        )}
      </div>
    </div>
  );
};

export default TableRow;
