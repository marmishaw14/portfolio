'use client'

import Image from 'next/image'
import { useState } from 'react'
import AnimatedGridPatternDemo from '@/components/AnimatedGridPatternDemo'

export default function Hero() {
  const [imageError, setImageError] = useState(false)

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-4 pt-16 sm:px-6 lg:px-8"
    >
      <AnimatedGridPatternDemo className="opacity-70" />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r text-white text-white bg-clip-text text-transparent">
              Hi, I'm McCauley.
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 mb-8">
              Software Developer and Community Builder
            </p>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Seeking Summer 2026 SWE Internships
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
              <div className="group absolute -top-7 -right-7">
                <a
                  href="https://www.cansbridgescholars.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="relative block"
                  aria-label="Cansbridge Scholars"
                >
                  <span className="absolute inset-0 rounded-full bg-white/30 blur-md transition-opacity group-hover:opacity-80" />
                  <span className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-white/30 bg-black/70 shadow-lg backdrop-blur">
                    <Image
                      src="/badges/cansbridge.jpg"
                      alt="Cansbridge Scholars badge"
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </span>
                </a>
                <div className="pointer-events-none absolute right-0 top-20 w-56 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="rounded-lg border border-white/15 bg-black/80 p-3 text-md text-white shadow-xl backdrop-blur">
                    <p className="font-bold">Cansbridge Scholars</p>
                    <p className="mt-1 text-white/70">
                      Meraki Cohort (Fall 2025)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-3xl md:text-3xl font-bold mt-8 text-white text-center max-w-md">
              Application Development and Delivery @ RRC Polytechnic
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
