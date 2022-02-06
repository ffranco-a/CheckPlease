import React from 'react';

import check from '../static/images/landing-check.svg';

function CheckIcon() {
  return (
    <div className='w-6 h-6 grid place-items-center mr-2 animate-wiggle'>
      <img src={check} alt='' />
    </div>
  );
}

export default CheckIcon;
