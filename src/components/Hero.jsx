import { site } from '../data/site.js'
import { works } from '../data/works.js'

export default function Hero({ onOpen }) {
  const featured = works.find((w) => w.featured) ?? works[0]
  return (
    <section className="hero" id="top">
      <div className="hero-text">
        <p className="eyebrow">Oil painter · {site.location}</p>
        <h1>
          Portraits,<br />pets <span className="amp">&amp;</span><br /><em>still life</em>
        </h1>
        <p className="hero-tagline">{site.tagline}</p>
        <a href="#work" className="text-link">View the work →</a>
      </div>
      <button className="hero-art" onClick={() => onOpen(featured)} aria-label={`View ${featured.title}`}>
        <img src={featured.image} alt={featured.title} />
        <span className="hero-caption">
          <em>{featured.title}</em>{featured.year ? ` · ${featured.year}` : ''}
        </span>
      </button>
    </section>
  )
}
