import React from 'react';

const BuyingHouse = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-8 pb-3 lg:-mb-60">
      <div className="w-full space-y-8">
        <h1 className="text-4xl font-bold text-gray-900">
          How much home can I afford?
        </h1>

        <p className="text-gray-700">
          Once again, the easiest way to do this is with a calculator! To know if a home is in your budget, try out our{' '}
          <a href="#" className="text-blue-600 underline">home affordability calculator</a>. This calculator will take a few inputs from you, like income and savings, and let you know the maximum amount of home you can afford.
        </p>

        <hr className="border-gray-300 my-8" />

        <section>
          <h2 className="text-3xl font-semibold text-gray-900">
            Next steps to buying a house
          </h2>

          <p className="text-gray-700">
            There are{' '}
            <a href="#" className="text-blue-600 underline">8 steps to buying a house</a>{' '}
            and by using this calculator you’ve completed step 2 (calculating your home affordability) and maybe even step 1 (getting your finances in order).
          </p>

          <p className="text-gray-700">
            The next step is getting pre-approved. A mortgage pre-approval with Better Mortgage takes as little as 3 minutes and doesn’t impact your credit score. It’s a free, no-commitment way to see how much home you can buy, the mortgages you qualify for, and the range of interest rates you’ll be offered.
          </p>

          <p className="text-gray-700">
            If you’re ready to buy a home now, our{' '}
            <a href="#" className="text-blue-600 underline">definitive home buying checklist</a>{' '}
            can walk you through everything you need to know to get the home you want. With your Better Mortgage pre-approval letter in hand, you’ll be able to show sellers and real estate agents that you mean business—giving you an edge over homebuyers that don’t have this kind of proof that they’re financially ready to purchase. And by working with an agent from Better Real Estate and funding with Better Mortgage, you’ll save $2,000 on closing costs, and save up to $8,200 on average over the life of your loan.
          </p>
        </section>
      </div>
    </div>
  );
};

export default BuyingHouse;
