import Image from 'next/image'
import Script from 'next/script'
import { ArrowUpRight } from 'lucide-react'

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
    title: 'Gundam Artillery and Combat Operations Management API',
    description:
      'RESTful API for managing a Gundam artillery.',
    technologies: ['Node.js', 'Express', 'Docker', 'Joi', 'TypeScript', 'Cloudflare', 'Prometheus', 'Grafana', 'OpenAPI'],
    link: 'https://comp3018capstoneproj.mccauleyarmishaw.com/',
    github: 'https://github.com/marmishaw14/comp-3018-capstone-project',
    image: "/gundammk2.jpg"
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
      className="border-b border-white/10 px-5 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <h2 className="mt-2 text-3xl text-white sm:text-4xl">
              Projects
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm text-white/35 sm:block">
            Personal projects and hackathon builds.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] transition-colors hover:border-white/20 hover:bg-white/[0.065] ${
                index === 0 ? 'md:col-span-2 lg:grid lg:grid-cols-[1.15fr_0.85fr]' : ''
              }`}
            >
              <div
                className={`relative overflow-hidden bg-[#282333] ${
                  index === 0 ? 'h-64 sm:h-80 lg:h-full lg:min-h-[25rem]' : 'h-52 sm:h-60'
                }`}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes={
                      index === 0
                        ? '(min-width: 1024px) 55vw, 100vw'
                        : '(min-width: 768px) 50vw, 100vw'
                    }
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-200" />
                )}
              </div>
              <div className="flex flex-col p-5 sm:p-6">
                <div className="flex-1">
                  <h3 className="text-xl text-white">
                    {project.title}
                  </h3>
                  <p className="mb-5 mt-2 text-sm leading-6 text-white/50">
                    {project.description}
                  </p>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-sky-400/15 bg-sky-400/10 px-2.5 py-1 text-xs text-sky-200/80"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/45">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-auto flex gap-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-white/50 transition-colors hover:text-white"
                  >
                    GitHub
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>
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
