import React, { useRef, useEffect } from 'react';
import {
  generalMoney,
  BLUE_PLOOT,
} from '../../../../lib/plootusCommon';

const strategy_constants = [
  { label: 'Super Conservative' },
  { label: 'Conservative' },
  { label: 'Moderate' },
  { label: 'Growth' },
  { label: 'Super Growth' },
];
import styles from './RetirementStatus.module.css';
import { useSelector, useDispatch } from 'react-redux';

// Custom hook to mimic useDidUpdate from @plootus/common
function useDidUpdate(callback, deps) {
  const hasMount = useRef(false);
  useEffect(() => {
    if (hasMount.current) {
      callback();
    } else {
      hasMount.current = true;
    }
  }, deps);
}

const andContribution = (value) =>
  value
    ? `and increase the Annual Contribution to ${generalMoney(value)} per year`
    : '';
const andRetireMsg = (value) =>
  value ? `and increase the Retirement age to ${value}` : '';
const andStrategyMsg = (value) =>
  value ? `and change the Strategy to ${strategy_constants[value].label}` : '';

const lifExpMsg = (value) =>
  `while keeping all other inputs same. This is will grow retirement assets that will last until age ${value} years.`;

const ContributionMessage = ({
  contribution,
  lifeExp,
  retireAge,
  strategy,
}) => {
  return (
    <p
      className={styles.msg}
    >{`Increase the Annual Contribution to ${generalMoney(
      contribution
    )} per year, ${andRetireMsg(retireAge)} ${andStrategyMsg(
      strategy
    )}${lifExpMsg(lifeExp)}`}</p>
  );
};

const RetireAgeMessage = ({ contribution, lifeExp, retireAge, strategy }) => {
  return (
    <p
      className={styles.msg}
    >{`Increase the Retirement Age to ${retireAge}, ${andContribution(
      contribution
    )} ${andStrategyMsg(strategy)} ${lifExpMsg(lifeExp)}`}</p>
  );
};

const StrategyMessage = ({ contribution, lifeExp, retireAge, strategy }) => {
  return (
    <p className={styles.msg}>{`Change the Strategy to ${
      strategy_constants[strategy].label
    },${andContribution(contribution)} ${andRetireMsg(retireAge)} ${lifExpMsg(
      lifeExp
    )}`}</p>
  );
};

const selectMessage = (type, values) => {
  switch (type) {
    case 'contribution':
      return <ContributionMessage {...values} />;

    case 'retireAge':
      return <RetireAgeMessage {...values} />;

    case 'strategy':
      return <StrategyMessage {...values} />;
    default:
      return null;
  }
};

const WarningMessage = ({
  OR,
  type,
  values,
  stateData,
  index,
  setIndex,
  setModalOpen,
  setLoading,
  setstateData,
}) => {
  const editAssumptions = useSelector((state) => state.graphReducer);
  const dispatch = useDispatch();
  
  useDidUpdate(() => {
    if (stateData.index === index && stateData.submit) {
      handlePress();
    }
  }, [stateData]);

  const handlePress = async () => {
    // Ported updateProfile logic if needed, but for now we'll just mock or use the existing one if available in common
    // If updateProfile is not available, we can just update the local state.
    const updatedEditAssumtions = { ...editAssumptions };
    const updatedSliderOptions = {
      ...updatedEditAssumtions.sliderOptions,
    };

    Object.keys(values).forEach((key) => {
      if (key === 'strategy') {
        updatedEditAssumtions.strategyIndex = values.strategy;
      } else {
        const updatedSlider = {
          ...updatedSliderOptions[key],
        };
        updatedSlider.value = values[key];
        updatedSliderOptions[key] = updatedSlider;
        updatedEditAssumtions.sliderOptions = updatedSliderOptions;
      }
    });

    // Mocking updateProfile success
    dispatch({ type: 'GENERAL_GRAPH', payload: { ...updatedEditAssumtions } });
    setLoading(false);
    setModalOpen(false);
    setstateData((prev) => ({ ...prev, submit: false, index: null }));
  };

  return (
    <div>
      {OR ? (
        <div
          style={{
            textAlign: 'center',
            padding: '10px 0px',
            color: BLUE_PLOOT,
            fontSize: '18px',
            fontWeight: 'bold',
          }}
        >
          OR
        </div>
      ) : null}
      <div style={{ display: 'flex', cursor: 'pointer' }}>
        <div className={styles.circleDiv} onClick={() => setIndex()}>
          <div
            className={stateData.index === index ? styles.circleRadio : styles.radio}
          />
        </div>
        <div className={styles.warningContainer} onClick={() => setIndex()}>
          {selectMessage(type, {
            ...values,
            lifeExp: editAssumptions.sliderOptions?.lifeExp.value,
          })}
        </div>
      </div>
    </div>
  );
};

export default WarningMessage;
