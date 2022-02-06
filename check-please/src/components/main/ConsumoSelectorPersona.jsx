import React, { useEffect, useState } from 'react';

function ConsumoSelectorPersona({ persona, comparten, seleccionarPersona, categorias, disabled }) {
  const [comparte, setComparte] = useState(comparten.includes(persona.nombre));

  const handleSeleccionarPersona = () => {
    const nuevoComparte = !comparte;
    seleccionarPersona(persona.nombre, nuevoComparte);
    setComparte(!comparte);
  };

  useEffect(() => {
    setComparte(comparten.includes(persona.nombre));
  }, [categorias, comparten, persona.nombre]);

  return (
    <label className='capitalize'>
      <input type='checkbox' disabled={disabled} checked={comparte} onChange={handleSeleccionarPersona} />
      {persona.nombre}
    </label>
  );
}

export default ConsumoSelectorPersona;
