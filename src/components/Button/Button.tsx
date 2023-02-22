import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { TAnchorElementProps } from 'components/Anchor/types'
import { splitAnchorLinkProps } from 'components/Anchor/utils'
import styles from './Button.module.scss'

type TButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>
type TAnchorAttributes = AnchorHTMLAttributes<HTMLAnchorElement>

type TConditionalProps =
  | ({ element?: 'a' } & TAnchorAttributes)
  | ({ element?: 'button' } & TButtonAttributes)

export type TProps = {
  outline?: boolean
  arrow?: boolean
  className?: string
} & TConditionalProps

const Button: FC<TProps> = ({
  children,
  className,
  outline = false,
  arrow = false,
  element,
  ...rest
}) => {
  const buttonClasses = classNames(styles.button, className, {
    [styles.outline]: outline,
  })

  const getContent = () => (
    <span>
      {children}
      {arrow && <span>→</span>}
    </span>
  )

  if (element === 'a') {
    const { linkProps, anchorProps } = splitAnchorLinkProps({
      ...(rest as TAnchorElementProps),
      className: buttonClasses,
    })

    return (
      <Link {...linkProps} {...anchorProps}>
        {getContent()}
      </Link>
    )
  }

  const buttonProps = {
    ...(rest as TButtonAttributes),
    className: buttonClasses,
  }

  return (
    <button type="button" {...buttonProps}>
      {getContent()}
    </button>
  )
}

export default Button
