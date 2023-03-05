import { RefObject } from 'react'
import useEventListener from './useEventListener'

interface UseClickOutside {
  listener: (event: Event) => void
  element: RefObject<HTMLElement>
}

const useClickOutside = ({ listener, element }: UseClickOutside): void => {
  const handleOutsideClick = (event: Event) => {
    const el = element?.current

    if (!el || el.contains(event.target as Node)) {
      return
    }

    listener(event)
  }

  useEventListener({
    type: 'mousedown',
    listener: handleOutsideClick,
  })
}

export default useClickOutside
