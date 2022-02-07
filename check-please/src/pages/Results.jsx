import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Results({ resultados }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('results') && resultados.total === undefined) navigate('/main');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            División tradicional entre todas las personas del grupo ({resultados.grupo.cantidad}) = {resultados.divisionPartesIguales}.
          </div>
          <hr />
          {!resultados.todesCompartenTodo && (
            <div className='flex flex-col my-4'>
              CATEGORÍAS:{' '}
              {resultados.categorias?.map((categoria) => (
                <span key={categoria.id}>
                  <span className='capitalize underline italic'>{categoria.detalle}:</span> {categoria.monto.format()}, dividido entre{' '}
                  <span className='italic cursor-pointer' title={`Compartieron: ${categoria.comparten.personas.join(', ')}`}>
                    {categoria.comparten.cantidad} personas
                  </span>{' '}
                  queda en {categoria.montoIndividual} cada una.
                </span>
              ))}
              Por lo tanto alguien que comsumió de todo debe poner {resultados.divisionQuienConsumioTodo}*.
              <br />
              <span className='text-sm'>
                (*Caso específico de alguien que consumió de todo y que no tiene gastos previos. Para el detalle de cada persona, considerándose qué
                cosas consumió y cuánto gasto previo ya efectuó, seguir leyendo)
              </span>
            </div>
          )}
          <hr />
          <br />
          PERSONA POR PERSONA:{' '}
          {resultados.grupo.personas?.map((persona) => (
            <div key={persona.id} className='my-3'>
              <span className='capitalize font-bold underline'>{persona.nombre}</span>{' '}
              {persona.puso === '$0.00' ? `no puso nada` : `puso ${persona.puso}`} y consumió un total de {persona.comparte?.total}.
              <br />
              Por lo tanto,{' '}
              {persona.puso === '$0.00' ? (
                <span className='font-bold'>
                  debe poner <span className='underline'>{persona.debe}</span> en el fondo común.
                </span>
              ) : persona.debe.includes('-') ? (
                <span className='font-bold'>
                  tiene que sacar <span className='underline'>{persona.debe.substring(1)}</span> del fondo común.
                </span>
              ) : (
                <span className='font-bold'>
                  debe poner solo <span className='underline'>{persona.debe}</span> en el fondo común ({persona.comparte?.total} - {persona.puso})
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
