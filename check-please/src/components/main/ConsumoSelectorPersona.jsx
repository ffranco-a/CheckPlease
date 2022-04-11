import React, { useEffect, useState } from 'react';

function ConsumoSelectorPersona({ persona, comparten, seleccionarPersona, categorias, disabled }) {
  const [comparte, setComparte] = useState(comparten.includes(persona.nombre));

  //* si detecto cambios en categorías, o en el array comparten de una categoría, reviso si esos cambios afectan a esta persona en particular o no
  useEffect(() => {
    setComparte(comparten.includes(persona.nombre));
  }, [categorias, comparten, persona.nombre]);

  //* función para setear que esta persona consumió una determinada categoría
  const handleSeleccionarPersona = () => {
    const nuevoComparte = !comparte;
    seleccionarPersona(persona.nombre, nuevoComparte);
    setComparte(nuevoComparte);
  };

  return (
    <label className='capitalize'>
      <input type='checkbox' disabled={disabled} checked={comparte} onChange={handleSeleccionarPersona} />
      {persona.nombre}
    </label>
  );
}

export default ConsumoSelectorPersona;
