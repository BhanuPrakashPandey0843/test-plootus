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
  list: {
    margin: theme.spacing(2, 0, 4),
    padding: '0 0 0 1.5rem',
    listStyle: 'none',
    '& li': {
      position: 'relative',
      lineHeight: 1.6,
      fontSize: '1.125rem',
      color: '#475569',
      paddingLeft: '1.5rem',
      marginBottom: theme.spacing(1.5),
      '&::before': {
        content: '"•"',
        color: '#4361EE',
        fontWeight: 'bold',
        position: 'absolute',
        left: 0,
        fontSize: '1.5rem',
        lineHeight: 1,
      },
    },
  },
  importantNote: {
    fontWeight: 700,
    color: '#1E293B',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    fontSize: '1.125rem',
  },
}));

const HowItWorks = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.section}>
      <Typography variant="h2" className={classes.sectionTitle}>
        How It Works
      </Typography>
      <ul className={classes.list}>
        <li>Plan sponsors provide retirement plan information to the database.</li>
        <li>Data is submitted by authorized plan administrators and service providers.</li>
        <li>Available for individuals who participated in private-sector or union-sponsored retirement plans.</li>
        <li>Includes both defined benefit (pensions) and defined contribution plans (401(k), 403(b), 457 plans).</li>
        <li>Displays retirement plans associated with a Social Security number.</li>
        <li>Provides contact details for plan administrators.</li>
      </ul>

      <Typography className={classes.importantNote}>
        Important Notes:
      </Typography>
      <ul className={classes.list}>
        <li>Plan administrators determine eligibility and available benefits.</li>
        <li>Does not include Individual Retirement Accounts (IRAs).</li>
        <li>Does not cover government or certain religious organization plans.</li>
        <li>Does not include Social Security benefits.</li>
      </ul>
    </Box>
  );
};

export default HowItWorks;
