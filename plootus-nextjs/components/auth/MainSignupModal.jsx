import React, { useState, useContext } from 'react';
import { Dialog } from '@mui/material';
import styles from './MainScreen.module.css';
import SignupStart from './SignupStart';
import { LoginSignupContext } from './LoginSignupContext';

const MainSignupModal = ({
  modalIsOpen,
  openModal,
  closeModal,
  loginopenModal,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    mobileNo: '',
    gender: 0,
    zipcode: '',
    strategy: -1,
  });

  const { setLoginModal } = useContext(LoginSignupContext);

  const handleCloseModal = () => {
    setCurrentStep(0);
    closeModal();
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const renderStep = () => {
    const commonProps = {
      signupData,
      setSignupData,
      closeModal: handleCloseModal,
      loginopenModal,
    };

    switch (currentStep) {
      case 0:
        return <SignupStart {...commonProps} nextPress={nextStep} />;
      default:
        return (
          <div style={{ padding: '40px', textAlign: 'center' }}>
            <h2>Step {currentStep}</h2>
            <p>This part is still being migrated.</p>
            <button onClick={prevStep} className={styles.signupButton}>Back</button>
          </div>
        );
    }
  };

  return (
    <Dialog
      open={modalIsOpen}
      onClose={handleCloseModal}
      PaperProps={{
        className: currentStep === 0 ? styles.startModal : styles.modal,
      }}
      BackdropProps={{
        className: styles.overlay
      }}
      maxWidth={currentStep === 0 ? "xs" : "sm"}
      fullWidth={true}
    >
      {renderStep()}
    </Dialog>
  );
};

export default MainSignupModal;
