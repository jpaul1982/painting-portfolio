import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { works } from '../data/works.js'
import { series, findSeries } from '../data/series.js'
import SeriesNav from '../components/SeriesNav.jsx'
import WorkGrid from '../components/WorkGrid.jsx'
import NotFound from './NotFound.jsx'
import useTitle from '../useTitle.js'

// Handles both /work (everything) and /work/:slug (one series).
export default function WorkPage() {
  const { slug } = useParams()
  const current = slug ? findSeries(slug) : null
  const [availableOnly, setAvailableOnly] = useState(false)
  useTitle(current ? current.name : slug ? 'Not found' : 'Work')

  if (slug && !current) return <NotFound />

  const all = current ? current.works : works
  const list = availableOnly ? all.filter((w) => w.status === 'available') : all
  const i = current ? series.indexOf(current) : -1
  const prev = i > 0 ? series[i - 1] : null
  const next = i >= 0 && i < series.length - 1 ? series[i + 1] : null

  return (
    <>
      <section className="page-head">
        <p className="eyebrow">
          {current ? 'Series' : 'All work'} · {all.length} {all.length === 1 ? 'piece' : 'pieces'}
        </p>
        <h1>{current ? <em>{current.name}</em> : <>All <em>work</em></>}</h1>
        {current?.description && <p className="page-desc">{current.description}</p>}
      </section>

      <section className="section work-section">
        <div className="section-head">
          <SeriesNav />
          <label className="toggle">
            <input type="checkbox" checked={availableOnly} onChange={(e) => setAvailableOnly(e.target.checked)} />
            Available only
          </label>
        </div>

        <WorkGrid list={list} key={`${slug ?? 'all'}-${availableOnly}`} />

        {current && (
          <nav className="series-pager" aria-label="Other series">
            {prev ? <Link to={`/work/${prev.slug}`}>← {prev.name}</Link> : <span />}
            {next ? <Link to={`/work/${next.slug}`}>{next.name} →</Link> : <Link to="/work">All work →</Link>}
          </nav>
        )}
      </section>
    </>
  )
}
