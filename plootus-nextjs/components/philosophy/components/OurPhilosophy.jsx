import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const useStyles = makeStyles()((theme) => ({
  root: {
    padding: theme.spacing(6, 0),
    backgroundColor: '#FFFFFF',
  },
  card: {
    backgroundColor: '#F8FAFD',
    borderRadius: '16px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
    marginBottom: theme.spacing(3),
    minHeight: 'auto',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      minHeight: '260px',
    },
  },
  cardImg: {
    backgroundColor: '#E8F0FB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
    height: '200px',
    flexShrink: 0,
    [theme.breakpoints.up('md')]: {
      width: '380px',
      height: 'auto',
    },
    '& img, & svg': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  cardContent: {
    padding: theme.spacing(3, 3),
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4, 5),
    },
  },
  cardTitleRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  cardIcon: {
    flexShrink: 0,
    width: '48px',
    height: '48px',
    backgroundColor: '#DCE8FB',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      width: '24px',
      height: '24px',
      color: '#2152D9',
    },
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#111827',
    lineHeight: 1.3,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.375rem',
    },
  },
  cardBody: {
    '& p': {
      fontSize: '0.9375rem',
      color: '#4B5563',
      lineHeight: 1.7,
      marginBottom: theme.spacing(1.5),
      '&:last-child': {
        marginBottom: 0,
      },
    },
  },
  bottomBanner: {
    backgroundColor: '#1A2F7A',
    borderRadius: '14px',
    padding: theme.spacing(4, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(3),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      padding: theme.spacing(4, 5.5),
    },
  },
  bannerText: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
    '& h3': {
      fontSize: '1.25rem',
      fontWeight: 700,
      color: '#FFFFFF',
      marginBottom: theme.spacing(0.5),
    },
    '& p': {
      fontSize: '0.875rem',
      color: 'rgba(255, 255, 255, 0.75)',
    },
  },
  bannerBtn: {
    backgroundColor: '#F5A623',
    color: '#1A1A2E',
    fontSize: '0.9375rem',
    fontWeight: 700,
    padding: theme.spacing(1.5, 3.5),
    borderRadius: '8px',
    textTransform: 'none',
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: '#E09510',
    },
  },
}));

