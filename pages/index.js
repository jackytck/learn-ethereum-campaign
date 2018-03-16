import { Button, Card } from 'semantic-ui-react'
import React, { Component } from 'react'

import Layout from '../components/layout'
import factory from '../ethereum/factory'

class CampaignIndex extends Component {
  static async getInitialProps () {
    const campaigns = await factory.methods.getDeployedCampaigns().call()

    return { campaigns }
  }

  renderCampaigns () {
    const items = this.props.campaigns.map(address => ({
      header: address,
      description: <a>View Campaign</a>,
      fluid: true
    }))

    return <Card.Group items={items} />
  }

  render () {
    return (
      <Layout>
        <div>
          <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css'></link>
          <h3>Open Campaings</h3>
          {this.renderCampaigns()}
          <Button
            content='Create Campaign'
            icon='add circle'
            primary
          />
        </div>
      </Layout>
    )
  }
}

export default CampaignIndex
