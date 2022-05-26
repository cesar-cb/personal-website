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

type TElements = keyof typeof variantsMapping

type TProps = {
  variant?: TElements
  as?: TElements
  children: ReactNode
}

const Typography: FC<TProps> = ({
  variant = 'p',
  as,
  children,
}): JSX.Element => {
  const variantType = as || variant

  const Component = createElement(
    variantsMapping[variant],
    { className: styles[`typography--variant-${variantType}`] },
    children,
  )

  return Component
}

export default Typography
