import Hero from '../components/Hero.jsx'
import SeriesOverview from '../components/SeriesOverview.jsx'
import About from '../components/About.jsx'
import Contact from '../components/Contact.jsx'
import useTitle from '../useTitle.js'

export default function Home() {
  useTitle()
  return (
    <>
      <Hero />
      <SeriesOverview />
      <About />
      <Contact />
    </>
  )
}
