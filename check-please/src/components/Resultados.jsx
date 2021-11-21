import React from 'react';

function Resultados({ resultados }) {
  return resultados.total === undefined ? (
    <div>Esperando datos...</div>
  ) : (
    <div className='flex flex-col'>
      <div>Gasto total = {resultados.total}</div>
      <div>División tradicional = {resultados.divisionPartesIguales}</div>
      {!resultados.todesCompartenTodo && (
        <div className='flex flex-col'>
          Gastos por Categoría ={' '}
          {resultados.categorias?.map((categoria) => (
            <span key={categoria.id}>
              <span className='capitalize'>{categoria.detalle}:</span> {categoria.monto.format()} , dividido entre <span title={`Compartieron: ${categoria.comparten.personas.join(', ')}`}>{categoria.comparten.cantidad}{' '}
              personas</span> queda en {categoria.montoIndividual} cada una.
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default Resultados;
