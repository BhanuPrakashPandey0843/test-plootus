import React, { useState, useRef } from 'react';
import { makeStyles } from 'tss-react/mui';
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Paper,
  Grid,
} from '@mui/material';
import { registerChallengeParticipant } from '../../lib/challengeApi';
import PartnersSection from '../home/PartnersSection';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '#F8FAFC',
  },
  heroSection: {
    backgroundImage:
      'linear-gradient(135deg,#2363A5 ), radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06) 2px, transparent 2px), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.06) 2px, transparent 2px)',
    backgroundSize: 'auto, 12px 12px, 14px 14px',
    backgroundBlendMode: 'overlay',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(4),
    },
  },
  heroContentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(4),
    gap: theme.spacing(6),
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing(8),
    },
  },
  heroContent: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      flex: '0 0 50%',
      maxWidth: '50%',
    },
  },
  heroTitle: {
    fontWeight: 700,
    color: '#FFFFFF',
    marginBottom: theme.spacing(1),
    fontSize: '2.5rem',
    lineHeight: 1.2,
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    },
  },
  heroTagline: {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#38A169',
    marginBottom: theme.spacing(2),
  },
  heroDescription: {
    color: '#E2E8F0',
    marginBottom: theme.spacing(3),
    fontWeight: 600,
    fontSize: '1.1rem',
  },
  heroCtaButton: {
    backgroundColor: '#F59E0B',
    color: '#FFFFFF',
    padding: theme.spacing(1.5, 3),
    borderRadius: 8,
    fontSize: '1.125rem',
    fontWeight: 700,
    textTransform: 'none',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    '&:hover': {
      backgroundColor: '#D97706',
    },
  },
  heroActionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(3),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing(4),
    },
  },
  heroDateContainer: {
    display: 'flex',
    flexDirection: 'column',
    borderLeft: '2px solid rgba(255,255,255,0.3)',
    paddingLeft: theme.spacing(2),
  },
  heroImageContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      flex: '0 0 50%',
      maxWidth: '50%',
    },
  },
  heroImage: {
    width: '90%',
    maxWidth: 520,
    height: 'auto',
  },
  stepsSection: {
    backgroundColor: '#FFFFFF',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  stepsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
  stepCard: {
    borderRadius: 12,
    padding: theme.spacing(3),
    boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(1.5),
    border: '1px solid #E2E8F0',
  },
  stepIllustration: {
    width: 140,
    height: 140,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(1),
  },
  stepTitle: {
    color: '#64748B',
    fontWeight: 600,
  },
  stepName: {
    fontWeight: 700,
    color: '#1E293B',
  },
  stepDescription: {
    color: '#64748B',
    textAlign: 'center',
  },
  resultsSection: {
    backgroundColor: '#F8FAFC',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  sectionTitle: {
    fontWeight: 700,
    color: '#1E293B',
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  },
  benefitCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: theme.spacing(3),
    boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
    height: '100%',
  },
  benefitIllustration: {
    width: 120,
    height: 120,
    margin: '0 auto',
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  benefitTitle: {
    fontWeight: 600,
    color: '#1E293B',
    marginBottom: theme.spacing(1),
  },
  benefitDescription: {
    color: '#64748B',
  },
  topicsTitle: {
    fontWeight: 600,
    color: '#1E293B',
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
  topicsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
    },
  },
  topicItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: theme.spacing(2),
    boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  topicIcon: {
    width: 96,
    height: 96,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topicImage: {
    width: 80,
    height: 80,
    objectFit: 'contain',
  },
  topicLabel: {
    fontWeight: 600,
    textAlign: 'center',
    fontSize: '0.9rem',
  },
  amazonSection: {
    backgroundColor: '#FFFFFF',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  amazonContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing(6),
    },
  },
  amazonLogo: {
    width: 175,
    height: 'auto',
  },
  amazonTitle: {
    fontWeight: 700,
    color: '#1E293B',
    marginBottom: theme.spacing(1),
  },
  amazonDescription: {
    color: '#64748B',
    marginBottom: theme.spacing(1),
  },
  amazonCta: {
    color: '#4361EE',
    fontWeight: 600,
  },
  formSection: {
    backgroundColor: '#F8FAFC',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  formPaper: {
    borderRadius: 12,
    padding: theme.spacing(4),
  },
  formPaperHighlight: {
    animation: `$formPulse 900ms ease-out`,
  },
  '@keyframes formPulse': {
    '0%': { backgroundColor: '#F8FAFC' },
    '40%': { backgroundColor: '#EEF2FF' },
    '100%': { backgroundColor: '#F8FAFC' },
  },
  formTitle: {
    fontWeight: 700,
    color: '#1E293B',
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#4361EE',
    color: '#FFFFFF',
    padding: theme.spacing(1.5),
    fontWeight: 700,
    marginTop: theme.spacing(2),
    '&:hover': {
      backgroundColor: '#3553db',
    },
  },
}));

