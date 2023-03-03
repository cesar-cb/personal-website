import { FC, PropsWithChildren } from 'react'
import Header from 'components/Header'
import classNames from 'classnames'
import BackButton from 'components/BackButton'
import styles from './Layout.module.scss'

type TProps = {
  small?: boolean
  backButton?: {
    text: string
    href: string
  }
}

const DefaultLayout: FC<PropsWithChildren<TProps>> = ({
  children,
  small = false,
  backButton,
}) => {
  const classes = classNames(styles.defaultLayoutContainer, {
    [styles.small]: small,
  })

  return (
    <>
      <Header />
      <div className={styles.layoutWrapper}>
        <main className={classes}>
          {backButton && (
            <BackButton
              href={backButton.href}
              text={backButton.text}
              className={styles.backButton}
            />
          )}
          {children}
        </main>
      </div>
      {/* <footer>footer</footer> */}
    </>
  )
}

export default DefaultLayout
