import Image from 'next/image'

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
    description: 'Developing tools and applications for the largest Linux community on Discord (20,000+ users).',
    duration: 'Apr 2025 - Present',
    location: 'Charlotte, NC (Remote)',
    logo: '/logos/all_things_linux.png',
  },
  {
    title: 'Developer Relations',
    organization: 'Builders League',
    description: "Hosted hackathons and connected with developer communities.",
    duration: 'July 2025 - January 2026',
    location: 'Winnipeg, MB (On-site)',
    logo: '/logos/builders_league_logo.png',
  },
  {
    title: 'Director of Sponsorships',
    organization: 'Canadian University Software Engineering Conference 2026',
    description: "Promoted to Director of Sponsorships from Sponsorship team to lead communication between event sponsors and representatives.",
    duration: 'November 2025 - January 2026',
    location: 'Montreal, QC (Hybrid)',
    logo: '/logos/cusec_2026_logo.jpeg',
  },
  {
    title: 'Scholar',
    organization: 'Cansbridge Scholars',
    description: 'Learned the ropes of intrapreneurship and entrepreneurship with a community of ambitious, brave, and kind individuals.',
    duration: 'September 2025 - Present',
    location: 'San Francisco, CA (Remote)',
    logo: '/logos/cansbridge.jpg',
  },
  {
    title: 'Treasurer & Web Developer',
    organization: 'Bits and Bytes Association',
    description: "Managing the club's finances and securing financial partnerships. Also currently maintaining the club website.",
    duration: 'December 2025 - Present',
    location: 'Winnipeg, MB',
    logo: '/logos/bits_and_bytes_logo.png',
  },
  {
    title: 'President',
    organization: 'Bits and Bytes Association',
    description: "Led and directed the BBA's vision and initiatives for the Winter 2025 and Fall 2025 terms.",
    duration: 'December 2024 - December 2025',
    location: 'Winnipeg, MB',
    logo: '/logos/bits_and_bytes_logo.png',
  },
  {
    title: 'Vice President',
    organization: 'Bits and Bytes Association',
    description: "Collaborated closely with the President for effective execution of the BBA's goals.",
    duration: 'December 2023 - July 2024',
    location: 'Winnipeg, MB',
    logo: '/logos/bits_and_bytes_logo.png',
  },
  {
    title: "President's Student Leadership Program Fellow",
    organization: 'James W. Burns Leadership Institute (Asper School of Business)',
    description: "Selected as 1 of 20 post-secondary students to participate in the University of Manitoba's President's Student Leadership Program Fellowship.",
    duration: 'April 2025 - Present',
    location: 'Winnipeg, MB',
    logo: '/logos/asper_logo.png',
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
