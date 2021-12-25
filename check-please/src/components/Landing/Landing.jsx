import React from 'react';
import { Link } from 'react-router-dom';

function Landing({ reunionTipoSalida, setReunionTipoSalida, todesCompartenTodo, setTodesCompartenTodo }) {
  return (
    <div>
      <h1>Check Please</h1>
      <p>¿Se realizaron gastos previos?</p>
      <input type='radio' id='reunion-si' name='reunion' value='si' />
      <label htmlFor='reunion-si'>Si</label>
      <input type='radio' id='reunion-no' name='reunion' value='no' />
      <label htmlFor='reunion-no'>No</label>

      <p>¿Todes compartieron todo lo consumido?</p>
      <input type='radio' id='compartir-si' name='compartir' value='si' />
      <label htmlFor='compartir-si'>Si</label>
      <input type='radio' id='compartir-no' name='compartir' value='no' />
      <label htmlFor='compartir-no'>No</label>

      <Link to='/main'>
        <button>Continuar</button>
      </Link>
    </div>
  );
}

export default Landing;
