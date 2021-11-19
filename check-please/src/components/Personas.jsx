import React from 'react';

//? Components
import PersonaAgregar from './PersonaAgregar';
import Persona from './Persona';

function Personas({ grupo, setGrupo, agregarPersona }) {
  //* Función para eliminar a una persona del array `grupo` // falta que si elimino una persona que hizo gastos, que los gastos asociados a esa persona se eliminen también
  const handleBorrarPersona = (persona) => {
    const nuevoGrupo = grupo.filter((prevPersona) => prevPersona.id !== persona.id);
    setGrupo(nuevoGrupo);
  };

  return (
    <fieldset className='border border-solid border-gray-300 p-3 rounded-lg'>
      <legend>Agregar personas al grupo</legend>
      <PersonaAgregar agregarPersona={agregarPersona} />
      <div className='flex'>
        {/* ↓ por cada persona en el array de personas muestro su nombre y opciones como editar el nombre o eliminarla */}
        {grupo.length > 0 &&
          grupo.map((persona) => (
            <div key={persona.id}>
              <Persona persona={persona} borrarPersona={handleBorrarPersona} />
            </div>
          ))}
      </div>
    </fieldset>
  );
}

export default Personas;
