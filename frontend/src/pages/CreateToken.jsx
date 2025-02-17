import React, { useState } from 'react';
import TokenForm from '../components/TokenForm';

const CreateToken = () => {
  const [tokenDetails, setTokenDetails] = useState(null);

  const handleSubmit = async (data) => {
    // Enviar datos al backend para crear el token
    const response = await fetch('/create-token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    setTokenDetails(result);
  };

  return (
    <div>
      <h1>Crear tu Memecoin</h1>
      <TokenForm onSubmit={handleSubmit} />
      {tokenDetails && (
        <div>
          <h2>Token Creado Exitosamente</h2>
          <p>Dirección del contrato: {tokenDetails.contractAddress}</p>
        </div>
      )}
    </div>
  );
};

export default CreateToken;