import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Card, Typography, Box } from '@mui/material';
import { useFeesSaved } from '../../../../lib/hooks/useFeesSaved';
import InfoIcon from '@mui/icons-material/Info';
import MyTooltip from '../../../utils/MyTooltip';

const FeesGraph = ({ strategy, manualFees, manualCreatedAt }) => {
  const { data, total, saved } = useFeesSaved(strategy, manualFees, manualCreatedAt);
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (chartRef.current && data.length) {
      const ctx = chartRef.current.getContext('2d');
      chartInstanceRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.map(p => p.x),
          datasets: [{
            label: 'Fees Saved',
            data: data.map(p => p.y),
            borderColor: '#4361EE',
            backgroundColor: 'rgba(67, 97, 238, 0.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 0,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (context) => {
                  return `Year: ${context.label}, Saved: $${context.parsed.y.toLocaleString()}`;
                }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: (value) => '$' + value.toLocaleString()
              }
            },
            x: {
              grid: { display: false },
              ticks: { maxTicksLimit: 6 }
            }
          }
        }
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data]);

  const formattedTotal = `$${Math.round(total).toLocaleString()}`;

  return (
    <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography sx={{ fontWeight: 700, color: '#64748B', fontSize: '0.875rem', textTransform: 'uppercase' }}>
              Fees Saved
            </Typography>
            <MyTooltip 
              title="Expected fees Plootus can help you save over 30 years." 
              render={() => <InfoIcon sx={{ fontSize: '1rem', color: '#94A3B8' }} />} 
            />
          </Box>
          <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: '#10B981' }}>
            {formattedTotal}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ height: 'calc(100% - 60px)' }}>
        <canvas ref={chartRef}></canvas>
      </Box>
    </Box>
  );
};

export default FeesGraph;
