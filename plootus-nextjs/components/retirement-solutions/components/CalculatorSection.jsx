import React from 'react';
import { Box, Container, Typography, Button, Paper } from '@mui/material';

const CalculatorSection = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Paper
          sx={{
            p: { xs: 3, md: 6 },
            textAlign: 'center',
            backgroundImage: 'linear-gradient(to right, #f5f5f5, #ffffff)',
          }}
        >
          <Typography variant="h2" gutterBottom>
            Plan Smarter with Our AI Retirement Calculator!
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}
          >
            Use our AI Retirement Calculator to visualize your savings potential
            and discover how smart planning can secure your financial future.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Calculate Your Retirement
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default CalculatorSection;
