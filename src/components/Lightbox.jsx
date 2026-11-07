import { useEffect, useRef } from 'react'
import { site } from '../data/site.js'

const statusLabel = { available: 'Available', sold: 'Sold', commission: 'Commission', nfs: 'Not for sale' }

export default function Lightbox({ works, index, onChange, onClose }) {
  const w = works[index]
  const closeRef = useRef(null)
  const prev = () => onChange((index - 1 + works.length) % works.length)
  const next = () => onChange((index + 1) % works.length)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  })

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => { document.body.style.overflow = '' }
  }, [])

  const subject = encodeURIComponent(`Enquiry: ${w.title}${w.year ? ` (${w.year})` : ''}`)

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={w.title} onClick={onClose}>
      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-img">
          <img src={w.image} alt={w.title} />
        </div>
        <aside className="lightbox-info">
          <button ref={closeRef} className="close" onClick={onClose} aria-label="Close">×</button>
          <p className="eyebrow">{w.series}</p>
          <h3>{w.title}</h3>
          <dl>
            {w.year && <><dt>Year</dt><dd>{w.year}</dd></>}
            {w.medium && <><dt>Medium</dt><dd>{w.medium}</dd></>}
            {w.size && <><dt>Size</dt><dd>{w.size}</dd></>}
            {w.status && <><dt>Status</dt><dd>{statusLabel[w.status]}{w.status === 'available' && w.price ? ` · ${w.price}` : ''}</dd></>}
          </dl>
          {w.note && <p className="note">{w.note}</p>}
          {w.status === 'available' && (
            <a className="button" href={`mailto:${site.email}?subject=${subject}`}>Enquire about this painting</a>
          )}
          <div className="lightbox-nav">
            <button onClick={prev} aria-label="Previous painting">← Prev</button>
            <span>{index + 1} / {works.length}</span>
            <button onClick={next} aria-label="Next painting">Next →</button>
          </div>
        </aside>
      </div>
    </div>
  )
}
