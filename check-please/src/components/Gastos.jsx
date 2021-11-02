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
        detalle: gasto.detalle,
        id: categorias.length === 0 ? 0 : categorias[categorias.length - 1].id + 1,
        comparten: [gasto.persona],
      };
      setCategorias([...categorias, nuevaCategoria]);
    } else {
      const categoriaActualizada = categorias.find(categoria => categoria.detalle === gasto.detalle);
      const categoriasFiltradas = categorias.filter(categoria => categoria.detalle !== gasto.detalle);
      categoriaActualizada.comparten.push(gasto.persona);
      setCategorias([...categoriasFiltradas, categoriaActualizada]);
    }
  };

  //* Función para eliminar gastos del array `gastos`
  const handleBorrarGasto = (gasto) => {
    const nuevosGastos = gastos.filter((prevGastos) => prevGastos.id !== gasto.id);
    if (!nuevosGastos.some(prevGasto => prevGasto.detalle === gasto.detalle)) {
      const nuevasCategorias = categorias.filter(categoria => categoria.detalle !== gasto.detalle);
      setCategorias(nuevasCategorias);
    }
    setGastos(nuevosGastos);
  };

  return (
    <fieldset className='border border-solid border-gray-300 p-3 rounded-lg'>
      <legend>Agregar gastos</legend>
      <AgregarGasto agregarGasto={handleAgregarGasto} grupo={grupo} categorias={categorias} setCategorias={setCategorias} />
      {gastos.length > 0 && gastos.map((gasto) => <Gasto key={gasto.id} gasto={gasto} borrarGasto={handleBorrarGasto} />)}
    </fieldset>
  );
}

export default Gastos;
