import { FC } from 'react'
import Typography, { TTypographyElements } from 'components/Typography'
import Anchor from 'components/Anchor'
import NextLink from 'next/link'
import classNames from 'classnames'
import styles from './SectionTitle.module.scss'

type TProps = {
  title: string
  color?: 'primary' | 'secondary'
  link?: {
    href: string
    text: string
  } & typeof NextLink.defaultProps
  as?: TTypographyElements
  variant?: TTypographyElements
  className?: string
}

const SectionTitle: FC<TProps> = ({
  title,
  link: { href, text, ...restLink } = {},
  as = 'h4',
  variant = 'p',
  color = 'secondary',
  className,
}) => {
  const titleClasses = classNames(styles.title, className, {
    [styles.primary]: color === 'primary',
    [styles.secondary]: color === 'secondary',
  })

  return (
    <>
      <Typography
        variant={variant}
        as={as}
        className={titleClasses}
        font="heading"
      >
        {title}
      </Typography>
      {href && text && (
        <Anchor href={href} {...restLink}>
          {text}
        </Anchor>
      )}
    </>
  )
}

export default SectionTitle
