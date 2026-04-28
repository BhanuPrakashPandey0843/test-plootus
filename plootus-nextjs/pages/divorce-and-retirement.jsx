import React from 'react';
import Head from 'next/head';
import DivorceAndRetirement from '../components/familydebt/DivorceAndRetirement/DivorceAndRetirement';

const DivorceAndRetirementPage = () => {
  return (
    <>
      <Head>
        <title>Divorce & Retirement: QDRO, Splitting Your 401(k) & Social Security After Divorce (2026) | Plootus</title>
        <meta name="description" content="Everything you need to know about retirement assets in a divorce — how a QDRO works, splitting a 401(k) and IRA, Social Security spousal benefits after divorce, pension rights, and the biggest mistakes that cost people their retirement savings." />
        <meta name="keywords" content="QDRO, divorce 401k, splitting retirement accounts in divorce, Social Security after divorce, divorce pension rights, IRA divorce, retirement assets divorce" />
      </Head>
      <DivorceAndRetirement />
    </>
  );
};

export default DivorceAndRetirementPage;
