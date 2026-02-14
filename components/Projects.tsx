import Image from 'next/image'

type Project = {
  title: string
  description: string
  technologies: string[]
  link: string
  github: string
  image?: string
}

const projects: Project[] = [
  {
    title: 'QuantDog',
    description:
      'Intelligent quantum threat detection and adaptive cryptographic routing platform that protects cryptocurrency transactions from evolving quantum computer attacks.',
    technologies: ['FastAPI', 'Node.js', 'Python', 'WebSocket', 'React', 'TypeScript', 'UV', 'Vite'],
    link: 'https://devpost.com/software/quantdog',
    github: 'https://github.com/boshyxd/QuantDog',
    image: '/quantdog.png',
  },
  {
    title: 'Winnipeg Transit But Better',
    description:
      'Winnipeg Transit departures and arrivals with enhanced analytics. Currently still in development.',
    technologies: ['HTML/CSS', 'TypeScript', 'Cloudflare Tunnel', 'Docker'],
    link: 'https://bettertransit.mccauleyarmishaw.com',
    github: 'https://github.com/marmishaw14/winnipeg-transit-but-better',
    image: '/wpg_transit.png'
  },
  {
    title: 'Digital Ocean Gradient AI Hackathon Submission',
    description:
      'This project is currently in progress. Check back later for updates.',
    technologies: ['DigitalOcean'],
    link: '#',
    github: '#',
    image: '/in_progress.jpg'
  },
  {
    title: 'ComparaVision',
    description:
      'A platform for the comparison of visual models (VLMs).',
    technologies: ['TypeScript', 'Supabase', 'Runpod', 'Python', 'Node.js', 'MongoDB'],
    link: 'https://devpost.com/software/comparavision',
    github: 'https://github.com/orgs/HacktheSix/repositories',
    image: '/comparavision.png'
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Projects
        </h2>
        <div className="grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] justify-items-center">
          {projects.map((project) => (
            <div
              key={project.title}
              className="w-full max-w-sm bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-700"
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              ) : (
                <div className="h-56 bg-gradient-to-br from-primary-500 to-primary-200"></div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-900/50 text-purple-100 text-sm rounded-full border border-purple-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="text-purple-500 hover:text-orange-300 hover:underline font-semibold"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.github}
                    className="text-gray-400 hover:text-gray-300 hover:underline font-semibold"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
