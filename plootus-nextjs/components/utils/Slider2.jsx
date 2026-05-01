import React from 'react';
import { Slider, Box, Typography } from '@mui/material';

const Slider2 = ({
  initialValue,
  minValue = 0,
  maxValue = 100,
  label,
  stepValue = 1,
  changeHandler,
  isCurrency = false,
  WIDTH = '95%'
}) => {
  const formatValue = (val) => {
    if (isCurrency) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(val);
    }
    return val;
  };

  const handleSliderChange = (event, newValue) => {
    if (changeHandler) {
      changeHandler(newValue);
    }
  };

  return (
    <Box sx={{ width: WIDTH, mt: 2, mb: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
        <Typography variant="body2" fontWeight="600" color="primary">
          {formatValue(initialValue)}
        </Typography>
      </Box>
      <Slider
        value={initialValue}
        min={minValue}
        max={maxValue}
        step={stepValue}
        onChange={handleSliderChange}
        sx={{
          color: '#4361EE',
          height: 6,
          '& .MuiSlider-thumb': {
            width: 24,
            height: 24,
            backgroundColor: '#4361EE',
            border: '2px solid #fff',
            '&:hover, &.Mui-focusVisible': {
              boxShadow: '0px 0px 0px 8px rgba(67, 97, 238, 0.16)',
            },
          },
          '& .MuiSlider-track': {
            height: 6,
          },
          '& .MuiSlider-rail': {
            height: 6,
            opacity: 0.2,
            backgroundColor: '#cbd5e1',
          },
        }}
      />
    </Box>
  );
};

export default Slider2;
