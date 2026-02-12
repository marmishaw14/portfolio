import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Navigation from '@/components/Navigation'
import Blogs from '@/components/Blogs'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000]">
      <Navigation />
      <Hero />
      <About />
      <Projects />
    </main>
  )
}
