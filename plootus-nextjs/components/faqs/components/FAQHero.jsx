import React from 'react';
import { makeStyles } from 'tss-react/mui';
import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: '#F8FAFC',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    borderBottom: '1px solid',
    borderColor: theme.palette.divider,
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#1E293B',
    lineHeight: 1.2,
    marginBottom: theme.spacing(3),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    },
  },
  titleHighlight: {
    color: '#4361EE',
    display: 'block',
    marginBottom: theme.spacing(1),
  },
  description: {
    fontSize: '1rem',
    color: '#64748B',
    marginBottom: theme.spacing(4),
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.125rem',
    },
  },
  supportLink: {
    color: '#4361EE',
    cursor: 'pointer',
    fontWeight: 700,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  searchContainer: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  searchField: {
    backgroundColor: 'white',
    borderRadius: 12,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.divider,
        borderRadius: 12,
      },
      '&:hover fieldset': {
        borderColor: '#4361EE',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#4361EE',
        borderWidth: 1,
      },
      padding: '4px 8px',
    },
  },
}));

const FAQHero = ({ searchQuery, setSearchQuery, onSupportClick }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="md">
        <Typography variant="h1" className={classes.title}>
          <Box component="span" className={classes.titleHighlight}>
            FAQs
          </Box>
        </Typography>
        <Typography className={classes.description}>
          Find quick answers to common questions about Plootus. Can't find what
          you're looking for?{' '}
          <Box component="span" className={classes.supportLink} onClick={onSupportClick}>
            Contact our support team
          </Box>
          .
        </Typography>

        <Box className={classes.searchContainer}>
          <TextField
            fullWidth
            placeholder="Search FAQs..."
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={classes.searchField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#64748B' }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default FAQHero;
