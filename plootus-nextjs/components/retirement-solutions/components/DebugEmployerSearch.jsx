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
    width: '100%',
  },
  searchField: {
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#F8FAFC',
      borderRadius: 12,
      '& fieldset': {
        borderColor: '#E2E8F0',
      },
      '&:hover fieldset': {
        borderColor: '#CBD5E1',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#4361EE',
      },
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
  noResults: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#64748B',
  },
  employerName: {
    fontWeight: 500,
    color: '#1E293B',
  },
  employerDetails: {
    fontSize: '0.875rem',
    color: '#64748B',
  },
  debugInfo: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
    backgroundColor: '#f5f5f5',
    fontSize: '0.75rem',
    color: '#666',
    borderRadius: 4,
  },
}));

const DebugEmployerSearch = () => {
  const { classes } = useStyles();
  const [showResults, setShowResults] = useState(false);
  const [debugInfo, setDebugInfo] = useState({});
  const employerSearch = useEmployerSearch();
  const { data, loading, value, employer_selected, setLocalData } =
    employerSearch;

  useEffect(() => {
    setDebugInfo({
      value,
      dataLength: data?.length || 0,
      loading,
      employer_selected,
      dataType: data ? typeof data : 'undefined',
    });

    console.log('Employer Search Debug:', {
      value,
      data,
      loading,
      employer_selected,
    });
  }, [value, data, loading, employer_selected]);

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

  const handleSearch = (event) => {
    const newValue = event.target.value;
    setLocalData({ value: newValue });
    setShowResults(true);

    console.log('Search initiated:', newValue);
  };

  return (
    <div className={`${classes.searchWrapper} searchWrapper`}>
      <TextField
        fullWidth
        placeholder="Search for your 401k Plan"
        variant="outlined"
        className={classes.searchField}
        value={value}
        onChange={handleSearch}
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
            {loading ? (
              <Box p={2} display="flex" justifyContent="center">
                <CircularProgress size={24} />
              </Box>
            ) : data && data.length > 0 ? (
              <List>
                {data.map((employer, index) => (
                  <ListItem
                    key={index}
                    className={classes.listItem}
                    onClick={() => {
                      setLocalData({ employer_selected: employer.name });
                      setShowResults(false);
                      console.log('Employer selected:', employer);
                    }}
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
                {value.length > 0
                  ? 'No employers found'
                  : 'Start typing to search'}
              </Typography>
            )}

            <Box className={classes.debugInfo}>
              <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
            </Box>
          </Paper>
        </Fade>
      )}
    </div>
  );
};

export default DebugEmployerSearch;
