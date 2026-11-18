import { Link } from 'react-router-dom'
import useTitle from '../useTitle.js'

export default function NotFound() {
  useTitle('Not found')
  return (
    <section className="page-head">
      <p className="eyebrow">Page not found</p>
      <h1>Nothing <em>hanging</em> here</h1>
      <p className="page-desc">That page doesn’t exist, or the series has been renamed.</p>
      <Link to="/work" className="text-link">See all the work →</Link>
    </section>
  )
}
