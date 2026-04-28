import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Box, Typography } from '@mui/material';

const STRATEGY_MAP = ['proposed_5', 'proposed_1', 'proposed_2', 'proposed_3', 'proposed_4'];

const COLORS = [
  '#4361EE', '#3A0CA3', '#7209B7', '#F72585', '#4CC9F0', 
  '#4895EF', '#560BAD', '#B5179E', '#3F37C9', '#480CA8'
];

const NewPie = ({ funds, strategy }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (chartRef.current && funds && funds.length) {
      const stratKey = STRATEGY_MAP[strategy];
      const validFunds = funds.filter(f => parseFloat(f[stratKey]) > 0);
      
      const ctx = chartRef.current.getContext('2d');
      chartInstanceRef.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: validFunds.map(f => f.ticker_name),
          datasets: [{
            data: validFunds.map(f => parseFloat(f[stratKey])),
            backgroundColor: COLORS.slice(0, validFunds.length),
            borderWidth: 0,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                boxWidth: 12,
                font: { size: 10 },
                padding: 15
              }
            },
            tooltip: {
              callbacks: {
                label: (context) => `${context.label}: ${context.parsed}%`
              }
            }
          },
          cutout: '70%'
        }
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [funds, strategy]);

  return (
    <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
      <canvas ref={chartRef}></canvas>
    </Box>
  );
};

export default NewPie;
