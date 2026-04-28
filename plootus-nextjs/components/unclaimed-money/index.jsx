import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import PartnersSection from '../home/PartnersSection';

const useStyles = makeStyles()((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(0),
    backgroundColor: '#FFFFFF',
  },
  heroSection: {
    backgroundColor: '#FFFFFF',
    padding: theme.spacing(8, 0, 4),
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#4361EE',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  },
  heroSubtitle: {
    fontSize: '1.125rem',
    color: '#64748B',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  contentSection: {
    padding: theme.spacing(4, 0),
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#1E293B',
    marginBottom: theme.spacing(2),
  },
  paragraph: {
    fontSize: '1rem',
    color: '#262626',
    lineHeight: 1.6,
    marginBottom: theme.spacing(2),
  },
  list: {
    margin: 0,
    padding: '0 0 0 1.2rem',
    listStyle: 'disc',
    color: '#262626',
    marginBottom: theme.spacing(3),
    '& li': {
      marginBottom: theme.spacing(1),
      lineHeight: 1.6,
      fontSize: '1rem',
    },
  },
  statesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '12px 24px',
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      overflowX: 'auto',
      paddingBottom: theme.spacing(1),
      '& > div': {
        minWidth: '160px',
        flexShrink: 0,
      },
    },
  },
  stateColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
  stateLink: {
    fontSize: '1rem',
    color: '#4361EE',
    textDecoration: 'underline',
    fontWeight: 500,
    transition: 'all 0.2s ease',
    '&:hover': {
      color: '#3359C0',
    },
  },
  divider: {
    width: '100%',
    height: '2px',
    backgroundColor: '#4361EE',
    border: 'none',
    margin: theme.spacing(4, 0),
  },
}));

const stateLinks = [
  { state: 'Alabama', url: 'https://alabama.findyourunclaimedproperty.com/' },
  { state: 'Alaska', url: 'https://treasury.dor.alaska.gov/Unclaimed-Property.aspx' },
  { state: 'Arizona', url: 'https://azdor.gov/unclaimed-property' },
  { state: 'California', url: 'https://www.sco.ca.gov/upd_msg.html' },
  { state: 'Colorado', url: 'https://colorado.findyourunclaimedproperty.com/' },
  { state: 'Connecticut', url: 'https://ctbiglist.gov/' },
  { state: 'Delaware', url: 'https://unclaimedproperty.delaware.gov/' },
  { state: 'Florida', url: 'https://www.fltreasurehunt.gov/' },
  { state: 'Georgia', url: 'https://dor.georgia.gov/unclaimed-property-program' },
  { state: 'Hawaii', url: 'https://unclaimedproperty.ehawaii.gov/lilo/property-search.html' },
  { state: 'Idaho', url: 'https://yourmoney.idaho.gov/' },
  { state: 'Illinois', url: 'https://icash.illinoistreasurer.gov/' },
  { state: 'Indiana', url: 'https://indianaunclaimed.gov/' },
  { state: 'Iowa', url: 'https://greatiowatreasurehunt.gov/' },
  { state: 'Kansas', url: 'https://www.kansascash.ks.gov/up_search.php' },
  { state: 'Kentucky', url: 'https://treasury.ky.gov/unclaimedproperty/Pages/overview.aspx' },
  { state: 'Louisiana', url: 'https://louisiana.findyourunclaimedproperty.com/' },
  { state: 'Maine', url: 'https://maineunclaimedproperty.gov/' },
  { state: 'Maryland', url: 'https://www.marylandtaxes.gov/unclaimed-property/index.php' },
  { state: 'Massachusetts', url: 'https://findmassmoney.com/' },
  { state: 'Michigan', url: 'https://unclaimedproperty.michigan.gov/' },
  { state: 'Minnesota', url: 'https://mn.gov/commerce/consumers/your-money/find-missing-money/' },
  { state: 'Mississippi', url: 'https://www.treasury.ms.gov/UnclaimedProperty/Pages/default.aspx' },
  { state: 'Missouri', url: 'https://treasurer.mo.gov/unclaimedproperty/' },
  { state: 'Montana', url: 'https://revenue.mt.gov/unclaimed-property/' },
  { state: 'Nebraska', url: 'https://nebraskalostcash.nebraska.gov/' },
  { state: 'Nevada', url: 'https://claims.nevadaunclaimedproperty.gov/' },
  { state: 'New Hampshire', url: 'https://newhampshire.findyourunclaimedproperty.com/' },
  { state: 'New Jersey', url: 'https://www.unclaimedproperty.nj.gov/' },
  { state: 'New Mexico', url: 'http://www.tax.newmexico.gov/Individuals/search-unclaimed-property.aspx' },
  { state: 'New York', url: 'https://www.osc.state.ny.us/ouf/' },
  { state: 'North Carolina', url: 'https://www.nccash.com/claiming-your-unclaimed-property' },
  { state: 'North Dakota', url: 'https://unclaimedproperty.nd.gov/' },
  { state: 'Ohio', url: 'https://www.com.ohio.gov/unfd/' },
  { state: 'Oklahoma', url: 'https://yourmoney.ok.gov/' },
  { state: 'Oregon', url: 'https://unclaimed.oregon.gov/' },
  { state: 'Pennsylvania', url: 'https://www.patreasury.gov/unclaimed-property/' },
  { state: 'Rhode Island', url: 'https://findrimoney.com/' },
  { state: 'South Carolina', url: 'https://treasurer.sc.gov/what-we-do/for-citizens/unclaimed-property-program/' },
  { state: 'South Dakota', url: 'https://southdakota.findyourunclaimedproperty.com/' },
  { state: 'Tennessee', url: 'https://treasury.tn.gov/Unclaimed-Property/Claim-Unclaimed-Property/Find-Your-Missing-Money' },
  { state: 'Texas', url: 'https://claimittexas.org/' },
  { state: 'Utah', url: 'https://mycash.utah.gov/' },
  { state: 'Vermont', url: 'https://www.vermonttreasurer.gov/content/unclaimed-property' },
  { state: 'Virginia', url: 'https://www.trs.virginia.gov/vaMoneySearch/Account/LogOn' },
  { state: 'Washington', url: 'https://ucp.dor.wa.gov/' },
  { state: 'Washington, D.C.', url: 'https://dc.findyourunclaimedproperty.com/' },
  { state: 'West Virginia', url: 'https://www.wvunclaimedproperty.gov/' },
  { state: 'Wisconsin', url: 'https://www.revenue.wi.gov/Pages/UnclaimedProperty/Home.aspx' },
  { state: 'Wyoming', url: 'https://statetreasurer.wyo.gov/unclaimed-property/' },
];

