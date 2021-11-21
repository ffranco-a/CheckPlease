import React, { useState } from 'react';
import Consumos from './components/Consumos';
import Gastos from './components/Gastos';
import Personas from './components/Personas';
import Resultados from './components/Resultados';
import calcular from './helpers/calcular';

function App() {
  //* Booleano que indica si es una reunión de tipo Salida (sin gastos individuales que computar)
  const [reunionTipoSalida, setReunionTipoSalida] = useState(null);

  //* Booleano que indica si todes en el grupo consumieron todas las categorias
  const [todesCompartenTodo, setTodesCompartenTodo] = useState(null);

  //* Array con los nombres de las personas en el grupo
  const [grupo, setGrupo] = useState({ cantidad: 0, personas: [] });

  //* Array con los gastos individuales realizados
  const [gastos, setGastos] = useState([]);

  //* Array con las categorias a subdividir por consumo
  const [categorias, setCategorias] = useState([]);

  //* Objeto con los resultados que se computarán con toda la información dada
  const [resultados, setResultados] = useState({});

  //* Función que agrega personas al array `grupo` de personas
  const handleAgregarPersona = (nombre) => {
    if (grupo.personas.some((persona) => persona.nombre.toLowerCase() === nombre.toLowerCase())) {
      alert(`Los nombres de las personas deben ser únicos`);
      return;
    } else {
      const id = grupo.personas.length === 0 ? 0 : grupo.personas[grupo.personas.length - 1].id + 1;
      const personas = [...grupo.personas, { nombre, id }];
      setGrupo({ cantidad: personas.length, personas });
    }
  };

  //* llamar a la función para calcular
  const handleCalcular = (e) => {
    e.preventDefault();
    setResultados(calcular(reunionTipoSalida, todesCompartenTodo, grupo, gastos, categorias));
  };

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
          <Consumos categorias={categorias} setCategorias={setCategorias} grupo={grupo} todes={todesCompartenTodo} setTodes={setTodesCompartenTodo} />
          <button className='rounded-md p-4 mx-auto my-4 w-full bg-blue-400 transition-all hover:bg-blue-200' onClick={handleCalcular}>
            Calcular
          </button>
        </div>
        <Resultados resultados={resultados} todesCompartenTodo={todesCompartenTodo} />
      </div>
    </div>
  );
}

export default App;
