import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Container, Grid, Typography, Box, Link } from '@mui/material';

const useStyles = makeStyles()((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(4),
  },
  logoGrid: {
    marginBottom: theme.spacing(4),
  },
  logoLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  logo: {
    maxWidth: '220px',
    maxHeight: '80px',
    objectFit: 'contain',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  textContainer: {
    textAlign: 'left',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#1E293B',
    marginBottom: theme.spacing(1.5),
  },
  text: {
    fontSize: '1.1rem',
    color: '#424242',
    lineHeight: 1.6,
    '& b': {
      fontWeight: 700,
      color: '#1E293B',
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

const partners = [
  {
    name: 'ezTaxReturn',
    logo: '/images/partners/ezTaxReturn-logo.png',
    link: 'https://www.kqzyfj.com/click-101203773-15719582',
  },
  {
    name: 'Tax1099',
    logo: '/images/partners/tax1099.png',
    link: 'https://get.tax1099.com/5k7bbwvfhug4-ptmtk',
  },
  {
    name: 'Liberty Tax',
    logo: '/images/partners/liberty-tax-logo.jpg',
    link: 'https://www.tkqlhce.com/click-101203773-13650957',
  },
  {
    name: 'E-File',
    logo: '/images/partners/e-file.jpg',
    link: 'https://www.kqzyfj.com/click-101203773-11917170',
  },
];

const TaxPartners = () => {
  const { classes } = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={6} className={classes.logoGrid}>
        {partners.map((partner) => (
          <Grid item xs={12} sm={3} key={partner.name}>
            <a
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.logoLink}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className={classes.logo}
              />
            </a>
          </Grid>
        ))}
      </Grid>

      <Box className={classes.textContainer}>
        <Typography variant="h2" className={classes.title}>
          Looking for more ways to improve your finances?
        </Typography>
        <Typography className={classes.text}>
          Explore Plootus&apos;{' '}
          <Link href="/partners" className={classes.link}>
            partners
          </Link>{' '}
          offering services like <b>car insurance</b>, <b>credit repair</b>,{' '}
          <b>debt relief</b>, and <b>more</b> to help you save money and
          strengthen your financial future.
        </Typography>
      </Box>
    </Container>
  );
};

export default TaxPartners;
