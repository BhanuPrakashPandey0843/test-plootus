import React from 'react';
import Head from 'next/head';
import { Container } from '@mui/material';
import HubNav from '../components/HubNav/HubNav';
import CalculatorStatic from '../components/calculators/CalculatorStatic/CalculatorStatic';
import PartnersSection from '../components/home/PartnersSection';
import BlogSection from '../components/home/BlogSection';

const RetirementCalculatorPage = () => {
  return (
    <>
      <Head>
        <title>Free Retirement Calculator — AI-Powered, Location-Aware | Plootus</title>
        <meta
          name="description"
          content="Use Plootus's free AI retirement calculator to find out how much you need to retire."
        />
        <link rel="canonical" href="https://www.plootus.com/retirement-calculator" />
      </Head>
      <HubNav />
      <Container maxWidth="lg">
        <CalculatorStatic />
      </Container>
      <PartnersSection />
      <BlogSection />
    </>
  );
};

export default RetirementCalculatorPage;
