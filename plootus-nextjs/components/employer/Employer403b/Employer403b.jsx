import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container, CircularProgress, Box, Typography, Grid, Paper, Rating, Accordion, AccordionSummary, AccordionDetails, TextField, Button } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import InfoIcon from '@mui/icons-material/Info';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

import PartnersSection from '../../home/PartnersSection';
import PlanQuickFacts from './components/PlanQuickFacts';
import PlanAnalysis from './components/PlanAnalysis';
import MyTooltip from '../../utils/MyTooltip';
import HubNav from '../../HubNav/HubNav';

import { fetchEmployer403bData } from '../../../lib/employerApi';
import useWindowDimensions from '../../../lib/useWindowDimensions';

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: '#FFFFFF',
    paddingBottom: theme.spacing(0),
  },
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
  },
  hero: {
    padding: theme.spacing(10, 0, 8),
    background: 'linear-gradient(135deg, #03060d 0, #060708 100%)',
    position: 'relative',
    overflow: 'hidden',
    color: '#FFFFFF',
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse 70% 80% at 90% 50%, rgba(0,181,164,0.2) 0%, transparent 65%)',
      pointerEvents: 'none',
    },
  },
  heroTitle: {
    fontSize: 'clamp(28px, 5vw, 42px)',
    fontWeight: 800,
    lineHeight: 1.1,
    letterSpacing: '-1px',
    marginBottom: theme.spacing(3),
  },
  infoIcon: {
    fontSize: '1.2rem',
    color: 'rgba(255, 255, 255, 0.6)',
    cursor: 'pointer',
    '&:hover': {
      color: '#00b5a4',
    },
  },
  section: {
    padding: theme.spacing(10, 0),
    borderTop: '1px solid #e2e8f0',
  },
  secLabel: {
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#00b5a4',
    marginBottom: theme.spacing(2),
  },
  secTitle: {
    fontSize: 'clamp(24px, 4vw, 36px)',
    fontWeight: 800,
    color: '#0d1f3c',
    letterSpacing: '-0.5px',
    marginBottom: theme.spacing(2),
    lineHeight: 1.2,
  },
  secSub: {
    fontSize: '17px',
    color: '#475569',
    maxWidth: '720px',
    lineHeight: 1.6,
    marginBottom: theme.spacing(6),
  },
  optCard: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderTop: '4px solid #00b5a4',
    borderRadius: '16px',
    padding: theme.spacing(4),
    height: '100%',
    boxShadow: '0 4px 20px rgba(13,31,60,0.05)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
  optIcon: {
    fontSize: '28px',
    marginBottom: theme.spacing(2),
  },
  optTitle: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#0d1f3c',
    marginBottom: theme.spacing(1.5),
  },
  optDesc: {
    fontSize: '15px',
    color: '#475569',
    lineHeight: 1.7,
  },
  optAssumption: {
    fontSize: '12px',
    color: '#94a3b8',
    marginTop: theme.spacing(2),
    fontStyle: 'italic',
  },
  faqAccordion: {
    boxShadow: '0 4px 15px rgba(13,31,60,0.03)',
    border: '1px solid #e2e8f0',
    borderRadius: '16px !important',
    marginBottom: theme.spacing(2),
    '&:before': {
      display: 'none',
    },
    overflow: 'hidden',
  },
  faqSummary: {
    padding: theme.spacing(1, 3),
    '& .MuiTypography-root': {
      fontSize: '16px',
      fontWeight: 600,
      color: '#0d1f3c',
    },
  },
  faqDetails: {
    padding: theme.spacing(0, 3, 3),
    fontSize: '15px',
    color: '#475569',
    lineHeight: 1.7,
  },
}));

const FACTS = [
  {
    key: 'fundOptions',
    icon: TrackChangesIcon,
    label: 'Fund Options',
    color: '#4361EE',
    tooltipText: 'Reflects the number of investment options available in the plan.',
    gridMd: 6,
  },
  {
    key: 'expenseRatio',
    icon: TrendingDownIcon,
    label: 'Average Expense Ratio',
    color: '#10B981',
    tooltipText: 'Provides a reliable indicator of plan cost levels.',
    gridMd: 6,
  },
];

