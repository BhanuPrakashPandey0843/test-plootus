import React, { useState, useEffect } from 'react';
import { makeStyles } from 'tss-react/mui';
import { Card, Container, Typography, Box } from '@mui/material';

const useStyles = makeStyles()((theme) => ({
  root: {
    padding: theme.spacing(8, 0),
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(6),
    alignItems: 'stretch',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      gap: theme.spacing(3),
    },
  },
  leftSection: {
    flex: 0.4,
    position: 'relative',
    height: 372,
  },
  imageCard: {
    background: 'linear-gradient(to right, #3359C0, #416CE1)',
    borderRadius: theme.spacing(3),
    padding: theme.spacing(2),
    height: 372,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartWrapper: {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2.5),
    width: '100%',
    height: 340,
    display: 'flex',
    flexDirection: 'column',
  },
  rightSection: {
    flex: 0.6,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: theme.spacing(1),
    height: 372,
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      gap: theme.spacing(2),
    },
  },
  featureButton: {
    padding: theme.spacing(2),
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      minHeight: 116,
    },
    border: 'none',
    backgroundColor: 'transparent',
    textAlign: 'left',
    cursor: 'pointer',
    borderRadius: theme.spacing(2),
    transition: 'all 0.3s ease',
    position: 'relative',
    '&:hover': {
      backgroundColor: '#F5F7FD',
      transform: 'translateX(8px)',
    },
    '&.active': {
      backgroundColor: '#F5F7FD',
      transform: 'translateX(8px)',
    },
  },
  featureTitle: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#1E293B',
    marginBottom: theme.spacing(0.5),
    transition: 'color 0.3s ease',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
    },
  },
  featureDesc: {
    fontSize: '1rem',
    color: '#64748B',
    lineHeight: 1.4,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
  },
  sectionHeader: {
    marginBottom: theme.spacing(6),
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#1E293B',
    marginBottom: theme.spacing(1),
  },
}));

const features = [
  {
    id: 1,
    title: 'Save on hidden fees',
    description:
      'Stop losing money to hidden fees. Plootus optimizes your 401k and investment plans, potentially saving you thousands of dollars in fees over time.',
    imageUrl: '/images/home-features/graph1.png',
    value: '$131,255',
  },
  {
    id: 2,
    title: 'Quick Employer Search and Advice',
    description:
      "Effortlessly locate your 401k, 403b, 457, or TSP plan—just enter your employer's name for tailored investment recommendations. No hassle, just results.",
    imageUrl: '/images/home-features/graph2.png',
    value: '$98,450',
  },
  {
    id: 3,
    title: 'AI Retirement Calculator',
    description:
      "Take the guesswork out of retirement. Plootus's AI-driven calculator offers savings projections, strategic suggestions, and helps adjust contributions to meet your goals",
    imageUrl: '/images/home-features/graph3.png',
    value: '$145,780',
  },
];

const WhatPlootusDoes = () => {
  const { classes } = useStyles();
  const [activeFeature, setActiveFeature] = useState(features[0]);
  const [autoChange, setAutoChange] = useState(true);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    let interval;
    if (autoChange) {
      interval = setInterval(() => {
        setActiveFeature((current) => {
          const nextIndex = features.findIndex((f) => f.id === current.id) + 1;
          return features[nextIndex] || features[0];
        });
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [autoChange]);

  const handleFeatureClick = (feature) => {
    setAutoChange(false);
    if (activeFeature.id !== feature.id) setActiveFeature(feature);
  };

  const handleMouseEnter = (feature) => {
    setAutoChange(false);
    setHoveredId(feature.id);
    if (activeFeature.id !== feature.id) setActiveFeature(feature);
  };

  const handleMouseLeave = () => {
    setAutoChange(true);
    setHoveredId(null);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.sectionHeader}>
          <Typography className={classes.title}>
            What Plootus does — Better than anyone else!
          </Typography>
        </div>

        <div className={classes.container}>
          <div className={classes.leftSection}>
            <Card elevation={0} className={classes.imageCard}>
              <div className={classes.chartWrapper}>
                <img
                  src={activeFeature.imageUrl}
                  alt={activeFeature.title}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', transition: 'opacity 0.3s ease' }}
                />
              </div>
            </Card>
          </div>

          <div className={classes.rightSection}>
            {features.map((feature) => {
              const isActive = activeFeature.id === feature.id;
              const isHovered = hoveredId === feature.id;
              return (
                <button
                  key={feature.id}
                  className={`${classes.featureButton} ${isActive ? 'active' : ''}`}
                  onClick={() => handleFeatureClick(feature)}
                  onMouseEnter={() => handleMouseEnter(feature)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Typography
                    className={classes.featureTitle}
                    style={{ color: isActive || isHovered ? '#4361EE' : '#1E293B' }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography className={classes.featureDesc}>{feature.description}</Typography>
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatPlootusDoes;
