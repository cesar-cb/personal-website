import reactNodeToString from 'react-node-to-string'
import { Options } from 'react-markdown'
import CodeBlock from 'components/CodeBlock'
import ResponsiveImage from 'components/ResponsiveImage'
import Typography from 'components/Typography'
import { slugify } from './text'

export const getMarkdownComponents = (): Options['components'] => ({
  code: ({ inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <CodeBlock
        codestring={String(children).replace(/\n$/, '')}
        language={match[1]}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
  img: ({ src }) => <ResponsiveImage src={src as string} alt="" />,
  h1: ({ children }) => (
    <Typography as="h1" variant="h2" id={slugify(reactNodeToString(children))}>
      {children}
    </Typography>
  ),
  h2: ({ children }) => (
    <Typography as="h2" variant="h3" id={slugify(reactNodeToString(children))}>
      {children}
    </Typography>
  ),
  h3: ({ children }) => (
    <Typography as="h3" variant="h4" id={slugify(reactNodeToString(children))}>
      {children}
    </Typography>
  ),
  p: ({ children }) => (
    <Typography as="p" variant="body" id={slugify(reactNodeToString(children))}>
      {children}
    </Typography>
  ),
})

export const getHeadings = (source: string) => {
  const headingLines = source.split('\n').filter((line) => {
    return line.match(/^###*\s/)
  })

  return headingLines.map((raw) => {
    const text = raw.replace(/^###*\s/, '')

    const level = raw.slice(0, 3) === '###' ? 3 : 2

    return { text, level }
  })
}
