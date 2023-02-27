import type { NextPage } from 'next'
import Head from 'next/head'
import DefaultLayout from 'layouts/DefaultLayout'
import AboutSection from './components/AboutSection'
import PostsSection from './components/PostsSection'

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

      <DefaultLayout>
        <AboutSection />
        <PostsSection />
      </DefaultLayout>
    </div>
  )
}

export default Home
