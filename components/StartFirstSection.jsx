import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const StartFirstSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      {/* Header */}
      <header className="flex items-center justify-between w-full px-8 py-4 bg-white shadow-sm">
        <div className='flex flex-col'>
        <h1 className="text-green-700 text-xl font-bold"><Link href='/'>Better</Link></h1>
        <h1 className="text-gray-700 text-lg">Mortgage</h1>
        </div>
        <div className="flex items-center space-x-4">
        <svg fill="none" height="21" viewBox="0 0 20 21" width="20" xmlns="http://www.w3.org/2000/svg"><title>Phone</title><path clip-rule="evenodd" d="M1.1116 0.0151367H5.00049C5.6116 0.0151367 6.1116 0.516439 6.1116 1.12914C6.1116 2.52165 6.33382 3.85845 6.74493 5.10614C6.86715 5.49604 6.77827 5.9305 6.46715 6.24242L4.02271 8.69323C5.62271 11.8459 8.20049 14.4192 11.3449 16.0345L13.7894 13.5837C14.0116 13.3721 14.2894 13.2607 14.5783 13.2607C14.6894 13.2607 14.8116 13.2718 14.9227 13.3164C16.1672 13.7285 17.5116 13.9513 18.8894 13.9513C19.5005 13.9513 20.0005 14.4526 20.0005 15.0653V18.9532C20.0005 19.5659 19.5005 20.0672 18.8894 20.0672C8.45604 20.0672 0.000488281 11.5896 0.000488281 1.12914C0.000488281 0.516439 0.500488 0.0151367 1.1116 0.0151367ZM3.93382 2.24315C4.00049 3.23461 4.16715 4.20379 4.43382 5.12842L3.10049 6.46522C2.64493 5.12842 2.35604 3.71363 2.25604 2.24315H3.93382ZM14.8894 15.6335C15.8338 15.9008 16.8005 16.0679 17.7783 16.1348V17.7947C16.3116 17.6944 14.9005 17.4047 13.556 16.9591L14.8894 15.6335Z" fill="#017848" fill-rule="evenodd"></path></svg>
          <p className="text-sm font-medium text-black">Need help? Call (415) 523 8837</p>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex flex-col items-center space-y-6 mt-12">
        {/* Betsy Avatar */}
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <Image
            src="/images/betty1.jpg" // Replace with correct path to image
            alt="Betsy"
            width={64}
            height={64}
            className="object-cover"
          />
        </div>

        {/* Betsy's Greeting */}
        <h2 className="text-3xl font-semibold text-black">Hi, I&apos;m Betsy!</h2>
        <p className="text-gray-600 font-semibold text-3xl">What can I help you with?</p>

        {/* Buttons */}
        <div className="space-y-4 w-full max-w-md">
          <button className="w-full py-3 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 transition">
            <span className="flex items-center justify-center space-x-2 text-green-600 font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l9-9 9 9M9 21V9h6v12"
                />
              </svg>
              <span>Buying a home</span>
            </span>
          </button>
          <button className="w-full py-3 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 transition">
            <span className="flex items-center justify-center space-x-2 text-green-600 font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7v10M16 7v10M12 19v-7M12 7V5"
                />
              </svg>
              <span>Refinance my mortgage</span>
            </span>
          </button>
          <button className="w-full py-3 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 transition">
            <span className="flex items-center justify-center space-x-2 text-green-600 font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v8m-3-3h6"
                />
              </svg>
              <span>Get cash from my home</span>
            </span>
          </button>
        </div>

        {/* Statistics */}
        <div className="flex space-x-8 py-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-black">$100B</h3>
            <p className="text-gray-500">home loans funded entirely online</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-black">400K</h3>
            <p className="text-gray-500">customers who chose Better Mortgage</p>
          </div>
        </div>

        {/* New Section: Unlock Benefits */}
        <div className="mt-32 w-full max-w-xl bg-green-50 rounded-lg p-6">
          <p className="text-lg font-medium text-gray-700">
            After a few questions, you&apos;ll unlock:
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2l4-4"
                />
              </svg>
              <span className="text-gray-700">Custom mortgage rates</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v8m-3-3h6"
                />
              </svg>
              <span className="text-gray-700">Exclusive offers</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M10 14h4"
                />
              </svg>
              <span className="text-gray-700">A personalized dashboard</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default StartFirstSection