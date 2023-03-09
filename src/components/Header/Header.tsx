import Link from 'next/link'
import Anchor from 'components/Anchor'
import dynamic from 'next/dynamic'
import Typography from 'components/Typography'
import PopupMenu from 'components/PopupMenu'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import styles from './Header.module.scss'

const ToggleTheme = dynamic(() => import('components/ToggleTheme'), {
  ssr: false,
})

const menuItems = [
  {
    href: '/about',
    text: 'sobre mim',
  },
  {
    href: '/articles',
    text: 'artigos',
  },
  {
    href: '/projects',
    text: 'projetos',
  },
]

const Header = () => {
  const { asPath, isReady } = useRouter()

  const isActive = (href: string) => isReady && href === asPath

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Typography as="span" font="heading">
            CESAR BOAVENTURA
          </Typography>
        </Link>
        <nav className={styles.deskNav}>
          <ul className={styles.navList}>
            {menuItems.map((item) => (
              <li
                key={item.href}
                className={classNames(styles.navItem, {
                  [styles.activeItem]: isActive(item.href),
                })}
              >
                <Anchor href={item.href} hideArrow>
                  <Typography as="span" variant="p" font="heading">
                    {item.text}
                  </Typography>
                </Anchor>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.left}>
          <PopupMenu items={menuItems} className={styles.dropdown} />
          <ToggleTheme />
        </div>
      </div>
    </header>
  )
}

export default Header
