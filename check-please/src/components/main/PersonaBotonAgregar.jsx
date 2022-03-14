import React from 'react';
import addLogo from '../../static/images/add.svg';

function PersonaBotonAgregar({ setMostrarInput }) {
  return (
    <div
      className='p-2 w-14 h-14 flex flex-col items-center justify-start bg-gray-300 rounded-full relative transition-all hover:bg-gray-400 cursor-pointer'
      onClick={() => setMostrarInput(true)}>
      <img src={addLogo} alt='user logo' className='w-5 h-5' />
      <span className='text-xs text-dark'>Agregar</span>
    </div>
  );
}

export default PersonaBotonAgregar;
