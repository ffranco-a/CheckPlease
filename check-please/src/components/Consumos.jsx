import React from 'react';
import Consumo from './Consumo';
import ConsumosSiONo from './ConsumosSiONo';

function Consumos({ categorias, setCategorias, grupo, todes, setTodes }) {
  return (
    <fieldset className='border border-solid border-gray-300 p-3 rounded-lg'>
      <legend>Gestionar consumos compartidos</legend>
      <ConsumosSiONo categoria='Todo' todes={todes} setTodes={setTodes} />
      <div className='flex gap-8'>
        {todes === false &&
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
