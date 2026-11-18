import { useLightbox } from '../lightbox.jsx'

const statusLabel = { available: 'Available', sold: 'Sold', commission: 'Commission', nfs: 'Not for sale' }

export default function WorkGrid({ list }) {
  const open = useLightbox()

  if (list.length === 0) {
    return <p className="empty">Nothing here right now — get in touch about commissions.</p>
  }

  return (
    <div className="grid">
      {list.map((w, i) => (
        <button key={w.id} className="card reveal" onClick={() => open(w, list)}>
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
  )
}
