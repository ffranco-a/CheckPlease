import React from 'react';
import { useNavigate } from 'react-router-dom';

//? Components
import Consumos from '../components/main/Consumos';
import Gastos from '../components/main/Gastos';
import Personas from '../components/main/Personas';

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

  const navigate = useNavigate();

  const disabledCalculateButton = () => {
    if (grupo.cantidad >= 2 && gastos.length >= 1) return false;
    return true;
  };

  return (
    <div className='display bg-medium w-screen min-h-screen tablet:flex tablet:flex-col tablet:justify-center'>
      <span className='underline cursor-pointer' onClick={() => navigate('/')}>
        volver al landing
      </span>
      {/* <div className='flex flex-col'>
        <div> */}
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
          <button disabled={disabledCalculateButton()} className={`${disabledCalculateButton() ? 'disabled-button' : 'enabled-button'} button`} onClick={handleCalcular}>
            Calcular
          </button>
        {/* </div> */}
        {/* <Resultados resultados={resultados} todesCompartenTodo={todesCompartenTodo} /> */}
      {/* </div> */}
    </div>
  );
}

export default Main;
