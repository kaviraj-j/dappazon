require("@nomiclabs/hardhat-waffle");

const sepoliaPrivateKey = "YOUR_SEPOLIA_PRIVATE_KEY";

module.exports = {
  networks: {
    sepolia: {
      url: "YOUR_SEPOLIA_URL",
      accounts: [sepoliaPrivateKey],
    },
  },
  solidity: "0.8.9",
};
