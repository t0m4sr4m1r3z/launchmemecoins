const Web3 = require('web3');
const solc = require('solc');
const fs = require('fs');
const path = require('path');

const web3 = new Web3('https://mainnet.infura.io/v3/TU_PROYECTO_INFURA');
const account = 'TU_DIRECCION_ETH';
const privateKey = 'TU_PRIVATE_KEY';

const compileAndDeployContract = async (tokenData) => {
  const contractPath = path.resolve(__dirname, '../../contracts/CustomToken.sol');
  const sourceCode = fs.readFileSync(contractPath, 'utf8');

  const input = {
    language: 'Solidity',
    sources: { 'CustomToken.sol': { content: sourceCode } },
    settings: { outputSelection: { '*': { '*': ['*'] } } },
  };
  const compiled = JSON.parse(solc.compile(JSON.stringify(input)));
  const contract = compiled.contracts['CustomToken.sol']['CustomToken'];

  const tx = new web3.eth.Contract(contract.abi);
  const data = tx.deploy({ data: contract.evm.bytecode.object, arguments: [tokenData.tokenName, tokenData.tokenSymbol, tokenData.totalSupply, 0] });
  const gas = await data.estimateGas();
  const txObject = {
    data: data.encodeABI(),
    gas,
  };

  const signedTx = await web3.eth.accounts.signTransaction(txObject, privateKey);
  const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  return { contractAddress: receipt.contractAddress };
};

module.exports = { compileAndDeployContract };