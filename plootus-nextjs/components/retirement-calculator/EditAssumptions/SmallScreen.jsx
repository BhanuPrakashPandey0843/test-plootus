import React, { useState } from 'react';
import styles from './SmallScreen.module.css';
import Graph from './Graphs/AssetsGraph';
import GapGraph from './Graphs/GapGraph';
import Modal from 'react-modal';
import EditSlider from './EditSlider';
import { useSelector } from 'react-redux';
import { Card } from '@mui/material';
import RetirementSignupMain from './RetirementStatus/RetirementSignupMain';
import RetirementStatus from './RetirementStatus/RetirementStatus';
import { DRAK_GREEN_PLOOT, DARK_RED_PLOOT } from '../../../lib/plootusCommon';

const SmallScreen = ({ myStyle, myStyle2 }) => {
  const [screen, setScreen] = useState(0);
  const [showText, setShowText] = useState(false);
  const [modalIsOpen, setOpen] = useState(false);

  const graph = useSelector((state) => state.graphReducer);
  const user = useSelector((state) => state.userReducer.token);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const [amodalIsOpen, setAModal] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.topPart}>
        {user ? (
          <div className={styles.head}>
            401k Calculator
            {graph.graph.results.retirementGap < 0 ? (
              <RetirementStatus
                dashy={true}
                status={false}
                modalIsOpen={amodalIsOpen}
                closeModal={() => setAModal(false)}
                aopenModal={() => setAModal(true)}
                setModalOpen={setAModal}
              />
            ) : (
              <div>
                <img src="/check.svg" alt="" className={styles.exclaim} />
              </div>
            )}
          </div>
        ) : null}
        <div className={styles.header}>
          Let's calculate how much money you will be able to save for retirement
          and your retirement gap
        </div>
        <div className={styles.text}>
          {(showText || user) && (
            <RetirementSignupMain
              status={graph.graph.results.retirementGap > 0}
            />
          )}
        </div>
        <div className={styles.btnDiv}>
          <div className={styles.leftDiv}>
            <button
              onClick={() => setScreen(0)}
              className={screen ? styles.button : styles.buttonSelected}
              style={
                screen
                  ? {
                      color: DRAK_GREEN_PLOOT,
                      border: '1px solid',
                      borderColor: DRAK_GREEN_PLOOT,
                    }
                  : {
                      color: '#fff',
                      backgroundColor: DRAK_GREEN_PLOOT,
                      border: '0px',
                    }
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
                  ? {
                      color: '#fff',
                      backgroundColor: DARK_RED_PLOOT,
                      border: '0px',
                    }
                  : {
                      color: DARK_RED_PLOOT,
                      border: '1px solid',
                      borderColor: DARK_RED_PLOOT,
                    }
              }
            >
              Retirement Gap
            </button>
          </div>
        </div>
      </div>
      <div className={styles.graph}>
        {screen ? (
          <Card
            style={{
              boxShadow: '9px 7px 15px rgba(0,0,0,.05)',
              border: '2px solid #ededed',
              borderRadius: '10px',
            }}
          >
            <GapGraph
              myStyle={myStyle2 ? myStyle2 : myStyle}
              myGraph={{ padding: '0px 0px' }}
            />
          </Card>
        ) : (
          <Card
            style={{
              boxShadow: '9px 7px 15px rgba(0,0,0,.05)',
              border: '2px solid #ededed',
              borderRadius: '10px',
            }}
          >
            <Graph myStyle={myStyle} myGraph={{ padding: '0px 0px' }} />
          </Card>
        )}
      </div>

      <div className={styles.btnDown}>
        <button onClick={openModal} className={styles.editButton}>
          Edit Assumptions
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className={styles.Modal}
          overlayClassName={styles.Overlay}
          ariaHideApp={false}
        >
          <EditSlider
            myStyle={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              padding: '10px',
              justifyContent: 'center',
            }}
            setShowText={setShowText}
            closeModal={closeModal}
          />
        </Modal>
      </div>
    </div>
  );
};

export default SmallScreen;
