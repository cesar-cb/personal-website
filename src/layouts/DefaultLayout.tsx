import { FC, PropsWithChildren } from 'react'
import Header from 'components/Header'
import styles from './Layout.module.scss'
import classNames from 'classnames'
import Anchor from 'components/Anchor'

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
          <>
            {backButton && (
              <Anchor
                href={backButton.href}
                leftArrow
                className={styles.backButton}
              >
                {backButton.text}
              </Anchor>
            )}
            {children}
          </>
        </main>
      </div>
      {/* <footer>footer</footer> */}
    </>
  )
}

export default DefaultLayout
