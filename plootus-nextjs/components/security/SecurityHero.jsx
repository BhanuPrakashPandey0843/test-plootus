import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    position: 'relative',
    height: '400px',
    width: '100%',
    backgroundColor: '#F8FAFC',
    overflow: 'hidden',
    display: 'flex',
  },
  leftContent: {
    width: '50%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  title: {
    fontSize: '3rem',
    fontWeight: 700,
    color: '#1E293B',
    lineHeight: 1.2,
    [theme.breakpoints.down('md')]: {
      fontSize: '2.5rem',
    },
  },
  titleHighlight: {
    color: '#4361EE',
    display: 'block',
    marginBottom: theme.spacing(1),
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#64748B',
    fontWeight: 500,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(3),
  },
  description: {
    fontSize: '1rem',
    color: '#64748B',
    lineHeight: 1.6,
  },
  rightImage: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '50%',
    height: '100%',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      objectPosition: 'right',
      display: 'block',
    },
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.05,
    backgroundImage:
      'linear-gradient(rgba(67, 97, 238, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(67, 97, 238, 0.1) 1px, transparent 1px)',
    backgroundSize: '20px 20px',
    zIndex: 1,
    pointerEvents: 'none',
  },
}));

export default function SecurityHero() {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.leftContent}>
        <Box>
          <Typography className={classes.title}>
            <Box component="span" className={classes.titleHighlight}>
              Security
            </Box>
            Is Our First Priority
          </Typography>

          <Typography className={classes.subtitle}>Bank-level security.</Typography>

          <Typography className={classes.description}>
            Data in transit is encrypted using 256-bit SSL encryption method.
          </Typography>
        </Box>
      </Box>

      <Box className={classes.rightImage}>
        <img src="/images/security/security-illustration.png" alt="Security Illustration" />
      </Box>

      <Box className={classes.backgroundPattern} />
    </Box>
  );
}
