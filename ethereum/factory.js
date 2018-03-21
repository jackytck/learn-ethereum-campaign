import CampaignFactory from './build/CampaignFactory.json'
import web3 from './web3'

const address = '0x47Cec1590228c4D9339C295456B65614436D2977'

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  address
)

export default instance
