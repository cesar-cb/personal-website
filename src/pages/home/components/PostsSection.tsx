import Anchor from 'components/Anchor'
import Button from 'components/Button'
import PostPreview from 'components/PostPreview'
import SectionTitle from 'components/SectionTitle'
import { FC } from 'react'
import styles from './PostsSection.module.scss'

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

const PostsSection: FC<TProps> = ({ articles, projects }) => {
  return (
    <section className={styles.postsContainer}>
      <div className={styles.articles}>
        <div className={styles.top}>
          <SectionTitle
            title="last articles"
            color="secondary"
            className={styles.articleTitle}
          />
          {articles.map((article) => (
            <Anchor
              key={article.id}
              href={`/${article.slug}`}
              hideArrow
              className={styles.articleItem}
              hover={false}
            >
              <PostPreview
                title={article.title}
                description={article.description}
                tags={article.tags}
                date={article.date}
                readingTime={article.readingTime}
              />
            </Anchor>
          ))}
        </div>
        <Button href="/articles" element="a" outline arrow>
          view all articles
        </Button>
      </div>

      <div className={styles.projects}>
        <div className={styles.top}>
          <SectionTitle
            title="last projects"
            color="secondary"
            className={styles.articleTitle}
          />
          {projects.map((project) => (
            <Anchor
              key={project.id}
              href={`/${project.slug}`}
              hideArrow
              className={styles.articleItem}
            >
              <PostPreview
                title={project.title}
                description={project.description}
                tags={project.tags}
                date={project.date}
                readingTime={project.readingTime}
              />
            </Anchor>
          ))}
        </div>
        <Button href="/projects" element="a" outline arrow>
          view all projects
        </Button>
      </div>
    </section>
  )
}

export default PostsSection