const OurPhilosophy = () => {
  const { classes } = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      {/* Card 1 — Democratize */}
      <div className={classes.card}>
        <div className={classes.cardImg}>
          <svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg">
            <rect width="380" height="260" fill="#b8d8f0"/>
            <ellipse cx="60" cy="55" rx="38" ry="22" fill="white" opacity="0.95"/>
            <ellipse cx="88" cy="45" rx="28" ry="18" fill="white" opacity="0.95"/>
            <ellipse cx="38" cy="48" rx="22" ry="16" fill="white" opacity="0.95"/>
            <ellipse cx="200" cy="40" rx="32" ry="18" fill="white" opacity="0.9"/>
            <ellipse cx="225" cy="32" rx="22" ry="14" fill="white" opacity="0.9"/>
            <ellipse cx="178" cy="35" rx="18" ry="12" fill="white" opacity="0.9"/>
            <ellipse cx="310" cy="55" rx="28" ry="16" fill="white" opacity="0.85"/>
            <ellipse cx="332" cy="46" rx="20" ry="13" fill="white" opacity="0.85"/>
            <rect x="0" y="195" width="380" height="65" fill="#6aaa42"/>
            <rect x="0" y="210" width="380" height="50" fill="#5a9435"/>
            <ellipse cx="190" cy="215" rx="160" ry="8" fill="#8bc665" opacity="0.5"/>
            {/* Person 1 */}
            <rect x="45" y="148" width="14" height="26" rx="4" fill="#e74c4c"/>
            <circle cx="52" cy="138" r="12" fill="#f5c5a0"/>
            <rect x="40" y="127" width="24" height="10" rx="5" fill="#5c3a1e"/>
            <rect x="33" y="150" width="10" height="16" rx="3" fill="#3498db"/>
            <rect x="46" y="174" width="6" height="18" rx="3" fill="#2c3e6e"/>
            <rect x="54" y="174" width="6" height="16" rx="3" fill="#2c3e6e"/>
            <ellipse cx="49" cy="191" rx="5" ry="3" fill="#1a1a1a"/>
            <ellipse cx="57" cy="189" rx="5" ry="3" fill="#1a1a1a"/>
            <line x1="59" y1="156" x2="66" y2="165" stroke="#f5c5a0" strokeWidth="4" strokeLinecap="round"/>
            {/* Person 2 */}
            <rect x="115" y="138" width="18" height="36" rx="5" fill="#c0392b"/>
            <circle cx="124" cy="126" r="14" fill="#f0b090"/>
            <rect x="110" y="113" width="28" height="12" rx="6" fill="#8B4513"/>
            <rect x="120" y="139" width="8" height="6" fill="#f0b090"/>
            <rect x="100" y="140" width="13" height="20" rx="4" fill="#8B4513"/>
            <rect x="116" y="174" width="8" height="22" rx="3" fill="#2c3e6e"/>
            <rect x="126" y="174" width="8" height="20" rx="3" fill="#2c3e6e"/>
            <ellipse cx="120" cy="195" rx="6" ry="4" fill="#1a1a1a"/>
            <ellipse cx="130" cy="193" rx="6" ry="4" fill="#1a1a1a"/>
            {/* Person 3 */}
            <rect x="198" y="128" width="22" height="46" rx="5" fill="#1a2a4a"/>
            <rect x="205" y="128" width="8" height="20" fill="#fff"/>
            <polygon points="208,132 210,132 209,148" fill="#c0392b"/>
            <circle cx="209" cy="116" r="16" fill="#f0b090"/>
            <rect x="193" y="101" width="32" height="13" rx="7" fill="#8B4513"/>
            <rect x="205" y="129" width="8" height="6" fill="#f0b090"/>
            <rect x="199" y="174" width="9" height="24" rx="3" fill="#0d1b36"/>
            <rect x="210" y="174" width="9" height="22" rx="3" fill="#0d1b36"/>
            <ellipse cx="204" cy="197" rx="7" ry="4" fill="#111"/>
            <ellipse cx="215" cy="195" rx="7" ry="4" fill="#111"/>
            {/* Person 4 */}
            <rect x="298" y="140" width="20" height="40" rx="5" fill="#e67e22"/>
            <circle cx="308" cy="128" r="15" fill="#f0b090"/>
            <rect x="293" y="114" width="30" height="12" rx="6" fill="#d0d0d0"/>
            <rect x="293" y="112" width="30" height="8" rx="4" fill="#e8e8e8"/>
            <rect x="299" y="180" width="8" height="20" rx="3" fill="#d35400"/>
            <rect x="309" y="180" width="8" height="18" rx="3" fill="#d35400"/>
            <ellipse cx="303" cy="199" rx="6" ry="4" fill="#333"/>
            <ellipse cx="313" cy="197" rx="6" ry="4" fill="#333"/>
            <rect x="0" y="215" width="380" height="3" fill="#4a8028" opacity="0.5"/>
          </svg>
        </div>
        <div className={classes.cardContent}>
          <div className={classes.cardTitleRow}>
            <div className={classes.cardIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <Typography variant="h3" className={classes.cardTitle}>
              Democratize Retirement Planning for All
            </Typography>
          </div>
          <div className={classes.cardBody}>
            <Typography component="p">
              Retirement planning shouldn't be complicated or out of reach. We make it simple, personalized, and accessible—so whether you're just starting your career or nearing retirement, you can confidently plan for the life you want.
            </Typography>
            <Typography component="p">
              We help you understand your current situation, navigate life's changes, and choose the right investments in your 401(k) or 403(b) to work toward a happier future.
            </Typography>
          </div>
        </div>
      </div>

      {/* Card 2 — Technology */}
      <div className={classes.card}>
        <div className={classes.cardImg}>
          <svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg">
            <rect width="380" height="260" fill="#c8dcf4"/>
            <circle cx="30" cy="60" r="22" fill="#f0c830" opacity="0.9"/>
            <text x="22" y="66" fontSize="16" fill="#fff" fontWeight="bold">$</text>
            <circle cx="345" cy="50" r="20" fill="#f0c830" opacity="0.85"/>
            <text x="337" y="56" fontSize="16" fill="#fff" fontWeight="bold">$</text>
            <rect x="80" y="30" width="210" height="175" rx="16" fill="#fff" opacity="0.95"/>
            <rect x="80" y="30" width="210" height="32" rx="16" fill="#2152d9" opacity="0.9"/>
            <rect x="80" y="46" width="210" height="16" fill="#2152d9" opacity="0.9"/>
            <text x="100" y="52" fontSize="11" fill="#fff" fontWeight="600">401(K)/403(B) PLANS</text>
            <rect x="100" y="100" width="22" height="70" rx="3" fill="#e67e22" opacity="0.85"/>
            <rect x="130" y="80" width="22" height="90" rx="3" fill="#f0c830" opacity="0.85"/>
            <rect x="160" y="115" width="22" height="55" rx="3" fill="#2ecc71" opacity="0.85"/>
            <rect x="190" y="90" width="22" height="80" rx="3" fill="#3498db" opacity="0.85"/>
            <rect x="220" y="105" width="22" height="65" rx="3" fill="#e74c4c" opacity="0.85"/>
            <polyline points="130,155 175,100 210,125 265,65" fill="none" stroke="#e74c4c" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            <polygon points="265,65 255,72 270,78" fill="#e74c4c"/>
          </svg>
        </div>
        <div className={classes.cardContent}>
          <div className={classes.cardTitleRow}>
            <div className={classes.cardIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                <polyline points="16 7 22 7 22 13"/>
              </svg>
            </div>
            <Typography variant="h3" className={classes.cardTitle}>
              Technology-Enabled, Expert Advice—Without the High Cost
            </Typography>
          </div>
          <div className={classes.cardBody}>
            <Typography component="p">
              We combine the power of technology with financial expertise to deliver accurate, unbiased, and affordable guidance.
            </Typography>
            <Typography component="p">
              By securely connecting your accounts, our algorithms analyze your financial picture and future needs—then recommend the best low-cost investment options available in your employer-sponsored plan.
            </Typography>
          </div>
        </div>
      </div>

      {/* Card 3 — Security */}
      <div className={classes.card}>
        <div className={classes.cardImg}>
          <svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg">
            <rect width="380" height="260" fill="#c8dcf4"/>
            <path d="M190 30 L270 65 L270 140 Q270 185 190 210 Q110 185 110 140 L110 65 Z" fill="#2152d9" opacity="0.92"/>
            <path d="M190 42 L258 72 L258 140 Q258 178 190 200 Q122 178 122 140 L122 72 Z" fill="#1a3fbf" opacity="0.8"/>
            <polyline points="160,130 182,152 225,108" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="174" y="120" width="32" height="26" rx="6" fill="white" opacity="0.95"/>
            <path d="M180 120 Q180 108 190 108 Q200 108 200 120" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round"/>
            <circle cx="190" cy="133" r="4" fill="#2152d9"/>
            <rect x="188" y="133" width="4" height="6" rx="2" fill="#2152d9"/>
            <rect x="140" y="215" width="100" height="28" rx="6" fill="#2152d9" opacity="0.9"/>
            <text x="163" y="234" fontSize="13" fill="white" fontWeight="700" letterSpacing="1">SECURE</text>
          </svg>
        </div>
        <div className={classes.cardContent}>
          <div className={classes.cardTitleRow}>
            <div className={classes.cardIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
              </svg>
            </div>
            <Typography variant="h3" className={classes.cardTitle}>
              Your Security. Our Top Priority.
            </Typography>
          </div>
          <div className={classes.cardBody}>
            <Typography component="p">
              We take your privacy seriously. Your data is protected with enterprise-grade encryption and strict security practices.
            </Typography>
            <Typography component="p">
              We never ask for sensitive information like your Social Security Number. Your login credentials are never stored or seen by us, and our read-only access means we can't move money or make changes on your behalf.
            </Typography>
            <Typography component="p">
              You'll always stay in control—we provide recommendations, and you make the final decisions.
            </Typography>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className={classes.bottomBanner}>
        <div className={classes.bannerText}>
          <Typography variant="h3">Better planning. Lower fees. Brighter future.</Typography>
          <Typography component="p">Plootus is here to help you take control of your financial future with confidence.</Typography>
        </div>
        <Button
          variant="contained"
          className={classes.bannerBtn}
          endIcon={<ArrowForwardIosIcon style={{ fontSize: '14px' }} />}
          href="/"
        >
          Get Started Free
        </Button>
      </div>
    </Container>
  );
};

export default OurPhilosophy;
