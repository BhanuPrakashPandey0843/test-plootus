import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  pillarsSection: {
    padding: theme.spacing(0, 5, 7),
    maxWidth: '1040px',
    margin: '2rem auto',
    backgroundColor: '#fff',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 2, 4),
    },
  },
  pillarsHeader: {
    marginBottom: theme.spacing(6),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      textAlign: 'center',
    },
  },
  pillarsHeaderImg: {
    width: '100%',
    maxWidth: '380px',
    height: 'auto',
    borderRadius: '8px',
  },
  pillarsHeaderText: {
    flex: 1,
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  pillarsTitle: {
    fontSize: '30px',
    fontWeight: 800,
    color: '#1a1a2e',
    letterSpacing: '-0.4px',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: '28px',
    },
  },
  pillarsHeaderSub: {
    fontSize: '15px',
    color: '#6b7280',
    maxWidth: '520px',
    lineHeight: 1.6,
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
    },
  },
  pillarsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '22px',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
    },
  },
  pillarCard: {
    background: '#f8fafd',
    border: '1.5px solid #e2ecf9',
    borderRadius: '16px',
    padding: '32px 28px',
    transition: 'box-shadow 0.2s, transform 0.2s',
    '&:hover': {
      boxShadow: '0 8px 32px rgba(33,82,217,0.10)',
      transform: 'translateY(-3px)',
    },
  },
  pillarNum: {
    fontSize: '11px',
    fontWeight: 700,
    color: '#2152d9',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: theme.spacing(1.75),
  },
  pillarIconWrap: {
    width: '52px',
    height: '52px',
    background: '#dce8fb',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillarTitleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2.25),
  },
  pillarIconSvg: {
    width: '26px',
    height: '26px',
    stroke: '#2152d9',
    fill: 'none',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
  pillarCardTitle: {
    fontSize: '17px',
    fontWeight: 700,
    color: '#1a1a2e',
    lineHeight: 1.3,
  },
  pillarList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: 0,
    margin: 0,
  },
  pillarListItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '9px',
    fontSize: '14px',
    color: '#4b5563',
    lineHeight: 1.6,
    '&::before': {
      content: '""',
      flexShrink: 0,
      width: '16px',
      height: '16px',
      marginTop: '3px',
      background: '#2152d9',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpolyline points='3,8 6,11 13,5' fill='none' stroke='white' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
      backgroundSize: '16px',
      backgroundRepeat: 'no-repeat',
    },
  },
  howSection: {
    background: '#f0f4fb',
    padding: theme.spacing(7, 5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4, 2),
    },
  },
  howInner: {
    maxWidth: '1040px',
    margin: '0 auto',
  },
  howHeader: {
    textAlign: 'center',
    marginBottom: theme.spacing(4.5),
  },
  howTitle: {
    fontSize: '30px',
    fontWeight: 800,
    color: '#1a1a2e',
    letterSpacing: '-0.4px',
    marginBottom: theme.spacing(1),
  },
  howHeaderSub: {
    fontSize: '15px',
    color: '#6b7280',
    maxWidth: '600px',
    margin: '0 auto',
  },
  howGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
    },
  },
  howCard: {
    background: '#fff',
    borderRadius: '16px',
    padding: '28px 28px',
    border: '1.5px solid #e2ecf9',
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start',
  },
  howCardIcon: {
    flexShrink: 0,
    width: '48px',
    height: '48px',
    background: '#dce8fb',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  howCardIconSvg: {
    width: '24px',
    height: '24px',
    stroke: '#2152d9',
    fill: 'none',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
  howCardBody: {
    flex: 1,
  },
  howCardTitle: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#1a1a2e',
    marginBottom: theme.spacing(1),
  },
  howCardText: {
    fontSize: '14px',
    color: '#4b5563',
    lineHeight: 1.7,
  },
}));

