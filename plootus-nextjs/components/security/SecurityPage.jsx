import { Box, Container } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import SecurityHero from './SecurityHero';
import SecurityPillars from './SecurityPillars';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(9),
    backgroundColor: '#ffffff',
  },
}));

export default function SecurityPage() {
  const { classes } = useStyles();

  return (
    <Box className={classes.root} component="main">
      <Container maxWidth="lg">
        <SecurityHero />
        <SecurityPillars />
      </Container>
    </Box>
  );
}
