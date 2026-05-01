import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, Button, Menu, MenuItem, Radio } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import InfoIcon from '@mui/icons-material/Info';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FeesGraph from './FeesGraph';
import NewPie from './NewPie';
import FundsTable from '../../FundsTable';

const useStyles = makeStyles()((theme) => ({
  analysisContainer: {
    padding: theme.spacing(0),
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: theme.spacing(2),
    },
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: 800,
    color: '#4361EE',
  },
  subtitleWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: theme.spacing(1),
    marginTop: theme.spacing(0.5),
  },
  subtitle: {
    fontSize: '0.875rem',
    color: '#64748B',
    maxWidth: '670px',
    lineHeight: 1.5,
  },
  strategyToggle: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    flexShrink: 0,
  },
  strategyLabel: {
    fontSize: '0.875rem',
    fontWeight: 700,
    color: '#64748B',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  strategyButton: {
    backgroundColor: '#4361EE',
    color: 'white',
    padding: '8px 20px',
    borderRadius: '8px',
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: '#3651D1',
    },
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  strategyMenu: {
    '& .MuiPaper-root': {
      borderRadius: '8px',
      marginTop: theme.spacing(1),
      minWidth: 200,
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      border: '1px solid #E2E8F0',
    },
  },
  strategyMenuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 16px',
    fontSize: '0.9375rem',
    fontWeight: 500,
    color: '#1E293B',
    borderBottom: '1px solid #F1F5F9',
    '&:last-child': {
      borderBottom: 'none',
    },
    '&:hover': {
      backgroundColor: '#F8FAF6',
    },
  },
  graphPaper: {
    padding: theme.spacing(3),
    borderRadius: '24px',
    border: '1px solid #E2E8F0',
    height: '100%',
    backgroundColor: '#FFFFFF',
    transition: 'box-shadow 0.3s ease',
    '&:hover': {
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)',
    },
  },
  chartTitle: {
    fontSize: '1.125rem',
    fontWeight: 700,
    color: '#1E293B',
    marginBottom: theme.spacing(3),
  },
  tableSection: {
    marginTop: theme.spacing(8),
  },
  tablePaper: {
    borderRadius: '24px',
    overflow: 'hidden',
    border: '1px solid #E2E8F0',
  },
  disclaimer: {
    fontSize: '0.8125rem',
    color: '#94A3B8',
    width: '100%',
    marginTop: theme.spacing(3),
    lineHeight: 1.6,
    textAlign: 'left',
    fontStyle: 'italic',
  },
}));

const strategies = [
  'Super Conservative',
  'Conservative',
  'Moderate',
  'Growth',
  'Super Growth'
];

const PlanAnalysis = ({ planType = '401k', strategy, setStrategy, width, funds, fees, createdAt }) => {
  const { classes } = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (index) => {
    setStrategy(index);
    handleClose();
  };

  return (
    <Box className={classes.analysisContainer}>
      <Box className={classes.header}>
        <Box>
          <Typography className={classes.title}>
            Suggested Allocation *
          </Typography>
          <Box className={classes.subtitleWrapper}>
            <Typography className={classes.subtitle}>
              Use the dropdown to explore different risk strategies - Super Conservative, Conservative, Moderate, Growth, and Super Growth - and see how each one changes your portfolio allocation
            </Typography>
          </Box>
        </Box>

        <Box className={classes.strategyToggle}>
          <Typography className={classes.strategyLabel}>SELECT A STRATEGY</Typography>
          <Button
            className={classes.strategyButton}
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            {strategies[strategy]}
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            className={classes.strategyMenu}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {strategies.map((label, index) => (
              <MenuItem
                key={label}
                onClick={() => handleSelect(index)}
                className={classes.strategyMenuItem}
              >
                <Radio
                  checked={strategy === index}
                  size="small"
                  sx={{
                    color: '#E2E8F0',
                    '&.Mui-checked': {
                      color: '#4361EE',
                    },
                    padding: '0 8px 0 0',
                  }}
                />
                {label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Paper className={classes.graphPaper} elevation={0}>
            <Typography className={classes.chartTitle}>Projected Fees Saved</Typography>
            <Box sx={{ height: 350 }}>
              <FeesGraph 
                strategy={strategy} 
                manualFees={fees}
                manualCreatedAt={createdAt}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper className={classes.graphPaper} elevation={0}>
            <Typography className={classes.chartTitle}>Allocation Strategy</Typography>
            <Box sx={{ height: 350 }}>
              <NewPie funds={funds} strategy={strategy} />
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <div className={classes.tableSection}>
        <Typography className={classes.chartTitle} sx={{ mb: 3 }}>Proposed Portfolio</Typography>
        <Paper className={classes.tablePaper} elevation={0}>
          <FundsTable strategy={strategy} funds={funds} style={{ boxShadow: 'none', height: '500px' }} />
        </Paper>
        <Typography className={classes.disclaimer}>
          * This suggested allocation is based on recent data and is provided for informational purposes only. It is not investment advice, does not consider your individual circumstances, and does not guarantee future results. Plootus, a Registered Investment Adviser, is not acting as your fiduciary. Please consult your own financial or tax advisor before making investment decisions.
        </Typography>
      </div>
    </Box>
  );
};

export default PlanAnalysis;
