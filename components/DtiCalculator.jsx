import React from 'react';

const DtiCalculator = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 p-8">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        {/* Formula Section */}
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">Formula for calculating your debt-to-income (DTI) ratio:</p>
          <div className="bg-gray-100 rounded-lg p-4 mt-4 flex justify-center items-center space-x-4">
            <div>
            <p className="text-2xl font-semibold text-green-700">
              Monthly Debt Payments
            </p>
            <p className="text-xl font-semibold text-gray-600">_________________________</p>
            <p className="text-2xl font-semibold text-green-700 mb-2">
              Monthly Gross Income
            </p>
            </div>
            <div>
            <p className="text-2xl font-semibold text-gray-800">x 100 = Debt-to-Income Ratio</p>
            </div>
          </div>
        </div>

        {/* Example Section */}
        <div>
          <p className="text-gray-600 text-lg mb-6 text-center">
            Here’s an example of what calculating your DTI might look like:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-lg">
            {/* Debts Section */}
            <div className="p-4 bg-white rounded-lg shadow space-y-3">
              <h3 className="text-lg font-bold text-green-700 mb-2">Debts</h3>
              <p className="text-gray-600">Auto loan <span className="float-right">$350/month</span></p>
              <p className="text-gray-600">Student loans <span className="float-right">$220/month</span></p>
              <p className="text-gray-600">Credit cards <span className="float-right">$130/month</span></p>
              <p className="text-gray-600">Expected housing costs <span className="float-right">$1,800/month</span></p>
              <p className="text-green-700 font-semibold mt-4">
                $2,500 monthly debt obligation
              </p>
            </div>

            {/* Income Section */}
            <div className="p-4 bg-white rounded-lg shadow space-y-3">
              <h3 className="text-lg font-bold text-green-700 mb-2">Income</h3>
              <p className="text-gray-600">Monthly salary <span className="float-right">$5,000/month</span></p>
              <p className="text-gray-600">Monthly side-gig income <span className="float-right">$1,500/month</span></p>
              <p className="text-green-700 font-semibold mt-4">
                $6,500 monthly income
              </p>
            </div>
          </div>

          {/* Calculation Section */}
          <div className="mt-8 text-center">
            <div className='flex justify-center items-center space-x-4'>
            <div>
            <p className="text-3xl text-green-700 font-semibold">
              $2,500
            </p>
            <p className="text-xl font-semibold text-gray-600">_________________________</p>
            <p className="text-3xl text-green-700 font-semibold mb-4">
              $6,500
            </p>
            </div>
            <div>
            <p className="text-2xl text-gray-800 font-bold">x 100 = 38% DTI</p>
            </div>
            </div>
            <p className="text-gray-500 mt-4">
              The above scenario is for illustrative purposes only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DtiCalculator;
