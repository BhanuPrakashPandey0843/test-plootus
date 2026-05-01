import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Box, Container, Typography, Grid } from '@mui/material';

const useStyles = makeStyles()((theme) => ({
  root: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(8),
    backgroundColor: '#fff',
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(12),
    },
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(6),
    },
  },
  headerTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#2D3748',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
    },
  },
  headerSubtitle: {
    color: '#424242',
    fontSize: '1.1rem',
    lineHeight: 1.6,
    maxWidth: '800px',
    margin: '0 auto',
  },
  featureContainer: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(6),
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
  featureHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  iconWrapper: {
    width: 40,
    height: 40,
    aspectRatio: '1 / 1',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  featureIcon: {
    width: '60%',
    height: '60%',
    objectFit: 'contain',
    display: 'block',
  },
  featureTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#1E293B',
  },
  featureDescription: {
    color: '#424242',
    fontSize: '1.1rem',
    lineHeight: 1.6,
  },
}));

const FeatureItem = ({ iconImage, image, title, description, imageOnLeft = true, iconBgColor = '#416CE1' }) => {
  const { classes } = useStyles();

  return (
    <Grid container spacing={4} alignItems="center" className={classes.featureContainer}>
      <Grid item xs={12} md={7} style={{ order: imageOnLeft ? 2 : 1 }}>
        <Box style={{ display: 'flex', flexDirection: 'column', height: '100%', maxWidth: '100%' }}>
          <div className={classes.featureHeader}>
            <div className={classes.iconWrapper} style={{ backgroundColor: iconBgColor }}>
              <img src={iconImage} alt="" className={classes.featureIcon} />
            </div>
            <Typography variant="h3" className={classes.featureTitle}>
              {title}
            </Typography>
          </div>
          <Typography className={classes.featureDescription}>{description}</Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={5} style={{ order: imageOnLeft ? 1 : 2 }}>
        <Box style={{ position: 'relative', width: '100%', height: '100%', minHeight: '300px' }}>
          <Box
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              borderRadius: '24px',
              padding: '12px',
              border: '3px solid rgba(226, 232, 240, 0.8)',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.02)',
            }}
          >
            <Box
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#F5F7FD',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid rgba(226, 232, 240, 0.6)',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <Box
                component="img"
                src={image}
                alt={title}
                style={{ width: '100%', height: 'auto', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

const FinanceFeatures = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg" disableGutters>
        <Box className={classes.sectionHeader}>
          <Typography className={classes.headerTitle}>
            Everything You Need to Take Control of Your Finances
          </Typography>
          <Typography className={classes.headerSubtitle}>
            From tracking your accounts to budgeting and personalized investment advice, Plootus
            simplifies your financial life and helps you plan for the future.
          </Typography>
        </Box>

        <FeatureItem
          iconImage="/images/icon/track-icon.png"
          image="/images/track-accounts.png"
          title="Track All Your Financial Accounts"
          description="Effortlessly manage all your finances in one place. Plootus links your accounts, giving you real-time updates on your checking, savings, credit card and investment account balances so you can stay on top of your financial health."
          imageOnLeft={true}
          iconBgColor="#416CE1"
        />
        <FeatureItem
          iconImage="/images/icon/account-icon.png"
          image="/images/account-integration.png"
          title="Seamless Account Integration"
          description="Ability to link 14,000+ checking, savings, credit card, & investment accounts for a complete view of your finances. Plootus allows you to view all your finances in one place, providing real-time insights to help you manage and grow your wealth."
          imageOnLeft={false}
          iconBgColor="#51AA5D"
        />
        <FeatureItem
          iconImage="/images/icon/expense-icon.png"
          image="/images/expense-breakdown.png"
          title="Expense And Savings Analysis"
          description="Understand exactly where your money is going. Plootus breaks down your expenses and savings with detailed insights, helping you budget more effectively and find areas to save."
          imageOnLeft={true}
          iconBgColor="#416CE1"
        />
        <FeatureItem
          iconImage="/images/icon/investment-icon.png"
          image="/images/investment-advice.png"
          title="Investment And Retirement Advice"
          description="Beyond tracking, we offer smart advice for growing your 401k/403b and other retirement accounts. Plootus offers personalized advice to optimize your portfolio, reduce fees, and ensure you're on track to meet your financial goals."
          imageOnLeft={false}
          iconBgColor="#51AA5D"
        />
      </Container>
    </Box>
  );
};

export default FinanceFeatures;
