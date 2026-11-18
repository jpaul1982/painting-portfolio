import { useEffect } from 'react'
import { site } from './data/site.js'

export default function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${site.name}` : `${site.name} — Portraits, Pets & Still Life`
  }, [title])
}
