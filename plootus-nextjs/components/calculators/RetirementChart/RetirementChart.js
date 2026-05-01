// =============================================================================
// RetirementChart — Next.js port
// Exact 1:1 parity with:
//   packages/web/src/Utils/Charts/RetirementChart/RetirementChart.js
// Uses @nivo/line (already in package.json). No logic changes.
// =============================================================================
import { ResponsiveLine } from '@nivo/line';
import { BLUE_PLOOT, DRAK_GREEN_PLOOT, TEXT_BLACK, getFormattedValue } from '../../../lib/plootusCommon';
import React from 'react';
import useWindowDimensions from '../../../lib/useWindowDimensions';
import styles from './RetirementChart.module.css';

const RetirementChart = ({ data, xAxis, yAxis, color, toolY }) => {
  const newData = [{ data: data || [] }];
  const { width } = useWindowDimensions();

  const toolTipElement = (props) => {
    const xval = props.point.data.x;
    const yval = getFormattedValue(props.point.data.y, 'money', 2);
    return (
      <div className={styles.toolTip}>
        <div className={styles.xVal}>
          {xAxis}: {xval}
        </div>
        <div className={styles.yVal}>
          {toolY}: <span style={{ color: DRAK_GREEN_PLOOT }}>{yval}</span>
        </div>
      </div>
    );
  };

  const getMax = () => {
    if (!data || !data.length) return 200;
    let max = -1;
    data.forEach((item) => { max = Math.max(max, item.y); });
    return max + 200;
  };

  const getMin = () => {
    if (!data || !data.length) return 0;
    let min = 100000000;
    data.forEach((item) => { min = Math.min(min, item.y); });
    return min;
  };

  const getMinX = () => {
    if (!data || !data.length) return 0;
    let min = 100000000;
    data.forEach((item) => { min = Math.min(min, item.x); });
    return min;
  };

  const chartTheme = () => ({
    grid: { line: { stroke: 'rgba(0,0,0,0.05)' } },
    axis: {
      legend: {
        text: { fill: BLUE_PLOOT, fontSize: width > 576 ? 15 : 12 },
      },
      ticks: {
        text: { fill: TEXT_BLACK, fontSize: width > 576 ? 12 : 9 },
        line: { stroke: 'rgba(0,0,0,0.3)', strokeWidth: 1 },
      },
      domain: {
        line: { stroke: 'rgba(0,0,0,0.1)', strokeWidth: 1 },
      },
    },
    crosshair: {
      line: { stroke: 'rgb(0,0,0)', strokeWidth: 1, strokeOpacity: 1 },
    },
  });

  const maxY = getMax();
  const minY = getMin();
  const minX = getMinX();

  if (!data || !data.length) return null;

  return (
    <div className={styles.chartCont}>
      <ResponsiveLine
        data={newData}
        margin={{
          top: width > 576 ? 40 : 30,
          right: width > 576 ? 50 : 30,
          bottom: 60,
          left: width > 576 ? 90 : 70,
        }}
        xScale={{ type: 'linear', min: minX }}
        yScale={{ type: 'linear', min: minY, max: maxY, stacked: true, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: xAxis,
          legendOffset: 46,
          legendPosition: 'middle',
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: yAxis,
          legendOffset: width > 576 ? -65 : -50,
          legendPosition: 'middle',
          tickValues: 5,
          format: (d) => `${getFormattedValue(d, 'money', 2)}`,
        }}
        theme={chartTheme()}
        colors={[color]}
        pointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        enableArea={true}
        areaBaselineValue={minY}
        areaOpacity={1}
        curve="catmullRom"
        tooltip={toolTipElement}
        crosshairType="cross"
      />
    </div>
  );
};

export default RetirementChart;
