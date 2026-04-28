import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const selectStrategy = (data, strategy) => {
  if (!data || !data.length) return null;
  switch (strategy) {
    case 0:
      return data[0]?.superconservative;
    case 1:
      return data[0]?.conservative;
    case 2:
      return data[0]?.moderate;
    case 3:
      return data[0]?.growth;
    case 4:
      return data[0]?.supergrowth;
    default:
      return null;
  }
};

const feesSavedDefault = [
    { total: 45000, data: Array.from({length: 30}, (_, i) => i * 1500) },
    { total: 55000, data: Array.from({length: 30}, (_, i) => i * 1800) },
    { total: 65000, data: Array.from({length: 30}, (_, i) => i * 2100) },
    { total: 75000, data: Array.from({length: 30}, (_, i) => i * 2500) },
    { total: 85000, data: Array.from({length: 30}, (_, i) => i * 2800) },
];

export const useFeesSaved = (strategy, manualFees = null, manualCreatedAt = null) => {
  const [graphData, setGraphData] = useState({
    data: [],
    total: 0,
    flag: null,
    saved: 0,
  });

  const [feesSavedData, setFeesSavedData] = useState([]);
  const createdAt = manualCreatedAt || moment().toISOString();

  useEffect(() => {
    if (manualFees) {
      setFeesSavedData(manualFees);
    }
  }, [manualFees]);

  useEffect(() => {
    const currentYear = parseInt(moment(createdAt).format('YYYY'));
    
    if (feesSavedData.length) {
      const tempData = selectStrategy(feesSavedData, strategy);
      let temp = [];
      let tot = 0;
      if (tempData) {
        for (let i = 0; i < tempData.length; ++i) {
          temp.push({
            x: currentYear + i,
            y: tempData[i],
          });
          tot += tempData[i];
        }
      }
      setGraphData({
        data: temp,
        total: tot,
        flag: 1,
        saved: temp[temp.length - 1]?.y || 0,
      });
    } else {
      let temp = [];
      const defaultData = feesSavedDefault[strategy] || feesSavedDefault[0];
      for (let i = 0; i < defaultData.data.length; i++) {
        temp.push({
          x: currentYear + i,
          y: defaultData.data[i],
        });
      }
      setGraphData({
        data: temp,
        total: defaultData.total,
        flag: 0,
        saved: temp[temp.length - 1]?.y || 0,
      });
    }
  }, [strategy, feesSavedData, createdAt]);

  return graphData;
};
