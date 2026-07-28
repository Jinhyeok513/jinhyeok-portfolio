import { About } from './components/About'
import { Contact } from './components/Contact'
import { EducationExperience } from './components/EducationExperience'
import { FeaturedProjects } from './components/FeaturedProjects'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { TechnicalSkills } from './components/TechnicalSkills'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#02040d] text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(115deg,#02040d_0%,#07111f_38%,#0d0f24_63%,#02040d_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(130deg,rgba(14,165,233,0.12),transparent_34%,rgba(124,58,237,0.12)_64%,transparent)]" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechnicalSkills />
        <FeaturedProjects />
        <EducationExperience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
