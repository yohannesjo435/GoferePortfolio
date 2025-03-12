import React, { Children } from 'react'

export default function Button({Children, width, backgroundColor, border, color, padding}) {
  return (
    <button className='btn-component' style={{backgroundColor, width, border, color, padding}}>
      {Children}
    </button>
  )
}
