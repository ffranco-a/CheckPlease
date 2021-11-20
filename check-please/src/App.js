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

  //* Booleano que indica si todes en el grupo consumieron todas las categorias
  const [todesCompartenTodo, setTodesCompartenTodo] = useState(null);

  //* Objeto con los resultados
  const [resultados, setResultados] = useState({});

  //* Función que agrega personas al array `grupo` de personas
  const handleAgregarPersona = (nombre) => {
    if (grupo.some((persona) => persona.nombre.toLowerCase() === nombre.toLowerCase())) {
      alert(`Los nombres de las personas deben ser únicos`);
      return;
    } else {
      const id = grupo.length === 0 ? 0 : grupo[grupo.length - 1].id + 1;
      setGrupo([...grupo, { nombre, id }]);
    }
  };

  //* llamar a la función para calcular
  const handleCalcular = (e) => {
    e.preventDefault();
    console.log('grupo : ', grupo); // ELETE DELETE DELETE
    console.log('gastos : ', gastos); // ELETE DELETE DELETE
    console.log('categorias : ', categorias); // ELETE DELETE DELETE
    setResultados(calcular(grupo, gastos, categorias, todesCompartenTodo));
  };

  return (
    <div className='flex flex-col justify-evenly'>
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
        <Consumos categorias={categorias} setCategorias={setCategorias} grupo={grupo} todes={todesCompartenTodo} setTodes={setTodesCompartenTodo} />
        <button className='rounded-md p-4 mx-auto my-4 w-full bg-blue-400 transition-all hover:bg-blue-200' onClick={handleCalcular}>
          Calcular
        </button>
      </div>
      <Resultados resultados={resultados} />
    </div>
  );
}

export default App;
