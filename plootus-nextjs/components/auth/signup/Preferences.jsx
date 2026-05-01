import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { signUp, resendActivationEmail } from '../../../lib/authApi';
import styles from './Preferences.module.css';

const BLUE_PLOOT = '#4361EE';

const theme = createTheme({
  palette: {
    primary: { main: BLUE_PLOOT },
  },
});

const preferenceOptions = [
  {
    id: 'HYS',
    icon: '💰',
    label: 'High-Yield Savings (incl. emergency fund)',
  },
  {
    id: 'HSA',
    icon: '🏥',
    label: 'Health Savings Account (HSA)',
  },
  {
    id: 'Rollover',
    icon: '🔄',
    label: '401(k)/IRA Rollover',
  },
  {
    id: 'AN',
    icon: '📈',
    label: 'Annuities (Guaranteed retirement income)',
  },
  {
    id: 'DM',
    icon: '💳',
    label: 'Debt Management & Consolidation (incl. student loans)',
  },
  {
    id: 'CRY',
    icon: '₿',
    label: 'Crypto Investing (Bitcoin, etc.)',
  },
  {
    id: 'ADV',
    icon: '👥',
    label: 'Personal Financial Advice (1-on-1 coaching & planning)',
  },
];

const Preferences = ({
  signupData,
  prevStep,
  closeModal,
  loginopenModal,
}) => {
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handlePreferenceChange = (id) => {
    setSelectedPreferences((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setError('');

    if (!termsAccepted) {
      return;
    }

    try {
      setLoading(true);

      const preferences = {
        HYS: selectedPreferences.includes('HYS') ? 'Yes' : null,
        HSA: selectedPreferences.includes('HSA') ? 'Yes' : null,
        Rollover: selectedPreferences.includes('Rollover') ? 'Yes' : null,
        AN: selectedPreferences.includes('AN') ? 'Yes' : null,
        DM: selectedPreferences.includes('DM') ? 'Yes' : null,
        CRY: selectedPreferences.includes('CRY') ? 'Yes' : null,
        ADV: selectedPreferences.includes('ADV') ? 'Yes' : null,
      };

      const result = await signUp({
        ...signupData,
        ...preferences,
        termsAccepted: true,
        userType: 'primary'
      });

      if (result.error) {
        setError(result.error);
        setLoading(false);
      } else {
        setLoading(false);
        setSuccess(true);
      }
    } catch (err) {
      setLoading(false);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  if (success) {
    return (
      <div className={styles.container}>
        <div className={styles.successContent}>
          <div className={styles.successIcon}>✓</div>
          <h2 className={styles.title}>Verify your email</h2>
          <p className={styles.subtitle}>
            Link for account activation has been sent to <strong>{signupData.email}</strong>. 
            Please check your Promotions or Spam folder.
          </p>
          <div className={styles.buttonGroup}>
            <button 
              className={styles.backButton}
              onClick={() => resendActivationEmail(signupData.email)}
            >
              Resend Email
            </button>
            <button 
              className={styles.nextButton}
              onClick={() => {
                closeModal();
                if (loginopenModal) loginopenModal();
              }}
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <div className={styles.stepperContainer}>
        <div className={`${styles.step} ${styles.completedStep}`}>
          <div className={styles.stepDot} />
          <span className={styles.stepLabel}>Basic Info</span>
        </div>
        <div className={`${styles.step} ${styles.completedStep}`}>
          <div className={styles.stepDot} />
          <span className={styles.stepLabel}>Strategy</span>
        </div>
        <div className={`${styles.step} ${styles.activeStep}`}>
          <div className={styles.stepDot} />
          <span className={styles.stepLabel}>Preferences</span>
        </div>
      </div>
      <div className={styles.formContent}>
        <h2 className={styles.subtitle}>
          Which other financial products or services interest you? (Select all
          that apply)
        </h2>

        <div className={styles.preferencesList}>
          {preferenceOptions.map((preference) => (
            <label key={preference.id} className={styles.preferenceItem}>
              <div className={styles.preferenceContent}>
                <span className={styles.iconWrapper}>{preference.icon}</span>
                <span className={styles.preferenceLabel}>
                  {preference.label}
                </span>
              </div>

              <div className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  checked={selectedPreferences.includes(preference.id)}
                  onChange={() => handlePreferenceChange(preference.id)}
                  className={styles.checkbox}
                />
                <span className={styles.checkmark} />
              </div>
            </label>
          ))}
        </div>

        <div className={styles.termsContainer}>
          <label className={styles.termsWrapper}>
            <div className={styles.checkboxWrapper}>
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className={styles.checkbox}
              />
              <span className={styles.checkmark} />
            </div>
            <span className={styles.termsText}>
              By creating an account, you agree to the{' '}
              <a
                href="/terms-and-conditions"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of use
              </a>{' '}
              and{' '}
              <a
                href="/privacy-policy"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </span>
          </label>
          {submitted && !termsAccepted && (
            <p className={styles.errorText}>
              Please accept the terms and conditions
            </p>
          )}
          {error && <p className={styles.errorText}>{error}</p>}
        </div>

        <div className={styles.buttonGroup}>
          <button
            type="button"
            onClick={prevStep}
            className={styles.backButton}
            disabled={loading}
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className={styles.nextButton}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Create Account'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
