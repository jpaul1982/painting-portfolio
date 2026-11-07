import { site } from '../data/site.js'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="about-portrait">
        <img src={site.portrait} alt={site.portraitAlt} loading="lazy" />
      </div>
      <div className="about-text reveal">
        <h2>About the <em>painter</em></h2>
        {site.statement.map((p, i) => <p key={i}>{p}</p>)}
        {/* <h3>Exhibitions</h3>
        <ul className="exhibitions">
          {site.exhibitions.map((e) => (
            <li key={e.year + e.title}>
              <span className="ex-year">{e.year}</span>
              <span><em>{e.title}</em>, {e.venue}</span>
              <span className="ex-type">{e.type}</span>
            </li>
          ))}
        </ul> */}
      </div>
    </section>
  )
}
