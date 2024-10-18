export default function MoreResources() {
  return (
    <div className="bg-gray-50">
      <div className="w-full max-w-7xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">More resources</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-2">
              <span className="text-green-600">
                <img src="images/doc-correct.svg" alt="doc-correct" width={70} height={70} />
              </span>
              <h3 className="text-lg font-semibold text-gray-900">
                Get pre-approved to see how much you can borrow
              </h3>
            </div>
            <a href="#" className="text-green-600 font-semibold block mt-4">
              Get started →
            </a>
            <p className="text-gray-600 text-sm mt-2">Won’t impact your credit</p>
          </div>

          <div className="border p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-2">
              <span className="text-green-600">
                <img src="images/downtrend.svg" alt="downtrend" width={70} height={70} />
              </span>
              <h3 className="text-lg font-semibold text-gray-900">See today’s rates in your area</h3>
            </div>
            <a href="#" className="text-green-600 font-semibold block mt-4">
              See rates →
            </a>
          </div>

          <div className="border p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-2">
              <span className="text-green-600">
                <img src="images/calculator.svg" alt="calculator" width={70} height={70} />
              </span>
              <h3 className="text-lg font-semibold text-gray-900">Find out your max homebuying budget</h3>
            </div>
            <a href="#" className="text-green-600 font-semibold block mt-4">
              Try our mortgage calculator →
            </a>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-8">
          *See <a href="#" className="text-blue-600 underline">Better Real Estate discount terms and conditions</a>.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          **The average lifetime savings estimate is based on a comparison of the Freddie Mac Primary Mortgage Market Survey’s (PMMS) 30-year fixed-rate mortgage product with Better Mortgage's own offered rate.
        </p>
      </div>
    </div>
  );
}
