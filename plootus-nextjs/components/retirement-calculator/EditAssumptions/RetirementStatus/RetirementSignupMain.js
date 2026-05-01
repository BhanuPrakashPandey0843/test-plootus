import React, { useState, useContext } from 'react';
import RetirementStatus from './RetirementStatus';
import { LoginSignupContext } from '../../../auth/LoginSignupContext';

const RetirementSignupMain = ({ status }) => {
  const [modalIsOpen, setModalOpen] = useState(false);
  const { setSignupModal } = useContext(LoginSignupContext);

  const aopenModal = () => {
    setModalOpen(false);
    setSignupModal(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <RetirementStatus
      status={status}
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      aopenModal={aopenModal}
      setModalOpen={setModalOpen}
    />
  );
};

export default RetirementSignupMain;
