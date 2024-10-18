import React from 'react'
import Image from 'next/image';

const QuestionSection = () => {
  return (
    <div className="min-h-screen bg-white px-6 lg:px-12 py-12">
      <div className='flex flex-col lg:flex-row justify-between items-center'>
      {/* Heading Section */}
      <section className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-900 text-start">Got questions?<br/> We've got answers</h2>
      </section>

      {/* Product Navigation Buttons */}
      <div className="flex justify-center mb-10 space-x-4">
        <button className="border-2 border-green-500 text-green-500 rounded-full py-2 px-6 font-semibold hover:bg-green-500 hover:text-white transition">
          Our products
        </button>
        <button className="border-2 border-gray-300 text-gray-500 rounded-full py-2 px-6 font-semibold hover:bg-gray-300 hover:text-gray-700 transition">
          Calculators
        </button>
        <button className="border-2 border-gray-300 text-gray-500 rounded-full py-2 px-6 font-semibold hover:bg-gray-300 hover:text-gray-700 transition">
          Guides & FAQs
        </button>
      </div>
      </div>
      {/* Product Cards Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* First Card */}
        <div className="p-6 bg-green-50 rounded-lg shadow-md flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Buying your first home with Better</h3>
          <p className="mb-6">Get the help you need to make your first home purchase with ease.</p>
          <div className="flex-grow">
            <Image 
              src="/images/first-home.webp" // Replace with your image
              alt="First Home"
              width={500}
              height={300}
              className="rounded-md"
            />
          </div>
          <div className="mt-4">
            <button className="text-green-500 border border-green-500 rounded-full px-4 py-2 hover:bg-green-500 hover:text-white transition">
              ➔
            </button>
          </div>
        </div>

        {/* Second Card */}
        <div className="p-6 bg-green-50 rounded-lg shadow-md flex flex-col">
          <h3 className="text-lg font-semibold mb-4">One Day Mortgage<sup>1</sup></h3>
          <div className='flex'>
          <p className="mb-6">Kick your home loan into hyperdrive. We can deliver a Commitment Letter in a single day.</p>
          <div className="flex-grow">
            <Image 
              src="/images/one-day-mortgage.webp" // Replace with your image
              alt="One Day Mortgage"
              width={500}
              height={400}
              className="rounded-md"
            />
          </div>
          </div>
          <div className="mt-4">
            <button className="text-green-500 border border-green-500 rounded-full px-4 py-2 hover:bg-green-500 hover:text-white transition">
              ➔
            </button>
          </div>
        </div>

        {/* Third Card */}
        <div className="p-6 bg-green-50 rounded-lg shadow-md flex flex-col">
          <div className='flex'>
          <div className="flex-grow">
            <Image 
              src="/images/better-heloc.webp" // Replace with your image
              alt="Better HELOC"
              width={500}
              height={300}
              className="rounded-md"
            />
          </div>
          <div className='ml-4'>
          <h3 className="text-lg font-semibold mb-4">Better HELOC</h3>
          <p className="mb-6">Introducing One Day HELOC—your express lane to home equity cash in as little as 7 days.</p>
          </div>
          </div>
          <div className="mt-4">
            <button className="text-green-500 border border-green-500 rounded-full px-4 py-2 hover:bg-green-500 hover:text-white transition">
              ➔
            </button>
          </div>
        </div>

        {/* Fourth Card */}
        <div className="p-6 bg-green-50 rounded-lg shadow-md flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Insurance</h3>
          <p className="mb-6">Get protection for your home and family with our comprehensive insurance plans.</p>
          <div className="flex-grow">
            <Image 
              src="/images/insurance.webp" // Replace with your image
              alt="Insurance"
              width={400}
              height={300}
              className="rounded-md"
            />
          </div>
          <div className="mt-4">
            <button className="text-green-500 border border-green-500 rounded-full px-4 py-2 hover:bg-green-500 hover:text-white transition">
              ➔
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default QuestionSection