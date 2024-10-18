import React from 'react';

const ReduceMortgagePayments = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-8">
      <div className="w-full space-y-8">
        <h1 className="text-4xl font-bold text-gray-900">
          How to reduce your monthly mortgage payments?
        </h1>

        <p className="text-gray-700">
          The lower the purchase price of the home, the lower your loan amount will be. But if the seller is less than willing to cut you a deal, you have other options.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">
            Extend the length of your mortgage
          </h2>
          <p className="text-gray-700">
            The more time you have to pay off the mortgage, the less each monthly mortgage payment will be. (In lender-speak, ‘extending the length of your mortgage’ is known as ‘increasing your loan term.’) This is why people often choose a 30-year fixed rate mortgage over one with a 15- or 20-year term.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">
            Increase your down payment
          </h2>
          <p className="text-gray-700">
            The smaller the amount of your mortgage, the smaller your monthly mortgage payments will be. If you’re able to put at least 20% of the home price towards your{' '}
            <a href="#" className="text-blue-600 underline">down payment</a>,
            you’ll be able to avoid PMI (private mortgage insurance). Even if you can’t afford a complete 20% down payment, boosting your down payment will help you get PMI removed sooner.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">
            Get a lower interest rate
          </h2>
          <p className="text-gray-700">
            Increasing your down payment can be one way to help you qualify for a lower interest rate. The amount of your down payment compared to the total amount of the loan is called your{' '}
            <a href="#" className="text-blue-600 underline">loan-to-value ratio (LTV)</a>.
          </p>
          <p className="text-gray-700">
            Depending on your loan amount, a lower LTV may increase the likelihood of you being offered a low interest rate. If you intend on keeping your home for a while, you could consider buying{' '}
            <a href="#" className="text-blue-600 underline">points</a> to reduce your interest rate. Buying points essentially means you agree to pay more upfront costs in exchange for a lower monthly payment.
          </p>
          <p className="text-gray-700">
            If you think you may sell or refinance the home in the first 5–10 years of the mortgage, you could consider an{' '}
            <a href="#" className="text-blue-600 underline">adjustable-rate mortgage (ARM)</a>. An ARM offers a lower fixed interest rate for a set introductory period—typically 5, 7, or 10 years. Once the set introductory period ends, the interest rate adjusts (interest rate may increase after consummation). The introductory interest rate for ARMs is typically lower than the interest rate for a conventional fixed-rate mortgage which could make it a great way to save on interest if you know you won’t keep the mortgage for long.
          </p>
          <p className="text-gray-700">
            If you’re not planning on buying a home for a while, improving your credit score is a tried and true way of increasing your chances of qualifying for a lower interest rate. By reducing your{' '}
            <a href="#" className="text-blue-600 underline">debt-to-income ratio (DTI)</a>, lenders will see that you can comfortably afford your mortgage and may be more willing to offer a lower interest rate.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ReduceMortgagePayments;
