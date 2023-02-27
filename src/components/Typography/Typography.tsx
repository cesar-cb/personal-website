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
  label: 'p',
}

export type TTypographyElements = keyof typeof variantsMapping

type TProps = {
  variant?: TTypographyElements
  as?: TTypographyElements
  children: ReactNode
  className?: string
  lineHeight?: string
  font?: 'heading' | 'body'
}

const Typography: FC<TProps> = ({
  variant = 'p',
  as = 'p',
  children,
  className = '',
  font,
}): JSX.Element => {
  const Component = createElement(
    variantsMapping[as],
    {
      className: classNames(
        styles.typography,
        styles[`typography--variant-${variant}`],
        className,
        {
          [styles['typography--variant-heading-font']]: font === 'heading',
          [styles['typography--variant-body-font']]: font === 'body',
        },
      ),
    },
    children,
  )

  return Component
}

export default Typography
