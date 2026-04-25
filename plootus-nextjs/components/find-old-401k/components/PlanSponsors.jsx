import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  section: {
    marginBottom: theme.spacing(0),
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
}));

const PlanSponsors = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.section}>
      <Typography variant="h2" className={classes.sectionTitle}>
        For Plan Sponsors
      </Typography>
      <Typography className={classes.paragraph}>
        The effectiveness of the database depends on accurate and complete data submission.
      </Typography>
      <Typography className={classes.paragraph}>
        Workforce mobility has increased significantly. Individuals born between 1957–1964 held an average of 12.7 jobs between ages 18 and 56. Each job change increases the likelihood of losing track of retirement accounts.
      </Typography>
      <Typography className={classes.paragraph}>
        To support the system:
      </Typography>
      <ul className={classes.list}>
        <li>Plan sponsors must submit accurate and updated information</li>
        <li>Recordkeepers and service providers must have fiduciary authorization before submitting data</li>
        <li>Participation from administrators and third parties is essential to success</li>
      </ul>
    </Box>
  );
};

export default PlanSponsors;
