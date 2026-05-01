import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Typography } from '@mui/material';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#4361EE',
    overflow: 'hidden',
    position: 'relative',
  },
  sliderContainer: {
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
    display: 'flex',
    width: 'fit-content',
    animation: '$scroll 30s linear infinite',
    '&:hover': {
      animationPlayState: 'paused',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
  },
  '@keyframes scroll': {
    '0%': {
      transform: 'translateX(0%)',
    },
    '100%': {
      transform: 'translateX(-50%)',
    },
  },
  statsGroup: {
    display: 'flex',
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  statText: {
    color: 'white',
    fontSize: '0.875rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
  },
  prefix: {
    fontWeight: 400,
  },
  highlight: {
    color: '#36B37E',
    fontWeight: 600,
  },
  normalText: {
    fontWeight: 400,
  },
  dotSeparator: {
    width: 4,
    height: 4,
    borderRadius: '50%',
    backgroundColor: 'white',
    opacity: 0.6,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  gradientLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 100,
    background: 'linear-gradient(90deg, #4361EE 0%, rgba(67, 97, 238, 0) 100%)',
    pointerEvents: 'none',
  },
  gradientRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: 100,
    background:
      'linear-gradient(270deg, #4361EE 0%, rgba(67, 97, 238, 0) 100%)',
    pointerEvents: 'none',
  },
}));

const StatsSlider = () => {
  const { classes } = useStyles();

  const stats = [
    {
      text: '42%',
      afterText: 'of the millennials have not begun saving for retirement',
    },
    {
      prefix: 'More than',
      text: 'half',
      afterText: 'of the Gen-Xers have less than',
      amount: '$10K',
      endText: 'saved for retirement',
    },
    {
      text: '28%',
      afterText: 'of the people over 55 have no retirement savings',
    },
  ];

  const renderStat = (stat, index) => (
    <div key={index} className={classes.statItem}>
      <Typography className={classes.statText}>
        {stat.prefix && <span className={classes.prefix}>{stat.prefix} </span>}
        <span className={classes.highlight}>{stat.text}</span>
        <span className={classes.normalText}>{stat.afterText}</span>
        {stat.amount && (
          <span className={classes.highlight}> {stat.amount}</span>
        )}
        {stat.endText && (
          <span className={classes.normalText}> {stat.endText}</span>
        )}
      </Typography>

      {/* Dot separator */}
      <div className={classes.dotSeparator} />
    </div>
  );

  return (
    <div className={classes.root}>
      {/* Main Slider Container */}
      <div className={classes.sliderContainer}>
        {/* First set of stats */}
        <div className={classes.statsGroup}>
          {stats.map((stat, index) => renderStat(stat, index))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className={classes.statsGroup}>
          {stats.map((stat, index) => renderStat(stat, index))}
        </div>
      </div>

      {/* Gradient overlays */}
      <div className={classes.gradientLeft} />
      <div className={classes.gradientRight} />
    </div>
  );
};

export default StatsSlider;
