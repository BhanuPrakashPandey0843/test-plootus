import React from 'react';
import FAQ from '../components/faqs';
import Head from 'next/head';

const FAQsPage = () => {
  return (
    <>
      <Head>
        <title>Frequently Asked Questions - Plootus</title>
        <meta
          name="description"
          content="Find answers to common questions about Plootus, security, investments, retirement planning, and more."
        />
      </Head>
      <FAQ />
    </>
  );
};

export default FAQsPage;
