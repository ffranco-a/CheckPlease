import currency from 'currency.js';

const calcularGastosIndividuales = (grupo, gastos, montoIndividual) => {

  //* agrego a cada persona una propiedad "puso", donde sumaré el total de los gastos realizados por esa persona
  let grupoConGastos = {
    ...grupo,
    personas: grupo.personas.map((persona) => ({ ...persona, puso: 0 })),
  };

  //* recorro el array de gastos y sumo el monto a la persona correspondiente, en una propiedad llamada `puso`;
  for (let i = 0; i < gastos.length; i++) {
    
    //* encuentro el indice de la persona que debo modificar
    let indice = grupoConGastos.personas.findIndex((persona) => gastos[i].persona === persona.nombre);

    //* sumo el gasto
    grupoConGastos.personas[indice].puso = currency(grupoConGastos.personas[indice].puso).add(gastos[i].monto);
  }

  //* Ya con todos los gastos por persona sumados, calculo la diferencia entre lo que puso y lo que consumió. De paso formateo la propiedad "puso" para que no sea un objeto currency sino un valor legible.
  grupoConGastos.personas = grupoConGastos.personas.map((persona) => ({
    ...persona,
    debe: montoIndividual ? currency(montoIndividual).subtract(persona.puso).format() : currency(persona.comparte.total).subtract(persona.puso).format(),
    puso: currency(persona.puso).format(),
  }));

  return grupoConGastos;
};

export default calcularGastosIndividuales;
