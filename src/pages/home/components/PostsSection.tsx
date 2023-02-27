import Anchor from 'components/Anchor'
import Button from 'components/Button'
import PostPreview from 'components/PostPreview'
import SectionTitle from 'components/SectionTitle'
import styles from './PostsSection.module.scss'

const PostsSection = () => {
  return (
    <section className={styles.postsContainer}>
      <div className={styles.articles}>
        <SectionTitle
          title="last articles"
          color="secondary"
          className={styles.articleTitle}
        />
        <Anchor
          href="/blog/how-we-improve-our-perception-of-metrics"
          hideArrow
          className={styles.articleItem}
        >
          <PostPreview
            title="How we improve our perception of metrics"
            description="The initial step to improving your metrics indicators is knowing where the problem is. Today I'm going to talk a little about our solution using Next.JS, Prometheus and Grafana."
            tags={['nextjs', 'prometheus', 'grafana']}
            date="2023-02-21T00:00:00.000-03:00"
            type="article"
            readingTime={4}
          />
        </Anchor>

        <Anchor
          href="/blog/how-we-improve-our-perception-of-metrics"
          hideArrow
          className={styles.articleItem}
        >
          <PostPreview
            title="How we improve our perception of metrics"
            description="The initial step to improving your metrics indicators is knowing where the problem is. Today I'm going to talk a little about our solution using Next.JS, Prometheus and Grafana."
            tags={['nextjs', 'prometheus', 'grafana']}
            date="2023-02-21T00:00:00.000-03:00"
            type="article"
            readingTime={4}
          />
        </Anchor>
        <Button href="/posts" element="a" outline arrow>
          view all articles
        </Button>
      </div>

      <div className={styles.projects}>
        <SectionTitle
          title="last projects"
          color="secondary"
          className={styles.articleTitle}
        />
        <Anchor
          href="/blog/how-we-improve-our-perception-of-metrics"
          hideArrow
          className={styles.articleItem}
        >
          <PostPreview
            title="How we improve our perception of metrics"
            description="The initial step to improving your metrics indicators is knowing where the problem is. Today I'm going to talk a little about our solution using Next.JS, Prometheus and Grafana."
            tags={['nextjs', 'prometheus', 'grafana']}
            date="2023-02-21T00:00:00.000-03:00"
            type="project"
            readingTime={4}
          />
        </Anchor>
        <Anchor
          href="/blog/how-we-improve-our-perception-of-metrics"
          hideArrow
          className={styles.articleItem}
        >
          <PostPreview
            title="How we improve our perception of metrics"
            description="The initial step to improving your metrics indicators is knowing where the problem is. Today I'm going to talk a little about our solution using Next.JS, Prometheus and Grafana."
            tags={['nextjs', 'prometheus', 'grafana']}
            date="2023-02-21T00:00:00.000-03:00"
            type="project"
            readingTime={4}
          />
        </Anchor>
        <Button href="/posts" element="a" outline arrow>
          view all projects
        </Button>
      </div>
    </section>
  )
}

export default PostsSection
