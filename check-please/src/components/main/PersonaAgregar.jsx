import React, { useState, useEffect } from 'react';

function AgregarPersonas({ agregarPersona, setMostrarInput }) {
  const [nombre, setNombre] = useState('');
  const [disableButton, setDisableButton] = useState(true);

  const handleNuevaPersona = (e) => {
    setNombre(e.target.value);
  };

  const handleAgregarPersona = (e) => {
    e.preventDefault();
    let success = agregarPersona(nombre.toLowerCase());
    if (success) setNombre('');
  };

  useEffect(() => {
    if (nombre.length >= 1) setDisableButton(false);
    else setDisableButton(true);
  }, [nombre]);

  return (
    <div className='flex justify-center'>
      <form
        onSubmit={handleAgregarPersona}
        // onBlur={() => {
        //   if (nombre === '') setMostrarInput(false);
        // }}
        className='bg-primary rounded flex items-center'>
        <input
          type='text'
          autoFocus
          value={nombre}
          onChange={handleNuevaPersona}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setMostrarInput(false);
          }}
          className='input-style my-1 mx-2'
        />
        <button
          type='submit'
          disabled={disableButton}
          className={`${
            disableButton ? 'text-primary-light cursor-default' : 'bg-primary-light text-white hover:bg-opacity-70'
          } h-full px-2 text-sm custom-table-right-side transition-all`}>
          Agregar
        </button>
      </form>
    </div>
  );
}

export default AgregarPersonas;
