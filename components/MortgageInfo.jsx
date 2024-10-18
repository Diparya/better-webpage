import React from 'react';

const MortgageInfo = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 p-8 lg:-mt-40 lg:-mb-56">
      {/* First Section */}
      <div className="mb-8 w-full">
        <h2 className="text-3xl font-bold mb-4 text-black">How does a mortgage calculator help me?</h2>
        <p className="text-gray-700 text-md">
          When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget. A mortgage calculator helps you understand the monthly cost of a home. And ours will allow you to enter different down payments and interest rates to help determine what is affordable for you.
        </p>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 mb-8" />

      {/* Second Section */}
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-4 text-black">How much monthly mortgage payment can I afford?</h2>
        <p className="text-gray-700 text-md mb-4">
          Lenders determine how much you can afford on a monthly housing payment by calculating your 
          <a href="#" className="text-green-600 underline"> debt-to-income ratio (DTI)</a>. 
          The maximum DTI you can have in order to qualify for most mortgage loans is often between 45-50%, with your anticipated housing costs included.
        </p>
        <p className="text-gray-700 text-md">
          Your DTI is the balance between your income and your debt. It helps lenders understand how safe or risky it is for them to approve your loan. A DTI ratio represents how much of your gross monthly income is spoken for by creditors, and how much of it is left over to you as disposable income. It’s most commonly written as a percentage. For example, if you pay half your monthly income in debt payments, you would have a DTI of 50%.
        </p>
      </div>
    </div>
  );
};

export default MortgageInfo;
