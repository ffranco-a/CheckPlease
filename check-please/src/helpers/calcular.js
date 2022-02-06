import currency from 'currency.js';

//? importo los sub-helpers
import calcularTotalPorCategoria from './calcularTotalPorCategoria';
import calcularCuantasPersonas from './calcularCuantasPersonas';
import calcularGastoIndividual from './calcularGastoIndividual';
import calcularConsumoIndividual from './calcularConsumoIndividual';

const calcular = (reunionTipoSalida = false, todesCompartenTodo = false, grupo, gastos, categorias) => {

  const resultados = {
    reunionTipoSalida,
    todesCompartenTodo,
  };

  //* Calculo el total gastado, sumando en un reducer todos los gastos efectuados
  const totalGastado = gastos.reduce((acc, cur) => currency(acc).add(cur.monto), 0);
  resultados.total = currency(totalGastado).format();

  //* Divido el totalGastado en la cantidad de personas que hay en el grupo para obtener la división en partes iguales
  resultados.divisionPartesIguales = totalGastado.distribute(grupo.cantidad)[0].format();

  /*
   * A partir de ahora lo que devuelva va a depender de estos dos parámetros:
   /
   ? caso A : ¿todes comparten todo? ( división equitativa )
   *      1 : sí
   *      2 : no
   /
   ? caso B : ¿reunión tipo salida? ( sin gastos previos que computar )
   *      1 : sí
   *      2 : no
   / 
   * en sus cuatro combinaciones posibles,
   * siendo A1B1 la más sencilla (de hecho ya se realizaron los cálculos que hacen falta)
   * y A2B2 la más compleja (la razón por la que hice esta app) 
   */

  //* CASOS A1:
  if (todesCompartenTodo) {
    //* CASO A1B1 (todes comparten todo y no hay gastos previos que computar): se requiere una simple división en partes iguales, la cuál ya se hizo, así que la devuelvo
    if (reunionTipoSalida) return resultados;

    //* CASO A1B2 (todes comparten pero hay gastos individuales que computar): reformular el grupo para que cada persona tenga en su resultado cuánto debe
    resultados.grupo = calcularGastoIndividual(grupo, gastos, resultados.divisionPartesIguales);

    return resultados;
  } //* FIN CASOS A1.

  //* CASOS A2: Como no todes comparten todo, debo calcular por cada categoría cuánto se gastó, y luego revisar persona por persona qué consumió y qué no.
  else {
    //* Sumo los gastos por categoría (contemplo el caso que haya más de un gasto por categoría)
    const categoriasConMonto = calcularTotalPorCategoria(gastos, categorias);

    //* Establecer cuánta gente consumió cada categoría por separado
    const categoriasConCantidad = calcularCuantasPersonas(categoriasConMonto, grupo);

    //* Dividir el total que se gastó en esa categoría entre la cantidad de personas que la compartieron
    resultados.categorias = categoriasConCantidad.map((categoria) => ({
      ...categoria,
      montoIndividual: categoria.monto.distribute(categoria.comparten.cantidad)[0].format(),
    }));

    //* Por cada persona del grupo, calcular qué compartió y qué no, para saber cuánto debe poner
    let grupoConConsumos = calcularConsumoIndividual(grupo, resultados.categorias);

    //* CASO A2B2 : Si NO es una reunión de tipo salida, hay gastos individuales que restar a los montos obtenidos hasta el momento
    if (!reunionTipoSalida) {
      grupoConConsumos = calcularGastoIndividual(grupoConConsumos, gastos);
    }

    resultados.grupo = grupoConConsumos;

    return resultados;
  }
};

export default calcular;
