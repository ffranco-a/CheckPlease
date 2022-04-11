import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

//? Components
import Landing from './pages/Landing';
import Main from './pages/Main';
import Resultados from './pages/Results';

//? Helpers
import calcular from './helpers/calcular';

function App() {
  //* Booleano que indica si es una reunión de tipo Salida (sin gastos individuales que computar)
  const [reunionTipoSalida, setReunionTipoSalida] = useState(null);

  //* Booleano que indica si todes en el grupo consumieron todas las categorias
  const [todesCompartenTodo, setTodesCompartenTodo] = useState(null);

  //* Objeto con la cantidad de personas en el grupo y array sus nombres
  // const [grupo, setGrupo] = useState({ cantidad: 0, personas: [] });
  const [grupo, setGrupo] = useState({
    "cantidad": 8,
    "personas": [
      {
        "nombre": "camila",
        "id": 0
      },
      {
        "nombre": "abi",
        "id": 1
      },
      {
        "nombre": "franco",
        "id": 2
      },
      {
        "nombre": "luciano",
        "id": 3
      },
      {
        "nombre": "alvaro",
        "id": 4
      },
      {
        "nombre": "emo",
        "id": 5
      },
      {
        "nombre": "ale",
        "id": 6
      },
      {
        "nombre": "coti",
        "id": 7
      }
    ]
  });

  //* Array con los gastos individuales realizados
  // const [gastos, setGastos] = useState([]);
  const [gastos, setGastos] = useState([
    {
      "persona": "camila",
      "detalle": "cerveza",
      "monto": "$575.00",
      "id": 0
    },
    {
      "persona": "franco",
      "detalle": "cerveza",
      "monto": "$600.00",
      "id": 1
    },
    {
      "persona": "luciano",
      "detalle": "cena",
      "monto": "$1,300.00",
      "id": 2
    },
    {
      "persona": "ale",
      "detalle": "cena",
      "monto": "$500.00",
      "id": 3
    },
    {
      "persona": "alvaro",
      "detalle": "postre",
      "monto": "$800.00",
      "id": 4
    },
    {
      "persona": "franco",
      "detalle": "papitas",
      "monto": "$280.00",
      "id": 5
    },
    {
      "persona": "franco",
      "detalle": "salamin",
      "monto": "$700.00",
      "id": 6
    },
    {
      "persona": "coti",
      "detalle": "vino",
      "monto": "$800.00",
      "id": 7
    }
  ]);

  //* Array con las categorias a subdividir por consumo
  // const [categorias, setCategorias] = useState([]);
  const [categorias, setCategorias] = useState([
    {
      "id": 0,
      "detalle": "cerveza",
      "comparten": [
        "camila",
        "franco",
        "abi",
        "alvaro",
        "emo"
      ],
      "todes": false
    },
    {
      "id": 1,
      "detalle": "cena",
      "comparten": [
        "luciano",
        "alvaro",
        "emo",
        "abi",
        "camila",
        "franco"
      ],
      "todes": true
    },
    {
      "id": 2,
      "detalle": "postre",
      "comparten": [
        "alvaro"
      ],
      "todes": true
    },
    {
      "id": 3,
      "detalle": "papitas",
      "comparten": [
        "franco",
        "emo",
        "alvaro",
        "luciano",
        "abi",
        "camila",
        "coti"
      ],
      "todes": false
    },
    {
      "id": 4,
      "detalle": "salamin",
      "comparten": [
        "franco",
        "camila",
        "abi",
        "emo",
        "ale"
      ],
      "todes": false
    },
    {
      "id": 5,
      "detalle": "vino",
      "comparten": [
        "coti",
        "alvaro",
        "camila",
        "emo"
      ],
      "todes": false
    }
  ]);

  //* Objeto con los resultados que se computarán con toda la información de arriba
  const [resultados, setResultados] = useState({});

  //* Función que agrega personas al array `grupo` de personas
  const handleAgregarPersona = (nombre) => {
    if (grupo.personas.some((persona) => persona.nombre === nombre)) {
      alert(`Los nombres de las personas deben ser únicos`);
      return false;
    } else {
      const id = grupo.personas.length === 0 ? 0 : grupo.personas[grupo.personas.length - 1].id + 1;
      const personas = [...grupo.personas, { nombre, id }];
      setGrupo({ cantidad: personas.length, personas });
      return true;
    }
  };

  const navigate = useNavigate();

  //* llamar a la función para calcular
  const handleCalcular = (e) => {
    e.preventDefault();

    // setResultados(calcular(reunionTipoSalida, todesCompartenTodo, grupo, gastos, categorias)); //* ← este es el real
    setResultados(calcular(false, false, grupo, gastos, categorias)); //TODO refactor. solo es versión estable para deployar
    navigate('/results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
