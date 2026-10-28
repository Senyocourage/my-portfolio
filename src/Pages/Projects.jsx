
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroArt from '../assets/hero.png'
import SiteHeader from '../components/SiteHeader'

const projects = [
  {
    title: 'Pharmacy Management System',
    category: 'Web application',
    description: 'A responsive tool for organizing medicine records and pharmacy operations.',
    tech: 'React · Tailwind CSS',
    type: 'pharmacy',
  },
  {
    title: 'Authentication App',
    category: 'Authentication',
    description: 'A login and registration experience using Firebase Authentication.',
    tech: 'React · Firebase',
    type: 'auth',
  },
  {
    title: 'AWS Cloud Projects',
    category: 'Cloud and DevOps',
    description: 'Hands-on practice with cloud infrastructure, Linux, and deployment.',
    tech: 'AWS · Linux · Cloud',
    type: 'cloud',
  },
]

function ProjectPreview({ type, title }) {
  if (type === 'pharmacy') {
    return (
      <div role="img" aria-label={`${title} interface preview`} className="flex h-full flex-col gap-4 bg-[#0B2342] p-4 sm:p-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#D4B779]" />
            <span className="text-[10px] font-semibold tracking-[0.16em] text-white/75">PILLAR / PHARMACY</span>
          </div>
          <span className="h-5 w-16 rounded-full bg-white/[0.06]" />
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-[0.65fr_2fr] gap-3">
          <div className="space-y-2 rounded-xl bg-white/[0.035] p-2.5">
            <span className="block h-2 w-4/5 rounded bg-[#D4B779]/60" />
            <span className="block h-2 w-3/5 rounded bg-white/10" />
            <span className="block h-2 w-4/5 rounded bg-white/10" />
            <span className="block h-2 w-1/2 rounded bg-white/10" />
          </div>
          <div className="rounded-xl bg-white/[0.035] p-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-medium text-white/75">Inventory</span>
              <span className="h-4 w-12 rounded bg-[#D4B779]/20" />
            </div>
            <div className="mt-3 space-y-2">
              {['Amoxicillin', 'Vitamin C', 'Paracetamol'].map((medicine, index) => (
                <div key={medicine} className="flex items-center gap-2 rounded-lg bg-[#07182F]/60 px-2 py-1.5">
                  <span className={`h-3 w-3 rounded-full ${index === 1 ? 'bg-[#D4B779]/75' : 'bg-white/20'}`} />
                  <span className="truncate text-[9px] text-white/60">{medicine}</span>
                  <span className="ml-auto h-1.5 w-5 rounded bg-white/10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'auth') {
    return (
      <div role="img" aria-label={`${title} interface preview`} className="flex h-full items-center justify-center bg-[#0B2342] p-5">
        <div className="w-full max-w-[230px] rounded-2xl border border-white/[0.08] bg-[#102747] p-4 shadow-xl shadow-black/20">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#D4B779] text-xs font-bold text-[#0B2342]">C</div>
          <p className="mt-3 text-sm font-medium">Welcome back</p>
          <p className="mt-1 text-[9px] text-white/40">Sign in to your account</p>
          <div className="mt-3 space-y-2">
            <div className="rounded-lg border border-white/[0.08] px-2.5 py-2 text-[9px] text-white/35">Email address</div>
            <div className="rounded-lg border border-white/[0.08] px-2.5 py-2 text-[9px] text-white/35">Password</div>
            <div className="rounded-lg bg-[#D4B779] py-2 text-center text-[9px] font-semibold text-[#0B2342]">Sign in</div>
          </div>
          <p className="mt-3 text-center text-[8px] text-white/35">New here? <span className="text-[#D4B779]">Create an account</span></p>
        </div>
      </div>
    )
  }

  return (
    <div role="img" aria-label={`${title} cloud technology artwork`} className="relative flex h-full items-center justify-center overflow-hidden bg-[#0B2342]">
      <img src={heroArt} alt="" className="absolute inset-0 h-full w-full object-contain p-5 grayscale opacity-45" />
      <div className="relative z-10 rounded-full border border-[#D4B779]/35 bg-[#07182F]/80 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#D4B779]">
        Cloud infrastructure
      </div>
    </div>
  )
}

function Projects() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <SiteHeader />

      <main className="mx-auto min-h-[calc(100vh-150px)] w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-7 flex items-center justify-center gap-3 sm:mb-9">
          <Sparkles aria-hidden="true" className="h-5 w-5 text-[#D4B779]/70 sm:h-6 sm:w-6" />
          <div className="text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">Selected work</p>
            <h1 className="mt-1 text-3xl font-semibold uppercase leading-none tracking-tight sm:text-5xl">All projects</h1>
          </div>
          <Sparkles aria-hidden="true" className="h-5 w-5 text-[#D4B779]/70 sm:h-6 sm:w-6" />
        </div>

        <section aria-label="Project list" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group min-w-0 overflow-hidden rounded-3xl border border-[#D4B779]/15 bg-[#102747] transition duration-500 ease-out hover:-translate-y-1 hover:border-[#D4B779]/45 hover:shadow-xl hover:shadow-black/20 motion-reduce:transform-none"
            >
              <div className="aspect-[4/3] overflow-hidden p-2.5">
                <div className="h-full overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transform-none">
                  <ProjectPreview type={project.type} title={project.title} />
                </div>
              </div>
              <div className="flex items-start justify-between gap-3 px-4 pb-4 pt-1 sm:px-5 sm:pb-5">
                <div className="min-w-0">
                  <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-white/40">{project.category}</p>
                  <h2 className="mt-1 text-base font-medium transition-colors group-hover:text-[#D4B779]">{project.title}</h2>
                  <p className="mt-2 text-xs leading-5 text-white/50">{project.description}</p>
                  <p className="mt-3 text-[10px] font-medium text-[#D4B779]/80">{project.tech}</p>
                </div>
                <span aria-hidden="true" className="mt-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-sm text-white/45 transition-colors group-hover:border-[#D4B779]/50 group-hover:text-[#D4B779]"><ArrowUpRight className="h-4 w-4" /></span>
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer className="mx-auto flex max-w-5xl flex-col items-center gap-3 border-t border-white/[0.06] px-4 py-6 text-center sm:px-6">
        <Link to="/" className="text-base font-semibold tracking-tight text-white">Courage Kwaku Senyo</Link>
        <nav aria-label="Footer navigation" className="flex gap-5 text-[10px] uppercase tracking-[0.12em] text-white/40">
          <Link to="/" className="transition-colors hover:text-[#D4B779]">Home</Link>
          <Link to="/about" className="transition-colors hover:text-[#D4B779]">About</Link>
          <Link to="/works" className="transition-colors hover:text-[#D4B779]">Works</Link>
          <Link to="/contact" className="transition-colors hover:text-[#D4B779]">Contact</Link>
        </nav>
      </footer>
    </div>
  )
}

export default Projects
