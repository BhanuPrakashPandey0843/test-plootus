// =============================================================================
// Slider2 — Next.js port
// Uses react-slider + styled-components for exact visual parity with source
// Source: packages/web/src/Utils/Slider2/Slider2.jsx
// =============================================================================
import { GENERAL_GRAPH, getFormattedValue } from '../../../lib/plootusCommon';
import React from 'react';
import { connect } from 'react-redux';
import ReactSlider from 'react-slider';
import styled from 'styled-components';
import styles from './Slider2.module.css';

// ── Styled components — exact copy from source ──────────────────────────────

const StyledSlider = styled(ReactSlider)`
  width: 95%;
  height: 25px;
  align-self: flex-start;
  justify-self: baseline;
  margin-top: 12px;
`;

const StyledThumb = styled.div`
  height: 26px;
  line-height: 22px;
  width: 26px;
  font-size: 11px;
  font-weight: 600;
  text-align: center;
  background-color: #416ce1;
  color: white;
  border: 2px solid whitesmoke;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.31);
  margin-top: -10px;
  border-radius: 50%;
  cursor: pointer;
`;

const StyledTrack = styled.div`
  height: 5px;
  border-radius: 4px;
  background: ${(props) =>
    props.index === 2 ? '#e5e5e5' : props.index === 1 ? '#e5e5e5' : '#416ce1'};
  border-radius: 999px;
`;

// ── Render helpers ────────────────────────────────────────────────────────────
const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

const getConfig = (title, min, max, type) => ({ title, min, max, type });

// ── Component ─────────────────────────────────────────────────────────────────
const Slider2 = (props) => {
  const {
    initialValue,
    minValue = 0,
    maxValue = 100,
    label,
    stepValue = 1,
    displayLabel,
    sliderOptions,
    dispatch,
    slidername,
    changeHandler = null,
    setShowText = null,
    page = null,
    type = 'after',
    WIDTH = '95%',
  } = props;

  // Thumb renders the current value inside the circle when displayLabel='yes'
  const Thumb = (thumbProps, state) => (
    <StyledThumb {...thumbProps}>
      {displayLabel === 'yes' ? state.valueNow : ''}
    </StyledThumb>
  );

  const handleSliderChange = (newValue) => {
    if (setShowText) setShowText(true);
    if (changeHandler) changeHandler(newValue);

    let updatedSliderOptions = { ...sliderOptions };

    switch (slidername) {
      case 'currentAge': {
        const updatedCurrentAge = { ...updatedSliderOptions[slidername] };
        updatedCurrentAge.value = newValue;
        updatedSliderOptions[slidername] = updatedCurrentAge;

        const updatedRetireAge = { ...updatedSliderOptions.retireAge };
        updatedRetireAge.config = getConfig('Retirement Age', newValue + 1, 100, 'num');
        if (updatedRetireAge.value < newValue) updatedRetireAge.value = newValue + 1;
        updatedSliderOptions.retireAge = updatedRetireAge;

        const updatedLifeAge = { ...updatedSliderOptions.lifeExp };
        updatedLifeAge.config = getConfig('Life Expectancy', newValue + 2, 120, 'num');
        if (updatedLifeAge.value < newValue + 1) updatedLifeAge.value = newValue + 2;
        updatedSliderOptions.lifeExp = updatedLifeAge;

        dispatch({ type: GENERAL_GRAPH, payload: { sliderOptions: updatedSliderOptions } });
        break;
      }
      case 'retireAge': {
        const updatedRetireAge = { ...updatedSliderOptions[slidername] };
        updatedRetireAge.value = newValue;
        updatedSliderOptions[slidername] = updatedRetireAge;

        const updatedLifeAge = { ...updatedSliderOptions.lifeExp };
        updatedLifeAge.config = getConfig('Life Expectancy', newValue + 1, 120, 'num');
        if (updatedLifeAge.value <= newValue) updatedLifeAge.value = newValue + 1;
        updatedSliderOptions.lifeExp = updatedLifeAge;

        dispatch({ type: GENERAL_GRAPH, payload: { sliderOptions: updatedSliderOptions } });
        break;
      }
      default: {
        const updatedKey = { ...updatedSliderOptions[slidername] };
        updatedKey.value = newValue;
        updatedSliderOptions[slidername] = updatedKey;
        dispatch({ type: GENERAL_GRAPH, payload: { sliderOptions: updatedSliderOptions } });
      }
    }
  };

  return (
    <div className={styles.root} style={{ width: WIDTH }}>
      <div className={styles.label}>
        {label}
        <span className={`${styles.labelSpacing} ${styles.tp}`}>
          {displayLabel === 'no' ? getFormattedValue(initialValue, 'money') : ''}
        </span>
      </div>
      <StyledSlider
        className={styles.main}
        thumbClassName="example-thumb"
        trackClassName="example-track"
        renderThumb={Thumb}
        renderTrack={Track}
        value={initialValue}
        onChange={type === 'on' ? handleSliderChange : null}
        onAfterChange={type === 'after' ? handleSliderChange : null}
        aria-labelledby="input-slider"
        valueLabelDisplay={displayLabel}
        step={stepValue}
        min={minValue}
        max={maxValue}
      />
    </div>
  );
};

export default connect(({ graphReducer }) => ({
  sliderOptions: graphReducer.sliderOptions,
  strategyIndex: graphReducer.strategyIndex,
}))(Slider2);
