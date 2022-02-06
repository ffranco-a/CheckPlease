import React from 'react';
import Consumo from './Consumo';
import ConsumosSiONo from './ConsumosSiONo';

function Consumos({ categorias, setCategorias, grupo, todes, setTodes }) {
  return (
    <fieldset className='bg-dark text-text p-3 rounded-lg'>
      <legend>Consumos compartidos</legend>
      <ConsumosSiONo categoria='Todo' todes={todes} setTodes={setTodes} />
      <div className='grid grid-cols-2 gap-4 tablet:gap-8 mt-2'>
        {
        // todes === false &&
          categorias.map((categoria) => (
            <div key={categoria.id}>
              <Consumo todes={todes} categoria={categoria} categorias={categorias} setCategorias={setCategorias} grupo={grupo} />
            </div>
          ))}
      </div>
    </fieldset>
  );
}

export default Consumos;
