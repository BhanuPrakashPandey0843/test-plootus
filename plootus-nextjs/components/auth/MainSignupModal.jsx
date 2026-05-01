import React, { useState, useContext } from 'react';
import { Dialog } from '@mui/material';
import styles from './MainScreen.module.css';
import SignupStart from './SignupStart';
import { LoginSignupContext } from './LoginSignupContext';
import PersonalInfo from './signup/PersonalInfo';
import Strategy from './signup/Strategy';
import Preferences from './signup/Preferences';

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
    approx_401k_bal: 10000,
    sponser_name: '',
    employerEin: null,
    termsAccepted: false,
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
      case 1:
        return <PersonalInfo {...commonProps} nextPress={nextStep} prevStep={prevStep} />;
      case 2:
        return <Strategy {...commonProps} nextPress={nextStep} prevStep={prevStep} />;
      case 3:
        return <Preferences {...commonProps} prevStep={prevStep} />;
      default:
        return null;
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
