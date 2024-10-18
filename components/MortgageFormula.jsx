import React from "react";

const MortgageFormula = () => {
  return (
    <div className="p-8 rounded-md shadow-md bg-white">
      {/* Formula Section */}
      <div className="text-center bg-gray-200 p-4 rounded-lg mb-6 text-green-950">
        <h2 className="text-lg font-semibold">Monthly mortgage payments (M)</h2>
        <p className="mt-2 text-xl">
          M = P × <sup>r(1+r)<sup>n</sup></sup> / (1+r)<sup>n</sup> - 1
        </p>
      </div>

      {/* Explanation Section */}
      <div className="space-y-4 mb-8 text-black">
        <h3 className="text-lg font-semibold">Where:</h3>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <strong>M</strong> is monthly mortgage payments
          </li>
          <li>
            <strong>P</strong> is the principal loan amount (the amount you
            borrow)
          </li>
          <li>
            <strong>r</strong> is the monthly interest rate
            <ul className="pl-6 list-disc list-inside">
              <li>
                Annual interest rate divided by 12 and expressed as a decimal
              </li>
              <li>
                For example: if the annual interest rate is{" "}
                <strong>5%</strong>, the monthly rate would be{" "}
                <code>0.05 / 12 = 0.00417</code>, or <code>0.417%</code>
              </li>
            </ul>
          </li>
          <li>
            <strong>n</strong> is the total number of payments in months
            <ul className="pl-6 list-disc list-inside">
              <li>
                For example: for a 30-year loan, <strong>n = 30 × 12 = 360</strong> months
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Example Section */}
      <div className="bg-gray-100 p-4 rounded-lg text-green-900">
        <h4 className="text-lg font-semibold mb-4">Here’s a simple example:</h4>
        <div className="flex space-x-8">
          {/* Input Data */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <p>
              <strong>P</strong> = $200,000
            </p>
            <p>
              <strong>r</strong> = 0.05 / 12 = 0.00417
            </p>
            <p>
              <strong>n</strong> = 30 × 12 = 360
            </p>
          </div>

          {/* Calculation */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <p>
              M = 200,000 × <sup>0.00417(1 + 0.00417)<sup>360</sup></sup> /{" "}
              (1 + 0.00417)<sup>360</sup> - 1
            </p>
            <p className="mt-2 text-2xl font-semibold">M = $1,074 per month</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          The above scenario is for illustrative purposes only. Your actual
          monthly payment will differ.
        </p>
      </div>

      {/* Disclaimer */}
      <p className="mt-6 text-sm text-gray-600">
        This formula assumes a fixed-rate mortgage, where the interest rate
        remains constant throughout the loan term. And remember, you’ll still
        need to add on taxes, insurance, utilities, and HOA fees if applicable.
      </p>
    </div>
  );
};

export default MortgageFormula;
