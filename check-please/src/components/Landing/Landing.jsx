import React from 'react';
import { Link } from 'react-router-dom';

//? Components
import LandingButton from './Elements/LandingButton';

function Landing({ reunionTipoSalida, setReunionTipoSalida, todesCompartenTodo, setTodesCompartenTodo }) {
  return (
    <div className='display bg-medium'>
      <h1>Check Please</h1>
      <p>¿Se realizaron gastos previos?</p>
      <LandingButton
        texto='Sí'
        descripcion='algunas personas ya compraron cosas y hay que dividir esos gastos'
        active={reunionTipoSalida === true}
        onClick={() => setReunionTipoSalida(true)}
      />
      <LandingButton
        texto='No'
        descripcion='no se realizaron gastos previos, hay que pagar una cuenta en un restaurante'
        active={reunionTipoSalida === false}
        onClick={() => setReunionTipoSalida(false)}
      />

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