const OPTIMIZATION_DATA = [
  {
    icon: '💸',
    title: 'Hidden Fees Compound Over Decades',
    desc: 'Even a 0.5% difference in expense ratios can cost tens of thousands of dollars over a long career. Plootus identifies low-cost alternatives within your plan\'s lineup to keep more of your money working for you.',
    assumption: 'Assumes $100,000 starting balance, 7% annual return, and a 30-year investment horizon. Actual results will vary.'
  },
  {
    icon: '📊',
    title: 'Default Funds May Underperform',
    desc: 'Many employees remain in auto-enrolled default funds without reviewing whether they\'re the best option. A more tailored allocation — matched to your age and risk tolerance — may deliver better long-term outcomes.'
  },
  {
    icon: '📅',
    title: 'Catch-Up Contributions Matter After 50',
    desc: 'In 2026, employees aged 50+ can contribute an extra $8,000 beyond the $24,500 standard limit (total: $32,500). Employees aged 60–63 may contribute up to $11,250 extra under the SECURE 2.0 Act (total: $35,750) — a critical accelerator in the final years before retirement.'
  },
  {
    icon: '🤖',
    title: 'AI Makes Optimization Effortless',
    desc: 'Plootus analyzes your plan\'s complete fund lineup — performance, fees, and risk — and recommends a personalized allocation strategy in minutes. No financial jargon, no advisor fees, and no Social Security number required.'
  }
];

const FAQ_DATA = [
  {
    q: "What is the IRS contribution limit for 2026?",
    a: "For 2026, the IRS elective deferral limit for 401(k), 403(b), and most 457 plans is $24,500 (up from $23,500 in 2025). Employees age 50 or older may contribute an additional $8,000 catch-up contribution, bringing the total to $32,500."
  },
  {
    q: "What is the enhanced catch-up limit for employees aged 60–63?",
    a: "Under the SECURE 2.0 Act, employees aged 60, 61, 62, or 63 may make an enhanced \"super\" catch-up contribution of $11,250 in 2026 — rather than the standard $8,000 — for a total possible deferral of $35,750."
  },
  {
    q: "What is the new Roth catch-up rule for high earners in 2026?",
    a: "Starting January 1, 2026, employees who earned more than $150,000 in FICA wages in the prior year must make all age-based catch-up contributions as Roth (after-tax) contributions."
  },
  {
    q: "Are my retirement plan contributions tax-deductible?",
    a: "Traditional pre-tax contributions reduce your taxable income in the year of contribution. Roth contributions are made with after-tax dollars and grow tax-free."
  },
  {
    q: "What is an expense ratio and why does it matter?",
    a: "An expense ratio is the annual fee a mutual fund charges. Small differences compound significantly over decades. Reducing fees by 0.5% could save over $70,000 over 30 years."
  },
  {
    q: "What is a target-date fund and should I use one?",
    a: "A target-date fund automatically shifts its allocation as you approach retirement. They are convenient but not always the most cost-effective choice."
  },
  {
    q: "How does Plootus work and is it really free?",
    a: "Yes — Plootus is free to use. Search for your employer plan, select a risk strategy, and get an optimized fund allocation. We generate revenue through partnerships."
  }
];

