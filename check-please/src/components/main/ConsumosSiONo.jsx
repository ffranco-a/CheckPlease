import React from 'react';

function ConsumosSiONo({ categoria, todes, setTodes, handleSetTodes, disabled }) {
  //* función para
  const handleTodes = (e) => {
    if (categoria === 'Todo') {
      if (e.target.value === 'si') setTodes(true);
      if (e.target.value === 'no') setTodes(false);
    } else {
      handleSetTodes(e);
    }
  };

  return (
    <div className='text-center'>
      ¿Todes compartieron <span className='capitalize'>{categoria}</span>?<br />
      <label
        htmlFor={`${categoria} si`}
        className={`${todes === true ? 'bg-primary' : 'bg-primary-dark'} m-1 p-1 rounded-lg transition-all hover:filter brightness-110 mr-4`}>
        <input
          type='checkbox'
          disabled={disabled}
          checked={todes === true}
          name={categoria}
          id={`${categoria} si`}
          value='si'
          onChange={handleTodes}
          className={`${todes !== true ? 'invisible' : 'visible'} mr-2`}
        />
        SI
      </label>
      <label
        htmlFor={`${categoria} no`}
        className={`${todes === false ? 'bg-primary' : 'bg-primary-dark'} m-1 p-1 rounded-lg transition-all hover:filter-brightness-110`}>
        <input
          type='checkbox'
          disabled={disabled}
          checked={todes === false}
          name={categoria}
          id={`${categoria} no`}
          value='no'
          onChange={handleTodes}
          className={`${todes !== false ? 'invisible' : 'visible'} mr-2`}
        />
        NO
      </label>
    </div>
  );
}

export default ConsumosSiONo;
