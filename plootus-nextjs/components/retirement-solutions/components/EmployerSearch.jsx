import React, { useState, useEffect } from 'react';
import { makeStyles } from 'tss-react/mui';
import {
  TextField,
  InputAdornment,
  CircularProgress,
  Paper,
  List,
  ListItem,
  Typography,
  Box,
  Fade,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useEmployerSearch from '../../../lib/hooks/useEmployerSearch';

const useStyles = makeStyles()((theme) => ({
  searchWrapper: {
    position: 'relative',
  },
  searchField: {
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#F8FAFC',
      borderRadius: 12,
      '& fieldset': {
        borderColor: '#E2E8F0',
        borderWidth: 1,
      },
      '&:hover fieldset': {
        borderColor: '#CBD5E1',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#4361EE',
        borderWidth: 1,
      },
    },
    '& input': {
      padding: '16px 14px',
    },
  },
  resultsContainer: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    zIndex: 1000,
    marginTop: 8,
    maxHeight: 400,
    overflow: 'auto',
    backgroundColor: '#fff',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: 12,
  },
  listItem: {
    padding: theme.spacing(2),
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#F8FAFC',
    },
  },
  employerName: {
    fontWeight: 500,
    color: '#1E293B',
  },
  employerDetails: {
    fontSize: '0.875rem',
    color: '#64748B',
  },
  noResults: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#64748B',
  },
}));

const EmployerSearch = () => {
  const { classes } = useStyles();
  const [showResults, setShowResults] = useState(false);
  const employerSearch = useEmployerSearch();
  const { data, loading, value = '', employer_selected } = employerSearch;

  const sampleEmployers = [
    { name: 'Amazon', ein: '91-1646860' },
    { name: 'GE', ein: '14-0689340' },
    { name: 'Facebook', ein: '20-1665019' },
    { name: 'Tesla', ein: '91-2197729' },
    { name: 'Apple', ein: '94-2404110' },
    { name: 'Starbucks', ein: '91-1325671' },
  ];

  const filteredEmployers = value
    ? sampleEmployers.filter((emp) =>
        emp.name.toLowerCase().includes(value.toLowerCase())
      )
    : [];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.searchWrapper')) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFocus = () => {
    setShowResults(true);
  };

  const handleEmployerSelect = (employer) => {
    employerSearch.setLocalData({
      value: employer.name,
      employer_selected: employer.name,
    });
    setShowResults(false);
  };

  return (
    <div className={`${classes.searchWrapper} searchWrapper`}>
      <TextField
        fullWidth
        placeholder="Search for your 401k Plan"
        variant="outlined"
        className={classes.searchField}
        value={value}
        onChange={(e) => employerSearch.setLocalData({ value: e.target.value })}
        onFocus={handleFocus}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{ color: '#94A3B8' }} />
            </InputAdornment>
          ),
          endAdornment: loading && (
            <InputAdornment position="end">
              <CircularProgress size={20} style={{ color: '#4361EE' }} />
            </InputAdornment>
          ),
        }}
      />

      {showResults && value && (
        <Fade in={showResults}>
          <Paper className={classes.resultsContainer}>
            {filteredEmployers.length > 0 ? (
              <List>
                {filteredEmployers.map((employer, index) => (
                  <ListItem
                    key={index}
                    className={classes.listItem}
                    onClick={() => handleEmployerSelect(employer)}
                  >
                    <Box>
                      <Typography className={classes.employerName}>
                        {employer.name}
                      </Typography>
                      {employer.ein && (
                        <Typography className={classes.employerDetails}>
                          EIN: {employer.ein}
                        </Typography>
                      )}
                    </Box>
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography className={classes.noResults}>
                {value.length > 2
                  ? 'No employers found'
                  : 'Type at least 3 characters to search'}
              </Typography>
            )}
          </Paper>
        </Fade>
      )}
    </div>
  );
};

export default EmployerSearch;
