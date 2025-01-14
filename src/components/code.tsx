import React from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'

type CodeProps = {
  children: React.ReactNode
  language?: string
}

const Code: React.FC<CodeProps> = ({ children, language = 'javascript' }) => {
  const codeString = children as string
  const prismLanguage =
    Prism.languages[language.toLowerCase()] || Prism.languages.javascript

  return (
    <>
      <pre>
        <code
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(codeString, prismLanguage, language),
          }}
        />
      </pre>

      <style jsx>{`
        pre {
          tab-size: 2;
        }

        code {
          overflow: auto;
          display: block;
          padding: 0.8rem;
          line-height: 1.5;
          background: #f5f5f5;
          font-size: 0.75rem;
          border-radius: var(--radius);
        }
      `}</style>
    </>
  )
}

export default Code
