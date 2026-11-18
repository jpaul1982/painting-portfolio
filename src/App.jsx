import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import WorkPage from './pages/WorkPage.jsx'
import NotFound from './pages/NotFound.jsx'
import { LightboxProvider } from './lightbox.jsx'
import { site } from './data/site.js'
import useReveal from './useReveal.js'

// New page → start at the top; link with a #hash (e.g. /#about) → scroll to that section.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  const lastPath = useRef(pathname)
  useEffect(() => {
    // Coming from another page: jump straight there. Same page: glide.
    const behavior = lastPath.current === pathname ? 'smooth' : 'instant'
    lastPath.current = pathname
    if (hash) {
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior }), 0)
      return () => clearTimeout(t)
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

export default function App() {
  useReveal()
  return (
    <LightboxProvider>
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<WorkPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">
        <span>© {new Date().getFullYear()} {site.name}</span>
      </footer>
    </LightboxProvider>
  )
}
