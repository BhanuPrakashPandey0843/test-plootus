import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Container, Typography, Link, Box } from '@mui/material';

const useStyles = makeStyles()((theme) => ({
  root: {
    paddingBottom: theme.spacing(0),
  },
  section: {
    marginBottom: theme.spacing(4),
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
  },
  link: {
    color: '#4361EE',
    textDecoration: 'underline',
    fontWeight: 500,
    '&:hover': {
      color: '#3651D4',
    },
  },
}));

const RefundInfo = () => {
  const { classes } = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Box className={classes.section}>
        <Typography variant="h2" className={classes.title}>
          Get Your Refund Faster With Direct Deposit
        </Typography>
        <Typography className={classes.text}>
          With the{' '}
          <Link
            href="https://www.irs.gov/refunds/get-your-refund-faster-tell-irs-to-direct-deposit-your-refund-to-one-two-or-three-accounts"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            IRS direct deposit
          </Link>{' '}
          payment option, you can receive your tax refund quickly and won’t have
          to wait or wonder when a paper check will arrive.
        </Typography>
      </Box>

      <Box className={classes.section}>
        <Typography variant="h2" className={classes.title}>
          File Your Taxes Online for a Faster Refund
        </Typography>
        <Typography className={classes.text}>
          Submitting your federal tax return online can help speed up the refund
          process. File early and electronically to reduce delays and get your
          refund sooner. Explore our tax filing partners below to get started:
        </Typography>
      </Box>
    </Container>
  );
};

export default RefundInfo;
