// =============================================================================
// RetirementSignupMain — Next.js port
// Exact visual parity with:
//   packages/web/src/components/HomePage/EditAssumptions/RetirementStatus/RetirementStatus.js
// (unauthenticated path only — no thumbsup / logged-in branch needed)
// =============================================================================
import React, { useState } from 'react';
import Modal from 'react-modal';
import { DRAK_GREEN_PLOOT, DARK_RED_PLOOT } from '../../../lib/plootusCommon';
import styles from './RetirementSignupMain.module.css';

if (typeof window !== 'undefined') {
  Modal.setAppElement('body');
}

const willNotLast =
  'WARNING : Retirement assets would not last until life expectancy';
const willLast =
  'CONGRATULATIONS : Retirement assets will last beyond life expectancy';

const RetirementSignupMain = ({ status }) => {
  const [modalIsOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      {/* ── Status text (underlined, clickable when gap) ── */}
      <div
        className={styles.text}
        style={{
          color: status ? DRAK_GREEN_PLOOT : DARK_RED_PLOOT,
          textDecoration: 'underline',
          textDecorationColor: status ? DRAK_GREEN_PLOOT : DARK_RED_PLOOT,
          cursor: status ? 'default' : 'pointer',
        }}
        onClick={() => { if (!status) setModalOpen(true); }}
      >
        {status ? willLast : willNotLast}
      </div>

      {/* ── Modal: unauthenticated CTA ── */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalOpen(false)}
        className={styles.aModal}
        overlayClassName={styles.Overlay}
      >
        <div className={styles.mCont}>
          <div className={styles.buttonCont}>
            <button
              onClick={() => setModalOpen(false)}
              className={styles.closeButton}
            >
              <img src="/cross-thin.png" className={styles.crossImage} alt="close" />
            </button>
          </div>

          <div className={styles.header}>
            Do not worry! Plootus will help you bridge the retirement gap.
          </div>
          <div className={styles.content}>
            Sign up now to see various ways that can help you to bridge the
            retirement gap!
          </div>
          <div className={styles.btnsDiv}>
            <a
              href="https://plootus.com/auth/signup"
              className={styles.confirmBtn}
            >
              Get Started
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RetirementSignupMain;
