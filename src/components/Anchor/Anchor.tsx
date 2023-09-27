import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import styles from './Anchor.module.scss'
import { splitAnchorLinkProps } from './utils'
import { TAnchorElementProps } from './types'

type TButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>
type TAnchorAttributes = AnchorHTMLAttributes<HTMLAnchorElement>

type TConditionalProps =
  | ({ element?: 'a' } & TAnchorAttributes)
  | ({ element?: 'button' } & TButtonAttributes)

export type TProps = {
  hideArrow?: boolean
  leftArrow?: boolean
  className?: string
  hover?: boolean
} & TConditionalProps

const Anchor: FC<TProps> = ({
  element = 'a',
  children,
  hideArrow = false,
  leftArrow = false,
  className,
  hover = true,
  ...rest
}) => {
  const anchorClasses = classNames(className, styles.anchor, {
    [styles.leftArrow]: leftArrow,
    [styles.hover]: hover,
  })

  if (element === 'a') {
    const { linkProps, anchorProps } = splitAnchorLinkProps({
      ...(rest as TAnchorElementProps),
      className: anchorClasses,
    })

    return (
      <Link {...linkProps} {...anchorProps}>
        {children} {!hideArrow && <span className={styles.arrow}>→</span>}
      </Link>
    )
  }

  const buttonProps = {
    ...(rest as TButtonAttributes),
    className: anchorClasses,
  }

  return (
    <button type="button" {...buttonProps}>
      {children} {!hideArrow && <span className={styles.arrow}>→</span>}
    </button>
  )
}

export default Anchor
