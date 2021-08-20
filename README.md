# Kitty Crypto Gang

Solidity contract implementing Azuki's ERC-721A standard.

# Test on a remote test network

1. Clean up: `npx hardhat clean`
2. Deploy to Rinkeby: `npx hardhat run --network ropsen scripts/deploy.js`
3. Wait for a minute
4. Verify contract: `npx hardhat verify --network ropsen <DEPLOYED_CONTRACT_ADDRESS>`
