import React, { useState, useEffect } from 'react';
import { makeStyles } from 'tss-react/mui';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  InputAdornment,
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SearchIcon from '@mui/icons-material/Search';
import Axios from 'axios';

const socialIcons = [
  { icon: '/images/social-icon/ig.png', link: 'https://www.instagram.com/weareplootus/?hl=en', name: 'Instagram' },
  { icon: '/images/social-icon/x.png', link: 'https://x.com/weareplootus', name: 'X' },
  { icon: '/images/social-icon/thread.png', link: 'https://www.threads.net/@weareplootus', name: 'Threads' },
  { icon: '/images/social-icon/yt.png', link: 'https://www.youtube.com/@weareplootus', name: 'Youtube' },
  { icon: '/images/social-icon/fb.png', link: 'https://www.facebook.com/weareplootus/', name: 'Facebook' },
  { icon: '/images/social-icon/in.png', link: 'https://www.linkedin.com/company/plootus/?viewAsMember=true', name: 'LinkedIn' },
  { icon: '/images/social-icon/bs.png', link: 'https://bsky.app/profile/weareplootus.bsky.social', name: 'Bluesky' },
  { icon: '/images/social-icon/tiktok.svg', link: 'https://www.tiktok.com/@weareplootus', name: 'Tiktok' },
];

const messages = [
  {
    percentage: '60%',
    prefix: 'Over',
    mainText: 'of Americans say they lack control over their finances.',
    subText: 'Plootus gives you a full financial picture to take back control.',
  },
  {
    percentage: '40%',
    prefix: 'Nearly',
    mainText: 'of Americans are not saving enough for retirement?',
    subText: "Don't become part of this statistic. Take control of your financial future today!",
  },
  {
    percentage: '65%',
    prefix: 'Nearly',
    mainText: 'of clients wish their advisors had a better view of their full financial picture.',
    subText: 'Plootus provides a comprehensive picture for advisors, making holistic planning easier.',
  },
];

const useStyles = makeStyles()((theme) => ({
  root: { width: '100%' },
  downloadBanner: {
    backgroundColor: '#3ACB89',
    color: 'white',
    padding: theme.spacing(4),
    position: 'relative',
    overflow: 'hidden',
  },
  bannerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: { flexDirection: 'column', alignItems: 'flex-start' },
  },
  bannerText: { flex: 1, marginRight: theme.spacing(4) },
  bannerButtons: {
    display: 'flex',
    gap: theme.spacing(2),
    [theme.breakpoints.down('md')]: { marginTop: theme.spacing(2) },
  },
  appStoreButton: {
    cursor: 'pointer',
    transition: 'transform 0.2s',
    '&:hover': { transform: 'scale(1.05)' },
  },
  subscribeSection: {
    backgroundColor: '#4361EE',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(4),
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(6),
  },
  subscribeContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: { flexDirection: 'column', gap: theme.spacing(3) },
  },
  subscribeInput: {
    backgroundColor: 'white',
    borderRadius: theme.spacing(1),
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: 'transparent' },
      '&:hover fieldset': { borderColor: 'transparent' },
      '&.Mui-focused fieldset': { borderColor: 'transparent' },
    },
  },
  subscribeButton: {
    backgroundColor: '#4361EE',
    '&:hover': { backgroundColor: '#3651DE' },
    textTransform: 'none',
    borderRadius: 4,
    height: 35,
    minWidth: 100,
  },
  footerSection: {
    backgroundColor: 'black',
    color: 'white',
    padding: theme.spacing(5, 0),
  },
  footerLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: 16,
    display: 'block',
    marginBottom: theme.spacing(2),
    transition: 'color 0.2s ease',
    '&:hover': { color: '#36B37E' },
  },
  activeLink: { color: '#36B37E !important', fontWeight: 500 },
  socialIcons: { display: 'flex', gap: theme.spacing(3), alignItems: 'center' },
  socialIcon: {
    width: '24px',
    height: '24px',
    transition: 'opacity 0.2s',
    '&:hover': { opacity: 0.8 },
  },
  bottomDivider: {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
}));

