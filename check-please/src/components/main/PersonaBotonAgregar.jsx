import React from 'react';
import addLogo from '../../static/images/add.svg';

function PersonaBotonAgregar({ mostrarInput, setMostrarInput }) {
  return (
    <div
      className={`${
        mostrarInput ? 'opacity-40' : 'opacity-100 hover:bg-opacity-80'
      } p-2 w-14 h-14 flex flex-col items-center justify-start bg-primary rounded-full relative  cursor-pointer transition-all`}
      onClick={() => setMostrarInput(!mostrarInput)}>
      <img src={addLogo} alt='user logo' className='w-5 h-5' />
      <span className='text-xs text-text'>Agregar</span>
    </div>
  );
}

export default PersonaBotonAgregar;
