import { ethers } from "hardhat";

const abi = ["function mint(address to) public returns (uint256)"];

async function main() {
  const address = "";
  const to = "";
  const nft = new ethers.Contract(address, abi, ethers.provider);
  await nft.mint();

  console.log(`deployed at ${nft.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
