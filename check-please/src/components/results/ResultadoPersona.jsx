import React from 'react';
import CuadroConDeuda from './CuadroConDeuda';
import CuadroConMonto from './CuadroConMonto';

function ResultadoPersona({ persona }) {
  return (
    <div className='bg-primary rounded w-full min-h-content mb-8 shadow-lg py-4 px-1 flex flex-col items-center border border-opacity-20 border-primary-dark'>
      <h3 className='text-2xl capitalize'>{persona.nombre}</h3>
      <div className='flex my-2 gap-3'>
        <CuadroConMonto type='Consumió' monto={persona.comparte.total} />
        <CuadroConMonto type='Puso' monto={persona.puso} />
      </div>
      <CuadroConDeuda monto={persona.debe} esNegativo={persona.debe.includes('-')} />
    </div>
  );
}

export default ResultadoPersona;
