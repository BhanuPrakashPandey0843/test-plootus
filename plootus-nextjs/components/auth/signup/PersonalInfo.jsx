import React, { useState, useEffect } from 'react';
import styles from './PersonalInfo.module.css';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';

const PersonalInfo = ({ signupData, setSignupData, nextPress, prevStep }) => {
  const initialDob =
    signupData.dob && signupData.dob !== '1993-01-01'
      ? signupData.dob
      : '';

  const [formData, setFormData] = useState({
    firstName: signupData.firstName || '',
    lastName: signupData.lastName || '',
    zipCode: signupData.zipcode || '',
    email: signupData.email || '',
    phoneNumber: signupData.mobileNo || '',
    dob: initialDob,
    gender: signupData.gender || '',
    password: signupData.password || '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (signupData.socialLogin) {
      setFormData((prev) => ({
        ...prev,
        firstName: signupData.firstName || prev.firstName,
        lastName: signupData.lastName || prev.lastName,
        email: signupData.email || prev.email,
      }));
    }
  }, [signupData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let processedValue = value;
    if (name === 'zipCode') {
      processedValue = value.replace(/\D/g, '').slice(0, 5);
    } else if (name === 'phoneNumber') {
      processedValue = value.replace(/\D/g, '').slice(0, 10);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: processedValue,
    }));

    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const checkPasswordValidation = (password) => {
    return {
      length: password.length >= 8,
      number: /\d/.test(password),
      cases: /(?=.*[a-z])(?=.*[A-Z])/.test(password),
    };
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    } else if (!/^[A-Za-z\s]+$/.test(formData.firstName)) {
      errors.firstName = 'Only letters are allowed';
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    } else if (!/^[A-Za-z\s]+$/.test(formData.lastName)) {
      errors.lastName = 'Only letters are allowed';
    }

    if (!formData.zipCode) {
      errors.zipCode = 'Zip code is required';
    } else if (!/^\d{5}$/.test(formData.zipCode)) {
      errors.zipCode = 'Enter valid 5-digit zip code';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Enter a valid email address';
    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Enter valid 10-digit phone number';
    }

    if (!formData.dob) {
      errors.dob = 'Date of birth is required';
    }

    if (!formData.gender) {
      errors.gender = 'Please select your gender';
    }

    if (formData.password) {
      const validations = checkPasswordValidation(formData.password);
      if (!validations.length || !validations.number || !validations.cases) {
        errors.password = 'Password does not meet requirements';
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setSignupData((prev) => ({
        ...prev,
        firstName: formData.firstName,
        lastName: formData.lastName,
        zipcode: formData.zipCode,
        email: formData.email,
        mobileNo: formData.phoneNumber,
        dob: formData.dob,
        gender: formData.gender,
        password: formData.password,
      }));
      nextPress();
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <div className={styles.stepperContainer}>
        <div className={`${styles.step} ${styles.activeStep}`}>
          <div className={styles.stepDot} />
          <span className={styles.stepLabel}>Basic info</span>
        </div>
        <div className={styles.step}>
          <div className={styles.stepDot} />
          <span className={styles.stepLabel}>Strategy</span>
        </div>
        <div className={styles.step}>
          <div className={styles.stepDot} />
          <span className={styles.stepLabel}>Preferences</span>
        </div>
      </div>
      <p className={styles.subtitle}>
        Tell us a little about yourself so we can personalize your experience.
      </p>
      <div className={styles.formSection}>
        <div className={styles.formGrid}>
          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>
                First Name<span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`${styles.input} ${
                  formErrors.firstName ? styles.inputError : ''
                }`}
                placeholder="Enter first name"
              />
              {formErrors.firstName && (
                <span className={styles.errorText}>{formErrors.firstName}</span>
              )}
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>
                Last Name<span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`${styles.input} ${
                  formErrors.lastName ? styles.inputError : ''
                }`}
                placeholder="Enter last name"
              />
              {formErrors.lastName && (
                <span className={styles.errorText}>{formErrors.lastName}</span>
              )}
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>
                Zip Code<span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                className={`${styles.input} ${
                  formErrors.zipCode ? styles.inputError : ''
                }`}
                placeholder="Enter zip code"
                maxLength={5}
              />
              {formErrors.zipCode && (
                <span className={styles.errorText}>{formErrors.zipCode}</span>
              )}
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>
                Date of Birth<span className={styles.required}>*</span>
              </label>
              <TextField
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                error={!!formErrors.dob}
                helperText={formErrors.dob}
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
                className={styles.dateInput}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: '48px',
                    borderRadius: '8px',
                    backgroundColor: 'white',
                    '& fieldset': {
                      borderColor: '#d1d5db',
                    },
                    '&:hover fieldset': {
                      borderColor: '#4361ee',
                    },
                  },
                }}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Email ID<span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`${styles.input} ${
                formErrors.email ? styles.inputError : ''
              }`}
              placeholder="Enter email address"
            />
            {formErrors.email && (
              <span className={styles.errorText}>{formErrors.email}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Phone Number<span className={styles.required}>*</span>
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className={`${styles.input} ${
                formErrors.phoneNumber ? styles.inputError : ''
              }`}
              placeholder="Enter phone number"
              maxLength={10}
            />
            {formErrors.phoneNumber && (
              <span className={styles.errorText}>{formErrors.phoneNumber}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>
              What's your gender?<span className={styles.required}>*</span>
            </label>
            <div className={styles.genderGroup}>
              {['Female', 'Male', 'Other', 'Rather not say'].map((option) => (
                <label key={option} className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="gender"
                    value={option.toLowerCase().replace(/\s+/g, '_')}
                    checked={
                      formData.gender ===
                      option.toLowerCase().replace(/\s+/g, '_')
                    }
                    onChange={handleInputChange}
                    className={styles.radioInput}
                  />
                  <span className={styles.radioButton}></span>
                  <span>{option}</span>
                </label>
              ))}
            </div>
            {formErrors.gender && (
              <span className={styles.errorText}>{formErrors.gender}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Password</label>
            <div className={styles.passwordGroup}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`${styles.input} ${styles.passwordInput}`}
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={styles.hideButton}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <div className={styles.passwordValidation}>
              {(() => {
                const validations = checkPasswordValidation(formData.password);
                return (
                  <>
                    <div
                      className={`${styles.validationItem} ${
                        validations.length ? styles.valid : styles.invalid
                      }`}
                    >
                      {validations.length ? (
                        <CheckIcon style={{ fontSize: 16, color: '#52C41A' }} />
                      ) : (
                        <span className={styles.validationDot}></span>
                      )}
                      Use 8 or more characters
                    </div>
                    <div
                      className={`${styles.validationItem} ${
                        validations.number ? styles.valid : styles.invalid
                      }`}
                    >
                      {validations.number ? (
                        <CheckIcon style={{ fontSize: 16, color: '#52C41A' }} />
                      ) : (
                        <span className={styles.validationDot}></span>
                      )}
                      Use a number (e.g. 1234)
                    </div>
                    <div
                      className={`${styles.validationItem} ${
                        validations.cases ? styles.valid : styles.invalid
                      }`}
                    >
                      {validations.cases ? (
                        <CheckIcon style={{ fontSize: 16, color: '#52C41A' }} />
                      ) : (
                        <span className={styles.validationDot}></span>
                      )}
                      Use upper and lower case letters (e.g. Aa)
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonGroup}>
        <button type="button" onClick={prevStep} className={styles.backButton}>
          Back
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className={styles.nextButton}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
