import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TokenForm from '../components/TokenForm';

const CreateToken = () => {
  const [tokenDetails, setTokenDetails] = useState(null);
  const navigate = useNavigate();

  const handleCreateToken = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/create-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setTokenDetails(result);
      navigate('/confirmation', { state: { contractAddress: result.contractAddress } });
    } catch (error) {
      console.error("Error al crear el token:", error);
    }
  };

  return (
    <div>
      <h1>Crear tu Memecoin</h1>
      <TokenForm onSubmit={handleCreateToken} />
    </div>
  );
};

export default CreateToken;