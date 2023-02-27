import { Client } from '@notionhq/client'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { NotionToMarkdown } from 'notion-to-md'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const getAllPublished = async (type?: 'project' | 'article') => {
  const typeFilter = type
    ? [
        {
          property: 'Type',
          select: {
            equals: type,
          },
        },
      ]
    : []

  const posts = await notion.databases.query({
    database_id: process.env.DATABASE_ID!,
    filter: {
      and: [
        {
          property: 'Published',
          checkbox: {
            equals: true,
          },
        },
        ...typeFilter,
      ],
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  })
  const allPosts = posts.results

  return allPosts.map((post) => {
    return getPageMetaData(post as PageObjectResponse)
  })
}

const getPageMetaData = (post: PageObjectResponse) => {
  const getTags = (tags: Array<{ name: string }>) => tags.map((tag) => tag.name)

  console.log(post.properties)

  return {
    id: post.id,
    title: (post.properties.Name as { title: Array<{ plain_text: string }> })
      .title[0].plain_text,
    tags: getTags(
      (
        post.properties.Tags as unknown as {
          multi_select: Array<{ name: string }>
        }
      ).multi_select,
    ),
    description: (
      post.properties.Description as {
        rich_text: Array<{ plain_text: string }>
      }
    ).rich_text[0].plain_text,
    date: (post.properties.Date as unknown as { date: { start: string } }).date
      .start,
    slug: (
      post.properties.Slug as {
        rich_text: Array<{ plain_text: string }>
      }
    ).rich_text[0].plain_text,
    type: (post.properties.Type as { select: { name: string } }).select.name,
    readingTime: (post.properties.ReadingTime as { number: number }).number,
  }
}

const n2m = new NotionToMarkdown({ notionClient: notion })

export const getSingleBlogPostBySlug = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: process.env.DATABASE_ID!,
    filter: {
      property: 'Slug',
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  })

  const page = response.results[0] as PageObjectResponse
  const metadata = getPageMetaData(page)

  n2m.setCustomTransformer('embed', async (block) => {
    const { embed } = block as any
    if (!embed?.url) return ''
    return `<figure>
    <iframe src="${embed?.url}"></iframe>
    <figcaption>${await n2m.blockToMarkdown(embed?.caption)}</figcaption>
  </figure>`
  })

  const mdblocks = await n2m.pageToMarkdown(page.id)
  console.log({ mdblocks })
  const mdString = n2m.toMarkdownString(mdblocks)

  return {
    metadata,
    markdown: mdString,
  }
}
