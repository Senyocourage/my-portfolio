
import { useEffect } from 'react'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import profile from '../assets/profile.jpg'

const cardClass =
  'min-w-0 rounded-3xl border border-[#D4B779]/15 bg-[#102747] p-5 sm:p-6'

const labelClass =
  'text-[10px] font-medium uppercase tracking-[0.16em] text-white/40'

const practiceAreas = [
  {
    number: '01',
    category: 'Web',
    title: 'Frontend development',
    description: 'React, JavaScript, and responsive interfaces.',
  },
  {
    number: '02',
    category: 'Cloud',
    title: 'Cloud and DevOps',
    description: 'AWS, Linux, infrastructure, and deployment.',
  },
  {
    number: '03',
    category: 'Product',
    title: 'Product design',
    description: 'Clear user flows and thoughtful digital experiences.',
  },
  {
    number: '04',
    category: 'Remote',
    title: 'Virtual Assistance',
    description: 'Research, documentation, and organized digital support.',
  },
  {
    number: '05',
    category: 'Technical',
    title: 'IT Support',
    description: 'Practical troubleshooting and day-to-day technical help.',
  },
]

function About() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-scroll-reveal]')

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => {
        item.dataset.scrollVisible = 'true'
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.dataset.scrollVisible = 'true'
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-transparent text-white">
      <SiteHeader />

      <main className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-8 lg:py-10">
        <section aria-labelledby="about-title" className="space-y-3">
          <div className="grid gap-3 md:grid-cols-12">
            <div data-scroll-reveal className="overflow-hidden rounded-3xl border border-[#D4B779]/15 bg-[#102747] p-3 transition duration-500 ease-out hover:-translate-y-1 hover:border-[#D4B779]/45 motion-reduce:transform-none md:col-span-3">
              <img
                src={profile}
                alt="Portrait of Courage Kwaku Senyo"
                className="aspect-square w-full rounded-2xl bg-[#0B2342] object-cover object-center"
              />
            </div>

            <div className="grid gap-3 md:col-span-9">
              <div className="flex items-center justify-between gap-3 px-1">
                <p className={labelClass}>A little about me</p>
                <Sparkles aria-hidden="true" className="h-5 w-5 text-[#D4B779]/70" />
              </div>
              <article data-scroll-reveal className="flex min-h-[190px] flex-col justify-center rounded-3xl border border-[#D4B779]/15 bg-[#102747] p-5 sm:p-7 lg:p-8">
                <h1 id="about-title" className="text-3xl font-semibold uppercase leading-tight tracking-tight sm:text-5xl">
                  Self-summary
                </h1>
                <div className="mt-4 border-t border-white/[0.08] pt-4">
                  <h2 className="text-lg font-medium sm:text-xl">Courage Kwaku Senyo</h2>
                  <p className="mt-2 max-w-3xl text-xs leading-6 text-white/60 sm:text-sm">
                    I’m a technology enthusiast focused on web development, cloud computing, DevOps, and user-centred product design. I learn by building practical projects, solving technical problems, and creating accessible digital experiences.
                  </p>
                </div>
              </article>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <section data-scroll-reveal aria-labelledby="practice-title" className={`${cardClass} transition duration-500 ease-out hover:-translate-y-1 hover:border-[#D4B779]/45 hover:bg-[#143052] motion-reduce:transform-none`}>
              <p className={labelClass}>Practice areas</p>
              <h2 id="practice-title" className="mt-2 text-base font-medium">What I’m building toward</h2>
              <div className="mt-4 divide-y divide-white/[0.07]">
                {practiceAreas.map((area, index) => (
                  <div
                    key={area.number}
                    data-scroll-reveal
                    style={{ transitionDelay: `${index * 65}ms` }}
                    className="group/area flex items-center justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
                  >
                    <div className="min-w-0">
                      <p className="text-[10px] text-white/40">{area.number} · {area.category}</p>
                      <h3 className="mt-0.5 text-sm font-medium transition-colors group-hover/area:text-[#D4B779]">{area.title}</h3>
                    </div>
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-white/30 transition-transform group-hover/area:translate-x-1 group-hover/area:text-[#D4B779]" />
                  </div>
                ))}
              </div>
            </section>

            <section data-scroll-reveal aria-labelledby="approach-title" className={`${cardClass} flex flex-col transition duration-500 ease-out hover:-translate-y-1 hover:border-[#D4B779]/45 hover:bg-[#143052] motion-reduce:transform-none`}>
              <p className={labelClass}>How I work</p>
              <h2 id="approach-title" className="mt-2 text-base font-medium">Curiosity, craft, and iteration</h2>
              <p className="mt-3 text-sm leading-6 text-white/60">
                I enjoy taking an idea from rough outline to a usable experience: understand the problem, shape a clear interface, build it, then refine it with care.
              </p>
              <div className="mt-auto grid grid-cols-3 gap-2 pt-5">
                {[
                  ['01', 'Explore'],
                  ['02', 'Create'],
                  ['03', 'Refine'],
                ].map(([number, step]) => (
                  <div key={number} className="rounded-xl bg-[#0B2342]/70 px-2 py-3 text-center">
                    <p className="text-base font-semibold text-[#D4B779]">{number}</p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-white/45">{step}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="grid gap-3 sm:grid-cols-4">
            <Link data-scroll-reveal to="/works" className="group flex min-h-32 flex-col justify-between rounded-3xl border border-[#D4B779]/15 bg-[#102747] p-5 transition duration-500 ease-out hover:-translate-y-1 hover:border-[#D4B779]/45 hover:bg-[#143052] motion-reduce:transform-none sm:col-span-1">
              <span className="text-3xl font-semibold italic tracking-tight text-[#D4B779]/80">CS</span>
              <span>
                <span className={labelClass}>Explore</span>
                <span className="mt-1 flex items-center justify-between text-sm font-medium">Selected work <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-[#D4B779]" /></span>
              </span>
            </Link>

            <Link data-scroll-reveal to="/contact" className="group flex min-h-32 flex-col justify-between rounded-3xl border border-[#D4B779]/15 bg-[#102747] p-5 transition duration-500 ease-out hover:-translate-y-1 hover:border-[#D4B779]/45 hover:bg-[#143052] motion-reduce:transform-none sm:col-span-2 sm:p-6">
              <Sparkles aria-hidden="true" className="h-6 w-6 text-[#D4B779]/60" />
              <span className="flex items-end justify-between gap-3">
                <span className="text-2xl font-medium leading-tight sm:text-3xl">Let’s work <span className="text-[#D4B779]">together.</span></span>
                <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-lg text-white/50 transition-colors group-hover:border-[#D4B779]/60 group-hover:text-[#D4B779]"><ArrowUpRight className="h-4 w-4" /></span>
              </span>
            </Link>

            <Link data-scroll-reveal to="/about" className="group flex min-h-32 flex-col justify-between rounded-3xl border border-[#D4B779]/15 bg-[#102747] p-5 transition duration-500 ease-out hover:-translate-y-1 hover:border-[#D4B779]/45 hover:bg-[#143052] motion-reduce:transform-none sm:col-span-1">
              <span className="text-3xl font-medium text-white/80">05</span>
              <span>
                <span className={labelClass}>Practice areas</span>
                <span className="mt-1 flex items-center justify-between text-sm font-medium">My focus <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-[#D4B779]" /></span>
              </span>
            </Link>
          </div>
        </section>

        <footer className="flex flex-col gap-2 py-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Courage Kwaku Senyo</span>
          <span>Web development · Cloud · Product design</span>
        </footer>
      </main>
    </div>
  )
}

export default About
