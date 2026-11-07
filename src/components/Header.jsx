import { useState } from 'react'
import { site } from '../data/site.js'

const links = [
  ['#work', 'Work'],
  ['#about', 'About'],
  ['#contact', 'Contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <a href="#top" className="wordmark">{site.name}</a>
      <button className="menu-btn" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
        {open ? 'Close' : 'Menu'}
      </button>
      <nav className={open ? 'nav open' : 'nav'}>
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
    </header>
  )
}
