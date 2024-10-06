import { useEffect } from 'react'

export const useListeners = () => {
  const listenerFunction = (event) => {
    if ((event.key == 1) | (event.key == 2) | (event.key == 3) | (event.key == 4)) {
      const button = document.getElementById(`answer-${event.key}`)
      button.click()
    }
  }

  useEffect(() => {
    document.addEventListener('keypress', listenerFunction)

    return function cleanupListener() {
      document.removeEventListener('keypress', listenerFunction)
    }
  }, [])
}
