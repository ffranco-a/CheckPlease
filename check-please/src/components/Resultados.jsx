import React from 'react';

function Resultados({ resultados }) {
  return (
    resultados.total === undefined 
      ? <div>Esperando datos...</div> 
      : <div>
        Gasto total = {resultados.total} <br />
        División tradicional = {resultados.divisionTradicional}
        Gastos por Categoría = {resultados.gastosPorCategoria.map((gasto, i) => <span key={i}>{`${gasto[0]}: ${gasto[1]}`}</span>)}
      </div>
  );
}

export default Resultados;
