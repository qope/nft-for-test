import { ethers } from "hardhat";

async function main() {
  const baseURI = "https://github.com/qope/nft-for-test/URI/";
  const Nft = await ethers.getContractFactory("GameItem");
  const nft = await Nft.deploy(baseURI);
  await nft.deployed();

  console.log(`deployed at ${nft.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
