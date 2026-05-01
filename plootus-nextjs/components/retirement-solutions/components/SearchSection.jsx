import React from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';

const SearchSection = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Make the most of your Employer's 401k/403b Plan!
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}
        >
          Search your 401k, 403b, 457, or TSP plans to get FREE expert advice on
          choosing the right investments. We've analyzed over $618 billion in
          retirement assets to help you save more and earn more.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            maxWidth: 600,
            mx: 'auto',
            mb: 4,
          }}
        >
          <TextField
            fullWidth
            placeholder="Search for your 401k Plan"
            variant="outlined"
            sx={{ bgcolor: 'background.paper' }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              minWidth: { xs: '100%', sm: 200 },
            }}
          >
            Search
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SearchSection;
