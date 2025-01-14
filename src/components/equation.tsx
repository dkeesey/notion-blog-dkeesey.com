import { renderToString, ParseError } from 'katex'
import React from 'react'

type EquationProps = {
  children: React.ReactNode
  displayMode?: boolean
}

function render(expression: string, displayMode: boolean): string {
  let result: string = ''
  try {
    result = renderToString(expression, { displayMode: displayMode })
  } catch (e) {
    if (e instanceof ParseError) {
      result = e.message
    }
    if (process.env.NODE_ENV !== 'production') {
      console.error(e)
    }
  }
  return result
}

const Equation: React.FC<EquationProps> = ({
  children,
  displayMode = true,
}) => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: render(children as string, displayMode),
      }}
    />
  )
}

export default Equation
