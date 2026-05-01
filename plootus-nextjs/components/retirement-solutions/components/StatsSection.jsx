import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const stats = [
  {
    value: '42%',
    description: 'of the millennials have not begun saving for retirement',
  },
  {
    value: 'half',
    description: 'of the Gen-Xers have less than $10K saved for retirement',
  },
  {
    value: '28%',
    description: 'of the people over 55 have no retirement savings',
  },
];

const StatsSection = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" color="primary" gutterBottom>
                  {stat.value}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {stat.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;