const SecurityPillars = () => {
  const { classes } = useStyles();

  return (
    <Box>
      {/* 3 SECURITY PILLARS */}
      <Box className={classes.pillarsSection}>
        <Box className={classes.pillarsHeader}>
          <img
            src="/images/security/security-illustration.png"
            alt="Security Illustration"
            className={classes.pillarsHeaderImg}
          />
          <Box className={classes.pillarsHeaderText}>
            <Typography variant="h2" className={classes.pillarsTitle}>
              The 3 Security Pillars
            </Typography>
            <Typography className={classes.pillarsHeaderSub}>
              Every layer of Plootus is designed from the ground up to keep your
              financial data safe and private.
            </Typography>
          </Box>
        </Box>

        <Box className={classes.pillarsGrid}>
          <Box className={classes.pillarCard}>
            <Typography className={classes.pillarNum}>Pillar One</Typography>
            <Box className={classes.pillarTitleRow}>
              <Box className={classes.pillarIconWrap}>
                <svg className={classes.pillarIconSvg} viewBox="0 0 24 24">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <circle cx="12" cy="18" r="1" fill="#2152d9" stroke="none" />
                </svg>
              </Box>
              <Typography variant="h3" className={classes.pillarCardTitle}>
                Data Protection and Encryption
              </Typography>
            </Box>
            <ul className={classes.pillarList}>
              <li className={classes.pillarListItem}>
                Bank-level security and 256 bit SSL encryption
              </li>
              <li className={classes.pillarListItem}>
                Store data in a highly secure, encrypted cloud environment with robust access controls
              </li>
            </ul>
          </Box>

          <Box className={classes.pillarCard}>
            <Typography className={classes.pillarNum}>Pillar Two</Typography>
            <Box className={classes.pillarTitleRow}>
              <Box className={classes.pillarIconWrap}>
                <svg className={classes.pillarIconSvg} viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </Box>
              <Typography variant="h3" className={classes.pillarCardTitle}>
                Privacy and Confidentiality
              </Typography>
            </Box>
            <ul className={classes.pillarList}>
              <li className={classes.pillarListItem}>
                Collect minimum and only necessary user data while avoiding sensitive details like SSN, home address
              </li>
              <li className={classes.pillarListItem}>
                Employ strict access controls and anonymization techniques to safeguard user identities
              </li>
            </ul>
          </Box>

          <Box className={classes.pillarCard}>
            <Typography className={classes.pillarNum}>Pillar Three</Typography>
            <Box className={classes.pillarTitleRow}>
              <Box className={classes.pillarIconWrap}>
                <svg className={classes.pillarIconSvg} viewBox="0 0 24 24">
                  <circle cx="9" cy="7" r="4" />
                  <path d="M3 20v-1a6 6 0 0 1 12 0v1" />
                  <path d="M19 8l2 2 4-4" strokeWidth="2.5" />
                </svg>
              </Box>
              <Typography variant="h3" className={classes.pillarCardTitle}>
                Compliance and Monitoring
              </Typography>
            </Box>
            <ul className={classes.pillarList}>
              <li className={classes.pillarListItem}>
                Ensure third-party adherence to key regulations and ISO and SOC2 standards
              </li>
              <li className={classes.pillarListItem}>
                Continuously adapt security measures based on evolving threats and best practices.
              </li>
            </ul>
          </Box>
        </Box>
      </Box>

      {/* HOW IT WORKS */}
      <Box className={classes.howSection}>
        <Box className={classes.howInner}>
          <Box className={classes.howHeader}>
            <Typography variant="h2" className={classes.howTitle}>
              How We Protect Your Data
            </Typography>
            <Typography className={classes.howHeaderSub}>
              A layered security approach means your financial information is protected at every step.
            </Typography>
          </Box>
          <Box className={classes.howGrid}>
            <Box className={classes.howCard}>
              <Box className={classes.howCardIcon}>
                <svg className={classes.howCardIconSvg} viewBox="0 0 24 24">
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
              </Box>
              <Box className={classes.howCardBody}>
                <Typography variant="h3" className={classes.howCardTitle}>Zero Credential Storage</Typography>
                <Typography className={classes.howCardText}>
                  Your bank username and password are never stored or seen by Plootus. We use secure tokenized connections so your login credentials stay completely private — even from us.
                </Typography>
              </Box>
            </Box>

            <Box className={classes.howCard}>
              <Box className={classes.howCardIcon}>
                <svg className={classes.howCardIconSvg} viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </Box>
              <Box className={classes.howCardBody}>
                <Typography variant="h3" className={classes.howCardTitle}>256-bit SSL Encryption</Typography>
                <Typography className={classes.howCardText}>
                  All data transmitted between your device and our servers is encrypted using 256-bit SSL — the gold standard in financial data security, used by the world&apos;s largest banks.
                </Typography>
              </Box>
            </Box>

            <Box className={classes.howCard}>
              <Box className={classes.howCardIcon}>
                <svg className={classes.howCardIconSvg} viewBox="0 0 24 24">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </Box>
              <Box className={classes.howCardBody}>
                <Typography variant="h3" className={classes.howCardTitle}>Read-Only Access</Typography>
                <Typography className={classes.howCardText}>
                  Plootus&apos;s connection to your accounts is strictly read-only. We can view your account information to give you better recommendations — but we can never move, transfer, or modify your funds.
                </Typography>
              </Box>
            </Box>

            <Box className={classes.howCard}>
              <Box className={classes.howCardIcon}>
                <svg className={classes.howCardIconSvg} viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </Box>
              <Box className={classes.howCardBody}>
                <Typography variant="h3" className={classes.howCardTitle}>AWS Cloud Infrastructure</Typography>
                <Typography className={classes.howCardText}>
                  Your data is stored on Amazon Web Services (AWS) — the same enterprise cloud infrastructure trusted by government agencies and Fortune 500 companies around the world.
                </Typography>
              </Box>
            </Box>

            <Box className={classes.howCard}>
              <Box className={classes.howCardIcon}>
                <svg className={classes.howCardIconSvg} viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                  <line x1="19" y1="8" x2="19" y2="14" />
                  <line x1="22" y1="11" x2="16" y2="11" />
                </svg>
              </Box>
              <Box className={classes.howCardBody}>
                <Typography variant="h3" className={classes.howCardTitle}>Minimum Data Collection</Typography>
                <Typography className={classes.howCardText}>
                  We only ask for what we need — nothing more. No Social Security Number, no complete home address, no sensitive personal identifiers. Your privacy is not a tradeoff for better features.
                </Typography>
              </Box>
            </Box>

            <Box className={classes.howCard}>
              <Box className={classes.howCardIcon}>
                <svg className={classes.howCardIconSvg} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </Box>
              <Box className={classes.howCardBody}>
                <Typography variant="h3" className={classes.howCardTitle}>You Stay in Control</Typography>
                <Typography className={classes.howCardText}>
                  You can revoke Plootus&apos;s access to any of your accounts at any time, instantly. We provide AI-powered recommendations, but every decision remains entirely yours to make.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SecurityPillars;
