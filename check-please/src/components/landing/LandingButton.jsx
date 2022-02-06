import React from 'react';

//? Components
import CheckIcon from '../elements/CheckIcon';

function LandingButton({ texto, descripcion, ejemplo, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${
        active ? 'bg-primary' : 'bg-dark'
      } w-11/12 max-w-lg mx-auto my-2 flex items-center py-4 pl-4 pr-2 text-light rounded-md shadow-md cursor-pointer transition-all duration-300`}>
      {active ? (
        <CheckIcon active={active} />
      ) : (
        <div className='w-6 h-6 grid place-items-center mr-2 animate-wiggle'>
          <div className='w-2 h-2 bg-primary rounded-full' />
        </div>
      )}
      <span className='font-bold text-lg ml-1 mr-auto tablet:text-xl tablet:ml-2'>{texto}</span>
      <span className='text-sm w-3/4 tablet:w-4/5 tablet:text-base'>
        {descripcion} <span className='text-gray-400 italic text-xs tablet:text-sm'>{ejemplo}</span>
      </span>
    </div>
  );
}

export default LandingButton;
