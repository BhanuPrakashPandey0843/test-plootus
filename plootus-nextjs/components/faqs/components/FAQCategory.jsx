import React from 'react';
import { makeStyles } from 'tss-react/mui';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles()((theme) => ({
  title: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#1E293B',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      fontSize: '1.75rem',
    },
  },
  accordionContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  accordion: {
    border: '1px solid',
    borderColor: theme.palette.divider,
    '&:before': {
      display: 'none',
    },
    borderRadius: '12px !important',
    marginBottom: theme.spacing(1),
    overflow: 'hidden',
    '&.Mui-expanded': {
      margin: '0 0 8px 0',
      borderColor: '#4361EE',
    },
    '&:hover': {
      borderColor: '#4361EE',
      transition: 'border-color 0.2s ease-in-out',
    },
  },
  accordionSummary: {
    '& .MuiExpansionPanelSummary-content': {
      margin: theme.spacing(2, 0),
    },
  },
  question: {
    fontSize: '1.125rem',
    fontWeight: 500,
    color: '#1E293B',
  },
  accordionDetails: {
    borderTop: '1px solid',
    borderColor: theme.palette.divider,
    backgroundColor: '#F8FAFC',
  },
  answer: {
    color: '#64748B',
    lineHeight: 1.6,
  },
}));

const FAQCategory = ({ title, items }) => {
  const { classes } = useStyles();

  return (
    <Box>
      <Typography variant="h2" className={classes.title}>
        {title}
      </Typography>

      <Box className={classes.accordionContainer}>
        {items.map((item, index) => (
          <Accordion
            key={index}
            elevation={0}
            className={classes.accordion}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className={classes.accordionSummary}
            >
              <Typography className={classes.question}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <Typography className={classes.answer}>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQCategory;
