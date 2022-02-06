import React from 'react';
import ConsumoSelectorPersona from './ConsumoSelectorPersona';
import ConsumosSiONo from './ConsumosSiONo';

function Consumo({ todes, categoria, categorias, setCategorias, grupo }) {
  //* función que actualiza a una categoría: si fue o no consumida por todes
  const handleTodes = (e) => {
    if (categoria.todes === null || (e.target.value === 'no' && categoria.todes === true) || (e.target.value === 'si' && categoria.todes === false)) {
      const categoriasActualizadas = categorias.map((consumo) => {
        if (consumo.id === categoria.id) consumo.todes = e.target.value === 'si';
        return consumo;
      });
      setCategorias(categoriasActualizadas);
    }
  };

  //* función que actualiza el array `compartidos` de un consumo en particular
  const handleSeleccionarPersona = (nombre, checked) => {
    const categoriasActualizadas = categorias.map((consumo) => {
      if (consumo.id === categoria.id) {
        if (checked) consumo.comparten.push(nombre);
        else consumo.comparten = consumo.comparten.filter((persona) => persona !== nombre);
      }
      return consumo;
    });
    setCategorias(categoriasActualizadas);
  };

  return (
    <div className={`${todes ? 'bg-complementary' : 'bg-primary-dark'} p-2 flex flex-col text-text rounded-md h-full`}>
      <span className='capitalize font-bold text-center'>{categoria.detalle}</span>
      {/* <label>
        <input type='checkbox' checked={categoria.todes} onChange={() => handleTodes(categoria.id)} />
        ¿Todes consumieron <span className='capitalize italic'>{categoria.detalle}</span>?: {categoria.todes ? 'SI' : 'NO'}
      </label> */}
      <ConsumosSiONo categoria={categoria.detalle} handleSetTodes={handleTodes} todes={categoria.todes} disabled={todes} />
      
        <div className={`${categoria.todes ? 'text-gray-500' : null} mt-auto`} >
          <hr className='my-2' />
          ¿Quiénes compartieron <span className='capitalize italic'>{categoria.detalle}</span>?
          {grupo.personas.map((persona) => (
            <div key={persona.id}>
              <ConsumoSelectorPersona
                persona={persona}
                comparten={categoria.comparten}
                seleccionarPersona={handleSeleccionarPersona}
                categorias={categorias}
                disabled={categoria.todes || todes}
              />
            </div>
          ))}
        </div>
      
    </div>
  );
}

export default Consumo;
