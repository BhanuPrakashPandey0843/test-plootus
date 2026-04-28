import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Grid, Paper, Rating, Button } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LockIcon from '@mui/icons-material/Lock';
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import MyTooltip from '../../../utils/MyTooltip';

const DEFAULT_FACTS = [
  {
    key: 'match',
    icon: CardGiftcardIcon,
    label: 'Employer Match',
    color: '#4361EE',
    tooltipText:
      'How generous the match is—based on percentage matched, cap, and waiting period.',
    gridMd: 6,
  },
  {
    key: 'vesting',
    icon: LockIcon,
    label: 'Vesting Schedule',
    color: '#10B981',
    tooltipText:
      'How quickly you gain full ownership of the match. Immediate vesting scores highest.',
    gridMd: 6,
  },
];

const useStyles = makeStyles()((theme) => ({
  section: {
    marginBottom: theme.spacing(8),
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: 800,
    color: '#4361EE',
  },
  titleWrapper: {
    marginBottom: theme.spacing(4),
  },
  card: {
    padding: theme.spacing(3),
    borderRadius: '16px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2.5),
    border: '1px solid #E2E8F0',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      borderColor: '#4361EE',
    },
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    flexWrap: 'wrap',
  },
  label: {
    fontSize: '1.4rem',
    fontWeight: 700,
    color: '#1E293B',
    textTransform: 'none',
    letterSpacing: 'normal',
  },
  subHeader: {
    fontSize: '1.15rem',
    fontWeight: 550,
    color: '#1E293B',
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  description: {
    fontSize: '0.9375rem',
    color: '#475569',
    lineHeight: 1.6,
  },
  truncatedDescription: {
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
  showMoreBtn: {
    textTransform: 'none',
    padding: 0,
    minWidth: 'auto',
    fontSize: '0.875rem',
    fontWeight: 600,
    color: '#4361EE',
    marginTop: theme.spacing(1),
    '&:hover': {
      backgroundColor: 'transparent',
      textDecoration: 'underline',
    },
  },
  icon: {
    fontSize: '1.5rem',
  },
  infoIcon: {
    fontSize: '1rem',
    color: '#94A3B8',
    cursor: 'pointer',
    marginLeft: theme.spacing(0.5),
    '&:hover': {
      color: '#4361EE',
    },
  },
}));

const FactCard = ({ icon: Icon, label, data, color, tooltipText }) => {
  const { classes, cx } = useStyles();
  const { subHeader, description, rating } = data || {};
  const [expanded, setExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (descriptionRef.current) {
      const { scrollHeight, clientHeight } = descriptionRef.current;
      setCanExpand(scrollHeight > clientHeight);
    }
  }, [description]);

  return (
    <Paper className={classes.card} elevation={0}>
      <Box className={classes.cardHeader}>
        <Icon className={classes.icon} style={{ color: color }} />
        <Typography className={classes.label}>{label}</Typography>
        {rating !== undefined && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Rating
              value={rating}
              readOnly
              size="medium"
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <MyTooltip
              title={tooltipText}
              render={() => <InfoIcon className={classes.infoIcon} />}
            />
          </Box>
        )}
      </Box>
      <Box>
        {subHeader && (
          <Typography className={classes.subHeader}>{subHeader}</Typography>
        )}
        {description && (
          <Box>
            <Typography
              ref={descriptionRef}
              className={cx(classes.description, !expanded && classes.truncatedDescription)}
            >
              {description}
            </Typography>
            {canExpand && (
              <Button
                className={classes.showMoreBtn}
                onClick={() => setExpanded(!expanded)}
                endIcon={
                  expanded ? (
                    <ExpandLessIcon fontSize="small" />
                  ) : (
                    <ExpandMoreIcon fontSize="small" />
                  )
                }
              >
                {expanded ? 'Show less' : 'Show more'}
              </Button>
            )}
          </Box>
        )}
      </Box>
    </Paper>
  );
};

const PlanQuickFacts = ({
  title = 'Your 401(k) Perks',
  facts = DEFAULT_FACTS,
  match,
  vesting,
}) => {
  const { classes } = useStyles();
  const factData = {
    match,
    vesting,
  };

  return (
    <section className={classes.section}>
      {title ? (
        <Box className={classes.titleWrapper}>
          <Typography variant="h2" className={classes.title}>
            {title}
          </Typography>
        </Box>
      ) : null}
      <Grid container spacing={4}>
        {facts.map((fact, index) => (
          <Grid
            item
            xs={12}
            md={fact.gridMd || 6}
            key={fact.key || fact.label || index}
          >
            <FactCard
              icon={fact.icon || CardGiftcardIcon}
              label={fact.label}
              data={fact.data || factData[fact.key]}
              color={fact.color || '#4361EE'}
              tooltipText={fact.tooltipText || ''}
            />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default PlanQuickFacts;
