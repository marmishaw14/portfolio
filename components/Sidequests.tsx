'use client'

import { PixelImage } from '@/components/ui/pixel-image'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'

type Sidequest = {
  title: string
  location: string
  images: string[]
  status: string
  imageFit?: 'cover' | 'contain'
  imageFrameClassName?: string
}

const sidequests: Sidequest[] = [
  {
    title: 'Sprint to Innovate 2025',
    location: 'Winnipeg, MB',
    images: [
      '/hackathons-sidequests/sprint2025.jpg',
      '/hackathons-sidequests/sprint2025-02.jpg',
      '/hackathons-sidequests/sprint2025-03.jpg',
      '/hackathons-sidequests/sprint2025-04.jpg',
    ],
    status: '1st Place ($5,000)',
    imageFit: 'cover',
    imageFrameClassName: 'w-full max-w-[21rem] sm:max-w-[24rem] md:max-w-[28rem]',
  },
  {
    title: '.devHacks 2025',
    location: 'Winnipeg, MB',
    images: ['/hackathons-sidequests/devhacks2025-01.jpg', '/hackathons-sidequests/devhacks2025-02.jpg', '/hackathons-sidequests/devhacks2025-03.jpg'],
    status: 'Participated'
  },
  {
    title: 'Winnipeg Open Data Datathon 2025',
    location: 'Winnipeg, MB',
    images: ['/hackathons-sidequests/datathon2025.jpg','/hackathons-sidequests/datathon2025-02.jpg', '/hackathons-sidequests/datathon2025-03.jpg','/hackathons-sidequests/datathon2025-04.jpg'],
    status: 'Participated'
  },
  {
    title: 'UMCSSA Capture the Flag 2025',
    location: 'Winnipeg, MB',
    images: ['/hackathons-sidequests/umcssa-ctf-01.jpg','/hackathons-sidequests/umcssa-ctf-02.jpg'],
    status: 'Participated'
  },
  {
    title: 'RampUp Weekend 2025',
    location: 'Winnipeg, MB',
    images: ['/hackathons-sidequests/rampup2025.jpg','/hackathons-sidequests/rampup2025-02.jpg', '/hackathons-sidequests/rampup2025-03.jpg'],
    status: 'Finalists'
  },
  {
    title: 'SpurHacks 2025',
    location: 'Waterloo, ON',
    images: ['/hackathons-sidequests/spurhacks2025.jpg', '/hackathons-sidequests/spurhacks2025-02.jpg', '/hackathons-sidequests/spurhacks2025-03.jpg'],
    status: 'Best Web3 and Best Quantum Startup ($7,000)'
  },
  {
    title: 'Hack 404 2025',
    location: 'Toronto, ON',
    images: ['/hackathons-sidequests/hack404.jpeg'],
    status: 'Participated'
  },
  {
    title: 'Hack the 6ix 2025',
    location: 'Toronto, ON',
    images: ['/hackathons-sidequests/hackthe6ix.jpeg', '/hackathons-sidequests/hackthe6ix_2.jpg', '/hackathons-sidequests/hackthe6ix_3.jpg', '/hackathons-sidequests/hackthe6ix_4.jpg'],
    status: 'Participated'
  },
  {
    title: 'San Francisco Tech Week 2025',
    location: 'San Francisco, CA',
    images: ['/hackathons-sidequests/sftechweek-01.jpg', '/hackathons-sidequests/sftechweek-02.jpg', '/hackathons-sidequests/sftechweek-03.jpg','/hackathons-sidequests/sftechweek-04.jpg','/hackathons-sidequests/sftechweek-05.jpg','/hackathons-sidequests/sftechweek-06.jpg', '/hackathons-sidequests/sftechweek-07.jpg'],
    status: 'Life changing trip :)'
  },
  {
    title: 'Cansbridge Scholars',
    location: 'Toronto, ON',
    images: ['/hackathons-sidequests/cansbridge-ace-2025.jpg', '/hackathons-sidequests/cansbridge-ace-2025-2.jpg', '/hackathons-sidequests/cansbridge-ace-2025-3.jpg'],
    status: 'Meraki Cohort (Fall 2025)'
  },
  {
    title: 'Winnipeg Stupid Hackathon 2025',
    location: 'Winnipeg, MB',
    images: ['/hackathons-sidequests/winnipeg-stupid-hackathon-2025.jpg','/hackathons-sidequests/winnipeg-stupid-hackathon-2025-02.jpg'],
    status: 'Hosted and Organized'
  },
  {
    title: 'Canadian University Software Engineering Conference 2026 (CUSEC)',
    location: 'Montreal, QC',
    images: ['/hackathons-sidequests/cusec-2026-1.jpg', '/hackathons-sidequests/cusec-2026-2.jpg', '/hackathons-sidequests/cusec-2026-3.jpg', '/hackathons-sidequests/cusec-2026-4.jpg', '/hackathons-sidequests/cusec-2026-5.jpg'],
    status: 'Organizer'
  },
  {
    title: 'Southern Manitoba Tech Conference Hackathon 2026',
    location: 'Winnipeg, MB',
    images: ['/hackathons-sidequests/southernmbtechconf.png', '/hackathons-sidequests/southernmbtechconf.jpeg',],
    status: 'Participated'
  },
  {
    title: 'Winnipeg Open Data Datathon 2026',
    location: 'Winnipeg, MB',
    images: ['/hackathons-sidequests/datathon2026.jpeg'],
    status: '1st Place'
  },
  {
    title: 'UMCSSA Design & Case Sprint 2026',
    location: 'Winnipeg, MB',
    images: ['/hackathons-sidequests/umcssa-design-case-sprint-2026.jpg'],
    status: 'Participated'
  },
  {
    title: 'FCI x LangChain: Building the Future Cities Hackathon',
    location: 'Online',
    images: ['/hackathons-sidequests/zonesmart.png'],
    status: 'Participated'
  },
]

