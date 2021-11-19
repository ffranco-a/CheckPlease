import React, { useState } from 'react';

function AgregarGasto({ agregarGasto, grupo, agregarPersona, categorias, setCategorias }) {
  const [gasto, setGasto] = useState({
    monto: 0,
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
    if (gasto.persona !== '' && !grupo.some((persona) => persona.nombre === gasto.persona)) agregarPersona(gasto.persona);
    setGasto({
      ...gasto,
      monto: 0,
      detalle: '',
    });
  };

  const handleDisableButton = () => {
    if (gasto.detalle?.length >= 2 && gasto.monto > 0) return false;
    return true;
  };

  return (
    <div>
      <form onSubmit={handleAgregarGasto}>
        <label>
          Realizado por
          <input
            type='text'
            name='persona'
            list='persona'
            value={gasto.persona}
            onChange={handleNuevoGasto}
            className='px-1 mx-1 rounded-md border-2 border-gray-400'
          />
        </label>
        <datalist id='persona' className='capitalize'>
          {grupo.length > 0 && grupo.map((persona, i) => <option key={i} value={persona.nombre} className='capitalize' />)}
        </datalist>

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
            list='detalle'
            value={gasto.detalle}
            onChange={handleNuevoGasto}
            className='px-1 mx-1 rounded-md border-2 border-gray-400'
          />
        </label>
        <datalist id='detalle' className='capitalize'>
          {categorias.length > 0 && categorias.map((categoria, i) => <option key={i} value={categoria.detalle} className='capitalize' />)}
        </datalist>

        <button type='submit' disabled={handleDisableButton()} className='p-1 bg-green-400 rounded-md'>
          Agregar
        </button>
      </form>
    </div>
  );
}

export default AgregarGasto;