const UnclaimedMoney = () => {
  const { classes } = useStyles();

  const numCols = 5;
  const statesPerCol = Math.ceil(stateLinks.length / numCols);
  const columns = Array.from({ length: numCols }, (_, i) => {
    return stateLinks.slice(i * statesPerCol, (i + 1) * statesPerCol);
  });

  return (
    <Box style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <Box className={classes.heroSection}>
        <Container maxWidth="lg">
          <Typography variant="h1" className={classes.heroTitle}>
            Lost Money Finder – Claim Your Forgotten Cash
          </Typography>
          <Typography className={classes.heroSubtitle}>
            Discover unclaimed bank accounts, refunds, and insurance payouts. Find your lost money fast — free, easy, and secure!
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" className={classes.root}>
        <Box className={classes.contentSection}>
          <Typography className={classes.paragraph}>
            More than $40 billion is sitting with state governments. Some of it could be yours.
          </Typography>
          <Typography className={classes.paragraph}>
            Millions of Americans have unclaimed money waiting for them - from forgotten bank accounts, uncashed checks, insurance payouts, or retirement funds. Don't leave your money behind. Plootus helps you search, locate, and claim your lost funds quickly and securely.
          </Typography>

          <Box mt={6}>
            <Typography variant="h2" className={classes.sectionTitle}>
              What Is Unclaimed Money?
            </Typography>
            <Typography className={classes.paragraph}>
              Unclaimed money, also called escheated funds, is any money that an individual or business hasn't claimed for a long time. Common sources include:
            </Typography>
            <ul className={classes.list}>
              <li>Bank accounts and CDs</li>
              <li>Insurance refunds and payouts</li>
              <li>Utility deposits or overpayments</li>
              <li>Paychecks and payroll corrections</li>
              <li>Retirement account balances</li>
            </ul>
          </Box>

          <Box mt={6}>
            <Typography variant="h2" className={classes.sectionTitle}>
              How to claim it (in 4 steps)
            </Typography>
            <ul className={classes.list}>
              <li><strong>Find your state site:</strong> Start with states where you lived or worked.</li>
              <li><strong>Gather documents:</strong> ID, Social Security proof, and address history.</li>
              <li><strong>File a claim:</strong> Online or by mail; large claims may require notarization. Online claims, when available, are usually faster.</li>
              <li><strong>Get paid:</strong> Processing can take weeks to months, and in many cases the exact payout amount isn't confirmed until the claim is approved.</li>
            </ul>
          </Box>

          <hr className={classes.divider} />

          <Box className={classes.statesGrid}>
            {columns.map((col, ci) => (
              <Box key={ci} className={classes.stateColumn}>
                {col.map((s, si) => (
                  <a
                    key={`${ci}-${si}-${s.state}`}
                    href={s.url}
                    className={classes.stateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.state}
                  </a>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
      <PartnersSection />
    </Box>
  );
};

export default UnclaimedMoney;
