require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");

dotenv.config({path: __dirname + '/.env'});

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.7",
  networks:{
    mumbai:{
      url:process.env.POLYGON_MUMBAI.toString(),
      accounts:[process.env.PRIVATE_KEY.toString()],
    },
  },
  etherscan:{
    url:'https://mumbai.polygonscan.com',
    apiKey:process.env.API_KEY.toString(),
  },
};