function SidequestImageCarousel({
  images,
  title,
  imageFit = 'cover',
  imageFrameClassName,
}: {
  images: string[]
  title: string
  imageFit?: 'cover' | 'contain'
  imageFrameClassName?: string
}) {
  const [api, setApi] = useState<CarouselApi>()
  const [currentIndex, setCurrentIndex] = useState(0)
  const resolvedFrameClassName =
    imageFrameClassName ?? 'w-full max-w-[20rem] sm:max-w-[22rem] md:max-w-[26rem]'

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap())
    }

    onSelect()
    api.on('select', onSelect)
    api.on('reInit', onSelect)

    return () => {
      api.off('select', onSelect)
      api.off('reInit', onSelect)
    }
  }, [api])

  return (
    <div className="w-full max-w-md">
      <Carousel
        setApi={setApi}
        opts={{ loop: images.length > 1 }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={`${title}-${index}`}>
              <div className="flex justify-center">
                <PixelImage
                  src={image}
                  grid="6x4"
                  objectFit={imageFit}
                  frameClassName={resolvedFrameClassName}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {images.length > 1 && (
          <>
            <CarouselPrevious className="left-2 hidden border-white/20 bg-black/60 text-white hover:bg-black/80 sm:inline-flex" />
            <CarouselNext className="right-2 hidden border-white/20 bg-black/60 text-white hover:bg-black/80 sm:inline-flex" />
          </>
        )}
      </Carousel>

      {images.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={`${title}-dot-${index}`}
              type="button"
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to image ${index + 1} for ${title}`}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-all',
                index === currentIndex
                  ? 'w-6 bg-white'
                  : 'bg-white/35 hover:bg-white/60'
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Sidequests() {

  return (
    <section id="sidequests" className="overflow-x-hidden bg-[#111111] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white">Hackathons & Sidequests</h2>
          <p className="mt-3 max-w-2xl text-lg text-gray-300">
            A visual gallery of my hackathons, sidequests, and journeys.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {sidequests.map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-4">
              <SidequestImageCarousel
                images={item.images}
                title={item.title}
                imageFit={item.imageFit}
                imageFrameClassName={item.imageFrameClassName}
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-400">
                  {item.location} | {item.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
