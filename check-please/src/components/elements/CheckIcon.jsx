import React from 'react';

import check from '../../static/images/landing-check.svg';

function CheckIcon({ size }) {
  return (
    <div className={`${size === 'small' ? 'w-4 h-4' : 'w-6 h-6 mr-2'} grid place-items-center animate-wiggle`}>
      <img src={check} alt='' />
    </div>
  );
}

export default CheckIcon;
