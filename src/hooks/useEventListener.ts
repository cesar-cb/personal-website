import { useRef, useEffect, useCallback, RefObject } from 'react'
import { getRefElement } from 'lib/ref'

interface UseEventListener {
  type: keyof WindowEventMap
  listener: EventListener
  element?: RefObject<Element> | Document | Window | null
  options?: AddEventListenerOptions
}

const useEventListener = ({
  type,
  listener,
  element = typeof window === 'undefined' ? undefined : window,
  options,
}: UseEventListener): void => {
  const savedListener = useRef<EventListener>()

  useEffect(() => {
    savedListener.current = listener
  }, [listener])

  const handleEventListener = useCallback((event: Event) => {
    savedListener.current?.(event)
  }, [])

  useEffect(() => {
    const target = getRefElement(element)
    target?.addEventListener(type, handleEventListener, options)
    return () => target?.removeEventListener(type, handleEventListener)
  }, [type, element, options, handleEventListener])
}

export default useEventListener
