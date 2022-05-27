import { FC, ReactNode } from 'react'
import NextLink from 'next/link'
import classNames from 'classnames'
import Button, { TProps as TButtonProps } from 'components/Button'
import styles from './Link.module.scss'

type TProps = {
  children: ReactNode
  href: string
  replace?: boolean
  scroll?: boolean
  shallow?: boolean
  passHref?: boolean
  hideArrow?: boolean
  className?: string
  asButton?: boolean
  buttonProps?: Omit<TButtonProps, 'children'>
} & typeof NextLink.defaultProps

const Link: FC<TProps> = ({
  as,
  children,
  href,
  replace,
  scroll,
  shallow,
  passHref = true,
  className,
  hideArrow = false,
  asButton = false,
  buttonProps = {},
  ...rest
}) => {
  const Component = asButton ? (
    <Button {...buttonProps} className={className} arrow={!hideArrow} asLink>
      {children}
    </Button>
  ) : (
    <a className={classNames(styles.link, className)}>
      {children} {!hideArrow && <span className={styles.arrow}>→</span>}
    </a>
  )

  return (
    <NextLink
      as={as}
      href={href}
      passHref={passHref}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      {...rest}
    >
      {Component}
    </NextLink>
  )
}

export default Link
