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
    <div>
      ¿Todes compartieron <span className='capitalize'>{categoria}</span>?<br />
      <label
        htmlFor={categoria + ' si'}
        className={`${
          todes === true ? 'bg-primary' : 'bg-complementary opacity-90'
        } m-1 p-1 rounded-lg transition-all hover:filter brightness-110`}>
        <input type='checkbox' disabled={disabled} checked={todes === true} name={categoria} id={categoria + ' si'} value='si' onChange={handleTodes} /> SI
      </label>
      <label
        htmlFor={categoria + ' no'}
        className={`${
          todes === false ? 'bg-primary' : 'bg-complementary opacity-90'
        } m-1 p-1 rounded-lg transition-all hover:filter-brightness-110`}>
        <input type='checkbox' disabled={disabled} checked={todes === false} name={categoria} id={categoria + ' no'} value='no' onChange={handleTodes} /> NO
      </label>
    </div>
  );
}

export default ConsumosSiONo;
