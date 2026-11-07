import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Gallery from './components/Gallery.jsx'
import Lightbox from './components/Lightbox.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import { works } from './data/works.js'
import { site } from './data/site.js'
import useReveal from './useReveal.js'

export default function App() {
  const [openIndex, setOpenIndex] = useState(null)
  const [visible, setVisible] = useState(works)
  useReveal()

  const openWork = (work, list = visible) => {
    setVisible(list)
    setOpenIndex(list.findIndex((w) => w.id === work.id))
  }

  return (
    <>
      <Header />
      <main>
        <Hero onOpen={(w) => openWork(w, works)} />
        <Gallery onOpen={openWork} />
        <About />
        <Contact />
      </main>
      <footer className="footer">
        <span>© {new Date().getFullYear()} {site.name}</span>
      </footer>
      {openIndex !== null && (
        <Lightbox
          works={visible}
          index={openIndex}
          onChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  )
}
