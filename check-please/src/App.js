import React, { useState } from 'react';
import Gastos from './components/Gastos';
import Personas from './components/Personas';

function App() {
  //* Array con los nombres de las personas
  const [grupo, setGrupo] = useState([]);

  // * Array con los gastos
  const [gastos, setGastos] = useState([]);

  // * Array con las categorias a subdividir
  const [categorias, setCategorias] = useState([]);

  return (
    <div className='flex justify-evenly'>
      <div>
        <Personas grupo={grupo} setGrupo={setGrupo} />
        <Gastos grupo={grupo} gastos={gastos} setGastos={setGastos} categorias={categorias} setCategorias={setCategorias} />
        <div>Gestionar Gastos</div>
        <button>Calcular</button>
      </div>
      <div>Ver cálculos</div>
    </div>
  );
}

export default App;
