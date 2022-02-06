import React from 'react';

function Gasto({ gasto, borrarGasto }) {
  return (
    <div className='grid grid-cols-3-expenses'>
      <div className='custom-table-left-column pt-4'>
        <p className='m-0 capitalize custom-table-cell custom-table-left-side w-full'>{gasto.persona}</p>
      </div>
      <div className='custom-table-center-column pt-4'>
        <p className='m-0 custom-table-cell w-full'>{gasto.monto}</p>
      </div>
      <div className='custom-table-right-column pt-4'>
        <p className='m-0 capitalize custom-table-cell custom-table-right-side w-full'>{gasto.detalle}</p>
      </div>
      {/* <button>Editar</button> */}
      <button onClick={() => borrarGasto(gasto)} className='bg-red-300 rounded-md'>
        X
      </button>
    </div>
  );
}

export default Gasto;
