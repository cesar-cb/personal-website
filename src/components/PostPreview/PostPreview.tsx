import { FC } from 'react'
import Typography from 'components/Typography'
import Link from 'components/Link'
import NextLink from 'next/link'
import { BiTag } from 'react-icons/bi'
import styles from './PostPreview.module.scss'

type TProps = {
  title: string
  description: string
  tags: Array<string>
  color?: 'primary' | 'secondary'
  className?: string
  link: {
    href: string
  } & typeof NextLink.defaultProps
}

const SectionTitle: FC<TProps> = ({
  title,
  description,
  tags,
  className = '',
  link: { href, ...restLink },
}) => {
  return (
    <Link href={href} hideArrow className={className} {...restLink}>
      <Typography variant="h3" as="h4" className={styles.title}>
        {title}
      </Typography>
      <Typography className={styles.description}>{description}</Typography>
      <span className={styles.tags}>
        <BiTag className={styles.tagIcon} size={15} /> {tags.join(', ')}
      </span>
    </Link>
  )
}

export default SectionTitle
