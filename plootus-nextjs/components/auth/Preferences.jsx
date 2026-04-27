import React, { useState } from 'react';
import styles from './Preferences.module.css';

const preferenceOptions = [
  { id: 'HYS', label: 'High-Yield Savings (incl. emergency fund)' },
  { id: 'HSA', label: 'Health Savings Account (HSA)' },
  { id: 'Rollover', label: '401(k)/IRA Rollover' },
  { id: 'AN', label: 'Annuities (Guaranteed retirement income)' },
  { id: 'DM', label: 'Debt Management & Consolidation (incl. student loans)' },
  { id: 'CRY', label: 'Crypto Investing (Bitcoin, etc.)' },
  { id: 'ADV', label: 'Personal Financial Advice (1-on-1 coaching & planning)' },
];

const Preferences = ({ setSignupData, prevStep, onComplete }) => {
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    if (!termsAccepted) return;
    setSignupData((prev) => ({
      ...prev,
      preferences: selectedPreferences,
      termsAccepted: true,
    }));
    onComplete();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <div className={styles.preferencesList}>
        {preferenceOptions.map((p) => (
          <label key={p.id} className={styles.preferenceItem}>
            <span className={styles.preferenceLabel}>{p.label}</span>
            <input
              type="checkbox"
              checked={selectedPreferences.includes(p.id)}
              onChange={() =>
                setSelectedPreferences((prev) =>
                  prev.includes(p.id) ? prev.filter((id) => id !== p.id) : [...prev, p.id]
                )
              }
            />
          </label>
        ))}
      </div>
      <label className={styles.termsRow}>
        <input type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />
        <span>By creating an account, you agree to the Terms of use and Privacy Policy.</span>
      </label>
      {submitted && !termsAccepted ? <p className={styles.errorText}>Please accept the terms and conditions</p> : null}
      <div className={styles.buttonGroup}>
        <button type="button" onClick={prevStep} className={styles.backButton}>Back</button>
        <button type="button" onClick={handleSubmit} className={styles.nextButton}>Create Account</button>
      </div>
    </div>
  );
};

export default Preferences;
