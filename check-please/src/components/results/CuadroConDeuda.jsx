import React from 'react';

function CuadroConDeuda({ monto, esNegativo }) {
  return (
    <div
      className={`rounded px-3 py-1.5 shadow-md flex flex-col items-center ${
        esNegativo ? 'bg-green' : monto === '$0.00' ? 'bg-primary-dark' : 'bg-orange'
      }`}>
      <span className='text-sm'>{esNegativo ? 'le deben devolver' : 'tiene que poner'}</span>
      <span className='text-2xl'>{esNegativo ? monto.substring(1) : monto}</span>
    </div>
  );
}

export default CuadroConDeuda;
