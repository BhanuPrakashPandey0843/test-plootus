import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: '#F9FAFB',
    overflow: 'hidden',
    position: 'relative',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(4),
    },
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing(12),
    },
  },
  leftContent: {
    flex: '1',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      maxWidth: '40%',
    },
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      display: 'block', // Use block instead of flex to handle multiline text better
      textAlign: 'left',
    },
  },
  titleText: {
    fontSize: '2rem',
    fontWeight: 500,
    color: '#1E293B',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
      display: 'inline',
      lineHeight: 1.2,
    },
  },
  titleHighlight: {
    fontSize: '2rem',
    fontWeight: 500,
    color: '#4361EE',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
      display: 'inline',
      lineHeight: 1.2,
    },
  },
  mainTitle: {
    fontSize: '2.25rem',
    fontWeight: 600,
    color: '#1E293B',
    lineHeight: 1.2,
    marginBottom: theme.spacing(3),
    letterSpacing: '-0.02em',
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.25rem',
    },
  },
  description: {
    color: '#64748B',
    fontSize: '1rem',
    lineHeight: 1.6,
    marginBottom: theme.spacing(4),
    maxWidth: '95%',
  },
  appButtons: {
    display: 'flex',
    gap: theme.spacing(3),
  },
  appImage: {
    height: 48,
    width: 'auto',
  },
  rightContent: {
    flex: '1',
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      maxWidth: '60%',
    },
  },
  gridPattern: {
    position: 'absolute',
    top: '-10%',
    right: '-20%',
    bottom: '-10%',
    left: '-20%',
    backgroundImage: `url('/images/grid-pattern.png')`,
    backgroundSize: '40px 25px',
    backgroundRepeat: 'repeat',
    opacity: 0.5,
    zIndex: 0,
  },
  heroImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
    position: 'relative',
    zIndex: 2,
    filter: 'drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.1))',
    marginBottom: '-90px',
    [theme.breakpoints.up('md')]: {
      transform: 'scale(1)',
    },
  },
  gradientBlue: {
    position: 'absolute',
    top: '10%',
    right: '-20%',
    width: 300,
    height: 300,
    background:
      'radial-gradient(circle, rgba(67, 97, 238, 0.08) 0%, rgba(67, 97, 238, 0) 70%)',
    borderRadius: '50%',
    filter: 'blur(40px)',
    zIndex: 1,
  },
  gradientGreen: {
    position: 'absolute',
    bottom: '10%',
    left: '-20%',
    width: 300,
    height: 300,
    background:
      'radial-gradient(circle, rgba(54, 179, 126, 0.08) 0%, rgba(54, 179, 126, 0) 70%)',
    borderRadius: '50%',
    filter: 'blur(40px)',
    zIndex: 1,
  },
}));

const HeroSection = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.contentWrapper}>
          {/* Left Content */}
          <div className={classes.leftContent}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={classes.titleWrapper}>
                <Typography className={classes.titleText}>
                  Plootus for{' '}
                  <span className={classes.titleHighlight}>
                    Financial Advisors
                  </span>
                </Typography>
              </div>

              <Typography variant="h1" className={classes.mainTitle}>
                Your Trusted Partner for Client Financial Planning
              </Typography>

              <Typography className={classes.description}>
                Streamline retirement planning with easy-to-use tools that your
                clients will engage with! Plootus helps you deliver smarter,
                more effective advisory services.
              </Typography>

              <div className={classes.appButtons}>
                <motion.a
                  href="#"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'block' }}
                >
                  <img
                    src="/images/app-store-badge.png"
                    alt="Download on App Store"
                    className={classes.appImage}
                  />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right iPhone Mockup */}
          <div className={classes.rightContent}>
            <div className={classes.gridPattern} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '600px',
              }}
            >
              <img
                src="/images/advisor-dashboard-iphone.png"
                alt="Financial Advisor Dashboard"
                className={classes.heroImage}
              />

              {/* Subtle Gradient Effects */}
              <div className={classes.gradientBlue} />
              <div className={classes.gradientGreen} />
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
