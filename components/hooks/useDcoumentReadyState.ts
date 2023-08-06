import { useEffect, useState } from 'react'

export function useDocumentReadyState(): DocumentReadyState {
  const [readyState, setReadyState] = useState<DocumentReadyState | undefined>()

  useEffect(() => {
    function onStateChange() {
      setReadyState(document.readyState)
    }

    document.addEventListener('readystatechange', onStateChange, false)
    onStateChange()

    return () => {
      document.removeEventListener('readystatechange', onStateChange, false)
    }
  }, [])

  return readyState as DocumentReadyState
}

// Custom type for document.readyState values
type DocumentReadyState = 'loading' | 'interactive' | 'complete'
