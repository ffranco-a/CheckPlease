import React, { useState } from 'react';

function AgregarPersonas({ agregarPersona, setMostrarInput }) {
  const [nombre, setNombre] = useState('');

  const handleNuevaPersona = (e) => {
    setNombre(e.target.value);
  };

  const handleAgregarPersona = (e) => {
    e.preventDefault();
    agregarPersona(nombre.toLowerCase());
    setNombre('');
  };

  const handleDisableButton = () => {
    if (nombre.length >= 1) return false;
    return true;
  };

  return (
    <div className='flex justify-center'>
      <form onSubmit={handleAgregarPersona}>
        <input type='text' autoFocus value={nombre} onChange={handleNuevaPersona} className='px-1 mr-1 rounded-md border-2 border-gray-400' />
        <button type='submit' disabled={handleDisableButton()} className='p-1 mx-1 bg-green-400 rounded-md'>
          Agregar
        </button>
        <button type='button' onClick={() => setMostrarInput(false)} className='p-1 mx-1 bg-red-200 rounded-md'>
          Cerrar
        </button>
      </form>
    </div>
  );
}

export default AgregarPersonas;
