import { ethers } from "hardhat";

async function main() {
  const baseURI =
    "https://raw.githubusercontent.com/qope/nft-for-test/main/URI/";
  const Nft = await ethers.getContractFactory("GameItem");
  const nft = await Nft.deploy(baseURI);
  await nft.deployed();
  const me = await ethers.getSigners().then((signers) => signers[0]);
  nft.mint(me.address);
  console.log(`deployed at ${nft.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
