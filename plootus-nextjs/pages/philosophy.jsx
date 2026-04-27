import React from 'react';
import Head from 'next/head';
import PhilosophyPage from '../components/philosophy/PhilosophyPage';
import HubNav from '../components/HubNav/HubNav';

const Philosophy = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Our Philosophy - Plootus</title>
        <meta
          name="description"
          content="Learn about Plootus' approach to retirement planning and financial wellness. Our philosophy centers on transparency, education, and empowering individuals."
        />
        <meta
          name="keywords"
          content="Plootus philosophy, retirement planning approach, financial wellness, transparent investing, financial education"
        />
        <link rel="canonical" href="https://www.plootus.com/philosophy" />
      </Head>
      <HubNav />
      <PhilosophyPage />
    </>
  );
};

export default Philosophy;
