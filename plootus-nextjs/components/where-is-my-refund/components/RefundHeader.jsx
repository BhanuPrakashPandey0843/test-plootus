import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Container, Typography } from '@mui/material';

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: '#F8FAFC',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  },
  contentWrapper: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
  },
  title: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#1E293B',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
    },
  },
  highlightedText: {
    color: '#4361EE',
  },
  description: {
    fontSize: '1.125rem',
    color: '#64748B',
    maxWidth: '900px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
}));

const RefundHeader = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.contentWrapper}>
          <Typography variant="h1" className={classes.title}>
            Where Is My{' '}
            <span className={classes.highlightedText}>Refund?</span>
          </Typography>
          <Typography className={classes.description}>
            Track the status of your tax refund and see when your money may
            arrive. Whether you’re waiting on a federal refund, state refund, or
            an amended return, our tools help you quickly find the latest
            updates from the appropriate tax agency.
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default RefundHeader;
