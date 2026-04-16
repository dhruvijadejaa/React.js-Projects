import React, { useState } from 'react';
import validator from 'validator';
import './App.css';

const App = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const validateCreditCard = (value) => {
    if (validator.isCreditCard(value)) {
      setErrorMessage('Valid credit card number');
    } else {
      setErrorMessage('Enter a valid credit card number');
    }
  };

  return (
    <div>
      <label>Enter credit card number:</label>
      <input
        type="text"
        onChange={(e) => validateCreditCard(e.target.value)}
      />
      <br />
      <span>{errorMessage}</span>
    </div>
  );
};

export default App;