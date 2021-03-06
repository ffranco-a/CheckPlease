import React from 'react';
import ConsumoSelectorPersona from './ConsumoSelectorPersona';
import ConsumosSiONo from './ConsumosSiONo';

function Consumo({ todes, categoria, categorias, setCategorias, grupo, agregarPersona }) {
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
      <span className='capitalize font-bold text-center text-xl tracking-wide'>{categoria.detalle}</span>
      <ConsumosSiONo categoria={categoria.detalle} handleSetTodes={handleTodes} todes={categoria.todes} disabled={todes} />

      {/* //* si la categoría no fue compartida por todes, muestro el selector de personas individuales */}
      {!categoria.todes && (
        <div className={`${categoria.todes ? 'text-gray-500' : null} mt-auto flex flex-col`}>
          <hr className='my-2' />
          <h3 className='m-0 mb-auto'>¿Quiénes sí?</h3>
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
      )}
    </div>
  );
}

export default Consumo;
