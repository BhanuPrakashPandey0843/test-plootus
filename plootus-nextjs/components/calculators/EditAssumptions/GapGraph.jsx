// =============================================================================
// GapGraph — Next.js port
// Exact parity with packages/web/src/components/HomePage/EditAssumptions/Graphs/GapGraph.jsx
// =============================================================================
import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'reactstrap';
import {
  getFormattedValue,
  roundNum,
  formatCommaString,
  DRAK_GREEN_PLOOT,
  DARK_RED_PLOOT,
  TEXT_BLACK,
} from '../../../lib/plootusCommon';
import RetirementChart from '../RetirementChart/RetirementChart';
import styles from './GapGraph.module.css';

const GapGraph = ({ myGraph, graphStyle, myStyle }) => {
  const graph = useSelector((state) => state.graphReducer);

  const amount = `$${formatCommaString(
    roundNum(Math.abs(graph.graph.results?.retirementGap), 0, 2)
  )}`;
  const isSurplus = graph.graph.results?.retirementGap > 0;

  return (
    <div className={styles.myGraph} style={myGraph}>
      <div style={{ height: '100%', maxHeight: '650px', minHeight: '450px' }}>
        <Row noGutters="true">
          {/* ── Header row ── */}
          <Col xs="12" style={{ maxHeight: '60px' }}>
            <div className={styles.topContainer}>
              <div className={styles.topLeft}>
                <h5 className={styles.headerText}>
                  Retirement {isSurplus ? 'Surplus' : 'Gap'}
                </h5>
                <div style={{ marginLeft: '5px', marginTop: '5px', display: 'flex', alignItems: 'center' }}>
                  <img
                    style={{ width: '15px', height: '15px', cursor: 'pointer' }}
                    src="/question.png"
                    alt="Based on anticipated retirement expenses and assets created until life expectancy."
                    title="Based on anticipated retirement expenses and assets created until life expectancy."
                  />
                </div>
              </div>
              <div
                className={styles.topRight}
                style={{ color: isSurplus ? DRAK_GREEN_PLOOT : DARK_RED_PLOOT }}
              >
                {amount.slice(0, -2)}
                <span className={styles.afterDecimal}>{amount.slice(-2)}</span>
              </div>
            </div>
          </Col>

          {/* ── Formula row ── */}
          <Col xs="12" style={{ maxHeight: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className={styles.cardHeader}>
              <Row noGutters="true">
                {/* Result circle */}
                <Col xs="3">
                  <Row noGutters="true">
                    <Col xs="9" style={{ maxHeight: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60px' }}>
                      <div
                        className={styles.circle}
                        style={{ borderColor: isSurplus ? DRAK_GREEN_PLOOT : DARK_RED_PLOOT }}
                      >
                        <div className={styles.number}>
                          {graph.graph.results.retirementGap
                            ? getFormattedValue(graph.graph.results.retirementGap, 'money', 2)
                            : null}
                        </div>
                      </div>
                    </Col>
                    <Col xs="3" style={{ display: 'flex', maxHeight: '100px', justifyContent: 'center', alignItems: 'center', height: '60px' }}>
                      <img src="/equal-sign.png" alt="equal" className={styles.image} />
                    </Col>
                    <Col xs="10" style={{ maxHeight: '50px', textAlign: 'center' }}>
                      <div className={styles.text}>
                        Retirement {isSurplus ? 'Surplus' : 'Gap'}
                      </div>
                    </Col>
                    <Col xs="2"></Col>
                  </Row>
                </Col>

                {/* Middle: retirement assets + after-retirement returns */}
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
                              {graph.graph.results
                                ? getFormattedValue(graph.graph.results.retirementAssests, 'money', 1)
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
                              {graph.graph.results
                                ? getFormattedValue(graph.graph.results.retireReturns, 'money', 2)
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
                          <div className={styles.text}><p>Retirement Assets</p></div>
                        </div>
                        <div className={styles.downl}></div>
                        <div xs="6" style={{ maxHeight: '50px' }} className={styles.titler}>
                          <div className={styles.text}><p>After Retirement Returns</p></div>
                        </div>
                        <div className={styles.downl}></div>
                      </div>
                    </Col>
                  </Row>
                </Col>

                {/* Right: minus projected expenses */}
                <Col xs="3">
                  <Row noGutters="true">
                    <Col xs="3" style={{ maxHeight: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60px' }}>
                      <img src="/minus.png" alt="minus" className={styles.image} />
                    </Col>
                    <Col xs="9" style={{ maxHeight: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60px' }}>
                      <div className={styles.circle} style={{ borderColor: DARK_RED_PLOOT, color: TEXT_BLACK }}>
                        <div className={styles.number}>
                          {graph.graph.results
                            ? getFormattedValue(graph.graph.results.futureExpenses, 'money', 2)
                            : null}
                        </div>
                      </div>
                    </Col>
                    <Col xs="2"></Col>
                    <Col xs="10" style={{ fontSize: '14px', textAlign: 'center' }}>
                      <div className={styles.text}>Projected Retirement Expenses</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>

          {/* ── Gap chart ── */}
          <Col xs="12" className={styles.myinnerG} style={myStyle}>
            <div style={{ height: '100%', ...graphStyle }}>
              <RetirementChart
                data={graph.graph.gap}
                color="#dc0615"
                xAxis="Age"
                yAxis="Remaining Retirement Assets"
                toolY="Remaining Assets"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default GapGraph;