// ── SVG Illustrations ───────────────────────────────────────────
const ClipboardIllustration = () => (
  <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="20" width="90" height="110" rx="8" fill="#E8A85C"/>
    <rect x="20" y="25" width="80" height="100" rx="6" fill="#F5C97E"/>
    <rect x="35" y="10" width="50" height="20" rx="4" fill="#4A6B8A"/>
    <circle cx="60" cy="20" r="6" fill="#3A5570"/>
    <rect x="30" y="45" width="60" height="8" rx="2" fill="#E8F4FC"/>
    <rect x="30" y="60" width="60" height="8" rx="2" fill="#E8F4FC"/>
    <rect x="30" y="75" width="60" height="8" rx="2" fill="#E8F4FC"/>
    <rect x="30" y="90" width="60" height="8" rx="2" fill="#E8F4FC"/>
    <path d="M35 49L40 54L50 44" stroke="#38A169" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M35 64L40 69L50 59" stroke="#38A169" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M35 79L40 84L50 74" stroke="#38A169" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PhoneEmailIllustration = () => (
  <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="20" width="60" height="100" rx="10" fill="#45B5AA"/>
    <rect x="35" y="30" width="50" height="75" rx="4" fill="#E8F4FC"/>
    <rect x="50" y="110" width="20" height="4" rx="2" fill="#3A9A8E"/>
    <rect x="40" y="45" width="40" height="35" rx="4" fill="white" stroke="#45B5AA" strokeWidth="2"/>
    <path d="M40 50L60 65L80 50" stroke="#45B5AA" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="90" cy="40" r="15" fill="#45B5AA"/>
    <path d="M85 40L88 43L95 36" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StopwatchIllustration = () => (
  <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="75" r="50" fill="#1E4D6B"/>
    <circle cx="60" cy="75" r="42" fill="#E8F4FC"/>
    <circle cx="60" cy="75" r="38" fill="white"/>
    <rect x="55" y="20" width="10" height="15" rx="3" fill="#1E4D6B"/>
    <rect x="45" y="10" width="30" height="10" rx="3" fill="#1E4D6B"/>
    <path d="M60 75L60 55" stroke="#1E4D6B" strokeWidth="3" strokeLinecap="round"/>
    <path d="M60 75L75 85" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="60" cy="75" r="4" fill="#1E4D6B"/>
  </svg>
);

const TrophyIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35 25H85V60C85 77 74 90 60 90C46 90 35 77 35 60V25Z" fill="#F6C244"/>
    <path d="M35 30H25C20 30 15 35 15 45C15 55 22 65 35 65V30Z" fill="#F6C244"/>
    <path d="M85 30H95C100 30 105 35 105 45C105 55 98 65 85 65V30Z" fill="#F6C244"/>
    <rect x="50" y="90" width="20" height="10" fill="#D4A84B"/>
    <rect x="40" y="100" width="40" height="8" rx="2" fill="#1E4D6B"/>
  </svg>
);

const RelaxIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="100" rx="45" ry="10" fill="#E2E8F0"/>
    <path d="M25 50C25 50 25 85 25 90C25 95 30 100 40 100H90C95 100 100 95 100 90V70L25 50Z" fill="#4A5568"/>
    <circle cx="60" cy="40" r="18" fill="#F5D0B5"/>
  </svg>
);

const ToolkitIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="45" width="90" height="55" rx="8" fill="#3182CE"/>
    <rect x="20" y="50" width="80" height="45" rx="4" fill="#1E4D6B"/>
    <rect x="45" y="35" width="30" height="15" rx="3" fill="#2B6CB0"/>
  </svg>
);

const Challenge21Days = () => {
  const { classes } = useStyles();
  const formRef = useRef(null);
  
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    ageGroup: '',
    annualHouseholdIncome: '',
    gender: '',
    zipCode: '',
    agreeToSubscribe: false,
  };
  
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState('');
  const [loading, setLoading] = useState(false);
  const [highlightFormPaper, setHighlightFormPaper] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.ageGroup) newErrors.ageGroup = 'Please select an age group';
    if (!formData.annualHouseholdIncome) newErrors.annualHouseholdIncome = 'Please select an income range';
    if (!formData.gender) newErrors.gender = 'Please select a gender';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip code is required';
    else if (!/^\d{5}$/.test(formData.zipCode)) newErrors.zipCode = 'Zip code must be 5 digits';
    if (!formData.agreeToSubscribe) newErrors.agreeToSubscribe = 'This is required to register';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setStatusMessage('');
      try {
        const res = await registerChallengeParticipant(formData);
        if (res && res.alreadyRegistered) {
          setStatusMessage('You have already registered for this challenge.');
          setStatusType('error');
        } else {
          setStatusMessage('Successfully registered for the 21-Day Challenge!');
          setStatusType('success');
          setFormData(initialFormData);
        }
      } catch (err) {
        setStatusMessage('Unable to submit. Please try again.');
        setStatusType('error');
      } finally {
        setLoading(false);
      }
    }
  };

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
      setHighlightFormPaper(true);
      setTimeout(() => setHighlightFormPaper(false), 2000);
    }
  };

  const ageGroups = [
    { value: '18-29', label: '18-29 - Building the Foundation' },
    { value: '30-39', label: '30-39 - Gaining Momentum' },
    { value: '40-54', label: '40-54 - Accelerating Savings' },
    { value: '55-64', label: '55-64 - The Stretch Run to Retirement' },
    { value: '65+', label: '65+ - Retirement and Beyond' },
  ];

  const genders = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  const incomeRanges = [
    { value: '$0-$50,000', label: '$0-$50,000' },
    { value: '$50,000-$100,000', label: '$50,000-$100,000' },
    { value: '$100,000-$250,000', label: '$100,000-$250,000' },
    { value: '$250,000-$500,000', label: '$250,000-$500,000' },
    { value: '$500,000+', label: '$500,000+' },
    { value: 'Prefer Not To Answer', label: 'Prefer Not To Answer' },
  ];

  const topics = [
    { name: 'Budgeting', src: '/images/challenge/budgeting.svg', labelColor: '#F59E0B' },
    { name: 'Smart Saving', src: '/images/challenge/smart-saving.svg', labelColor: '#38A169' },
    { name: 'Debt Management', src: '/images/challenge/debt-management.svg', labelColor: '#1E293B' },
    { name: 'Credit Health', src: '/images/challenge/credit-health.svg', labelColor: '#10B981' },
    { name: 'Emergency Planning', src: '/images/challenge/emergency-planning.svg', labelColor: '#E53E3E' },
  ];

  return (
    <Box className={classes.root}>
      <Box className={classes.heroSection}>
        <Container maxWidth="lg">
          <Box className={classes.heroContentWrapper}>
            <Box className={classes.heroContent}>
              <Typography variant="h1" className={classes.heroTitle}>
                Plootus 21-Day Financial Habits Challenge
              </Typography>
              <Typography className={classes.heroTagline}>
                Small Steps. Big Change. Master Your Money in 21 Days.
              </Typography>
              <Typography className={classes.heroDescription}>
                Join the Plootus 21-Day Financial Habits Challenge. Daily 5-minute tasks to build confidence, reduce stress, and master your money!
              </Typography>

                <Box className={classes.heroDateContainer}>
                  <Typography style={{ color: '#E2E8F0', fontWeight: 700, fontSize: '1.25rem' }}>
                    Next cohort starts May 1, 2026
                  </Typography>
                  <Typography style={{ color: '#E0E7FF', fontSize: '0.9rem' }}>
                    (Registration closes April 28)
                  </Typography>
                </Box>
            </Box>
            <Box className={classes.heroImageContainer}>
              <img src="/HOMEPAGE.svg" alt="Challenge" className={classes.heroImage} />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box className={classes.stepsSection}>
        <Container maxWidth="lg">
          <Box className={classes.stepsContainer}>
            <Paper className={classes.stepCard} elevation={0}>
              <Box className={classes.stepIllustration}><ClipboardIllustration /></Box>
              <Typography variant="h6" className={classes.stepTitle}>Step 1:</Typography>
              <Typography variant="h5" className={classes.stepName}>Register</Typography>
              <Typography className={classes.stepDescription}>Sign up below. It takes 30 seconds to secure your spot.</Typography>
            </Paper>
            <Paper className={classes.stepCard} elevation={0}>
              <Box className={classes.stepIllustration}><PhoneEmailIllustration /></Box>
              <Typography variant="h6" className={classes.stepTitle}>Step 2:</Typography>
              <Typography variant="h5" className={classes.stepName}>Get Daily Prompts</Typography>
              <Typography className={classes.stepDescription}>Receive one actionable task every morning via email.</Typography>
            </Paper>
            <Paper className={classes.stepCard} elevation={0}>
              <Box className={classes.stepIllustration}><StopwatchIllustration /></Box>
              <Typography variant="h6" className={classes.stepTitle}>Step 3:</Typography>
              <Typography variant="h5" className={classes.stepName}>Spend 5 Minutes</Typography>
              <Typography className={classes.stepDescription}>Complete the quick task and build lasting habits.</Typography>
            </Paper>
          </Box>
        </Container>
      </Box>

      <Box className={classes.resultsSection}>
        <Container maxWidth="lg">
          <Typography variant="h4" className={classes.sectionTitle}>Master Your Money.</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box className={classes.benefitCard}>
                <Box className={classes.benefitIllustration}><TrophyIllustration /></Box>
                <Typography variant="h6" className={classes.benefitTitle}>Boost Confidence</Typography>
                <Typography className={classes.benefitDescription}>Feel in control of your financial future.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className={classes.benefitCard}>
                <Box className={classes.benefitIllustration}><RelaxIllustration /></Box>
                <Typography variant="h6" className={classes.benefitTitle}>Reduce Stress</Typography>
                <Typography className={classes.benefitDescription}>Replace money anxiety with a clear plan.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className={classes.benefitCard}>
                <Box className={classes.benefitIllustration}><ToolkitIllustration /></Box>
                <Typography variant="h6" className={classes.benefitTitle}>Build Your Toolkit</Typography>
                <Typography className={classes.benefitDescription}>Evidence-based strategies you'll use forever.</Typography>
              </Box>
            </Grid>
          </Grid>

          <Typography variant="h5" className={classes.topicsTitle}>Topics Covered:</Typography>
          <Box className={classes.topicsGrid}>
            {topics.map((topic) => (
              <Box key={topic.name} className={classes.topicItem}>
                <Box className={classes.topicIcon}>
                  <img src={topic.src} alt={topic.name} className={classes.topicImage} />
                </Box>
                <Typography className={classes.topicLabel} style={{ color: topic.labelColor }}>{topic.name}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box className={classes.amazonSection}>
        <Container maxWidth="md">
          <Box className={classes.amazonContent}>
            <img src="/images/challenge/amazon-gift-card.png" alt="Amazon" className={classes.amazonLogo} />
            <Box>
              <Typography variant="h5" className={classes.amazonTitle}>Building habits is rewarding.</Typography>
              <Typography className={classes.amazonDescription}>Complete the challenge for a chance to win one of several $50 Amazon gift cards!</Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box className={classes.formSection} ref={formRef}>
        <Container maxWidth="sm">
          <Typography variant="h5" sx={{ textAlign: 'center', color: '#1E293B', fontWeight: 700, py: 4 }}>
            Registration for the challenge is now closed.
          </Typography>
        </Container>
      </Box>

      <PartnersSection />
    </Box>
  );
};

export default Challenge21Days;
