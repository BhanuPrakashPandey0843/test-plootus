import React, { useState } from 'react';
import { 
  TextField, 
  Checkbox, 
  FormControlLabel, 
  Button, 
  Box, 
  CircularProgress,
  Typography
} from '@mui/material';
import styles from './InputCard.module.css';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for login would go here
    console.log('Login attempt:', { email, password, index });
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
                src="/images/fb.png" 
                alt="FB" 
                style={{ height: '50px', width: '50px', cursor: 'pointer' }} 
              />
            </div>
            <div className={styles.google}>
              <img 
                src="/images/google.jpg" 
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
