import Header from 'components/Header/Header'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cesar Boaventura • Front-End Engineer</title>
        <meta
          name="description"
          content="Cesar Boaventura, Front-End Engineer"
        />
      </Head>

      <Header />

      <main>
        <h1>Main</h1>
      </main>

      <footer className={styles.footer}>
        <p>Footer</p>
      </footer>
    </div>
  )
}

export default Home
