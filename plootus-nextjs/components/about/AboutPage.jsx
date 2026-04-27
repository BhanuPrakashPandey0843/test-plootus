import React, { useEffect } from 'react';
import { makeStyles } from 'tss-react/mui';
import AboutHero from './components/AboutHero';
import StatStrip from './components/StatStrip';
import MissionSection from './components/MissionSection';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import FeaturesSection from './components/FeaturesSection';
import OfferGrid from './components/OfferGrid';
import ValuesSection from './components/ValuesSection';
import PartnersSection from './components/PartnersSection';
import TestimonialsSection from './components/TestimonialsSection';
import PressSection from './components/PressSection';
import CTASection from './components/CTASection';

const useStyles = makeStyles()(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '#FFFFFF',
    '& .reveal': {
      opacity: 0,
      transform: 'translateY(22px)',
      transition: 'opacity 0.65s ease, transform 0.65s ease',
    },
    '& .reveal.in': {
      opacity: 1,
      transform: 'none',
    },
    '& .d1': { transitionDelay: '0.08s' },
    '& .d2': { transitionDelay: '0.16s' },
    '& .d3': { transitionDelay: '0.24s' },
    '& .d4': { transitionDelay: '0.32s' },
  },
}));

const AboutPage = () => {
  const { classes } = useStyles();

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => obs.observe(el));

    return () => {
      elements.forEach((el) => obs.unobserve(el));
    };
  }, []);

  return (
    <div className={classes.root}>
      <AboutHero />
      <StatStrip />
      <MissionSection />
      <ProblemSection />
      <HowItWorks />
      <FeaturesSection />
      <OfferGrid />
      <ValuesSection />
      <PartnersSection
        isAboutPage={true}
        titleFontSize="clamp(1.85rem, 3vw, 2.6rem)"
        titleFontWeight={800}
        titleColor="#1A2B4A"
        titleLineHeight={1.15}
        titleLetterSpacing="-0.4px"
        subtitleFontSize="0.95rem"
        subtitleColor="#444F5E"
        platformLinkColor="#3B5FDB"
      />
      <TestimonialsSection />
      <PressSection />
      <CTASection />
    </div>
  );
};

export default AboutPage;
