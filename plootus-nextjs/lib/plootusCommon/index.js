// =============================================================================
// @plootus/common — Complete inline port for Next.js
// Source: packages/common (styles, constants, functions, hooks, redux types)
// DO NOT modify formulas or constants — exact parity with React monorepo
// =============================================================================

// ---------------------------------------------------------------------------
// 1. COLORS (from packages/common/styles/colors.ts)
// ---------------------------------------------------------------------------
export const BLUE_PLOOT = '#416ce1';
export const BLUE_BUTTON = '#416ce1';
export const BLUE_PLOOT_1 = '#094392';

export const GREEN_PLOOT = '#34d86a';
export const GREEN_PLOOT_1 = '#41d287';
export const GREEN_BUTTON = '#52da9c';
export const DRAK_GREEN_PLOOT = '#1bad53';

export const RED_PLOOT = '#e4747a';
export const DARK_RED_PLOOT = '#f25f5f';
export const RED_1 = '#f74747';
export const DANGER_RED = '#d34a4a';

export const WHITE = '#fff';
export const OFF_WHITE = '#f1f1f1';

export const BLACK = '#000';
export const TEXT_BLACK = '#404a57';
export const TEXT_BLACK_1 = '#2b2d38';
export const TEXT_BLACK_2 = '#919191';
export const TEXT_BLACK_3 = '#535353';

export const GREY = 'grey';
export const LIGHT_GREY = '#f8f8f8';
export const DISABLE_GREY = '#bcbec6';
export const BORDER_COLOR = '#c6cbde';

// ---------------------------------------------------------------------------
// 2. CONSTANTS (from packages/common/constants/)
// ---------------------------------------------------------------------------

// inflation constant (constants/constants.ts)
export const inflation = 1.02;

// strategyOptions (constants/pickers.ts)
export const strategyOptions = [
  { title: 'Super Conservative', value: 0.035 },
  { title: 'Conservative', value: 0.052 },
  { title: 'Moderate', value: 0.0697 },
  { title: 'Growth', value: 0.0864 },
  { title: 'Super Growth', value: 0.0988 },
];

// sliderConstants (constants/sliderConstants.ts)
export const CURRENT_AGE = {
  TITLE: 'Current Age (Years)',
  MIN: 20,
  MAX: 50,
  TYPE: 'num',
  VALUE: 25,
};

export const RETIRE_AGE = {
  TITLE: 'Retirement Age (Years)',
  MIN: 26,
  MAX: 70,
  TYPE: 'num',
  VALUE: 65,
};

export const LIFE_EXP = {
  TITLE: 'Life Expectancy (Years)',
  MIN: 66,
  MAX: 120,
  TYPE: 'num',
  VALUE: 85,
};

export const CONTRIBUTION = {
  TITLE: 'Annual Contribution ($)',
  MIN: 0,
  MAX: 40000,
  TYPE: 'money',
  VALUE: 5000,
};

export const EXPENSES = {
  TITLE: 'Annual Retirement Expenses ($)',
  MIN: 1,
  MAX: 1000000,
  TYPE: 'money',
  VALUE: 50000,
};

// ---------------------------------------------------------------------------
// 3. REDUX ACTION TYPE CONSTANTS (from packages/common/redux/graph/types.ts)
// ---------------------------------------------------------------------------
export const GENERAL_GRAPH = 'GENERAL_GRAPH';
export const GRAPH_GRAPH_RESULTS = 'GRAPH_GRAPH_RESULTS';
export const GENERAL_SLIDER_OPTION = 'GENERAL_SLIDER_OPTION';

// ---------------------------------------------------------------------------
// 4. FORMAT FUNCTIONS (from packages/common/functions/formatData.ts)
// ---------------------------------------------------------------------------

export const isKhaliCheck = (value) =>
  value === '' || value === null || value === undefined;

// Round a number to a given precision
export const roundNum = (num, pow, tofixed = 2, abs = false, parseInt = false) => {
  const rounded = (
    (+(isKhaliCheck(num) ? 0 : abs ? Math.abs(+num) : num) * 10 ** pow) /
    10 ** pow
  ).toFixed(tofixed);
  return parseInt ? +rounded : rounded;
};

