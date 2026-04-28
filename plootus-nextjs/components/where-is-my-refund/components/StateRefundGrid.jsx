import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Container, Box, Typography } from '@mui/material';

const useStyles = makeStyles()((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  resourcesHeader: {
    marginBottom: theme.spacing(6),
  },
  resourcesTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#1E293B',
    marginBottom: theme.spacing(1),
  },
  divider: {
    width: '100%',
    height: '2px',
    backgroundColor: '#4361EE',
    border: 'none',
    margin: 0,
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
}));

const stateRefundLinks = [
  { state: 'Alabama', url: 'https://myalabamataxes.alabama.gov/?link=refund' },
  { state: 'Arizona', url: 'https://aztaxes.gov/Home/CheckRefund' },
  { state: 'Arkansas', url: 'https://www.dfa.arkansas.gov/income-tax/individual-income-tax' },
  { state: 'California', url: 'https://webapp.ftb.ca.gov/refund/login' },
  { state: 'Colorado', url: 'https://www.colorado.gov/revenueonline/' },
  { state: 'Connecticut', url: 'https://drs.ct.gov/eservices/_/#1' },
  { state: 'Delaware', url: 'https://dorweb.revenue.delaware.gov/scripts/refinq/refinq.dll' },
  { state: 'Georgia', url: 'https://dor.georgia.gov/wheres-my-refund' },
  { state: 'Hawaii', url: 'https://tax.ehawaii.gov/hoihoi/refund.html' },
  { state: 'Idaho', url: 'https://idahotap.gentax.com/tap?Link=Refund' },
  { state: 'Illinois', url: 'https://mytax.illinois.gov/_/#1' },
  { state: 'Indiana', url: 'https://www.in.gov/dor/i-am-a/individual/check-refund/' },
  { state: 'Iowa', url: 'https://tax.iowa.gov/wheres-my-refund' },
  { state: 'Kansas', url: 'https://www.kdor.ks.gov/apps/kcsc/increfundstatus.aspx' },
  { state: 'Kentucky', url: 'https://refund.ky.gov/' },
  { state: 'Louisiana', url: 'https://revenue.louisiana.gov/refund/' },
  { state: 'Maine', url: 'https://revenue.maine.gov/_/#2' },
  { state: 'Maryland', url: 'https://interactive.marylandtaxes.gov/INDIV/refundstatus/home.aspx' },
  { state: 'Massachusetts', url: 'https://mtc.dor.state.ma.us/mtc/_/#1' },
  { state: 'Michigan', url: 'https://etreas.michigan.gov/iit/home' },
  { state: 'Minnesota', url: 'https://www.revenue.state.mn.us/wheres-my-refund' },
  { state: 'Mississippi', url: 'https://tap.dor.ms.gov/_/' },
  { state: 'Missouri', url: 'https://mytax.mo.gov/rptp/portal/home/refund-status' },
  { state: 'Montana', url: 'https://tap.dor.mt.gov/_/' },
  { state: 'Nebraska', url: 'https://ndr-refundstatus.ne.gov/refundstatus/index.xhtml' },
  { state: 'New Jersey', url: 'https://www.nj.gov/treasury/taxation/checkrefundstatus.shtml' },
  { state: 'New Mexico', url: 'https://www.tax.newmexico.gov/individuals/online-services-overview/where-is-my-refund/' },
  { state: 'New York', url: 'https://www.tax.ny.gov/pit/file/refund.htm' },
  { state: 'North Carolina', url: 'https://eservices.dor.nc.gov/wheresmyrefund/SelectionServlet' },
  { state: 'North Dakota', url: 'https://apps.nd.gov/tax/tap/_/' },
  { state: 'Ohio', url: 'https://tax.ohio.gov/individual/refunds/wheres-my-refund' },
  { state: 'Oklahoma', url: 'https://oktap.tax.ok.gov/oktap/Web/_/' },
  { state: 'Oregon', url: 'https://revenueonline.dor.oregon.gov/tap/_/' },
  { state: 'Pennsylvania', url: "https://www.revenue.pa.gov/OnlineServices/PersonalIncomeTax_e-Services/Pages/Where's-My-Income-Tax-Refund.aspx" },
  { state: 'Rhode Island', url: 'https://tax.ri.gov/tax-sections/personal-income-tax/wheres-my-refund' },
  { state: 'South Carolina', url: 'https://dor.sc.gov/refund' },
  { state: 'Utah', url: 'https://incometax.utah.gov/refunds/' },
  { state: 'Vermont', url: 'https://myvtax.vermont.gov/_/' },
  { state: 'Virginia', url: 'https://www.individual.tax.virginia.gov/IOP/#/checkRefund' },
  { state: 'Washington, D.C.', url: 'https://mytax.dc.gov/_/' },
  { state: 'West Virginia', url: 'https://mytaxes.wvtax.gov/_/' },
  { state: 'Wisconsin', url: 'https://www.revenue.wi.gov/Pages/Home.aspx' },
];

const StateRefundGrid = () => {
  const { classes } = useStyles();

  const numCols = 5;
  const statesPerCol = Math.ceil(stateRefundLinks.length / numCols);
  const columns = Array.from({ length: numCols }, (_, i) =>
    stateRefundLinks.slice(i * statesPerCol, (i + 1) * statesPerCol)
  );

  return (
    <Container maxWidth="lg" className={classes.root} id="state-refund-grid">
      <Box className={classes.resourcesHeader}>
        <Typography variant="h1" className={classes.resourcesTitle}>
          Click On Your State for State Refund Status
        </Typography>
        <hr className={classes.divider} />
      </Box>

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

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="body2" color="textSecondary">
          Note: Alaska, Florida, Nevada, South Dakota, Tennessee, Texas, Washington, and Wyoming do not have state income tax.
        </Typography>
      </Box>
    </Container>
  );
};

export default StateRefundGrid;
