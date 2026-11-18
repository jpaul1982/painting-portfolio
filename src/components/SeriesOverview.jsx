import { Link } from 'react-router-dom'
import { series } from '../data/series.js'

// Homepage section: one card per series, linking to its page.
export default function SeriesOverview() {
  return (
    <section className="section" id="work">
      <div className="section-head">
        <h2>The <em>work</em></h2>
        <Link to="/work" className="text-link dark">See everything →</Link>
      </div>
      <div className="series-grid">
        {series.map((s) => (
          <Link key={s.slug} to={`/work/${s.slug}`} className="series-tile reveal">
            <div className="series-img">
              <img src={s.cover.image} alt="" loading="lazy" />
            </div>
            <div className="series-meta">
              <span className="series-name">{s.name}</span>
              <span className="series-count">{s.works.length}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
