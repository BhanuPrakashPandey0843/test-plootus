import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: '#4361EE',
    borderRadius: theme.spacing(2),
    overflow: 'hidden',
    position: 'relative',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      gap: theme.spacing(6),
      alignItems: 'center',
      minHeight: 300,
    },
    [theme.breakpoints.up('lg')]: {
      gap: theme.spacing(8),
    },
  },
  leftContent: {
    width: '100%',
    color: 'white',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      width: '85%',
      alignItems: 'flex-start',
      textAlign: 'left',
    },
    [theme.breakpoints.up('lg')]: {
      width: '66%',
    },
  },
  title: {
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: theme.spacing(2),
    color: 'white',
    fontFamily: '"DM Sans", sans-serif',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      fontSize: '22px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      minHeight: '25px',
    },
  },
  titleContainer: {
    width: '100%',
    overflowX: 'auto',
    overflowY: 'hidden',
    whiteSpace: 'pre-wrap',
    paddingBottom: theme.spacing(1),
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  subtitle: {
    fontSize: '24px',
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    color: 'white',
    fontFamily: '"DM Sans", sans-serif',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },
  description: {
    fontSize: '0.875rem',
    lineHeight: 1.6,
    marginBottom: 0,
    opacity: 0.9,
    fontFamily: '"DM Sans", sans-serif',
    color: '#F2F2F2',
    maxWidth: '100%',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.125rem',
    },
  },
  storeButtons: {
    display: 'flex',
    gap: theme.spacing(2),
    flexWrap: 'wrap',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
      gap: theme.spacing(3),
    },
  },
  desktopStoreButtons: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  mobileStoreButtons: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  storeButton: {
    height: 36,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      opacity: 0.9,
      transform: 'translateY(-2px)',
    },
    [theme.breakpoints.up('sm')]: {
      height: 40,
    },
    [theme.breakpoints.up('md')]: {
      height: 44,
    },
    [theme.breakpoints.up('lg')]: {
      height: 48,
    },
  },
  rightContent: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 150,
    [theme.breakpoints.up('sm')]: {
      minHeight: 200,
    },
    [theme.breakpoints.up('md')]: {
      width: '45%',
      minHeight: 250,
      justifyContent: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      width: '40%',
      minHeight: 300,
    },
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    maxWidth: 300,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('lg')]: {
      maxWidth: 300,
    },
  },
  dashboardImage: {
    width: '100%',
    height: 'auto',
    maxHeight: '100%',
    objectFit: 'contain',
    position: 'relative',
    zIndex: 2,
  },
  overlayImage: {
    position: 'absolute',
    width: '100%',
    height: '120%',
    left: '10%',
    bottom: '0%',
    zIndex: 3,
  },
  gridBackground: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
    `,
    backgroundSize: '20px 20px',
    opacity: 0.1,
    zIndex: 0,
  },
  cursor: {
    display: 'inline-block',
    width: '2px',
    height: '1em',
    backgroundColor: '#3ACB89',
    marginLeft: '2px',
    animation: 'blink 1s infinite',
    verticalAlign: 'middle',
  },
  activeText: {
    color: '#3ACB89',
  },
}));

const TypewriterEffect = ({ sentences, keywords }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [isTyping] = useState(true);
  const { classes } = useStyles();

  useEffect(() => {
    if (!isTyping) return;

    const currentSentence = sentences[currentSentenceIndex];
    if (displayText === currentSentence) {
      const t = setTimeout(() => {
        setDisplayText('');
        setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
      }, 2000);
      return () => clearTimeout(t);
    }

    const timeout = setTimeout(() => {
      setDisplayText(currentSentence.slice(0, displayText.length + 1));
    }, 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentSentenceIndex, sentences, isTyping]);

  const renderText = () => {
    const currentKeyword = keywords[currentSentenceIndex];
    const text = displayText;
    if (!text) return null;

    const keywordIndex = text.toLowerCase().indexOf(currentKeyword.toLowerCase());
    if (keywordIndex === -1) return <span style={{ color: 'white' }}>{text}</span>;

    return (
      <>
        <span style={{ color: 'white' }}>{text.substring(0, keywordIndex)}</span>
        <span className={classes.activeText}>
          {text.substring(keywordIndex, keywordIndex + currentKeyword.length)}
        </span>
        <span style={{ color: 'white' }}>{text.substring(keywordIndex + currentKeyword.length)}</span>
      </>
    );
  };

  return (
    <div>
      {renderText()}
      <span className={classes.cursor} />
    </div>
  );
};

const HeroSection = () => {
  const { classes } = useStyles();

  const sentences = [
    'Plan your retirement with confidence.',
    'Invest smarter, not harder.',
    'Budget for a better future.',
    'Track your progress to success.',
  ];
  const keywords = ['Plan', 'Invest', 'Budget', 'Track'];

  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/us/app/plootus-401k-403b-simplified/id1311669590', '_blank');
  };

  const StoreButtons = ({ className }) => (
    <div className={`${classes.storeButtons} ${className}`}>
      <img
        src="/images/app-store-badge.png"
        alt="Download on App Store"
        className={classes.storeButton}
        onClick={handleAppStoreClick}
      />
    </div>
  );

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <div className={classes.contentContainer}>
          <div className={classes.leftContent}>
            <div className={classes.titleContainer}>
              <Typography variant="h1" className={classes.title}>
                <TypewriterEffect sentences={sentences} keywords={keywords} />
              </Typography>
            </div>

            <Typography variant="h3" className={classes.subtitle}>
              Save on Hidden Fees
            </Typography>

            <Typography className={classes.description}>
              Plootus optimizes your 401k, 403b, 457 or TSP retirement account. Budget smarter, and
              Manage all your Financial Accounts in One Place.
            </Typography>

            <StoreButtons className={classes.desktopStoreButtons} />
          </div>

          <div className={classes.rightContent}>
            <div className={classes.imageContainer}>
              <img
                src="/images/hero/dashboard.png"
                alt="Dashboard Background"
                className={classes.dashboardImage}
              />
              <img
                src="/images/Plootus-Hero.png"
                alt="Financial Planning"
                className={classes.overlayImage}
              />
              <div className={classes.gridBackground} />
            </div>
          </div>

          <StoreButtons className={classes.mobileStoreButtons} />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
