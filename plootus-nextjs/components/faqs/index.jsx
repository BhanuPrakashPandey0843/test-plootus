import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from 'tss-react/mui';
import { Box, Container, Typography, TextField, Grid, Button, Snackbar, Alert } from '@mui/material';
import { submitSupportContact } from './api';
import { useRouter } from 'next/router';
import FAQHero from './components/FAQHero';
import FAQCategory from './components/FAQCategory';
import { faqData } from './data/faqData';

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  container: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  },
  categoryList: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
  },
  contactHeader: {
    textAlign: 'center',
    marginTop: theme.spacing(8),
    scrollMarginTop: theme.spacing(12),
  },
  contactCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
}));

const FAQ = () => {
  const { classes } = useStyles();
  const [searchQuery, setSearchQuery] = useState('');
  const contactRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [snack, setSnack] = useState({ open: false, msg: '', severity: 'success' });

  const getFilteredFAQs = () => {
    if (!searchQuery) return faqData;

    const filtered = {};
    Object.keys(faqData).forEach((category) => {
      const filteredItems = faqData[category].items.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filteredItems.length > 0) {
        filtered[category] = {
          title: faqData[category].title,
          items: filteredItems,
        };
      }
    });
    return filtered;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const { ok, status } = await submitSupportContact({ name, email, query });
      if (ok && status === 200) {
        setName('');
        setEmail('');
        setQuery('');
        setSnack({ open: true, msg: 'Your query is sent. Our support team will reach out to resolve your query.', severity: 'success' });
      }
      else {
        setSnack({ open: true, msg: 'Internal server error, please try later.', severity: 'error' });
      }
    } finally {
      setSubmitting(false);
    }
  };

  const router = useRouter();
  useEffect(() => {
    if (router.asPath.includes('#contact')) {
      const scrollWithOffset = () => {
        const el = contactRef.current;
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      };
      setTimeout(scrollWithOffset, 100);
    }
  }, [router.asPath]);

  return (
    <Box className={classes.root}>
      <FAQHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSupportClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
      />

      <Container maxWidth="md" className={classes.container}>
        <Box className={classes.categoryList}>
          {Object.keys(getFilteredFAQs()).map((category) => (
            <FAQCategory
              key={category}
              title={getFilteredFAQs()[category].title}
              items={getFilteredFAQs()[category].items}
            />
          ))}
        </Box>
        <div ref={contactRef} id="contact" className={classes.contactHeader}>
          <Typography variant="h3" style={{ fontWeight: 700, color: '#1E293B', marginBottom: 8, textAlign: 'center' }}>
            Contact Us
          </Typography>
          <Typography style={{ fontSize: '1rem', color: '#64748B', textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
            Our team is here for you. We will get back to you within 2 business days.
          </Typography>
        </div>

        <Box className={classes.contactCard}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email Id"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="How can we help you?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="How can we help you?"
                  fullWidth
                  multiline
                  minRows={6}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="flex-end">
                  <Button variant="contained" color="primary" type="submit" disabled={submitting}>Submit</Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
        <Snackbar open={snack.open} autoHideDuration={3000} onClose={() => setSnack({ ...snack, open: false })}>
          <Alert onClose={() => setSnack({ ...snack, open: false })} severity={snack.severity} sx={{ width: '100%' }}>
            {snack.msg}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default FAQ;
