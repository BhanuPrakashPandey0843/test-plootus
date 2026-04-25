import React from 'react';
import Philosophy from '../components/about/Philosophy';
import Head from 'next/head';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us - Our Vision & Philosophy - Plootus</title>
        <meta
          name="description"
          content="Learn about Plootus's vision to democratize retirement planning and our technology-enabled approach to providing expert financial advice."
        />
      </Head>
      <Philosophy />
    </>
  );
};

export default AboutPage;
