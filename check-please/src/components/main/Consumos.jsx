import React from 'react';
import Consumo from './Consumo';
// import ConsumosSiONo from './ConsumosSiONo';

function Consumos({ categorias, setCategorias, grupo, todes, setTodes, agregarPersona }) {
  return (
    <fieldset className='bg-dark text-text p-3 rounded-lg'>
      <legend className='text-2xl'>Consumos compartidos</legend>
      {/* //* comentado hasta que esa funcionalidad esté implementada, por el momento si no hay gastos le informo al user que aún no hay gastos por compartir */}
      {/* <ConsumosSiONo categoria='Todo' todes={todes} setTodes={setTodes} /> */}
      {categorias.length === 0 && <h4 className='text-center text-gray-500'>Esperando gastos...</h4>}
      <div className='grid grid-cols-2 gap-4 tablet:gap-8 mt-2'>
        {
          // todes === false &&
          categorias.map((categoria) => (
            <div key={categoria.id}>
              <Consumo
                todes={todes}
                categoria={categoria}
                categorias={categorias}
                setCategorias={setCategorias}
                grupo={grupo}
                agregarPersona={agregarPersona}
              />
            </div>
          ))
        }
      </div>
    </fieldset>
  );
}

export default Consumos;
