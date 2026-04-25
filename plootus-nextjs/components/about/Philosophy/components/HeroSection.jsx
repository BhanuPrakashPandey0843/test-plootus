import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Typography } from '@mui/material';

const useStyles = makeStyles()((theme) => ({
  root: {
    position: 'relative',
    height: '400px',
    width: '100%',
    backgroundColor: '#F8FAFC',
    overflow: 'hidden',
    display: 'flex',
  },
  leftContent: {
    width: '50%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(4),
    },
  },
  titleWrapper: {
    position: 'relative',
    zIndex: 2,
  },
  mainTitle: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#1E293B',
    lineHeight: 1.2,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    },
  },
  blueTitle: {
    color: '#4361EE',
    display: 'block',
    marginBottom: theme.spacing(1),
  },
  description: {
    fontSize: '1.125rem',
    color: '#505050',
    lineHeight: 1.6,
    maxWidth: '440px',
  },
  rightImage: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '50%',
    height: '100%',
    backgroundColor: 'rgba(67, 97, 238, 0.02)',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      objectPosition: 'right',
      display: 'block',
    },
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.05,
    backgroundImage: `
      linear-gradient(rgba(67, 97, 238, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(67, 97, 238, 0.1) 1px, transparent 1px)
    `,
    backgroundSize: '20px 20px',
    zIndex: 1,
    pointerEvents: 'none',
  },
}));

const HeroSection = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      {/* Left Content */}
      <div className={classes.leftContent}>
        <div className={classes.titleWrapper}>
          <Typography variant="h1" className={classes.mainTitle}>
            <span className={classes.blueTitle}>Our Vision</span>
          </Typography>

          <Typography className={classes.description}>
            Revive the American dream and offer stress-free financial planning
            to everyone
          </Typography>
        </div>
      </div>

      {/* Right Image */}
      <div className={classes.rightImage}>
        <img src="/images/vision-illustration.png" alt="Vision Illustration" />
      </div>

      {/* Background Pattern */}
      <div className={classes.backgroundPattern} />
    </div>
  );
};

export default HeroSection;
