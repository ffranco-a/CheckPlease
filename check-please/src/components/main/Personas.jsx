import React, { useState } from 'react';

//? Components
import PersonaAgregar from './PersonaAgregar';
import Persona from './Persona';
import PersonaBotonAgregar from './PersonaBotonAgregar';

function Personas({ grupo, setGrupo, agregarPersona, gastos }) {
  //* Estado en el que controlo si debo mostrar el input para agregar a una persona o no
  const [mostrarInput, setMostrarInput] = useState(false);

  //* Función para eliminar a una persona del array `grupo` // falta que si elimino una persona que hizo gastos, que los gastos asociados a esa persona se eliminen también
  const handleBorrarPersona = (persona) => {
    //* si hay gastos realizados por la persona que se intenta eliminar, notifico al usuario y le pido que confirme (FALTA!)
    if (gastos.some((gasto) => gasto.persona === persona.nombre)) {
      alert(
        'La persona que intentas eliminar tiene gastos registrados. Realizar esta acción borrará los gastos de esa persona, ¿confirmas realizar esta acción? (eventualmente implementar esta funcionalidad)'
      );
      return;
    }
    const nuevoGrupo = grupo.personas.filter((prevPersona) => prevPersona.id !== persona.id);
    setGrupo({
      cantidad: nuevoGrupo.length,
      personas: nuevoGrupo,
    });
  };

  return (
    <fieldset className='bg-dark text-text px-3 py-1 rounded-lg'>
      <legend>Grupo</legend>
      <div className='flex justify-center gap-4 my-2 overflow-x-auto flex-wrap'>
        {/* ↓ por cada persona en el array de personas muestro su nombre y opciones como editar el nombre o eliminarla */}
        {grupo.cantidad > 0 &&
          grupo.personas.map((persona) => (
            <div key={persona.id}>
              <Persona persona={persona} borrarPersona={handleBorrarPersona} />
            </div>
          ))}
        <PersonaBotonAgregar mostrarInput={mostrarInput} setMostrarInput={setMostrarInput} />
      </div>
      {mostrarInput && (
        <div>
          <PersonaAgregar agregarPersona={agregarPersona} setMostrarInput={setMostrarInput} />
        </div>
      )}
    </fieldset>
  );
}

export default Personas;
