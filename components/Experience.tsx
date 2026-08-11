import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Camera,
  Plane,
  Trophy,
} from 'lucide-react'

type ExperienceItem = {
  title: string
  organization: string
  duration: string
  description: string
  logo: string
}

const professionalExperiences: ExperienceItem[] = [
  {
    title: 'IT Business Analyst',
    organization: 'Manitoba Liquor & Lotteries',
    duration: 'May 2026 - Present',
    description:
      'Working across AI research, Power BI reporting, data analysis, and enterprise content migration.',
    logo: '/logos/mbll.jpg',
  },
  {
    title: 'Venture Scout',
    organization: 'Althra',
    duration: 'Present',
    description:
      'Finding and evaluating high-potential early-stage startups in Manitoba.',
    logo: '/logos/althra_logo.jpeg',
  },
  {
    title: 'Developer Relations',
    organization: 'Builders League',
    duration: '2025–26',
    description:
      'Hosted hackathons and built relationships across developer communities.',
    logo: '/logos/builders_league_logo.png',
  },
]

const leadershipExperiences: ExperienceItem[] = [
  {
    title: 'Director of Sponsorships',
    organization: 'CUSEC 2026',
    duration: 'May 2025– January 2026',
    description:
      'Led communication and partnerships between conference sponsors and representatives.',
    logo: '/logos/cusec_2026_logo.jpeg',
  },
  {
    title: 'Scholar',
    organization: 'Cansbridge Scholars',
    duration: 'September 2025 - Present',
    description:
      'Exploring intrapreneurship and entrepreneurship with an ambitious, brave, and kind community.',
    logo: '/logos/cansbridge.jpg',
  },
  {
    title: 'PSLP Fellow',
    organization: 'James W. Burns Leadership Institute',
    duration: 'April 2025 - April 2026',
    description:
      'Selected as one of 20 post-secondary students for the President’s Student Leadership Program.',
    logo: '/logos/asper_logo.png',
  },
]

const bbaRoles = [
  ['President', 'Aug 2026 - Present'],
  ['Treasurer & Web Developer', 'Dec 2025 – Aug 2026'],
  ['President', 'Dec 2024 – Dec 2025'],
  ['Vice President', 'Dec 2023 – July 2024'],
]

function ExperienceRow({
  experience,
}: {
  experience: ExperienceItem
}) {
  return (
    <details className="group border-t border-white/10 first:border-t-0">
      <summary className="flex cursor-pointer list-none items-start gap-3 py-4 [&::-webkit-details-marker]:hidden">
        <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-lg bg-white/10">
          <Image
            src={experience.logo}
            alt=""
            fill
            className="object-cover"
            sizes="32px"
          />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-medium text-white sm:text-base">
            {experience.title}
          </span>
          <span className="mt-0.5 block text-xs text-white/40 sm:text-sm">
            {experience.organization}
          </span>
        </span>
        <span className="shrink-0 text-xs text-white/35">
          {experience.duration}
        </span>
      </summary>
      <p className="pb-4 pl-11 text-sm leading-6 text-white/50">
        {experience.description}
      </p>
    </details>
  )
}

export default function Experiences() {
  return (
    <section id="experience" className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between gap-5">
          <h2 className="text-3xl text-white sm:text-4xl">Experience</h2>
          <a
            href="mailto:mtarmishaw14@gmail.com?subject=Resume request"
            className="text-sm text-sky-300 transition-colors hover:text-sky-200"
          >
            Request résumé <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 sm:p-5">
            <h3 className="mb-1 text-lg text-white">Professional</h3>
            {professionalExperiences.map((experience) => (
              <ExperienceRow key={experience.title} experience={experience} />
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 sm:p-5">
            <h3 className="mb-1 text-lg text-white">
              Leadership &amp; Community Building
            </h3>
            <details className="group border-t border-white/10 first:border-t-0">
              <summary className="flex cursor-pointer list-none items-start gap-3 py-4 [&::-webkit-details-marker]:hidden">
                <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-lg bg-white/10">
                  <Image
                    src="/logos/bits_and_bytes_logo.png"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="32px"
                  />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-white sm:text-base">
                    Bits and Bytes Association
                  </span>
                  <span className="mt-0.5 block text-xs text-white/40 sm:text-sm">
                    President · Treasurer · Web Developer · Vice President
                  </span>
                </span>
                <span className="shrink-0 text-xs text-white/35">
                  December 2023 - Present
                </span>
              </summary>
              <ol className="mb-4 ml-4 border-l border-white/15 pl-7">
                {bbaRoles.map(([role, duration]) => (
                  <li key={`${role}-${duration}`} className="relative pb-4 last:pb-0">
                    <span className="absolute -left-[1.95rem] top-1.5 h-2 w-2 rounded-full bg-white/35" />
                    <p className="text-sm text-white/75">{role}</p>
                    <p className="mt-0.5 text-xs text-white/35">{duration}</p>
                  </li>
                ))}
              </ol>
            </details>
            {leadershipExperiences.map((experience) => (
              <ExperienceRow key={experience.title} experience={experience} />
            ))}
          </div>
        </div>

        <div className="mt-16 grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Fun stuff
            </p>
            <h2 className="mt-2 text-2xl text-white sm:text-3xl">
              Hackathons &amp; sidequests
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/45 sm:text-base">
              15+ events, three first-place finishes, and journeys across
              Canada and San Francisco.
            </p>
            <Link
              href="/sidequests"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-sky-300 transition-colors hover:text-sky-200"
            >
              Explore the gallery
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {[
              {
                src: '/hackathons-sidequests/datathon2026.jpeg',
                alt: 'Winnipeg Open Data Datathon',
                icon: Trophy,
              },
              {
                src: '/hackathons-sidequests/sftechweek-03.jpg',
                alt: 'San Francisco Tech Week',
                icon: Plane,
              },
              {
                src: '/hackathons-sidequests/cusec-2026-1.jpg',
                alt: 'CUSEC 2026',
                icon: Camera,
              },
            ].map(({ src, alt, icon: Icon }) => (
              <Link
                key={src}
                href="/sidequests"
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/5"
                aria-label={`View ${alt}`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover opacity-45 transition duration-300 group-hover:scale-105 group-hover:opacity-65"
                  sizes="(min-width: 1024px) 190px, 33vw"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <Icon className="h-4 w-4 text-white/70 sm:h-5 sm:w-5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <footer
          id="contact"
          className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-sm text-white/80">Let&apos;s build something badass.</p>
            <p className="mt-1 text-xs text-white/35">
              Available for Fall 2026 and Winter 2027 opportunities.
            </p>
          </div>
          <a
            href="mailto:mtarmishaw14@gmail.com"
            className="inline-flex h-9 w-fit items-center justify-center rounded-lg bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-white/85"
          >
            Let's talk
          </a>
        </footer>
        <div className="mt-7 text-xs text-white/25">
          © {new Date().getFullYear()} McCauley Armishaw
        </div>
      </div>
    </section>
  )
}
