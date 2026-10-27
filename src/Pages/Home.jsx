
import { Link } from 'react-router-dom'
import profile from '../assets/profile.jpg'
import SiteHeader from '../components/SiteHeader'

const cardClass =
  'group min-w-0 overflow-hidden rounded-3xl border border-[#D4B779]/15 bg-[#102747] transition-colors duration-300 hover:border-[#D4B779]/45'

const eyebrowClass =
  'text-[10px] font-medium uppercase tracking-[0.16em] text-white/40'

function CardArrow() {
  return (
    <span
      aria-hidden="true"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-lg text-white/50 transition-colors group-hover:border-[#D4B779]/60 group-hover:text-[#D4B779]"
    >
      ↗
    </span>
  )
}

function Home() {
  return (
    <div className="min-h-screen bg-[#07182F] text-white">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:py-10">
        <section aria-label="Portfolio overview" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-12">
            <article className={`${cardClass} flex min-h-[300px] flex-col justify-between p-5 sm:p-7 lg:col-span-6 lg:min-h-[360px] lg:flex-row lg:items-center lg:gap-5`}>
              <div className="flex h-40 shrink-0 items-center justify-center rounded-2xl bg-[#091D38] sm:h-48 lg:h-56 lg:w-[42%]">
                <img
                  src={profile}
                  alt="Profile picture"
                  className="h-full w-full object-contain p-2"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col items-start pt-5 lg:pt-0">
                <p className={eyebrowClass}>Web developer · Cloud enthusiast · Product designer · Virtual Assistant</p>
                <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  Courage Kwaku Senyo.
                </h1>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">
                  I build useful web experiences and explore cloud, DevOps, and thoughtful design.
                </p>
                <Link
                  to="/works"
                  className="mt-5 inline-flex min-h-11 items-center gap-3 rounded-xl bg-[#D4B779] px-4 py-2.5 text-sm font-semibold text-[#0B2342] transition-colors hover:bg-white"
                >
                  Explore my work <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>

            <div className="grid gap-4 lg:col-span-6">
              <div className="flex min-h-10 items-center overflow-hidden rounded-full border border-white/[0.08] bg-[#151515] px-4">
                <p className="truncate text-[10px] uppercase tracking-[0.12em] text-white/45 sm:text-xs">
                  Building for the web <span className="px-2 text-[#D4B779]">·</span> Exploring cloud systems <span className="px-2 text-[#D4B779]">·</span> Learning by shipping
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Link to="/about" className={`${cardClass} flex min-h-[170px] flex-col justify-between p-5`}>
                  <span className="text-4xl font-semibold italic tracking-tight text-white/80">CS</span>
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className={eyebrowClass}>A little about me</p>
                      <h2 className="mt-1 text-base font-medium">Background</h2>
                    </div>
                    <CardArrow />
                  </div>
                </Link>

                <Link to="/works" className={`${cardClass} flex min-h-[170px] flex-col justify-between p-5`}>
                  <div className="flex flex-1 flex-col justify-center">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#D4B779]">Selected work</p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight">Web · Cloud</p>
                    <p className="mt-1 text-xs text-white/40">Projects and experiments</p>
                  </div>
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className={eyebrowClass}>Showcase</p>
                      <h2 className="mt-1 text-base font-medium">Projects</h2>
                    </div>
                    <CardArrow />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
            <article className={`${cardClass} flex min-h-[180px] flex-col justify-between p-5 lg:col-span-3`}>
              <div className="flex h-20 items-center gap-2" aria-hidden="true">
                <span className="h-12 w-12 rounded-2xl bg-[#D4B779]" />
                <span className="h-12 w-12 rounded-full border border-white/20" />
                <span className="h-12 w-12 rounded-2xl border border-[#D4B779]/50 bg-[#D4B779]/10" />
              </div>
              <div>
                <p className={eyebrowClass}>Curious by nature</p>
                <h2 className="mt-1 text-base font-medium">Always learning</h2>
              </div>
            </article>

            <section aria-labelledby="services-heading" className={`${cardClass} flex min-h-[180px] flex-col justify-between p-5 sm:p-6 lg:col-span-6`}>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                {['Web interfaces', 'Cloud basics', 'DevOps', 'Product design', 'Visual assistance'].map((service) => (
                  <div key={service} className="flex min-h-16 items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.025] px-2 text-center text-xs text-white/70 sm:text-sm">
                    {service}
                  </div>
                ))}
              </div>
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className={eyebrowClass}>Areas of interest</p>
                  <h2 id="services-heading" className="mt-1 text-base font-medium">What I work on</h2>
                </div>
                <CardArrow />
              </div>
            </section>

            <Link to="/contact" className={`${cardClass} flex min-h-[180px] flex-col justify-between p-5 lg:col-span-3`}>
              <div className="flex h-20 items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.025]">
                <span className="text-sm font-medium tracking-wide text-white/70">LET'S CONNECT</span>
              </div>
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className={eyebrowClass}>Start a conversation</p>
                  <h2 className="mt-1 text-base font-medium">Contact</h2>
                </div>
                <CardArrow />
              </div>
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <section aria-labelledby="focus-heading" className={`${cardClass} p-5 sm:p-6`}>
              <p className={eyebrowClass}>How I like to build</p>
              <h2 id="focus-heading" className="mt-1 text-lg font-medium">Curious, practical, and always improving.</h2>
              <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  ['01', 'Design'],
                  ['02', 'Build'],
                  ['03', 'Refine'],
                ].map(([number, label]) => (
                  <div key={number} className="rounded-2xl bg-white/[0.035] px-3 py-4 text-center">
                    <p className="text-xl font-semibold">{number}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/40">{label}</p>
                  </div>
                ))}
              </div>
            </section>

            <Link to="/contact" className={`${cardClass} flex min-h-[190px] flex-col justify-between p-6 sm:p-8`}>
              <span aria-hidden="true" className="text-3xl text-white/25">✳</span>
              <div className="flex items-end justify-between gap-4">
                <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                  Let's work <span className="text-[#D4B779]">together.</span>
                </h2>
                <CardArrow />
              </div>
            </Link>
          </div>
        </section>

        <footer className="flex flex-col gap-2 py-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Courage Kwaku Senyo</span>
          <span>Web development · Cloud · DevOps · Product Design · Virtual Assistance</span>
        </footer>
      </main>
    </div>
  )
}

export default Home



