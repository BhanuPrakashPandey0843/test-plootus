// =============================================================================
// EditAssumptions — Next.js port
// Exact parity with packages/web/src/components/HomePage/EditAssumptions/EditAssumptions.jsx
// All dispatch logic, calculations, and Redux selectors are IDENTICAL.
//
// KEY FORMULA NOTE:
//   general.futureExpenses.inflation is stored as a percentage integer (e.g. 2)
//   so we pass  inflation: 1 + inflationRate / 100  to calculateRetirementGap
//   (same as source: inflation: 1 + inflation / 100)
// =============================================================================
import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  calculateRetirementAssessts,
  calculateRetirementGap,
  GENERAL_GRAPH,
  getEditAssumptionsInitialState,
  useDidUpdate,
} from '../../../lib/plootusCommon';
import useWindowDimensions from '../../../lib/useWindowDimensions';
import styles from './EditAssumptions.module.css';
import EditSlider from './EditSlider';
import AssetsGraph from './AssetsGraph';
import GapGraph from './GapGraph';
import SmallScreen from './SmallScreen';
import RetirementSignupMain from './RetirementSignupMain';

const EditAssumptions = () => {
  const currentAgeRef = useRef();
  const dispatch = useDispatch();

  const graph = useSelector((state) => state.graphReducer);
  const general = useSelector((state) => state.generalReducer);

  // general.futureExpenses.inflation is stored as 2 (meaning 2%), same as source
  // general.futureExpenses.futureTotal is null for unauthenticated public pages
  const inflationRate = general?.futureExpenses?.inflation ?? 2;  // e.g. 2 → 1.02
  const futureTotal   = general?.futureExpenses?.futureTotal ?? 0;

  // ── Initialise slider state on mount (same as source) ──
  useEffect(() => {
    (async () => {
      const initialState = await getEditAssumptionsInitialState(null, null);
      dispatch({ type: GENERAL_GRAPH, payload: initialState });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Recalculate Retirement Assets when sliders / strategy / balance change ──
  // Exact mirror of source useDidUpdate block #1
  useDidUpdate(() => {
    if (!graph.sliderOptions) return;

    currentAgeRef.current = graph.sliderOptions?.currentAge?.value;

    const { retireAge, contribution } = graph.sliderOptions;
    calculateRetirementAssessts(
      retireAge.value,
      currentAgeRef.current,
      graph.openingBalance,
      contribution.value,
      graph.strategyIndex,
      dispatch
    );
  }, [graph?.sliderOptions, graph?.strategyIndex, graph?.openingBalance]);

  // ── Recalculate Retirement Gap when assets / lifeExp / expenses / inflation change ──
  // Exact mirror of source useDidUpdate block #2
  useDidUpdate(() => {
    if (!graph.sliderOptions) return;

    const { retireAge, lifeExp } = graph.sliderOptions;

    calculateRetirementGap({
      retireAge:          retireAge?.value,
      lifeExp:            lifeExp?.value,
      strategyIndex:      graph?.strategyIndex,
      expense_home:       graph.sliderOptions?.expenses?.value,
      retirementAssests:  graph.graph?.results?.retirementAssests,
      socialSecurity:     graph.socialSecurity,
      inflation:          1 + inflationRate / 100,
      dispatch,
    });
  }, [
    graph.graph?.results?.retirementAssests,
    graph.sliderOptions?.lifeExp,
    graph.sliderOptions?.expenses,
    inflationRate,
  ]);

  const [showText, setShowText] = useState(false);
  const { width } = useWindowDimensions();

  // ── Mobile view (≤868px) ──
  if (width <= 868) {
    return (
      <SmallScreen
        myStyle={{ height: '260px' }}
        myStyle2={{ height: '240px' }}
      />
    );
  }

  // ── Desktop view ──
  return (
    <div className={styles.container}>
      {/* Retirement Assets graph */}
      <div className={styles.assets}>
        <Card
          style={{
            boxShadow: '9px 7px 15px rgba(0,0,0,.05)',
            border: '2px solid #ededed',
            borderRadius: '10px',
            width: '100%',
          }}
        >
          <AssetsGraph graphStyle={{ maxHeight: '370px' }} />
        </Card>
      </div>

      {/* Retirement Gap/Surplus graph */}
      <div className={styles.gap}>
        <Card
          style={{
            boxShadow: '9px 7px 15px rgba(0,0,0,.05)',
            border: '2px solid #ededed',
            borderRadius: '10px',
            width: '100%',
          }}
        >
          <GapGraph graphStyle={{ maxHeight: '370px' }} />
        </Card>
      </div>

      {/* Edit Assumptions slider panel */}
      <div className={styles.edit}>
        <EditSlider setShowText={setShowText} />
      </div>

      {/* Retirement status message — mirrors source showText block */}
      {showText && (
        <div className={styles.text}>
          <RetirementSignupMain
            status={graph.graph?.results?.retirementGap > 0}
          />
        </div>
      )}
    </div>
  );
};

export default EditAssumptions;
