import currency from 'currency.js';

const calcularConsumosIndividuales = (grupo, categorias) => {
  console.log('grupo y categorias ', grupo, categorias);

  //* añado a todas las personas del grupo un objeto "compartio" donde guardaré todo lo que la persona consumió
  let compartio = {
    total: 0,
    categorias: [],
  };
  let grupoConConsumos = {
    ...grupo,
    personas: grupo.personas.map((persona) => ({ ...persona, compartio })),
  };

  console.log('grupo con consumos: ', grupoConConsumos);

  //* recorro las categorias, y por cada una de ellas recorro su array de comparten.personas, y le sumo a cada persona el monto que le corresponde
  for (let i = 0; i < categorias.length; i++) {

    //* caso que a una categoria la hayan compartido todes
    if (categorias[i].todes) {
      grupoConConsumos = {
        ...grupoConConsumos,
        personas: grupoConConsumos.personas.map((persona) => ({
          ...persona,
          compartio: {
            total: currency(persona.compartio.total).add(categorias[i].montoIndividual).format(),
            categorias: [
              ...persona.compartio.categorias,
              { categoria: categorias[i].detalle, monto: categorias[i].monto.format(), montoIndividual: categorias[i].montoIndividual },
            ],
          },
        })),
      };
    }

    //* caso contrario

  }
  
  return grupoConConsumos;
};

export default calcularConsumosIndividuales;
