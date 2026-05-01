import React, { useState, useEffect } from 'react';
import { 
  TextField, 
  Checkbox, 
  FormControlLabel, 
  CircularProgress,
  Typography,
  Box
} from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import styles from './InputCard.module.css';
import { signIn, googleLogin, resendActivationEmail } from '../../lib/authApi';

const InputCard = ({
  closeModal,
  signupopenModal,
  loading,
  setLoading,
  index,
  loginStyle,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');

  const REACT_APP_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.plootus.com';

  const handleRedirect = (userType) => {
    const path = userType === 'advisor' ? '/auth/adash' : '/auth/dashboard';
    window.location.href = `${REACT_APP_URL}${path}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const userType = index === 2 ? 'advisor' : 'primary';
    const result = await signIn(email, password, userType);

    if (result.error) {
      if (result.status === 403) {
        setError('Please verify your email. Check your inbox for the activation link.');
      } else {
        setError(result.error || 'Incorrect email or password');
      }
      setLoading(false);
    } else {
      const token = result.data?.token;
      if (token) {
        localStorage.setItem('jwt_token', token);
        if (remember) {
          localStorage.setItem('email', email);
        } else {
          localStorage.removeItem('email');
        }
        handleRedirect(userType);
      } else {
        setError('Authentication failed. No token received.');
        setLoading(false);
      }
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    setLoading(true);
    const result = await googleLogin(credentialResponse.credential);

    if (result.error) {
      setError(result.error);
      setLoading(false);
    } else {
      const token = result.data?.token;
      if (token) {
        localStorage.setItem('jwt_token', token);
        handleRedirect('primary');
      } else {
        setError('Google authentication failed.');
        setLoading(false);
      }
    }
  };

  const handleGoogleError = () => {
    setError('Google login failed. Please try again.');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.emailContainer}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ width: '90%', '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
          />
        </div>
        <div className={styles.emailContainer} style={{ paddingTop: 0 }}>
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ width: '90%', '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
          />
        </div>
        
        {error && (
          <Typography color="error" variant="caption" sx={{ ml: 4, mb: 1, display: 'block' }}>
            {error}
          </Typography>
        )}

        <div className={styles.forgotContainer}>
          <div className={styles.forgotWrapper}>
            <div className={styles.forgot}>
              <a href="#" className={styles.forgotPassword} onClick={(e) => e.preventDefault()}>
                Forgot Password?
              </a>
            </div>
            <div className={styles.remember}>
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={remember} 
                    onChange={(e) => setRemember(e.target.checked)}
                    color="primary" 
                  />
                }
                label="Remember Me"
              />
            </div>
          </div>
        </div>

        <div className={styles.login} style={loginStyle}>
          {loading ? (
            <div className={styles.loader}>
              <CircularProgress size={40} />
            </div>
          ) : (
            <button type="submit" className={styles.loginButton}>
              Login
            </button>
          )}
        </div>
      </form>

      {index !== 2 && (
        <>
          <div className={styles.newUser}>
            New User ?{' '}
            <span 
              className={styles.signupLink}
              onClick={() => {
                closeModal();
                signupopenModal();
              }}
              style={{ marginLeft: '5px' }}
            >
              Create an account
            </span>
          </div>
          <div className={styles.connectWith}>
            <p className={styles.connectText}>
              <span style={{ backgroundColor: 'white', padding: '0 10px' }}>
                or connect with
              </span>
            </p>
          </div>
          <div className={styles.oAuth}>
            <div className={styles.google}>
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                useOneTap
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InputCard;


