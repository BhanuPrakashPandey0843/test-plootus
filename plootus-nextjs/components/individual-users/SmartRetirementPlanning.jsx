import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Container, Typography } from '@mui/material';
import {
  FormatListBulleted as ListIcon,
  BarChart as BarChartIcon,
  AccountBalanceWallet as WalletIcon,
  Cached as RefreshIcon,
} from '@mui/icons-material';

const features = [
  {
    icon: <ListIcon style={{ fontSize: 24 }} />,
    title: 'QUICK EMPLOYER SEARCH & ADVICE',
    description:
      "Effortlessly locate your 401k, 403b, 457, or TSP plan —just enter your employer's name and get the investment allocation for your risk and investment strategy.",
  },
  {
    icon: <BarChartIcon style={{ fontSize: 24 }} />,
    title: 'AI RETIREMENT CALCULATOR',
    description:
      'Our AI-driven calculator analyzes your current contributions, lifestyle, and spending habits to provide insights, helping you make data-driven decisions.',
  },
  {
    icon: <WalletIcon style={{ fontSize: 24 }} />,
    title: 'SAVE ON HIDDEN FEES',
    description:
      'Stop losing money to hidden fees. Plootus optimizes your 401k, 403b, 457 or TSP plan. Budget potentially saving you an average of ',
    highlight: '$131,255',
    highlightAfter: ' over time',
  },
  {
    icon: <RefreshIcon style={{ fontSize: 24 }} />,
    title: 'CONNECT TO FINANCIAL ADVISORS',
    description:
      'Your financial advisor(s) can view all client data—income, expenses, assets, liabilities, and goals—in one place. Plootus even manages 401k and 403b plans for you.',
  },
];

// Feature Card Component
const useFeatureCardStyles = makeStyles()((theme) => ({
  card: {
    backgroundColor: '#F8FAFC',
    borderRadius: '16px',
    padding: theme.spacing(4),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  headerRow: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    flexShrink: 0,
  },
  title: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#1E293B',
    textTransform: 'uppercase',
    lineHeight: 1.2,
  },
  description: {
    fontSize: '0.875rem',
    lineHeight: 1.6,
    marginBottom: 'auto',
    display: 'inline',
  },
  highlight: {
    color: '#4361EE',
    fontWeight: 600,
  },
}));

const FeatureCard = ({
  icon,
  title,
  description,
  highlight,
  highlightAfter,
}) => {
  const { classes } = useFeatureCardStyles();
  const iconBg =
    title === 'QUICK EMPLOYER SEARCH & ADVICE' ||
    title === 'CONNECT YOUR FINANCIAL ADVISORS'
      ? '#4361EE'
      : '#36B37E';

  return (
    <div className={classes.card}>
      <div className={classes.headerRow}>
        <div
          className={classes.iconWrapper}
          style={{ backgroundColor: iconBg }}
        >
          {icon}
        </div>
        <Typography className={classes.title}>{title}</Typography>
      </div>
      <Typography className={classes.description}>
        {description}
        {highlight && <span className={classes.highlight}>{highlight}</span>}
        {highlightAfter}
      </Typography>
    </div>
  );
};

const useStyles = makeStyles()((theme) => ({
  root: {
    padding: theme.spacing(8, 0, 1),
    backgroundColor: '#fff',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3, 0, 1),
    },
  },
  header: {
    textAlign: 'center',
    marginBottom: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(10),
    },
  },
  headerTitle: {
    fontSize: '2.25rem',
    fontWeight: 700,
    color: '#1E293B',
    marginBottom: theme.spacing(2.5),
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
    },
  },
  headerDescription: {
    color: '#64748B',
    fontSize: '1rem',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: 1.6,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.125rem',
    },
  },
  featuresGrid: {
    display: 'grid',
    gap: theme.spacing(3),
    marginBottom: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      gap: theme.spacing(4),
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '1fr auto 1fr',
    },
  },
  featureColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
  },
  appPreview: {
    backgroundColor: '#4361EE',
    borderRadius: '24px',
    padding: theme.spacing(4),
    paddingBottom: 0,
    maxWidth: '400px',
    width: '100%',
    margin: '0 auto',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  appPreviewTitle: {
    color: 'white',
    fontSize: '1.25rem',
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
    },
  },
  appPreviewImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: '12px',
  },
  downloadButton: {
    backgroundColor: '#36B37E',
    color: 'white',
    padding: theme.spacing(1.5, 6),
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 600,
    textTransform: 'none',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#2E9669',
      boxShadow: 'none',
    },
  },
}));

const SmartRetirementPlanning = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.header}>
          <Typography className={classes.headerTitle}>
            Smart Retirement Planning — Tailored for You
          </Typography>
          <Typography className={classes.headerDescription}>
            Whether you're optimizing your employer-sponsored retirement
            account, tracking goals, or seeking expert advice, Plootus gives you
            the tools to secure your financial future.
          </Typography>
        </div>

        <div className={classes.featuresGrid}>
          <div className={classes.featureColumn}>
            {features.slice(0, 2).map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          <div className={classes.appPreview}>
            <Typography className={classes.appPreviewTitle}>
              Simple Steps to Financial Freedom
            </Typography>
            <img
              src="/images/app-preview.png"
              alt="Plootus App Preview"
              className={classes.appPreviewImage}
            />
          </div>

          <div className={classes.featureColumn}>
            {features.slice(2).map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SmartRetirementPlanning;
