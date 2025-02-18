const { compileAndDeployContract } = require('../services/blockchainService');

const createToken = async (req, res) => {
  try {
    const { tokenName, tokenSymbol, totalSupply } = req.body;
    const result = await compileAndDeployContract({ tokenName, tokenSymbol, totalSupply });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createToken };