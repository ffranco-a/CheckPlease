import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

//? Components
import Landing from './components/Landing/Landing';
import Main from './components/Main/Main';
import Resultados from './components/Resultados/Resultados';

//? Helpers
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

  //* Objeto con los resultados que se computarán con toda la información de arriba
  const [resultados, setResultados] = useState({});

  //* Función que agrega personas al array `grupo` de personas
  const handleAgregarPersona = (nombre) => {
    if (grupo.personas.some((persona) => persona.nombre === nombre)) {
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
    <Routes>
      <Route
        exact
        path='/'
        element={
          <Landing
            reunionTipoSalida={reunionTipoSalida}
            setReunionTipoSalida={setReunionTipoSalida}
            todesCompartenTodo={todesCompartenTodo}
            setTodesCompartenTodo={setTodesCompartenTodo}
          />
        }
      />
      <Route
        exact
        path='/main'
        element={
          <Main
            grupo={grupo}
            setGrupo={setGrupo}
            handleAgregarPersona={handleAgregarPersona}
            gastos={gastos}
            setGastos={setGastos}
            categorias={categorias}
            setCategorias={setCategorias}
            todesCompartenTodo={todesCompartenTodo}
            setTodesCompartenTodo={setTodesCompartenTodo}
            handleCalcular={handleCalcular}
          />
        }
      />
      <Route path='/results' exact element={<Resultados resultados={resultados} />} />
    </Routes>
  );
}

export default App;
