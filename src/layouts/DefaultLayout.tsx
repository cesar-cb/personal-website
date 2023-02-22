import { FC, ReactNode } from 'react'
import Header from 'components/Header/Header'
import styles from './Layout.module.scss'

type TProps = {
  children: ReactNode
}

const DefaultLayout: FC<TProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.layoutWrapper}>
        <main className={styles.defaultLayoutContainer}>{children}</main>
      </div>
      {/* <footer>footer</footer> */}
    </>
  )
}

export default DefaultLayout
