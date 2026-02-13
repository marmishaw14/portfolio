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
          <p className="text-white-300 text-xl font-bold leading-relaxed mb-4">
            I'm a software developer and a final year Application Development and Delivery student from RRC Polytechnic.

            I'm a proven leader and love building developer communities.
          </p>
          <p className="text-white-300 text-xl font-bold leading-relaxed">
            When I'm not pushing code to GitHub, you can find me at a coffee shop,
            building Gundam model kits, or doom scrolling on X.
          </p>
        </div>
      </div>
    </section>
  )
}
