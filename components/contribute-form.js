import { Button, Form, Input, Message } from 'semantic-ui-react'
import React, { Component } from 'react'

class ContributeForm extends Component {
  state = {
    value: ''
  }

  onSubmit = event => {
    event.preventDefault()
  }

  render () {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
            label='ether'
            labelPosition='right'
            type='number'
            min='1'
          />
        </Form.Field>
        <Button primary>
          Contribute
        </Button>
      </Form>
    )
  }
}

export default ContributeForm
