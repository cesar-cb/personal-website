import Link from 'next/link'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>Cesar Boaventura</a>
      </Link>
    </header>
  )
}

export default Header
