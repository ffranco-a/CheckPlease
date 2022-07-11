import React from 'react';
import { useNavigate } from 'react-router-dom';

//? Components
import LandingButton from '../components/landing/LandingButton';
import Button from '../components/elements/Button';

function Landing({ reunionTipoSalida, setReunionTipoSalida, todesCompartenTodo, setTodesCompartenTodo }) {
  const navigate = useNavigate();

  const disableButton = () => {
    if (typeof reunionTipoSalida === 'boolean' && typeof todesCompartenTodo === 'boolean') return false;
    return true;
  };

  const handleSelectTodesComparten = (texto) => {
    if (texto === 'Sí') setTodesCompartenTodo(true);
    if (texto === 'No') setTodesCompartenTodo(false);
  };

  const handleSelectTipoReunion = (texto) => {
    if (texto === 'Sí') setReunionTipoSalida(true);
    if (texto === 'No') setReunionTipoSalida(false);
    window.scrollBy({ top: 1000, behavior: 'smooth' });
  };

  const handleContinuar = () => {
    navigate('/main');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  //* temporalmente mando directamente a los usuarios a la pantalla de carga de datos, hasta que la app funcione con todos los 4 modos
  React.useEffect(() => {
    setReunionTipoSalida(true);
    setTodesCompartenTodo(false);
    navigate('/main');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='display bg-medium w-screen min-h-screen tablet:flex tablet:flex-col tablet:justify-center'>
      <h1>Check Please</h1>

      <div className='animate-fadein my-6'>
        <p>¿Todes compartieron todo lo consumido?</p>
        <LandingButton
          texto='Sí'
          descripcion='Todes compartimos todo.'
          ejemplo='Se va a dividir la cuenta en partes iguales.'
          active={todesCompartenTodo === true}
          onClick={handleSelectTodesComparten}
        />
        <LandingButton
          texto='No'
          descripcion='Dividir la cuenta de acuerdo al consumo individual.'
          ejemplo='ej. Personas vegetarianas no deberían pagar gastos de carne.'
          active={todesCompartenTodo === false}
          onClick={handleSelectTodesComparten}
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
            onClick={handleSelectTipoReunion}
          />
          <LandingButton
            texto='No'
            descripcion='No se realizaron gastos previos.'
            ejemplo='ej: Hay que pagar una cuenta en un restaurante.'
            active={reunionTipoSalida === false}
            onClick={handleSelectTipoReunion}
          />
        </div>
      ) : (
        //* ↓ esto es invisible, únicamente ocupa el espacio de las preguntas mientras el usuario responde la primera pregunta
        <div className='invisible my-6'>
          <p>¿Se realizaron gastos previos?</p>
          <LandingButton
            descripcion='Algunas personas ya compraron cosas y hay que dividir esos gastos.'
            ejemplo='ej: Camila trajo bebida, Luciano trajo postre, etc.'
          />
          <LandingButton descripcion='No se realizaron gastos previos.' ejemplo='ej: Hay que pagar una cuenta en un restaurante.' />
        </div>
      )}

      <Button text='Continuar' disabled={disableButton()} onClick={handleContinuar} />
    </div>
  );
}

export default Landing;