// Add thousands-separator commas
export const formatCommaString = (value) =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// Remove $ and commas, parse float
export const removeCommaString = (value) =>
  parseFloat(value.replace(/\$|,/g, ''));

// Format as $1.2M / $500K / $1.5B / $2T etc.
export const getFormattedValue = (value, format, floor) => {
  switch (format) {
    case 'money': {
      if (
        (value >= 10 ** 12 && value > 0) ||
        (value < -(10 ** 12) + 1 && value < 0)
      ) {
        value = +roundNum(value / 10 ** 11, 1, 0) / 10;
        return `$${value}T`;
      }
      if (
        (value >= 10 ** 9 && value > 0) ||
        (value < -(10 ** 9) + 1 && value < 0)
      ) {
        value = +roundNum(value / 10 ** 8, 1, 0) / 10;
        return `$${value}B`;
      }
      if (
        (value >= 10 ** 6 && value > 0) ||
        (value < -(10 ** 6) + 1 && value < 0)
      ) {
        value = +roundNum(value / 10 ** 5, 1, 0) / 10;
        return `$${value}M`;
      }
      if ((value >= 1000 && value > 0) || (value < -999 && value < 0)) {
        value = +roundNum(value / 10 ** 2, 1, 0) / 10;
        return `$${value}K`;
      }
      return `$${roundNum(value, 0, 0)}`;
    }
    case 'num':
      return value;
    case 'percent':
      return `${Math.round(value * 1000) / 10}%`;
    default:
      return value;
  }
};

export const generalMoney = (value) =>
  `$${formatCommaString(roundNum(value, 0, 2, true))}`;

// ---------------------------------------------------------------------------
// 5. UTILITY FUNCTIONS (from packages/common/functions/utils.ts)
// ---------------------------------------------------------------------------

export const isNull = (value) => value === null;

// Calculate retirement assets graph data and dispatch results
// Exact formula from packages/common/functions/utils.ts :: calculateRetirementAssessts
export const calculateRetirementAssessts = (
  retireAge,
  current_age,
  openingBalance,
  contribution,
  strategyIndex,
  dispatch
) => {
  const assetsGraph = [];
  const earnYears = retireAge - current_age;
  let total = Number(openingBalance) || 0;
  const contributionVal = Number(contribution) || 0;
  const strategyVal = strategyOptions[strategyIndex]?.value || 0;

  for (let i = 0; i <= earnYears - 1; i += 1) {
    total += contributionVal;
    total *= 1 + strategyVal;
    assetsGraph.push({ x: i + current_age, y: total });
  }

  dispatch({
    type: GRAPH_GRAPH_RESULTS,
    payload: {
      graph: { assets: assetsGraph },
      results: { retirementAssests: total },
    },
  });

  return total;
};

// After-retirement returns — exact formula from utils.ts :: calculateAfterRetirementReturns
export const calculateAfterRetirementReturns = ({
  lifeExp,
  retireAge,
  retirementAssests,
  strategyIndex,
  expense_home,
  socialSecurity,
  inflation: inflationArg,
  dispatch,
}) => {
  const retirementYears = lifeExp - retireAge;
  const retirementAssets = Number(retirementAssests) || 0;
  let remainingAssets = retirementAssets;
  let totalReturn = 0;
  let totalExpenses = 0;
  const gap = [];
  const future = [];
  let flag = true; // true = assets last until life expectancy

  const index = +strategyIndex ? +strategyIndex - 1 : 0;

  const findSocialSecurity = (age) => {
    const item = socialSecurity?.find((i) => i.Age === age);
    return item ? item.Benefits : 0;
  };

  for (let i = 0; i <= retirementYears - 1; i += 1) {
    const x = i + retireAge;
    const benefit = findSocialSecurity(x);
    let expense = (Number(expense_home) || 0) * Math.pow(inflationArg, i);
    expense -= benefit;
    future.push({ x, y: expense });

    totalExpenses += expense;

    if (expense >= remainingAssets) {
      flag = false; // assets ran out before life expectancy
      gap.push({ x: i + retireAge, y: 0 });
      remainingAssets = 0;
    } else {
      remainingAssets -= expense;
      const retirementReturn = remainingAssets * strategyOptions[index].value;
      remainingAssets += retirementReturn;
      totalReturn += retirementReturn;
      gap.push({ x, y: remainingAssets });
    }
  }

  dispatch({
    type: GRAPH_GRAPH_RESULTS,
    payload: { graph: { gap, future, flag } },
  });

  return { totalReturn, totalExpenses };
};

