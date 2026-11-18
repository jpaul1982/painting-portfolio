import { NavLink } from 'react-router-dom'
import { series } from '../data/series.js'

// The row of chips on the work pages; each one is a link to that series' page.
export default function SeriesNav() {
  const cls = ({ isActive }) => (isActive ? 'chip active' : 'chip')
  return (
    <nav className="filters" aria-label="Series">
      <NavLink to="/work" end className={cls}>All</NavLink>
      {series.map((s) => (
        <NavLink key={s.slug} to={`/work/${s.slug}`} className={cls}>{s.name}</NavLink>
      ))}
    </nav>
  )
}
