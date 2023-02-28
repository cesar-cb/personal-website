import { FC } from 'react'
import Typography from 'components/Typography'
import styles from './PostInfo.module.scss'
import classNames from 'classnames'

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
        Postado em{' '}
        {new Intl.DateTimeFormat('pt-BR', { dateStyle: 'medium' }).format(
          new Date(date),
        )}{' '}
        • {Math.ceil(readingTime)} min de leitura
      </Typography>
    </time>
  )
}

export default PostInfo
