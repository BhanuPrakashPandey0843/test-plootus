// =============================================================================
// EditSlider — Next.js port
// Exact parity with packages/web/src/components/HomePage/EditAssumptions/EditSlider.jsx
// =============================================================================
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GENERAL_GRAPH } from '../../../lib/plootusCommon';
import InputBox from './InputBox';
import Slider2 from './Slider2';
import styles from './EditSlider.module.css';
import useWindowDimensions from '../../../lib/useWindowDimensions';

const marksArray = [
  { value: 0, label: 'Super  Conservative' },
  { value: 1, label: 'Conservative' },
  { value: 2, label: 'Moderate' },
  { value: 3, label: 'Growth' },
  { value: 4, label: 'Super Growth' },
];

const myCardStyle = {
  maxHeight: '605px',
  boxShadow: '9px 7px 15px rgba(0,0,0,.05)',
  border: '2px solid #ededed',
  borderRadius: '10px',
  width: '100%',
};

const EditSlider = ({ setShowText, closeModal }) => {
  const dispatch = useDispatch();
  const graph = useSelector((state) => state.graphReducer);
  const { sliderOptions, strategyIndex } = graph;
  const [selected, setSelected] = useState(strategyIndex ?? 0);
  const { width } = useWindowDimensions();

  // Keep local selected in sync when Redux strategyIndex changes externally
  useEffect(() => {
    setSelected(strategyIndex ?? 0);
  }, [strategyIndex]);

  const handleBalanceChange = (val) => {
    dispatch({ type: GENERAL_GRAPH, payload: { openingBalance: val } });
  };

  return (
    <div className={styles.edit}>
      <div
        style={width >= 868 ? myCardStyle : null}
        className={width > 768 ? styles.editCard : null}
      >
        {/* ── Left column ── */}
        <div className={styles.innerSlider}>
          <div className={styles.header}>
            <h5>Edit Assumptions</h5>
            {/* Cross only shown in mobile modal */}
            {closeModal && (
              <img
                className={styles.crossBtn}
                src="/cross-thin.png"
                alt="close"
                onClick={closeModal}
              />
            )}
          </div>

          <div className={styles.inputDiv}>
            <InputBox
              value={graph?.openingBalance}
              handleChange={handleBalanceChange}
            />
          </div>

          <Slider2
            initialValue={sliderOptions ? sliderOptions.currentAge?.value : 25}
            label="Current Age (Years)"
            displayLabel="yes"
            slidername="currentAge"
            setShowText={setShowText}
            page="home"
            minValue={13}
            maxValue={100}
          />

          <Slider2
            initialValue={sliderOptions ? sliderOptions.retireAge?.value : 65}
            label="Retirement Age (Years)"
            displayLabel="yes"
            slidername="retireAge"
            minValue={sliderOptions ? sliderOptions.currentAge?.value + 1 : 26}
            maxValue={100}
            setShowText={setShowText}
            page="home"
          />

          <Slider2
            initialValue={sliderOptions ? sliderOptions.lifeExp?.value : 85}
            label="Life Expectancy (Years)"
            displayLabel="yes"
            slidername="lifeExp"
            minValue={sliderOptions ? sliderOptions.retireAge?.value + 1 : 66}
            maxValue={120}
            setShowText={setShowText}
            page="home"
          />
        </div>

        {/* ── Right column ── */}
        <div className={styles.innerSlider}>
          <Slider2
            initialValue={sliderOptions ? sliderOptions.contribution?.value : 5000}
            label="Annual Contribution ($)"
            maxValue={50000}
            displayLabel="no"
            slidername="contribution"
            unit="$"
            setShowText={setShowText}
            page="home"
            type="on"
          />

          <div className={styles.stratDiv}>
            <p
              style={{
                marginLeft: width > 768 ? '25px' : '0px',
                fontWeight: '400',
                fontSize: '15px',
                color: 'black',
              }}
            >
              Strategy
            </p>
            <div className={styles.btnDiv}>
              {marksArray.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    if (setShowText) setShowText(true);
                    setSelected(item.value);
                    dispatch({ type: GENERAL_GRAPH, payload: { strategyIndex: item.value } });
                  }}
                  className={selected === item.value ? styles.selectedBtn : styles.editButton}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <Slider2
            initialValue={sliderOptions ? sliderOptions.expenses?.value : 50000}
            label="Annual Expenses (After Retirement)"
            stepValue={1}
            minValue={0}
            maxValue={250000}
            displayLabel="no"
            slidername="expenses"
            unit="$"
            setShowText={setShowText}
            page="home"
            type="on"
          />
        </div>
      </div>
    </div>
  );
};

export default EditSlider;
