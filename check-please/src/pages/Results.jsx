import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ResultadoPersona from '../components/results/ResultadoPersona';

function Results({ resultados }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('results') && resultados.total === undefined) navigate('/main');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //* para evitar errores, si aún no hay resultados no computo nada
  if (!resultados.total) return <></>;

  //* para mostrar el grupo de forma ordenada, lo divido en dos columnas, con un índice intermedio
  let middleIndex = resultados.grupo.cantidad / 2;
  if (middleIndex % 2 !== 0) middleIndex = Math.ceil(middleIndex);
  const firstGroupHalf = resultados.grupo.personas.slice(0, middleIndex);
  const secondGroupHalf = resultados.grupo.personas.slice(middleIndex);

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
              Si consumiste de todo, tenés que poner {resultados.divisionQuienConsumioTodo}.
            </div>
          )}
          <hr />
          <br />
          PERSONA POR PERSONA:{' '}
          <div className='flex gap-4 items-start justify-between'>
            {/* //* primera columna, flex column */}
            <div className='flex flex-col w-full'>
              {firstGroupHalf.map((persona) => (
                <ResultadoPersona key={persona.id} persona={persona} />
              ))}
            </div>

            {/* //* segunda columna, flex column reverse */}
            <div className='flex flex-col-reverse w-full'>
              {secondGroupHalf.map((persona) => (
                <ResultadoPersona key={persona.id} persona={persona} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Results;
