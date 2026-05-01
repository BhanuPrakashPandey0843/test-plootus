import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { useSelector } from 'react-redux';

const HeroSection = () => {
  const user = useSelector((state) => state.userReducer);
  const storedToken = typeof window !== 'undefined' ? localStorage.getItem('jwt_token') : null;
  const token = storedToken || user?.token;
  const isAuthenticated = !!token;

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: { xs: 8, md: 12 },
        pb: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h1" gutterBottom>
              Plan Smart,
              <br />
              Retire Happy
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
              Plootus specializes in retirement planning through 401k and 403b
              plans—empowering you to make the right decisions for your future.
            </Typography>
            {!isAuthenticated && (
              <Button variant="contained" color="primary" size="large">
                Get Started Now
              </Button>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/retirement-hero.png"
              alt="Retirement Planning"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: 400,
                objectFit: 'contain',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
