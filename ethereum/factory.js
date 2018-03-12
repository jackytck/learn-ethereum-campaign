import CampaignFactory from './build/CampaignFactory.json'
import web3 from './web3'

const address = '0x24049821a025CB1Da4Ef8892b0AF815280f274D6'

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  address
)

export default instance
