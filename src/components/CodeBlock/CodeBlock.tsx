import { CSSProperties, FC, useEffect, useState } from 'react'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { prism, nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import styles from './CodeBlock.module.scss'

type TProps = {
  language: string
  codestring: string
}

const CodeBlock: FC<TProps> = ({ language, codestring }) => {
  const { resolvedTheme } = useTheme()
  const [codeTheme, setCodeTheme] =
    useState<Record<string, CSSProperties>>(nightOwl)

  const languageTagClass = classNames(styles.languageTag)

  useEffect(() => {
    const theme = resolvedTheme === 'dark' ? nightOwl : prism
    setCodeTheme(theme)
  }, [resolvedTheme])

  return (
    <div className={styles.syntaxContainer}>
      <span className={languageTagClass}>{language}</span>
      <SyntaxHighlighter
        language={language}
        style={codeTheme}
        PreTag="div"
        customStyle={{
          fontFamily: 'var(--font-mono)',
          margin: '0 -32px 0',
          borderRadius: '8px',
        }}
        codeTagProps={{
          style: {
            fontFamily: 'inherit',
          },
        }}
      >
        {codestring}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeBlock
