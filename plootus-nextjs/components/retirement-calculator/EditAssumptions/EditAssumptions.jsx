import { Card } from '@mui/material';
import {
  calculateRetirementAssessts,
  calculateRetirementGap,
  GENERAL_GRAPH,
} from '../../../lib/plootusCommon';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useWindowDimensions from '../../../lib/useWindowDimensions';
import styles from './EditAssumptions.module.css';
import EditSlider from './EditSlider';
import Graph from './Graphs/AssetsGraph';
import GapGraph from './Graphs/GapGraph';
import RetirementSignupMain from './RetirementStatus/RetirementSignupMain';
import SmallScreen from './SmallScreen';

// Custom useDidUpdate hook — runs callback on every dep change except the initial mount
function useDidUpdate(callback, deps) {
  const hasMount = useRef(false);
  useEffect(() => {
    if (hasMount.current) {
      callback();
    } else {
      hasMount.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

// Safe default calculator state for unauthenticated users
const getDefaultState = () => ({
  sliderOptions: {
    currentAge:   { config: { title: 'Current Age (Years)',           min: 13, max: 100,    type: 'num'   }, value: 30    },
    retireAge:    { config: { title: 'Retirement Age (Years)',         min: 31, max: 100,    type: 'num'   }, value: 65    },
    lifeExp:      { config: { title: 'Life Expectancy (Years)',        min: 66, max: 120,    type: 'num'   }, value: 85    },
    contribution: { config: { title: 'Annual Contribution ($)',        min: 0,  max: 50000,  type: 'money' }, value: 5000  },
    expenses:     { config: { title: 'Annual Retirement Expenses ($)', min: 1,  max: 250000, type: 'money' }, value: 50000 },
  },
  openingBalance: 1000,
  strategyIndex: 2,
  expense_home: 50000,
  socialSecurity: [],
});

const EditAssumptions = () => {
  const currentAgeRef = useRef(30);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);
  const graph = useSelector((state) => state.graphReducer);
  const general = useSelector((state) => state.generalReducer);
  // inflation in store is a percentage (e.g. 2 = 2%); convert to multiplier (1.02)
  const { inflation: inflationPct = 2, futureTotal } = general?.futureExpenses || {};
  const inflationMultiplier = 1 + inflationPct / 100;

  // Initialize with safe defaults on first mount
  useEffect(() => {
    if (!graph.sliderOptions) {
      dispatch({ type: GENERAL_GRAPH, payload: getDefaultState() });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Re-run assets calculation whenever sliders or strategy change
  useDidUpdate(() => {
    currentAgeRef.current = graph.sliderOptions?.currentAge?.value ?? 30;
    const { retireAge, contribution } = graph.sliderOptions || {};
    if (retireAge && contribution) {
      calculateRetirementAssessts(
        retireAge.value,
        currentAgeRef.current,
        graph.openingBalance,
        contribution.value,
        graph.strategyIndex,
        dispatch
      );
    }
  }, [graph?.sliderOptions, graph?.strategyIndex, graph?.openingBalance]);

  // Re-run gap calculation whenever retirement assets, life-expectancy, expenses, OR strategy change
  useDidUpdate(() => {
    const { retireAge, lifeExp } = graph.sliderOptions || {};
    if (!retireAge || !lifeExp) return;

    const futureTotalWithInf =
      futureTotal != null
        ? futureTotal * Math.pow(inflationMultiplier, retireAge.value - currentAgeRef.current)
        : null;

    calculateRetirementGap({
      retireAge: retireAge?.value,
      lifeExp: lifeExp?.value,
      strategyIndex: graph?.strategyIndex,
      expense_home:
        user.token && futureTotalWithInf != null
          ? futureTotalWithInf
          : graph.sliderOptions?.expenses?.value ?? 50000,
      retirementAssests: graph.graph?.results?.retirementAssests,
      socialSecurity: graph.socialSecurity || [],
      inflation: inflationMultiplier,
      dispatch,
    });
  }, [
    graph.graph?.results?.retirementAssests,
    graph.sliderOptions?.lifeExp,
    graph.sliderOptions?.expenses,
    graph?.strategyIndex, // Added this dependency
    inflationPct,
  ]);

  const { width } = useWindowDimensions();
  const [showText, setShowText] = useState(false);

  // Mobile view: tabbed single-graph layout
  if (width <= 868) {
    return (
      <SmallScreen
        myStyle={{ height: '260px' }}
        myStyle2={{ height: '240px' }}
      />
    );
  }

  // Desktop view: side-by-side graphs + edit panel
  return (
    <div className={styles.container}>
      <div className={styles.assets}>
        <Card
          style={{
            boxShadow: '9px 7px 15px rgba(0,0,0,.05)',
            border: '2px solid #ededed',
            borderRadius: '10px',
            width: '100%',
          }}
        >
          <Graph graphStyle={{ maxHeight: '370px' }} />
        </Card>
      </div>
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
      <div className={styles.edit}>
        <EditSlider setShowText={setShowText} />
      </div>
      {showText && (
        <div className={styles.text}>
          <RetirementSignupMain
            status={graph.graph.results.retirementGap > 0}
          />
        </div>
      )}
    </div>
  );
};

export default EditAssumptions;
