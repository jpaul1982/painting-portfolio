import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site } from '../data/site.js'
import { series } from '../data/series.js'

export default function Header() {
  const [open, setOpen] = useState(false)       // phone menu
  const [subOpen, setSubOpen] = useState(false) // Work dropdown (keyboard / touch)
  const [justNavigated, setJustNavigated] = useState(false) // keeps hover from reopening it right after a click
  const location = useLocation()
  const lastPage = useRef(location.pathname + location.hash)

  // Close menus whenever the page changes.
  useEffect(() => {
    const page = location.pathname + location.hash
    if (page === lastPage.current) return
    lastPage.current = page
    setOpen(false)
    setSubOpen(false)
    setJustNavigated(true)
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur()
  }, [location.pathname, location.hash])

  const onWorkPage = location.pathname.startsWith('/work')

  return (
    <header className="header">
      <Link to="/" className="wordmark">{site.name}</Link>
      <button className="menu-btn" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
        {open ? 'Close' : 'Menu'}
      </button>
      <nav id="site-nav" className={open ? 'nav open' : 'nav'} aria-label="Main">
        <div
          className={['nav-item', 'has-sub', subOpen && 'open', justNavigated && 'settled'].filter(Boolean).join(' ')}
          onMouseLeave={() => { setSubOpen(false); setJustNavigated(false) }}
          onKeyDown={(e) => e.key === 'Escape' && setSubOpen(false)}
        >
          <div className="nav-trigger">
            <NavLink to="/work" className={onWorkPage ? 'active' : undefined}>Work</NavLink>
            <button
              className="nav-caret"
              aria-expanded={subOpen}
              aria-controls="work-sub"
              aria-label="Show series"
              onClick={() => setSubOpen(!subOpen)}
            >
              ▾
            </button>
          </div>
          <ul id="work-sub" className="nav-sub">
            <li><NavLink to="/work" end>All work</NavLink></li>
            {series.map((s) => (
              <li key={s.slug}><NavLink to={`/work/${s.slug}`}>{s.name}</NavLink></li>
            ))}
          </ul>
        </div>
        <Link to="/#about">About</Link>
        <Link to="/#contact">Contact</Link>
      </nav>
    </header>
  )
}
