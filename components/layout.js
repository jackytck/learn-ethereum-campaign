import { Container } from 'semantic-ui-react'
import Header from './header'
import React from 'react'

export default props => {
  return (
    <Container>
      <Header />
      {props.children}
      <h1>I'm a footer</h1>
    </Container>
  )
}
