import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Container, Typography, Grid, Box } from '@mui/material';
import AccountBalanceWallet from '@mui/icons-material/AccountBalanceWallet';
import ShowChart from '@mui/icons-material/ShowChart';
import PieChart from '@mui/icons-material/PieChart';

const useStyles = makeStyles()((theme) => ({
  root: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    backgroundColor: '#fff',
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
  },
  titleSection: {
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(6),
    },
  },
  mainTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#2D3748',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
    },
  },
  subtitle: {
    color: '#424242',
    fontSize: '1.1rem',
    lineHeight: 1.6,
    maxWidth: '800px',
    margin: '0 auto',
  },
  featureContainer: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
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
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    '& svg': {
      color: 'white',
      fontSize: 24,
    },
  },
  blueIcon: {
    backgroundColor: '#416CE1',
  },
  greenIcon: {
    backgroundColor: '#51AA5D',
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
  imageSection: {
    position: 'relative',
    width: '100%',
    height: '100%',
    minHeight: '300px',
    [theme.breakpoints.up('md')]: {
      minHeight: '400px',
    },
  },
  outerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '24px',
    padding: '12px',
    border: '3px solid rgba(226, 232, 240, 0.8)',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.02)',
    [theme.breakpoints.up('md')]: {
      padding: '24px',
    },
  },
  innerContainer: {
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
    [theme.breakpoints.up('md')]: {
      padding: '40px',
    },
  },
  featureImage: {
    width: '100%',
    height: 'auto',
    maxHeight: '100%',
    objectFit: 'contain',
    display: 'block',
  },
}));

const FeatureItem = ({
  Icon,
  image,
  title,
  description,
  imageOnLeft = true,
  iconBgColor = '#416CE1',
}) => {
  const { classes } = useStyles();

  return (
    <Grid
      container
      spacing={4}
      alignItems="center"
      className={classes.featureContainer}
    >
      {/* Content Side */}
      <Grid
        item
        xs={12}
        md={7}
        style={{
          order: imageOnLeft ? 2 : 1,
          [`@media (min-width:${960}px)`]: {
            order: imageOnLeft ? 2 : 1,
          },
        }}
      >
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            maxWidth: '100%',
            marginLeft: imageOnLeft ? 0 : undefined,
            marginRight: imageOnLeft ? undefined : 0,
            [`@media (min-width:${960}px)`]: {
              marginLeft: imageOnLeft ? 0 : 32,
              marginRight: imageOnLeft ? 32 : 0,
            },
          }}
        >
          <div className={classes.featureHeader}>
            <div
              className={`${classes.iconWrapper} ${
                iconBgColor === '#416CE1' ? classes.blueIcon : classes.greenIcon
              }`}
            >
              <Icon />
            </div>
            <Typography variant="h3" className={classes.featureTitle}>
              {title}
            </Typography>
          </div>

          <Typography className={classes.featureDescription}>
            {description}
          </Typography>
        </Box>
      </Grid>

      {/* Image Side */}
      <Grid
        item
        xs={12}
        md={5}
        style={{
          order: imageOnLeft ? 1 : 2,
          [`@media (min-width:${960}px)`]: {
            order: imageOnLeft ? 1 : 2,
          },
        }}
      >
        <Box className={classes.imageSection}>
          <Box className={classes.outerContainer}>
            <Box className={classes.innerContainer}>
              <Box
                component="img"
                src={image}
                alt={title}
                className={classes.featureImage}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

const FeatureSection = () => {
  const { classes } = useStyles();

  const features = [
    {
      icon: AccountBalanceWallet,
      title: 'Monitor Client Financial Accounts',
      description:
        "Access all your clients' financial information—income, expenses, assets, liabilities, and retirement goals—in one easy-to-use app. With Plootus, your clients can connect to 14,000+ financial institutions, allowing you to see all their data in one place.",
      image: '/images/track-accounts2.png',
      imageOnLeft: true,
      iconBgColor: '#416CE1',
    },
    {
      icon: PieChart,
      title: 'Personalized Retirement Projections',
      description:
        "Leverage AI-driven, customized savings projections and retirement strategies tailored to each client's goals. Provide comprehensive advice, supported by real-time data, to ensure your clients are always on track for retirement success.",
      image: '/images/retirement-projections.png',
      imageOnLeft: false,
      iconBgColor: '#51AA5D',
    },
    {
      icon: ShowChart,
      title: 'Effortless 401k and 403b Planning',
      description:
        "Plootus provides instant results to enhance your clients' 401k and 403b planning process, saving them time and money. There's no need to request data or manually enter information—Plootus takes care of everything for you.",
      image: '/images/401k-planning.png',
      imageOnLeft: true,
      iconBgColor: '#416CE1',
    },
  ];

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.titleSection}>
          <Typography className={classes.mainTitle}>
            Empowering Advisors for Client Success!
          </Typography>
          <Typography className={classes.subtitle}>
            Plootus can help you transform how you manage client finances with
            real-time insights, automated tools, and seamless data connectivity!
          </Typography>
        </div>

        {features.map((feature, index) => (
          <FeatureItem key={index} {...feature} Icon={feature.icon} />
        ))}
      </Container>
    </div>
  );
};

export default FeatureSection;
