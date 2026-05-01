import React, { useRef, useState, useCallback, useEffect } from 'react';
import useEmployerSearch from '../../../lib/hooks/useEmployerSearch';
import SearchBox401k from '../../utils/SearchBox401kNew';
import Slider2 from '../../utils/Slider2';
import styles from './Strategy.module.css';

const TEXT_BLACK_3 = '#666666';

const formatCommaString = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const roundNum = (num, dec) => {
  return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
};

const Strategy = ({
  setSignupData,
  nextPress,
  signupData,
  prevStep,
}) => {
  const { strategy, approx_401k_bal } = signupData;
  const [_401k_balance, set_401k_balance] = useState(approx_401k_bal || 0);
  const [maxSlider, setmaxSlider] = useState(2000000);
  const [stratValue, setStratValue] = useState(strategy);
  const submitted = useRef(false);
  const [isError, setIsError] = useState(false);
  const [myError, setMyError] = useState(false);
  const [checkValue, setCheck] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [rawInputValue, setRawInputValue] = useState(String(_401k_balance));
  const debounceTimer = useRef(null);

  const employerSearchProps = useEmployerSearch();

  const handlePress = (e) => {
    e.preventDefault();
    submitted.current = true;

    if (stratValue >= 0 && _401k_balance > 0) {
      setSignupData((prevState) => ({
        ...prevState,
        strategy: stratValue,
        approx_401k_bal: _401k_balance,
      }));
      nextPress();
    } else {
      if (_401k_balance === 0) setMyError(true);
      if (stratValue < 0) setIsError(true);
    }
  };

  const handleChange = (idx) => {
    if (idx >= 0) setIsError(false);
    else setIsError(true);
  };

  const handleCheckboxChange = (e) => {
    const newCheckValue = e.target.checked;
    setCheck(newCheckValue);
    if (newCheckValue && employerSearchProps.setLocalData) {
      employerSearchProps.setLocalData((prev) => ({
        ...prev,
        value: '',
        showList: false,
      }));
    }
  };

  const updateBalanceWithDebounce = useCallback(
    (value) => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }

      debounceTimer.current = setTimeout(() => {
        const numValue = parseInt(value, 10) || 0;
        const limitedValue = Math.min(numValue, maxSlider);
        set_401k_balance(limitedValue);

        if (limitedValue > 0) {
          setMyError(false);
        }
      }, 5000);
    },
    [maxSlider]
  );

  const handleBalanceInputChange = (e) => {
    let value = e.target.value;
    value = value.replace(/[^0-9]/g, '');

    if (value === '') {
      setRawInputValue('');
      return;
    }

    setRawInputValue(value);
    updateBalanceWithDebounce(value);
  };

  const handleInputFocus = () => {
    setIsEditing(true);
    setRawInputValue(String(_401k_balance));
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    const numValue = parseInt(rawInputValue, 10) || 0;
    const limitedValue = Math.min(numValue, maxSlider);
    set_401k_balance(limitedValue);

    if (limitedValue === 0 && submitted.current) {
      setMyError(true);
    }

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
  };

  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  const getDisplayValue = () => {
    if (isEditing) {
      return rawInputValue;
    }
    return `$${formatCommaString(roundNum(_401k_balance, 0))}`;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create Account</h1>

      <div className={styles.stepperContainer}>
        <div className={`${styles.step} ${styles.completedStep}`}>
          <div className={styles.stepDot} />
          <span className={styles.stepLabel}>Basic Info</span>
        </div>
        <div className={`${styles.step} ${styles.activeStep}`}>
          <div className={styles.stepDot} />
          <span className={styles.stepLabel}>Strategy</span>
        </div>
        <div className={styles.step}>
          <div className={styles.stepDot} />
          <span className={styles.stepLabel}>Preferences</span>
        </div>
      </div>

      <p className={styles.subtitle}>
        Help us understand your retirement setup for personalized
        recommendations.
      </p>

      <div className={styles.formSection}>
        <div className={styles.formGrid}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Investment Strategy<span className={styles.required}>*</span>
            </label>
            <div className={styles.customSelect}>
              <select
                className={styles.selectBox}
                value={stratValue}
                onChange={(e) => {
                  setStratValue(parseInt(e.target.value));
                  handleChange(parseInt(e.target.value));
                }}
                style={{ color: stratValue === -1 ? TEXT_BLACK_3 : '#1A1A1A' }}
              >
                <option value={-1}>Select Strategy</option>
                <option value={0}>Conservative</option>
                <option value={1}>Moderate</option>
                <option value={2}>Growth</option>
                <option value={3}>Super Growth</option>
                <option value={4}>Super Conservative</option>
              </select>
              <span className={styles.customArrow} />
            </div>
            {isError && submitted.current && (
              <span className={styles.errorText}>Select a strategy</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Employer<span className={styles.required}>*</span>
            </label>
            <SearchBox401k
              value={checkValue ? '' : employerSearchProps.value}
              setSignupData={setSignupData}
              disable={checkValue}
              style1={{ width: '100%' }}
              dontNull={true}
              {...employerSearchProps}
            />

            <label className={styles.checkboxWrap}>
              <input
                type="checkbox"
                checked={checkValue}
                onChange={handleCheckboxChange}
                className={styles.checkbox}
              />
              <span className={styles.checkboxLabel}>
                I don't know my Employer
              </span>
            </label>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Approximate 401k/403b Balance
              <span className={styles.required}>*</span>
            </label>
            <input
              className={styles.input}
              value={getDisplayValue()}
              onChange={handleBalanceInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            {myError && submitted.current && (
              <span className={styles.errorText}>
                Starting Balance cannot be 0
              </span>
            )}
            <Slider2
              initialValue={_401k_balance}
              changeHandler={(value) => {
                set_401k_balance(value);
                setRawInputValue(String(value));
                setMyError(false);
              }}
              minValue={0}
              maxValue={maxSlider}
              stepValue={1000}
              label=""
            />
          </div>
        </div>
      </div>

      <div className={styles.buttonGroup}>
        <button type="button" onClick={prevStep} className={styles.backButton}>
          Back
        </button>
        <button
          type="button"
          onClick={handlePress}
          className={styles.nextButton}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Strategy;
