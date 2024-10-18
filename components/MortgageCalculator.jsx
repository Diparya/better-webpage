'use client'

import React, { useState, useEffect } from 'react';

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(300000); // Default home price
  const [downPaymentPercent, setDownPaymentPercent] = useState(20); // Down payment percent
  const [loanLength, setLoanLength] = useState(30); // Loan length (years)
  const [interestRate, setInterestRate] = useState(6.5); // Interest rate
  const [monthlyPayment, setMonthlyPayment] = useState(0); // Monthly payment

  // Convert down payment percentage to actual down payment value
  const downPayment = (homePrice * downPaymentPercent) / 100;
  
  // Loan principal is the home price minus the down payment
  const loanPrincipal = homePrice - downPayment;

  // Function to calculate the monthly mortgage payment using the standard formula
  const calculateMonthlyPayment = (principal, annualInterestRate, years) => {
    const monthlyInterestRate = annualInterestRate / 100 / 12;
    const numberOfPayments = years * 12;
    return (
      principal * 
      (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)
    );
  };

  // Update the monthly payment whenever the input values change
  useEffect(() => {
    const payment = calculateMonthlyPayment(loanPrincipal, interestRate, loanLength);
    setMonthlyPayment(payment.toFixed(2)); // Update the monthly payment with 2 decimal precision
  }, [homePrice, downPaymentPercent, loanLength, interestRate]);

  return (
    <div className="bg-green-50 min-h-screen py-10 px-6">
      <div className="w-full mx-auto max-w-screen-xl px-6">
        <h1 className="text-3xl font-semibold mb-6 text-black">Mortgage Calculator</h1>
        <p className="text-gray-600 mb-8">
          Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.
        </p>

        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="text-black">
            <p className="text-lg font-medium">Home price</p>
            <div className="text-3xl font-bold">${homePrice.toLocaleString()}</div>
          </div>
          <div className="text-black">
            <p className="text-lg font-medium">Monthly payment</p>
            <div className="text-3xl font-bold">${monthlyPayment}/mo</div>
          </div>
        </div>

        <div className="mb-6">
          <input
            type="range"
            className="w-full"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
            min="50000"
            max="1000000"
            step="1000"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="zipcode">
              ZIP code
            </label>
            <input
              type="text"
              id="zipcode"
              value="452002"
              className="block w-full border-gray-300 rounded-md shadow-sm text-xl text-black"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="downpayment">
              Down payment
            </label>
            <div className="flex">
              <input
                type="text"
                id="downpayment"
                value={`$${downPayment.toLocaleString()}`}
                className="block w-3/4 border-gray-300 rounded-md shadow-sm text-xl text-black"
                readOnly
              />
              <input
                type="number"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="block w-1/4 border-gray-300 rounded-md shadow-sm text-xl text-center text-black"
              />
              <span className="ml-1">%</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="interestRate">
              Interest rate
            </label>
            <input
              type="number"
              id="interestRate"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="block w-full border-gray-300 rounded-md shadow-sm text-xl text-black"
              step="0.01"
              min="0"
              max="20"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="loanLength">
              Length of loan
            </label>
            <select
              id="loanLength"
              value={loanLength}
              onChange={(e) => setLoanLength(Number(e.target.value))}
              className="block w-full border-gray-300 rounded-md shadow-sm text-xl text-black"
            >
              <option value="30">30 years</option>
              <option value="15">15 years</option>
            </select>
          </div>
        </div>

        <button className="w-full bg-green-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-green-700">
          Get pre-approved
        </button>
      </div>
    </div>
  );
};

export default MortgageCalculator;
