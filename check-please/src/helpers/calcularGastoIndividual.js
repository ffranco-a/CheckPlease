import currency from 'currency.js';

const calcularGastosIndividuales = (grupo, gastos, montoIndividual) => {
  //* agrego a cada persona una propiedad "puso", donde sumaré el total de los gastos realizados por esa persona
  let grupoConGastos = {
    ...grupo,
    personas: grupo.personas.map((persona) => ({ ...persona, puso: 0 })),
  };

  //* recorro el array de gastos y sumo el monto a la persona correspondiente
  for (let i = 0; i < gastos.length; i++) {
    //* encuentro el indice de la persona que debo modificar
    let indice = grupoConGastos.personas.findIndex((persona) => gastos[i].persona === persona.nombre);

    //* sumo el gasto
    grupoConGastos.personas[indice].puso = currency(grupoConGastos.personas[indice].puso).add(gastos[i].monto);
  }

  //* Ya con todos los gastos por persona sumados, calculo la diferencia entre lo que puso y lo que consumió. De paso formateo la propiedad "puso" para que no sea un objeto currency sino un valor legible.
  grupoConGastos.personas = grupoConGastos.personas.map((persona) => ({
    ...persona,
    debe: montoIndividual ? currency(montoIndividual).subtract(persona.puso).format() : currency(persona.comparte.total).subtract(persona.puso),
    puso: currency(persona.puso).format(),
  }));

  //* Finalmente ordeno el array de personas de acuerdo a cuánto debe poner cada une: primere quien debe poner más, y últime quien tiene que recibir más. Además, formateo la propiedad "debe" para que sea un valor legible.
  grupoConGastos.personas = grupoConGastos.personas.sort(sortPeopleByAmount);
  grupoConGastos.personas = grupoConGastos.personas.map((persona) => ({ ...persona, debe: persona.debe.format() }));

  return grupoConGastos;
};

function sortPeopleByAmount(personaA, personaB) {
  if (personaA.debe.intValue < personaB.debe.intValue) return 1;
  if (personaA.debe.intValue > personaB.debe.intValue) return -1;
  else return 0;
}

export default calcularGastosIndividuales;
