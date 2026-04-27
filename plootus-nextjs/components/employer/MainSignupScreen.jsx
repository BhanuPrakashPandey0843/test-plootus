import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Button } from '@mui/material';

const useStyles = makeStyles()((theme) => ({
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
    background: 'linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,1) 100%)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    borderRadius: '0 0 12px 12px',
  },
  btnWrapper: {
    padding: '20px',
  },
  signupBtn: {
    backgroundColor: '#36B37E',
    color: 'white',
    padding: '12px 32px',
    borderRadius: '8px',
    fontSize: '1.125rem',
    fontWeight: 600,
    textTransform: 'none',
    boxShadow: '0 4px 14px 0 rgba(54, 179, 126, 0.39)',
    '&:hover': {
      backgroundColor: '#2E9669',
      boxShadow: '0 6px 20px rgba(54, 179, 126, 0.23)',
    },
  },
}));

const MainSignupScreen = ({ openModal }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.overlay}>
      <div className={classes.btnWrapper}>
        <Button 
          variant="contained" 
          className={classes.signupBtn} 
          onClick={openModal}
        >
          Sign Up to View Full Allocation
        </Button>
      </div>
    </div>
  );
};

export default MainSignupScreen;
