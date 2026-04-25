import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Container, Typography } from '@mui/material';

const useStyles = makeStyles()((theme) => ({
  container: {
    paddingBottom: theme.spacing(8),
  },
  mainTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#1E293B',
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(6),
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
      marginBottom: theme.spacing(5),
      marginTop: theme.spacing(8),
    },
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
    marginBottom: theme.spacing(6),
    borderTop: '1px solid rgba(226, 232, 240, 0.8)',
    paddingTop: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      gap: theme.spacing(8),
      marginBottom: theme.spacing(8),
      paddingTop: theme.spacing(5),
    },
  },
  contentArea: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#1E293B',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      fontSize: '1.75rem',
    },
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
  },
  paragraph: {
    fontSize: '1rem',
    color: '#505050',
    lineHeight: 1.7,
  },
  imageContainer: {
    flex: '0 0 400px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '16px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
  },
}));

const OurPhilosophy = () => {
  const { classes } = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      {/* Main Title */}
      <Typography variant="h2" className={classes.mainTitle}>
        Our Philosophy
      </Typography>

      {/* First Section */}
      <div className={classes.section}>
        <div className={classes.contentArea}>
          <Typography variant="h3" className={classes.sectionTitle}>
            Democratize Retirement Planning For All
          </Typography>

          <div className={classes.textContent}>
            <Typography className={classes.paragraph}>
              For an average user, financial planning can be extremely stressful
              and understanding various investment options ends up being a time
              consuming & head-scratching exercise. These days, most employers
              offer defined contribution type plan benefits like 401k or 403b
              plans instead of an assured pension amount at the time of
              retirement. These plans allow discretion in the investment of
              funds making the returns variable and subject to market risks.
            </Typography>

            <Typography className={classes.paragraph}>
              Plan resources and employer education initiatives do not provide
              sufficient tools to make educated & informed decisions about
              investments. Whether you are heading off into the sunset, are a
              mid-level professional or just starting your career, we help you
              identify your current requirements and future goals in the context
              of multiple drivers & life cycle changes such as marriage,
              children, increased healthcare cost, home expenses, risk tolerance
              and recommend the investments that will guide you through a happy
              retirement.
            </Typography>
          </div>
        </div>

        <div className={classes.imageContainer}>
          <img
            src="/images/plant-growth.png"
            alt="Financial Growth"
            className={classes.image}
          />
        </div>
      </div>

      {/* Second Section */}
      <div className={classes.section}>
        <div className={classes.contentArea}>
          <Typography variant="h3" className={classes.sectionTitle}>
            Technology-enabled, Expert Financial Advice, Yet Does Not Break Your
            Bank
          </Typography>

          <div className={classes.textContent}>
            <Typography className={classes.paragraph}>
              Technology promises accuracy, transparency, and efficiency. By
              linking your financial accounts in a secure way, Plootus can
              obtain transactional information and understand your financial
              profile. Our algorithm analyzes your income and expenses and
              predicts future requirements during retirement. We do not sell you
              anything that is agnostic to the fund options available through
              your employer-sponsored plans. After carefully considering your
              needs and profile, we will choose the best funds in your 401k,
              403b or other retirement plan account, with the lowest fees and
              better performance.
            </Typography>

            <Typography className={classes.paragraph}>
              Security & confidentiality of your data is our first priority. We
              have meticulously implemented sufficient levels of encryption and
              robust security practices to ensure data confidentiality. We do
              not ask for sensitive personal information such as your Social
              Security Number. Your login IDs and passwords for any financial
              institution are never seen or stored by Plootus. Our services are
              read-only and do not allow us to execute any actions/transactions
              on your behalf such as changing investment options for your 401k
              plan. We provide you with the best recommendations but let you be
              the ultimate decision maker to make the changes by accessing your
              account.
            </Typography>
          </div>
        </div>

        <div className={classes.imageContainer}>
          <img
            src="/images/technology.png"
            alt="Technology and Financial Planning"
            className={classes.image}
          />
        </div>
      </div>
    </Container>
  );
};

export default OurPhilosophy;
