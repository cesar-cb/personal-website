import { FC } from 'react'
import Typography from 'components/Typography'
import { BiTag } from 'react-icons/bi'
import styles from './PostPreview.module.scss'

type TProps = {
  title: string
  description: string
  tags: Array<string>
  type: 'article' | 'project'
  date: string
  readingTime: number
}

const SectionTitle: FC<TProps> = ({
  title,
  description,
  tags,
  date,
  readingTime,
}) => {
  return (
    <article className={styles.container}>
      <Typography variant="h4" as="h4" className={styles.title}>
        {title}
      </Typography>
      <time className={styles.date}>
        <Typography as="p" variant="label">
          {new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(
            new Date(date),
          )}{' '}
          • {Math.ceil(readingTime)} min de leitura
        </Typography>
      </time>
      <Typography className={styles.description}>{description}</Typography>
      <span className={styles.tags}>
        <BiTag className={styles.tagIcon} size={15} />{' '}
        <Typography as="p" variant="label">
          {tags.join(', ')}
        </Typography>
      </span>
      <div className={styles.hover} />
    </article>
  )
}

export default SectionTitle
