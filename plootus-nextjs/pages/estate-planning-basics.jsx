import React from 'react';
import Head from 'next/head';
import EstatePlanningBasics from '../components/familydebt/EstatePlanningBasics/EstatePlanningBasics';

const EstatePlanningBasicsPage = () => {
  return (
    <>
      <Head>
        <title>Estate Planning Basics 2026: Wills, Trusts, Beneficiaries & Powers of Attorney | Plootus</title>
        <meta name="description" content="A complete starter guide to estate planning. Wills vs. trusts explained, how beneficiary designations override your will, the 4 documents every adult needs, probate costs by state, and a checklist to get started." />
        <meta name="keywords" content="estate planning basics, will vs trust, beneficiary designations, power of attorney, living trust, probate, HIPAA authorization, advance directive, estate planning checklist" />
      </Head>
      <EstatePlanningBasics />
    </>
  );
};

export default EstatePlanningBasicsPage;
