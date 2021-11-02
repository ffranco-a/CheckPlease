import React from 'react';
import AgregarGasto from './AgregarGasto';

function Gastos({ gastos, setGastos, grupo }) {
  //* Función que agrega gastos al array `gastos`
  const handleAgregarGasto = (gasto) => {
    const id = gastos.length === 0 ? 0 : gastos[gastos.length - 1].id + 1;
    setGastos([...gastos, { gasto, id }]);
  };

  return (
    <fieldset className='border border-solid border-gray-300 p-3 rounded-lg'>
      <legend>Agregar gastos</legend>
      <AgregarGasto agregarGasto={handleAgregarGasto} grupo={grupo} />
      {gastos.length > 0 && gastos.map((gasto) => <div>{gasto.detalle}</div>)}
    </fieldset>
  );
}

export default Gastos;
