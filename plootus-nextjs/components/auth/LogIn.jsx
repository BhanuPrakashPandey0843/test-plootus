import React, { useState, useContext, useEffect } from 'react';
import { Dialog, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from './LogIn.module.css';
import { LoginSignupContext } from './LoginSignupContext';
import InputCard from './InputCard';

const LogIn = ({
  modalIsOpen,
  openModal,
  closeModal,
  signupopenModal,
  fromFees,
}) => {
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { loginModal, idx, setIdx, setLoginModal } = useContext(LoginSignupContext);
 
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsAuthenticated(!!localStorage.getItem('jwt_token'));
    }
  }, [modalIsOpen]);

  useEffect(() => {
    if (modalIsOpen && (idx === 0 || idx == null)) {
      setIdx(1);
    }
  }, [modalIsOpen, idx, setIdx]);

  const handleClick = (index) => {
    setIdx(index);
    setLoginModal(true);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && !event.target.closest(`.${styles.loginContainer}`)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [dropdownOpen]);

  return (
    <div className={styles.loginContainer}>
      {!isAuthenticated && (
        <>
          {fromFees ? (
            <div className={styles.fromFeesBtn} onClick={() => openModal()}>
              LogIn
            </div>
          ) : (
            <>
              <button
                className={styles.loginButton}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Login
                <KeyboardArrowDownIcon
                  className={`${styles.dropdownIcon} ${
                    dropdownOpen ? styles.dropdownIconOpen : ''
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div className={styles.loginDropdown}>
                  <button
                    className={styles.loginDropdownItem}
                    onClick={() => handleClick(1)}
                  >
                    Login as User
                  </button>
                  <button
                    className={styles.loginDropdownItem}
                    onClick={() => handleClick(2)}
                  >
                    Login as Advisor
                  </button>
                </div>
              )}
            </>
          )}
        </>
      )}

      <Dialog
        open={modalIsOpen}
        onClose={closeModal}
        PaperProps={{
          className: styles.Modal,
        }}
        BackdropProps={{
          className: styles.Overlay
        }}
        maxWidth="sm"
        fullWidth={true}
      >
        <div className={styles.closeContainer}>
          <button
            onClick={closeModal}
            className={styles.closeButton}
            disabled={loading}
          >
            <img
              className={styles.crossButton}
              src="/cross-thin.png"
              alt="Close"
            />
          </button>
        </div>
        <div className={styles.headingContainer}>
          <div className={styles.heading}>
            <h3 style={{ margin: 0, fontSize: '24px', fontWeight: 600 }}>Welcome Back!</h3>
          </div>
          <div className={styles.belowHeader}>Please login to your account</div>
        </div>
        <InputCard
          closeModal={closeModal}
          signupopenModal={signupopenModal}
          setLoading={setLoading}
          loading={loading}
          index={idx}
          loginStyle={{ paddingBottom: '30px' }}
        />
      </Dialog>
    </div>
  );
};

export default LogIn;
