const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')

const provider = ganache.provider()
const web3 = new Web3(provider)

const compiledFatory = require('../ethereum/build/CompaignFactory.json')
const compiledCampaign = require('../ethereum/build/Campaign.json')

let accounts
let factory
let campaignAddress
let campaign

beforeEach(async () => {
  accounts = await web3.eth.getAccounts()

  factory = await new web3.eth.Contract(JSON.parse(compiledFatory.interface))
    .deploy({ data: compiledFatory.bytecode })
    .send({ from: accounts[0], gas: '1000000' })

  factory.setProvider(provider)

  await factory.methods.createCampaign('100').send({ // 100 wei
    from: accounts[0],
    gas: '1000000'
  });

  [campaignAddress] = await factory.methods.getDeployedCampaigns().call() // view method
  campaign = new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  )
})

describe('Campaigns', () => {
  it('deploys a factory and a campaign', () => {
    assert.ok(factory.options.address)
    assert.ok(campaign.options.address)
  })

  it('marks caller as the campaign manager', async () => {
    const manager = await campaign.methods.manager().call() // public get method auto created
    assert.equal(accounts[0], manager)
  })
})
