import React from 'react';
import axios from 'axios';
import Header from '../header/Header';
import { useState } from 'react';
// import Form from 'react-bootstrap/Form';


export const ConvDeMoneda = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  const convertCurrency = async () => {
    try {
      const response = await axios.get(
        `https://api.exchangeratesapi.io/latest?base=${fromCurrency}&symbols=${toCurrency}`
      );
      const rate = response.data.rates[toCurrency];
      const converted = amount * rate;
      setConvertedAmount(converted.toFixed(2));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <> <Header />
       <h1>Convertidor</h1>
       <div className="container">
      <div className="form-group">
        <label htmlFor="amount">Monto:</label>
        <input
          type="number"
          id="amount"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="fromCurrency">De:</label>
        <select
          id="fromCurrency"
          className="form-control"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="toCurrency">Para:</label>
        <select
          id="toCurrency"
          className="form-control"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
      <button className="btn btn-primary" onClick={convertCurrency}>
        Convert
      </button>
      {convertedAmount && (
        <div className="mt-3">
          <p>Converted Amount: {convertedAmount}</p>
        </div>
      )}
    </div>
    </>
  );
}

export default ConvDeMoneda;