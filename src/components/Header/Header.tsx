import Link from 'next/link'
import dynamic from 'next/dynamic'
import styles from './Header.module.scss'

const ToggleTheme = dynamic(() => import('components/ToggleTheme'), {
  ssr: false,
})

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
