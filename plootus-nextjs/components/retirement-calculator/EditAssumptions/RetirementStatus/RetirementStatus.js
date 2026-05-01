import React, { useState } from 'react';
import styles from './RetirementStatus.module.css';
import {
  DRAK_GREEN_PLOOT,
  DARK_RED_PLOOT,
  BLUE_PLOOT,
  TEXT_BLACK_1,
  DISABLE_GREY,
  LIGHT_GREY,
  DANGER_RED,
  isNull,
} from '../../../../lib/plootusCommon';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import WarningMessage from './WarningMessage';

const theme = createTheme({
  palette: {
    primary: { main: BLUE_PLOOT },
  },
});

const willNotLast = 'WARNING : Retirement assets would not last until life expectancy';
const willLast = 'CONGRATULATIONS : Retirement assets will last beyond life expectancy';

function RetirementStatus({
  status,
  modalIsOpen,
  closeModal,
  aopenModal,
  setModalOpen,
  dashy,
}) {
  const user = useSelector((state) => state.userReducer);
  // const { values, loading } = useThumbsup(); // Port if needed, for now mock or omit
  const values = null; 
  const loading = false;

  const [Loading, setLoading] = useState(false);
  const [stateData, setstateData] = useState({
    index: null,
    submit: false,
  });

  return (
    <div className={styles.container}>
      {dashy ? (
        <div
          onClick={() => {
            if (!status) setModalOpen(true);
          }}
        >
          <img src="/exclaim.svg" alt="" className={styles.exclaim} />
        </div>
      ) : (
        <div
          className={styles.text}
          style={{
            color: status ? DRAK_GREEN_PLOOT : DARK_RED_PLOOT,
            textDecoration: 'underline',
            textDecorationColor: status ? DRAK_GREEN_PLOOT : DARK_RED_PLOOT,
            cursor: 'pointer',
          }}
          onClick={() => {
            if (!status) setModalOpen(true);
          }}
        >
          {status ? willLast : willNotLast}
        </div>
      )}
      {!user.token ? (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className={styles.aModal}
          overlayClassName={styles.Overlay}
          ariaHideApp={false}
        >
          <div className={styles.mCont}>
            <div className={styles.buttonCont}>
              <button
                onClick={() => closeModal()}
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
              <button className={styles.confirmBtn} onClick={aopenModal}>
                Get Started
              </button>
            </div>
          </div>
        </Modal>
      ) : !loading && values ? (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className={styles.loggedInModal}
          overlayClassName={styles.Overlay}
          ariaHideApp={false}
        >
          <div
            className={styles.grayDiv}
            style={{ backgroundColor: LIGHT_GREY }}
          >
            <div className={styles.cross}>
              <div
                onClick={() => setModalOpen(false)}
                className={styles.closeDiv}
              >
                <img src="/cross-thin.png" className={styles.crossImage} alt="close" />
              </div>
            </div>
            <div className={styles.warningText}>
              <div>
                <img
                  src="/exclaim.svg"
                  alt=""
                  style={{ height: '30px', width: '30px', cursor: 'pointer' }}
                />
              </div>
              <div className={styles.warning} style={{ color: DANGER_RED }}>
                WARNING
              </div>
              <div className={styles.warningCont} style={{ color: DANGER_RED }}>
                Retirement assets would not last until life expectancy !
              </div>
            </div>
          </div>

          <div
            className={styles.header2}
            style={{
              color: TEXT_BLACK_1,
            }}
          >
            Plootus Recommendation
          </div>

          <div className={styles.pointCont}>
            <WarningMessage
              type="contribution"
              stateData={stateData}
              setIndex={() => setstateData((prev) => ({ ...prev, index: 1 }))}
              index={1}
              values={values.contribution}
              setModalOpen={setModalOpen}
              setLoading={setLoading}
              setstateData={setstateData}
            />
            <WarningMessage
              type="retireAge"
              stateData={stateData}
              setIndex={() => setstateData((prev) => ({ ...prev, index: 2 }))}
              index={2}
              values={values.retireAge}
              setModalOpen={setModalOpen}
              setLoading={setLoading}
              setstateData={setstateData}
            />
            <WarningMessage
              type="strategy"
              stateData={stateData}
              setIndex={() => setstateData((prev) => ({ ...prev, index: 3 }))}
              index={3}
              values={values.strategy}
              setModalOpen={setModalOpen}
              setLoading={setLoading}
              setstateData={setstateData}
            />
          </div>
          <div className={styles.editInputs}>
            <div>
              {Loading ? (
                <ThemeProvider theme={theme}>
                  <CircularProgress size={20} />
                </ThemeProvider>
              ) : (
                <button
                  className={styles.confirmSelection}
                  style={{
                    backgroundColor: isNull(stateData.index)
                      ? DISABLE_GREY
                      : BLUE_PLOOT,
                  }}
                  disabled={isNull(stateData.index)}
                  onClick={() => {
                    setLoading(true);
                    setstateData((prev) => ({ ...prev, submit: true }));
                  }}
                >
                  Confirm Selection
                </button>
              )}
            </div>
            <div
              style={{
                paddingTop: '10px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {!isNull(stateData.index) ? (
                <>
                  <img src="/info.svg" className={styles.iImage} alt="info" />
                  <p className={styles.info}>
                    This will update the retirement plan and your profile{' '}
                  </p>
                </>
              ) : null}
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}

export default RetirementStatus;
