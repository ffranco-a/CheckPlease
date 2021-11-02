import React, { useState } from 'react';

function AgregarGasto({ agregarGasto, grupo }) {
  const [gasto, setGasto] = useState({
    monto: '',
    detalle: '',
    persona: '',
  });

  //*
  const handleNuevoGasto = (e) => {
    setGasto({
      ...gasto,
      [e.target.name]: e.target.value,
    });
  };

  //*
  const handleAgregarGasto = (e) => {
    e.preventDefault();
    agregarGasto(gasto);
    setGasto('');
  };

  const handleDisableButton = () => {
    if (gasto.detalle?.length >= 2 && gasto.monto !== '') return false;
    return true;
  };

  return (
    <div>
      <form onSubmit={handleAgregarGasto}>
        <label>
          Monto
          <input
            type='number'
            name='monto'
            value={gasto.monto}
            onChange={handleNuevoGasto}
            className='px-1 mx-1 w-20 rounded-md border-2 border-gray-400'
          />
        </label>
        <label>
          Detalle
          <input
            type='text'
            name='detalle'
            value={gasto.detalle}
            onChange={handleNuevoGasto}
            className='px-1 mx-1 rounded-md border-2 border-gray-400'
          />
        </label>
        <label>
          Realizado por
          <select name='persona' className='capitalize'>
            {grupo.length > 1 &&
              grupo.map((persona) => (
                <option key={persona.id} className='capitalize' value={persona.nombre}>
                  {persona.nombre}
                </option>
              ))}
          </select>
        </label>
        <button type='submit' disabled={handleDisableButton()} className='p-1 bg-green-400 rounded-md'>
          Agregar
        </button>
      </form>
    </div>
  );
}

export default AgregarGasto;
