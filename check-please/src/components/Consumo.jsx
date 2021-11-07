import React from 'react';

function Consumo({ categoria, categorias, setCategorias }) {

  //* función que actualiza a una categoría: si fue o no consumida por todes
  const handleTodes = () => {
    const categoriasActualizadas = categorias.map((consumo) => {
      if (consumo.id === categoria.id) consumo.todes = !consumo.todes;
      return consumo;
    });
    setCategorias(categoriasActualizadas);
  };

  return (
    <div className='p-2 flex flex-col bg-gray-300 rounded-md'>
      <span className='capitalize font-bold'>{categoria.detalle}</span>
      <label>
        <input type='checkbox' onChange={() => handleTodes(categoria.id)} />
        ¿Todes consumieron <span className='capitalize italic'>{categoria.detalle}</span>?: {categoria.todes ? 'SI' : 'NO'}
      </label>
    </div>
  );
}

export default Consumo;
