
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contect'
import logo from './assets/logo.jpg'

const whatsappUrl =
  'https://wa.me/233552244462?text=Hi%20Courage%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.'

function App() {
  const location = useLocation()

  return (
    <div className="relative isolate min-h-screen bg-[#07182F] text-white">
      <div className="site-logo-watermark" aria-hidden="true">
        <img src={logo} alt="" />
      </div>

      <div className="relative z-10">
        <div key={location.pathname} className="page-transition">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />

            <Route
              path="*"
              element={
                <div className="flex min-h-screen flex-col items-center justify-center bg-transparent px-4 text-center text-white">
                  <h1 className="text-5xl font-bold text-[#D4B779]">404</h1>
                  <p className="mt-4">Sorry, this page could not be found.</p>
                  <Link
                    to="/"
                    className="mt-6 rounded-full bg-[#D4B779] px-6 py-3 font-semibold text-[#0B2342]"
                  >
                    Return home
                  </Link>
                </div>
              }
            />
          </Routes>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with me on WhatsApp"
          className="whatsapp-cta fixed bottom-5 right-5 z-30 inline-flex min-h-14 items-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-semibold text-[#07182F] shadow-lg shadow-black/30 transition-all hover:-translate-y-1 hover:bg-[#4BE080] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:bottom-7 sm:right-7"
        >
          <MessageCircle aria-hidden="true" className="h-5 w-5" />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  )
}

export default App
