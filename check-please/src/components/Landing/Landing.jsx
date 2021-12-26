import React from 'react';
import { Link } from 'react-router-dom';

//? Components
import LandingButton from './Elements/LandingButton';

function Landing({ reunionTipoSalida, setReunionTipoSalida, todesCompartenTodo, setTodesCompartenTodo }) {
  return (
    <div className='display bg-medium w-screen h-screen'>
      <h1>Check Please</h1>

      <div className='animate-fadein'>
        <p>¿Todes compartieron todo lo consumido?</p>
        <LandingButton
          texto='Sí'
          descripcion='Todes compartimos todo.'
          ejemplo='Hay que dividir la cuenta en partes iguales.'
          active={todesCompartenTodo === true}
          onClick={() => setTodesCompartenTodo(true)}
        />
        <LandingButton
          texto='No'
          descripcion='Dividir la cuenta de acuerdo al consumo.'
          ejemplo='ej. Personas vegetarianas no deberían pagar por carne.'
          active={todesCompartenTodo === false}
          onClick={() => setTodesCompartenTodo(false)}
        />
      </div>

      {typeof todesCompartenTodo === 'boolean' && (
        <div className='animate-fadein'>
          <p>¿Se realizaron gastos previos?</p>
          <LandingButton
            texto='Sí'
            descripcion='Algunas personas ya compraron cosas y hay que dividir esos gastos.'
            ejemplo='ej: Camila trajo bebida, Luciano trajo postre, etc.'
            active={reunionTipoSalida === true}
            onClick={() => setReunionTipoSalida(true)}
          />
          <LandingButton
            texto='No'
            descripcion='No se realizaron gastos previos.'
            ejemplo='ej: Hay que pagar una cuenta en un restaurante.'
            active={reunionTipoSalida === false}
            onClick={() => setReunionTipoSalida(false)}
          />
        </div>
      )}

      <Link to='/main'>
        <button>Continuar</button>
      </Link>
    </div>
  );
}

export default Landing;
