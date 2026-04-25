import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Container, Grid, Typography, Box } from '@mui/material';

const useStyles = makeStyles()((theme, _params, classes) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(6),
  },
  buttonBox: {
    backgroundColor: '#F5F7FD',
    borderRadius: '24px',
    padding: theme.spacing(3),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    border: 'none',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0px 12px 24px rgba(67, 97, 238, 0.1)',
      [`& .${classes.buttonTitle}`]: {
        color: '#4361EE',
      },
      [`& .${classes.buttonFooter}`]: {
        color: '#4361EE',
      },
      [`& .${classes.buttonFooter}:after`]: {
        transform: 'translateX(8px)',
      },
    },
  },
  buttonTitle: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#1E293B',
    marginBottom: theme.spacing(1),
    transition: 'color 0.3s ease',
    minHeight: '3.5rem', // Added minHeight to ensure titles align
    display: 'flex',
    alignItems: 'center',
  },
  buttonDesc: {
    fontSize: '1rem',
    color: '#64748B',
    lineHeight: 1.5,
    marginBottom: theme.spacing(2),
  },
  buttonFooter: {
    marginTop: 'auto',
    color: '#64748B',
    fontWeight: 600,
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
    transition: 'color 0.3s ease',
    '&:after': {
      content: '"→"',
      marginLeft: theme.spacing(1),
      transition: 'transform 0.3s ease',
    },
  },
}));

const RefundButtons = () => {
  const { classes } = useStyles();

  const handleStateScroll = (e) => {
    e.preventDefault();
    const element = document.getElementById('state-refund-grid');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const refundButtonsData = [
    {
      title: 'Click Here to Check Federal Refund Status',
      description: 'Track the status of your federal tax refund directly through the IRS.',
      link: 'https://www.irs.gov/refunds',
      external: true,
    },
    {
      title: 'Click Here to Check State Refund Status',
      description: 'Find state-specific tax agencies to track your state refund. Choose your state below.',
      link: '#state-refund-grid',
      external: false,
      onClick: handleStateScroll,
    },
    {
      title: 'Click Here to Check Amended Return Status',
      description: 'Check the processing status of your amended tax return (Form 1040-X).',
      link: 'https://www.irs.gov/filing/wheres-my-amended-return',
      external: true,
    },
  ];

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={4}>
        {refundButtonsData.map((button, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box
              component="a"
              href={button.link}
              target={button.external ? '_blank' : undefined}
              rel={button.external ? 'noopener noreferrer' : undefined}
              onClick={button.onClick}
              className={classes.buttonBox}
            >
              <Typography className={classes.buttonTitle}>
                {button.title}
              </Typography>
              <Typography className={classes.buttonDesc}>
                {button.description}
              </Typography>
              <Typography className={classes.buttonFooter}>
                {button.external ? 'Go to IRS Website' : 'Find Your State'}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RefundButtons;
