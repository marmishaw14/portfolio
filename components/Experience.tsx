import Image from 'next/image'
import AnimatedGridPatternDemo from './AnimatedGridPatternDemo'

type Experience = {
  title: string
  organization: string
  description: string
  duration: string
  location: string
  logo: string
}

const experiences: Experience[] = [
  {
    title: 'Software Developer',
    organization: 'All Things Linux',
    description: 'Developing tools and applications for the largest Linux Discord community',
    duration: 'Apr 2025 - Present',
    location: 'Charlotte, NC (Remote)',
    logo: '/logos/all_things_linux.png',
  },
  {
    title: 'Developer Relations',
    organization: 'Builders League',
    description: 'dhdhdhdh',
    duration: 'July 2025 - January 2026',
    location: 'Winnipeg, MB',
    logo: '/logos/builders_league_logo.png',
  },
  {
    title: 'Director of Sponsorships',
    organization: 'Canadian University Software Engineering Conference 2026',
    description: 'dhdhdhdh',
    duration: 'November 2025 - January 2026',
    location: 'Montreal, QC (Hybrid)',
    logo: '/logos/cusec_2026_logo.jpeg',
  },
  {
    title: 'Scholar',
    organization: 'Cansbridge Scholars',
    description: 'dhdhdhdh',
    duration: 'September 2025 - Present',
    location: 'San Francisco, CA (Remote)',
    logo: '/logos/cansbridge.jpg',
  },
  {
    title: 'Treasurer',
    organization: 'Bits and Bytes Association',
    description: 'dhdhdhdh',
    duration: 'December 2025 - Present',
    location: 'Winnipeg, MB',
    logo: '/logos/bits_and_bytes_logo.png',
  },
]

export default function Experiences() {
  return (
    <section id="experience" className="px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-4xl font-bold text-center">Experience</h2>
        <div className="space-y-4">
          {experiences.map((experience, index) => (
            <details
              key={`${experience.organization}-${index}`}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors open:border-white/30"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="mt-2.5 flex h-14 w-14 items-center justify-center overflow-hidden">
                    <Image
                      src={experience.logo}
                      alt={`${experience.organization} logo`}
                      width={32}
                      height={32}
                      className="h-12 w-12 object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-regular">
                      {experience.title}
                    </h3>
                    <p className="text-white/70">{experience.organization}</p>
                    <p className="mt-1 text-sm text-white/50">
                      {experience.location} · {experience.duration}
                    </p>
                  </div>
                </div>
                <span className="mt-1 text-2xl text-white/60 transition-transform group-open:rotate-180">
                  ⌄
                </span>
              </summary>
              <div className="mt-4 text-white/70">
                {experience.description}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
