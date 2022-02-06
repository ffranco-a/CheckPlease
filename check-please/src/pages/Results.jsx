import React from 'react';
import { useNavigate } from 'react-router-dom';

function Results({ resultados }) {
  const navigate = useNavigate();

  return (
    <div className='display bg-medium w-screen min-h-screen tablet:flex tablet:flex-col tablet:justify-center'>
      <span className='underline cursor-pointer' onClick={() => navigate('/main')}>
        volver a editar
      </span>

      {resultados.total === undefined ? (
        <div>Esperando datos...</div>
      ) : (
        <>
          <div>Gasto total = {resultados.total}</div>
          <div>
            División entre {resultados.grupo.cantidad} personas = {resultados.divisionPartesIguales}
          </div>
          <hr />
          {!resultados.todesCompartenTodo && (
            <div className='flex flex-col'>
              CATEGORIAS ={' '}
              {resultados.categorias?.map((categoria) => (
                <span key={categoria.id}>
                  <span className='capitalize'>{categoria.detalle}:</span> {categoria.monto.format()} , dividido entre{' '}
                  <span className='underline cursor-pointer' title={`Compartieron: ${categoria.comparten.personas.join(', ')}`}>
                    {categoria.comparten.cantidad} personas
                  </span>{' '}
                  queda en {categoria.montoIndividual} cada una.
                </span>
              ))}
            </div>
          )}
          <hr />
          PERSONA POR PERSONA ={' '}
          {resultados.grupo.personas.map((persona) => (
            <div key={persona.id}>
              <br />
              <span className='capitalize font-bold'>{persona.nombre}</span> consumió un total de {persona.comparte?.total}
              <br />
              {persona.puso === '$0.00' ? (
                <span>
                  {' '}
                  y como no puso nada <span className='font-bold'>ese es el monto que debe poner al fondo común ({persona.debe}).</span>
                </span>
              ) : persona.debe.includes('-') ? (
                <span>
                  {' '}
                  pero como puso más que eso (puso {persona.puso} en total),{' '}
                  <span className='font-bold'>debe sacar {persona.debe.substring(1)} del fondo común.</span>
                </span>
              ) : (
                <span>
                  {' '}
                  pero como puso {persona.puso} <span className='font-bold'>debe poner solo {persona.debe} en el fondo común.</span>
                </span>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Results;
