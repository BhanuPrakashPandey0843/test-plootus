import React from 'react';
import styles from './CalculatorStatic.module.css';
import EditHome from '../EditAssumptions/EditAssumptions';
import Head from 'next/head';

const CalculatorStatic = ({ hideHelmet = false, hideHeader = false, customStyle = {} }) => {
  return (
    <div className={styles.main} style={customStyle}>
      {!hideHelmet && (
        <Head>
          <title>FREE and the most accurate Retirement Calculator. Plootus</title>
          <meta
            name="description"
            content="Patent-pending retirement calculator. Consider your current pending and determine your retirement expenses based on your location. Check out Plootus"
          />
          <meta
            name="keywords"
            content="best retirement calculator, best retirement website, top retirement calculator. Top retirement website, worry free retirement; your Robo advisor for 401k, 4O1k, 401 (K), 403b, 4O3b, 457 plans, cryptocurrency, which crypto to buy, which stock to buy, top performing cryptocurrency, Crypto market trends, Crypto sentiment score, crypto sentiment analysis, stock sentiment analysis, S&P 500 best performing stocks"
          />
        </Head>
      )}
      {!hideHeader && <div className={styles.mytestHeader}>401k Calculator</div>}
      <div className={styles.editA}>
        <EditHome />
      </div>
    </div>
  );
};

export default CalculatorStatic;
