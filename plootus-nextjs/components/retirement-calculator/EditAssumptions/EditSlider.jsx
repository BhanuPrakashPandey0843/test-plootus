import React, { useState } from 'react';
import { Card } from '@mui/material';
import { GENERAL_GRAPH } from '../../../lib/plootusCommon';
import { useSelector, useDispatch } from 'react-redux';
import styles from './EditSlider.module.css';
import InputBox from '../../utils/InputBox/InputBox';
import useWindowDimensions from '../../../lib/useWindowDimensions';
import CalculatorSlider from './CalculatorSlider';

// Calculate current age inline (avoids moment.js SSR issues)
const getCurrentAgeInline = () => {
  const now = new Date();
  return now.getFullYear() - 1991; // fallback birth year matching monorepo default
};

const EditSlider = ({ setShowText, closeModal }) => {
  const dispatch = useDispatch();
  const graph = useSelector((state) => state.graphReducer);
  const { sliderOptions, strategyIndex } = graph;

  const marksArray = [
    { value: 0, label: 'Super Conservative' },
    { value: 1, label: 'Conservative' },
    { value: 2, label: 'Moderate' },
    { value: 3, label: 'Growth' },
    { value: 4, label: 'Super Growth' },
  ];

  const [selected, setSelected] = useState(strategyIndex || 0);
  const { width } = useWindowDimensions();

  let age = getCurrentAgeInline();

  const handleChange = (val) => {
    dispatch({
      type: GENERAL_GRAPH,
      payload: { openingBalance: val },
    });
  };

  const myStyle = {
    boxShadow: '9px 7px 15px rgba(0,0,0,.05)',
    border: '2px solid #ededed',
    borderRadius: '10px',
    width: '100%',
  };

  return (
    <div className={styles.edit}>
      <div
        style={width >= 868 ? myStyle : null}
        className={width > 768 ? styles.editCard : null}
      >
        <div className={styles.innerSlider}>
          <div className={styles.header}>
            <h3>Edit Assumptions</h3>
            {closeModal && (
              <img
                className={styles.crossBtn}
                src="/cross-thin.png"
                onClick={closeModal}
                alt="close"
              />
            )}
          </div>
          <div className={styles.inputDiv}>
            <InputBox
              value={graph?.openingBalance}
              setShowText={setShowText}
              handleChange={handleChange}
            />
          </div>
          
          <CalculatorSlider
            initialValue={sliderOptions ? sliderOptions.currentAge?.value : 20}
            label="Current Age (Years)"
            displayLabel="yes"
            slidername="currentAge"
            setShowText={setShowText}
            page="home"
            minValue={13}
            maxValue={100}
          />

          <CalculatorSlider
            initialValue={sliderOptions ? sliderOptions.retireAge?.value : 65}
            label="Retirement Age (Years)"
            displayLabel="yes"
            slidername="retireAge"
            minValue={sliderOptions ? Number(sliderOptions.currentAge?.value) + 1 : age}
            maxValue={100}
            setShowText={setShowText}
            page="home"
          />
          <CalculatorSlider
            initialValue={sliderOptions ? sliderOptions.lifeExp?.value : 85}
            label="Life Expectancy (Years)"
            displayLabel="yes"
            slidername="lifeExp"
            minValue={sliderOptions ? Number(sliderOptions.retireAge?.value) + 1 : age}
            maxValue={120}
            setShowText={setShowText}
            page="home"
          />
        </div>
        <div className={styles.innerSlider}>
          <CalculatorSlider
            initialValue={sliderOptions ? sliderOptions.contribution?.value : 5}
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
                marginLeft: width > 768 ? '6px' : '0px',
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
                  onClick={() => {
                    setShowText(true);
                    dispatch({
                      type: GENERAL_GRAPH,
                      payload: { strategyIndex: item.value },
                    });
                  }}
                  key={item.value}
                  style={item.value === 4 ? { gridColumn: '1 / span 2', width: '60%', margin: '0 auto' } : {}}
                  className={
                    strategyIndex === item.value
                      ? styles.selectedBtn
                      : styles.editButton
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <CalculatorSlider
            initialValue={sliderOptions ? sliderOptions.expenses?.value : 50500}
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
