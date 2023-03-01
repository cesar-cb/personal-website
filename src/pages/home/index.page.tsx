import type { NextPage } from 'next'
import Head from 'next/head'
import DefaultLayout from 'layouts/DefaultLayout'
import AboutSection from './components/AboutSection'
import PostsSection from './components/PostsSection'
import { getAllPublished } from 'lib/notion'

type TPost = {
  id: string
  title: string
  tags: Array<string>
  description: string
  date: string
  slug: string
  type: 'project' | 'article'
  readingTime: number
}

type TProps = {
  articles: Array<TPost>
  projects: Array<TPost>
}

const Home: NextPage<TProps> = ({ articles, projects }) => {
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
        <PostsSection articles={articles} projects={projects} />
      </DefaultLayout>
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await getAllPublished()

  const projects = data.filter((post) => post.type === 'project').slice(0, 2)
  const articles = data.filter((post) => post.type === 'article').slice(0, 2)

  return {
    props: {
      projects,
      articles,
    },
    revalidate: 60,
  }
}

export default Home
