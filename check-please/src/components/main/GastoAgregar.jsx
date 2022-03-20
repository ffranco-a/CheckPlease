import React, { useState, useEffect } from 'react';
import currency from 'currency.js';
import CheckIcon from '../elements/CheckIcon';

function AgregarGasto({ agregarGasto, grupo, agregarPersona, categorias, setCategorias }) {
  const [disabledButton, setDisabledButton] = useState(true);
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
    agregarGasto({
      persona: gasto.persona.toLowerCase(),
      detalle: gasto.detalle.toLowerCase(),
      monto: currency(gasto.monto).format(),
    });
    if (gasto.persona !== '' && !grupo.personas.some((persona) => persona.nombre === gasto.persona.toLowerCase()))
      agregarPersona(gasto.persona.toLowerCase());
    setGasto({
      ...gasto,
      monto: '',
      detalle: '',
      persona: '',
    });
    document.getElementById('focus-me-on-submit').focus();
  };

  useEffect(() => {
    if (gasto.detalle?.length >= 2 && gasto.monto > 0) setDisabledButton(false);
    else setDisabledButton(true);
  }, [gasto.detalle?.length, gasto.monto]);

  return (
    <div className='box-border'>
      <form onSubmit={handleAgregarGasto} className='grid grid-cols-3-expenses'>
        <label className='custom-table-left-column custom-table-top-cell'>
          <span className='ml-2'>Realizado por</span>
          <div className='custom-table-cell custom-table-left-side h-9'>
            <input
              type='text'
              id='focus-me-on-submit'
              autoFocus
              name='persona'
              list='persona'
              value={gasto.persona}
              onChange={handleNuevoGasto}
              className='input-style w-full'
            />
          </div>
        </label>
        <datalist id='persona' className='capitalize'>
          {grupo.cantidad > 0 && grupo.personas.map((persona, i) => <option key={i} value={persona.nombre} className='capitalize' />)}
        </datalist>

        <label className='custom-table-center-column custom-table-top-cell'>
          <span className='ml-2'>Monto</span>
          <div className='custom-table-cell h-9'>
            <input type='number' name='monto' value={gasto.monto} onChange={handleNuevoGasto} className='input-style w-full' />
          </div>
        </label>

        <label className='custom-table-right-column custom-table-top-cell'>
          <span className='ml-2'>Detalle</span>
          <div className='custom-table-cell h-9'>
            <input type='text' name='detalle' list='detalle' value={gasto.detalle} onChange={handleNuevoGasto} className='input-style w-full' />
          </div>
        </label>
        <datalist id='detalle' className='capitalize'>
          {categorias.length > 0 && categorias.map((categoria, i) => <option key={i} value={categoria.detalle} className='capitalize' />)}
        </datalist>

        <button
          type='submit'
          disabled={disabledButton}
          className={`${disabledButton ? 'bg-primary' : 'bg-primary-light'} h-9 custom-table-right-side mt-auto grid place-items-center`}>
          {!disabledButton && <CheckIcon size='small' />}
        </button>
      </form>
    </div>
  );
}

export default AgregarGasto;
