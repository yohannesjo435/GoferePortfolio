import React, { Children } from 'react'

export default function Button({Children, href,width, backgroundColor, border, color, padding}) {
  return (
    <button className='btn-component' style={{backgroundColor, width, border, color, padding}}>
      <a href={href}>{Children}</a>
    </button>
  )
}
