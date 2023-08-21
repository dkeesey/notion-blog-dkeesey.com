import React from 'react'

type ExtLinkProps = {
  target?: string
  [key: string]: any // Allow other props
}

const ExtLink: React.FC<ExtLinkProps> = (props) => (
  <a {...props} rel="noopener" target={props.target || '_blank'} />
)

export default ExtLink
