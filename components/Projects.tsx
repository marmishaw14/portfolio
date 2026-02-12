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
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://devpost.com/software/quantdog',
    github: '#',
    image: '/quantdog.png',
  },
  {
    title: 'Winnipeg Transit But Better',
    description:
      'Full-stack application with authentication, database integration, and API endpoints. Built with Next.js and modern best practices.',
    technologies: ['Next.js', 'TypeScript', 'Node.js'],
    link: '#',
    github: '#',
  },
  {
    title: 'Project Three',
    description:
      'Mobile-responsive dashboard with data visualization and analytics. Clean UI with intuitive navigation and powerful features.',
    technologies: ['React', 'TypeScript', 'Chart.js'],
    link: '#',
    github: '#',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1e1e1e]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-700"
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
                      className="px-3 py-1 bg-primary-900/50 text-primary-300 text-sm rounded-full border border-primary-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="text-primary-400 hover:text-primary-300 hover:underline font-semibold"
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
