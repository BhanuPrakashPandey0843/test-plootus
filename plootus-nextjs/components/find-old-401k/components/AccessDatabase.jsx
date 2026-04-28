import React from 'react';
import { Box, Typography, Link } from '@mui/material';
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
      marginBottom: theme.spacing(2),
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
  link: {
    color: '#4361EE',
    textDecoration: 'underline',
    fontWeight: 600,
    '&:hover': {
      color: '#3651D4',
    },
  },
}));

const AccessDatabase = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.section}>
      <Typography variant="h2" className={classes.sectionTitle}>
        How To Access The Database
      </Typography>
      <ul className={classes.list}>
        <li>
          Verify your identity through{' '}
          <Link href="https://login.gov" target="_blank" rel="noopener noreferrer" className={classes.link}>
            Login.gov
          </Link>{' '}
          To keep personal information secure, participants must first register with valid legal identification.
        </li>
        <li>
          You will then be redirected to the Lost and Found Database to search for retirement plans using their
          social security number, or visit{' '}
          <Link href="https://lostandfound.dol.gov/" target="_blank" rel="noopener noreferrer" className={classes.link}>
            https://lostandfound.dol.gov/
          </Link>
        </li>
        <li>Search for retirement plans using your Social Security number</li>
      </ul>
    </Box>
  );
};

export default AccessDatabase;
