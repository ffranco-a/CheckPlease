import React from 'react';

//? Components
import Consumos from './Elements/Consumos';
import Gastos from './Elements/Gastos';
import Personas from './Elements/Personas';

function Main({
  grupo,
  setGrupo,
  handleAgregarPersona,
  gastos,
  setGastos,
  categorias,
  setCategorias,
  todesCompartenTodo,
  setTodesCompartenTodo,
  handleCalcular,
}) {
  return (
    <div className='w-full max-w-screen-sm flex justify-center mx-auto p-2'>
      <div className='flex flex-col'>
        <div>
          <Personas grupo={grupo} setGrupo={setGrupo} agregarPersona={handleAgregarPersona} gastos={gastos} />
          <Gastos
            grupo={grupo}
            gastos={gastos}
            setGastos={setGastos}
            categorias={categorias}
            setCategorias={setCategorias}
            agregarPersona={handleAgregarPersona}
          />
          <Consumos
            categorias={categorias}
            setCategorias={setCategorias}
            grupo={grupo}
            todes={todesCompartenTodo}
            setTodes={setTodesCompartenTodo}
          />
          <button className='rounded-md p-4 mx-auto my-4 w-full bg-blue-400 transition-all hover:bg-blue-200' onClick={handleCalcular}>
            Calcular
          </button>
        </div>
        {/* <Resultados resultados={resultados} todesCompartenTodo={todesCompartenTodo} /> */}
      </div>
    </div>
  );
}

export default Main;
