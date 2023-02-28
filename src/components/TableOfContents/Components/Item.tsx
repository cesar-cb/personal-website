import React, { FC } from 'react'
import classNames from 'classnames'
import Anchor from 'components/Anchor'
import styles from './Item.module.scss'
import { slugify } from 'lib/text'

type TProps = {
  itemName: string
  active: boolean
  level: number
}

const Item: FC<TProps> = ({ itemName, active, level }) => {
  const itemId = slugify(itemName)

  const classes = classNames(styles.anchor, {
    [styles.active]: active,
    [styles.title]: level === 2,
    [styles.subTitle]: level > 2,
  })

  return (
    <Anchor
      href={`#${itemId}`}
      className={classes}
      aria-label={`Scroll to ${itemName}`}
      hideArrow
    >
      {itemName}
    </Anchor>
  )
}

export default Item
