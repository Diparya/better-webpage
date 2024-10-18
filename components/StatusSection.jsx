export default function StatusSection() {
    return (
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          
          {/* Left Side: Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">The status quo is broken</h2>
            <p className="text-md text-gray-700 mb-6 mr-3">
              The traditional processes around homeownership are opaque and stressful. 
              Fees aren’t transparent and some are simply outrageous in size. 
              Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. 
              It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
            </p>
            <a 
              href="#" 
              className="inline-block px-6 py-3 text-white bg-green-700 hover:bg-green-600 rounded-md font-semibold"
            >
              Read Vishal’s story
            </a>
          </div>
          
          {/* Right Side: Image with Play Button */}
          <div className="md:w-1/2 relative">
            <img
              src="images/vishal-mission.jpg" // Replace this with your actual image URL
              alt="Vishal Garg"
              className="rounded-lg shadow-lg w-full"
            />
            
            {/* Play Button Overlay */}
            <a 
              href="#" 
              className="absolute inset-0 flex justify-center items-center text-white"
            >
              <div className="bg-transparent border p-4 rounded-full shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-5.197 3.034A1 1 0 018 13.304V7.697a1 1 0 011.555-.832l5.197 3.034a1 1 0 010 1.664z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }
  