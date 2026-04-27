import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  statStrip: {
    background: '#1A2B4A',
    padding: theme.spacing(1.3, 0),
    marginBottom: 0,
  },
  statStripInner: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 0,
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
  },
  ssItem: {
    textAlign: 'center',
    padding: theme.spacing(1.75, 2.5),
    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
    '&:last-child': {
      borderRight: 'none',
    },
    [theme.breakpoints.down('md')]: {
      '&:nth-of-type(2)': {
        borderRight: 'none',
      },
    },
    [theme.breakpoints.down('sm')]: {
      borderRight: 'none',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      '&:last-child': {
        borderBottom: 'none',
      },
    },
  },
  ssNum: {
    fontSize: '2rem',
    fontWeight: 800,
    color: '#fff',
    lineHeight: 1,
    marginBottom: 5,
  },
  greenText: {
    color: '#5DFF9F',
  },
  ssLabel: {
    fontSize: '0.75rem',
    color: 'rgba(255, 255, 255, 0.5)',
    fontWeight: 400,
    lineHeight: 1.5,
    '& strong': {
      color: 'rgba(255, 255, 255, 0.78)',
      display: 'block',
      marginBottom: 2,
      fontSize: '0.74rem',
      whiteSpace: 'nowrap',
    },
  },
}));

const StatStrip = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.statStrip}>
      <Container maxWidth="lg">
        <Box className={`${classes.statStripInner} reveal`}>
          <Box className={`${classes.ssItem} reveal d1`}>
            <Typography className={classes.ssNum}>
              <span className={classes.greenText}>$100K</span>
            </Typography>
            <Typography className={classes.ssLabel}>
              <strong>Average Hidden Fees Per Worker</strong>
              Paid unnecessarily over a career of poor 401(k) fund selection
            </Typography>
          </Box>
          <Box className={`${classes.ssItem} reveal d2`}>
            <Typography className={classes.ssNum}>1 in 3</Typography>
            <Typography className={classes.ssLabel}>
              <strong>Americans Have Zero Retirement Savings</strong>
              Financial stress is the #1 source of anxiety for working adults
            </Typography>
          </Box>
          <Box className={`${classes.ssItem} reveal d3`}>
            <Typography className={classes.ssNum}>
              28<span style={{ fontSize: '1.2rem' }}>%</span>
            </Typography>
            <Typography className={classes.ssLabel}>
              <strong>Retirement Balance Lost to Excess Fees</strong>
              Per U.S. Department of Labor: 1% higher fees = 28% less at retirement
            </Typography>
          </Box>
          <Box className={`${classes.ssItem} reveal d4`}>
            <Typography className={classes.ssNum}>
              60<span style={{ fontSize: '1.2rem' }}>%</span>
            </Typography>
            <Typography className={classes.ssLabel}>
              <strong>Rely Solely on Their 401(k)</strong>
              For most Americans it is their only or largest retirement vehicle (Koski Research)
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default StatStrip;
