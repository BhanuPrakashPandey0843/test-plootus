// =============================================================================
// AssetsGraph — Next.js port
// Exact parity with packages/web/src/components/HomePage/EditAssumptions/Graphs/AssetsGraph.jsx
// =============================================================================
import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'reactstrap';
import {
  strategyOptions,
  getFormattedValue,
  DRAK_GREEN_PLOOT,
  BLUE_PLOOT,
  roundNum,
  formatCommaString,
} from '../../../lib/plootusCommon';
import RetirementChart from '../RetirementChart/RetirementChart';
import styles from './AssetsGraph.module.css';

// Simple tooltip component
const SimpleTooltip = ({ title, children }) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {children}
      <div style={{
        display: 'none',
        position: 'absolute',
        bottom: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(0,0,0,0.75)',
        color: 'white',
        padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '12px',
        whiteSpace: 'nowrap',
        zIndex: 100,
      }}>{title}</div>
    </div>
  );
};

const AssetsGraph = ({ myGraph, graphStyle, myStyle }) => {
  const graph = useSelector((state) => state.graphReducer);

  const amount = `$${formatCommaString(
    roundNum(Math.abs(graph.graph.results?.retirementAssests), 0, 2)
  )}`;

  return (
    <div className={styles.myGraph} style={myGraph}>
      <div style={{ height: '100%', maxHeight: '650px', minHeight: '450px' }}>
        <Row noGutters="true">
          {/* ── Header row: title + total amount ── */}
          <Col xs="12" style={{ maxHeight: '60px' }}>
            <div className={styles.topContainer}>
              <div className={styles.topLeft}>
                <h5 className={styles.headerText}>Retirement Assets</h5>
                <div style={{ marginLeft: '5px', marginTop: '5px', display: 'flex', alignItems: 'center' }}>
                  <img
                    style={{ width: '15px', height: '15px', cursor: 'pointer' }}
                    src="/question.png"
                    alt="Expected assets accumulated until retirement age based on annual contribution and investment strategy."
                    title="Expected assets accumulated until retirement age based on annual contribution and investment strategy."
                  />
                </div>
              </div>
              <div className={styles.topRight} style={{ color: DRAK_GREEN_PLOOT }}>
                {amount.slice(0, -2)}
                <span className={styles.afterDecimal}>{amount.slice(-2)}</span>
              </div>
            </div>
          </Col>

          {/* ── Formula row: [balance + contribution] × strategy ── */}
          <Col xs="12" style={{ maxHeight: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className={styles.cardHeader}>
              <Row noGutters="true">
                {/* Result circle */}
                <Col xs="3">
                  <Row noGutters="true">
                    <Col xs="9" style={{ maxHeight: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60px' }}>
                      <div className={styles.circle}>
                        <div className={styles.number}>
                          {graph.graph.results
                            ? getFormattedValue(graph.graph.results.retirementAssests, 'money', 2)
                            : null}
                        </div>
                      </div>
                    </Col>
                    <Col xs="3" style={{ display: 'flex', maxHeight: '100px', justifyContent: 'center', alignItems: 'center', height: '60px' }}>
                      <img src="/equal-sign.png" alt="equal" className={styles.image} />
                    </Col>
                    <Col xs="10" style={{ maxHeight: '50px', textAlign: 'center' }} className={styles.titles}>
                      <div className={styles.text} style={{ paddingTop: '10px' }}>Retirement Assets</div>
                    </Col>
                    <Col xs="2"></Col>
                  </Row>
                </Col>

                {/* Middle: opening balance + contribution */}
                <Col xs="6">
                  <Row noGutters="true">
                    <Col xs="12" style={{ maxHeight: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <div className={styles.container}>
                        <div className={styles.leftb}>
                          <img src="/left.svg" alt="left" style={{ height: '60px' }} />
                        </div>
                        <div className={styles.c1}>
                          <div className={styles.circle}>
                            <div className={styles.number}>
                              {graph.openingBalance
                                ? getFormattedValue(graph.openingBalance, 'money', 1)
                                : null}
                            </div>
                          </div>
                        </div>
                        <div className={styles.plus}>
                          <img src="/plus.png" alt="plus" className={styles.image} />
                        </div>
                        <div className={styles.c2}>
                          <div className={styles.circle}>
                            <div className={styles.number}>
                              {graph.sliderOptions
                                ? getFormattedValue(graph.sliderOptions.contribution.value, 'money', 2)
                                : null}
                            </div>
                          </div>
                        </div>
                        <div className={styles.rightb}>
                          <img src="/right.svg" alt="right" style={{ height: '60px' }} />
                        </div>
                      </div>
                    </Col>
                    <Col xs="12">
                      <div className={styles.middle}>
                        <div className={styles.downl}></div>
                        <div xs="6" style={{ maxHeight: '50px' }} className={styles.titlel}>
                          <div className={styles.text}><p>Opening Balance</p></div>
                        </div>
                        <div className={styles.downl}></div>
                        <div xs="6" style={{ maxHeight: '50px' }} className={styles.titler}>
                          <div className={styles.text}><p>Contribution</p></div>
                        </div>
                        <div className={styles.downl}></div>
                      </div>
                    </Col>
                  </Row>
                </Col>

                {/* Right: strategy rate */}
                <Col xs="3">
                  <Row noGutters="true">
                    <Col xs="3" style={{ maxHeight: '100px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', color: BLUE_PLOOT, fontSize: '25px', height: '60px' }}>
                      <img src="/plus.png" alt="plus" className={styles.imageMul} />
                    </Col>
                    <Col xs="9" style={{ maxHeight: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <div className={styles.circle}>
                        <div className={styles.number}>
                          {graph?.strategyIndex !== null
                            ? getFormattedValue(strategyOptions[graph?.strategyIndex]?.value, 'percent', 3)
                            : null}
                        </div>
                      </div>
                    </Col>
                    <Col xs="2"></Col>
                    <Col xs="10" style={{ textAlign: 'center' }} className={styles.titles}>
                      <div className={styles.text} style={{ paddingTop: '10px' }}>
                        {strategyOptions[graph.strategyIndex]?.title}
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>

          {/* ── Chart ── */}
          <Col xs="12" className={styles.myinnerG} style={myStyle}>
            <div style={{ height: '100%', ...graphStyle }}>
              <RetirementChart
                data={graph.graph.assets}
                color={DRAK_GREEN_PLOOT}
                xAxis="Age"
                yAxis="Retirement Assets"
                toolY="Assets"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AssetsGraph;
