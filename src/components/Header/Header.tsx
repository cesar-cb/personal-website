import ToggleTheme from 'components/ToggleTheme'
import Link from 'next/link'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.logo}>CESAR BOAVENTURA</a>
        </Link>
        <ToggleTheme />
      </div>
    </header>
  )
}

export default Header
