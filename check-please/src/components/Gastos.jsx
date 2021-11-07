import React from 'react';
import AgregarGasto from './AgregarGasto';
import Gasto from './Gasto';

function Gastos({ gastos, setGastos, grupo, categorias, setCategorias }) {
  //* Función que agrega gastos al array `gastos`
  const handleAgregarGasto = (gasto) => {
    //* Agrego el nuevo gasto al array de gastos, con un id único
    const idGasto = gastos.length === 0 ? 0 : gastos[gastos.length - 1].id + 1;
    setGastos([...gastos, { ...gasto, id: idGasto }]);

    //* si esta categoría es nueva, la agrego al array de categorías, con su id único
    if (!categorias.some((categoria) => categoria.detalle === gasto.detalle)) {
      const nuevaCategoria = {
        id: categorias.length === 0 ? 0 : categorias[categorias.length - 1].id + 1,
        detalle: gasto.detalle,
        comparten: gasto.persona === '' ? [] : [gasto.persona],
        todes: false,
      };
      setCategorias([...categorias, nuevaCategoria]);
    } else {
      const categoriasActualizadas = categorias.map((categoria) => {
        if (categoria.detalle === gasto.detalle) {
          if (!categoria.comparten.includes(gasto.persona)) categoria.comparten.push(gasto.persona);
        }
        return categoria;
      });
      setCategorias(categoriasActualizadas);
    }
  };

  //* Función para eliminar gastos del array `gastos`
  const handleBorrarGasto = (gasto) => {
    const nuevosGastos = gastos.filter((prevGastos) => prevGastos.id !== gasto.id);
    if (!nuevosGastos.some((prevGasto) => prevGasto.detalle === gasto.detalle)) {
      const nuevasCategorias = categorias.filter((categoria) => categoria.detalle !== gasto.detalle);
      setCategorias(nuevasCategorias);
    }
    setGastos(nuevosGastos);
  };

  return (
    <fieldset className='border border-solid border-gray-300 p-3 rounded-lg'>
      <legend>Agregar gastos</legend>
      <AgregarGasto agregarGasto={handleAgregarGasto} grupo={grupo} categorias={categorias} setCategorias={setCategorias} />
      {/* ↓ por cada gasto en el array de gastos muestro el detalle, el monto y un botón para eliminarlo */}
      {gastos.length > 0 &&
        gastos.map((gasto) => (
          <div key={gasto.id}>
            <Gasto gasto={gasto} borrarGasto={handleBorrarGasto} />
          </div>
        ))}
    </fieldset>
  );
}

export default Gastos;
