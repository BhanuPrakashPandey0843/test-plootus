import React, { useContext } from 'react';
import { makeStyles } from 'tss-react/mui';
import { Container, Typography, Button } from '@mui/material';
import { LoginSignupContext } from '../auth/LoginSignupContext';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(4),
  },
  banner: {
    backgroundColor: '#F5F5F5',
    borderRadius: '16px',
    padding: theme.spacing(4),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      gap: theme.spacing(3),
      textAlign: 'center',
      padding: theme.spacing(3),
    },
  },
  textContent: {
    flex: 1,
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#000000',
    marginBottom: theme.spacing(1),
    lineHeight: 1.2,
    [theme.breakpoints.down('md')]: {
      fontSize: '1.25rem',
    },
  },
  subtitle: {
    fontSize: '1rem',
    color: '#000000',
    lineHeight: 1.5,
  },
  button: {
    backgroundColor: '#36B37E',
    color: '#FFFFFF',
    padding: '12px 24px',
    borderRadius: '8px',
    textTransform: 'none',
    fontSize: '1rem',
    fontWeight: 500,
    '&:hover': {
      backgroundColor: '#2E9567',
    },
    whiteSpace: 'nowrap',
  },
}));

const SignUpBanner = () => {
  const { classes } = useStyles();
  const { setSignupModal } = useContext(LoginSignupContext);

  const handleSignUpClick = () => {
    setSignupModal(true);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.banner}>
          <div className={classes.textContent}>
            <Typography className={classes.title}>
              Take your Advisory practice to next level.
            </Typography>
            <Typography className={classes.subtitle}>
              Sign Up today and invite your clients for a seamless financial
              planning experience!
            </Typography>
          </div>
          <Button
            variant="contained"
            className={classes.button}
            disableElevation
            onClick={handleSignUpClick}
          >
            SIGN UP NOW!
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default SignUpBanner;
