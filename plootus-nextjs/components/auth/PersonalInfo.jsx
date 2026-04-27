import React, { useState } from 'react';
import styles from './PersonalInfo.module.css';

const PersonalInfo = ({ signupData, setSignupData, nextPress, prevStep }) => {
  const [formData, setFormData] = useState({
    firstName: signupData.firstName || '',
    lastName: signupData.lastName || '',
    zipCode: signupData.zipcode || '',
    email: signupData.email || '',
    phoneNumber: signupData.mobileNo || '',
    dob: signupData.dob && signupData.dob !== '1993-01-01' ? signupData.dob : '',
    gender: signupData.gender || '',
    password: signupData.password || '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;
    if (name === 'zipCode') processedValue = value.replace(/\D/g, '').slice(0, 5);
    if (name === 'phoneNumber') processedValue = value.replace(/\D/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, [name]: processedValue }));
    setFormErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!/^\d{5}$/.test(formData.zipCode)) errors.zipCode = 'Enter valid 5-digit zip code';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Enter a valid email address';
    if (!/^\d{10}$/.test(formData.phoneNumber)) errors.phoneNumber = 'Enter valid 10-digit phone number';
    if (!formData.dob) errors.dob = 'Date of birth is required';
    if (!formData.gender) errors.gender = 'Please select your gender';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
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
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <div className={styles.formGrid}>
        <div className={styles.formRow}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>First Name*</label>
            <input name="firstName" value={formData.firstName} onChange={handleInputChange} className={`${styles.input} ${formErrors.firstName ? styles.inputError : ''}`} />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Last Name*</label>
            <input name="lastName" value={formData.lastName} onChange={handleInputChange} className={`${styles.input} ${formErrors.lastName ? styles.inputError : ''}`} />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Zip Code*</label>
            <input name="zipCode" value={formData.zipCode} onChange={handleInputChange} className={`${styles.input} ${formErrors.zipCode ? styles.inputError : ''}`} />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Date of Birth*</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} className={`${styles.input} ${formErrors.dob ? styles.inputError : ''}`} />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Email*</label>
          <input name="email" value={formData.email} onChange={handleInputChange} className={`${styles.input} ${formErrors.email ? styles.inputError : ''}`} />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Phone Number*</label>
          <input name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} className={`${styles.input} ${formErrors.phoneNumber ? styles.inputError : ''}`} />
        </div>
      </div>
      <div className={styles.buttonGroup}>
        <button type="button" onClick={prevStep} className={styles.backButton}>Back</button>
        <button type="button" onClick={handleSubmit} className={styles.nextButton}>Next</button>
      </div>
    </div>
  );
};

export default PersonalInfo;
