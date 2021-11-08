import React, { useState } from 'react';
import Consumo from './Consumo';

function Consumos({ categorias, setCategorias, grupo }) {
  const [todes, setTodes] = useState(false);

  return (
    <fieldset className='border border-solid border-gray-300 p-3 rounded-lg'>
      <legend>Gestionar consumos compartidos</legend>
      <label>
        <input type='checkbox' onChange={() => setTodes(!todes)} />
        ¿Todes consumieron todo?: {todes ? 'SI' : 'NO'}
      </label>
      <div className='flex gap-8'>
        {!todes &&
          categorias.map((categoria) => (
            <div key={categoria.id}>
              <Consumo categoria={categoria} categorias={categorias} setCategorias={setCategorias} grupo={grupo} />
            </div>
          ))}
      </div>
    </fieldset>
  );
}

export default Consumos;
