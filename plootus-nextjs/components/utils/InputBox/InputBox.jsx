import React, { useState, useEffect } from 'react';
import {
  formatCommaString,
  isKhaliCheck,
  roundNum,
  removeCommaString,
} from '../../../lib/plootusCommon';
import styles from './InputBox.module.css';

const InputBox = ({ value, openingBalance, handleChange }) => {
  const [val, setVal] = useState(`${formatCommaString(value ? value : 1000)}`);

  useEffect(() => {
    setVal(`${formatCommaString(value ? value : 1000)}`);
  }, [value]);

  const handleInputChange = (e) => {
    let value = e.target.value;
    let stripped = value.replace(/\$|,/g, '');
    let j = 0;
    for (let i = 0; i < stripped.length; i += 1) {
      if (stripped[i] === '0') {
        j += 1;
      } else {
        break;
      }
    }

    stripped = stripped.slice(j);

    if (isKhaliCheck(stripped)) {
      setVal('0');
    }
    if (/^\d+$/.test(stripped)) {
      setVal(`${formatCommaString(stripped)}`);
    }
    stripped = roundNum(removeCommaString(stripped), 0, 0, true, true);
    handleChange(stripped ? stripped : '0');
  };

  return (
    <div className={styles.input}>
      <div className={styles.textContent}>Starting Balance</div>
      <div className={styles.root}>
        <div className={styles.inputIcon}>$</div>
        <input
          defaultValue={openingBalance}
          value={val}
          onChange={handleInputChange}
          className={styles.inputBox}
          placeholder="Starting Balance"
          maxLength={12}
        />
      </div>
    </div>
  );
};

export default InputBox;
