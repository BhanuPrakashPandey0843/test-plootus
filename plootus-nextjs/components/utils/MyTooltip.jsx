import React from 'react';
import { Tooltip, Box } from '@mui/material';

const MyTooltip = ({ title, render }) => {
  return (
    <Tooltip title={title} arrow placement="top">
      <Box component="span" sx={{ display: 'inline-flex', verticalAlign: 'middle' }}>
        {render()}
      </Box>
    </Tooltip>
  );
};

export default MyTooltip;
