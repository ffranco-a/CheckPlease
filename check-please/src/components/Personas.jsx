import React from 'react';

//? Components
import AgregarPersona from './AgregarPersona';
import Persona from './Persona';

function Personas({ grupo, setGrupo }) {

  //* Función que agrega personas al array `grupo` de personas
  const handleAgregarPersona = (nombre) => {
    /* me falta controlar que el nombre nuevo no exista ya en el array, o pedir que modifique el que existe */
    const id = grupo.length === 0 ? 0 : grupo[grupo.length - 1].id + 1;
    setGrupo([...grupo, { nombre, id }]);
  };

  //* Función para eliminar a una persona del array `grupo`
  const handleBorrarPersona = (persona) => {
    const nuevoGrupo = grupo.filter(prevPersona => prevPersona.id !== persona.id);
    setGrupo(nuevoGrupo);
  };

  return (
    <fieldset className='border border-solid border-gray-300 p-3 rounded-lg'>
      <legend>Agregar personas</legend>
      <AgregarPersona agregarPersona={handleAgregarPersona} />
      {/* ↓ por cada persona en el array de personas muestro su nombre y opciones como editar el nombre o eliminarla */}
      {grupo.length > 0 && grupo.map((persona) => <Persona key={persona.id} persona={persona} borrarPersona={handleBorrarPersona} />)}
    </fieldset>
  );
}

export default Personas;
