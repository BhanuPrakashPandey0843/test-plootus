import React from 'react';
import Head from 'next/head';
import AboutPage from '../components/about/AboutPage';
import HubNav from '../components/HubNav/HubNav';

const About = () => {
  return (
    <>
      <Head>
        <title>About Plootus - Our Mission to Simplify Retirement Planning</title>
        <meta
          name="description"
          content="Learn about Plootus, our mission to make retirement planning accessible, and our team of financial experts dedicated to your financial success."
        />
        <meta
          name="keywords"
          content="about Plootus, company mission, retirement planning company, financial planning team, our story"
        />
        <link rel="canonical" href="https://www.plootus.com/about" />
      </Head>
      <HubNav />
      <AboutPage />
    </>
  );
};

export default About;
