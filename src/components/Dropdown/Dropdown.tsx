import { FC, useState, useRef } from 'react'
import classNames from 'classnames'
import { MdClose } from 'react-icons/md'
import { BiChevronDown } from 'react-icons/bi'
import Anchor from 'components/Anchor'
import Typography from 'components/Typography'
import useClickOutside from 'hooks/onClickOutside'
import styles from './Dropdown.module.scss'

type TItem = {
  href?: string
  text: string
  onClick?: () => void
}

type TProps = {
  items: Array<TItem>
  className?: string
}

const Dropdown: FC<TProps> = ({ items, className }) => {
  const [isVisible, setIsVisible] = useState(false)
  const navRef = useRef(null)

  useClickOutside({ listener: () => setIsVisible(false), element: navRef })

  const dropdownContainerClasses = classNames(
    styles.dropdownContainer,
    className,
    {
      [styles.visible]: isVisible,
    },
  )

  return (
    <div className={dropdownContainerClasses}>
      <button
        onClick={() => setIsVisible(true)}
        className={styles.openButton}
        type="button"
      >
        Menu
        <BiChevronDown />
      </button>
      <nav role="navigation" className={styles.dropdown} ref={navRef}>
        <div className={styles.dropdownHeader}>
          <Typography as="p" variant="label" font="heading">
            Menu
          </Typography>
          <button onClick={() => setIsVisible(false)} type="button">
            <MdClose />
          </button>
        </div>
        <ul className={styles.parentList}>
          {items.map((item) => (
            <li key={item.href} className={styles.parentItem}>
              <Anchor
                hideArrow
                href={item.href}
                onClick={item.onClick}
                element={item.href ? 'a' : 'button'}
              >
                {item.text}
              </Anchor>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.blur} />
    </div>
  )
}

export default Dropdown
