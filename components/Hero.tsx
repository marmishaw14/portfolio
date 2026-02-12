'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Hero() {
  const [imageError, setImageError] = useState(false)

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r text-white text-white bg-clip-text text-transparent">
              Hi, I'm McCauley.
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 mb-8">
              Software Developer and Community Builder
            </p>
            <p className="text-xl md:text-3xl text-gray-200 mb-8">
              Summer 2026 Internship (SWE)
            </p>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0">
              I ship software for non-profits and small businesses, and I build developer communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 bg-primary-100 text-black rounded-lg transition-colors font-semibold"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Right side - Image and headline */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl border-4 border-gray-600 bg-gray-800">
                {!imageError ? (
                  <Image
                    src="/mccauley-avatar.jpg"
                    alt="McCauley"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-800 to-primary-900">
                    <span className="text-gray-400 text-lg">Add your photo</span>
                  </div>
                )}
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-8 text-white text-center max-w-md">
              Application Development and Delivery Student
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
