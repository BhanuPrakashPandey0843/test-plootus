import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

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

export default function FAQCategory({ title, items }) {
  const { classes } = useStyles();

  return (
    <Box>
      <Typography variant="h2" className={classes.title}>
        {title}
      </Typography>

      <Box className={classes.accordionContainer}>
        {items.map((item) => (
          <Accordion key={item.question} elevation={0} className={classes.accordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.question}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <Typography className={classes.answer}>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
