import currency from 'currency.js';

const calcularGastosIndividuales = (grupo, gastos) => {
  let grupoConGastos = { ...grupo };

  //* recorro el array de gastos y sumo el monto a la persona correspondiente, en una propiedad llamada `puso`;
  for (let i = 0; i < gastos.length; i++) {
    //* encuentro el indice de la persona que debo modificar
    let indice = grupoConGastos.personas.findIndex((persona) => gastos[i].persona === persona.nombre);

    //* pregunto si ya tiene gasto, si sí tiene, le sumo el nuevo gasto. Si no lo tiene, lo creo.
    grupoConGastos.personas[indice].puso
      ? (grupoConGastos.personas[indice].puso = currency(grupoConGastos.personas[indice].puso).add(gastos[i].monto))
      : (grupoConGastos.personas[indice].puso = currency(gastos[i].monto));
  }

  //* si lo dejo como quedó arriba, la persona en "puso" tiene un objeto tipo currency. Voy a formatearlo para que quede como un valor numérico legible.
  grupoConGastos.personas = grupoConGastos.personas.map((persona) => {
    if (persona.puso) {
      return {
        ...persona,
        puso: persona.puso.format(),
      };
    } else return persona;
  });

  return grupoConGastos;
};

export default calcularGastosIndividuales;
