async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  // Get the contract to deploy
  const KCG = await ethers.getContractFactory("KCG");
  // Deploy the contract
  const contract = await KCG.deploy();
  // Log the contract address
  console.log("Deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });