import React from 'react';

function Persona({ persona, borrarPersona }) {
  return (
    <div className='p-1 my-1 flex items-center justify-between bg-gray-300 rounded-md'>
      <span className='capitalize'>
        {persona.nombre}
        {/* , id: {persona.id} */}
      </span>
      <button onClick={() => borrarPersona(persona)} className='p-1 bg-red-300 rounded-md'>
        Eliminar
      </button>
    </div>
  );
}

export default Persona;
