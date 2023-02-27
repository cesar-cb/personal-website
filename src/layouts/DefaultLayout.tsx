import { FC, PropsWithChildren, ReactNode } from 'react'
import Header from 'components/Header'
import styles from './Layout.module.scss'
import classNames from 'classnames'

type TProps = {
  small?: boolean
}

const DefaultLayout: FC<PropsWithChildren<TProps>> = ({
  children,
  small = false,
}) => {
  const classes = classNames(styles.defaultLayoutContainer, {
    [styles.small]: small,
  })

  return (
    <>
      <Header />
      <div className={styles.layoutWrapper}>
        <main className={classes}>{children}</main>
      </div>
      {/* <footer>footer</footer> */}
    </>
  )
}

export default DefaultLayout
