import { useEffect } from 'react'

// Fades .reveal elements up as they scroll into view, including ones added later (e.g. after filtering).
export default function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      }),
      { rootMargin: '0px 0px -8% 0px' }
    )
    const scan = () => document.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el))
    scan()
    const mo = new MutationObserver(scan)
    mo.observe(document.body, { childList: true, subtree: true })

    // Backup for fast scrolls/jumps: anything already scrolled past gets revealed too,
    // otherwise it could stay invisible when you scroll back up.
    let frame = 0
    const catchUp = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        document.querySelectorAll('.reveal:not(.in)').forEach((el) => {
          if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('in')
            io.unobserve(el)
          }
        })
      })
    }
    window.addEventListener('scroll', catchUp, { passive: true })

    return () => {
      io.disconnect()
      mo.disconnect()
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', catchUp)
    }
  }, [])
}
