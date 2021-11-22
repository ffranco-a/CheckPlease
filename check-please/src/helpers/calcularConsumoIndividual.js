import currency from 'currency.js';

const calcularConsumosIndividuales = (grupo, categorias) => {

  //* añado a todas las personas del grupo un objeto "comparte" donde guardaré todo lo que la persona consumió
  let comparte = {
    total: 0,
    categorias: [],
  };
  let grupoConConsumos = {
    ...grupo,
    personas: grupo.personas.map((persona) => ({ ...persona, comparte })),
  };

  //* recorro las categorias, y por cada una de ellas recorro su array de comparten.personas, y le sumo a cada persona el monto que le corresponde
  for (let i = 0; i < categorias.length; i++) {
    //* caso que a una categoria la hayan compartido todes
    if (categorias[i].todes) {
      grupoConConsumos.personas = grupoConConsumos.personas.map((persona) => ({
        ...persona,
        comparte: {
          total: currency(persona.comparte.total).add(categorias[i].montoIndividual).format(),
          categorias: [
            ...persona.comparte.categorias,
            {
              categoria: categorias[i].detalle,
              monto: categorias[i].monto.format(),
              montoIndividual: categorias[i].montoIndividual,
              compartidoEntre: categorias[i].comparten.cantidad,
            },
          ],
        },
      }));
    }

    //* caso contrario sólo se lo sumo a las personas que lo compartieron
    else {
      grupoConConsumos.personas = grupoConConsumos.personas.map((persona) => {
        if (!categorias[i].comparten.personas.includes(persona.nombre)) return persona;
        else {
          return {
            ...persona,
            comparte: {
              total: currency(persona.comparte.total).add(categorias[i].montoIndividual).format(),
              categorias: [
                ...persona.comparte.categorias,
                {
                  categoria: categorias[i].detalle,
                  monto: categorias[i].monto.format(),
                  montoIndividual: categorias[i].montoIndividual,
                  compartidoEntre: categorias[i].comparten.cantidad,
                },
              ],
            },
          };
        }
      });
    }
  }

  return grupoConConsumos;
};

export default calcularConsumosIndividuales;
