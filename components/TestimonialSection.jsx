import React from 'react'
import Image from 'next/image';

const TestimonialSection = () => {
  return (
    <div>
        <section className="flex flex-col lg:flex-row justify-between items-center py-16 px-8 lg:px-24">
        {/* Video or Image Testimonial */}
        <div className="">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/still-quote-Arian.webp" // Replace with your actual image path
              alt="Customer Testimonial"
              width={300}
              height={200}
              className="object-cover w-full"
            />
          </div>

          <div className="flex justify-center space-x-4 mt-8">
        <button className="py-2 px-4 border-2 border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition">Arian</button>
        <button className="py-2 px-4 border-2 border-gray-300 text-black rounded-full hover:bg-gray-300 hover:text-gray-700 transition">Amanda</button>
        <button className="py-2 px-4 border-2 border-gray-300 text-black rounded-full hover:bg-gray-300 hover:text-gray-700 transition">Paul</button>
      </div>
        </div>

        {/* Text Call to Action */}
        <div className="w-full lg:w-1/2 lg:pl-16">
          <h2 className="text-5xl mt-3 lg:text-7xl font-bold text-gray-800 mb-6">
            Find out why we’re better.
          </h2>
          <button className="bg-green-900 text-white py-5 px-6 rounded-full font-bold text-md shadow-lg hover:bg-green-700 transition">
            See all our stories
          </button>
          <div className="mt-4 flex items-center space-x-2">
            <span className="text-green-700">★</span>
            <p className="text-gray-600"><span className='text-black'>Trustpilot</span> Excellent</p>
            <p className="text-gray-600">4.4 out of 5</p>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default TestimonialSection