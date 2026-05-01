import React, { useState } from 'react';
import { CircularProgress } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { getUserType, googleLogin } from '../../lib/authApi';
import styles from './Start.module.css';

const decodeJwt = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
};

const SignupStart = ({ closeModal, nextPress, setSignupData, loginopenModal }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const REACT_APP_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.plootus.com';

  const handleEmailSignup = () => {
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setSignupData((prev) => ({ ...prev, email }));
      setLoading(false);
      nextPress();
    }, 1000);
  };

  const handleLogin = () => {
    closeModal();
    loginopenModal();
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      setLoading(true);
      setEmailError('');
      
      const decoded = decodeJwt(credentialResponse.credential);
      if (!decoded || !decoded.email) {
        setEmailError('Invalid Google token received.');
        setLoading(false);
        return;
      }

      const { email: googleEmail, given_name, family_name, sub } = decoded;

      // Check if user exists
      const userTypeRes = await getUserType(googleEmail);
      
      if (userTypeRes.data && userTypeRes.data.types && userTypeRes.data.types.length > 0) {
        // User exists, try to log in instead
        const loginResult = await googleLogin(credentialResponse.credential);
        
        if (!loginResult.error && loginResult.data?.token) {
          localStorage.setItem('jwt_token', loginResult.data.token);
          closeModal();
          window.location.href = `${REACT_APP_URL}/auth/dashboard`;
        } else {
          setEmailError('Google login failed for existing user.');
        }
      } else {
        // User does not exist, proceed to signup steps
        setSignupData((prev) => ({
          ...prev,
          email: googleEmail,
          firstName: given_name || '',
          lastName: family_name || '',
          socialLogin: 'google',
          socialId: sub
        }));
        nextPress();
      }
    } catch (error) {
      console.error('Google signup error:', error);
      setEmailError('Google signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Ready to start planning?</h1>
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
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => {
              setEmailError('Google login failed. Please try again.');
            }}
            useOneTap
          />
        </div>
      </div>
    </div>
  );
};

export default SignupStart;
