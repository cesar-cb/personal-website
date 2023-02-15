import { TAnchorElementProps } from './types'

export const splitAnchorLinkProps = (props: TAnchorElementProps) => {
  const {
    href,
    replace,
    scroll,
    shallow,
    passHref,
    prefetch,
    locale,
    legacyBehavior,
    ...restProps
  } = props

  const linkProps = {
    href,
    replace,
    scroll,
    shallow,
    passHref,
    prefetch,
    locale,
    legacyBehavior,
  }

  const anchorProps = {
    ...restProps,
    target: restProps.target,
    rel:
      restProps.target === '_blank'
        ? 'external noopener noreferrer'
        : undefined,
  }

  return {
    linkProps,
    anchorProps,
  }
}
