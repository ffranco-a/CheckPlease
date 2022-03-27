import React from 'react';

function CuadroConMonto({ monto, type }) {
  return (
    <span className={`${type === 'Consumió' ? 'bg-primary-dark' : 'bg-primary-light'} bg-opacity-50 rounded p-1 flex flex-col items-center`}>
      <span className='text-sm'>{type}</span>
      <span>{monto}</span>
    </span>
  );
}

export default CuadroConMonto;
