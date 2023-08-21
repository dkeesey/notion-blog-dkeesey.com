type ElementType =
  | string
  | React.ReactNode[]
  | { props?: { children?: ElementType } }
  | React.ReactNode

const collectText = (el: ElementType | null, acc: string[] = []): string => {
  if (el === undefined || el === null) return acc.join('').trim() // Handle undefined and null
  if (typeof el === 'string') acc.push(el)
  if (Array.isArray(el))
    el.forEach((item) => collectText(item as ElementType, acc)) // Cast item to ElementType
  if (typeof el === 'object' && el.hasOwnProperty('props'))
    collectText((el as any).props?.children, acc) // Check for props property

  return acc.join('').trim()
}

type HeadingProps = {
  children: React.ReactNode
  id?: string
}

const Heading: React.FC<HeadingProps> = ({ children: component, id }) => {
  const children = (component as any).props.children || ''
  let text = children

  if (null == id) {
    id = collectText(text)
      .toLowerCase()
      .replace(/\s/g, '-')
      .replace(/[?!:]/g, '')
  }

  return (
    <a href={`#${id}`} id={id} style={{ color: 'inherit' }}>
      {component}
    </a>
  )
}

export default Heading
