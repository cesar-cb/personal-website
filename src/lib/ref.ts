import { RefObject } from 'react'

export const getRefElement = <T>(
  element?: RefObject<Element> | T,
): Element | T | undefined | null => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (element && 'current' in element) {
    return element.current
  }

  return element
}
