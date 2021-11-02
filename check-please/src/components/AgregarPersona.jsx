import React, { useState } from 'react';

function AgregarPersonas({ agregarPersona }) {
  const [nombre, setNombre] = useState('');

  const handleNuevaPersona = (e) => {
    setNombre(e.target.value);
  };

  const handleAgregarPersona = (e) => {
    e.preventDefault();
    agregarPersona(nombre);
    setNombre('');
  };

  const handleDisableButton = () => {
    if (nombre.length >= 2) return false;
    return true;
  };

  return (
    <div>
      <form onSubmit={handleAgregarPersona}>
        <input type='text' value={nombre} onChange={handleNuevaPersona} className='px-1 mr-1 rounded-md border-2 border-gray-400' />
        <button type='submit' disabled={handleDisableButton()} className='p-1 bg-green-400 rounded-md' >
          Agregar
        </button>
      </form>
    </div>
  );
}

export default AgregarPersonas;