const Employer403b = () => {
  const { classes } = useStyles();
  const router = useRouter();
  const { employerName } = router.query;
  const { width } = useWindowDimensions();
  const [strategy, setStrategy] = useState(2);
  const [employerData, setEmployerData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (employerName && employerName !== '404') {
      fetchEmployer403bData(employerName)
        .then(data => {
          if (data) {
            setEmployerData(data);
          } else {
            router.replace('/404');
          }
          setLoading(false);
        })
        .catch(() => {
          router.replace('/404');
        });
    } else if (employerName === '404') {
      // If we are actually on the 404 page, just stop loading
      setLoading(false);
    }
  }, [employerName, router]);

  if (loading) {
    return (
      <Box className={classes.loaderContainer}>
        <CircularProgress />
      </Box>
    );
  }

  if (!employerData) return null;

  return (
    <>
      <Head>
        <title>{employerData.employer_name} 403(b) Plan Details | Plootus</title>
        <meta name="description" content={`Explore ${employerData.employer_name}'s 403(b) plan, including fees, fund options, and performance insights.`} />
      </Head>
      
      <HubNav />

      <div className={classes.root}>
        {/* Hero Banner */}
        <div className={classes.hero}>
          <Container maxWidth="lg">
            <Typography variant="h1" className={classes.heroTitle}>
              {employerData.employer_name}<br />Optional Retirement Plan
            </Typography>
            {employerData.plan_rating !== undefined && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Rating
                  value={employerData.plan_rating}
                  readOnly
                  size="large"
                  emptyIcon={<StarIcon style={{ opacity: 0.3, color: '#FFFFFF' }} fontSize="inherit" />}
                  sx={{ '& .MuiRating-iconFilled': { color: '#00b5a4' } }}
                />
                <MyTooltip
                  title="The combined plan rating is the average of the number-of-funds rating and the average expense ratio rating."
                  render={() => <InfoIcon className={classes.infoIcon} />}
                />
              </Box>
            )}
          </Container>
        </div>

        <Container maxWidth="lg" sx={{ mt: 8 }}>
          <PlanQuickFacts
            title={null}
            facts={FACTS.map((fact) => ({
              ...fact,
              data:
                fact.key === 'fundOptions'
                  ? {
                      subHeader: employerData.fund_options_sub_header,
                      description: employerData.fund_options_description,
                      rating: employerData.fund_options_star_rating,
                    }
                  : {
                      subHeader: employerData.average_expense_ratio_sub_header,
                      description:
                        employerData.average_expense_ratio_description,
                      rating: employerData.average_expense_ratio_star_rating,
                    },
            }))}
          />

          <PlanAnalysis
            planType="403(b)"
            strategy={strategy}
            setStrategy={setStrategy}
            width={width}
            funds={employerData.allocations}
            fees={employerData.fees}
            createdAt={employerData.createdAt}
          />
        </Container>

        <PartnersSection />

        {/* Retirement Intelligence */}
        <div className={classes.section}>
          <Container maxWidth="lg">
            <Typography className={classes.secLabel}>Retirement Intelligence</Typography>
            <Typography variant="h2" className={classes.secTitle}>Why Optimizing Your Plan Matters</Typography>
            <Typography className={classes.secSub}>Small adjustments to your retirement fund allocation can have an outsized impact over your career.</Typography>
            <Grid container spacing={3}>
              {OPTIMIZATION_DATA.map((item, idx) => (
                <Grid item xs={12} sm={6} key={idx}>
                  <div className={classes.optCard}>
                    <div className={classes.optIcon}>{item.icon}</div>
                    <Typography variant="h3" className={classes.optTitle}>{item.title}</Typography>
                    <Typography className={classes.optDesc}>{item.desc}</Typography>
                    {item.assumption && <Typography className={classes.optAssumption}>{item.assumption}</Typography>}
                  </div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>

        {/* FAQ Section */}
        <div className={classes.section} style={{ backgroundColor: '#f8fafc' }}>
          <Container maxWidth="lg">
            <Typography className={classes.secLabel}>Common Questions</Typography>
            <Typography variant="h2" className={classes.secTitle}>Retirement Plan FAQs</Typography>
            <Typography className={classes.secSub}>General guidance on IRS contribution limits, tax treatment, and how Plootus helps you.</Typography>
            <Box sx={{ maxWidth: '900px' }}>
              {FAQ_DATA.map((item, idx) => (
                <Accordion key={idx} className={classes.faqAccordion} elevation={0}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#00b5a4' }} />} className={classes.faqSummary}>
                    <Typography>{item.q}</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.faqDetails}>
                    <Typography variant="body2">{item.a}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Employer403b;
