require('dotenv').config()
const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const compiledFatory = require('./build/CampaignFactory.json')

const provider = new HDWalletProvider(
  process.env.MEONIC,
  process.env.RINKEBY
)
const web3 = new Web3(provider)

const deploy = async () => {
  const accounts = await web3.eth.getAccounts()

  console.log('Attempting to deploy from account', accounts[0])

  const result = await new web3.eth.Contract(JSON.parse(compiledFatory.interface)) // init contract
    .deploy({ data: compiledFatory.bytecode }) // create deploy object
    .send({ from: accounts[0], gas: 1000000 }) // send to network

  console.log('Contract deployed to', result.options.address)
  // Contract deployed to 0x24049821a025CB1Da4Ef8892b0AF815280f274D6
}
deploy()
