import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const navigationItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Works', to: '/works' },
  { label: 'Contact', to: '/contact' },
]

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-20 px-4 pt-4 sm:px-6 sm:pt-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-white/[0.12] bg-[#0B2342]/55 px-4 py-3 shadow-lg shadow-black/15 backdrop-blur-xl sm:rounded-full sm:px-6">
        <Link
          to="/"
          aria-label="Courage Senyo home"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5"
        >
          <img src={logo} alt="" className="h-8 w-8 rounded-full object-cover" />
        
        </Link>

        <div className="hidden items-center gap-8 text-sm md:flex">
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `transition-colors hover:text-white ${isActive ? 'text-[#D4B779]' : 'text-white/50'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden shrink-0 rounded-xl border border-[#D4B779]/35 bg-[#0B2342] px-5 py-2.5 text-sm font-medium text-[#D4B779] transition-colors hover:bg-[#D4B779] hover:text-[#0B2342] md:inline-flex"
        >
          Let's talk
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 text-white transition-colors hover:border-[#D4B779]/50 hover:text-[#D4B779] md:hidden"
        >
          {menuOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`${menuOpen ? 'grid' : 'hidden'} absolute inset-x-4 top-[calc(100%-0.25rem)] mx-auto max-w-6xl gap-1 rounded-2xl border border-white/10 bg-[#0B2342]/95 px-3 pb-3 pt-2 shadow-xl shadow-black/20 backdrop-blur-xl sm:inset-x-6 md:hidden`}
      >
        {navigationItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            onClick={closeMenu}
            className={({ isActive }) =>
              `rounded-xl px-4 py-3 text-sm transition-colors ${isActive ? 'bg-[#102747] text-[#D4B779]' : 'text-white/70 hover:bg-[#102747] hover:text-white'}`
            }
          >
            {item.label}
          </NavLink>
        ))}
        <Link
          to="/contact"
          onClick={closeMenu}
          className="mt-1 flex min-h-11 items-center justify-center rounded-xl bg-[#D4B779] px-4 py-3 text-sm font-semibold text-[#0B2342] md:hidden"
        >
          Let's talk
        </Link>
      </div>
    </header>
  )
}

export default SiteHeader
