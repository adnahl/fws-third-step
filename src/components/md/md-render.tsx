import { cn } from '@/utils/helpers/h-styles'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function MDRender({
  mdPath,
  showDiff = true
}: {
  mdPath: string
  showDiff?: boolean
}) {
  const [markdownContent, setMarkdownContent] = useState('')

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(mdPath)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const text = await response.text()
        setMarkdownContent(text)
      } catch (error) {
        console.error('Failed to load Markdown file:', error)
        setMarkdownContent('Error loading markdown file.')
      }
    }

    fetchMarkdown()
  }, [mdPath])

  return (
    <article className='min-w-full prose bg-foreground p-8'>
      <ReactMarkdown
        children={markdownContent}
        components={{
          code(props) {
            const { children, className, ...rest } = props
            const match = /language-(\w+)/.exec(className || '')
            const str = String(children).replace(/\n$/, '')
            const strArr = str.split('\n')
            return match ? (
              <SyntaxHighlighter
                // {...rest}
                PreTag='div'
                style={atomDark}
                language={match[1]}
                showLineNumbers
                wrapLongLines
                customStyle={{}}
                lineProps={(lineNumber: number) => {
                  if (!showDiff) return {}
                  const line = strArr[lineNumber - 1].trim()
                  return {
                    style: {
                      backgroundColor: line.startsWith('+')
                        ? 'rgba(0,255,0,0.1)'
                        : line.startsWith('-')
                        ? 'rgba(255,0,0,0.1)'
                        : 'inherit'
                    }
                  }
                }}
              >
                {str}
              </SyntaxHighlighter>
            ) : (
              <code
                {...rest}
                className={cn(className, 'bg-accent/10  p-0.5 rounded-[.25em]')}
              >
                {children}
              </code>
            )
          }
        }}
      />
    </article>
  )
}
