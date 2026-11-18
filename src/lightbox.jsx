import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Lightbox from './components/Lightbox.jsx'

const OpenContext = createContext(() => {})

// Lets any page open the painting popup: const open = useLightbox(); open(work, listToStepThrough)
export function LightboxProvider({ children }) {
  const [state, setState] = useState(null) // { list, index }
  const { pathname } = useLocation()

  const open = useCallback((work, list) => {
    setState({ list, index: Math.max(0, list.findIndex((w) => w.id === work.id)) })
  }, [])

  useEffect(() => setState(null), [pathname])

  return (
    <OpenContext.Provider value={open}>
      {children}
      {state && (
        <Lightbox
          works={state.list}
          index={state.index}
          onChange={(index) => setState((s) => ({ ...s, index }))}
          onClose={() => setState(null)}
        />
      )}
    </OpenContext.Provider>
  )
}

export const useLightbox = () => useContext(OpenContext)
