import { ethers, run } from "hardhat";

async function main() {
  // const Azuki = await ethers.getContractFactory("Azuki");
  // console.log("Deploying ERC721 token...");
  // const erc721Token = await Azuki.deploy();

  // await erc721Token.deployed();
  // console.log("NFToken deployed to:", erc721Token.address);

  await run("verify", {
    address: "0x134ae8eF5Bd650aF9B9D474f9f2513271BfF4138",
    contract: "contracts/Azuki.sol:Azuki",
  });

  // const Folton = await ethers.getContractFactory("Folton");
  // console.log("Deploying ERC20 token...");
  // const erc20Token = await Folton.deploy();

  // await erc20Token.deployed();
  // console.log("ERC20 token deployed to:", erc20Token.address);

  // await run("verify", {
  //   address: "0x603bA8e597bAA605CADdFDFd567e498E3611c0DB",
  //   contract: "contracts/Folton.sol:Folton",
  // });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
