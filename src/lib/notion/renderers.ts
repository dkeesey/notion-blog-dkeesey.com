import React, { ComponentType, FC, ReactNode, ReactElement } from 'react'
import * as components from '../../components'

interface ExtLinkProps {}
interface CodeProps {}
interface CounterProps {}
interface EquationProps {}

type Components = {
  ol: string
  ul: string
  li: string
  p: string
  blockquote: string
  a: FC<ExtLinkProps>
  Code: ComponentType<CodeProps>
  Counter: ComponentType<CounterProps>
  Equation: ComponentType<EquationProps>
  [key: string]: ComponentType<any> | string
}

function applyTags(
  tags: any[] = [],
  children: ReactNode,
  noPTag = false,
  key: number
): ReactNode {
  let child: ReactNode = children
  let tagName: string | ComponentType<any> = ''

  for (const tag of tags) {
    const props: { [key: string]: any } = { key }
    tagName = tag[0]

    if (noPTag && tagName === 'p') tagName = React.Fragment
    if (tagName === 'c') tagName = 'code'
    if (tagName === '_') {
      tagName = 'span'
      props.className = 'underline'
    }
    if (tagName === 'a') {
      props.href = tag[1]
    }
    if (tagName === 'e') {
      props.displayMode = false
      child = tag[1]
      // Assuming components.Equation is a string representing the tag name
      tagName = 'Equation'
    }

    // Ensure tagName is a string
    if (typeof tagName !== 'string') {
      console.error('Unexpected tagName:', tagName)
      continue // Skip this iteration if tagName is not a string
    }

    const component = (components as any)[tagName] || tagName
    child = React.createElement(component, props, child)
  }

  return child
}

export function textBlock(
  text: ReactElement[],
  noPTag = false,
  mainKey: string
): any {
  const children: ReactNode[] = []
  let key = 0

  for (const textItem of text) {
    key++
    children.push(applyTags([], textItem, noPTag, key))
  }

  return React.createElement(
    noPTag ? React.Fragment : 'p',
    { key: mainKey },
    ...children,
    noPTag
  )
}
