import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    polygon: {
      url: process.env.ALCHEMY_POLYGON_API as string,
      accounts: [process.env.PRIVATE_KEY as string],
    },
  },
};

export default config;
