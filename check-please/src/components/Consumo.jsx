import React from 'react';
import ConsumoSelectorPersona from './ConsumoSelectorPersona';

function Consumo({ categoria, categorias, setCategorias, grupo }) {
  //* función que actualiza a una categoría: si fue o no consumida por todes
  const handleTodes = () => {
    const categoriasActualizadas = categorias.map((consumo) => {
      if (consumo.id === categoria.id) consumo.todes = !consumo.todes;
      return consumo;
    });
    setCategorias(categoriasActualizadas);
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
    <div className='p-2 flex flex-col bg-gray-300 rounded-md'>
      <span className='capitalize font-bold text-center'>{categoria.detalle}</span>
      <label>
        <input type='checkbox' checked={categoria.todes} onChange={() => handleTodes(categoria.id)} />
        ¿Todes consumieron <span className='capitalize italic'>{categoria.detalle}</span>?: {categoria.todes ? 'SI' : 'NO'}
      </label>
      {!categoria.todes && (
        <div>
          <hr className='my-2' />
          ¿Quiénes consumieron <span className='capitalize italic'>{categoria.detalle}</span>?
          {grupo.map((persona) => (
            <div key={persona.id}>
              <ConsumoSelectorPersona
                persona={persona}
                comparten={categoria.comparten}
                seleccionarPersona={handleSeleccionarPersona}
                categorias={categorias}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Consumo;
