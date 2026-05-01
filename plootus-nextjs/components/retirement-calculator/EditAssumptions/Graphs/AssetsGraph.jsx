import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import {
  strategyOptions,
  getFormattedValue,
  roundNum,
  formatCommaString,
  DRAK_GREEN_PLOOT,
  BLUE_PLOOT,
} from '../../../../lib/plootusCommon';
import RetirementChart from '../../../utils/RetirementChart/RetirementChart';
import styles from './AssetsGraph.module.css';
import MyTooltip from '../../../utils/MyTooltip';

const Graph = ({ graphStyle, myStyle }) => {
  const graph = useSelector((state) => state.graphReducer);
  const amount = `$${formatCommaString(
    roundNum(Math.abs(graph.graph.results?.retirementAssests), 0, 2)
  )}`;

  return (
    <div className={styles.myGraph}>
      <div style={{ height: '100%', minHeight: '450px' }}>
        <Box sx={{ p: 2 }}>
          <div className={styles.topContainer}>
            <div className={styles.topLeft}>
              <h3 className={styles.headerText}>Retirement Assets</h3>
              <div style={{ marginLeft: '5px', marginTop: '5px', display: 'flex', alignItems: 'center' }}>
                <MyTooltip 
                  title="Expected assets accumulated until retirement age based on annual contribution and investment strategy."
                >
                   <img
                    style={{ width: '15px', height: '15px', cursor: 'pointer' }}
                    src="/question.png"
                    alt="question"
                  />
                </MyTooltip>
              </div>
            </div>
            <div className={styles.topRight} style={{ color: DRAK_GREEN_PLOOT }}>
              {amount.slice(0, -2)}
              <span className={styles.afterDecimal}>{amount.slice(-2)}</span>
            </div>
          </div>

          <div className={styles.cardHeader}>
            <div className={styles.headerGrid}>
              {/* Left Column (3/12) */}
              <div className={styles.headerCol}>
                <div className={styles.row64}>
                  <div className={styles.col9}>
                    <div className={styles.circle}>
                      <div className={styles.number}>
                        {graph.graph.results
                          ? getFormattedValue(graph.graph.results.retirementAssests, 'money', 2)
                          : null}
                      </div>
                    </div>
                  </div>
                  <div className={styles.col3}>
                    <img src="/equal-sign.png" alt="equal" className={styles.image} />
                  </div>
                </div>
                <div className={styles.rowAuto}>
                  <div className={styles.col9}>
                    <div className={styles.titleText}>Retirement Assets</div>
                  </div>
                  <div className={styles.col3}></div>
                </div>
              </div>

              {/* Middle Column (6/12) */}
              <div className={styles.headerColMiddle}>
                <div className={styles.row64}>
                  <div className={styles.col1}>
                    <img src="/left.svg" alt="left" style={{ height: '64px' }} />
                  </div>
                  <div className={styles.col4}>
                    <div className={styles.circle}>
                      <div className={styles.number}>
                        {graph.openingBalance
                          ? getFormattedValue(graph.openingBalance, 'money', 1)
                          : null}
                      </div>
                    </div>
                  </div>
                  <div className={styles.col2}>
                    <img src="/plus.png" alt="plus" className={styles.image} />
                  </div>
                  <div className={styles.col4}>
                    <div className={styles.circle}>
                      <div className={styles.number}>
                        {graph.sliderOptions
                          ? getFormattedValue(graph.sliderOptions.contribution?.value, 'money', 2)
                          : null}
                      </div>
                    </div>
                  </div>
                  <div className={styles.col1}>
                    <img src="/right.svg" alt="right" style={{ height: '64px' }} />
                  </div>
                </div>
                <div className={styles.rowAuto}>
                  <div className={styles.col1}></div>
                  <div className={styles.col4}>
                    <div className={styles.titleText}>Opening Balance</div>
                  </div>
                  <div className={styles.col2}></div>
                  <div className={styles.col4}>
                    <div className={styles.titleText}>Contribution</div>
                  </div>
                  <div className={styles.col1}></div>
                </div>
              </div>

              {/* Right Column (3/12) */}
              <div className={styles.headerCol}>
                <div className={styles.row64}>
                  <div className={styles.col3}>
                    <img src="/plus.png" alt="plus" className={styles.imageMul} />
                  </div>
                  <div className={styles.col9}>
                    <div className={styles.circle}>
                      <div className={styles.number}>
                        {graph?.strategyIndex !== null
                          ? getFormattedValue(strategyOptions[graph?.strategyIndex]?.value, 'percent', 3)
                          : null}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.rowAuto}>
                  <div className={styles.col3}></div>
                  <div className={styles.col9}>
                    <div className={styles.titleText}>
                      {strategyOptions[graph.strategyIndex]?.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.myinnerG} style={myStyle}>
            <div style={{ height: '100%', ...graphStyle }}>
              <RetirementChart
                data={graph.graph.assets}
                color={DRAK_GREEN_PLOOT}
                xAxis="Age"
                yAxis="Retirement Assets"
                toolY="Assets"
              />
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Graph;
