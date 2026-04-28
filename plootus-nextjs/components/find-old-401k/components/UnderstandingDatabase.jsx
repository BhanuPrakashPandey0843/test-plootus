import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  section: {
    marginBottom: theme.spacing(8),
  },
  sectionTitle: {
    fontSize: '2.25rem',
    fontWeight: 700,
    color: '#1E293B',
    marginBottom: theme.spacing(3),
    letterSpacing: '-0.02em',
  },
  paragraph: {
    fontSize: '1.125rem',
    color: '#475569',
    lineHeight: 1.7,
    marginBottom: theme.spacing(3),
  },
}));

const UnderstandingDatabase = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.section}>
      <Typography variant="h2" className={classes.sectionTitle}>
        Understanding the Retirement Savings Lost &amp; Found Database
      </Typography>
      <Typography className={classes.paragraph}>
        The Retirement Savings Lost and Found Database helps individuals recover lost or forgotten retirement
        accounts, including 401(k)s, 403(b)s, pensions, and other employer-sponsored plans.
        Created by the U.S. Department of Labor under the SECURE 2.0 Act, it provides a centralized way to
        find retirement savings from previous employers. With workers changing jobs more frequently, this tool
        makes it easier to track down your benefits and ensure you receive the money you&apos;ve earned.
      </Typography>
    </Box>
  );
};

export default UnderstandingDatabase;
