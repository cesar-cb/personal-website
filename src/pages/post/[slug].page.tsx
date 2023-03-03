import { GetStaticPropsContext, NextPage } from 'next'
import remarkUnwrapImages from 'remark-unwrap-images'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import TableOfContents from 'components/TableOfContents'
import Typography from 'components/Typography'
import PostInfo from 'components/PostInfo'
import { getAllPublished, getSingleBlogPostBySlug } from 'lib/notion'
import { getMarkdownComponents } from 'lib/markdown'
import DefaultLayout from 'layouts/DefaultLayout'
import styles from './Post.module.scss'

type TPost = {
  metadata: {
    id: string
    title: string
    tags: Array<string>
    description: string
    date: string
    slug: string
    readingTime: number
  }
  markdown: string
}

type TPageProps = {
  post: TPost
  type: 'project' | 'article'
}

const Post: NextPage<TPageProps> = ({ post, type }) => {
  const typeMap = {
    project: {
      href: '/projects',
      text: 'Projetos',
    },
    article: {
      href: '/articles',
      text: 'Artigos',
    },
  }[type]

  return (
    <DefaultLayout backButton={{ href: typeMap.href, text: typeMap.text }}>
      <div className={styles.container}>
        <aside className={styles.aside}>
          <div>
            <TableOfContents markdown={post.markdown} />
          </div>
        </aside>
        <article className={styles.postContainer}>
          <div className={styles.hero}>
            <Typography variant="h2" as="h1">
              {post.metadata.title}
            </Typography>
            <Typography variant="p" as="p" className={styles.postDescription}>
              {post.metadata.description}
            </Typography>
            <PostInfo
              date={post.metadata.date}
              readingTime={post.metadata.readingTime}
              italic
            />
          </div>
          <div className={styles.postContent}>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkUnwrapImages]}
              components={getMarkdownComponents()}
            >
              {post.markdown}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </DefaultLayout>
  )
}

export const getStaticPaths = async () => {
  const posts = await getAllPublished()
  const paths = posts.map(({ slug }) => ({ params: { slug } }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const post = await getSingleBlogPostBySlug(params?.slug as string)

  if (post.markdown === null)
    return {
      notFound: true,
    }

  return {
    props: {
      post,
      type: post.metadata.type,
    },
    revalidate: 60,
  }
}

export default Post
