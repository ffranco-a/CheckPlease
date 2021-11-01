import React, { useState } from 'react';

function AgregarPersonas({ agregarPersona }) {
  const [nombre, setNombre] = useState('');

  const handleNuevaPersona = (e) => {
    setNombre(e.target.value);
  };

  const handleAgregar = (e) => {
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
      <input type='text' value={nombre} onChange={handleNuevaPersona} />
      <button disabled={handleDisableButton()} onClick={handleAgregar}>
        Agregar
      </button>
    </div>
  );
}

export default AgregarPersonas;
