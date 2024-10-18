'use client';
import React, { useState } from 'react';

const PaymentBreakdown = () => {
  // Set the payment values in state
  const [principal, setPrincipal] = useState(1517);
  const [taxes, setTaxes] = useState(265);
  const [insurance, setInsurance] = useState(132);
  const [hoaFees, setHoaFees] = useState(132);
  const [utilities, setUtilities] = useState(100);

  // Total payment
  const totalPayment = principal + taxes + insurance + hoaFees + utilities;

  // Calculate percentage widths for bars
  const principalPercent = (principal / totalPayment) * 100;
  const taxesPercent = (taxes / totalPayment) * 100;
  const insurancePercent = (insurance / totalPayment) * 100;
  const hoaFeesPercent = (hoaFees / totalPayment) * 100;
  const utilitiesPercent = (utilities / totalPayment) * 100;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-4 text-black text-center">Monthly payment breakdown</h2>

      {/* Total Amount */}
      <p className="text-5xl font-bold mb-6 text-black text-center">${totalPayment}/mo</p>

      {/* Chart and labels */}
      <div className="relative flex items-center mb-6 w-full mx-auto" style={{ maxWidth: '1200px' }}>
        {/* Dynamic Chart Bars */}
        <div className="h-6 bg-green-600 rounded-full" style={{ width: `${principalPercent}%` }}></div>
        <div className="h-6 bg-purple-500 rounded-full" style={{ width: `${taxesPercent}%` }}></div>
        <div className="h-6 bg-indigo-400 rounded-full" style={{ width: `${insurancePercent}%` }}></div>
        <div className="h-6 bg-yellow-400 rounded-full" style={{ width: `${hoaFeesPercent}%` }}></div>
        <div className="h-6 bg-red-400 rounded-full" style={{ width: `${utilitiesPercent}%` }}></div>
      </div>

      {/* Payment Breakdown with Input Fields */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex justify-between items-center mb-4">
          <label className="text-green-600 text-lg">Principal & interest</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="border border-gray-300 rounded-md p-1 w-32 text-right text-black"
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <label className="text-purple-500 text-lg">Property taxes</label>
          <input
            type="number"
            value={taxes}
            onChange={(e) => setTaxes(Number(e.target.value))}
            className="border border-gray-300 rounded-md p-1 w-32 text-right text-black"
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <label className="text-indigo-400 text-lg">Homeowners insurance</label>
          <input
            type="number"
            value={insurance}
            onChange={(e) => setInsurance(Number(e.target.value))}
            className="border border-gray-300 rounded-md p-1 w-32 text-right text-black"
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <label className="text-yellow-400 text-lg">HOA fees</label>
          <input
            type="number"
            value={hoaFees}
            onChange={(e) => setHoaFees(Number(e.target.value))}
            className="border border-gray-300 rounded-md p-1 w-32 text-right text-black"
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <label className="text-red-400 text-lg">Utilities</label>
          <input
            type="number"
            value={utilities}
            onChange={(e) => setUtilities(Number(e.target.value))}
            className="border border-gray-300 rounded-md p-1 w-32 text-right text-black"
          />
        </div>
      </div>

      {/* Button */}
      <div className="mt-6 text-center">
        <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg">
          Copy estimate link
        </button>
      </div>
    </div>
  );
};

export default PaymentBreakdown;
