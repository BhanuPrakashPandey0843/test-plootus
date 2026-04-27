import React, { useState } from 'react';
import { TextField, Checkbox, FormControlLabel, CircularProgress } from '@mui/material';
import styles from './InputCard.module.css';

const InputCard = ({
  closeModal,
  signupopenModal,
  loading,
  setLoading,
  index,
  loginStyle,
}) => {
  const [email, setEmail] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('email') || '' : ''
  );
  const [password, setPassword] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('password') || '' : ''
  );
  const [remember, setRemember] = useState(
    typeof window !== 'undefined'
      ? localStorage.getItem('rememberStorage') === 'true'
      : false
  );
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');

    const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    if (!validEmail) {
      setEmailError('Enter valid email address');
      return;
    }
    if (!password.length) {
      setPasswordError('Password is empty');
      return;
    }

    if (remember) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('rememberStorage', 'true');
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
      localStorage.removeItem('rememberStorage');
    }

    // Auth API wiring is handled separately in the platform layer.
    closeModal?.();
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
            error={!!emailError}
            helperText={emailError}
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
            error={!!passwordError}
            helperText={passwordError}
            sx={{ width: '90%', '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
          />
        </div>
        
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
            <div className={styles.fb}>
              <img 
                src="/facebook-logo.svg" 
                alt="FB" 
                style={{ height: '50px', width: '50px', cursor: 'pointer' }} 
              />
            </div>
            <div className={styles.google}>
              <img 
                src="/google-logo.svg" 
                alt="Google" 
                style={{ height: '50px', width: '50px', cursor: 'pointer' }} 
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InputCard;
