import { site } from '../data/site.js'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <h2 className="reveal">Commissions <em>&amp; enquiries</em></h2>
      <p>
        I take a small number of commissions each year — landscapes, still lifes and portraits from life.
        For purchases, studio visits or exhibition enquiries, write to me.
      </p>
      <a className="contact-email" href={`mailto:${site.email}`}>{site.email}</a>
      <p className="contact-sub">
        {site.location} · <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
      </p>
    </section>
  )
}
