import Image from 'next/image'
import Script from 'next/script'

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
      'Intelligent quantum threat detection and adaptive cryptographic routing platform that protects cryptocurrency transactions from evolving quantum computer attacks. SpurHacks 2025 Winner. ($7,000)',
    technologies: ['FastAPI', 'Node.js', 'Python', 'WebSocket', 'React', 'TypeScript', 'UV', 'Vite'],
    link: 'https://devpost.com/software/quantdog',
    github: 'https://github.com/boshyxd/QuantDog',
    image: '/quantdog.png',
  },
  {
    title: 'Gundam Artillery and Combat Operations Management API',
    description:
      'RESTful API for managing a Gundam artillery.',
    technologies: ['Node.js', 'Express', 'Docker', 'Joi', 'TypeScript', 'Cloudflare', 'Prometheus', 'Grafana'],
    link: 'https://comp3018capstoneproj.mccauleyarmishaw.com/',
    github: 'https://github.com/marmishaw14/comp-3018-capstone-project',
    image: "/gundammk2.jpg"
  },
  {
    title: 'Winnipeg Transit But Better',
    description:
      'Winnipeg Transit departures and arrivals with enhanced analytics. Currently still in development making occasional updates.',
    technologies: ['HTML/CSS', 'TypeScript', 'Cloudflare Tunnel', 'Docker'],
    link: 'https://bettertransit.mccauleyarmishaw.com',
    github: 'https://github.com/marmishaw14/winnipeg-transit-but-better',
    image: '/wpg_transit.png'
  },
  {
    title: 'ComparaVision',
    description:
      'A platform for the comparison of visual models (VLMs). Hack the 6ix 2025 Submission.',
    technologies: ['TypeScript', 'Supabase', 'Runpod', 'Python', 'Node.js', 'MongoDB'],
    link: 'https://devpost.com/software/comparavision',
    github: 'https://github.com/orgs/HacktheSix/repositories',
    image: '/comparavision.png'
  },
  {
    title: 'ComplAInce: Manufacturing Regulatory Compliance Chatbot',
    description:
      'A chatbot to aid manufacturing teams with regulatory compliance. Southern Manitoba Tech Conference 2026 Submission.',
    technologies: ['React', 'Tailwind', 'Supabase', 'Flask', 'OpenAI', 'QDrant', 'Flask', 'LlamaIndex'],
    link: 'https://terrific-vision-production-6ebe.up.railway.app/',
    github: 'https://github.com/tadghh/reg-compliance-chatbot',
    image: '/complaince.jpg'
  },
  {
    title: 'SmartMap: Payroll Data Import Engine',
    description:
      'An import workflow for payroll timesheet data. It accepts flexible CSV/XLSX files, infers mappings to a canonical schema, normalizes and validates records, supports review decisions, and then imports approved rows.',
    technologies: ['Node.js', 'HTML/CSS', 'TypeScript', 'Express.js', 'Joi', 'Multer', 'Codex', 'Figma Sites'],
    link: '#',
    github: 'https://github.com/marmishaw14/umcssa-technical-case-comp-2026',
    image: '/smartmap.png'
  },
  {
    title: 'ZoneSmart: National Zoning & Land Use Data Platform',
    description:
      'Full-stack platform for aggregating Canadian municipal zoning and land use data into a searchable, analyzable, open dataset.',
    technologies: ['Flask(API)', 'React', 'TypeScript', 'Qdrant', 'Groq', 'Docker', 'Cloudflare Tunnel', 'BeautifulSoup', 'LangSmith'],
    link: 'https://zoning-app.mccauleyarmishaw.com/',
    github: 'https://github.com/MaxLan-dev/zoning-app',
    image: '/hackathons-sidequests/zonesmart.png'
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
              className="w-full max-w-sm bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-700 flex flex-col"
            >
              <div className="relative w-full h-56">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-200" />
                )}
              </div>
              <div className="flex flex-col flex-1 p-6">
                <div className="flex-1">
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
                </div>
                <div className="flex gap-4 mt-2">
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
        <div className="mt-12 flex justify-center">
          <div data-webring="ca" data-member="mccauley-armishaw" />
        </div>
      </div>
      <Script src="https://webring.ca/embed.js" strategy="afterInteractive" />
    </section>
  )
}
