import React from "react";

const MortgageCalculatorFeatures = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-md shadow-md">
      {/* How is Better’s mortgage calculator different? */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black">How is Better’s mortgage calculator different?</h2>

        {/* Section 1: Shows your payments with taxes and insurance */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-black">This mortgage calculator shows your payments with taxes and insurance</h3>
          <p className="text-gray-700 mb-4">
            The property taxes you contribute are used to finance the services provided by your local government to the community. 
            These services encompass schools, libraries, roads, parks, water treatment, police, and fire departments. Even after your 
            mortgage has been fully paid, you will still need to pay property taxes. If you neglect your property taxes, you run the 
            risk of losing your home to your local tax authority.
          </p>
          <p className="text-gray-700 mb-4">
            Your lender will usually require you to have homeowners insurance while you’re settling your mortgage. This is a common practice 
            among lenders because they understand that nobody wants to continue paying a mortgage on a home that’s been damaged or destroyed.
          </p>
          <p className="text-gray-700 mb-4">
            Here’s an interesting fact: Once you fully own your home, the choice to maintain homeowners insurance is entirely up to you. 
            However, to ensure your home is protected against damages caused by fires, lightning strikes, and natural disasters that are 
            common in your area, it is highly recommended to keep it. Therefore, always factor in these costs when using a Mortgage Calculator.
          </p>
        </div>

        {/* Section 2: Shows your mortgage costs with PMI */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-black">This mortgage calculator shows your mortgage costs with PMI</h3>
          <p className="text-gray-700 mb-4">
            PMI, an abbreviation for private mortgage insurance, aids potential homeowners in qualifying for a mortgage without the 
            necessity of a 20% down payment. By opting for a lower down payment and choosing a mortgage with PMI, you can purchase a home 
            sooner, begin accruing equity, and keep cash available for future needs. This can all be calculated using this Mortgage Calculator.
          </p>
          <p className="text-gray-700 mb-4">
            Choosing a mortgage with PMI is a popular option: <a href="#" className="text-green-600 underline">71% of first-time homebuyers</a> 
            had a down payment of less than 20% in July 2021. <a href="#" className="text-green-600 underline">In 2020, the median down payment for first-time homebuyers was just 7%</a>, 
            and it hasn’t risen above 10% since 1989.
          </p>
          <p className="text-gray-700 mb-4">
            PMI is automatically removed from conventional mortgages once your home equity reaches 22%. Alternatively, you can request 
            the removal of PMI once you've accumulated at least 20% home equity.
          </p>
        </div>

        {/* Section 3: Includes HOA Fees */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-black">This mortgage calculator includes HOA fees</h3>
          <p className="text-gray-700 mb-4">
            Homeowners association (“HOA”) fees are typically charged directly by a homeowners association, but as HOA fees come part and 
            parcel with condos, townhomes, and planned housing developments, they’re an essential factor to consider when calculating your 
            mortgage costs.
          </p>
          <p className="text-gray-700 mb-4">
            Homes that share structural elements, such as roofs and walls, or community amenities like landscaping, pools, or BBQ areas, 
            often require homeowners to pay HOA fees for the maintenance of these shared features. It’s important to factor in these costs 
            during your budget planning stage, especially considering that HOA fees typically increase annually. HOAs may also charge 
            additional fees known as ‘special assessments’ to cover unexpected expenses from time to time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculatorFeatures;