// Retirement gap — exact formula from utils.ts :: calculateRetirementGap
export const calculateRetirementGap = ({
  retireAge,
  lifeExp,
  strategyIndex,
  expense_home,
  retirementAssests,
  socialSecurity,
  inflation: inflationArg = inflation,
  dispatch,
}) => {
  const { totalReturn, totalExpenses } = calculateAfterRetirementReturns({
    lifeExp,
    retireAge,
    retirementAssests,
    strategyIndex,
    expense_home,
    socialSecurity,
    inflation: inflationArg,
    dispatch,
  });

  const retirementGap = retirementAssests + totalReturn - totalExpenses;

  dispatch({
    type: GRAPH_GRAPH_RESULTS,
    payload: {
      results: {
        futureExpenses: totalExpenses,
        retireReturns: totalReturn,
        retirementGap,
      },
    },
  });

  return retirementGap;
};

// ---------------------------------------------------------------------------
// 6. APP-RELATED UTILS (from packages/common/functions/appRelatedUtils.ts)
// ---------------------------------------------------------------------------

export const getCurrentAge = (dob) => {
  // moment().diff(dob, 'years') — replicated without moment dependency
  const birth = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age -= 1;
  }
  return age;
};

const getConfig = (title, min, max, type) => ({ title, min, max, type });

// Initialise slider options — no API call for unauthenticated users
// Exact logic from appRelatedUtils.ts :: getEditAssumptionsInitialState
// For Next.js public calculator pages we always call with (null, null)
export const getEditAssumptionsInitialState = async (token, userData) => {
  const dob = userData?.dob || '1993-01-01';
  const current_age = getCurrentAge(dob);
  const retireValue = userData?.retireAge || RETIRE_AGE.VALUE;
  const lifeExpectancy = userData?.lifeExpectancy || LIFE_EXP.VALUE;
  const contri = userData?.annualContribution || CONTRIBUTION.VALUE;
  const futureExpense = EXPENSES.VALUE; // no API call for public pages
  const openingBalance = userData?.approx_401k_balance || 1000;
  const strategyIndex = userData?.strategy || 0;

  const retireAge = {
    config: getConfig(RETIRE_AGE.TITLE, current_age + 1, RETIRE_AGE.MAX, RETIRE_AGE.TYPE),
    value: retireValue,
  };
  const lifeExp = {
    config: getConfig(LIFE_EXP.TITLE, retireValue + 1, LIFE_EXP.MAX, LIFE_EXP.TYPE),
    value: lifeExpectancy,
  };
  const contribution = {
    config: getConfig(...Object.values(CONTRIBUTION)),
    value: contri,
  };
  const currentAge = {
    config: getConfig(...Object.values(CURRENT_AGE)),
    value: current_age,
  };
  const expenses = {
    config: getConfig(...Object.values(EXPENSES)),
    value: futureExpense,
  };

  const slider_options = {
    currentAge,
    retireAge,
    lifeExp,
    contribution,
    expenses,
  };

  return {
    sliderOptions: slider_options,
    openingBalance,
    strategyIndex,
    expense_home: futureExpense,
    socialSecurity: [],
  };
};

// ---------------------------------------------------------------------------
// 7. HOOKS (from packages/common/hooks/useDidUpdate.ts)
// ---------------------------------------------------------------------------
import { useEffect, useRef } from 'react';

// Skips execution on first render — exact behaviour of componentDidUpdate
export const useDidUpdate = (func, deps, didUpdate = true) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didUpdate) {
      if (didMount.current) {
        func();
      } else {
        didMount.current = true;
      }
    } else {
      func();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
