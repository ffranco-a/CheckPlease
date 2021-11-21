import React from 'react';
import currency from 'currency.js';

function Gasto({ gasto, borrarGasto }) {
  return (
    <div className='flex justify-between pr-20 bg-gray-300 rounded-md p-1 my-1'>
      <span>
        Realizado por: <span className='capitalize'>{gasto.persona}</span>
      </span>
      <span>Monto: {currency(gasto.monto).format()}</span>
      <span className='capitalize'>Detalle: {gasto.detalle}</span>
      {/* <button>Editar</button> */}
      <button onClick={() => borrarGasto(gasto)} className='p-1 bg-red-300 rounded-md'>
        Borrar
      </button>
    </div>
  );
}

export default Gasto;
