import Link from 'next/link'
import dynamic from 'next/dynamic'
import Typography from 'components/Typography'
import styles from './Header.module.scss'

const ToggleTheme = dynamic(() => import('components/ToggleTheme'), {
  ssr: false,
})

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Typography as="span" font="heading">
            CESAR BOAVENTURA
          </Typography>
        </Link>
        <ToggleTheme />
      </div>
    </header>
  )
}

export default Header
