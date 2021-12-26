import React from 'react';

function Button({ text, onClick, disabled }) {
  return (
    <div
      onClick={!disabled ? onClick : undefined}
      className={`${
        disabled ? 'bg-dark text-opacity-50 bg-opacity-50 cursor-default' : 'bg-primary cursor-pointer shadow-md hover:bg-primaryLight'
      } w-max mt-10 ml-auto mr-28 py-3 px-8 grid text-xl place-items-center text-light rounded-lg transition-all duration-200`}>
      {text}
    </div>
  );
}

export default Button;
