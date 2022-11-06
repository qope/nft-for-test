import { ethers } from "hardhat";

const abi = ["function mint(address to) public returns (uint256)"];

async function main() {
  const address = "0xfdAbA3d982592D1b753753BC2057bc520A9Aad1f";
  const to = "0xb8A6B7f99fcA84204A58FBFd72077D5C62a7C055";
  const me = await ethers.getSigners().then((signers) => signers[0]);
  const nft = new ethers.Contract(address, abi, me);
  await nft.mint(to);
  console.log(`deployed at ${nft.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
