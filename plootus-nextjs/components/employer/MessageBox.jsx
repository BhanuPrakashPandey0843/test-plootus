import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  container: {
    backgroundColor: '#FFF3CD',
    color: '#856404',
    padding: '16px 24px',
    borderRadius: '12px',
    border: '1px solid #FFEEBA',
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.5,
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
  },
}));

const MessageBox = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      Thanks for using our app. We have not analyzed your employer's 401k plan
      but we will get right at it. Check back in a few days.
    </div>
  );
};

export default MessageBox;
