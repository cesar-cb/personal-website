import { FC, PropsWithChildren } from 'react'
import Header from 'components/Header'
import classNames from 'classnames'
import BackButton from 'components/BackButton'
import Anchor from 'components/Anchor'
import Typography from 'components/Typography'
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
        <footer className={styles.footer}>
          <ul>
            <li>
              <Anchor href="mailto:cesar.boaventura61@gmail.com" hideArrow>
                Email
              </Anchor>
            </li>

            <li>
              <Anchor
                href="https://www.linkedin.com/in/cesar-boaventura/"
                target="_blank"
                hideArrow
              >
                Linkedin
              </Anchor>
            </li>

            <li>
              <Anchor
                href="https://github.com/cesar-cb"
                target="_blank"
                hideArrow
              >
                GitHub
              </Anchor>
            </li>
          </ul>

          <Typography font="heading" className={styles.rights}>
            © {new Date().getFullYear()} Cesar Boaventura. All rights reserved.
          </Typography>
        </footer>
      </div>
    </>
  )
}

export default DefaultLayout
