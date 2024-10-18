import React from "react";

const PropertyTaxCalculator = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-md shadow-md">
      {/* How to Use Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black">How to use this mortgage calculator?</h2>
        <p className="text-gray-700 mb-4">
          Play around with different home prices, locations, <a href="#" className="text-green-600 underline">down payments</a>, 
          interest rates, and mortgage lengths to see how they impact your monthly mortgage payments.
        </p>
        <p className="text-gray-700 mb-4">
          Increasing your down payment and decreasing your interest rate and mortgage term length will make your monthly payment go down. 
          Taxes, insurance, and HOA fees will vary by location. If you enter a down payment amount that’s less than 20% of the home price, 
          <a href="#" className="text-green-600 underline">private mortgage insurance (PMI)</a> costs will be added to your monthly mortgage payment. 
          As the costs of utilities can vary from county to county, we’ve included a utilities estimate that you can break down by service. 
          If you’re thinking about buying a condo or into a community with a Homeowners Association (HOA), you can add HOA fees.
        </p>
        <p className="text-gray-700 mb-4">
          The only amounts we haven’t included are the money you’ll need to save for annual home maintenance/repairs or the costs of home improvements. 
          To see how much home you can afford including these costs, take a look at the <a href="#" className="text-green-600 underline">Better home affordability calculator</a>.
        </p>
        <p className="text-gray-700 mb-4">
          Fun fact: <a href="#" className="text-green-600 underline">Property tax rates</a> are extremely localized, so two homes of roughly the same size and quality on either side of a municipal 
          border could have very different tax rates. Buying in an area with a lower property tax rate may make it easier for you to afford a higher-priced home.
        </p>
      </div>

      {/* Property Tax Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-black">Do you know your property tax rate?</h2>
        <p className="text-gray-700 mb-6">
          While exact property tax rates vary by county, it can be helpful to look at taxes on the state level to get an idea for taxes in your state. 
          Here’s a helpful chart from <a href="#" className="text-green-600 underline">Forbes</a> breaking down the Census Bureau’s 2021 American Community Survey 5-year estimate:
        </p>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-md shadow-md">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="p-4 text-left">State</th>
                <th className="p-4 text-left">Median Effective Property Tax Rate</th>
                <th className="p-4 text-left">Mean Effective Property Tax Rate</th>
                <th className="p-4 text-left">Median Home Value</th>
                <th className="p-4 text-left">Median Property Taxes Paid</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {/* Example of Table Rows */}
              <tr className="border-b">
                <td className="p-4">AL</td>
                <td className="p-4">0.41%</td>
                <td className="p-4">0.40%</td>
                <td className="p-4">$157,100</td>
                <td className="p-4">$646</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">AK</td>
                <td className="p-4">1.23%</td>
                <td className="p-4">1.04%</td>
                <td className="p-4">$282,800</td>
                <td className="p-4">$3,464</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">AZ</td>
                <td className="p-4">0.62%</td>
                <td className="p-4">0.63%</td>
                <td className="p-4">$265,600</td>
                <td className="p-4">$1,648</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">AR</td>
                <td className="p-4">0.62%</td>
                <td className="p-4">0.64%</td>
                <td className="p-4">$142,100</td>
                <td className="p-4">$878</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PropertyTaxCalculator;
