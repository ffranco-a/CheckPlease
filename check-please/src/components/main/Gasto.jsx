import React, { useState } from 'react';

import menuCircles from '../../static/images/menu-circles.svg';

function Gasto({ gasto, borrarGasto }) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className={`grid grid-cols-3-expenses relative transition-all ${showOptions && 'shadow-lg'}`}>
      <div className='custom-table-left-column pt-4'>
        <p className='m-0 capitalize custom-table-cell custom-table-left-side w-full'>{gasto.persona}</p>
      </div>
      <div className='custom-table-center-column pt-4'>
        <p className='m-0 custom-table-cell w-full'>{gasto.monto}</p>
      </div>
      <div className='custom-table-right-column pt-4'>
        <p className='m-0 capitalize custom-table-cell w-full'>{gasto.detalle}</p>
      </div>
      <button onClick={() => setShowOptions(!showOptions)} className='bg-primary-dark mt-4 custom-table-right-side'>
        <img src={menuCircles} alt='options' aria-label='options menú button' className='h-6 w-6 mx-auto' />
      </button>

      <div
        className={`absolute right-4 tablet:right-7 top-4 bottom-0 bg-primary-dark flex items-center justify-end overflow-hidden box-border transition-all ${
          showOptions ? 'w-32 px-6' : 'w-0 px-0'
        }`}>
        <button onClick={() => borrarGasto(gasto)} className={`${showOptions ? 'opacity-100' : 'opacity-0'} bg-primary rounded-md px-4 min-w-max transition-all hover:bg-primary-light`}>
          Borrar
        </button>
        {/* <button className='bg-primary rounded-md px-4 ml-4 min-w-max transition-colors hover:bg-primary-light'>
          Editar
        </button> */}
      </div>
    </div>
  );
}

export default Gasto;
