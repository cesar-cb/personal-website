import { FC } from 'react'
import Anchor from 'components/Anchor'
import classNames from 'classnames'
import styles from './BackButton.module.scss'

type TProps = {
  href: string
  text: string
  className?: string
}

const BackButton: FC<TProps> = ({ href, text, className }) => {
  return (
    <Anchor
      href={href}
      leftArrow
      className={classNames(styles.backButton, className)}
    >
      {text}
    </Anchor>
  )
}

export default BackButton
