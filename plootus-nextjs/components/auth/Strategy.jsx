import React, { useState } from 'react';
import SearchBox401kNew from '../utils/SearchBox401kNew';
import styles from './Strategy.module.css';

const Strategy = ({ setSignupData, signupData, nextPress, prevStep }) => {
  const [strategy, setStrategy] = useState(signupData.strategy ?? -1);
  const [balance, setBalance] = useState(signupData.approx_401k_bal ?? 0);
  const [searchState, setSearchState] = useState({ value: signupData.sponser_name || '', showList: false, ein: null });
  const [error, setError] = useState('');

  const handleNext = () => {
    if (strategy < 0 || Number(balance) <= 0) {
      setError('Select strategy and enter valid balance');
      return;
    }
    setSignupData((prev) => ({
      ...prev,
      strategy,
      approx_401k_bal: Number(balance),
      sponser_name: searchState.value || prev.sponser_name,
      employerEin: searchState.ein || prev.employerEin,
    }));
    nextPress();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create Account</h1>
      <div className={styles.formGrid}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Investment Strategy*</label>
          <select className={styles.selectBox} value={strategy} onChange={(e) => setStrategy(parseInt(e.target.value, 10))}>
            <option value={-1}>Select Strategy</option>
            <option value={0}>Conservative</option>
            <option value={1}>Moderate</option>
            <option value={2}>Growth</option>
            <option value={3}>Super Growth</option>
            <option value={4}>Super Conservative</option>
          </select>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Employer*</label>
          <SearchBox401kNew
            value={searchState.value}
            showList={searchState.showList}
            valIsEmpty={!searchState.value}
            data={[]}
            loading={false}
            setShowList={(show) => setSearchState((prev) => ({ ...prev, showList: show }))}
            setLocalData={(next) => setSearchState((prev) => ({ ...prev, ...(typeof next === 'function' ? next(prev) : next) }))}
            setSignupData={setSignupData}
            dontNull
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Approximate 401k/403b Balance*</label>
          <input className={styles.input} value={balance} onChange={(e) => setBalance(e.target.value.replace(/[^0-9]/g, ''))} />
        </div>
        {error ? <span className={styles.errorText}>{error}</span> : null}
      </div>
      <div className={styles.buttonGroup}>
        <button type="button" onClick={prevStep} className={styles.backButton}>Back</button>
        <button type="button" onClick={handleNext} className={styles.nextButton}>Next</button>
      </div>
    </div>
  );
};

export default Strategy;
