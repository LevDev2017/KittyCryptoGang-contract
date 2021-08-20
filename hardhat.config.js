require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const {
  API_URL_RINKEBY,
  API_URL_ROPSEN,
  PRIVATE_KEY,
  ETHERSCAN_API_KEY,
} = process.env;

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: API_URL_RINKEBY, // Infura url with projectId
      accounts: [PRIVATE_KEY] // Add the account that will deploy the contract (private key)
    },
    ropsen: {
      url: API_URL_ROPSEN, // Infura url with projectId
      accounts: [PRIVATE_KEY] // Add the account that will deploy the contract (private key)
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
};
