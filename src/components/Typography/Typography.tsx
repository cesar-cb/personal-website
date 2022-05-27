import classNames from 'classnames'
import { FC, ReactNode, createElement } from 'react'
import styles from './Typography.module.scss'

const variantsMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  span: 'span',
}

export type TTypographyElements = keyof typeof variantsMapping

type TProps = {
  variant?: TTypographyElements
  as?: TTypographyElements
  children: ReactNode
  className?: string
  lineHeight?: string
}

const Typography: FC<TProps> = ({
  variant = 'p',
  as,
  children,
  className = '',
}): JSX.Element => {
  const variantType = as || variant

  const Component = createElement(
    variantsMapping[variant],
    {
      className: classNames(
        styles.typography,
        styles[`typography--variant-${variantType}`],
        className,
      ),
    },
    children,
  )

  return Component
}

export default Typography
