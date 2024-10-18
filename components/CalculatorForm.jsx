'use client'
import React, { useState } from 'react';

export default function CalculatorForm() {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const P = parseFloat(amount);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;
    const payment = (P * r) / (1 - Math.pow(1 + r, -n));
    setResult(payment.toFixed(2));
  };

  return (
    <form onSubmit={calculate} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Loan Amount</label>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          type="number"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Interest Rate (%)</label>
        <input
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          type="number"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Loan Term (Years)</label>
        <input
          value={years}
          onChange={(e) => setYears(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          type="number"
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
      >
        Calculate
      </button>

      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold">Your Monthly Payment: ${result}</h3>
        </div>
      )}
    </form>
  );
}
