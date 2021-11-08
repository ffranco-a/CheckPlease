import React, { useState } from 'react';
import Consumos from './components/Consumos';
import Gastos from './components/Gastos';
import Personas from './components/Personas';
import Resultados from './components/Resultados';
import calcular from './helpers/calcular';

function App() {
  //* Array con los nombres de las personas en el grupo
  const [grupo, setGrupo] = useState([]);

  //* Array con los gastos individuales realizados
  const [gastos, setGastos] = useState([]);

  //* Array con las categorias a subdividir por consumo
  const [categorias, setCategorias] = useState([]);

  //* Objeto con los resultados
  const [resultados, setResultados] = useState({});

  //* llamar a la función para calcular
  const handleCalcular = (e) => {
    e.preventDefault();
    setResultados(calcular(grupo, gastos, categorias));
  }

  return (
    <div className='flex justify-evenly'>
      <div>
        <Personas grupo={grupo} setGrupo={setGrupo} />
        <Gastos grupo={grupo} gastos={gastos} setGastos={setGastos} categorias={categorias} setCategorias={setCategorias} />
        <Consumos categorias={categorias} setCategorias={setCategorias} grupo={grupo} />
        <button
          className='rounded-md p-4 mx-auto my-4 w-full bg-blue-400 transition-all hover:bg-blue-200'
          onClick={handleCalcular}>
          Calcular
        </button>
      </div>
      <Resultados resultados={resultados} />
    </div>
  );
}

export default App;
