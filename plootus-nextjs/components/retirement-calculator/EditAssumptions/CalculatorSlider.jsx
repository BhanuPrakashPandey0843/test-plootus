import { GENERAL_GRAPH, getFormattedValue } from '../../../lib/plootusCommon';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Slider, Box, Typography } from '@mui/material';
import styles from './EditSlider.module.css';

const getConfig = (title, min, max, type) => ({
  title,
  min,
  max,
  type,
});

const CalculatorSlider = (props) => {
  const {
    initialValue,
    minValue,
    maxValue,
    label,
    stepValue = 1,
    displayLabel,
    slidername,
    changeHandler = null,
    setShowText = null,
    page = null,
    type = 'after',
    WIDTH = '95%',
    isCurrency = false,
  } = props;

  const dispatch = useDispatch();
  const sliderOptions = useSelector((state) => state.graphReducer.sliderOptions);

  const handleSliderChange = (event, newValue) => {
    if (setShowText) setShowText(true);

    if (changeHandler) {
      changeHandler(newValue);
    }

    let updatedSliderOptions = { ...sliderOptions };
    
    switch (slidername) {
      case 'currentAge': {
        const updatedCurrentAge = { ...updatedSliderOptions[slidername] };
        updatedCurrentAge.value = newValue;
        updatedSliderOptions[slidername] = updatedCurrentAge;

        const updatedRetireAge = { ...updatedSliderOptions.retireAge };
        updatedRetireAge.config = getConfig('Retirement Age', newValue + 1, 100, 'num');
        if (updatedRetireAge.value < newValue) {
          updatedRetireAge.value = newValue + 1;
        }
        updatedSliderOptions.retireAge = updatedRetireAge;

        const updatedLifeAge = { ...updatedSliderOptions.lifeExp };
        updatedLifeAge.config = getConfig('Life Expectancy', newValue + 2, 120, 'num');
        if (updatedLifeAge.value < newValue + 1) {
          updatedLifeAge.value = newValue + 2;
        }
        updatedSliderOptions.lifeExp = updatedLifeAge;

        dispatch({
          type: GENERAL_GRAPH,
          payload: { sliderOptions: updatedSliderOptions },
        });
        break;
      }

      case 'retireAge': {
        const updatedRetireAge = { ...updatedSliderOptions[slidername] };
        updatedRetireAge.value = newValue;
        updatedSliderOptions[slidername] = updatedRetireAge;

        const updatedLifeAge = { ...updatedSliderOptions.lifeExp };
        updatedLifeAge.config = getConfig('Life Expectancy', newValue + 1, 120, 'num');
        if (updatedLifeAge.value <= newValue) {
          updatedLifeAge.value = newValue + 1;
        }
        updatedSliderOptions.lifeExp = updatedLifeAge;

        dispatch({
          type: GENERAL_GRAPH,
          payload: { sliderOptions: updatedSliderOptions },
        });
        break;
      }

      default: {
        const updatedSliderKey = { ...updatedSliderOptions[slidername] };
        updatedSliderKey.value = newValue;
        updatedSliderOptions[slidername] = updatedSliderKey;

        dispatch({
          type: GENERAL_GRAPH,
          payload: { sliderOptions: updatedSliderOptions },
        });
      }
    }
  };

  return (
    <Box sx={{ width: WIDTH, pl: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
        <Typography variant="body2" sx={{ color: '#000', fontSize: '15px' }}>
          {label}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: '600', color: '#416ce1' }}>
          {displayLabel === 'no' || isCurrency 
            ? getFormattedValue(initialValue, 'money') 
            : initialValue}
        </Typography>
      </Box>
      <Slider
        value={Number(initialValue)}
        min={minValue}
        max={maxValue}
        step={stepValue}
        onChange={type === 'on' ? handleSliderChange : null}
        onChangeCommitted={type === 'after' ? handleSliderChange : null}
        sx={{
          color: '#416ce1',
          height: 4,
          padding: '13px 0',
          '& .MuiSlider-thumb': {
            height: 24,
            width: 24,
            backgroundColor: '#416ce1',
            border: '2px solid #fff',
            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
              boxShadow: 'inherit',
            },
            '&::before': {
              display: 'none',
            },
          },
          '& .MuiSlider-valueLabel': {
            lineHeight: 1.2,
            fontSize: 12,
            background: 'unset',
            padding: 0,
            width: 32,
            height: 32,
            borderRadius: '50% 50% 50% 0',
            backgroundColor: '#416ce1',
            transformOrigin: 'bottom left',
            transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
            '&::before': { display: 'none' },
            '&.MuiSlider-valueLabelOpen': {
              transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
            },
            '& > *': {
              transform: 'rotate(45deg)',
            },
          },
          '& .MuiSlider-track': {
            border: 'none',
          },
          '& .MuiSlider-rail': {
            opacity: 0.5,
            backgroundColor: '#bfbfbf',
          },
          '& .MuiSlider-mark': {
            backgroundColor: '#bfbfbf',
            height: 8,
            width: 1,
            '&.MuiSlider-markActive': {
              opacity: 1,
              backgroundColor: 'currentColor',
            },
          },
        }}
      />
    </Box>
  );
};

export default CalculatorSlider;
