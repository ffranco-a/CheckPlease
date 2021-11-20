import React from 'react';
import userLogo from '../images/user.svg';

function Persona({ persona, borrarPersona }) {
  return (
    <div className='p-2 min-w-logo h-14 flex flex-col items-center justify-center bg-gray-300 rounded-full relative'>
      <img src={userLogo} alt='user logo' className='w-6 h-6' />
      <span className='capitalize text-sm relative bottom-1'>
        {persona.nombre}
        {/* , id: {persona.id} */}
      </span>
      <button title={`Eliminar a ${persona.nombre} del grupo`} onClick={() => borrarPersona(persona)} className='h-4 w-4 absolute top-0 right-0 rounded-full bg-red-300 transition-all hover:bg-red-400' />
    </div>
  );
}

export default Persona;
