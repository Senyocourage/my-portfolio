
import { useState } from 'react'
import { ArrowUpRight, BriefcaseBusiness, Mail, MapPin, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL

const iconClass = 'h-5 w-5 text-[#D4B779]'

function Contact() {
  const [formStatus, setFormStatus] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!contactEmail) {
      setFormStatus('Message delivery is not configured yet.')
      return
    }

    const formData = new FormData(event.currentTarget)
    const subject = encodeURIComponent(formData.get('subject'))
    const body = encodeURIComponent(
      `From: ${formData.get('name')} (${formData.get('email')})\n\n${formData.get('message')}`,
    )

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
    setFormStatus('Opening your email app...')
  }

  return (
    <div className="min-h-screen bg-[#07182F] text-white">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D4B779] sm:text-sm">
            Get in touch
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Let's work <span className="text-[#D4B779]">together.</span>
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
          <aside className="flex flex-col">
            <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-white/65">
              Contact info
            </h2>

            <div className="mt-6 space-y-6">
              <a
                href="#message-form"
                className="group flex items-start gap-4 rounded-2xl transition-colors hover:text-[#D4B779]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#102747]">
                  <Mail className={iconClass} aria-hidden="true" />
                </span>
                <span className="pt-1">
                  <span className="block text-[10px] uppercase tracking-[0.14em] text-white/40">Project enquiries</span>
                  <span className="mt-1 block text-sm leading-6 text-white/80">Send a note using the form</span>
                </span>
              </a>

              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#102747]">
                  <BriefcaseBusiness className={iconClass} aria-hidden="true" />
                </span>
                <span className="pt-1">
                  <span className="block text-[10px] uppercase tracking-[0.14em] text-white/40">What I can help with</span>
                  <span className="mt-1 block text-sm leading-6 text-white/80">Web, product design, and visual assistance</span>
                </span>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#102747]">
                  <MapPin className={iconClass} aria-hidden="true" />
                </span>
                <span className="pt-1">
                  <span className="block text-[10px] uppercase tracking-[0.14em] text-white/40">Availability</span>
                  <span className="mt-1 block text-sm leading-6 text-white/80">Open to remote projects and collaborations</span>
                </span>
              </div>
            </div>

            <div className="mt-10 border-t border-white/[0.08] pt-6">
              <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-white/65">Explore</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link to="/about" className="inline-flex items-center gap-1 text-sm text-white/65 transition-colors hover:text-[#D4B779]">
                  About me <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link to="/works" className="inline-flex items-center gap-1 text-sm text-white/65 transition-colors hover:text-[#D4B779]">
                  My work <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </aside>

          <section className="rounded-3xl border border-[#D4B779]/15 bg-[#102747] p-5 sm:p-8 lg:p-10">
            <h2 className="text-xl font-medium sm:text-2xl">Tell me about your project</h2>
            <p className="mt-2 text-sm leading-6 text-white/50">
              Share a few details and I’ll get back to you.
            </p>

            <form id="message-form" className="mt-7 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-xs text-white/60">
                  Name <span className="text-[#D4B779]">*</span>
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                    className="mt-2 min-h-12 w-full rounded-xl border border-white/[0.06] bg-[#0B2342] px-4 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#D4B779]/70"
                  />
                </label>
                <label className="block text-xs text-white/60">
                  Email <span className="text-[#D4B779]">*</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    className="mt-2 min-h-12 w-full rounded-xl border border-white/[0.06] bg-[#0B2342] px-4 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#D4B779]/70"
                  />
                </label>
              </div>

              <label className="block text-xs text-white/60">
                Subject <span className="text-[#D4B779]">*</span>
                <input
                  name="subject"
                  type="text"
                  placeholder="What would you like to work on?"
                  required
                  className="mt-2 min-h-12 w-full rounded-xl border border-white/[0.06] bg-[#0B2342] px-4 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#D4B779]/70"
                />
              </label>

              <label className="block text-xs text-white/60">
                Message <span className="text-[#D4B779]">*</span>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="A little about your project, timeline, or question..."
                  required
                  className="mt-2 w-full resize-y rounded-xl border border-white/[0.06] bg-[#0B2342] px-4 py-3 text-sm leading-6 text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#D4B779]/70"
                />
              </label>

              <div className="flex flex-col items-start gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#D4B779] px-5 py-3 text-sm font-semibold text-[#0B2342] transition-colors hover:bg-white"
                >
                  Send message <Send className="h-4 w-4" aria-hidden="true" />
                </button>
                {formStatus && (
                  <p role="status" className="text-sm text-white/60">{formStatus}</p>
                )}
              </div>
            </form>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Contact
