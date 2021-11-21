import React from 'react';

function Resultados({ resultados }) {
  return resultados.total === undefined ? (
    <div>Esperando datos...</div>
  ) : (
    <div className='flex flex-col'>
      <div>Gasto total = {resultados.total}</div>
      <div>División tradicional = {resultados.divisionTradicional}</div>
      {!resultados.todesCompartenTodo && <div className='flex flex-col'>
        Gastos por Categoría ={' '}
        {resultados.categoriasConCantidad?.map((categoria) => (
          <span key={categoria.id} className='capitalize'>{`${categoria.detalle}: $ ${categoria.monto}`}</span>
        ))}
      </div>}
    </div>
  );
}

export default Resultados;
