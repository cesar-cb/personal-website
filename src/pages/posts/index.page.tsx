import { NextPage } from 'next'
import Anchor from 'components/Anchor'
import PostPreview from 'components/PostPreview'
import DefaultLayout from 'layouts/DefaultLayout'
import { getAllPublished } from 'lib/notion'
import styles from './Posts.module.scss'

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

type TPageProps = {
  posts: Array<TPost>
}

const Posts: NextPage<TPageProps> = ({ posts }) => {
  return (
    <DefaultLayout small>
      <div className={styles.postsContainer}>
        {posts.map((post) => (
          <Anchor
            href={`/posts/${post.slug}`}
            hideArrow
            className={styles.boxWrapper}
            key={post.id}
          >
            <PostPreview
              key={post.id}
              title={post.title}
              description={post.description}
              tags={post.tags}
              type={post.type}
              date={post.date}
              readingTime={post.readingTime}
            />
          </Anchor>
        ))}
      </div>
    </DefaultLayout>
  )
}

export const getStaticProps = async () => {
  const data = await getAllPublished()

  return {
    props: {
      posts: data,
    },
    revalidate: 60,
  }
}

export default Posts
