import React from 'react';
import ExchangeRatesToday from './ExchangeRatesToday';
import ExchangeRatesDate from './ExchangeRatesDate';
import '../../css/ExchangeRates.css';

const ExchangeRates = () => {
  return (
    <div className="exchange-rates-container">
      <div className="date-container">
        <ExchangeRatesDate />
      </div>
      <div className="today-container">
        <ExchangeRatesToday />
      </div>
    </div>
  );
};

export default ExchangeRates;