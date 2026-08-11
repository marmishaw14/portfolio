'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import AnimatedGridPatternDemo from '@/components/AnimatedGridPatternDemo'
import { ShineBorder } from '@/components/ui/shine-border'

export default function Hero() {
  const [imageError, setImageError] = useState(false)

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/10 px-5 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8"
    >
      <AnimatedGridPatternDemo className="opacity-55" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white/45">
              Software Developer · Community Builder · Tech Generalist
            </p>
            <h1 className="max-w-xl text-5xl leading-[0.98] text-white sm:text-6xl lg:text-7xl">
              Hi, I&apos;m
              <br />
              McCauley.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              I build the full stack, developer communities, and interested in exploring how to build data platforms.
              I like{' '}
              <a
                href="https://github.com/marmishaw14/homelab"
                target="_blank"
                rel="noreferrer"
                className="text-white underline decoration-white/35 underline-offset-4 transition-colors hover:decoration-white"
              >
                homelabbing
              </a>{' '}
              too!
              I&apos;m a final-year RRC Polytechnic student studying{' '}
              <a
                href="https://www.rrc.ca/explore/program/application-development-and-delivery/"
                target="_blank"
                rel="noreferrer"
                className="text-white underline decoration-white/35 underline-offset-4 transition-colors hover:decoration-white"
              >
                Application Development and Delivery
              </a>
              , seeking Fall 2026 and Winter 2027 software engineering
              internships/co-ops.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild className="bg-white text-black hover:bg-white/85">
                <a href="mailto:mtarmishaw14@gmail.com">
                  Contact me
                  <Mail aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <a href="#projects">
                  View projects
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              <a
                href="https://github.com/marmishaw14"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/55 transition-colors hover:border-white/35 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/mccauley-armishaw/"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/55 transition-colors hover:border-white/35 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://substack.com/@mccauleyarmishaw"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-white/35"
                aria-label="Substack"
              >
                <Image
                  src="/logos/substack.png"
                  alt=""
                  width={16}
                  height={16}
                  className="h-4 w-4 object-contain opacity-60 transition-opacity hover:opacity-100"
                />
              </a>
              <a
                href="https://x.com/mccauleycodes"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-white/35"
                aria-label="X (Twitter)"
              >
                <Image
                  src="/logos/x_logo.png"
                  alt=""
                  width={16}
                  height={16}
                  className="h-4 w-4 object-contain opacity-60 transition-opacity hover:opacity-100"
                />
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-3">
                <ShineBorder
                  borderWidth={2}
                  duration={10}
                  shineColor="#A07CFE"
                />
                <div className="relative aspect-[4/4.35] overflow-hidden rounded-2xl bg-gradient-to-br from-[#22222a] via-[#272235] to-[#4d3d69]">
                  {!imageError ? (
                    <Image
                      src="/mccauley-avatar.jpg"
                      alt="McCauley Armishaw"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 304px, 384px"
                      priority
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="h-full bg-[radial-gradient(circle_at_75%_20%,rgba(160,124,254,0.35),transparent_42%)]" />
                  )}
                </div>
                <div className="px-2 pb-2 pt-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                    Currently
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    IT Business Analyst
                  </p>
                  <p className="mt-1 text-sm text-white/45">
                    Manitoba Liquor &amp; Lotteries
                  </p>
                </div>
              </div>

              <div className="group absolute -right-3 -top-5 z-20">
                <a
                  href="https://www.cansbridgescholars.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="relative block rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
                  aria-label="Cansbridge Scholars, Meraki Cohort, Fall 2025"
                >
                  <span className="absolute inset-0 rounded-full bg-[#A07CFE]/35 blur-md transition-opacity group-hover:opacity-80" />
                  <span className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/30 bg-black/70 shadow-lg backdrop-blur sm:h-16 sm:w-16">
                    <Image
                      src="/badges/cansbridge.jpg"
                      alt="Cansbridge Scholars"
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </span>
                </a>
                <div className="pointer-events-none absolute right-0 top-[4.5rem] w-52 translate-y-1 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="rounded-xl border border-white/15 bg-black/90 p-3 text-sm text-white shadow-xl backdrop-blur">
                    <p className="font-semibold">Cansbridge Scholars</p>
                    <p className="mt-1 text-white/55">
                      Meraki Cohort · Fall 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="about"
          className="mt-14 grid gap-6 border-t border-white/10 pt-7 sm:grid-cols-3 lg:mt-16"
        >
          {[
            ['Based in', 'Winnipeg, Manitoba'],
            ['Education', 'RRC Polytechnic'],
            ['Currently learning more about...', 'AI · Data'],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-sm font-semibold text-white/35">{label}</p>
              <p className="mt-1 text-base font-semibold text-white/75 sm:text-lg">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
