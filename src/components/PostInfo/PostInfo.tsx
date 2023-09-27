import { FC } from 'react'
import Typography from 'components/Typography'
import classNames from 'classnames'
import styles from './PostInfo.module.scss'

type TProps = {
  date: string
  readingTime: number
  italic?: boolean
}

const PostInfo: FC<TProps> = ({ date, readingTime, italic = false }) => {
  const classes = classNames(styles.date, {
    [styles.italic]: italic,
  })

  return (
    <time className={classes}>
      <Typography as="p" variant="label" font="heading">
        Posted on{' '}
        {new Intl.DateTimeFormat('pt-BR', { dateStyle: 'medium' }).format(
          new Date(date),
        )}{' '}
        • {Math.ceil(readingTime)} min read
      </Typography>
    </time>
  )
}

export default PostInfo
