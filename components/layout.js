import Header from './header'
import React from 'react'

export default props => {
  return (
    <div>
      <Header />
      {props.children}
      <h1>I'm a footer</h1>
    </div>
  )
}
