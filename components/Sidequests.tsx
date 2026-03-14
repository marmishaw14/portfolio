import { PixelImage } from '@/components/ui/pixel-image'

type Sidequest = {
  title: string
  location: string
  image: string
}

const sidequests: Sidequest[] = [
  {
    title: 'Hack 404',
    location: 'Toronto, ON',
    image: '/hackathons-sidequests/hack404.jpeg',
  },
  {
    title: 'Hack the 6ix 2025',
    location: 'Toronto, ON',
    image: '/fr3sh_pfp.jpg',
  },
  {
    title: 'SpurHacks 2025',
    location: 'Waterloo, ON',
    image: '/fr3sh_pfp.jpg',
  },
  {
    title: 'Winnipeg Open Data Datathon 2026',
    location: 'Winnipeg, MB',
    image: '/fr3sh_pfp.jpg',
  },
  {
    title: 'Southern Manitoba Tech Conference Hackathon 2026',
    location: 'Winnipeg, MB',
    image: '/fr3sh_pfp.jpg',
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
              <h3 className="text-center text-xl font-semibold text-white">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
