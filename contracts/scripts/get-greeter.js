const hre = require("hardhat");
const GreeterContractABI = require("../artifacts/contracts/Greeter.sol/Greeter.json");
const { GREETER_CONTRACT_ADDR } = process.env;

async function main() {
  // https://hardhat.org/plugins/nomiclabs-hardhat-ethers.html
  const signer = await hre.ethers.getSigner();
  const greeterContract = new ethers.Contract(GREETER_CONTRACT_ADDR, GreeterContractABI.abi, signer);

  const greetResult = await greeterContract.greet();
  console.log("Greeter.greet():", greetResult);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
