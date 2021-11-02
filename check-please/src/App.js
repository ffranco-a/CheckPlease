import React, { useState } from 'react';
import Gastos from './components/Gastos';
import Personas from './components/Personas';

function App() {
  //* Array con los nombres de las personas
  const [grupo, setGrupo] = useState([]);

  // * Array con los gastos
  const [gastos, setGastos] = useState([]);

  return (
    <div className='flex justify-evenly'>
      <div>
        <Personas grupo={grupo} setGrupo={setGrupo} />
        <Gastos gastos={gastos} setGastos={setGastos} grupo={grupo} />
        <div>Gestionar Gastos</div>
        <button>Calcular</button>
      </div>
      <div>Ver cálculos</div>
    </div>
  );
}

export default App;
