import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const pillars = [
  {
    icon: '/images/security/pillar-one.png',
    title: 'Pillar One: Data Protection and Encryption',
    points: [
      'Bank-level security',
      '256 bit SSL encryption',
      'Store data in a highly secure, encrypted cloud environment with robust access controls',
    ],
  },
  {
    icon: '/images/security/pillar-two.png',
    title: 'Pillar Two: Privacy and Confidentiality',
    points: [
      'Collect minimum and only necessary user data while avoiding sensitive details like SSN, home address',
      'Employ strict access controls and anonymization techniques to safeguard user identities',
    ],
  },
  {
    icon: '/images/security/pillar-three.png',
    title: 'Pillar Three: Compliance and Monitoring',
    points: [
      'Ensure third-party adherence to key regulations and ISO and SOC2 standards',
      'Continuously adapt security measures based on evolving threats and best practices.',
    ],
  },
];

const useStyles = makeStyles()((theme) => ({
  root: {
    padding: theme.spacing(8, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(10, 0),
    },
  },
  title: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#1E293B',
    marginBottom: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
      marginBottom: theme.spacing(10),
    },
  },
  pillarItem: {
    display: 'flex',
    gap: theme.spacing(5),
    marginBottom: theme.spacing(8),
    '&:last-child': {
      marginBottom: 0,
    },
    [theme.breakpoints.down('md')]: {
      gap: theme.spacing(4),
      flexDirection: 'column',
    },
  },
  pillarIcon: {
    width: 240,
    height: 200,
    flexShrink: 0,
    backgroundColor: '#F8FAFC',
    borderRadius: 24,
    padding: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(226, 232, 240, 0.8)',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      maxWidth: 240,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  pillarImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  pillarContent: {
    paddingTop: theme.spacing(2),
    flex: 1,
  },
  pillarTitle: {
    fontSize: '1.375rem',
    fontWeight: 600,
    color: '#1E293B',
    marginBottom: theme.spacing(3),
  },
  pointsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  pointItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },
  pointDot: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    backgroundColor: '#64748B',
    flexShrink: 0,
    marginTop: 12,
  },
  pointText: {
    fontSize: '1rem',
    color: '#64748B',
    lineHeight: 1.6,
  },
}));

function PillarItem({ icon, title, points }) {
  const { classes } = useStyles();

  return (
    <Box className={classes.pillarItem}>
      <Box className={classes.pillarIcon}>
        <img src={icon} alt={title} className={classes.pillarImage} />
      </Box>

      <Box className={classes.pillarContent}>
        <Typography className={classes.pillarTitle}>{title}</Typography>

        <Box component="ul" className={classes.pointsList}>
          {points.map((point) => (
            <Box component="li" key={point} className={classes.pointItem}>
              <Box component="span" className={classes.pointDot} />
              <Typography className={classes.pointText}>{point}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default function SecurityPillars() {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h2" className={classes.title}>
          The 3 Security Pillars
        </Typography>

        <Box>
          {pillars.map((pillar) => (
            <PillarItem key={pillar.title} icon={pillar.icon} title={pillar.title} points={pillar.points} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
