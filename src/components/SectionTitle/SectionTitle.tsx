import { FC } from 'react'
import Typography, { TTypographyElements } from 'components/Typography'
import Link from 'components/Link'
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
  variant = 'h2',
  color = 'secondary',
  className,
}) => {
  const titleClasses = classNames(styles.title, className, {
    [styles.primary]: color === 'primary',
    [styles.secondary]: color === 'secondary',
  })

  return (
    <>
      <Typography variant={variant} as={as} className={titleClasses}>
        {title}
      </Typography>
      {href && text && (
        <Link href={href} {...restLink}>
          {text}
        </Link>
      )}
    </>
  )
}

export default SectionTitle
