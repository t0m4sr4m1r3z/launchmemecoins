import React, { useState } from 'react';

const TokenForm = ({ onSubmit }) => {
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [totalSupply, setTotalSupply] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ tokenName, tokenSymbol, totalSupply });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del Token"
        value={tokenName}
        onChange={(e) => setTokenName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Símbolo del Token"
        value={tokenSymbol}
        onChange={(e) => setTokenSymbol(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Suministro Total"
        value={totalSupply}
        onChange={(e) => setTotalSupply(e.target.value)}
        required
      />
      <button type="submit">Crear Token</button>
    </form>
  );
};

export default TokenForm;