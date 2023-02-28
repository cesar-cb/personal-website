import { FC } from 'react'
import Typography from 'components/Typography'
import { getHeadings } from 'lib/markdown'
import styles from './TableOfContents.module.scss'
import Item from './Components/Item'

type TProps = {
  markdown: string
}

const TableOfContents: FC<TProps> = ({ markdown }) => {
  const headings = getHeadings(markdown)

  return (
    <>
      <Typography variant="h4" as="p" font="heading">
        Tabela de conteúdo
      </Typography>
      <div className={styles.linksContainer}>
        {headings.map((heading) => (
          <Item
            key={heading.text}
            active={false}
            itemName={heading.text}
            level={heading.level}
          />
        ))}
      </div>
    </>
  )
}

export default TableOfContents
