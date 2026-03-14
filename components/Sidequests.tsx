import { PixelImage } from '@/components/ui/pixel-image'

type Sidequest = {
  title: string
  location: string
  image: string
  status: string
}

const sidequests: Sidequest[] = [
  {
    title: 'Sprint to Innovate 2025',
    location: 'Winnipeg, MB',
    image: '/hackathons-sidequests/sprint-to-innovate-2025.jpg',
    status: '1st Place ($5,000)',
  },
  {
    title: 'RampUp Weekend 2025',
    location: 'Winnipeg, MB',
    image: '/hackathons-sidequests/rampup2025.jpg',
    status: 'Finalists',
  },
  {
    title: 'SpurHacks 2025',
    location: 'Waterloo, ON',
    image: '/hackathons-sidequests/spurhacks2025.jpg',
    status: 'Best Web3 and Best Quantum Startup ($7,000)',
  },
  {
    title: 'Hack 404 2025',
    location: 'Toronto, ON',
    image: '/hackathons-sidequests/hack404.jpeg',
    status: 'Participated',
  },
  {
    title: 'Hack the 6ix 2025',
    location: 'Toronto, ON',
    image: '/hackathons-sidequests/hackthe6ix.jpeg',
    status: 'Participated',
  },
  {
    title: 'Winnipeg Open Data Datathon 2026',
    location: 'Winnipeg, MB',
    image: '/hackathons-sidequests/datathon2026.jpeg',
    status: '1st Place',
  },
  {
    title: 'Southern Manitoba Tech Conference Hackathon 2026',
    location: 'Winnipeg, MB',
    image: '/hackathons-sidequests/southernmbtechconf.png',
    status: 'Participated',
  },
]

export default function Sidequests() {
  return (
    <section id="sidequests" className="bg-transparent px-4 py-20 sm:px-6 lg:px-8">
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
              <div className="flex justify-center">
                <PixelImage src={item.image} grid="6x4" />
              </div>
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
