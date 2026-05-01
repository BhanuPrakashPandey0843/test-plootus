import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { PieChart } from 'react-minimal-pie-chart';
import { Typography, CircularProgress } from '@mui/material';

const useStyles = makeStyles()((theme) => ({
  pieContainer: {
    width: '100%',
    maxWidth: 300,
    position: 'relative',
    margin: '0 auto',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  noDataText: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(2),
  },
}));

const getChartData = (funds, strategy) => {
  if (!funds?.length) return [];

  const colors = [
    '#4361EE',
    '#3B82F6',
    '#60A5FA',
    '#93C5FD',
    '#BFDBFE',
    '#2563EB',
    '#1D4ED8',
    '#1E40AF',
    '#1E3A8A',
    '#172554',
  ];

  return funds
    .map((fund, index) => {
      let value = 0;
      switch (strategy) {
        case 0:
          value = fund.proposed_5;
          break;
        case 1:
          value = fund.proposed_1;
          break;
        case 2:
          value = fund.proposed_2;
          break;
        case 3:
          value = fund.proposed_3;
          break;
        case 4:
          value = fund.proposed_4;
          break;
        default:
          value = 0;
      }

      return {
        title: fund.ticker_name,
        value: parseFloat(value) || 0,
        color: colors[index % colors.length],
      };
    })
    .filter((item) => item.value > 0);
};

const NewPie = ({ funds, strategy, loading = false }) => {
  const { classes } = useStyles();
  const data = getChartData(funds, strategy);

  if (!funds?.length) {
    return (
      <Typography className={classes.noDataText}>
        No allocation data available
      </Typography>
    );
  }

  return (
    <div className={classes.pieContainer}>
      {loading && (
        <div className={classes.loadingOverlay}>
          <CircularProgress />
        </div>
      )}

      <PieChart
        data={data}
        lineWidth={20}
        paddingAngle={2}
        rounded
        label={({ dataEntry }) =>
          dataEntry.value > 5 ? `${Math.round(dataEntry.value)}%` : ''
        }
        labelStyle={{
          fontSize: '4px',
          fontFamily: 'sans-serif',
          fill: '#fff',
        }}
        labelPosition={70}
        animate
      />
    </div>
  );
};

export default NewPie;
