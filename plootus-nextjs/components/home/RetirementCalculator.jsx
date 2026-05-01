import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Box, Container, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: '#000000',
    borderRadius: '16px',
    margin: theme.spacing(0, 0),
    marginBottom: theme.spacing(0),
    overflow: 'hidden',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      borderRadius: '24px',
    },
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: 0,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    position: 'relative',
    zIndex: 2,
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1.2fr 0.8fr',
      alignItems: 'center',
    },
  },
  contentSection: {
    color: 'white',
    maxWidth: '560px',
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(4),
    },
  },
  subtitleText: {
    color: '#3ACB89',
    fontSize: '1rem',
    fontWeight: 500,
    marginBottom: theme.spacing(1),
  },
  mainTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: theme.spacing(1),
    color: 'white',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      fontSize: '2.75rem',
      marginBottom: theme.spacing(-1),
    },
  },
  descriptionText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '1rem',
    lineHeight: 1.6,
    marginBottom: theme.spacing(2.5),
  },
  additionalText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '1rem',
    lineHeight: 1.6,
    marginBottom: theme.spacing(3),
  },
  ctaButton: {
    backgroundColor: '#36B37E',
    color: 'white',
    fontSize: '0.875rem',
    fontWeight: 600,
    padding: theme.spacing(1, 3),
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: '#2E9669',
    },
  },
  imageSection: {
    position: 'relative',
    alignSelf: 'flex-end',
    height: '240px',
    width: '100%',
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      height: '280px',
      marginTop: 0,
    },
  },
  calculatorScreen: {
    position: 'absolute',
    height: '100%',
    right: 0,
    bottom: 0,
    zIndex: 2,
    filter: 'drop-shadow(0px 25px 25px rgba(0, 0, 0, 0.15))',
    [theme.breakpoints.up('sm')]: {
      right: '5%',
    },
  },
  settingsScreen: {
    position: 'absolute',
    width: '130px',
    height: 'auto',
    right: '55%',
    bottom: 0,
    transform: 'rotate(-8deg)',
    zIndex: 2,
    filter: 'drop-shadow(0px 25px 25px rgba(0, 0, 0, 0.15))',
    [theme.breakpoints.up('md')]: {
      width: '160px',
      right: '45%',
    },
  },
  greenGradient: {
    position: 'absolute',
    bottom: '10%',
    right: '20%',
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, rgba(54, 179, 126, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
    zIndex: 1,
    borderRadius: '50%',
    filter: 'blur(40px)',
  },
  blueGradient: {
    position: 'absolute',
    bottom: '20%',
    right: '40%',
    width: '250px',
    height: '250px',
    background: 'radial-gradient(circle, rgba(67, 97, 238, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
    zIndex: 1,
    borderRadius: '50%',
    filter: 'blur(40px)',
  },
}));

const RetirementCalculator = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Typography className={classes.subtitleText}>
          Calculate your savings journey with our
        </Typography>

        <Typography variant="h2" className={classes.mainTitle}>
          AI-enabled Retirement Calculator
        </Typography>

        <Box className={classes.gridContainer}>
          <Box className={classes.contentSection}>
            <Typography className={classes.descriptionText}>
              Plootus removes the guesswork from retirement planning. Our AI analyzes your financial
              landscape and regional spending patterns— based on your zip code—to project how much
              you'll need for retirement.
            </Typography>

            <Typography className={classes.additionalText}>
              Adjust your risk strategy and contributions to stay on track and confidently achieve
              your goals.
            </Typography>

            <Link href="/individual-users#calculator-section" passHref legacyBehavior>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                className={classes.ctaButton}
                component="a"
              >
                TRY IT NOW
              </Button>
            </Link>
          </Box>

          <Box className={classes.imageSection}>
            <Box
              component="img"
              src="/images/calculator-screen.png"
              alt="Retirement Calculator"
              className={classes.calculatorScreen}
            />
            <Box
              component="img"
              src="/images/settings-screen.png"
              alt="Calculator Settings"
              className={classes.settingsScreen}
            />
          </Box>
        </Box>

        <Box className={classes.greenGradient} />
        <Box className={classes.blueGradient} />
      </Box>
    </Box>
  );
};

export default RetirementCalculator;
