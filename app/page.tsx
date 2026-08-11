import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Navigation from '@/components/Navigation'
import Experience from '@/components/Experience'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111]">
      <Navigation />
      <Hero />
      <Projects />
      <Experience />
    </main>
  )
}
