import React from 'react';
import { useNavigate } from 'react-router-dom';

//? Components
import LandingButton from '../components/landing/LandingButton';
import Button from '../components/Button';

function Landing({ reunionTipoSalida, setReunionTipoSalida, todesCompartenTodo, setTodesCompartenTodo }) {
  const navigate = useNavigate();

  const disableButton = () => {
    if (typeof reunionTipoSalida === 'boolean' && typeof todesCompartenTodo === 'boolean') return false;
    return true;
  };

  return (
    <div className='display bg-medium w-screen min-h-screen tablet:flex tablet:flex-col tablet:justify-center'>
      <h1>Check Please</h1>

      <div className='animate-fadein my-6'>
        <p>¿Todes compartieron todo lo consumido?</p>
        <LandingButton
          texto='Sí'
          descripcion='Todes compartimos todo.'
          ejemplo='Dividir la cuenta en partes iguales.'
          active={todesCompartenTodo === true}
          onClick={() => setTodesCompartenTodo(true)}
        />
        <LandingButton
          texto='No'
          descripcion='Dividir la cuenta de acuerdo al consumo individual.'
          ejemplo='ej. Personas vegetarianas no deberían pagar por carne.'
          active={todesCompartenTodo === false}
          onClick={() => setTodesCompartenTodo(false)}
        />
      </div>

      {typeof todesCompartenTodo === 'boolean' ? (
        <div className='animate-fadein my-6'>
          <p>¿Se realizaron gastos previos?</p>
          <LandingButton
            texto='Sí'
            descripcion='Algunas personas ya compraron cosas.'
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
      ) : (
        <div className='invisible my-6'>
          <p>¿Se realizaron gastos previos?</p>
          <LandingButton
            descripcion='Algunas personas ya compraron cosas y hay que dividir esos gastos.'
            ejemplo='ej: Camila trajo bebida, Luciano trajo postre, etc.'
          />
          <LandingButton descripcion='No se realizaron gastos previos.' ejemplo='ej: Hay que pagar una cuenta en un restaurante.' />
        </div>
      )}

      <Button text='Continuar' disabled={disableButton()} onClick={() => navigate('/main')} />
    </div>
  );
}

export default Landing;
