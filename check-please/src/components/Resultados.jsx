import React from 'react';

function Resultados({ resultados }) {
  return resultados.total === undefined ? (
    <div>Esperando datos...</div>
  ) : (
    <div className='flex flex-col'>
      <div>Gasto total = $ {resultados.total}</div>
      <div>División tradicional = $ {resultados.divisionTradicional}</div>
      <div className='flex flex-col'>
        Gastos por Categoría ={' '}
        {resultados.gastosPorCategoria.map((gasto, i) => (
          <span key={i} className='capitalize'>{`${gasto.detalle}: $ ${gasto.monto.toFixed(2)}`}</span>
        ))}
      </div>
    </div>
  );
}

export default Resultados;
