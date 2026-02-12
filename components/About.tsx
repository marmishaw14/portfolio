import AnimatedGridPatternDemo from '@/components/AnimatedGridPatternDemo'

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#1e1e1e] px-4 py-20 sm:px-6 lg:px-8"
    >
      <AnimatedGridPatternDemo className="opacity-50" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          About Me
        </h2>
        <div className="prose prose-lg mx-auto">
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I'm a passionate developer with a love for creating innovative web
            solutions. With expertise in modern web technologies, I bring ideas
            to life through clean, efficient code and thoughtful design.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            When I'm not pushing code to GitHub, you can find me at a coffee shop,
            contributing to open-source projects, or doom scrolling on X.
          </p>
        </div>
      </div>
    </section>
  )
}
