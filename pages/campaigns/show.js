import React, { Component } from 'react'

import Campaign from '../../ethereum/campaign'
import Layout from '../../components/layout'

class CampaignShow extends Component {
  static async getInitialProps (props) {
    const address = props.query.address
    const campaign = Campaign(address)
    const summary = await campaign.methods.getSummary().call()

    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    }
  }

  render () {
    return (
      <Layout>
        <h3>Campaign Show</h3>
      </Layout>
    )
  }
}

export default CampaignShow
