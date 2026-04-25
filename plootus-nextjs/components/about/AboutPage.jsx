import { Box, Container } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: '24px 0',
  },
  card: {
    width: '95%',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f7fd',
    borderRadius: 8,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    maxHeight: '75vh',
    objectFit: 'contain',
    display: 'block',
  },
}));

export default function AboutPage() {
  const { classes } = useStyles();

  return (
    <Box className={classes.page}>
      <Container maxWidth="lg">
        <Box className={classes.card}>
          <img src="/images/girl-image.png" alt="About Plootus" className={classes.image} />
        </Box>
      </Container>
    </Box>
  );
}
