import React from 'react';

function LandingButton({ texto, descripcion, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${
        active ? 'bg-primary' : 'bg-dark'
      } w-11/12 max-w-lg mx-auto h-14 flex items-center text-light rounded-md shadow-sm cursor-pointer transition-all duration-300`}>
      <span className='font-bold text-xl'>{texto}</span>
      <span>{descripcion}</span>
    </div>
  );
}

export default LandingButton;
