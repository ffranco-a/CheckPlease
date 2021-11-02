import React from 'react';

function Gasto({ gasto }) {
  return (
    <div className='flex justify-between pr-20'>
      <span>
        Realizado por: <span className='capitalize'>{gasto.persona}</span>
      </span>
      <span>Monto: {gasto.monto}</span>
      <span className='capitalize'>Detalle: {gasto.detalle}</span>
    </div>
  );
}

export default Gasto;
