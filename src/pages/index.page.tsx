import Button from 'components/Button'
import Anchor from 'components/Anchor'
import PostPreview from 'components/PostPreview'
import SectionTitle from 'components/SectionTitle'
import Typography from 'components/Typography'
import DefaultLayout from 'layouts/DefaultLayout'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from './Home.module.scss'

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
        <Typography variant="h1" as="h3" className={styles.headline}>
          Front-end developer. <br /> Passionate about code and solutions
        </Typography>
        <Anchor href="/about">About me</Anchor>
        <section className={styles.postsContainer}>
          <div className={styles.articles}>
            <SectionTitle
              title="last articles"
              color="primary"
              className={styles.articleTitle}
            />
            <PostPreview
              title="How we improve our perception of metrics"
              description="The initial step to improving your metrics indicators is knowing where the problem is. Today I'm going to talk a little about our solution using Next.JS, Prometheus and Grafana."
              tags={['nextjs', 'prometheus', 'grafana']}
              link={{
                href: '/blog/how-we-improve-our-perception-of-metrics',
              }}
              className={styles.articleItem}
            />
            <PostPreview
              title="How we improve our perception of metrics"
              description="The initial step to improving your metrics indicators is knowing where the problem is. Today I'm going to talk a little about our solution using Next.JS, Prometheus and Grafana."
              tags={['nextjs', 'prometheus', 'grafana']}
              link={{
                href: '/blog/how-we-improve-our-perception-of-metrics',
              }}
              className={styles.articleItem}
            />
            <Button href="/posts?type=article" element="a" outline arrow>
              view all articles
            </Button>
          </div>

          <div className={styles.projects}>
            <SectionTitle
              title="last projects"
              color="secondary"
              className={styles.articleTitle}
            />
            <PostPreview
              title="How we improve our perception of metrics"
              description="The initial step to improving your metrics indicators is knowing where the problem is. Today I'm going to talk a little about our solution using Next.JS, Prometheus and Grafana."
              tags={['nextjs', 'prometheus', 'grafana']}
              link={{
                href: '/blog/how-we-improve-our-perception-of-metrics',
              }}
              className={styles.articleItem}
            />
            <PostPreview
              title="How we improve our perception of metrics"
              description="The initial step to improving your metrics indicators is knowing where the problem is. Today I'm going to talk a little about our solution using Next.JS, Prometheus and Grafana."
              tags={['nextjs', 'prometheus', 'grafana']}
              link={{
                href: '/blog/how-we-improve-our-perception-of-metrics',
              }}
              className={styles.articleItem}
            />
            <Button href="/posts?type=project" element="a" outline arrow>
              view all projects
            </Button>
          </div>
        </section>
      </DefaultLayout>
    </div>
  )
}

export default Home
