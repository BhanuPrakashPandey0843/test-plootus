import React, { useState } from 'react';
import { CircularProgress } from '@mui/material';
import styles from './Start.module.css';

const SignupStart = ({ closeModal, nextPress, setSignupData, loginopenModal }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailSignup = async () => {
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setLoading(true);
    setSignupData((prev) => ({ ...prev, email, socialLogin: null, socialId: null }));
    setLoading(false);
    nextPress();
  };

  const handleLogin = () => {
    closeModal();
    loginopenModal();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Get Started!</h1>
        <button onClick={closeModal} className={styles.closeButton}>
          <img src="/cross-thin.png" alt="close" className={styles.closeIcon} />
        </button>
      </div>

      <div className={styles.benefitsList}>
        <div className={styles.benefitItem}>
          <span className={styles.benefitIcon}>✓</span>
          <span>Find the best funds in your 401(k)</span>
        </div>
        <div className={styles.benefitItem}>
          <span className={styles.benefitIcon}>✓</span>
          <span>Minimize hidden fees and maximize returns</span>
        </div>
        <div className={styles.benefitItem}>
          <span className={styles.benefitIcon}>✓</span>
          <span>Free, AI-powered, and no SSN required</span>
        </div>
      </div>
      
      <div className={styles.formContainer}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Email ID<span className={styles.required}>*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError('');
            }}
            className={`${styles.input} ${emailError ? styles.inputError : ''}`}
            placeholder="Enter your email"
          />
          {emailError && <span className={styles.errorMessage}>{emailError}</span>}
        </div>

        <button
          onClick={handleEmailSignup}
          className={styles.emailButton}
          disabled={loading || !email}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign up with Email'}
        </button>

        <div className={styles.divider}>
          <span className={styles.dividerText}>OR</span>
        </div>

        <div className={styles.socialButtons}>
          <button className={styles.socialButton} disabled={loading}>
            <img src="/google-logo.svg" alt="" className={styles.socialIcon} />
            <span>Continue with Google</span>
          </button>
          <button className={styles.socialButton} disabled={loading}>
            <img src="/facebook-logo.svg" alt="" className={styles.socialIcon} />
            <span>Continue with Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupStart;
