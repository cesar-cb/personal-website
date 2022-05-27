import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'

export type TProps = {
  children: ReactNode
  outline?: boolean
  arrow?: boolean
  asLink?: boolean
  className?: string
}

const Button: FC<TProps> = ({
  children,
  className,
  outline = false,
  arrow = false,
  asLink = false,
  ...rest
}) => {
  const Component = asLink ? 'a' : 'button'

  const buttonClasses = classNames(styles.button, className, {
    [styles.outline]: outline,
  })

  return (
    <Component
      {...rest}
      type={asLink ? undefined : 'button'}
      className={buttonClasses}
    >
      {children} {arrow && <span>→</span>}
    </Component>
  )
}

export default Button
