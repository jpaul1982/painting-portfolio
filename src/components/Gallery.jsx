import { useMemo, useState } from 'react'
import { works } from '../data/works.js'

const statusLabel = { available: 'Available', sold: 'Sold', commission: 'Commission', nfs: 'Not for sale' }

export default function Gallery({ onOpen }) {
  const series = useMemo(() => ['All', ...new Set(works.map((w) => w.series))], [])
  const [filter, setFilter] = useState('All')
  const [availableOnly, setAvailableOnly] = useState(false)

  const list = works.filter(
    (w) => (filter === 'All' || w.series === filter) && (!availableOnly || w.status === 'available')
  )

  return (
    <section className="section" id="work">
      <div className="section-head">
        <h2>The <em>work</em></h2>
        <div className="filters" role="group" aria-label="Filter paintings">
          {series.map((s) => (
            <button key={s} className={s === filter ? 'chip active' : 'chip'} onClick={() => setFilter(s)}>
              {s}
            </button>
          ))}
          <label className="toggle">
            <input type="checkbox" checked={availableOnly} onChange={(e) => setAvailableOnly(e.target.checked)} />
            Available only
          </label>
        </div>
      </div>

      {list.length === 0 ? (
        <p className="empty">Nothing here right now — get in touch about commissions.</p>
      ) : (
        <div className="grid">
          {list.map((w, i) => (
            <button key={w.id} className="card reveal" onClick={() => onOpen(w, list)}>
              <span className="card-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="card-img">
                <img src={w.image} alt={w.title} loading="lazy" />
              </div>
              <div className="card-meta">
                <span className="card-title">{w.title}</span>
                {w.status && <span className={`status ${w.status}`}>{statusLabel[w.status]}</span>}
              </div>
              <span className="card-sub">{[w.medium, w.year, w.size].filter(Boolean).join(' · ')}</span>
            </button>
          ))}
        </div>
      )}
    </section>
  )
}