const Footer = () => {
  const { classes } = useStyles();
  const [currentMessage, setCurrentMessage] = useState(0);
  const [email, setEmail] = useState('');
  const router = useRouter();

  const isActiveLink = (path) => router.pathname === path;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/us/app/plootus-401k-403b-simplified/id1311669590', '_blank');
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      await Axios.post('https://www.plootus.com/api/user/mailingList', { email });
      alert('Successfully subscribed to our mailing list!');
      setEmail('');
    } catch (error) {
      alert('Subscription failed. Please try again.');
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.downloadBanner}>
        <Container>
          <div className={classes.bannerContent}>
            <div className={classes.bannerText}>
              <Typography variant="h6" gutterBottom>
                <span>{messages[currentMessage].prefix} </span>
                <span style={{ color: 'blue', fontWeight: 700 }}>{messages[currentMessage].percentage}</span>{' '}
                {messages[currentMessage].mainText}
              </Typography>
              <Typography variant="body1">{messages[currentMessage].subText}</Typography>
            </div>
            <div className={classes.bannerButtons}>
              <img
                src="/images/ios-black.png"
                alt="App Store"
                height="40"
                className={classes.appStoreButton}
                onClick={handleAppStoreClick}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        </Container>
      </div>

      <div className={classes.footerSection}>
        <Container>
          <div className={classes.subscribeSection}>
            <form onSubmit={handleSubscribe} className={classes.subscribeContent}>
              <div>
                <Typography variant="h5" gutterBottom>SUBSCRIBE FOR WEEKLY INSIGHTS!</Typography>
                <Typography>
                  Stay informed with the top 3 things investors need to know this week, plus updates on new features and expert tips.
                </Typography>
              </div>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Your email ID"
                className={classes.subscribeInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"><SearchIcon /></InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button variant="contained" className={classes.subscribeButton} type="submit">
                        Subscribe
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </form>
          </div>

          <Grid container spacing={4}>
            <Grid item xs={6} sm={2}>
              <Link href="/" className={`${classes.footerLink} ${isActiveLink('/') ? classes.activeLink : ''}`}>Overview</Link>
              <Link href="/philosophy" className={`${classes.footerLink} ${isActiveLink('/philosophy') ? classes.activeLink : ''}`}>Philosophy</Link>
              <Link href="/retirement-solutions" className={`${classes.footerLink} ${isActiveLink('/retirement-solutions') ? classes.activeLink : ''}`}>Retirement Solutions</Link>
              <Link href="/financial-advisors" className={`${classes.footerLink} ${isActiveLink('/financial-advisors') ? classes.activeLink : ''}`}>For Financial Advisors</Link>
            </Grid>

            <Grid item xs={6} sm={2}>
              <Link href="/partners" className={`${classes.footerLink} ${isActiveLink('/partners') ? classes.activeLink : ''}`}>Partners</Link>
              <Link href="/newsletter" className={`${classes.footerLink} ${isActiveLink('/newsletter') ? classes.activeLink : ''}`}>Newsletter</Link>
              <Link href="/finance-101" className={`${classes.footerLink} ${isActiveLink('/finance-101') ? classes.activeLink : ''}`}>Finance 101</Link>
              <Link href="/press" className={`${classes.footerLink} ${isActiveLink('/press') ? classes.activeLink : ''}`}>Press</Link>
            </Grid>

            <Grid item xs={6} sm={2.5}>
              <Link href="/retirement-calculator" className={`${classes.footerLink} ${isActiveLink('/retirement-calculator') ? classes.activeLink : ''}`}>AI Retirement Calculator</Link>
              <Link href="/unclaimed-money" className={`${classes.footerLink} ${isActiveLink('/unclaimed-money') ? classes.activeLink : ''}`}>Unclaimed Money</Link>
              <Link href="/where-is-my-refund" className={`${classes.footerLink} ${isActiveLink('/where-is-my-refund') ? classes.activeLink : ''}`}>Where Is My Refund</Link>
              <Link href="/find-old-401k" className={`${classes.footerLink} ${isActiveLink('/find-old-401k') ? classes.activeLink : ''}`}>Find Old 401k</Link>
            </Grid>

            <Grid item xs={6} sm={1.5}>
              <Link href="/about" className={`${classes.footerLink} ${isActiveLink('/about') ? classes.activeLink : ''}`}>About Us</Link>
              <Link href="/faqs" className={`${classes.footerLink} ${isActiveLink('/faqs') ? classes.activeLink : ''}`}>FAQs</Link>
              <Link href="/faqs#contact" className={`${classes.footerLink}`}>Contact Us</Link>
              <Link href="/security" className={`${classes.footerLink} ${isActiveLink('/security') ? classes.activeLink : ''}`}>Security</Link>
            </Grid>

            <Grid item xs={12} sm={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <Typography variant="h5" style={{ color: 'white' }} gutterBottom>Install App</Typography>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <img
                  src="/images/app-store.png"
                  alt="App Store"
                  width="125"
                  className={classes.appStoreButton}
                  onClick={handleAppStoreClick}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </Grid>
          </Grid>

          <div className={classes.bottomDivider}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '24px', marginBottom: '8px' }}>
                <a
                  href="/privacy"
                  style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px' }}
                  onMouseEnter={(e) => (e.target.style.color = '#36B37E')}
                  onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.6)')}
                >
                  Privacy Policy
                </a>
              </div>
              <Typography variant="body2" style={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center' }}>
                ©2018-{new Date().getFullYear()} Analyze Future LLC | All rights reserved.
              </Typography>
              <div className={classes.socialIcons}>
                {socialIcons.map((social, index) => (
                  <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                    <img src={social.icon} alt={social.name} className={classes.socialIcon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={classes.bottomDivider} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
            Analyze Future LLC (dba Plootus) is a registered investment adviser with the U.S. Securities and Exchange Commission (SEC). Registration does not imply a certain level of skill or training.
            All research, analyses, tools, and publications on Plootus.com are the proprietary intellectual property of Analyze Future LLC and are protected under applicable copyright and intellectual property laws. Reproduction, distribution, or commercial use of any content from this site, in whole or in part, without the prior written consent of Analyze Future LLC is strictly prohibited. Research content may be referenced for informational or educational purposes provided that clear attribution is given and a direct link to the original Plootus.com page is included.
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
