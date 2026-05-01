// =============================================================================
// SmallScreen — Next.js port
// Exact parity with packages/web/src/components/HomePage/EditAssumptions/SmallScreen.jsx
// react-modal is already in package.json.
// =============================================================================
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { Card } from '@mui/material';
import { DRAK_GREEN_PLOOT, DARK_RED_PLOOT } from '../../../lib/plootusCommon';
import AssetsGraph from './AssetsGraph';
import GapGraph from './GapGraph';
import EditSlider from './EditSlider';
import styles from './SmallScreen.module.css';

// Set modal app element safely (SSR guard)
if (typeof window !== 'undefined') {
  Modal.setAppElement('body');
}

const SmallScreen = ({ myStyle, myStyle2 }) => {
  const [screen, setScreen] = useState(0);
  const [showText, setShowText] = useState(false);
  const [modalIsOpen, setOpen] = useState(false);

  const graph = useSelector((state) => state.graphReducer);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <div className={styles.container}>
      <div className={styles.topPart}>
        <div className={styles.header}>
          Let's calculate how much money you will be able to save for retirement
          and your retirement gap
        </div>

        {/* Toggle buttons */}
        <div className={styles.btnDiv}>
          <div className={styles.leftDiv}>
            <button
              onClick={() => setScreen(0)}
              className={screen ? styles.button : styles.buttonSelected}
              style={
                screen
                  ? { color: DRAK_GREEN_PLOOT, border: '1px solid', borderColor: DRAK_GREEN_PLOOT }
                  : { color: '#fff', backgroundColor: DRAK_GREEN_PLOOT, border: '0px' }
              }
            >
              Retirement Assets
            </button>
          </div>
          <div className={styles.rightDiv}>
            <button
              onClick={() => setScreen(1)}
              className={screen ? styles.buttonSelected : styles.button}
              style={
                screen
                  ? { color: '#fff', backgroundColor: DARK_RED_PLOOT, border: '0px' }
                  : { color: DARK_RED_PLOOT, border: '1px solid', borderColor: DARK_RED_PLOOT }
              }
            >
              Retirement Gap
            </button>
          </div>
        </div>
      </div>

      {/* Graph area */}
      <div className={styles.graph}>
        {screen ? (
          <Card style={{ boxShadow: '9px 7px 15px rgba(0,0,0,.05)', border: '2px solid #ededed', borderRadius: '10px' }}>
            <GapGraph
              myStyle={myStyle2 ? myStyle2 : myStyle}
              myGraph={{ padding: '0px 0px' }}
            />
          </Card>
        ) : (
          <Card style={{ boxShadow: '9px 7px 15px rgba(0,0,0,.05)', border: '2px solid #ededed', borderRadius: '10px' }}>
            <AssetsGraph myStyle={myStyle} myGraph={{ padding: '0px 0px' }} />
          </Card>
        )}
      </div>

      {/* Edit button + modal */}
      <div className={styles.btnDown}>
        <button onClick={openModal} className={styles.editButton}>
          Edit Assumptions
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className={styles.Modal}
          overlayClassName={styles.Overlay}
        >
          <EditSlider setShowText={setShowText} closeModal={closeModal} />
        </Modal>
      </div>
    </div>
  );
};

export default SmallScreen;
