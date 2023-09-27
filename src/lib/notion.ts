import { Client } from '@notionhq/client'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { NotionToMarkdown } from 'notion-to-md'
import { ListBlockChildrenResponseResult } from 'notion-to-md/build/types'

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
})

const n2m = new NotionToMarkdown({ notionClient: notion })

const getPageMetaData = (post: PageObjectResponse) => {
  const getTags = (tags: Array<{ name: string }>) => tags.map((tag) => tag.name)

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
    database_id: process.env.NEXT_PUBLIC_DATABASE_ID!,
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

export const getSingleBlogPostBySlug = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_DATABASE_ID!,
    filter: {
      property: 'Slug',
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  })

  if (!response.results.length)
    return {
      metadata: {},
      markdown: null,
    }

  const page = response.results[0] as PageObjectResponse
  const metadata = getPageMetaData(page)

  n2m.setCustomTransformer('embed', async (block) => {
    const { embed } = block as unknown as {
      embed: { url?: string; caption: ListBlockChildrenResponseResult }
    }

    const isCodesandbox = embed?.url?.includes('codesandbox')

    const defaultStyles = 'width: 100%; height: 500px;'

    const iframeStyles = isCodesandbox
      ? `width: calc(100% + 64px); margin: 0 -32px; outline: 1px solid #252525; borderRadius: 8px;`
      : ''

    if (!embed?.url) return ''
    return `<figure>
    <iframe src="${embed?.url}" style="${defaultStyles}${iframeStyles}"></iframe>
    <figcaption>${await n2m.blockToMarkdown(embed?.caption)}</figcaption>
  </figure>`
  })

  n2m.setCustomTransformer('video', async (block) => {
    const { video } = block as unknown as {
      video: {
        external?: { url?: string }
        caption: ListBlockChildrenResponseResult
      }
    }

    if (!video?.external?.url) return ''
    if (video?.external?.url.includes('youtube')) {
      const regExp =
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/

      const videoId = video?.external?.url.match(regExp)?.[7] as string

      return `<figure style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
    <iframe src="https://youtube.com/embed/${videoId}?rel=0&autoplay=1" frameborder="0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}button{display: block; width: 68px; height: 48px; position: absolute; cursor: pointer; transform: translate3d(-50%, -50%, 0); top: 50%; left: 50%; z-index: 1; background-color: transparent; background-image: url('/images/play.svg'); filter: grayscale(100%); transition: filter .1s cubic-bezier(0, 0, 0.2, 1); border: none;}a:hover>button,a button:focus{filter:none;}span{clip: rect(0 0 0 0); clip-path: inset(50%); height: 1px; overflow: hidden; position: absolute; white-space: nowrap; width: 1px;}</style><a href=https://www.youtube.com/embed/${videoId}?autoplay=1><img src=https://img.youtube.com/vi/${videoId}/hqdefault.jpg><button><span>Play</span></button></a>"></iframe>
    <figcaption>${await n2m.blockToMarkdown(video?.caption)}</figcaption>
  </figure>`
    }

    return `<figure style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
    <iframe src="${video?.external
      ?.url}" frameborder='0' style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
    <figcaption>${await n2m.blockToMarkdown(video?.caption)}</figcaption>
  </figure>`
  })

  n2m.setCustomTransformer('file', (block) => {
    const { file } = block as unknown as {
      file?: {
        file: { url?: string }
        caption: ListBlockChildrenResponseResult
      }
    }

    if (!file?.file?.url) return ''

    const fileName = /.*\/([^?]+)/.exec(file?.file?.url)?.[1] as string

    // if (file?.file?.url?.includes('.pdf')) {
    //   return `<figure style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 0 -35px 0;"><iframe src="${
    //     file?.file?.url
    //   }" frameborder="0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe><figcaption>${await n2m.blockToMarkdown(
    //     file?.caption,
    //   )}</figcaption></figure>`
    // }

    return `<a href="${file?.file?.url}" style="display: flex; align-items: center; gap: 8px; word-break: break-all;" download target="_blank"><svg stroke="currentColor;" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M624 706.3h-74.1V464c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v242.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.7a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9z"></path><path d="M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 0 1-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"></path></svg><span>${fileName}</span></a>`
  })

  n2m.setCustomTransformer('divider', () => {
    return '<hr style="width: calc(100% + 64px); margin: 48px -32px; opacity: 0.8;" />'
  })

  const mdblocks = await n2m.pageToMarkdown(page.id)

  const mdString = n2m.toMarkdownString(mdblocks)

  return {
    metadata,
    markdown: mdString,
  }
}
