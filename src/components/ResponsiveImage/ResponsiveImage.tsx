import { FC } from 'react'
import Image from 'next/image'
import styles from './ResponsiveImage.module.scss'

type TProps = {
  src: string
  alt: string
}

const ResponsiveImage: FC<TProps> = ({ src, alt }) => {
  return (
    <div className={styles.imageWrapper}>
      <Image src={src} alt={alt} className={styles.image} fill />
    </div>
  )
}

export default ResponsiveImage
