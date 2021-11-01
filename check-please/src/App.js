import React, { useState } from 'react';
import AgregarPersonas from './components/AgregarPersonas';

function App() {
  //* Array con los nombres de las personas
  const [grupo, setGrupo] = useState([]);

  // * Array con los gastos
  // const [gastos, setGastos] = useState([]);

  //* Función que agrega personas al array `grupo` de personas
  const handleAgregarPersona = (persona) => {
    setGrupo([...grupo, persona]);
  };

  return (
    <div className='flex justify-evenly'>
      <div>
        <div>Agregar personas</div>
        <AgregarPersonas agregarPersona={handleAgregarPersona} />
        {/* ↓ por cada persona en el array de personas muestro su nombre EVENTUALMENTE ESTO VA A SER OTRO COMPONENTE TMB */}
        {grupo.length > 0 &&
          grupo.map((nombre, i) => (
            <div key={i} className='bg-gray-300 rounded-md p-1 m-1 capitalize'>
              {nombre}
            </div>
          ))}
        <div>Agregar gastos</div>
        <button>Calcular</button>
      </div>
      <div>Ver cálculos</div>
    </div>
  );
}

export default App;
